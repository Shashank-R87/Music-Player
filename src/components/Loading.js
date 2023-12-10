import React from 'react'
import loadingData from "../lottie/loading.json"
import Lottie from 'lottie-react'

function Loading() {

    return (
        <div>
            <Lottie animationData={loadingData} loop={true} width={250} height={250}/>
        </div>
    )
}

export default Loading
