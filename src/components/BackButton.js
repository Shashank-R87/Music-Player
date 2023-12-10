import React from 'react'
import backImage from '../assets/back.png'
import { useNavigate } from 'react-router-dom'
import mainStack from '../data_structures/Stack';

function BackButton({ routeName }) {

    let navigate = useNavigate();

    return (
        <button onClick={() => {mainStack.stack_pop();navigate(`/${routeName}`,{replace: true}); window.localStorage.removeItem("Main Queue") }}>
            <img alt='Back Button' src={backImage} />
        </button>
    )
}

export default BackButton