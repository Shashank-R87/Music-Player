import React from 'react'
import minus from "../assets/minus.png"

function RemoveButton({ onClick }) {
    return (
        <button onClick={onClick}>
            <img alt='Add Button' className='transition duration-150 ease-in-out hover:scale-[102%] active:scale-[98%]' style={{ width: 24, height: 24 }} src={minus} />
        </button>
    )
}

export default RemoveButton