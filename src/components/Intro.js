import React from "react"; 
import "./Intro.css"
import me from "../images/me.jpg"

export default function Intro() {
  function handleClick(url) {
    window.open(url, '_blank');
  }
  const emailClick = () => {
    window.location.href = 'mailto:lalafang33@gmail.com';
  };

  return (
    <div className="intro-container"> 
      <div className="two-piece">
        <div className="intro-text">
          <h1 className="intro-inner-text">
             I'm 
           <span className="name">Lala Fang</span>
            , a
            <br></br>
           <span className="designer"> Web Designer </span>
             <span>from </span>
           <span className="place">Vancouver</span>
          </h1>
          <h3 className="tele">Yes, Lala as in the Teletubbies... </h3>
          <div className="intro-btn">
            <p className="btn">
            <span>  </span>
            <button className="click-btn" onClick={emailClick} >Get In Touch</button>
            </p>
            <p className="btn">
            <span>  </span>
            <button className="click-btn" onClick={() => handleClick('https://www.linkedin.com/in/lala-fang/')}> View Portfolio </button>
            </p>
          </div>
        </div>
        <img src={me} alt='me' className="me-img" loading="eager"  />
      </div>

    </div>
  )
}