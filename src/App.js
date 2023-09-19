import React from 'react';
import './App.css';
import Home from './components/pages/Home';
import SignUp from './components/pages/SignUp';
import Login from './components/pages/Login';
import Onboarding from './components/pages/Onboarding';
import {
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar';
import ProtectedRoute from './ProtectedRoute';
import { AuthProvider } from './AuthContext';
import Employer from './components/pages/Employer';
import LoginEmployer from './components/pages/LoginEmployer';

function App() {
  return (
    <>  
      <AuthProvider>
       <Navbar/>
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='home' exact element={<Home/>} />
          <Route path='login' element={<Login/>} />
          <Route path='login-employer' element={<LoginEmployer/>} />
          <Route path='employer' element={<Employer/>} />
          <Route path='dashboard' element={<ProtectedRoute component={Onboarding}/>} />
          <Route path='sign-up' element={<SignUp/>} />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
