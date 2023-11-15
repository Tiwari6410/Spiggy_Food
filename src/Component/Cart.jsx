// import React from "react"
import { useDispatch, useSelector } from "react-redux";
import ResMenuItemLIst from "./ResMenuItemLIst";
import { clearCart } from "./Utils/cardSlice";

const Cart = () => {
  const cartItem = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart=()=>{
    dispatch(clearCart())
  }

  return (
    <>
      <div className="text-center  flexs p-4 bg-black text-white font-extrabold rounded-md ">
        <h2>Cart items</h2>
      </div>

      <button onClick={handleClearCart} className="clearbtn bg-red-600 text-white hover:bg-red-900 hover:text-black m-1 p-3 px-5 font-bold rounded-lg">
        🗑️ Clear
      </button>

      <div className="w-6/12 m-auto bg-green-100">
        <ResMenuItemLIst items={cartItem} />
      </div>
    </>
  );
};

export default Cart;
