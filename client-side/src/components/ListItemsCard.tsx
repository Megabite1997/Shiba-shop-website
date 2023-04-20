import React, { FC, useContext } from "react";
import CartContext from "../store/cart-context";
import { listRecommendedItemsProps } from "../types";

interface ListItemsCardProps {
  title?: string;
  list: listRecommendedItemsProps[];
}

const ListItemsCard: FC<ListItemsCardProps> = ({ title, list }) => {
  const CartCtx = useContext(CartContext);

  const addCartHandler = (element: listRecommendedItemsProps) => {
    CartCtx.addItemsHandler({ ...element, quantity: 1 });
  };

  return (
    <div className="md:px-20">
      <h2 className="text-2xl font-semibold pb-10 capitalize">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-10 p-10 bg-white justify-center">
        {list.map((element, index) => (
          <div className="bg-amber-600 max-w-16 rounded-xl" key={index}>
            <div className="p-4 h-80">
              <img
                className="h-full mx-auto"
                src={element.image}
                alt="Pedigree"
              />
            </div>
            <hr />
            <div className="grid bg-amber-300 p-4 gap-2 h-64 rounded-b-xl content-between">
              <div className="grid gap-2">
                <div>Brand: {element.name}</div>
                <div>details: {element.details}</div>
                <div>stars: {element.stars}</div>
                <div>price: {element.price}$</div>
              </div>

              <button
                className="bg-lime-700 hover:bg-lime-900 py-2 text-white max-h-10 rounded-xl"
                onClick={() => addCartHandler(element)}
              >
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListItemsCard;
