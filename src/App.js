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

  // const [scale, setScale] = useState(1);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const newScale = Math.max(0.5, 1 - window.scrollY / 1000);
  //     setScale(newScale);
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  return (
    <div 
      className="App"
    >
      <div className="nav">
        <Navbar/>
      </div>
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
      <div className="footer">
         <Footer/>
      </div>
    </div>
  );
}

export default App;
