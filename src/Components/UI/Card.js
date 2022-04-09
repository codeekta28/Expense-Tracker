import React from 'react'
import "./Card.css"
// better to put the space after card className so two classes have some space between them
function Card(props) {
    const classes="card "+ props.className
  return (
    <div className={classes}>{props.children}</div>
  )
}

export default Card