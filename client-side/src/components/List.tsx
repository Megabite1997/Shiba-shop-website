import React, { FC, useRef } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import ListItem from "./ListItem";

interface ListProps {}

const List: FC<ListProps> = ({}) => {
  const listRef = useRef<HTMLInputElement>(null);

  const handleClick = (direction: string) => {
    if (direction === "left") {
      listRef.current!.style.transform = "translateX(240px)";
    }

    if (direction === "right") {
    }
  };
  return (
    <div>
      <h1 className="ml-12.5 font-bold text-xl">Categories</h1>

      <div className="relative overflow-hidden py-10">
        {/* Wrapper */}
        <MdChevronLeft
          className="absolute top-0 bottom-0 m-auto left-0 cursor-pointer "
          color="red"
          size={40}
          onClick={() => handleClick("left")}
        />
        <div className="flex w-max ml-12.5" ref={listRef}>
          {/* Container */}
          <ListItem category="food" />
          <ListItem category="treats" />
          <ListItem category="toys" />
          <ListItem category="clothes" />
          <ListItem category="grooming" />
          <ListItem category="pharmacy" />
          <ListItem category="beds" />
          <ListItem category="flea & tick" />
        </div>
        <MdChevronRight
          className="absolute top-0 bottom-0 m-auto right-0 cursor-pointer"
          color="red"
          size={40}
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
};

export default List;
