import React from 'react'
import "./Secondnavbar.css"

const Secondnavbar = (props) => {
  return (
    <>
      <div className="secondnav">
        <div className="leftnav">
            <img src={props.logo} alt="" className='logo'/>
            <a href="" className="home">{props.home}</a>
            <a href="" className="home">{props.personal}</a>
            <a href="" className="home">{props.business}</a>
            <a href="" className="home">{props.corporate}</a>
            <a href="" className="home">{props.private}</a>
            <a href="" className="home">{props.ways}</a>
            <a href="" className="home">{props.contact}</a>
            <a href="" className="home">{props.am}</a>
        </div>
        <div className="rightnav">
           <button className="search">
           <span className='searchtext'> {props.search}</span>
             {props.magnify && <props.magnify className='magnify'/>}
           </button>
           
            <div className="internetbank">  {props.internet && <props.internet className='internet'/>}<span className='internettext'>{props.internetbank}</span></div>
        </div>
      </div>
    </>
  )
}

export default Secondnavbar