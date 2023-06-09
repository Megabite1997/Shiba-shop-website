import React, { useState } from "react";
import { Link } from "react-router-dom";
import ImageShibaSit from "../assets/shiba/shiba-sit.jpg";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const RegistrationPage: React.FC = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const showPasswordHandler = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (event: React.FormEvent): void => {
    event.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="grid md:grid-cols-2 bg-shiba-yellow">
        <div className="bg-white pt-32 md:pt-44 px-4 md:px-28 md:h-screen pb-10">
          <h1 className="font-bold text-4xl mb-12">Create an Account </h1>

          <div className="grid md:grid-flow-col gap-6 mt-8 mx-2">
            <div>
              <label className="ml-1">First Name</label>
              <input
                type="text"
                placeholder="Full Name"
                maxLength={30}
                className="border border-slate-400 rounded-2xl w-full p-2 pl-5 mt-2"
              />
            </div>
            <div>
              <label className="ml-1">Last Name</label>
              <input
                type="text"
                placeholder="Last Name"
                maxLength={30}
                className="border border-slate-400 rounded-2xl w-full p-2 pl-5 mt-2"
              />
            </div>
          </div>

          <div className="mt-8 mx-2">
            <label className="ml-1">E-mail</label>
            <input
              type="email"
              placeholder="E-mail"
              className="border border-slate-400 rounded-2xl w-full p-2 pl-5 mt-2"
            />
          </div>

          <div className="mt-8 mx-2 relative">
            <label className="ml-1">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="border border-slate-400 rounded-2xl w-full p-2 pl-5 mt-2"
            />
            <button
              className="absolute top-11 right-3"
              onClick={showPasswordHandler}
            >
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </button>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-shiba-yellow mt-10 py-1 px-8 rounded-2xl cursor-pointer"
            >
              Sign Up
            </button>
          </div>

          <div className="mt-6">
            <p className="text-center">
              Have an account already?
              <Link className="text-amber-500 hover:underline ml-1" to="/login">
                Login
              </Link>
            </p>
          </div>
        </div>
        <div className="md:pt-60">
          <img src={ImageShibaSit} alt="Shiba sits" />
        </div>
      </div>
    </form>
  );
};

export default RegistrationPage;
