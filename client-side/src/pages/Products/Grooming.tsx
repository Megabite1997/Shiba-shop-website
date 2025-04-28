import React, { FC } from "react";
import ListItemsCard from "../../components/ListItemsCard";
import { listGroomingItems } from "../../dummyData";

const Grooming: FC = () => {
  return (
    <div className="h-full bg-yellow-400 pt-40 pb-10">
      <ListItemsCard title="Grooming" list={listGroomingItems} />
    </div>
  );
};

export default Grooming;
