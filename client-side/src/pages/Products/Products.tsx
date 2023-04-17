import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";

import ImagePedigree from "../../assets/pedigree.webp";
import ImageProPlan from "../../assets/purina-pro-plan.webp";
import ImageBlue from "../../assets/blue.webp";
import ImagePurinaBeggine from "../../assets/purina-pro-plan.webp";

const ProductsPage: FunctionComponent = () => {
  const listSubPages = [
    { name: "food", path: "food" },
    { name: "treats", path: "treats" },
    { name: "toys", path: "toys" },
    { name: "clothes", path: "clothes" },
    { name: "grooming", path: "grooming" },
  ];

  const listRecommendedItems = [
    {
      image: ImagePedigree,
      name: "Pedigree",
      details: "Dog food for full growth",
      stars: 4,
      price: 40,
    },
    {
      image: ImageProPlan,
      name: "Purina Pro Plan",
      details: "Dog food for full growth",
      stars: 4,
      price: 40,
    },
    {
      image: ImageBlue,
      name: "Pedigree",
      details: "Dog food for full growth",
      stars: 4,
      price: 40,
    },
    {
      image: ImagePurinaBeggine,
      name: "Purina Beggin",
      details: "Strips Real Meat with Bacon & Beef Flavored Dog Treats",
      stars: 4,
      price: 12,
    },
  ];

  return (
    <div className="bg-shiba-yellow">
      {/* <h1 className="pt-40 font-bold text-xl text-center">Categories</h1> */}
      <div className="flex justify-center gap-20 pt-40 pb-20">
        {listSubPages.map((element) => (
          <Link
            className="bg-white py-2 px-6 capitalize hover:animate-tilt-shaking"
            to={element.path}
          >
            {element.name}
          </Link>
        ))}
      </div>
      <div className="px-20">
        <h2 className="text-xl font-semibold  pb-10">Recommended items</h2>

        <div className="flex gap-10 p-10 bg-white">
          <div className="bg-amber-600 w-64">
            <div className="p-4">
              <img src={ImagePedigree} alt="Pedigree" />
            </div>
            <hr />
            <div className="grid bg-amber-300 p-4 gap-2">
              <div>Brand: Pedigree</div>
              <div>details: Dog food for full growth</div>
              <div>stars: * * * *</div>
              <div>price: 40$</div>
              <button className="bg-lime-700 text-white">Add to cart</button>
            </div>
          </div>
          <div className="bg-amber-600 w-64">
            <div className="p-4">
              <img src={ImageProPlan} alt="Pedigree" />
            </div>
            <hr />
            <div className="grid bg-amber-300 p-4 gap-2">
              <div>Brand: Pedigree</div>
              <div>details: Dog food for full growth</div>
              <div>stars: * * * *</div>
              <div>price: 52$</div>
              <button className="bg-lime-700 text-white">Add to cart</button>
            </div>
          </div>
          <div className="bg-amber-600 w-64">
            <div className="p-4">
              <img src={ImageBlue} alt="Pedigree" />
            </div>
            <hr />
            <div className="grid bg-amber-300 p-4 gap-2">
              <div>Brand: Pedigree</div>
              <div>details: Dog food for full growth</div>
              <div>stars: * * * *</div>
              <div>price: 56$</div>
              <button className="bg-lime-700 text-white">Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
