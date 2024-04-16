import { useContext, useEffect } from "react";
import { MContext } from "../../context/ContextComponent";

const AddToState = () => {
  const {cartItems} = useContext(MContext);
  console.log(cartItems);
  useEffect(()=>{
    document.title ="Add To State | State";
  },[])
  return (
    <div>
      <div className="h-[70px]"></div>
      <h2>add to card</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>{item.estateTitle} - ${item.price}</li>
        ))}
      </ul>
    </div>
  );
};

export default AddToState;