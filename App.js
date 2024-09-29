import React, { Suspense, lazy, useContext, useState } from "react";
import * as ReactDOM from "react-dom/client";
import HeaderComponent from "./src/components/Header";
import BodyComponent from "./src/components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import ErrorPage from "./src/components/ErrorPage";
import AboutUs from "./src/components/AboutUs";
import ContactUs from "./src/components/ContactUs";
import RestoMenuComponent from "./src/components/RestoMenu";
const GroceryComponent = lazy(() => import("./src/components/Grocery"));
import UserContext from "./src/utils/UserContext";
import appStore from "./src/utils/redux/appStore";
import { Provider } from "react-redux";
import CartComponent from "./src/components/Cart";

const AppLayout = () => {
  const { userName } = useContext(UserContext);
  const [name, setName] = useState(userName);
  return (
    <UserContext.Provider value={{ userName: name, setName }}>
      <div className="app">
        <HeaderComponent />
        <Outlet />
      </div>
    </UserContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <BodyComponent />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/cart",
        element: <CartComponent />,
      },
      {
        path: "/restaurant/:restoId",
        element: <RestoMenuComponent />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            {" "}
            <GroceryComponent />{" "}
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/about",
    element: <AboutUs />,
  },
  {
    path: "/contact",
    element: <ContactUs />,
  },

]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={appStore}>
    <RouterProvider router={appRouter} />
  </Provider>
);
