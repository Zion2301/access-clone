import React from 'react'
import "./Iconsmany.css"

const Iconsmany = (props) => {
  return (
    <>
      <div className="eachicon">
        {props.Icon && <props.Icon className='largeicon'/>}
        <p className="icontext">{props.icontext}</p>
      </div>
    </>
  )
}

export default Iconsmany