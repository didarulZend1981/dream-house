import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar";
import Footer from "../pages/Shared/footer";


const Root = () => {
  return (
    <div>
       <Navbar></Navbar>
      <div className="max-w-6xl mx-auto font-poppins min-h-[calc(100vh-100px)]">
      
         <Outlet></Outlet>
     
       </div>
       <Footer></Footer>
      
    </div>
   
  );
};

export default Root;