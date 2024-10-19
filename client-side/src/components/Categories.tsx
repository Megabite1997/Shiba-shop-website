import { FC } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import categoriesArray from "../data/categories";

const Categories: FC = () => {
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
            </div>
          ))}
        </div>
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
