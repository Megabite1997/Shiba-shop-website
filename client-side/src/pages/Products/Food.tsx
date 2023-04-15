import React, { FC } from "react";

interface FoodProps {}

const Food: FC<FoodProps> = ({}) => {
  return (
    <div className="h-screen bg-yellow-400">
      <h1 className="pt-40 font-bold text-xl text-center">Food</h1>
    </div>
  );
};

export default Food;
