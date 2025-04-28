import React, { FC } from "react";
import ListItemsCard from "../../components/ListItemsCard";
import { listTreatItems } from "../../dummyData";

const Treats: FC = () => {
  return (
    <div className="h-full bg-yellow-400 pt-40 pb-10">
      <ListItemsCard title="treats" list={listTreatItems} />
    </div>
  );
};

export default Treats;
