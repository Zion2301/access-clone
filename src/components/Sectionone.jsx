import React from 'react'
import "./Sectionone.css"

const Sectionone = (props) => {
     const divstyle = {
        backgroundImage: `url(${props.backgroundimage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '100vh'
     }
  return (
     <>
       <div style = {divstyle}>
        <div className='titlestyle'>
            <div className="morestyle">
            <h1 className="title">{props.title}</h1>
            <p className="uncover">{props.uncover}</p>
            <div className="moretext">{props.text}</div>
            <button className="accessmore">{props.accessmore}</button>
            </div>
        </div>
       </div>
     </>
  )
}

export default Sectionone