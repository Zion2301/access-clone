import React from 'react'
import "./Greencard.css"

const Greencard = (props) => {
  return (
    <>
      <div className="card">
         {props.Icon && <props.Icon className='icons'/>}
         <h4 className="account">{props.account}</h4>
         <p className="acctext">{props.acctext}</p>
      </div>
    </>
  )
}

export default Greencard