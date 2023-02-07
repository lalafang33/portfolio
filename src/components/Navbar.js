import React from "react" 
import "./Navbar.css"
import me from "../images/hi.png"
import email from '../images/email.svg'
import Button from "./Button"

export default function Navbar() {

  function handleClick(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  }

  const emailClick = () => {
    window.location.href = 'mailto:lalafang33@gmail.com';
  };

  return(
    <div className="nav-bar-container" >
      <div className="nav-bar">
        <ul className="nav-list">
          <li>        
            <img className="bitmoji" src={me} loading="eager" width="61" alt="" sizes="(max-width: 479px) 52.453125px, (max-width: 767px) 54.8984375px, 61px" />
          </li>
          <li>
          <Button onClick={() => handleClick('summary')}>About</Button>
          </li>
          <li>
          <Button onClick={() => handleClick('resume')}>Resume</Button>
          </li>
          <li>          
            <Button onClick={() => handleClick('portfolio')}>Portfolio</Button>
          </li>  
          <li>
          <Button onClick={() => handleClick('blog')}>Blog</Button>
          </li>
        </ul>
        <p className="small-btn-nav">
            <button className="email-icon" onClick={emailClick}>
               <img className="email-img"alt="email" src={email}/>
               Contact
            </button>
        </p>
      </div>
    </div>
      
  )
}

