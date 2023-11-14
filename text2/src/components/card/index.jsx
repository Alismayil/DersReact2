import React from 'react'
import './card.css'

const Card = ({image,text,price,rating}) => {
  return (
    <>
        <div className='card'>
            <div className='cardimg'>
                <img src={image}></img>
            </div>
            <div className='cardContent'>
        <h1>{text}</h1>
        <span>{price}</span>
        <p>{rating}</p>

            </div>
        </div>
    </>
  )
}

export default Card