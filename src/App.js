import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
<div className="main-content-container">
  <nav className="uk-navbar-container white-bg uk-padding-small uk-padding-remove-bottom" data-uk-navbar>
      <div className="uk-navbar-left">
      <img src="/logo-icon.png" alt="Smiley face" width="50" className="uk-margin-left"/>
      <img src="/logoWhite.png" alt="Smiley face" width="100"/>
      </div>
  </nav>
  <div className="uk-section uk-primary">
      <div className="uk-container main-content-portal">
          <img src="/logo-icon.png" alt="Smiley face" width="150"/>
          <h3 className="uk-text-primary bolded-text">A free market for services.</h3>
          <div className="get-started-row">
            <a className="round-btn" href="https://test.kimitzu.ch/#/">DEMO</a>
            <a className="round-btn-outline" href="https://github.com/kimitzu">GITHUB</a>
          </div>
          <p><span className="uk-text-emphasis uk-text-lead size-down-text">What's new?</span><br/>
          Kimitzu is built on top of OpenBazaar with extra sprinkles: <br/>
          - Fully decentralised and uncensored listings<br/>
          - Advanced search and filters<br />
          &nbsp; - Location-based search <br />
          &nbsp; - Profile filtering <br />
          &nbsp; - Occupation search based on ISCO-08 <br/>
          - Improved caching capabilities <br/>
          - Competency matrix for occupations <br/>
          - Ratings <br/>
          &nbsp; - Two-way Ratings (Service Provider and Buyer) <br/>
          &nbsp; - Immutable, Decentralized Ratings <br/>
          </p>
          <br/>
          <div className="links-row">
          <a className="row-icons" href="https://github.com/kimitzu/kimitzu-client/releases.">
              <span uk-icon="icon: git-branch; ratio: 1" className="margin-icons"/>
              v0.1.0
            </a>
            <a className="row-icons" href="https://www.reddit.com/r/kimitzu/">
              <span uk-icon="icon: reddit; ratio: 1" className="margin-icons"/>
              disscussions
            </a>
            <a className="row-icons" href="https://github.com/kimitzu/kimitzu-client/issues">
              <span uk-icon="icon: github; ratio: 1" className="margin-icons"/>
              report
            </a>
          </div>
      </div>
  </div>
  </div>
  );
}

export default App;
