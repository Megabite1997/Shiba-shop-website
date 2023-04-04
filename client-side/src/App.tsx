import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/Root";
import ProductsPage from "./pages/Products";
import HomePage from "./pages/Home";
import AboutUsPage from "./pages/AboutUs";
import LoginPage from "./pages/Login";
import RegistrationPage from "./pages/Registration";
import ErrorPage from "./pages/Error";

const router = createBrowserRouter([
  {
    path: "",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "products", element: <ProductsPage /> },
      { path: "about-us", element: <AboutUsPage /> },
      { path: "login", element: <LoginPage /> },
      { path: "register", element: <RegistrationPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
