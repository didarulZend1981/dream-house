import { useContext } from "react";
import { MContext } from "../../context/ContextComponent";


const Banner = () => {
  const {realState} = useContext(MContext);
  // console.log(topPrice);
  return (
    <div>
     
      
      <div className="carousel w-full h-[300px]">
    <div id="slide1" className="carousel-item relative w-full">
      <img src="https://i.ibb.co/QdnDKvn/4.jpg" className="w-full" />
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide4" className="btn btn-circle">❮</a> 
        <a href="#slide2" className="btn btn-circle">❯</a>
      </div>
      
    </div> 
    <div id="slide2" className="carousel-item relative w-full">
      <img src="https://i.ibb.co/x8hxM62/2.jpg" className="w-full rounded-lg" />
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide1" className="btn btn-circle">❮</a> 
        <a href="#slide3" className="btn btn-circle">❯</a>
      </div>
    </div> 
    <div id="slide3" className="carousel-item relative w-full">
      <img src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg" className="w-full rounded-lg" />
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide2" className="btn btn-circle">❮</a> 
        <a href="#slide4" className="btn btn-circle">❯</a>
      </div>
    </div> 
    <div id="slide4" className="carousel-item relative w-full">
      <img src="https://i.ibb.co/QdnDKvn/4.jpg" className="w-full rounded-lg" />
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide3" className="btn btn-circle">❮</a> 
        <a href="#slide1" className="btn btn-circle">❯</a>
      </div>
    </div>
  </div>

    </div>
  );
};

export default Banner;