import React from 'react'
import { useNavigate } from 'react-router-dom'
import mainStack from '../data_structures/Stack';

function Button({ buttoName, routeName }) {

    let navigate = useNavigate();

    return (
        <button onClick={()=>{mainStack.stack_push(buttoName);navigate(`/${routeName}`,{replace: true})}}>
            <div className='bg-[#B8B8B8] rounded-[10px] flex justify-center content-center px-[52px] py-[11px]'>
                <h1 className='text-[#282828] text-16 font-normal' style={{fontFamily: "ProductSans"}}>{buttoName}</h1>
            </div>
        </button>
    )
}

export default Button