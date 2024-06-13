import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Firstnav from './components/Firstnav'
import nigeria from "./assets/nigeria.svg"
import Secondnavbar from './components/Secondnavbar'
import accesslogo from "./assets/accesslogo.png"
import Sectionone from './components/Sectionone'
import amex from "./assets/amex.jpg"
import Greencard from './components/Greencard'
import Newsstrip from './components/Newsstrip'
import { GoPersonAdd } from "react-icons/go";
import { PiCardsBold } from "react-icons/pi";
import { FaCoins } from "react-icons/fa";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import Accessmore from './components/Accessmore'
import Iconsmany from './components/Iconsmany'
import { IoChevronBackSharp } from "react-icons/io5";
import { BsHandIndexThumb } from "react-icons/bs";
import { FiMonitor } from "react-icons/fi";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { LiaCcAmex } from "react-icons/lia";
import { IoChevronForwardSharp } from "react-icons/io5";
import Calculatorsection from './components/Calculatorsection'
import { PiWarningCircle } from "react-icons/pi";
import bills from "./assets/bills.png";
import Hovercard from './components/Hovercard';
import { AiTwotoneGold } from "react-icons/ai";
import manbank from "./assets/manbank.png"
import phones from "./assets/phones.png"
import Closabank from './components/Closabank'
import closaadv from "./assets/closaadv.jpeg"
import Solutioncard from './components/Solutioncard'
import handshake from './assets/handshake.png'
import growingbusiness from "./assets/growingbusiness.png"
import sustainablebanking from "./assets/sustainablebanking.png"
import Footercards from './components/Footercards'
import { BsBuildingCheck } from "react-icons/bs";
import { RxPerson } from "react-icons/rx";
import { GoGift } from "react-icons/go";
import { BsPiggyBank } from "react-icons/bs";
import { GiWhistle } from "react-icons/gi";
import Mainfooter from './components/Mainfooter'
import { FiPhone } from "react-icons/fi";
import appstore from "./assets/appstore.png"
import playstore from "./assets/playstore.png"
import { FaTwitter } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Finalfooter from './components/Finalfooter'
import finallogo from "./assets/finallogo.png"
import { FaUserTie } from "react-icons/fa";
import { MdOutlineMenu } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { IoLockClosedOutline } from "react-icons/io5";

