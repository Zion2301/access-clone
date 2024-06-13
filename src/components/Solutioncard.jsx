import React from 'react'
import "./Solutioncard.css"

const Solutioncard = (props) => {
  return (
      <>
        <div className="solutioncard">
            <img src={props.handshake} alt="" className='thehandshake'/>
            <div className="bluediv">
                 <h3 className="finance">{props.finance}</h3>
                 <div className="bluetext">
                    <p>{props.bluetext}</p>
                 </div>
                 <div className="solutionBtn">
                    <a href="" className="solutionwhitebtn">{props.solutionbtn}</a>
                 </div>
            </div>
        </div>
      </>
  )
}

export default Solutioncard