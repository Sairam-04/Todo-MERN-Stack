import { useState } from 'react';
import TaskMainComponent from './components/TaskMainComponent';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainContent from './components/MainContent';
import HomeComponent from './components/HomeComponent';
import StarredComponent from './components/StarredComponent';
import MyTasksComponent from './components/MyTasksComponent';
import Settings from './components/Settings';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<TaskMainComponent />}>
          <Route index element={<HomeComponent />}></Route>
          <Route path='/starred' element={<StarredComponent />}></Route>
          <Route path='/my-tasks' element={<MyTasksComponent />}></Route>
          <Route path='/settings' element={<Settings />}></Route>
        </Route>

      </Routes>

    </Router>
  )
}

export default App
