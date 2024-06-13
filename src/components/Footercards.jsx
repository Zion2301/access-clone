import React from 'react'
import "./Footercards.css"

const Footercards = (props) => {
  return (
    <>
      <a href="" className="cardlink">
        {props.Icon && <props.Icon className='theicon'/>}
         <p className="cardlinktext">{props.cardlinktext}</p>
      </a>
    </>
  )
}

export default Footercards