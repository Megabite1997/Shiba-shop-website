import React from "react";
import Input from "../components/Input";

const RegistrationPage: React.FC = () => {
  const handleSubmit = (event: React.FormEvent): void => {
    event.preventDefault();
  };
  return (
    <div>
      <form className="pt-40 pb-32 bg-yellow-400" onSubmit={handleSubmit}>
        <div className="mx-96 p-20 bg-red-400">
          <h1 className="text-2xl text-center">Register Page</h1>

          <div className="mt-10">
            <Input
              label="Email"
              type="email"
              className="border-2 border-rose-600 w-full p-0.5"
            />
          </div>

          <div className="mt-10">
            <Input
              label="Password"
              type="text"
              className="border-2 border-rose-600 w-full p-0.5"
            />
          </div>
          <div className="mt-10">
            <Input
              label="Re-password"
              type="text"
              className="border-2 border-rose-600 w-full p-0.5"
            />
          </div>

          <div className="text-center">
            <button type="submit" className="bg-green-400 mt-10 py-1 px-8">
              Login
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegistrationPage;
