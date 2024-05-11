import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Layout from './components/Layout';
import LayLog from './components/authoPages/LayLog';
import Login from './components/authoPages/Login';
import Signup from './components/authoPages/SignUp';
import ResetP from './components/authoPages/ResetP';
import Contact from './components/Contact';
import Courses from './components/Courses';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/Home" element={<Home />} />
          <Route path="/Courses" element={<Courses />} />
          <Route path="/Contact" element={<Contact />} />
        </Route>
        <Route path="/" element={<LayLog />}>
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<Signup />} />
          <Route path="/ResetP" element={<ResetP />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
