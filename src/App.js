import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Footer from "./components/Footer";
import Login from "./components/Login";
const AppLayout = () => {
  // console.log("Body ", <Body/>);

  return (
    <div className="app">
      <Header />
      <Outlet/>
      <Footer/>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {path:"/",element:<Body/>},
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      {path:"/restaurants/:resId",element:<RestaurantMenu/>},
      {path:"/login", element: <Login/>}
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
