import React from "react" 
import "./Navbar.css"
import me from "../images/hi.png"

export default function Navbar() {

  return(
    <div className="nav-bar-container" >
      <div className="nav-bar">
        <img src={me} loading="eager" width="61" alt="" sizes="(max-width: 479px) 52.453125px, (max-width: 767px) 54.8984375px, 61px" />
        <ul className="nav-list">
          <li>Home</li>
          <li>About</li>
          <li>Portfolio</li>
          <li>Blog</li>
        </ul>
        <a className="small-btn">
          <span className="line-rounded-icon"></span>
        </a>
      </div>
    </div>
      
  )
}

