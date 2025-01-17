import React, { Component } from "react";
import Menu from "./Menu";
import Footer from "./Footer";

/*     Routes    */
import Team from "./Routes/Team";
import Join from "./Routes/Join"
import GraffitiWall from "./Routes/GraffitiWall";
import Home from "./Routes/Home";
import Mentorship from "./Routes/Mentorship";
import Technical from "./Routes/Technical";
import Outreach from "./Routes/Outreach";
import Professional from "./Routes/Professional";
import Shadow from "./Routes/Shadow";
import Social from "./Routes/Social";
import Academic from "./Routes/Academic";
import Wece from "./Routes/Wece";
import ECEInterview from "./Routes/Interview";
import PodcastPage from "./Routes/PodcastPage";
import CalendarPage from "./Routes/CalendarPage";

import TBD from "./Routes/TBD";
import { Route } from "react-router-dom";

class App extends Component {
  render() {
    if (window.location.pathname === "/graffiti-wall") return <GraffitiWall />;
    //debugger;
    return (
      <React.Fragment>
        <Menu />
        <div style={{ overflow: "hidden" }}>
          <Route exact path="/" component={Home} />
          <Route exact path="/team" component={Team} />
          <Route exact path="/join" component={Join} />
          <Route exact path="/mentorship" component={Mentorship} />
          <Route exact path="/technical" component={Technical} />
          <Route exact path="/outreach" component={Outreach} />
          <Route exact path="/professional" component={Professional} />
          <Route exact path="/podcast" component={PodcastPage} />
          <Route exact path="/shadow" component={Shadow} />
          <Route exact path="/social" component={Social} />
          <Route exact path="/academic" component={Academic} />
          <Route exact path="/women-ece" component={Wece} />
          <Route exact path="/ece-interview" component={ECEInterview} />
          <Route exact path="/calendar" component={CalendarPage} />
          <Route
            path="/positions"
            component={() => {
              window.location.href =
                "https://docs.google.com/document/d/13sTv6RvrrNYfIXy6iVXueAHsTCEbrONBya01zCZuZZI/edit?usp=sharing";
              return null;
            }}
          />
          <Route
            path="/apply"
            component={() => {
              window.location.href = "https://forms.gle/tL6vF2G1KgZKDvPL6";
              return null;
            }}
          />
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
