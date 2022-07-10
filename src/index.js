import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import SalaryCalculatıon from "./pages/SalaryCalculatıon";
import SeverenceNotice from "./pages/SeverenceNotice";
import WageCalculation from "./pages/WageCalculation";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="tax-meter" element={<Home />} />
        {/* tax-meter is the url path for github pages in prod can be removed */}
        <Route path="maas-hesaplama" element={<SalaryCalculatıon />} />
        <Route path="asgari-ucret" element={<WageCalculation />} />
        <Route path="kidem-ve-ihbar" element={<SeverenceNotice />} />
        <Route path="iletisim" element={<Contact />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
