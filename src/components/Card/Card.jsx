import { useContext } from "react";
import { Link } from "react-router-dom";
import { MContext } from "../../context/ContextComponent";
import { MdOutlinePreview } from "react-icons/md";
import { BsCartCheckFill } from "react-icons/bs";
import { MdAddToPhotos } from "react-icons/md";

const Card = ({ realState }) => {
  const { addToCart,addToWishlist} = useContext(MContext);
 
  //  console.log(realState);
  const { id,relevantImage,estateTitle,price,status,description } = realState;
  
  return (
    <div className="card w-90 bg-base-100 shadow-xl">
          <figure className="relative">
          <img src={relevantImage} alt="Shoes" className="h-[200px] min-w-full " />
          <div className="border-2 border-white-500/75 absolute flex rounded-full-lg uppercase  text-[red] font-black justify-between transform top-100 right-0 p-[5px]">
          <span className="text-[yellow]">{status}</span>-{price} $
          </div>
          </figure>

          <div className="card-body">
              <h2 className="card-title">
              {estateTitle}
              <div className="badge badge-secondary">{status}</div>
              </h2>
              <p className="justify-center">

              <Link to={`/single/${id}`}>{description.slice(0, 200)}.....</Link></p>
              
              <div className="card-actions justify-center border-t-2 py-5 mt-5">
                  
              <div className="flex badge badge-outline p-2 h-6">
                    <Link to={`/single/${id}`}>
                      <div className="flex justify-between h-6">
                      <span><MdOutlinePreview className="mt-1" /></span>
                          <span>View Property</span>
                      
                      </div>
                      
                      </Link>
                      
                  </div> 
                   
                  <div className="badge badge-outline p-2"><button onClick={() => addToCart({ id })}><BsCartCheckFill /></button></div>
                  
                  <div className="badge badge-outline p-2"><button onClick={() => addToWishlist({ id })}><MdAddToPhotos /></button></div>
                  
                  
              </div>
          </div>
      </div>
  );
};

export default Card;