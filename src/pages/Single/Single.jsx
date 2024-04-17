import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MContext } from "../../context/ContextComponent";



const Single = () => {
  const {id} = useParams();
  const { realState, addToCart,addToWishlist} = useContext(MContext);

  const state = realState.find((p) => p.id === parseInt(id));
  const idx=state.id;
  const name =state.estateTitle;
  // console.log(idx);
  const handleAddToCart = () => {
    addToCart(state);
  };
  const handleAddWishlist = () => {
    addToWishlist(state);
  };
  useEffect(()=>{
    document.title =`${name} | state`
  },[]);
  
  return (
    <>
         <div className="h-[70px]"></div>
         <div class="grid grid-cols-1 lg:grid-cols-1 gap-4">
         <img src={state.banner} className="h-[400px] w-full rounded-lg"/>
         </div>
          <div className="h-[50px]">

          </div>
         <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 rounded-lg">
            <div className="text-center">
              <img src={state.relevantImage} className="rounded-lg h-[400px] w-full relative z-100"/>
              <span className="text-[15px]">Status:-{state.status}</span>
            </div>
            
         
            <div className="text-[15px]">
             <p><spna>Name:</spna>    {state.estateTitle}</p>     
              <p><spna>Category:</spna>  {state.segmentName}</p>
              <hr className="mt-[6px] mb-[6px]"></hr>
              <p><spna>Name:</spna>  {state.description}</p>
              <hr className="mt-[6px] mb-[6px]"></hr>
            
              <p><spna>Size:</spna>  {state.area} </p>
              <p><spna>Facilities:</spna>  {state.facilities}</p>
              
              <hr className="mt-[6px] mb-[6px]"></hr>
            
              <br/>
            <div className="badge badge-outline">Price:{state.price} $</div> 
                  
            <div className="badge badge-outline"><button onClick={handleAddToCart}>Add to Cart</button></div>
                  
            <div className="badge badge-outline"><button onClick={handleAddWishlist}>Wishlist</button></div>
                  
            <br></br>
            </div>
          </div>

          <div className="h-[50px]">

           </div>
    </>
   
  );
};

export default Single;