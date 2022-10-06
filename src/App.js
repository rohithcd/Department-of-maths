import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Layout from "./Layout"; // Wraps App componentt with Navbar and Footer
import "./App.css"; // Importing global styles

/*--- Importing Primary Options --*/
import {Main, People, Research, Academics, Facilities} from "./Imports";

/*--- Importing Options Under People Section ---*/
import {Profile, Staff, ResearchScholars, RetiredFaculty} from "./Imports";

import {Campus, Olympiad, Events, Gallery_main, ActivitiesMain, Outreach, Alumni, Contact} from "./Imports";

import Error from "./Components/Reusable/Error/Error";

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
                    <Route path={'/people/retired-faculty'}><RetiredFaculty/></Route> 
                    <Route path="/people/faculty"><People/></Route>
                    <Route path={"/academics/:link"}><Academics/></Route>
                    <Route path="/activities" component={ActivitiesMain}/>
                    <Route path={"/research/:link"}><Research/></Route>
                    <Route path="/gallery/campus" component={Campus}/>
                    <Route path="/gallery/olympiad" component={Olympiad}/>
                    <Route path="/gallery/events" component={Events}/>
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

