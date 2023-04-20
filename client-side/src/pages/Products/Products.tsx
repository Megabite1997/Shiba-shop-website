import React, { FunctionComponent, useContext } from "react";
import { Link } from "react-router-dom";

import { listRecommendedItems } from "../../dummyData";

import CartContext from "../../store/cart-context";

interface listRecommendedItemsProps {
  image: string;
  name: string;
  id: number;
  details: string;
  stars: number;
  price: number;
}

const ProductsPage: FunctionComponent = () => {
  const CartCtx = useContext(CartContext);

  const addCartHandler = (element: listRecommendedItemsProps) => {
    CartCtx.addItemsHandler({ ...element, quantity: 1 });
  };

  const listSubPages = [
    { name: "food", path: "food" },
    { name: "treats", path: "treats" },
    { name: "toys", path: "toys" },
    { name: "clothes", path: "clothes" },
    { name: "grooming", path: "grooming" },
  ];

  return (
    <div className="bg-shiba-yellow h-full pb-10">
      <div className="hidden md:grid grid-flow-col justify-center gap-20 pt-40 pb-20">
        {listSubPages.map((element, index) => (
          <Link
            key={index}
            className="bg-white py-2 px-6 capitalize hover:animate-tilt-shaking rounded-lg"
            to={element.path}
          >
            {element.name}
          </Link>
        ))}
      </div>
      <div className="px-20">
        <h2 className="text-2xl font-semibold  pb-10">Recommended items</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10 p-10 bg-white justify-center">
          {listRecommendedItems.map((element, index) => (
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
    </div>
  );
};

export default ProductsPage;
