import React from "react";
import './HomeArticle.css'


export default function HomeArticle() {

  function handleClick(url) {
    window.open(url, '_blank');
  }

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
             <button className="article-btn" onClick={() => handleClick('https://medium.com/@lalafang33/simple-guide-to-linked-list-data-9a3df0c37757')}>Read Article</button>
            </a>
          </div>

      </div>
      </div>
    </div>

  )
}