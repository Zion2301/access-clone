import React from 'react'
import "./Mainfooter.css"

const Mainfooter = (props) => {
    
  return (
    <>
      <section className="footerdiv">
          <div className="topdiv">
            <div className="eachtop">
                <h2 className='aboutfooter'>ABOUT US</h2>
                <a href="" className="footerlinks">Our History</a>
                <a href="" className="footerlinks">Corporate Profile</a>
                <a href="" className="footerlinks">Corporate Governance</a>
                <a href="" className="footerlinks">Board and Management Team</a>
                <a href="" className="footerlinks">Corporate Philosophy</a>
                <a href="" className="footerlinks">Our Awards</a>
                <a href="" className="footerlinks">Our Businesses</a>
            </div>

            <div className="eachtop">
                <h2 className='aboutfooter'>CAREERS</h2>
                <a href="" className="footerlinks">Working at Access Bank</a>
                <a href="" className="footerlinks">Your Career</a>
                <a href="" className="footerlinks">Recruitment Process</a>
            </div>

            <div className="eachtop">
                <h2 className='aboutfooter'>CONTACT US</h2>
                <a href="" className="footerlinks">Agent Banking Details</a>
                <a href="" className="footerlinks">Biometrics Enrollment</a>
                <a href="" className="footerlinks">Branch and ATM Locator</a>
                <a href="" className="footerlinks">Branches with Wi-Fi</a>
                <a href="" className="footerlinks">My Access</a>
                <a href="" className="footerlinks">We Care</a>
            </div>

            <div className="eachtop">
                <h2 className='aboutfooter'>QUICK LINKS</h2>
                <a href="" className="footerlinks">Access Online</a>
                <a href="" className="footerlinks">Anti-Money Laundering</a>
                <a href="" className="footerlinks">Support Center</a>
                <a href="" className="footerlinks">Download Center</a>
                <a href="" className="footerlinks">Form M Rates</a>
                <a href="" className="footerlinks">Online Security Tips</a>
                <a href="" className="footerlinks">Scam Alert</a>
            </div>

            <div className="eachtop">
                <h2 className='aboutfooter'>YOU ARE...</h2>
                <a href="" className="footerlinks">An individual</a>
                <a href="" className="footerlinks">A Job Applicant</a>
                <a href="" className="footerlinks">A Woman</a>
                <a href="" className="footerlinks">A Company</a>
                <a href="" className="footerlinks">A Journalist</a>
                <a href="" className="footerlinks">A Teenager</a>
                <a href="" className="footerlinks">An Entrepeneur</a>
            </div>
          </div>

          <div className="footsocials">
            <div className="phones">
             {props.phone && <props.phone className='call'/>}
             <p className="digits">{props.digits}</p>
          </div>

          <div className="downloadapps">
            <p className="apps">{props.apps}</p>
              <img src={props.apple} alt="" />
              <img src={props.playstore} alt="" />
          </div>

          <div className="socials">
             <p className="apps">{props.we}</p>
             {props.twitter && <props.twitter className='call'/>}
             {props.facebook && <props.facebook className='call'/>}
             {props.insta && <props.insta className='call'/>}
             {props.in && <props.in className='call'/>}
          </div>
         </div>
      </section>
    </>
  )
}

export default Mainfooter