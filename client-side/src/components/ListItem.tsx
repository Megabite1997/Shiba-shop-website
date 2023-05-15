import React, { FC } from "react";

interface ListItemProps {
  category: { name: string; image: string };
}

const ListItem: FC<ListItemProps> = ({ category }) => {
  return (
    <div className="w-57 h-35 bg-slate-300 mr-3 border border-slate-300">
      <img className="object-cover w-full h-full" src={category.image} alt="" />
      <p className="text-center pt-2">{category.name}</p>
    </div>
  );
};

export default ListItem;
