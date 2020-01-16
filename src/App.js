import React from "react";
import Axios from "axios"
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      releases: {
        windowsRelease: 'https://github.com/kimitzu/kimitzu-client/releases/latest',
        linuxRelease: 'https://github.com/kimitzu/kimitzu-client/releases/latest',
        macRelease: 'https://github.com/kimitzu/kimitzu-client/releases/latest'
      }
    }
  }

  async componentDidMount() {
    const releases = await this.getReleases()
    this.setState({
      releases
    })
  }

  generateReleaseUrl(fileName) {
    return `https://github.com/kimitzu/kimitzu-client/releases/latest/download/${fileName}`
  }

  async getReleases() {
    const Request = await Axios.get('/release/latest')
    const RequestData = Request.data
    const ReleaseResource = RequestData.version
    console.log(ReleaseResource)

    const windowsRelease = this.generateReleaseUrl(`kimitzu-client-setup-${ReleaseResource}.exe`)
    const linuxRelease = this.generateReleaseUrl(`Kimitzu-Client-${ReleaseResource}.AppImage`)
    const macRelease = this.generateReleaseUrl(`Kimitzu-Client-${ReleaseResource}.dmg`)

    return {
      windowsRelease, linuxRelease, macRelease
    }
  }

  render() {
    const { releases } = this.state
    return (
      <div className="main-content-container">
        <div className="first-section-cont">
          <img src="Background-wave.svg" alt="background-wave" className="background-wave-logo" />
          <img src="Background-wave-small.svg" alt="background-wave" className="background-wave-logo-small" />
          <img src="kimitzu-var-b.svg" alt="kimitzu logo" className="main-logo" />
          <p className="word-logo">kimitzu</p>
          <p className="sub-title">A free market for services</p>
          <div className="buttons-row-start">
            <a className="blue-round-button">
              <div className="aligned-download-btn">
                DOWNLOAD
            <img src="Download-Arrow.svg" alt="download-arrow" className="download-arrow" />
              </div>
            </a>
            <div data-uk-dropdown="mode: click">
              <div className="row-download-icons">
                <a className="icon-container-download" href={releases.windowsRelease}>
                  <img src="windows.svg" alt="download-arrow" className="download-os" />
                  Windows
              </a>
                <a className="icon-container-download middle-download-logo" href={releases.macRelease}>
                  <img src="Apple.svg" alt="download-arrow" className="download-os" />
                  Mac
              </a>
                <a className="icon-container-download" href={releases.linuxRelease}>
                  <img src="linux.svg" alt="download-arrow" className="download-os" />
                  Linux
              </a>
              </div>
            </div>
            <a className="outlined-button colored-small" href="https://test.kimitzu.ch/">DEMO</a>
            <a className="outlined-button" href="https://github.com/kimitzu">GITHUB</a>
          </div>
          <div className="links-row">
            <a className="row-icons" href="https://github.com/kimitzu/kimitzu-client/releases">
              <img src="version.svg" alt="version-logo" className="margin-icons" />
              Releases
          </a>
            <a className="row-icons" href="https://www.reddit.com/r/kimitzu/">
              <img src="reddit.svg" alt="version-logo" className="margin-icons" />
              r/kimitzu
          </a>
            <a className="row-icons" href="https://github.com/kimitzu/kimitzu-client/issues">
              <img src="github.svg" alt="version-logo" className="margin-icons" />
              Contribute
          </a>
          </div>
        </div>
        <div className="second-section-cont">
          <div className="sec-left-section">
            <p>
              Kimitzu is an app intended to create a free, two way marketplace for freelancers and their customers. Our goal is to help freelancers and their customers to find each other, manage payments, and incentivize good behavior on both sides of the transaction. Imagine Upwork or freelancer.com, but with:
            </p>
            <p className="list-icon">
              <img src="Privacy.svg" alt="version-logo" className="list-icons-svg" />
              Privacy
            </p>
            <p className="list-icon">
              <img src="First.svg" alt="version-logo" className="list-icons-svg" />
              First tier support for cryptocurrency payments
            </p>
            <p className="list-icon">
              <img src="Freedom.svg" alt="version-logo" className="list-icons-svg" />
              Freedom to operate your business as you see fit
            </p>
            <p className="list-icon">
              <img src="Access.svg" alt="version-logo" className="list-icons-svg" />
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
            <img src="Kimitzu-spotlight.png" alt="version-logo" className="spotlight-one" />
          </div>
        </div>
        <div className="spotlight-one-small">
          <img src="Kimitzu-spotlight.png" alt="version-logo" className="spotlight-one" />
        </div>
        <div className="second-section-cont">
          <div className="sec-right-section">
            <img src="spotlight-2.png" alt="version-logo" className="spotlight-one" />
          </div>
          <div className="sec-left-section">
            <p>
              The Kimitzu project also aspires to treat our users, developers, and other community members well at all times. For us, that means:
            </p>
            <p className="list-icon">
              <img src="Security.svg" alt="version-logo" className="list-icons-svg" />
              Strong security
            </p>
            <p className="list-icon">
              <img src="UI.svg" alt="version-logo" className="list-icons-svg" />
              Beautiful UI
            </p>
            <p className="list-icon">
              <img src="Githublist.svg" alt="version-logo" className="list-icons-svg" />
              Open source license
            </p>
            <p className="list-icon">
              <img src="Reward.svg" alt="version-logo" className="list-icons-svg" />
              Meritocratic reward / governance structure
            </p>
            <p className="list-icon">
              <img src="Decentralized.svg" alt="version-logo" className="list-icons-svg" />
              Decentralized control
            </p>
            <p className="list-icon">
              <img src="design.svg" alt="version-logo" className="list-icons-svg" />
              No “dark” design patterns
            </p>
            <p className="list-icon">
              <img src="Open.svg" alt="version-logo" className="list-icons-svg" />
              Open book management
            </p>
            <p>
              It’s our philosophy that if we a) treat everyone well b) implement good processes and c) get the incentives right, the community and software will grow in a mutual reinforcing virtuous spiral.
            </p>
          </div>
        </div>
        <div className="spotlight-two-small">
          <img src="spotlight-2.png" alt="version-logo" className="spotlight-one" />
        </div>
        <div className="third-section-cont">
          <div>
            <p className="title-bold">How is Kimitzu related to OpenBazaar?</p>
            <p>
              Kimitzu is built on top of OpenBazaar so, behind the scenes, Kimitzu uses that same payment system, IPFS listings, etc as the OpenBazaar app.
        </p>
            <p>
              However, Kimitzu adds adds an additional layer to provide services not currently offered by OpenBazaar:
        </p>
            <ul className="ul-padding">
              <li>
                OpenBazaar is focused on both goods and services; Kimitzu is focused only on service listings.
          </li>
              <li>
                Openbazaar depends on third parties to provide search. Kimitzu has a built-in search engine that a provides:
            <ul className="ul-padding-inner">
                  <li>Location-based search</li>
                  <li>Structured search by occupation (based on <a className="text-underline" href="https://www.ilo.org/public/english/bureau/stat/isco/isco08/index.htm">ISCO-08</a>)</li>
                  <li>Structured search filters based on ratings, price, physical traits, and social traits</li>
                </ul>
              </li>
              <li>
                Detailed competency matrix for software developers (other professions to be added later)
          </li>
              <li>
                Openbazaar only provides ratings for vendors, and can be deleted or modified by a vendor. Kimitzu ratings are immutable, and allow both buyer and seller to rate each other.
          </li>
              <li>
                Openbazaar has an Android app. Kimitzu doesn't yet support the Android platform.
          </li>
            </ul>
          </div>
        </div>
        <div className="footer">
          <hr />
          <p>© {new Date().getFullYear()} Kimitzu Foundation</p>
        </div>
      </div>
    );
  }
}

export default App;
