import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MContext } from "../../context/ContextComponent";
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { MdOutlinePriceCheck } from "react-icons/md";
import { BsCartCheckFill } from "react-icons/bs";
import { MdAddToPhotos } from "react-icons/md";
const Single = () => {
  const {id} = useParams();
  const { realState, addToCart,addToWishlist} = useContext(MContext);

  const state = realState.find((p) => p.id === parseInt(id));
  const idx=state.id;
  const name =state.estateTitle;
  const lat=state.location.latitude;
  const lon=state.location.longitude;

//  console.log(lat);
  const position = [lat, lon];
  const handleAddToCart = () => {
    addToCart(state);
  };
  const handleAddWishlist = () => {
    addToWishlist(state);
  };
  useEffect(()=>{
    document.title =`${name} | state`
  },[]);
  



  const customMarker = new L.icon({
    iconUrl: "https://unpkg.com/leaflet@1.5.1/dist/images/marker-icon.png",
    iconSize: [25, 41],
    iconAnchor: [10, 41],
    popupAnchor: [2, -40],
  });

  
  return (
    <>
         <div className="h-[70px]"></div>
         <div class="grid grid-cols-1 lg:grid-cols-1 gap-4 relativ">
         <img src={state.banner} className="h-[400px] w-full rounded-lg"/>
         <div className="w-[500px] h-[100px] mx-auto text-[white] text-justify font-bold text-[20px] text uppercase  absolute flex justify-between  left-0 right-0 top-1/3">
            <h2 className="px-auto">Wellcome  <span className="text-[red]">{state.estateTitle}</span> </h2>
        
          </div>
         </div>
          <div className="h-[50px]">

          </div>
         <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 rounded-lg">
            <div className="text-center relative p-20">
              <img src={state.relevantImage} className="rounded-lg h-[400px] w-full relative z-100"/>
              
            
          
              


            
            
            </div>
            
         
            <div className="text-[15px] font-medium">

              <div className="mt-5 mb-5 uppercase text-center">Discription 
              <hr className="mt-[50px]"></hr>
              </div>
             <p><spna>Name:</spna>    {state.estateTitle}</p>     
              <p><spna>Category:</spna>  {state.segmentName}</p>
              <hr className="mt-[6px] mb-[6px]"></hr>
              <p><spna>Name:</spna>  {state.description}</p>
              <hr className="mt-[6px] mb-[6px]"></hr>
              <span className="text-[15px]">Status:-{state.status}</span>
              <p><spna>Size:</spna>  {state.area}  sq ft
</p>
              <p><spna>Facilities:</spna>  {state.facilities}</p>
              
              <hr className="mt-[6px] mb-[6px]"></hr>
            
              <br/>
              <div className="flex gap-3">
              <div className="badge badge-outline"><MdOutlinePriceCheck /> Price:{state.price} $</div> 
                  
                  <div className="badge badge-outline"><button onClick={handleAddToCart}><BsCartCheckFill /></button></div>
                        
                  <div className="badge badge-outline"><button onClick={handleAddWishlist}><MdAddToPhotos /></button></div>
              </div>
            
                  
            
            </div>
          </div>

          <div className="h-[500px] mt-[20px] mb-[50px]">
          <MapContainer center={position} zoom={13} className="h-[500px] rounded-lg">
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position}>
      <Popup>
        {name}
      </Popup>
    </Marker>
  </MapContainer>
           </div>
    </>
   
  );
};

export default Single;