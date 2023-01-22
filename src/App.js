import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Layout from "./Layout"; // Wraps App componentt with Navbar and Footer
import "./App.css"; // Importing global styles

/*--- Importing Primary Options --*/
import {Main, People, Research, Academics, Facilities} from "./Imports";

/*--- Importing Options Under People Section ---*/
import {Profile, Staff, ResearchScholars, RetiredFaculty} from "./Imports";

import {Campus, Olympiad, Events, Gallery_main, ActivitiesMain, Outreach, Alumni, Contact} from "./Imports";

import TrainingPrograms from "./Components/Students/TrainingPrograms/TrainingPrograms";
import ScholarshipExams from "./Components/Students/ScholarshipExams/ScholarshipExams";

import PhD from "./Components/Research/PhD/PhD";
import Visitors from "./Components/Research/Visitors/Visitors";
import Placement from "./Components/Research/placements/placements";
import Publications from "./Components/Research/Publications/Publications";
import Achievements from "./Components/Students/Achievements/Achievements";
import ResearchAreas from "./Components/Research/ResearchAreas/ResearchAreas";
import WorkConf from "./Components/Research/WorkConf/WorkConf";
import ResearchAwarded from "./Components/Research/ResearchAwarded/ResearchAwarded";


// if(link === 'PhD-awarded') return <PhD/>;
// else if(link === 'research-areas') return <ResearchAreas/>;
// else if(link === 'placements') return <Placement/>;
// else if(link === 'publications') return <Publications/>;
// else if(link === 'visitors') return <Visitors/>;
// else if(link === 'achievements') return <Achievements/>;
// else if(link === 'work-conf') return <WorkConf/>;
// else if(link === 'research-awarded') return <ResearchAwarded/>;

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
                    <Route path="/research/PhD-awarded" component={PhD}/>

                    <Route path="/research/research-areas" component={ResearchAreas}/>
                    <Route path="/research/placements" component={Placement}/>
                    <Route path="/research/publications" component={Publications}/>
                    <Route path="/research/visitors" component={Visitors}/>

                    <Route path="/research/work-conf" component={WorkConf}/>
                    <Route path="/research/research-awarded" component={ResearchAwarded}/>
                    <Route path="/research/achievements" component={Achievements}/>
                    {/* <Route path={"/research/:link"}><Research/></Route> */}
                    <Route path="/gallery/campus" component={Campus}/>
                    <Route path="/gallery/olympiad" component={Olympiad}/>
                    <Route path="/gallery/events" component={Events}/>
                    <Route path="/gallery" component={Gallery_main}/>
                    <Route path="/facilities" component={Facilities}/>
                    <Route path="/student/training-programs" component={TrainingPrograms}/>
                    <Route path="/student/scholar-exams" component={ScholarshipExams}/>
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

