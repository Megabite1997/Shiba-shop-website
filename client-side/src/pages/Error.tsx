import React from "react";
import Navbar from "../components/Navbar";

const ErrorPage: React.FC = () => {
  return (
    <div>
      <Navbar />
      <h1>An error occurred!</h1>
      <p>Page is not found</p>
    </div>
  );
};

export default ErrorPage;
