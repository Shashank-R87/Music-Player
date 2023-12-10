import React from 'react'

function Tab({ PageName }) {
    return (
        <div className='rounded-[10px] flex justify-center content-center border-solid border-[#b8b8b8] border-[2px]' style={{width: "100px"}}>
            <h1 className='text-[#b8b8b8] text-[12px] py-[5px]' style={{fontFamily: "ProductSans"}}>
                {PageName}
            </h1>
        </div>
    )
}

export default Tab