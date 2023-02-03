import React from "react"
import "../src/App.css"
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Logostrip from "./components/LogoStrip";
import ShortSummary from "./components/ShortSummary";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Logostrip/>
      <ShortSummary/>
    </div>
  );
}

export default App;
