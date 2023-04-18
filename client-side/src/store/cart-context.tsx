import React, { FC, useState } from "react";

interface Props {
  children: string | JSX.Element;
}

interface CartProps {
  image: string;
  name: string;
  id: number;
  details: string;
  stars: number;
  price: number;
  quantity: number;
}

interface CartContextProps {
  cart: CartProps[];
  addItemsHandler: (item: CartProps) => void;
}

const CartContext = React.createContext<CartContextProps>({
  cart: [],
  addItemsHandler: (item) => {},
});

export const CartContextProvider: FC<Props> = (props) => {
  const [cart, setCart] = useState<CartProps[]>([]);

  const addItemsHandler = (item: CartProps): void => {
    setCart((prevState) => [...prevState, item]);
  };

  return (
    <CartContext.Provider value={{ cart: cart, addItemsHandler }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
