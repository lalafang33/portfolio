import React from "react" 
import "./Navbar.css"
import me from "../images/hi.png"

export default function Navbar() {

  function handleClick(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  }

  return(
    <div className="nav-bar-container" >
      <div className="nav-bar">
        <ul className="nav-list">
          <li>        
            <img className="bitmoji" src={me} loading="eager" width="61" alt="" sizes="(max-width: 479px) 52.453125px, (max-width: 767px) 54.8984375px, 61px" />
          </li>
          <li>
          <button onClick={() => handleClick('summary')}>About</button>
          </li>
          <li>
          <button onClick={() => handleClick('resume')}>Resume</button>
          </li>
          <li>          
            <button onClick={() => handleClick('portfolio')}>Portfolio</button>
          </li>  
          <li>
          <button onClick={() => handleClick('blog')}>Blog</button>
          </li>
        </ul>
        <a className="small-btn">
          <span className="line-rounded-icon"></span>
        </a>
      </div>
    </div>
      
  )
}

