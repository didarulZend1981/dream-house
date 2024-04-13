import { useContext } from "react";
import { useParams } from "react-router-dom";
import { MContext } from "../../context/ContextComponent";



const Single = () => {
  const {id} = useParams();
  const { realState, addToCart,addToWishlist} = useContext(MContext);
  const state = realState.find((p) => p.id === parseInt(id));
  return (
    <>
         <div className="h-[70px]"></div>
         <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div><img src={state.relevantImage}/></div>
            
            
            <div>{state.description}
            
              <br></br>
            <div className="badge badge-outline">Price:{state.price}</div> 
                  
            <div className="badge badge-outline"><button onClick={() => addToCart({ id })}>Add to Cart</button></div>
                  
            <div className="badge badge-outline"><button onClick={() => addToWishlist({ id })}>Wishlist</button></div>
                  
            
            </div>
          </div>
    </>
   
  );
};

export default Single;