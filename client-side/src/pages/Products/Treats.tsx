import React, { FC } from "react";
import ListItemsCard from "../../components/ListItemsCard";
import { listTreatItems } from "../../dummyData";

interface TreatsProps {}

const Treats: FC<TreatsProps> = ({}) => {
  return (
    <div className="h-full bg-yellow-400 pt-40 pb-10">
      <ListItemsCard title="treats" list={listTreatItems} />
    </div>
  );
};

export default Treats;
