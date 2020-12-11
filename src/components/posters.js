import React, { useState, useRef } from 'react';
import Poster from './poster' 

const Posters = ({arr}) => {
    return(
        <div className="posters">
            {arr.map(item => 
                <Poster key={item.id} {...item} />    
            )}
        </div>
    )
}

export default Posters;