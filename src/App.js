import React from "react";
import Main from "./Components/Main/Main";
import People from "./Components/People/People";
import Gallery from "./Components/Gallery/Gallery";
import Facilities from "./Components/Facilities/Facilities";
import Error from "./Components/Error/Error";
import Layout from "./Layout";


import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/people" component={People} />
            <Route path="/gallery" component={Gallery}/>
            <Route path="/facilities" component={Facilities}/>
            <Route component={Error}/>
          </Switch>
        </Layout>
      </Router>
      
    </>
  );
};

export default App;
