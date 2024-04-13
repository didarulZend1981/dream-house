import { useContext } from "react";
import { MContext } from "../../context/ContextComponent";

const WishToState = () => {
  const {wishlistItems} = useContext(MContext);
  return (
    <div>
      <div className="h-[70px]"></div>
      <h2>add to wish list</h2>
      <ul>
        {wishlistItems.map((item, index) => (
          <li key={index}>{item.estateTitle} - ${item.price}</li>
        ))}
      </ul>
    </div>
  );
};

export default WishToState;