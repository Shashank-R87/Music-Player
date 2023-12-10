import React from 'react'
import StackTab from './StackTab'

function StackComponent({ StackList }) {
    return (
        <div className='border-[2px] border-solid border-[#b8b8b8] w-[150px] h-[200px] rounded-[10px] absolute bottom-[40px] right-[50px]'>
            <h1 className='text-[#b8b8b8] text-[16px] absolute top-[25px] left-[34px]' style={{ fontFamily: "ProductSans" }}>Stack Items</h1>
            <div className='absolute top-[55px] left-[17px]'>
                {
                    StackList.map((i) =>
                        <StackTab PageName={i} />
                    )
                }
            </div>
        </div>
    )
}

export default StackComponent