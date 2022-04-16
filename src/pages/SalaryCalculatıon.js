import React, { useState } from "react";
import ChooseStep from "../components/salaryCalculation.js/ChooseStep";
import ClientForms from "../components/salaryCalculation.js/ClientForms";
import DataTable from "../components/salaryCalculation.js/DataTable";

const SalaryCalculatıon = () => {
  const [step, setStep] = useState(1);

  const handleNextStep = (e) => {
    setStep(e);
  };

  const handlePrevStep = () => {
    setStep(step - 1);
  };

  switch (step) {
    case 1:
      return <ChooseStep nextStep={handleNextStep} />;
    case 2:
      return <ClientForms nextStep={handleNextStep} tip="Brüt" />;
    case 3:
      return <ClientForms nextStep={handleNextStep} tip="Net" />;
    case 4:
      return <DataTable prevStep={handlePrevStep} />;
    default:
  }
};

export default SalaryCalculatıon;
