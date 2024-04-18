import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";


const Profile = () => {
  const { user } =useAuth();
  return (
    <div>
      <div className="h-[80px]"></div>
        
        <div className="w-1/3 border-[1px] mx-auto gap-3 mt-20 my-auto min-h-max text-center rounded-lg border-lime-500 mb-5 p-5">
        <h2 className="text-3xl my-10 text-center">Profile details</h2>
        <div>
        <div className=" flex items-center gap-2 mb-5">
           <label className="w-[100px]">Name:-</label>
           <span>{user.displayName}</span>
          
          </div>
          <div className=" flex items-center gap-2 mb-5">
           <label className="w-[100px]">Image</label>
           <span><img src={user?.photoURL||"image not found"} className="w-[100px]"/></span>
          
          </div>

        </div>
          
          
         
         
          
          
         

         




          
      </div>

      
      <p className="text-center">You have Edit Profile  <NavLink to="/updateUser" className="text-[red]">Update</NavLink></p>
   
     
    </div>
  );
};

export default Profile;