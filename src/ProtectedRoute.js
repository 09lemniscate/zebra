import React, { useContext } from 'react';
import {  Navigate } from 'react-router-dom';
import  {AuthContext}  from './AuthContext';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const  {isAuthenticated} = useContext(AuthContext);
    console.log(isAuthenticated)
    if(isAuthenticated){
        return <Component rest/>
    } else {
        return <Navigate to="/"/>
    }
};

export default ProtectedRoute;