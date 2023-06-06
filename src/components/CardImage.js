import React from 'react'

function CardImage(props) {
  return (
    <div>
        <img src={props.image} className='card-img-top' alt="..."/>
    </div>
  )
}

export default CardImage