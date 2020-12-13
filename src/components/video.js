import React, { useState, useRef } from 'react';

const Video = ({src, playing}) => {
    return(
        <div className="video__container">
            <video src={src ? src : ''} playsInline controls autoPlay={playing}></video>
        </div>
    )
}

export default Video;