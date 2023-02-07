import React from "react"; 
import "./HomeResume.css"

export default function HomeResume() {
  function handleClick(url) {
    window.open(url, '_blank');
  }

  return(
    <div >
      <div className="resume-container">
        <div className="left-column">
          <div>
            <div className="resume-title-container">
              <h1 className="resume-title">Take a look at my</h1>
              <br/>
              <h1 className="title-2">past experiences</h1>
            </div>
            <p className="text">Ex financial relationship manager turned into Full Stack Developer</p>
          </div>
          <div className="badge-primary-resume">
            <div className="resume-button">
              <button className="resume-button" onClick={() => handleClick('https://resume.creddle.io/resume/j1rur8vwj8w')}>See Full Resume</button>
            </div>
          </div>
        </div>
        <div className="right-column">
          <div className="resume-cards">
            <div className="resume-card">
                <div className="top-card">
                  Jan 22 - Present
                </div>
                  <div className="resume-card-divider"></div>
                  <div className="card-content">
                    <h2>Full Stack Developer</h2>
                    <p>
                    Freelance Full Stack Web Developer that have completed multiple projects in JS, React, Ruby on Rails, Express. See some latest projects in Github!</p>
                  </div>
                  
            </div>
            <div className="resume-card">
                <div className="top-card">
                Nov 2021 - July 2022
                </div>
                <div className="resume-card-divider"></div>
                  <div className="card-content">
                    <h2>Senior Premium Banker</h2>
                    <p>Manage client relationships, provide customized financial solutions, identify new business opportunities, and ensure client satisfaction. The role requires strong interpersonal skills, financial acumen, and knowledge of banking products and regulations.</p>
                  </div>
                  
            </div>
            <div className="resume-card">
                <div className="top-card">
                Mar 2021 - Nov 2021
                </div>
                <div className="resume-card-divider"></div>
                  <div className="card-content">
                    <h2>Premium Banker</h2>
                    <p>Manage client relationships, provide customized financial solutions, identify new business opportunities, and ensure client satisfaction. The role requires strong interpersonal skills, financial acumen, and knowledge of banking products and regulations.</p>
                  </div>
                  
            </div>

          </div>

        </div>
      </div>

    </div>

  )
}