import React from "react";
import Navbar from "./components/navbar/Navbar";
import "./App.css";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default App;
