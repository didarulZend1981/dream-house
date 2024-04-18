import React from 'react';
import useAuth from '../../hooks/useAuth';
import { useLocation, useNavigate } from "react-router-dom";
import { FaGooglePlusG } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
const SocialLogin = () => {
  const {googleLogin,gitHubLogin} =useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state || "/";
  const handleSocialLogin = socialProvider =>{

      socialProvider().then(result=>{
          if(result.user){
            navigate(from);
          }
      })
  }

  
  return (
    <div>
      <div className="w-1/3 mx-auto grid grid-cols-2 gap-4 mt-5 my-auto min-h-max text-center mb-3 border-t-2 pt-5">
            <button onClick={()=>handleSocialLogin(googleLogin)} className="btn btn-outline btn-primary"><FaGooglePlusG className='text-[red]'/> Google</button>
             <button onClick={()=>handleSocialLogin(gitHubLogin)} className="btn btn-outline btn-secondary"><FaGithub className='text-[green]'/> GitHub</button>
      </div>
    </div>
  );
};

export default SocialLogin;