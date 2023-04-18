import React, { useState } from "react";
import { Link } from "react-router-dom";

import ImageShibaSit from "../assets/shiba/shiba-sit.jpg";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const LoginPage: React.FC = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const showPasswordHandler = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (event: React.FormEvent): void => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid md:grid-cols-2  bg-shiba-yellow">
        <div className="bg-white pt-44 px-28 h-screen">
          <div className="mb-10">
            <h1 className="font-bold text-4xl mb-2">Welcome back</h1>
            <p className="ml-1">Please enter your details</p>
          </div>

          <h1 className="text-2xl">Log In</h1>
          <div className="mt-8 mx-2">
            <div>
              <label className="ml-1">E-mail</label>
              <input
                type="email"
                name="email"
                placeholder="E-mail"
                className="border border-slate-400 rounded-2xl w-full p-2 pl-5 mt-2"
              />
            </div>
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

          <div className="mx-2 text-right mt-4 mr-4">
            <Link
              className="hover:underline text-amber-500"
              to="/forget-password"
            >
              Forget password?
            </Link>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-shiba-yellow mt-10 py-1 px-8 rounded-2xl cursor-pointer"
            >
              Login
            </button>
          </div>

          <div>
            <p className="text-center mt-8">
              Don't have an account?
              <Link
                className="text-amber-500 hover:underline ml-1"
                to="/register"
              >
                Register
              </Link>
            </p>
          </div>
        </div>
        <div className="pt-60 ">
          <img src={ImageShibaSit} alt="Shiba sits" />
        </div>
      </div>
    </form>
  );
};

export default LoginPage;
