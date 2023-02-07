import React from "react";
import './HomeArticle.css'


export default function HomeArticle() {

  return (
    <div className="article-container">
      <div className="article-top">
        <h1>Article & News</h1>
        <a className="article-btn">
          <span>Browse All Articles</span>
        </a>
      </div>
      <div className="article-space">
        <div className="article-card">
          <div className="card-content">
          <img src="https://uploads-ssl.webflow.com/63dc25127b4b95fdf6c7305b/63dc25127b4b95502bc731b0_thumbnail-6-blog-paperfolio-template.svg" loading="eager" alt="What is the right design tool to choose in 2023?" className="blog-card-image"/>
            <h1>Simple Guide To Linked List Data</h1>
            <br/>
            <h3> Oct 23 2022</h3>
            <br/>
            <a className="badge-primary small">
              <span>Read Article</span>
            </a>
          </div>

      </div>
      </div>
    </div>

  )
}