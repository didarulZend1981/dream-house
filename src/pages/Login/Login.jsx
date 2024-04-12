import { NavLink } from "react-router-dom";


const Login = () => {
  return (
    <div>
      <div className="h-[70px]"></div>
      <h2 className="text-3xl my-10 text-center">Please Login</h2>
      <div className="w-1/3 mx-auto gap-3 mt-20 my-auto min-h-max text-center mb-5">

         
          <label className="input input-bordered flex items-center gap-2 mb-5">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
          <input type="text" className="grow" placeholder="Email" />
          </label>
         
          <label className="input input-bordered flex items-center gap-2 mb-5">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
          <input type="password" className="grow" value="password" />
          </label>


          <button className="btn btn-outline btn-success">Login</button>




          
      </div>
      <div className="w-1/3 mx-auto grid grid-cols-2 gap-4 mt-5 my-auto min-h-max text-center mb-3 border-t-2 pt-5">
      <button className="btn btn-outline btn-primary">Primary</button>
      <button className="btn btn-outline btn-secondary">Secondary</button>
      </div>
      <p className="text-center">do not have account  <NavLink to="/register" className="text-[red]">Register</NavLink></p>
    </div>
  );
};

export default Login;