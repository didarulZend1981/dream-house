import { NavLink } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import Card from "../../components/Card/Card";


const Home = () => {
  return (
    <div>
      <div className="h-16"></div>
      <Banner></Banner>
      <div className="grid grid-cols-3 gap-5 mt-20 mb-20">
   

      <div className="card w-90 bg-base-100 shadow-xl">
          <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
          <div className="card-body">
              <h2 className="card-title">
              Shoes!
              <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end border-t-2 py-5 mt-5">
                  <div className="badge badge-outline">Price</div> 
                  <div className="badge badge-outline">Details</div> 
                  <div className="badge badge-outline">Add to</div>
                  <div className="badge badge-outline">Wishlist</div>
              </div>
          </div>
      </div>

      <div className="card w-90 bg-base-100 shadow-xl">
          <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
          <div className="card-body">
              <h2 className="card-title">
              Shoes!
              <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end border-t-2 py-5 mt-5">
                  <div className="badge badge-outline">Price</div> 
                  <div className="badge badge-outline"><NavLink to="/single">Details</NavLink></div> 
                  <div className="badge badge-outline">Add to</div>
                  <div className="badge badge-outline">Wishlist</div>
                  
              </div>
          </div>
      </div>

      <div className="card w-90 bg-base-100 shadow-xl">
          <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
          <div className="card-body">
              <h2 className="card-title">
              Shoes!
              <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end border-t-2 py-5 mt-5">
                  <div className="badge badge-outline">Price</div> 
                  <div className="badge badge-outline">Details</div> 
                  <div className="badge badge-outline">Add to</div>
                  <div className="badge badge-outline">Wishlist</div>
              </div>
          </div>
      </div>

      <div className="card w-90 bg-base-100 shadow-xl">
          <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
          <div className="card-body">
              <h2 className="card-title">
              Shoes!
              <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end border-t-2 py-5 mt-5">
                  <div className="badge badge-outline">Price</div> 
                  <div className="badge badge-outline">Details</div> 
                  <div className="badge badge-outline">Add to</div>
                  <div className="badge badge-outline">Wishlist</div>
              </div>
          </div>
      </div>


      <div className="card w-90 bg-base-100 shadow-xl">
          <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
          <div className="card-body">
              <h2 className="card-title">
              Shoes!
              <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end border-t-2 py-5 mt-5">
                  <div className="badge badge-outline">Price</div> 
                  <div className="badge badge-outline">Details</div> 
                  <div className="badge badge-outline">Add to</div>
                  <div className="badge badge-outline">Wishlist</div>
              </div>
          </div>
      </div>


      <div className="card w-90 bg-base-100 shadow-xl">
          <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
          <div className="card-body">
              <h2 className="card-title">
              Shoes!
              <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end border-t-2 py-5 mt-5">
                  <div className="badge badge-outline">Price</div> 
                  <div className="badge badge-outline">Details</div> 
                  <div className="badge badge-outline">Add to</div>
                  <div className="badge badge-outline">Wishlist</div>
              </div>
          </div>
      </div>

    
        
     
    </div>

      </div>
    
  );
};

export default Home;