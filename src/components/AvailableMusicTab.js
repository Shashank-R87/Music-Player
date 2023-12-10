import React from 'react'
import AddButton from './AddButton'

function AvailableMusicTab({ songname, onClick }) {
    return (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }} className='w-[98%] px-[20px] py-[15px] bg-[#282828] rounded-[10px] border-solid border-[#8B8B8B] border-[2px] mb-[5px] mr-[2px]'>
            {
                songname?.length >= 10 ?
                    <h1 className='text-[#CACACA] text-[20px]' style={{ fontFamily: "ProductSans" }}>{songname?.slice(0, 10)}...</h1>
                    :
                    <h1 className='text-[#CACACA] text-[20px]' style={{ fontFamily: "ProductSans" }}>{songname}</h1>
            }
            <AddButton onClick={onClick} />
        </div>
    )
}

export default AvailableMusicTab