import React from 'react';
import { Routes, Route, useParams } from 'react-router-dom';

import Home from './pages/Home/Page';
import Profile from './pages/Profile/Profile';


export default () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Profile />}></Route>
      </Routes>
    </>
  );
}