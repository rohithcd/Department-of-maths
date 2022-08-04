import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Main from "./Components/Main/Main";
import People from "./Components/People/People";
import Gallery from "./Components/Gallery/Gallery";
import Gallery_main from "./Components/Gallery/Gallery_main";
import Alumni from "./Components/Alumni/Alumni";
import Facilities from "./Components/Facilities/Facilities";
import Research from "./Components/Research/Research";
// import Academics from "./Components/Academics/Academics";
import ActivitiesMain from "./Components/Activities/Activities_main";
import Profile from "./Components/People/Profile/Profile";
import Outreach from "./Components/Outreach/Outreach";
import Contact from "./Components/Contact/Contact";
import Error from "./Components/Reusable/Error/Error";
import Layout from "./Layout";
import Academics from "./Components/Academics/Academics";
import Staff from "./Components/People/Staff/Staff";
import ResearchScholars from "./Components/People/ResearchScholars/ResearchScholars";

import "./App.css";

const App = () => {
    
  return (
    <>
        <Router>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Main} />
                    <Route path={'/people/faculty/:Id'}><Profile/></Route>
                    <Route path={'/people/staff'}><Staff/></Route>
                    <Route path={'/people/research-scholars'}><ResearchScholars/></Route> 
                    <Route path="/people/faculty"><People/></Route>
                    <Route path={"/academics/:link"}><Academics/></Route>
                    <Route path="/activities" component={ActivitiesMain}/>
                    <Route path={"/research/:link"}><Research/></Route>
                    <Route path="/gallery/campus" component={Gallery}/>
                    <Route path="/gallery" component={Gallery_main}/>
                    <Route path="/facilities" component={Facilities}/>
                    <Route path="/outreach" component={Outreach}/>
                    <Route path="/alumni" component={Alumni}/>
                    <Route path="/contact-us" component={Contact}/>
                    <Route component={Error}/>
                </Switch>
            </Layout>
        </Router>
    </>
  );
};

export default App;

