import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import SalaryCalculatıon from "./pages/SalaryCalculatıon";
import SeverenceNotice from "./pages/SeverenceNotice";
import WageCalculation from "./pages/WageCalculation";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="maas-hesaplama" element={<SalaryCalculatıon />} />
        <Route path="asgari-ucret" element={<WageCalculation />} />
        <Route path="kidem-ve-ihbar" element={<SeverenceNotice />} />
        <Route path="iletisim" element={<Contact />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
