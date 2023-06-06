import Button from "./Button";

import React from 'react'

function CardBody(props) {
  return (
    <div>
        <h5>{props.name}</h5>
        <h5>{props.price}</h5>
        <h5>{props.tags}</h5>
        <Button />
    </div>
  )
}

export default CardBody