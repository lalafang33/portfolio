import React from 'react'; 
import './Footer.css'
import roundImage from '../images/round-email.svg'

export default function Footer() {

  return (
    <div className='footer-container'>
      <div className='contact-wrapper-container'>
      <div className="footer-newsletter">
          <div className="container-default w-container">
            <div
              className="email-adjuster"
            >
              <div
                className="image-wrapper newsletter-image-wrapper position-relative"
              >
                <img
                  src={roundImage}
                  loading="eager"
                  alt="Newsletter Icon - Paperfolio Webflow Template"
                  className="image"
                />
              </div>
              <div className='wrapper-adjust'>
                <div className="newsletter-wrapper">
                  <div className="display-4 text-center-mbl">
                    Send me an Email, lets connect!
                  </div>
                  <div className="footer-form-block w-form">
                    <form
                      id="wf-form-Footer-Newsletter-Form"
                      name="wf-form-Footer-Newsletter-Form"
                      data-name="Footer Newsletter Form"
                      method="get"
                    >
                      <label for="name-4" className="field-label">Label</label>
                      <div className="form-spacing">
                        <input
                          type="email"
                          className="input w-input"
                          maxlength="256"
                          name="Email"
                          data-name="Email"
                          placeholder="Enter your email address"
                          id="Email"
                          required=""
                        />
                      </div>
                    </form>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

       <footer className="footer-wrapper">
          <div className="container-default w-container">
            <div className="footer-top border-bottom"></div>
            <div className="footer-bottom border-top-0px">
              <div className="inner-container _500px---mbl center">
                <p
                  className="footer-copyright"
                >
                  Copyright © Lala Fang | Created 2023
                </p>
              </div>
            </div>
          </div>
        </footer>
    </div>
  )
}