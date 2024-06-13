import React from 'react'
import "./Calculatorsection.css"

const Calculatorsection = (props) => {
  return (
    <>
      <section className='maincalc'>
        <div className="innercalc">
           <div className="leftcalc">
              <div className="leftfirstcalc">
                <h2 className="headercalc">{props.headercalc}</h2>
                <p className="textcalc">{props.textcalc}</p>
                <div className="linkdiv">
                    {props.Icon && <props.Icon className='warning'/>}
                    <p className="terms">{props.termscond}</p>
                </div>
              </div>
              <div className="rightcalc">
              <p className="salarytinz">{props.salary}</p>
              <div className="roundthing">
                <div className="loandrag">
                <p className="loan">{props.loan}</p>
                <div className="dot">
                </div>
                </div>
              </div>
           </div>

           <div className="floatcalc">
              <div className="innerfloatcalc">
                  <div className="eligibleloan">{props.eligibleloan}</div>
                  <p className="none">{props.none}</p>
                  <p className="payday"><span className="tenor">{props.tenor}</span>  {props.payday}</p>
                  <a href="" className="instant">{props.instant}</a>
              </div>
           </div>
           </div>
        </div>
      </section>
    </>
  )
}

export default Calculatorsection