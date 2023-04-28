import React from "react";
// import { Link } from "react-router-dom";

// import { BiBone } from "react-icons/bi";

const HomePage: React.FC = () => {
  // const listSubPages = [
  //   { name: "food", path: "products/food" },
  //   { name: "treats", path: "products/treats" },
  //   { name: "toys", path: "products/toys" },
  //   { name: "clothes", path: "products/clothes" },
  //   { name: "grooming", path: "products/grooming" },
  // ];

  return (
    <div className="block md:grid md:grid-cols-2 w-full h-screen pt-24 bg-shiba-yellow px-4">
      <div className="bg-shiba-smile w-full h-52 md:h-full bg-contain bg-no-repeat md:bg-cover animate-fade-in"></div>

      <div className="md:mt-[30%] animate-fade-in">
        <h1 className="text-5xl text-center md:text-start pt-10">
          Welcome to Tada & Shiba shop
        </h1>
        <p className="mt-5 mb-10 text-center md:text-start">
          There is everything Shiba wants in here.
        </p>
        {/* <ul className="mt-5 mx-10 md:ml-5 grid gap-5 md:w-6/12 capitalize">
          {listSubPages.map((element, index) => (
            <li className="hover:animate-tilt-shaking" key={index}>
              <Link
                className="grid grid-flow-col gap-2.5 p-2 items-center justify-start bg-white hover:underline hover:text-amber-700 rounded-xl"
                to={element.path}
              >
                <BiBone />
                <p>{element.name}</p>
              </Link>
            </li>
          ))}
        </ul> */}
      </div>
    </div>
  );
};

export default HomePage;
