import React from 'react'
import Button from '../components/Button'
import Tab from '../components/Tab'
import BackButton from '../components/BackButton'
import StackComponent from '../components/StackComponent'
import DescBox from '../components/DescBox'
import mainStack from '../data_structures/Stack'

function Desc() {
    return (
        <div>
            <h1 className='text-[#B8B8B8] text-[32px] font-bold absolute top-[90px] left-[639px]' style={{ fontFamily: "ProductSans" }}>Description Page</h1>
            <div className="absolute right-[50px] top-[40px]">
                <Tab PageName={"Desc Page"} />
            </div>
            <div className='absolute top-[597px] left-[679px] transition duration-150 ease-in-out hover:scale-[102%] active:scale-[98%]'>
                <Button buttoName={"Music Page"} routeName={"Music"} />
            </div>
            <div className='w-[32px] h-[32px] absolute top-[40px] left-[50px] transition duration-150 ease-in-out hover:scale-[110%] active:scale-[98%]'>
                <BackButton routeName={"Intro"} />
            </div>
            <div>
                <StackComponent StackList={mainStack.stack} />
            </div>
            <DescBox height={320} left={82} head={"Stacks"} content={"Stacks are being used for page navigation, when a page is opened, the page is pushed into the stack and when the back button is clicked, the top most item is popped, thus returning back to the previous page."} />
            <DescBox height={320} left={435} head={"Arrays"} content={"The music is returned by the CMS in the form of an array. This array contains the music details (basically objects stored in an array). Music is displayed in the left side of the music player."} />
            <DescBox height={320} left={785} head={"Queues"} content={"The music queue is made by the user by selecting and adding the music from the available music. The music starts playing in the queue’s order when the play button is clicked. The queue can found in the right side of the music player."} />
            <DescBox height={154} left={1135} head={"Linked Lists"} content={"The  queue being created is using a linked list."} />
        </div>
    )
}

export default Desc