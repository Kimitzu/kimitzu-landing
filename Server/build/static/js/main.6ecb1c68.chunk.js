(this["webpackJsonpkimitzu-portal"]=this["webpackJsonpkimitzu-portal"]||[]).push([[0],{19:function(e,a,t){e.exports=t(45)},24:function(e,a,t){},44:function(e,a,t){},45:function(e,a,t){"use strict";t.r(a);var s=t(0),n=t.n(s),l=t(12),i=t.n(l),o=(t(24),t(2)),r=t.n(o),c=t(13),m=t(14),u=t(17),d=t(15),g=t(18),p=t(16),h=t.n(p),v=(t(44),function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(u.a)(this,Object(d.a)(a).call(this,e))).state={releases:{windowsRelease:"https://github.com/kimitzu/kimitzu-client/releases/latest",linuxRelease:"https://github.com/kimitzu/kimitzu-client/releases/latest",macRelease:"https://github.com/kimitzu/kimitzu-client/releases/latest"}},t}return Object(g.a)(a,e),Object(m.a)(a,[{key:"componentDidMount",value:function(){var e;return r.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,r.a.awrap(this.getReleases());case 2:e=a.sent,this.setState({releases:e});case 4:case"end":return a.stop()}}),null,this)}},{key:"generateReleaseUrl",value:function(e){return"https://github.com/kimitzu/kimitzu-client/releases/latest/download/".concat(e)}},{key:"getReleases",value:function(){var e,a,t,s,n,l;return r.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,r.a.awrap(h.a.get("/release/latest"));case 2:return e=i.sent,a=e.data,t=a.version,console.log(t),s=this.generateReleaseUrl("kimitzu-client-setup-".concat(t,".exe")),n=this.generateReleaseUrl("Kimitzu-Client-".concat(t,".AppImage")),l=this.generateReleaseUrl("Kimitzu-Client-".concat(t,".dmg")),i.abrupt("return",{windowsRelease:s,linuxRelease:n,macRelease:l});case 10:case"end":return i.stop()}}),null,this)}},{key:"render",value:function(){var e=this.state.releases;return n.a.createElement("div",{className:"main-content-container"},n.a.createElement("div",{className:"first-section-cont"},n.a.createElement("img",{src:"Background-wave.svg",alt:"background-wave",className:"background-wave-logo"}),n.a.createElement("img",{src:"Background-wave-small.svg",alt:"background-wave",className:"background-wave-logo-small"}),n.a.createElement("img",{src:"kimitzu-var-b.svg",alt:"kimitzu logo",className:"main-logo"}),n.a.createElement("p",{className:"word-logo"},"kimitzu"),n.a.createElement("p",{className:"sub-title"},"A free market for services"),n.a.createElement("div",{className:"buttons-row-start"},n.a.createElement("a",{className:"blue-round-button"},n.a.createElement("div",{className:"aligned-download-btn"},"DOWNLOAD",n.a.createElement("img",{src:"Download-Arrow.svg",alt:"download-arrow",className:"download-arrow"}))),n.a.createElement("div",{"data-uk-dropdown":"mode: click"},n.a.createElement("div",{className:"row-download-icons"},n.a.createElement("a",{className:"icon-container-download",href:e.windowsRelease},n.a.createElement("img",{src:"windows.svg",alt:"download-arrow",className:"download-os"}),"Windows"),n.a.createElement("a",{className:"icon-container-download middle-download-logo",href:e.macRelease},n.a.createElement("img",{src:"Apple.svg",alt:"download-arrow",className:"download-os"}),"Mac"),n.a.createElement("a",{className:"icon-container-download",href:e.linuxRelease},n.a.createElement("img",{src:"linux.svg",alt:"download-arrow",className:"download-os"}),"Linux"))),n.a.createElement("a",{className:"outlined-button colored-small",href:"https://test.kimitzu.ch/"},"DEMO"),n.a.createElement("a",{className:"outlined-button",href:"https://github.com/kimitzu"},"GITHUB")),n.a.createElement("div",{className:"links-row"},n.a.createElement("a",{className:"row-icons",href:"https://github.com/kimitzu/kimitzu-client/releases"},n.a.createElement("img",{src:"version.svg",alt:"version-logo",className:"margin-icons"}),"Releases"),n.a.createElement("a",{className:"row-icons",href:"https://www.reddit.com/r/kimitzu/"},n.a.createElement("img",{src:"reddit.svg",alt:"version-logo",className:"margin-icons"}),"r/kimitzu"),n.a.createElement("a",{className:"row-icons",href:"https://github.com/kimitzu/kimitzu-client/issues"},n.a.createElement("img",{src:"github.svg",alt:"version-logo",className:"margin-icons"}),"Contribute"))),n.a.createElement("div",{className:"second-section-cont"},n.a.createElement("div",{className:"sec-left-section"},n.a.createElement("p",null,"Kimitzu is an app intended to create a free, two way marketplace for freelancers and their customers. Our goal is to help freelancers and their customers to find each other, manage payments, and incentivize good behavior on both sides of the transaction. Imagine Upwork or freelancer.com, but with:"),n.a.createElement("p",{className:"list-icon"},n.a.createElement("img",{src:"Privacy.svg",alt:"version-logo",className:"list-icons-svg"}),"Privacy"),n.a.createElement("p",{className:"list-icon"},n.a.createElement("img",{src:"First.svg",alt:"version-logo",className:"list-icons-svg"}),"First tier support for cryptocurrency payments"),n.a.createElement("p",{className:"list-icon"},n.a.createElement("img",{src:"Freedom.svg",alt:"version-logo",className:"list-icons-svg"}),"Freedom to operate your business as you see fit"),n.a.createElement("p",{className:"list-icon"},n.a.createElement("img",{src:"Access.svg",alt:"version-logo",className:"list-icons-svg"}),"Full access to clients"),n.a.createElement("p",null,"Don't like how we do things? As open source software, Kimitzu provides the freedom to run, view, modify, and share the code (the Four Freedoms)"),n.a.createElement("p",null,"There are also currently no fees. However, we may introduce some kind of fees in the future so as to finance the ongoing development and maintenance of the software. If we do introduce such fees in the future, it will be with plenty of warning.")),n.a.createElement("div",{className:"sec-right-section"},n.a.createElement("img",{src:"Kimitzu-spotlight.png",alt:"version-logo",className:"spotlight-one"}))),n.a.createElement("div",{className:"spotlight-one-small"},n.a.createElement("img",{src:"Kimitzu-spotlight.png",alt:"version-logo",className:"spotlight-one"})),n.a.createElement("div",{className:"second-section-cont"},n.a.createElement("div",{className:"sec-right-section"},n.a.createElement("img",{src:"spotlight-2.png",alt:"version-logo",className:"spotlight-one"})),n.a.createElement("div",{className:"sec-left-section"},n.a.createElement("p",null,"The Kimitzu project also aspires to treat our users, developers, and other community members well at all times. For us, that means:"),n.a.createElement("p",{className:"list-icon"},n.a.createElement("img",{src:"Security.svg",alt:"version-logo",className:"list-icons-svg"}),"Strong security"),n.a.createElement("p",{className:"list-icon"},n.a.createElement("img",{src:"UI.svg",alt:"version-logo",className:"list-icons-svg"}),"Beautiful UI"),n.a.createElement("p",{className:"list-icon"},n.a.createElement("img",{src:"Githublist.svg",alt:"version-logo",className:"list-icons-svg"}),"Open source license"),n.a.createElement("p",{className:"list-icon"},n.a.createElement("img",{src:"Reward.svg",alt:"version-logo",className:"list-icons-svg"}),"Meritocratic reward / governance structure"),n.a.createElement("p",{className:"list-icon"},n.a.createElement("img",{src:"Decentralized.svg",alt:"version-logo",className:"list-icons-svg"}),"Decentralized control"),n.a.createElement("p",{className:"list-icon"},n.a.createElement("img",{src:"design.svg",alt:"version-logo",className:"list-icons-svg"}),"No \u201cdark\u201d design patterns"),n.a.createElement("p",{className:"list-icon"},n.a.createElement("img",{src:"Open.svg",alt:"version-logo",className:"list-icons-svg"}),"Open book management"),n.a.createElement("p",null,"It\u2019s our philosophy that if we a) treat everyone well b) implement good processes and c) get the incentives right, the community and software will grow in a mutual reinforcing virtuous spiral."))),n.a.createElement("div",{className:"spotlight-two-small"},n.a.createElement("img",{src:"spotlight-2.png",alt:"version-logo",className:"spotlight-one"})),n.a.createElement("div",{className:"third-section-cont"},n.a.createElement("div",null,n.a.createElement("p",{className:"title-bold"},"How is Kimitzu related to OpenBazaar?"),n.a.createElement("p",null,"Kimitzu is built on top of OpenBazaar so, behind the scenes, Kimitzu uses that same payment system, IPFS listings, etc as the OpenBazaar app."),n.a.createElement("p",null,"However, Kimitzu adds adds an additional layer to provide services not currently offered by OpenBazaar:"),n.a.createElement("ul",{className:"ul-padding"},n.a.createElement("li",null,"OpenBazaar is focused on both goods and services; Kimitzu is focused only on service listings."),n.a.createElement("li",null,"Openbazaar depends on third parties to provide search. Kimitzu has a built-in search engine that a provides:",n.a.createElement("ul",{className:"ul-padding-inner"},n.a.createElement("li",null,"Location-based search"),n.a.createElement("li",null,"Structured search by occupation (based on ",n.a.createElement("a",{className:"text-underline",href:"https://www.ilo.org/public/english/bureau/stat/isco/isco08/index.htm"},"ISCO-08"),")"),n.a.createElement("li",null,"Structured search filters based on ratings, price, physical traits, and social traits"))),n.a.createElement("li",null,"Detailed competency matrix for software developers (other professions to be added later)"),n.a.createElement("li",null,"Openbazaar only provides ratings for vendors, and can be deleted or modified by a vendor. Kimitzu ratings are immutable, and allow both buyer and seller to rate each other."),n.a.createElement("li",null,"Openbazaar has an Android app. Kimitzu doesn't yet support the Android platform.")))),n.a.createElement("div",{className:"footer"},n.a.createElement("hr",null),n.a.createElement("p",null,"\xa9 ",(new Date).getFullYear()," Kimitzu Foundation")))}}]),a}(n.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[19,1,2]]]);
//# sourceMappingURL=main.6ecb1c68.chunk.js.map