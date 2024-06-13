import React from 'react'
import "./Newsstrip.css"

const Newsstrip = (props) => {
  return (
    <>
      <div className='newsstrip'>
          <div className="latestnews">
            <p className="latest">{props.latest}</p>
            <span className='orangeSlash'></span>
            <div className="white"></div>
          </div>
          <div className="multicolored"></div>
      </div>
    </>
  )
}

export default Newsstrip