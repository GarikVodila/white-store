import React, { useState } from 'react'
import {Route, Routes} from "react-router-dom"

import HomePage from './components/Pages/HomePage/HomePage.jsx'
import Bg from './components/Pages/Bg/Bg.jsx'
import Uk from './components/Pages/Uk/Uk.jsx'
import Us from './components/Pages/Us/Us.jsx'
import NotPage from './components/Pages/NotPage/NotPage.jsx'


import './App.css'


function App() {
  return (
    <>
      <Routes>
        <Route index path='' element={<HomePage/>}/>
        <Route path='white-storebg' element={<Bg/>}/>
        <Route path='white-storeuk' element={<Uk/>}/>
        <Route path='us' element={<Us/>}/>
        <Route path='*' element={<NotPage/>}/>
      </Routes>
    </>
  );
}

export default App;
