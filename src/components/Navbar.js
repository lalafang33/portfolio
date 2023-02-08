import React from "react" 
import { useState, useEffect } from "react"
import "./Navbar.css"
import me from "../images/hi.png"
import email from '../images/email.svg'
import Button from "./Button"
import Dropdown from "./Dropdown"

export default function Navbar() {

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function handleResize() {
    setScreenWidth(window.innerWidth);
  }

  const buttons = [
    { label: "About", id: "summary" },
    { label: "Resume", id: "resume" },
    { label: "Portfolio", id: "portfolio" },
    { label: "Blog", id: "blog" },
  ];

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
          {buttons.map(({ label, id }) => (
            <li key={label}>
              <Button onClick={() => handleClick(id)}>{label}</Button>
            </li>
          ))}
        </ul>
        {screenWidth < 767 && (
        <Dropdown items={buttons.map(({ label }) => label)} />
        )}
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

