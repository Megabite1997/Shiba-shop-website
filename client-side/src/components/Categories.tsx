import React, { FC } from "react";
import ImageKibble from "../assets/products/food/kibble.webp";
import ImageChewyBeef from "../assets/products/treats/Chewy Beef.webp";
import ImageBalls2 from "../assets/products/toys/balls2.webp";
import ImageCloth from "../assets/products/clothes/shirt.webp";
import ImageGrooming from "../assets/products/grooming/shampoo.webp";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

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
  ];

  const sliderLeft = () => {
    const slider = document.getElementById("slider");
    slider!.scrollLeft = slider!.scrollLeft - 500;
  };
  const sliderRight = () => {
    const slider = document.getElementById("slider");
    slider!.scrollLeft = slider!.scrollLeft + 500;
  };

  return (
    <div>
      <h1 className=" text-2xl text-center">Popular Categories</h1>
      <div className="relative">
        <MdChevronLeft
          className="absolute left-0"
          size={40}
          onClick={sliderLeft}
        />
        {/* ---------------------------------------------------------------- */}
        <div className="flex max-w-max" id="slider">
          {categoriesArray.map((category, index) => (
            <div key={index}>
              <div className="w-52 h-52 overflow-hidden rounded-full bg-slate-100">
                <img
                  className="h-full mx-auto"
                  src={category.image}
                  alt={category.name}
                />
              </div>
              {/* <p className="text-center mt-4">{category.name}</p> */}
            </div>
          ))}
        </div>
        {/* ---------------------------------------------------------------- */}
        <MdChevronRight
          className="absolute left-0"
          size={40}
          onClick={sliderRight}
        />
      </div>
    </div>
  );
};

export default Categories;
