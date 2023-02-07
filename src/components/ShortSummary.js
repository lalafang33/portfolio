import React from "react"; 
import "../components/ShortSummary.css";
import pinkGirl from "../images/pinkgirl.png"
import Button from "./Button";

export default function ShortSummary() {
  function handleClick(url) {
    window.open(url, '_blank');
  }

  return (
    <div className="container">
      <div className="two-piece">
        <div className="picture" >
          <img src={pinkGirl} alt='cartoon me' className="pic-specs " />
        </div>
        <div className="text-area">
        <div className="text-center---tablet">
                    <div className="inner-container _430px">
                      <div className="inner-container _400px---tablet center">
                        <div className="inner-container _300px---mbl center">
                          <div className="inner-container _250px---mbp center">
                            <h2 className="display-2">
                              Who's behind all this
                              <span className="heading-span-secondary-2"
                                > great work?</span>
                            </h2>
                            <br/>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="mg-bottom-32px">
                      <span className="text-no-wrap"
                        >I can bridge the gap between technology and user
                        interfaces.<br />
                        I want to use my knowledge to make an impact by
                        providing<br />a seamless experience for users with
                        technology.</span>
                    </p>
                    <br/>
                    <div className="inner-container _500px---tablet center">
                      <div
                        className="inner-container _400px---mbl center _100---mbp"
                      >
                        <div className="mg-bottom-32px">
                          <div
                            className="flex-horizontal align-top---justify-left gap-16px center---tablet"
                          >
                            <div className="bullet bg-secondary-3"></div>
                            <div>
                              <div className="mg-bottom-12px">
                                <div className="text-300 bold color-neutral-800">
                                      Lighthouse Labs Bootcamp Graduate
                                </div>
                              </div>
                              <p className="mg-bottom-0">
                                Proficient in: Javascript, HTML, CSS, SQL, Ruby
                                on Rails, ReactJS, React Native, MongoDB, PSQL, Mocha & Chai, Storybook, Jest, Cypress
                              </p>
                              <br/>
                            </div>
                          </div>
                        </div>
                        <div className="mg-bottom-40px">
                          <div
                            className="flex-horizontal align-top---justify-left gap-16px center---tablet"
                          >
                            <div className="bullet bg-secondary-4"></div>
                            <div>
                              <div className="mg-bottom-12px">
                                <div className="text-300 bold color-neutral-800">
                                  Financial Sales and Service Background
                                </div>
                              </div>
                              <p className="mg-bottom-0">
                                Leveraging expertise and insight to design
                                inventive, imaginative, user friendly software
                                solutions. <span className="text-no-wrap"></span>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="buttons-row-center-tablet">
                          <div className="linkedin-btn">
                            <Button>
                              <button className="linkedin-btn" onClick={() => handleClick('https://www.linkedin.com/in/lala-fang/')}> More about me</button>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
        </div>
      </div>
    </div>
  )
}