import React from "react"
import './HomePortfolio.css'



export default function HomePortfolio() {

  function handleClick(url) {
    window.open(url, '_blank');
  }

  return(
    <div className="portfolio-container"> 
      <div className="section wf-section">
        <div className="container-default w-container">
          <div className="inner-container _600px---tablet center">
            <div className="inner-container _500px---mbl center">
              <div
                data-w-id="67c22f4d-5e39-2cc0-0d7d-c81b5e124b78"
                className="inner-container-300px---mbp-center"
              >
                <div className="title">
                  <div className="mg-bottom-48px">
                    <h2 className="display-2 text-center">
                      <span className="z-index-1">Take a look at my</span>
                      <br/>
                      <span className="heading-span-secondary-1"
                        > design portfolio
                      </span>
                    </h2>
                  </div>
                </div>
              </div>
              <div className="mg-bottom-72px">
                <div
                  data-w-id="38316eb0-5fd0-d86d-3502-e2d0e0543242"
                
                  className="w-dyn-list"
                >
                  <div role="list" className="grid-1-column gap-32px w-dyn-items">
                    <div
                      id="w-node-_38316eb0-5fd0-d86d-3502-e2d0e0543244-9dc73057"
                      role="listitem"
                      className="w-dyn-item"
                    >
                      <a
                        data-w-id="c384f0f7-b29f-b8e0-bc35-13b1d9dca9c3"
                        href="/portfolio-projects/twitch-user-research-and-analysis"
                        className="card porfolio-project-wrapper link-card w-inline-block"
                        >
                        <div className="card-container">
                          <div
                            className="w-layout-grid grid-2-columns blog-card-featured card-shadow"
                          >
                              <div
                                id="w-node-e19d4d0e-15a7-c818-cdae-c195e79cb42e-9dc73057"
                                className="blog-card-featured-inner-content"
                              >
                                <div className="mg-bottom-32px">
                                  <div className="flex-horizontal start gap-24px">
                                    <div className="badge-primary-port">
                                      <div>Transit Better</div>
                                    </div>
                                  </div>
                                </div>
                                <h3 className="display-3">Transportation Hub</h3>
                                <p className="mg-bottom-56px mg-bottom-32px-tablet">
                                  An application that is a hub for all things
                                  transportation. Application includes surrounding
                                  bus stops based on location, route planning, mode
                                  of travel, and ETA. Working features include
                                  tracking your steps taken, kilometers traveled as
                                  well as nearby rated restaurants for your
                                  destination.
                                </p>
                                <div
                                  className="link-wrapper color-neutral-800 text-bold"
                                >
                                  <div className="link-text color-neutral-800">
                                   <button className="port-btn" onClick={() => handleClick('https://github.com/lalafang33/Transit-Better')}>View Github</button>
                                  </div>
                                  <div
                                    className="line-rounded-icon link-icon-right color-neutral-800"
                                  >
                                    
                                  </div>
                                </div>
                              </div>
                            <div
                              id="w-node-adb87bf7-3e81-2184-2248-db4773e17ed1-9dc73057"
                              className="blog-card-image-wrapper featured-v2"
                            >
                              <img
                                src="https://uploads-ssl.webflow.com/63dc25127b4b95fdf6c7305b/63dc25127b4b9573b8c73198_twitch-user-research-and-analysis-paperfolio-webflow-template.svg"
                                loading="eager"
                                alt="Twitch user research and analysis"
                                className="image fit-contain"
                              />
                            </div>
                          </div>

                        </div>
                      </a>
                    </div>
                    <div
                      role="listitem"
                      className="w-dyn-item"
                    >
                      <a
                        href="/portfolio-projects/google-workspace-web-app-redesign"
                        className="card porfolio-project-wrapper link-card w-inline-block">
                        <div className="card-container">
                          <div
                            className="w-layout-grid grid-2-columns blog-card-featured card-shadow"
                          >
                            <div
                              className="blog-card-featured-inner-content"
                            >
                              <div className="mg-bottom-32px">
                                <div className="flex-horizontal start gap-24px">
                                  <div className="badge-primary-port">
                                    <div>Interview Scheduler</div>
                                  </div>
                                </div>
                              </div>
                              <h3 className="display-3">Scheduler</h3>
                              <p className="mg-bottom-56px mg-bottom-32px-tablet">
                                 Scheduler is a calendar management application that help arrange interview times with alloted availability between interviewers and students. Users are able to edit appointments, create appointments as well as cancel appointments.
                              </p>
                              <div
                                className="link-wrapper color-neutral-800 text-bold"
                              >
                                <div className="link-text color-neutral-800">
                                <button className="port-btn" onClick={() => handleClick('https://github.com/lalafang33/scheduler')}>View Github</button>
                                </div>
                                <div
                                  className="line-rounded-icon link-icon-right color-neutral-800"
                                >
                                  
                                </div>
                              </div>
                            </div>
                            <div
                              id="w-node-adb87bf7-3e81-2184-2248-db4773e17ed1-9dc73057"
                              className="blog-card-image-wrapper featured-v2"
                            >
                              <img
                                src="https://uploads-ssl.webflow.com/63dc25127b4b95fdf6c7305b/63dc25127b4b95a04ec731c1_google-workspace-web-app-redesign-paperfolio-webflow-template.svg"
                                loading="eager"
                                alt="Google Workspace web app redesign"
                                className="image fit-contain"
                              />
                            </div>
                            </div>

                        
                      </div>
                        </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-w-id="688e2403-e0f0-6c8b-5c40-a5ca5ed06f2a"
                className="buttons-row center"
              >
                <a href="" className="btn-primary w-button"
                  ><span className="line-rounded-icon link-icon-left text-medium"
                    ></span>
                    <button className="git-btn" onClick={() => handleClick('https://github.com/lalafang33')}>Browse All Portfolio</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}