import { useState } from 'react';
import TaskMainComponent from './components/TaskMainComponent';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainContent from './components/MainContent';
import HomeComponent from './components/HomeComponent';
import StarredComponent from './components/StarredComponent';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<TaskMainComponent />}>
          <Route index element={<HomeComponent />}></Route>
          <Route path='/star' element={<StarredComponent />}></Route>
        </Route>

      </Routes>

    </Router>
  )
}

export default App
