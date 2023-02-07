import React from "react" 
import "../components/LogoStrip.css"
import js from '../images/js.png'
import react from '../images/atom.png'
import ruby from '../images/diamonds.png'
import sql from '../images/database.png'


export default function Logostrip() {

  return ( 
    <div>
      <div
          data-w-id="d9d25da5-f735-feff-9111-4dafdf5c05bf"
          className="logo-strip-wrapper"
        >
          <div className="logo-strip-grid">
            <img
              src={js}
              loading="eager"
              alt="facebook logo"
              className="rotated-strip-image"
            /><img
              src={ruby}
              loading="eager"
              alt="youtube logo"
              className="rotated-strip-image"
            /><img
              src={react}
              loading="eager"
              alt="pinterest logo"
              className="rotated-strip-image"
            /><img
              src={sql}
              loading="eager"
              alt="twitch logo"
              className="rotated-strip-image"
            /><img
              src={js}
              loading="eager"
              alt="webflow logo"
              className="rotated-strip-image"
            /><img
              src={ruby}
              loading="eager"
              alt="google logo"
              className="rotated-strip-image"
            />
            <img
              src={react}
              loading="eager"
              alt="pinterest logo"
              className="rotated-strip-image"
            /><img
              src={sql}
              loading="eager"
              alt="twitch logo"
              className="rotated-strip-image"
            />
            <img
              src={js}
              loading="eager"
              alt="webflow logo"
              className="rotated-strip-image"
            />
        </div>
        </div>
      </div>
  )
}