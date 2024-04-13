import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { MContext } from "../../context/ContextComponent";


const Navbar = () => {
  const {cartItems,wishlistItems} =useContext(MContext);
  const cartItemsCount =cartItems.length;
  const wishlistItemsCount =wishlistItems.length;
  if(cartItemsCount>0){
    const bage='<span className="text-[red] text-[25px]">{cartItemsCount}</span>';
  }else{

  }
  if(wishlistItemsCount>0){
    const bage='<span className="text-[red] text-[25px]">{wishlistItemsCount}</span>';
  }else{
    
  }
  const navLinks = <>
      <li><a><NavLink to="/" className={({isActive})=>
      isActive? 'text-primary font-blod':'font-bold'
      }>Home</NavLink></a></li>
    <li><a><NavLink to="/login" className={({isActive})=>
      isActive? 'text-primary font-blod':'font-bold'
      }>Login</NavLink></a></li>
    <li><a><NavLink to="/register" className={({isActive})=>
      isActive? 'text-primary font-blod':'font-bold'
      }>register</NavLink></a></li>
    <li><a><NavLink to="/addToState" className={({isActive})=>
      isActive? 'text-primary font-blod':'font-bold'
      }>Add to State<span className="text-[red] text-[25px]">{cartItemsCount}</span></NavLink></a></li>

     <li><a><NavLink to="/wishToState" className={({isActive})=>
      isActive? 'text-primary font-blod':'font-bold'
      }>Wish to State<span className="text-[red] text-[25px]">{wishlistItemsCount}</span></NavLink></a></li>

      
    </>
  return (
    <div>
      <div className="navbar bg-base-100 shadow-lg px-4 fixed z-10 h-[40px]">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navLinks}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navLinks}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>
    </div>
  );
};

export default Navbar;