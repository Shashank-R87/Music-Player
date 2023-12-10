import React from 'react'
import loadingData from "../lottie/loading.json"
import Lottie from 'react-lottie'

function Loading() {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: loadingData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <div>
            <Lottie options={defaultOptions} width={250} height={250}/>
        </div>
    )
}

export default Loading