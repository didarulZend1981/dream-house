import { NavLink } from "react-router-dom";


const Card = ({ realState }) => {
  const { id,relevantImage,estateTitle,price } = realState;
  console.log(id);
  return (
    <div className="card w-90 bg-base-100 shadow-xl">
          <figure><img src={relevantImage} alt="Shoes" className="h-[200px] min-w-full" /></figure>
          <div className="card-body">
              <h2 className="card-title">
              {estateTitle}
              <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end border-t-2 py-5 mt-5">
                  <div className="badge badge-outline">Price:{price}</div> 
                  <div className="badge badge-outline"><NavLink to="/single">Details</NavLink></div> 
                  <div className="badge badge-outline">Add to</div>
                  <div className="badge badge-outline">Wishlist</div>
                  
                  
              </div>
          </div>
      </div>
  );
};

export default Card;