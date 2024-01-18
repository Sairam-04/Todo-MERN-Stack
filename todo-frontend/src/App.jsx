import { useState } from 'react';
import TaskMainComponent from './components/landing/TaskMainComponent';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainContent from './components/landing/MainContent';
import HomeComponent from './components/landing/HomeComponent';
import StarredComponent from './components/landing/StarredComponent';
import MyTasksComponent from './components/landing/MyTasksComponent';
import Settings from './components/landing/Settings';
import UserLoginComponent from './components/login-signup/UserLoginComponent';
import Login from './components/login-signup/Login';
import SignUp from './components/login-signup/SignUp';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserLoginComponent />}>
          <Route index element={<Login />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/register' element={<SignUp />}></Route>
        </Route>

        <Route path='/home' element={<TaskMainComponent />}>
          <Route index element={<HomeComponent />}></Route>
          <Route path='/home/starred' element={<StarredComponent />}></Route>
          <Route path='/home/my-tasks' element={<MyTasksComponent />}></Route>
          <Route path='/home/settings' element={<Settings />}></Route>
        </Route>

      </Routes>

    </Router>
  )
}

export default App