function App() {
  

  return (
    <>
       <Firstnav about = "About Us"  bank = "Sustainable Banking" investor = "Investor Relations" media = "Media" careers = "Careers" branch = "Branch & ATM Locator" help = "HELP" country = "Country Locations" flag = {nigeria} menu = {MdOutlineMenu}/>

       <Secondnavbar logo = {accesslogo} home = "Home" personal = "Personal" business = "Business" corporate = "Corporate" private = "Private" ways = "Ways to Bank" contact = "Contact Us" am = "I am..." search = "Search..." internetbank = "Internet Banking" magnify = {CiSearch} internet = {IoLockClosedOutline}/>

       <Sectionone backgroundimage = {amex}  title = "AMERICAN EXPRESS IS HERE" uncover = "Uncover more rewarding ways to spend quality time" text = "American Express® is a registered trademark of American Express. Cards are issued by Access Bank plc pursuant to a license from American Express. Terms and conditions apply." accessmore = "access more"/>

       <section className='firstsection'>
        <div className="sectiondiv">
        <Greencard account = "Open an account." acctext = "Open an account and open your world to more" Icon = {GoPersonAdd}/>
        <Greencard account = "Cards" acctext = "Cards you can use anywhere for all your financial..." Icon = {PiCardsBold}/>
        <Greencard account = "Quick Loans" acctext = "Need Quick cash for Quick fixes? See how we can help." Icon = {FaCoins}/>
        <Greencard account = "Money Transfer" acctext = "Reliable, safe and secure ways to send and recieve money." Icon = {FaMoneyBillTransfer}/>
        </div>
       </section>

       <Newsstrip latest = "LATEST NEWS" />
       
       <Accessmore accessmorehead = "access more" span = "ways to bank" accesstext = "The less time you spend in a bank, the more time you have for yourself. Choose from a variety of easy and secure ways to manage your money on-the-go."/>

       <div className="iconssection">
            <Iconsmany Icon = {IoChevronBackSharp}/>
            <Iconsmany Icon = {BsHandIndexThumb} icontext = "*901# Banking"/>
            <Iconsmany Icon = {FiMonitor} icontext ="Online Banking"/>
            <Iconsmany Icon = {IoPhonePortraitOutline} icontext = "Mobile Banking"/>
            <Iconsmany Icon = {LiaCcAmex} icontext = "American Express Cards"/>
            <Iconsmany Icon = {BsHandIndexThumb} icontext = "*901# Banking"/>
            <Iconsmany Icon = {FiMonitor} icontext ="Online Banking"/>
            <Iconsmany Icon = {IoChevronForwardSharp}/>
       </div>

       <Calculatorsection headercalc = "Payday Loan Calculator" textcalc = "Your financial needs are important to us. We know that some emergencies arise before payday and you may be low on cash. With Payday Loan by Access, you can borrow money and pay back at the agreed time." Icon = {PiWarningCircle} termscond = "*Terms and Conditions Apply" salary = "What's your monthly salary?" loan = "0N"  eligibleloan = "Eligible Loan Amount" none = "0N" tenor = "Tenor: " payday = "Your next pay day or 30-days, whichever comes first" instant = "Get Instant Loan Now"/>

       <Accessmore accessmorehead = "access more" span = "banking services" accesstext = "Whether it's your child's first savings account, your personal savings account, your first retirement plan or a business loan, we offer personal and corporate banking products and services tailored to meet your needs." className='accessgreen'/>

       <div className="slidingCards">
        
           <Hovercard lilimage = {bills} Icon = {AiTwotoneGold} blurtext = "Online Banking" financialservices = "Access our financial services online anywhere and with any device." hiddenlink = "access more" imagelink = "https://www.accessbankplc.com/getmedia/82ba4a3c-63…c89-a1d8-b81b4995b994/t-bills-online.svg?ext=.svg"/>

           <Hovercard lilimage = {manbank} Icon = {AiTwotoneGold} blurtext = "American Express Cards" financialservices = "The AMEX gold and platinum cards are dual currency cards" hiddenlink = "access more" imagelink = "https://www.accessbankplc.com/getmedia/82ba4a3c-63…c89-a1d8-b81b4995b994/t-bills-online.svg?ext=.svg"/>

           <Hovercard lilimage = {phones} Icon = {IoPhonePortraitOutline} blurtext = "Mobile Banking" financialservices = "Mobile banking is our banking-on-the-go service. It makes banking accessible, easier, faster and secure." hiddenlink = "access more" imagelink = "https://www.accessbankplc.com/getmedia/82ba4a3c-63…c89-a1d8-b81b4995b994/t-bills-online.svg?ext=.svg"/>
       </div>


       <Closabank yourbank = "your bank is" closa = "CLOSA" think = "than you think." onestop = "With our one stop agency banking, you can now carry out banking transactions like." closalink = "access more" theimageback = {closaadv} />

       <section className="exploremore">
       <Accessmore accessmorehead = "explore more" span = "than banking" accesstext = "Whether it's your child's first savings account, your personal savings account, your first home or retirement plan, we offer personal banking products and services" className='accessgreen'/>
       <div className="morebanking">
          <Solutioncard handshake = {handshake} finance = "Financing" bluetext = "Based on specific requirements to bridge funding gaps with flexible repayment structures." solutionbtn = "access more"/>

          <Solutioncard handshake = {growingbusiness} finance = "Equipping Growing Businesses" bluetext = "We believe in growth and sustainability and we want to grow your business with you. See how we can help." solutionbtn = "access more"/>

          <Solutioncard handshake = {sustainablebanking} finance = "Sustainable Banking" bluetext = "For over two decades, we have been taking actionable steps towards sustainability in a rapidly changing world." solutionbtn = "access more"/>
       </div>

       </section>
       <div className="multicolored"></div>

       <section className="yetmorecards">
          <h4 className="tools">Access more helpful tools</h4>
          <div className="cardlinks">
            <Footercards Icon = {BsHandIndexThumb} cardlinktext = "*901# Banking"/>
            <Footercards Icon = { BsBuildingCheck} cardlinktext = "ATM and Branch Locator"/>
            <Footercards Icon = {RxPerson} cardlinktext = "HELP"/>
            <Footercards Icon = {GoGift} cardlinktext = "More Xtravaganza"/>
            <Footercards Icon = {BsPiggyBank} cardlinktext = "Instant Savings Account"/>
            <Footercards Icon = {GiWhistle} cardlinktext = "Whistle Blower"/>
          </div>
       </section>

       <Mainfooter digits = "0201 280 2500,07003000000" phone = {FiPhone} apple = {appstore} playstore = {playstore} apps = "Access Mobile Apps" twitter = {FaTwitter} facebook = {FaFacebookSquare} insta = {FaInstagram} in = {FaLinkedin} we = "We're social:" />

       <Finalfooter copyright = "© 2024 Access Bank PLC. (Licensed by the Central Bank of Nigeria)" accessibility = "Accessibility" privacy = "Privacy Policy" use = "Terms of Use" whistle = "Whistle Blower" finallogo = {finallogo} talk = "LET'S TALK" icontalk = {FaUserTie}/>
    </>
  )
}

export default App
