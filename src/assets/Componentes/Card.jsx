import React from 'react'
import "./Card.css"

const Card = ({lang ,img,fcolor,scolor }) => {
  return (
    
    <>
    <div className='card' style={{
        background: `linear-gradient(to left, ${fcolor}, ${scolor})`
    }}>
    <img src={img} alt="perrito" />
    <h3>{lang}</h3>
    </div>
    

    </>
  )
}

export default Card
