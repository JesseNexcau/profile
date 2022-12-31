import React from 'react';
import { Routes, Route, useParams } from 'react-router-dom';

import Home from './pages/Home/Page';
import Profile from './pages/Profile/Profile';
import Roadmap from './pages/Roadmap/Roadmap';


export default () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/projects" element={<Roadmap />}></Route>
      </Routes>
    </>
  );
}