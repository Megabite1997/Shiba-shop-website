import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import ImageShibaSit from "../assets/shiba/shiba-sit.webp";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { registerSchema } from "../schemas/registerSchema";
import InputField from "../components/InputField";
import { registerUser } from "../services/authApi";

interface IFormInput {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const RegistrationPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const [showPassword, setShowPassword] = useState<boolean>(false);

  const showPasswordHandler = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    try {
      const response = await registerUser(data);
      console.log("response: ", response);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Axios error: ", error.response?.data);
      } else {
        console.error("Unknown error: ", error);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid md:grid-cols-2 bg-shiba-yellow">
        <div className="bg-white pt-32 md:pt-44 px-4 md:px-28 md:h-screen pb-10">
          <h1 className="font-bold text-4xl mb-12">Create an Account </h1>

          <div className="grid md:grid-flow-col gap-6 mt-8 mx-2">
            <div>
              <InputField
                register={register}
                name="firstName"
                type="text"
                label="First Name"
                placeholder="First Name"
                maxLength={30}
                error={errors.firstName}
              />
            </div>
            <div>
              <InputField
                register={register}
                name="lastName"
                type="text"
                label="Last Name"
                placeholder="Last Name"
                maxLength={30}
                error={errors.lastName}
              />
            </div>
          </div>

          <div className="mt-8 mx-2">
            <InputField
              register={register}
              name="email"
              type="text"
              label="Email"
              placeholder="Email"
              maxLength={30}
              error={errors.email}
            />
          </div>

          <div className="mt-8 mx-2 relative">
            <InputField
              register={register}
              name="password"
              type={showPassword ? "text" : "password"}
              label="Password"
              placeholder="Password"
              maxLength={30}
              error={errors.password}
            />

            <button
              type="button"
              className="absolute top-11 right-3"
              onClick={showPasswordHandler}
            >
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </button>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-shiba-yellow mt-10 py-1 px-8 rounded-2xl cursor-pointer hover:bg-yellow-600"
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
        <div className="md:pt-60 animate-fade-in">
          <img src={ImageShibaSit} alt="Shiba sits" />
        </div>
      </div>
    </form>
  );
};

export default RegistrationPage;
