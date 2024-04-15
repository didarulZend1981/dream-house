import React, { useContext } from 'react';
import { MContext } from '../context/ContextComponent';

const useAuth = () => {
  const all = useContext(MContext);
  
  return all;
    
};

export default useAuth;