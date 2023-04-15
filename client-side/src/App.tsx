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
import Toys from "./pages/Products/Toys";
import Food from "./pages/Products/Food";

const router = createBrowserRouter([
  {
    path: "",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "products", element: <ProductsPage /> },
      { path: "products/food", element: <Food /> },
      { path: "products/toys", element: <Toys /> },
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
