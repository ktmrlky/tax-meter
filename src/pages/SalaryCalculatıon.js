import { Grid, Zoom } from "@mui/material";
import React, { useEffect, useState } from "react";
import LeftSideStepper from "../components/salaryCalculation/LeftSideStepper";
import SalaryMainPage from "../components/salaryCalculation/SalaryMainPage";

const SalaryCalculatıon = () => {
  const steps = [" Hesaplama Yönü", "Gerekli Bilgiler", "Maaş Hesaplama"];
  const [step, setStep] = useState(0);

  const handleStep = (e) => {
    setStep(e);
  };

  useEffect(() => {
    document.title = "Salary Calculator - Salary Calculation";
  }, []);

  return (
    <>
      <Zoom in={true} style={{ transitionDelay: "160ms" }}>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          style={
            step === 2
              ? { marginTop: "2rem" }
              : { position: "absolute", top: "40vh", left: "-63vh" }
          }
        >
          <LeftSideStepper
            orientation={step === 2 ? "horizontal" : "vertical"}
            steps={steps}
            activeStep={step}
            handleStep={handleStep}
          />
        </Grid>
      </Zoom>
      <SalaryMainPage step={step} handleNextStep={handleStep} />
    </>
  );
};

export default SalaryCalculatıon;
