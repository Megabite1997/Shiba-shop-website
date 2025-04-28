import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "../pages/Root";
import HomePage from "../pages/Home";
import AboutUsPage from "../pages/AboutUs";
import LoginPage from "../pages/Login";
import RegistrationPage from "../pages/Registration";
import ErrorPage from "../pages/Error";
import Products from "../pages/Products";
import Toys from "../pages/Products/Toys";
import Food from "../pages/Products/Food";
import ContactUs from "../pages/ContactUs";
import Cart from "../pages/Cart";
import Clothes from "../pages/Products/Clothes";
import Grooming from "../pages/Products/Grooming";
import Treats from "../pages/Products/Treats";
// import PrivateRoute from "../components/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "products", element: <Products /> },
      { path: "products/food", element: <Food /> },
      { path: "products/treats", element: <Treats /> },
      { path: "products/toys", element: <Toys /> },
      { path: "products/clothes", element: <Clothes /> },
      { path: "products/grooming", element: <Grooming /> },
      { path: "about-us", element: <AboutUsPage /> },
      { path: "contact-us", element: <ContactUs /> },
      { path: "login", element: <LoginPage /> },
      { path: "register", element: <RegistrationPage /> },
      {
        path: "cart",
        element: (
          // <PrivateRoute>
          <Cart />
          // </PrivateRoute>
        ),
      },
    ],
  },
]);

const AppRoutes = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;
