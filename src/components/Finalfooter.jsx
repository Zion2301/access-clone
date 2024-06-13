import React from 'react'
import "./Finalfooter.css"

const Finalfooter = (props) => {
  return (
    <>
      <div className="finalfooter">
        <div className="firstdiv">
        <p className="firstfinaltext">{props.copyright}</p>
        </div>

        <div className="finallinks">
            <a href="" className="accessible">{props.accessibility}</a>
            <a href="" className="accessible">{props.privacy}</a>
            <a href="" className="accessible">{props.use}</a>
            <a href="" className="accessible">{props.whistle}</a>
        </div>

        <img src={props.finallogo} alt=""/>
      </div>
      <div className="chatbot">
        <p className="talk">{props.talk}</p>
        {props.icontalk &&<props.icontalk className='tie'/>}
      </div>
    </>
  )
}

export default Finalfooter