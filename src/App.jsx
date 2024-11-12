import React, { useState } from 'react'
import {Route, Routes} from "react-router-dom"

import HomePage from './components/Pages/HomePage/HomePage.jsx'
import Bg from './components/Pages/Bg/Bg.jsx'
import Uk from './components/Pages/Uk/Uk.jsx'
import NotPage from './components/Pages/NotPage/NotPage.jsx'


import './App.css'


function App() {
  return (
    <>
      <Routes>
        <Route index path='white-store' element={<HomePage/>}/>
        <Route path='*' element={<NotPage/>}/>
        <Route path='white-storebg' element={<Bg/>}/>
        <Route path='/white-storeUk' element={<Uk/>}/>
      </Routes>
    </>
  );
}

export default App;
