import { createContext, useEffect, useState } from "react";

export const MContext = createContext();
function ContextComponent({children}){
  const [realState, setRealState] = useState([]);
  const [topPrice, setTopPrice] = useState([]);

  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);

  
  const addToCart = (item) => {
    const isExit = cartItems.find(b=>b.id===item.id);
    if(!isExit){
          setCartItems([...cartItems, realState.find(b=>b.id===item.id)]);
        }else{

    }

  
  };

  const addToWishlist = (item) => {
    // setWishlistItems([...wishlistItems, item]);
    const isExit = wishlistItems.find(b=>b.id===item.id);
    if(!isExit){
      setWishlistItems([...wishlistItems, realState.find(b=>b.id===item.id)]);
        }else{

    }
  };
  
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

    const value = {
      realState,
      topPrice,
      cartItems,
      wishlistItems,
      addToCart,
      addToWishlist,
      
    };
    // console.log(cartItems);
  return <MContext.Provider value={value}>
   {children}
  </MContext.Provider>
}

export default ContextComponent;

