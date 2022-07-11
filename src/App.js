import React from "react";
import Navbar from "./components/navbar/Navbar";
import "./App.css";
import { Outlet } from "react-router-dom";
import { Container } from "@mui/material";

const App = () => {
  return (
    <div className="app container">
      <Navbar />
      <Container>
        <Outlet />
      </Container>
    </div>
  );
};

export default App;
