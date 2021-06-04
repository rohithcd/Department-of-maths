import React from "react";
import Main from "./Components/Main/Main";
import People from "./Components/People/People";
import Gallery from "./Components/Gallery/Gallery";
import Layout from "./Layout";

import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Layout>
          <Route exact path="/" component={Main} />
          <Route exact path="/people" component={People} />
          <Route path="/gallery" component={Gallery}/>
        </Layout>
      </Router>
    </>
  );
};

export default App;
