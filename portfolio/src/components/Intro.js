import React from "react"; 
import "./Intro.css"
import me from "../images/me.jpg"

export default function Intro() {

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
            <a className="btn">
            <span>  </span>
              Get In Touch</a>
            <a className="btn">
            <span>  </span>
            View Portfolio</a>
          </div>
        </div>
        <img src={me} className="me-img" loading="eager"  />
      </div>

    </div>
  )
}