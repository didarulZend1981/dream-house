import { useContext, useEffect } from "react";
import { MContext } from "../../context/ContextComponent";

const WishToState = () => {
  const {wishlistItems} = useContext(MContext);
  useEffect(()=>{
    document.title ="Wish To State | State";
  },[])
  return (
    <div>
      <div className="h-[70px]"></div>
      <h2>add to wish list</h2>
      <ul>
        {wishlistItems.map((item, index) => (
          <li key={index}>{item.estateTitle} - ${item.price}</li>
        ))}
      </ul>
    </div>
  );
};

export default WishToState;