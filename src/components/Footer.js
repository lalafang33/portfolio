import React from 'react'; 
import './Footer.css'
import roundImage from '../images/round-email.svg';
import email from '../images/email.svg';
import linkedin from '../images/linkedin.svg';

export default function Footer() {

  function handleClick(url) {
    window.open(url, '_blank');
  }
  const emailClick = () => {
    window.location.href = 'mailto:lalafang33@gmail.com';
  };
  return (
    <div className='footer-container'>
      <div className='contact-wrapper-container'>
      <div className="footer-newsletter">
          <div className="container-d-default-w-container">
            <div
              className="email-adjuster"
            >
              <div
                className="footer-image-wrapper"
              >
                <img
                  src={roundImage}
                  loading="eager"
                  alt="Newsletter Icon - Paperfolio Webflow Template"
                  className="footer-image"
                />
              </div>
              <div className='wrapper-adjust'>
                <div className="newsletter-wrapper">
                  <div className="display-4 text-center-mbl">
                    Send me an Email, lets connect!
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
       <footer className="footer-wrapper">
          <div className="container-default w-container">
              <div className='footer-logo'>
                <img className="footer-img" src={email} onClick={emailClick}/>
                <img className="footer-img" src={linkedin} onClick={() => handleClick('https://www.linkedin.com/in/lala-fang/')}/>
              </div>
            <div className="footer-top border-bottom"></div>
            <div className="footer-bottom border-top-0px">
              <div className='footer-bottom-margin'>
                <div className="inner-container _500px---mbl center">
                  <p
                    className="footer-copyright"
                  >
                    Copyright © Lala Fang | Created 2023
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
    </div>
  )
}