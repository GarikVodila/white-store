import React, { useState } from 'react'
import {Route, Routes} from "react-router-dom"

import HomePage from './components/Pages/HomePage/HomePage.jsx'
import NotPage from './components/Pages/NotPage/NotPage.jsx'


import './App.css'


function App() {
  return (
    <>
      <Routes>
        <Route index element={<HomePage/>}/>
        <Route path='*' element={<NotPage/>}/>
      </Routes>
    </>
  );
}

export default App;
