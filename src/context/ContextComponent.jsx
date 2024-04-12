import { createContext, useEffect, useState } from "react";

export const MContext = createContext();
function ContextComponent({children}){
  const [realState, setRealState] = useState([]);
  const [topPrice, setTopPrice] = useState([]);
  
    useEffect(() =>{
        fetch("./residential.json")
        .then((res) =>res.json())
        .then((data)=>{
            setRealState(data);
            const tprice = [...data].sort((a,b) =>b.price -a.price);
            const limitedData = tprice.slice(0, 3);
            setTopPrice(limitedData);
        })
    },[])

  return <MContext.Provider value={{realState,topPrice}}>
   {children}
  </MContext.Provider>
}

export default ContextComponent;

