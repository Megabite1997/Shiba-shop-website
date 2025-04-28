import React, { FC, useState } from "react";

interface Props {
  children: string | JSX.Element;
}

export interface CartProps {
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
  addItemsHandler: (item: CartProps, itemQuantity?: number) => void;
  removeItemHandler: (item: CartProps) => void;
}

const CartContext = React.createContext<CartContextProps>({
  cart: [],
  addItemsHandler: () => {},
  removeItemHandler: () => {},
});

export const CartContextProvider: FC<Props> = (props) => {
  const [cart, setCart] = useState<CartProps[]>([]);

  const addItemsHandler = (item: CartProps, itemQuantity?: number): void => {
    const existingItemId = cart.some((element) => element.id === item.id);
    if (existingItemId) {
      const updatedCart = cart.map((element) => {
        if (element.id === item.id) {
          return { ...element, quantity: itemQuantity || element.quantity + 1 };
        }
        return element;
      });
      setCart(updatedCart);
    } else {
      setCart((prevState) => [...prevState, item]);
    }
  };

  const removeItemHandler = (item: CartProps): void => {
    const { id } = item;

    const filterArray = cart.filter((element) => element.id !== id);

    setCart(filterArray);
  };

  return (
    <CartContext.Provider
      value={{ cart: cart, addItemsHandler, removeItemHandler }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
