import React from 'react'
import "./Accessmore.css"

const Accessmore = (props) => {
  return (
    <>
      <div className="mainDiv">
         <h1 className="accessmorehead">{props.accessmorehead} <span className='lightershi'>{props.span}</span></h1>
         <div className="accesstext">{props.accesstext}</div>
      </div>
    </>
  )
}

export default Accessmore