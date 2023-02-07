import React from "react"
import "../src/App.css"
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Logostrip from "./components/LogoStrip";
import ShortSummary from "./components/ShortSummary";
import HomePortfolio from "./components/HomePortfolio";
import HomeResume from "./components/HomeResume";
import HomeArticle from "./components/HomeArticle";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Logostrip/>
      <div id="summary">
        <ShortSummary/>
      </div>
      <div id="portfolio">
        <HomePortfolio/>
      </div>
      <div id="resume">
        <HomeResume/>
      </div>
      <div id="blog">
        <HomeArticle/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
