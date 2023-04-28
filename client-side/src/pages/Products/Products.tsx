import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import ListItemsCard from "../../components/ListItemsCard";
import { listRecommendedItems } from "../../dummyData";

const ProductsPage: FunctionComponent = () => {
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
      <ListItemsCard title="Recommended items" list={listRecommendedItems} />
    </div>
  );
};

export default ProductsPage;
