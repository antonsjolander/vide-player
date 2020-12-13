import React, { useState, useRef } from 'react';
import Poster from './poster' 

const Posters = ({data, playVideo}) => {
    return(
        <div 
            className="posters"
        >
            {data && data.map(item => 
                <Poster onClick={playVideo} key={item.id} {...item} />    
            )}
        </div>
    )
}

export default Posters;