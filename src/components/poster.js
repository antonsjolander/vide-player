import React from 'react'

const Poster = ({image}) => {
    return(
        <div className="poster">
            <img src={image} alt=""/>
        </div>
    )
}

export default Poster;