import React, { FC, useContext } from "react";
import CartContext from "../store/cart-context";

import ImageEmptyBox from "../assets/empty-box.jpeg";

import CartItems from "../components/CartItems";

interface CartProps {}

const Cart: FC<CartProps> = ({}) => {
  const CartCtx = useContext(CartContext);
  const { cart } = CartCtx;
  return (
    <div className="pt-40">
      {cart.length <= 0 && (
        <div>
          <h1 className="pt-10 text-center text-3xl font-bold ">
            Your cart is empty.
          </h1>
          <img className="mx-auto mt-10" src={ImageEmptyBox} alt="Empty box" />
        </div>
      )}

      {cart.length > 0 && (
        <div>
          <CartItems />
        </div>
      )}
    </div>
  );
};

export default Cart;
