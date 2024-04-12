import React from 'react';

const menuBar = () => {
  return (
    <>
    <li><a><NavLink to="/">Home</NavLink></a></li>
    <li><a><NavLink to="/login">Login</NavLink></a></li>
    <li><a><NavLink to="/register">register</NavLink></a></li>
    </>
    
  );
};

export default menuBar;