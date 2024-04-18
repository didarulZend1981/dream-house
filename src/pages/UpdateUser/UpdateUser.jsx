import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import { FaImage } from "react-icons/fa";

const UpdateUser = () => {

  const { createUser,updateUserProfile,user } =useAuth();
  // const [realState, setRealState] = useState([user.photoURL]);
 
  const { register,handleSubmit, formState: { errors } } = useForm();

 
  const onSubmit = (data) => {
    
     const {photoURL,username} = data
    
     
  

        
      
      updateUserProfile(username,photoURL).then(()=>{
          
        
          
        })
       
        toast.success('update create');
       
    
  }


  return (
    <div>
      <div className="h-[100px]"></div>
      <h2 className="text-3xl my-8 text-center uppercase">Update your <span className="text-[red]">
      Profile
        </span></h2>
      <form onSubmit={handleSubmit(onSubmit)} className="w-1/3 mx-auto gap-3 mt-10 my-auto min-h-max text-center mb-5">
         
          
          <label className="input input-bordered flex items-center gap-2 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
          <input type="text" className="grow" placeholder="Display Name"
          {...register("username", )}
           />
          
          </label>
         
          
          
         
          <label className="input input-bordered flex items-center gap-2 mb-4">
          <FaImage />
          <input type="text" className="grow" placeholder="Photo Url" 
          {...register("photoURL")}
           />
          </label>


        
          
          
         
             <button className="btn btn-outline btn-success">submit</button>




          
</form>
  </div>
    
  );
};

export default UpdateUser;