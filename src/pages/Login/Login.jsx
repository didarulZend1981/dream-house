
import {Link, NavLink } from "react-router-dom";

import { useForm } from "react-hook-form";
import SocialLogin from "./SocialLogin";
import useAuth from "../../hooks/useAuth";
import { toast } from 'react-toastify';
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Login = () => {
  useEffect(()=>{
    document.title ="Login | State";
  },[])
  const { signIn } =useAuth();
  const { register,handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state || "/";
  console.log(from);

  const onSubmit = (data) => {
    const {email, password} = data;
        signIn(email, password)
        .then(result=>{
          if(result.user){
            navigate(from);
          }
          toast.success('Login successful');
        })

        .catch(error => {
            // console.error(error);
            const msg ='your email and password should match with the registered email and password If it doesnt match';
            // console.log(error);
            toast.error(msg);
        })

    // console.log(email, password);
  };
  return (
    <div>
      <div className="h-[70px]"></div>
      <h2 className="text-3xl my-10 text-center">Please Login</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="w-1/3 mx-auto gap-3 mt-20 my-auto min-h-max text-center mb-5">

         
          <label className="input input-bordered flex items-center gap-2 mb-5">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
          <input type="text" className="grow" placeholder="Email" 
          {...register("email", { required: true })}
          />
          
          </label>
          {errors.email && <span>This field is required</span>}
         
          <label className="input input-bordered flex items-center gap-2 mb-5">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
          <input type="password" className="grow" 
          
          {...register("password", { required: true })}
          />
          
          </label>
          {errors.password && <span>This field is required</span>}


          <button className="btn btn-outline btn-success">Login</button>




          
      </form>

      <SocialLogin></SocialLogin>
      <p className="text-center">do not have account  <NavLink to="/register" className="text-[red]">Register</NavLink></p>
    </div>
  );
};

export default Login;