import { useContext } from "react";
import { MContext } from "../../context/ContextComponent";
import { Link } from "react-router-dom";


const Banner = () => {
  const {realState} = useContext(MContext);
  // console.log(topPrice);
  return (
    <div>
     
      
      <div className="carousel w-full h-[500px]">
    <div id="slide1" className="carousel-item relative w-full">
      <img src="https://i.ibb.co/QdnDKvn/4.jpg" className="w-full rounded-lg"/>
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide3" className="btn btn-circle">❮</a> 
        <a href="#slide2" className="btn btn-circle">❯</a>
      </div>
      <div className="w-[500px] h-[100px] mx-auto text-[white] text-justify font-bold text-[40px] text uppercase  absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <h2 className="px-auto">Great Offer <br/>...<sapn className="text-[red]"><Link to={`/single/4`}>Click here</Link></sapn></h2>
        
      </div>
      
    </div> 
    <div id="slide2" className="carousel-item relative w-full rounded-lg">
      <img src="https://i.ibb.co/x8hxM62/2.jpg" className="w-full rounded-lg" />
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        
        <a href="#slide1" className="btn btn-circle">❮</a> 
        <a href="#slide3" className="btn btn-circle">❯</a>
      </div>
      <div className="w-[500px] h-[100px] mx-auto text-[white] text-justify font-bold text-[40px] text uppercase  absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <h2 className="px-auto">Sutable place <br/>...<sapn className="text-[red]"><Link to={`/single/2`}>Click here</Link></sapn></h2>
        
      </div>

    </div> 
    <div id="slide3" className="carousel-item relative w-full rounded-lg">
      <img src="https://i.ibb.co/J2Sbs45/6.jpg" className="w-full rounded-lg" />
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide2" className="btn btn-circle">❮</a> 
        <a href="#slide1" className="btn btn-circle">❯</a>
      </div>
      <div className="w-[500px] h-[100px] mx-auto text-[white] text-justify font-bold text-[40px] text uppercase  absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <h2 className="px-auto">Favarite place <br/>...<sapn className="text-[red]"><Link to={`/single/2`}>Click here</Link></sapn></h2>
        
      </div>
    </div> 
    
  </div>

    </div>
  );
};

export default Banner;