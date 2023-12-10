import React from 'react'

function DescBox({ height, left, head, content }) {
  return (
    <div className='w-[315px] border-solid border-[2px] border-[#b8b8b8] absolute top-[200px] rounded-[10px] flex-col py-[25px] px-[30px]' style={{ height: height, left: left }}>
      <h1 className='text-[28px] text-[#b8b8b8] font-bold' style={{ fontFamily: "ProductSans" }}>{head}</h1>
      <p className='text-[18px] text-[#b8b8b8]' style={{ fontFamily: "ProductSans" }}>
        {content}
      </p>
    </div>
  )
}

export default DescBox