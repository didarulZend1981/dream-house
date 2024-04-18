import { useContext, useEffect } from "react";
import { MContext } from "../../context/ContextComponent";
import { CiCircleRemove } from "react-icons/ci";
const AddToState = () => {
  const {cartItems,removeCart} = useContext(MContext);
  
  useEffect(()=>{
    document.title ="Add To State | State";
  },[])
  return (
    <div>
      <div className="h-[100px]"></div>
      <h2 className="text-center uppercase border-3 w-[200px] mx-auto h-[50px]">add to card
      <hr className="w-[150px] mx-auto mt-[5px]"></hr>
      </h2>
      <ul className="w-1/2 mx-auto border-2">
       
      
        <li className="flex uppercase">
        <sapn className="border-1 p-2 w-[20px]">SL</sapn> 
      <sapn className="border-1 p-2 w-[300px]">Property</sapn>
      <sapn className="border-1 p-2 w-[100px]">Price</sapn>
      <sapn className="border-1 p-2 w-[100px]">Size</sapn>
      <sapn className="border-1 p-2 w-[100px] text-end"></sapn>
      </li>
       
        
        {cartItems.map((item, index) => (
          <li key={index} className="flex border-2 border-b-0 uppercase text-red">
            <span className="border-1 p-2 w-[20px] border-l-0"> {index+1} </span>
            <span className="border-1 p-2 w-[300px]"> {item.estateTitle} </span>
            <span className="border-1 p-2 w-[100px] text-end"> ${item.price} </span>
            <span className="border-1 p-2 w-[100px] text-end"> {item.area} </span>
            <span onClick={() => removeCart(item)} className="border-1 p-2 w-[100px]  border-l-0 text-end"><CiCircleRemove className="text-[red]" /></span>
            
            
          </li>
        ))}
      </ul>

      
    </div>
  );
};

export default AddToState;