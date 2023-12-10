import React from 'react'
import plus from "../assets/plus.png"

function AddButton({ onClick }) {
  return (
    <button onClick={onClick}>
      <img alt='Add Button' className='transition duration-150 ease-in-out hover:scale-[102%] active:scale-[98%]' style={{ width: 24, height: 24 }} src={plus} />
    </button>
  )
}

export default AddButton