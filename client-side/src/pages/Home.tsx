import React from "react";
import { HiOutlineChevronDoubleDown } from "react-icons/hi";
import ImageShibaCropped from "../assets/shiba/shiba-no-bg.png";
import Categories from "../components/Categories";

const HomePage: React.FC = () => {
  return (
    <div>
      <div className="block md:grid md:grid-cols-2 w-full   pt-24 bg-shiba-yellow px-4">
        <img src={ImageShibaCropped} alt="Shiba smiles" />

        <div className="flex items-center lg:pb-32">
          <div className="animate-fade-in">
            <h1 className="text-4xl xl:text-5xl text-center md:text-start pt-10">
              Welcome to Tada & Shiba shop
            </h1>
            <p className="mt-5 mb-10 text-center md:text-start">
              There is everything Shiba wants in here.
            </p>
          </div>
        </div>

        {/* <div className="absolute bottom-10 left-0 right-0 mx-auto w-fit border border-current rounded-full p-4 animate-scroll-down">
          <HiOutlineChevronDoubleDown />
        </div> */}
      </div>

      <Categories />
    </div>
  );
};

export default HomePage;
