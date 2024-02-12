import { Routes, Route } from 'react-router-dom';
import NavBar from './Components/nav';
import Landing from './Components/landing';
import Contact from './Components/contact';
import Personal from './Components/personal';
import Experience from './Components/experience';
import Profile from './Components/profile';
import Social from './Components/socials';
import React from 'react';

function Welcome() {
  return (
    <div className="h-screen w-screen bg-fourth">
      <NavBar />
      <Social />
      <Routes>
        <Route path="" element={<Landing />} />
        <Route path="/Home" element={<Landing />} />
        <Route path="/Profile" element={<Landing />} />
        <Route path="/Portfolio" element={<Profile />} />
        <Route path="/Personal" element={<Personal />} />
        <Route path="/Experience" element={<Experience />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default Welcome;
