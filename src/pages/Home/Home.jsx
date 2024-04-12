import { NavLink } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import Card from "../../components/Card/Card";
import { useContext, useEffect, useState } from "react";
import { MContext } from "../../context/ContextComponent";


const Home = () => {
    const { realState } =useContext(MContext);
    // console.log(realState);
  return (
    <div>
      <div className="h-16"></div>
      <Banner></Banner>
      <div className="grid grid-cols-3 gap-5 mt-20 mb-20">
    

     

      {


                        realState.map(state => 
                        
                        <Card
                            key={state.id}
                            realState={state}
                        ></Card>)
                    }

    
        
     
    </div>

      </div>
    
  );
};

export default Home;