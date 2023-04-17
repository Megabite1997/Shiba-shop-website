import React, { FC, useState } from "react";

interface Props {
  children: string | JSX.Element;
}

interface CartProps {
  image: string;
  name: string;
  details: string;
  stars: number;
  price: number;
}

interface CartContextProps {
  cart: CartProps[];
}

const CartContext = React.createContext<CartContextProps>({
  cart: [],
});

export const CartContextProvider: FC<Props> = (props) => {
  const [cart, setCart] = useState<CartProps[]>([]);

  const addItemsHandler = (item: CartProps): void => {
    setCart((prevState) => [...prevState, item]);
  };

  return (
    <CartContext.Provider value={{ cart: cart }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
