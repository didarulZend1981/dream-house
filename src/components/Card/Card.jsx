import { useContext } from "react";
import { Link } from "react-router-dom";
import { MContext } from "../../context/ContextComponent";


const Card = ({ realState }) => {
  const { addToCart,addToWishlist} = useContext(MContext);
 
  //  console.log(realState);
  const { id,relevantImage,estateTitle,price,status,description } = realState;
  
  return (
    <div className="card w-90 bg-base-100 shadow-xl">
          <figure><img src={relevantImage} alt="Shoes" className="h-[200px] min-w-full" /></figure>
          <div className="card-body">
              <h2 className="card-title">
              {estateTitle}
              <div className="badge badge-secondary">{status}</div>
              </h2>
              <p>{description.slice(0, 200)}.....</p>
              <div className="card-actions justify-end border-t-2 py-5 mt-5">
                  <div className="badge badge-outline">Price:{price} $</div> 
                  
                  <div className="badge badge-outline"><Link to={`/single/${id}`}>View Property</Link></div> 
                  <div className="badge badge-outline"><button onClick={() => addToCart({ id })}>Add to Cart</button></div>
                  
                  <div className="badge badge-outline"><button onClick={() => addToWishlist({ id })}>Wishlist</button></div>
                  
                  
              </div>
          </div>
      </div>
  );
};

export default Card;