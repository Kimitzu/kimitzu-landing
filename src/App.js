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
    <div className="second-section-cont">
        <div className="sec-left-section">
          <p>
          Kimitzu is an app intended to create a free, two way marketplace for freelancers and their customers. Our goal is to help freelancers and their customers to find each other, manage payments, and incentivize good behavior on both sides of the transaction. Imagine Upwork or freelancer.com, but with:
          </p>
          <p className="list-icon">
            <img src="Privacy.svg" alt="version-logo" className="list-icons-svg"/>
            Privacy
          </p>
          <p className="list-icon">
            <img src="First.svg" alt="version-logo" className="list-icons-svg"/>
            First tier support for cryptocurrency payments
          </p>
          <p className="list-icon">
            <img src="Freedom.svg" alt="version-logo" className="list-icons-svg"/>
            Freedom to operate your business as you see fit
          </p>
          <p className="list-icon">
            <img src="Access.svg" alt="version-logo" className="list-icons-svg"/>
            Full access to clients
          </p>
          <p>
          Don't like how we do things? As open source software, Kimitzu provides the freedom to run, view, modify, and share the code (the Four Freedoms)
          </p>
          <p>
          There are also currently no fees. However, we may introduce some kind of fees in the future so as to finance the ongoing development and maintenance of the software. If we do introduce such fees in the future, it will be with plenty of warning.
          </p>
        </div>
        <div className="sec-right-section">
          <img src="Kimitzu-spotlight.png" alt="version-logo" className="spotlight-one"/>
        </div>
    </div>
    <div className="spotlight-one-small">
      <img src="Kimitzu-spotlight.png" alt="version-logo" className="spotlight-one"/>
    </div>
  </div>
  );
}

export default App;
