import React, { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import clsx from "clsx";

import ShibaLogo from "../assets/shiba/shiba-logo.webp";

interface Inputs {
  email: string;
}

const ForgotPassword: FC = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const goToLogin = () => {
    navigate("/login");
  };

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <div
      id="forgot-password-container"
      className="mt-28 flex flex-col items-center mb-20"
    >
      <div id="icon-header">
        <img src={ShibaLogo} alt="icon" id="icon" className="w-36 h-36" />
      </div>
      <div id="form-container" className="flex flex-col border-2 p-8">
        <h1 className="text-2xl font-bold mt-4">Forgot Password</h1>
        <p className="text-sm text-center mt-2">
          Enter your email address and we will send you a link to reset your
          password.
        </p>
        <form
          className="mt-8 mx-2 flex flex-col"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            type="email"
            {...register("email", { required: true })}
            className={clsx(
              "px-4 py-2 rounded-2xl border-2 focus:outline-none ",
              errors.email
                ? "border-red-500"
                : "border-shiba-yellow focus:border-shiba-yellow",
            )}
            placeholder="Email Address"
          />
          {errors.email && (
            <span className="text-red-500 mt-2 ml-2">Email is required !</span>
          )}

          <button
            type="submit"
            className="bg-shiba-yellow mt-10 py-1 px-8 rounded-2xl cursor-pointer hover:bg-yellow-600"
          >
            Reset Password
          </button>
          <button
            className="bg-slate-200 mt-5 py-1 px-8 rounded-2xl hover:bg-slate-300"
            onClick={goToLogin}
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
