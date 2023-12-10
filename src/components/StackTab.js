import React from 'react'

function StackTab({PageName}) {
    return (
        <div className='rounded-[10px] flex justify-center content-center bg-[#b8b8b8] mb-[5px]' style={{ width: "116px" }}>
            <h1 className='text-[#282828] text-[14px] py-[5px]' style={{ fontFamily: "ProductSans" }}>
                {PageName}
            </h1>
        </div>
    )
}

export default StackTab