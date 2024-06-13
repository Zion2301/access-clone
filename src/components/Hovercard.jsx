import React from 'react'
import "./Hovercard.css"

const Hovercard = (props) => {

    const cardstyle = {
        backgroundImage: `url(${props.lilimage})`,
        width: '100%',
        maxWidth: '400px',
        height: '350px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
        padding: '1rem',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        color: '#000'
    }
  return (
      <>
        <div style = {cardstyle}>
            <div className="innercarddiv">
                {props.Icon && <props.Icon className='iconstyle'/>}
                <p className="blurtext">{props.blurtext}</p>
                <div className="hiddencontent">
                    <p className="financialservices">{props.financialservices}</p>
                    <a href="" className="hiddenlink">{props.hiddenlink}</a>
                </div>
            </div>
        </div>
      </>
  )
}

export default Hovercard