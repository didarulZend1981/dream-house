import { Link, NavLink } from "react-router-dom";

import useAuth from "../../hooks/useAuth";

const Footer = () => {
  return (
    
      <footer className="footer footer-center p-10 bg-base-200">
          <nav className="grid grid-flow-col gap-4">
           <ul className="flex gap-4">
           <li><NavLink to="/" className={({isActive})=>
      isActive? 'text-primary font-blod':'font-bold'
      }>Home</NavLink></li>
    <li><NavLink to="/login" className={({isActive})=>
      isActive? 'text-primary font-blod':'font-bold'
      }>Login</NavLink></li>
    <li><NavLink to="/register" className={({isActive})=>
      isActive? 'text-primary font-blod':'font-bold'
      }>register</NavLink></li>

    <li><NavLink to="/about" className={({isActive})=>
      isActive? 'text-primary font-blod':'font-bold'
      }>About</NavLink></li>
           </ul>
          
          </nav> 
  
  
  
    </footer>
  );
};

export default Footer;