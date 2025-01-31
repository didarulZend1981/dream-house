import React from 'react';
import useAuth from '../../hooks/useAuth';

import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
  const {user,loading} =useAuth();
  const location = useLocation();
  console.log(location);
  if(loading){
    return <h1 className='text-4xl'>loding</h1>
  }
  if(!user){
    return <Navigate to="/login" state={location.pathname || '/'} ></Navigate>;
  }

  return (
    <div>
        {children}
  </div>
  )
     

};

export default PrivateRoute;