import React, { useRef, useState } from 'react'

const Poster = ({image, video, name, description, onClick}) => {
    const [ move, setMove ] = useState(false)
    const [ style , setStyle ] = useState({})
    const posterRef = useRef(null)

    const mouseHandler = (e) => {
        const width = posterRef.current.offsetWidth
        const heigth = posterRef.current.offsetHeight
        const x = Math.floor(e.nativeEvent.clientX)
        const y = Math.floor(e.nativeEvent.clientY)
        const rightSpace = window.innerWidth - x
        const bottomSpace = window.innerHeight - y
        
        setStyle({
            left: rightSpace > width ? `${x}px` : `${x - width}px`,
            top: bottomSpace > heigth ? `${y}px` : `${y - heigth}px`,
        })
    }

    const mouseEnter = () => {
        setMove(true)
    }

    const mouseLeave = () => {
        setMove(false)
    }

    const clickHandler = (e) => {
        e.preventDefault()
        onClick(video)
    }

    return(
        <a
            onMouseMove={mouseHandler} 
            onMouseLeave={mouseLeave}
            onMouseEnter={mouseEnter}
            onClick={clickHandler} 
            className="poster"
            href={video}
            aria-label={`play video ${name}`}
        >
            <img className="poster__image" src={image} alt={`video poster for ${name}`}/>
            <div className="poster__name">{name}</div>
            <div
                ref={posterRef}
                className={`poster__description ${move ? 'show' : ''}`}
                aria-label={'description'}
                style={style}
            >
                {description}
            </div>
        </a>
    )
}

export default Poster;