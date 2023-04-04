import React from "react";

const LoginPage: React.FC = () => {
  const handleSubmit = (event: React.FormEvent): void => {
    event.preventDefault();
  };

  return (
    <form className="pt-40 pb-32 bg-yellow-400" onSubmit={handleSubmit}>
      <div className="mx-96 p-20 bg-red-400">
        <h1 className="text-2xl text-center">Login Page</h1>

        <div className="mt-10">
          <label>E-mail</label>
          <div>
            <input
              type="email"
              className="border-2 border-rose-600 w-full p-0.5"
            />
          </div>
        </div>

        <div className="mt-10">
          <label>Password</label>
          <div>
            <input
              type="text"
              className="border-2 border-rose-600 w-full p-0.5"
            />
          </div>
        </div>

        <div className="text-center">
          <button type="submit" className="bg-green-400 mt-10 py-1 px-8">
            Login
          </button>
        </div>
      </div>
    </form>
  );
};

export default LoginPage;
