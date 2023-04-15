import React from "react";
import { Link } from "react-router-dom";
import ImageShibaSit from "../assets/shiba-sit.jpg";

const RegistrationPage: React.FC = () => {
  const handleSubmit = (event: React.FormEvent): void => {
    event.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="grid md:grid-cols-2  bg-shiba-yellow">
        <div className="bg-white pt-44 px-28 h-screen">
          <div className="mb-10">
            <h1 className="font-bold text-4xl mb-2">Create An Account </h1>
            <p className="ml-1">
              Become our member to get information about new products,
              promotions, and discounts.
            </p>
          </div>

          <h1 className="text-2xl">Register</h1>

          <div className="flex gap-6 mt-6 mx-2">
            <div>
              <label className="ml-1">First Name</label>
              <input
                type="text"
                placeholder="Full Name"
                className="border border-slate-400 rounded-2xl w-full p-2 pl-5 mt-2"
              />
            </div>
            <div>
              <label className="ml-1">Last Name</label>
              <input
                type="text"
                placeholder="Last Name"
                className="border border-slate-400 rounded-2xl w-full p-2 pl-5 mt-2"
              />
            </div>
          </div>

          <div className="mt-6 mx-2">
            <div>
              <label className="ml-1">E-mail</label>
              <input
                type="email"
                placeholder="E-mail"
                className="border border-slate-400 rounded-2xl w-full p-2 pl-5 mt-2"
              />
            </div>
          </div>

          <div className="mt-6 mx-2">
            <div>
              <label className="ml-1">Password</label>
              <input
                type="password"
                placeholder="Password"
                className="border border-slate-400 rounded-2xl w-full p-2 pl-5 mt-2"
              />
            </div>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-shiba-yellow mt-10 py-1 px-8 rounded-2xl cursor-pointer"
            >
              Sign Up
            </button>
          </div>

          <div>
            <p className="text-center mt-8">
              Have an account already?
              <Link className="text-amber-500 hover:underline ml-1" to="/login">
                Login
              </Link>
            </p>
          </div>
        </div>
        <div className="pt-60">
          <img src={ImageShibaSit} alt="Shiba sits" />
        </div>
      </div>
    </form>
  );
};

export default RegistrationPage;
