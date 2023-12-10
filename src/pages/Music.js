import React, { useEffect, useState } from 'react'
import BackButton from '../components/BackButton'
import AvailableMusicTab from '../components/AvailableMusicTab'
import Loading from "../components/Loading"
import mainArray from '../data_structures/Array';
import QueuedMusic from '../components/QueuedMusic';
import mainQueue from '../data_structures/QueueLinkedList';
import SampleImage from "../assets/SampleImage.png"

import AudioPlayer from 'react-h5-audio-player';
import '../css/Player.css'

function Music() {

  const enqueue = (element) => {
    let newQueue = [...queue];
    mainQueue.extenqueue(element);
    newQueue.push(element);
    setqueue(newQueue);
  }

  const dequeue = () => {
    let newQueue = [...queue];
    mainQueue.extdequeue();
    newQueue.shift();
    setqueue(newQueue);
  }

  const [queue, setqueue] = useState([]);

  const music_url = "https://4z1sx0c3.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%22musics%22%5D%7B%0A++music_name%2C%0A++artist_name%2C%0A++_id%2C%0A++%22image_src%22%3Amusic_image.asset-%3Eurl%2C%0A++%22audio_src%22%3Aaudio.asset-%3Eurl%0A%7D";

  const [gotMusic, setgotMusic] = useState(false)
  const [availableMusic, setavailableMusic] = useState([]);

  const getMusic = async () => {
    setgotMusic(false);
    await fetch(music_url)
      .then((response) => response.json())
      .then((data) => {
        setavailableMusic(data.result);
        setTimeout(() => {
          setgotMusic(true)
        }, 1000)
      })
      .catch((error) => { alert(error) })
  }

  useEffect(() => {
    getMusic();
  }, [])

  useEffect(() => {
    mainArray.placeArray(availableMusic);
  }, [availableMusic])

  return (
    <div>
      <div className='bg-[#2F2F2F] absolute top-0 left-0 w-[271px] h-[586px] flex-col justify-center p-[30px]'>
        <h1 className='text-[#B8B8B8] text-[24px] mb-[20px]' style={{ fontFamily: "ProductSans" }}>Available Songs</h1>
        <div>{
          !gotMusic ?
            <div className='' style={{ display: "flex", justifyContent: 'center', alignItems: 'center' }}>
              <Loading />
            </div>
            :
            <div className='h-[480px] overflow-y-scroll'>
              {
                availableMusic?.map((song, index) =>
                  <AvailableMusicTab songname={song.music_name} key={song._id} onClick={() => { enqueue(mainArray.returnArray()[index]) }} />
                )
              }
            </div>}
        </div>
      </div>
      <div className='bg-[#2F2F2F] absolute top-0 right-0 w-[271px] h-[586px] flex-col justify-center p-[30px]'>
        <div style={{ display: "flex", justifyContent: 'space-between', alignItems: 'center' }}>
          <h1 className='text-[#B8B8B8] text-[24px] mb-[20px]' style={{ fontFamily: "ProductSans" }}>Queued Songs</h1>
        </div>
        <div>{
          <div className='h-[480px] overflow-y-scroll'>
            {
              queue?.map((song, index) =>
                <QueuedMusic songname={song.music_name} key={song._id} index={index} onClick={() => { dequeue() }} />
              )
            }
          </div>
        }
        </div>
      </div>
      <div className='bg-[#3D3D3D] absolute bottom-0 left-0 w-[100%] h-[155px]' style={{ display: "flex", justifyContent: 'center', alignItems: 'center', gap: 30 }}>
        {/* <div className='transition duration-150 ease-in-out hover:scale-[105%] active:scale-[98%]'>
          <PlayButton onClick={()=>{setPlaying(!playing)}}/>
        </div>
        <div className='transition duration-150 ease-in-out hover:scale-[105%] active:scale-[98%]'>
          <NextButton onClick={()=>{dequeue()}}/>
        </div> */}
        <AudioPlayer
          style={{
            paddingLeft:40,
            paddingRight:40,
            paddingBottom:20,
            paddingTop:20,
            backgroundColor: "#3D3D3D",
            boxShadow: 'none',
          }}
          showSkipControls
          customAdditionalControls={[]}
          autoPlay={false}
          autoPlayAfterSrcChange
          src={queue?.length === 0 ? '' : queue[0]?.audio_src}
          loop={false}
          onClickNext={() => { dequeue() }}
          onEnded={() => { dequeue() }} />
      </div>
      <div className='absolute top-[30px] left-[301px] transition duration-150 ease-in-out hover:scale-[110%] active:scale-[98%]'>
        <BackButton routeName={"Desc"} />
      </div>
      {
        queue?.length > 0 ?
          <div className='absolute top-[159px] left-[668px]' style={{ display: "flex", flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10 }}>
            <img alt='Music Thumbnail' className='rounded-[20px]' style={{ width: 200, height: 200 }} src={queue[0]?.image_src} />
            <h1 className='text-[#ffffff] text-[28px]' style={{ fontFamily: "ProductSans" }}>{queue[0]?.music_name}</h1>
            <h1 className='text-[#bbbbbb] text-[18px] mt-[-10px]' style={{ fontFamily: "ProductSans" }}>{queue[0]?.artist_name}</h1>
          </div>
          :
          <div className='absolute top-[159px] left-[668px]' style={{ display: "flex", flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10 }}>
            <img alt='Music Thumbnail' className='rounded-[20px]' style={{ width: 200, height: 200 }} src={SampleImage} />
            <h1 className='text-[#ffffff] text-[28px]' style={{ fontFamily: "ProductSans" }}>Song Name</h1>
            <h1 className='text-[#bbbbbb] text-[18px] mt-[-10px]' style={{ fontFamily: "ProductSans" }}>Artist Name</h1>
          </div>
      }
    </div>
  )
}

export default Music