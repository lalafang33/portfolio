import React from "react"
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Logostrip from "./components/LogoStrip";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Logostrip/>
    </div>
  );
}

export default App;
