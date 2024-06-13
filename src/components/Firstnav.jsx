import React from 'react'
import "./Firstnav.css"


const Firstnav = (props) => {
  return (
     <>
        <div className="firstnavbar">
            {props.menu && <props.menu className='firstmenu'/>}
            <div className="leftLinks">
                <a href="" className="about">{props.about}</a>
                <a href="" className="about">{props.bank}</a>
                <a href="" className="about">{props.investor}</a>
                <a href="" className="about">{props.media}</a>
                <a href="" className="about">{props.careers}</a>
                <a href="" className="about">{props.branch}</a>
                <a href="" className="help">{props.help}</a>
            </div>
            <div className="rightlink">
                <a href="" className="about">{props.country}</a>
                <img src={props.flag} alt="" />
            </div>
        </div>
     </>
  )
}

export default Firstnav