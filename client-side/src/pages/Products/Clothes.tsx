import React, { FC } from "react";
import ListItemsCard from "../../components/ListItemsCard";
import { listClothItems } from "../../dummyData";

const Clothes: FC = () => {
  return (
    <div className="h-full bg-yellow-400 pt-40 pb-10">
      <ListItemsCard title="Clothes" list={listClothItems} />
    </div>
  );
};

export default Clothes;
