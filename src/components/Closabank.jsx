import React from 'react'
import "./Closabank.css"

const Closabank = (props) => {

  const rightclosa = {
        backgroundImage: `url(${props.theimageback})`,
        width: '60%',
        height: '100%',
        zIndex: '1',
        position: 'absolute',
        top: '0',
        right: '0',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    }
  return (
    <>
      <section className="closabank">
        <div className="massiveleft">
        <div className="leftclosa">
              <p className="yourbank">{props.yourbank}</p>
              <h1 className="closa">{props.closa}</h1>
              <p className="think">{props.think}</p>
              <p className="onestop">{props.onestop}</p>
              <a href="" className="closalink">{props.closalink}</a>
           </div>
        </div>
        <div style = {rightclosa}></div>
      </section>
    </>
  )
}

export default Closabank