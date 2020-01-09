import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
  <div className="main-content-container">
    <div className="first-section-cont">
    <img src="Background-wave.svg" alt="background-wave" className="background-wave-logo"/>
    <img src="Background-wave-small.svg" alt="background-wave" className="background-wave-logo-small"/>
    <img src="kimitzu-var-b.svg" alt="kimitzu logo" className="main-logo"/>
    {/* <img src="logoWhite.png" alt="kimitzu logo name" className="main-logo-name"/> */}
    <p className="word-logo">kimitzu</p>
    <p className="sub-title">A free market for services</p>
    <div className="buttons-row-start">
      <a className="blue-round-button">
        <div className="aligned-download-btn">
        DOWNLOAD 
        <img src="Download-Arrow.svg" alt="download-arrow" className="download-arrow"/>
        </div>
      </a>
      <a className="outlined-button colored-small">DEMO</a>
      <a className="outlined-button">GITHUB</a>
    </div>
    <div className="links-row">
        <a className="row-icons" href="https://github.com/kimitzu/kimitzu-client/releases">
          <img src="version.svg" alt="version-logo" className="margin-icons"/>
          releases
        </a>
        <a className="row-icons" href="https://www.reddit.com/r/kimitzu/">
          <img src="reddit.svg" alt="version-logo" className="margin-icons"/>
            r/kimitzu
        </a>
        <a className="row-icons" href="https://github.com/kimitzu/kimitzu-client/issues">
          <img src="github.svg" alt="version-logo" className="margin-icons"/>
          contribute
        </a>
      </div>
    </div>
  </div>
  );
}

export default App;
