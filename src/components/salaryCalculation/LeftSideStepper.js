import { Box, Step, StepButton, Stepper } from "@mui/material";
import React from "react";

const LeftSideStepper = ({ orientation, steps, activeStep, handleStep }) => {
  return (
    <Box
      sx={
        orientation === "vertical" ? { maxWidth: "400px" } : { width: "100%" }
      }
    >
      <Stepper activeStep={activeStep} orientation={orientation}>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepButton color="inherit" onClick={() => handleStep(index)}>
              {label}
            </StepButton>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};

export default LeftSideStepper;
