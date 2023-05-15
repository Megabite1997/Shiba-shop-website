import React, { FC } from "react";

interface ListItemProps {
  category: string;
}

const ListItem: FC<ListItemProps> = ({ category }) => {
  return <div className="w-57 h-32 bg-slate-300 mr-3">{category}</div>;
};

export default ListItem;
