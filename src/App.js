import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
  <div className="main-content-container">
    <div className="first-section-cont">
    <img src="logo-icon.png" alt="kimitzu logo" className="main-logo"/>
    <img src="logoWhite.png" alt="kimitzu logo name" className="main-logo-name"/>
    <p className="sub-title">A free market for services</p>
    <div className="buttons-row-start">
      <a className="blue-round-button">DEMO</a>
      <a className="outlined-button">GITHUB</a>
    </div>
    <div className="links-row">
        <a className="row-icons" href="https://github.com/kimitzu/kimitzu-client/releases">
          <span uk-icon="icon: git-branch; ratio: 1" className="margin-icons"/>
          releases
        </a>
        <a className="row-icons" href="https://www.reddit.com/r/kimitzu/">
            <span uk-icon="icon: reddit; ratio: 1" className="margin-icons"/>
            r/kimitzu
        </a>
        <a className="row-icons" href="https://github.com/kimitzu/kimitzu-client/issues">
          <span uk-icon="icon: github; ratio: 1" className="margin-icons"/>
          contribute
        </a>
      </div>
    </div>
  </div>
  );
}

export default App;
