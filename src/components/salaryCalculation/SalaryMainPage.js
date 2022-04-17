import React, { useState } from "react";
import ChooseStep from "./ChooseStep";
import ClientForms from "./ClientForms";
import DataTable from "./DataTable";

const SalaryMainPage = ({ handleNextStep, step }) => {
  const [tip, setTip] = useState("");

  const handleTip = (e) => {
    setTip(e);
  };

  switch (step) {
    case 0:
      return <ChooseStep nextStep={handleNextStep} handleTip={handleTip} />;
    case 1:
      return <ClientForms nextStep={handleNextStep} tip={tip} />;
    case 2:
      return <DataTable />;
    default:
  }
};

export default SalaryMainPage;
