import React from "react"
import "../src/App.css"
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Logostrip from "./components/LogoStrip";
import ShortSummary from "./components/ShortSummary";
import HomePortfolio from "./components/HomePortfolio";
import HomeResume from "./components/HomeResume";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Logostrip/>
      <ShortSummary/>
      <HomePortfolio/>
      <HomeResume/>
    </div>
  );
}

export default App;
