import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
import RootLayout from "../pages/Root";
import HomePage from "../pages/Home";
import ErrorPage from "../pages/Error";

// Lazy-loaded components
const Products = lazy(() => import("../pages/Products"));
const Food = lazy(() => import("../pages/Products/Food"));
const Treats = lazy(() => import("../pages/Products/Treats"));
const Toys = lazy(() => import("../pages/Products/Toys"));
const Clothes = lazy(() => import("../pages/Products/Clothes"));
const Grooming = lazy(() => import("../pages/Products/Grooming"));
const AboutUsPage = lazy(() => import("../pages/AboutUs"));
const ContactUs = lazy(() => import("../pages/ContactUs"));
const LoginPage = lazy(() => import("../pages/Login"));
const RegistrationPage = lazy(() => import("../pages/Registration"));
const ForgotPassword = lazy(() => import("../pages/ForgotPassword"));
const Cart = lazy(() => import("../pages/Cart"));

const router = createBrowserRouter([
  {
    path: "",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "products",
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <Products />
          </Suspense>
        ),
      },
      {
        path: "products/food",
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <Food />
          </Suspense>
        ),
      },
      {
        path: "products/treats",
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <Treats />
          </Suspense>
        ),
      },
      {
        path: "products/toys",
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <Toys />
          </Suspense>
        ),
      },
      {
        path: "products/clothes",
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <Clothes />
          </Suspense>
        ),
      },
      {
        path: "products/grooming",
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <Grooming />
          </Suspense>
        ),
      },
      {
        path: "about-us",
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <AboutUsPage />
          </Suspense>
        ),
      },
      {
        path: "contact-us",
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <ContactUs />
          </Suspense>
        ),
      },
      {
        path: "login",
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <LoginPage />
          </Suspense>
        ),
      },
      {
        path: "register",
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <RegistrationPage />
          </Suspense>
        ),
      },
      {
        path: "forgot-password",
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <ForgotPassword />
          </Suspense>
        ),
      },
      {
        path: "cart",
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <Cart />
          </Suspense>
        ),
      },
    ],
  },
]);

const AppRoutes = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;
