import React, { FC } from "react";

import ImageKibble from "../assets/products/food/kibble.webp";
import ImageChewyBeef from "../assets/products/treats/Chewy Beef.webp";
import ImageBalls2 from "../assets/products/toys/balls2.webp";
import ImageCloth from "../assets/products/clothes/shirt.webp";
import ImageGrooming from "../assets/products/grooming/shampoo.webp";

const Categories: FC = () => {
  const categoriesArray = [
    {
      name: "food",
      image: ImageKibble,
      path: "products/food",
    },
    {
      name: "treats",
      image: ImageChewyBeef,
      path: "products/treats",
    },

    {
      name: "toys",
      image: ImageBalls2,
      path: "products/toys",
    },
    {
      name: "clothes",
      image: ImageCloth,
      path: "products/clothes",
    },
    {
      name: "grooming",
      image: ImageGrooming,
      path: "products/grooming",
    },
    {
      name: "grooming",
      image: ImageGrooming,
      path: "products/grooming",
    },
    {
      name: "grooming",
      image: ImageGrooming,
      path: "products/grooming",
    },
    {
      name: "grooming",
      image: ImageGrooming,
      path: "products/grooming",
    },
  ];

  return (
    <div className="py-10">
      <h1 className="pb-10 text-2xl text-center">Popular Categories</h1>
      <div className="flex gap-10">
        {categoriesArray.map((category, index) => (
          <div className="grid grid-flow-col auto-cols-[30]" key={index}>
            <div>
              <div className="w-52 h-52 overflow-hidden rounded-full bg-slate-100">
                <img
                  className="h-full mx-auto"
                  src={category.image}
                  alt={category.name}
                />
              </div>
              <p className="text-center mt-4">{category.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
