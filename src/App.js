import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Main from "./Components/Main/Main";
import People from "./Components/People/People";
import Gallery from "./Components/Gallery/Gallery";
import Gallery_main from "./Components/Gallery/Gallery_main";
import Facilities from "./Components/Facilities/Facilities";
import Research from "./Components/Research/Research";
import Academics from "./Components/Academics/Academics";
import Activities from "./Components/Activities/Activities";
import Profile from "./Components/People/Profile/Profile";
import Outreach from "./Components/Outreach/Outreach";
import Error from "./Components/Reusable/Error/Error";
import Layout from "./Layout";

import "./App.css";

const App = () => {
    
  return (
    <>
        <Router>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Main} />
                    <Route path={'/people/:Id'}><Profile/></Route>
                    <Route path="/people"><People/></Route>
                    <Route path="/academics" component={Academics}/>
                    <Route path="/activities" component={Activities}/>
                    <Route path="/research" component={Research}/>
                    <Route path="/gallery/campus" component={Gallery}/>
                    <Route path="/gallery" component={Gallery_main}/>
                    <Route path="/facilities" component={Facilities}/>
                    <Route path="/outreach" component={Outreach}/>
                    <Route component={Error}/>
                </Switch>
            </Layout>
        </Router>
    </>
  );
};

export default App;

