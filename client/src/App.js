import React, { Component } from "react";

import {Router, Route, browserHistory, Redirect} from "react-router";

import Home from './components/Home'
import StudentHome from './components/StudentHome'
import NewRecord from './components/NewRecord'
import ViewRecord from './components/ViewRecord';
import Educational from './components/EducationalDetails/Educational'
import EducationHome from './components/EducationHome'
import RecordDetails from './components/RecordDetails'

import "./App.css";

class App extends Component {

  render() {
      return (
        <Router history={browserHistory}>
            <Redirect from="/" to="/home" />
            <Route>
              <Route path="Student" component={StudentHome}/>
              <Route path="newRecord" component={NewRecord}/>
              <Route path = "viewrecord/:recordId" component = {ViewRecord}/>
              <Route path = "home" component = {Home}></Route>
              <Route path = "Institute" component = {EducationHome}></Route>
              <Route path = "recordData/Education/:recordId/" component = {Educational}/>
              <Route path = "educationUpdate/:recordId" component = {RecordDetails}></Route>

            </Route>
        </Router>
    );
  }
}
export default App;
