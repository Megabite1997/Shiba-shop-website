import React, { FC } from "react";
import ListItemsCard from "../../components/ListItemsCard";
import { listFoodItems } from "../../dummyData";

interface FoodProps {}

const Food: FC<FoodProps> = ({}) => {
  return (
    <div className="h-full bg-yellow-400 pt-40 pb-10">
      <ListItemsCard title="Food" list={listFoodItems} />
    </div>
  );
};

export default Food;
