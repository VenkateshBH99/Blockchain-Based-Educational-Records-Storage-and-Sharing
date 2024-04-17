import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/Home';
import StudentHome from './components/StudentHome';
import NewRecord from './components/NewRecord';
import ViewRecord from './components/ViewRecord';
import Educational from './components/EducationalDetails/Educational';
import EducationHome from './components/EducationHome';
import RecordDetails from './components/RecordDetails';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/Student" element={<StudentHome />} />
          <Route path="/newRecord" element={<NewRecord />} />
          <Route path="/viewrecord/:recordId" element={<ViewRecord />} />
          <Route path="/home" element={<Home />} />
          <Route path="/Institute" element={<EducationHome />} />
          <Route path="/recordData/Education/:recordId" element={<Educational />} />
          <Route path="/educationUpdate/:recordId" element={<RecordDetails />} />
        </Routes>
      </Router>
    );
  }
}

export default App;