import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Regitration from "./Components/Regitration";
import Login from "./Components/Login";
import {createBrowserRouter , RouterProvider} from 'react-router-dom';
Login;
Regitration;
Navbar;
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Regitration/>
    },
    {
      path: "/login",
      element: <Login/>
    },
  ])
  return (
    <>
    <RouterProvider router={router} />
    {/* <Regitration/>
    <Login/> */}
    </>
  );
}

export default App;
