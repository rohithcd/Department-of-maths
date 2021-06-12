import React from "react";
import Main from "./Components/Main/Main";
import People from "./Components/People/People";
import Gallery from "./Components/Gallery/Gallery";
import Facilities from "./Components/Facilities/Facilities";
import Activities from "./Components/Activities/Activities";
import Profile from "./Components/People/Profile/Profile";
import Outreach from "./Components/Outreach/Outreach";
import Error from "./Components/Error/Error";
import Layout from "./Layout";


import "./App.css";

import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

const App = () => {

  return (
    <>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path={'/people/:topicId'}> 
              <Profile/>
             </Route>
            <Route path="/people">
              <People/>
            </Route>
            <Route path="/activities" component={Activities}/>
            <Route path="/gallery" component={Gallery}/>
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


/*z-index of each elements 
.section_navbar: 100
.navbar_menu-main: 100
.navbar_menu-side: 10000
.section_box > hr: -1 





*/