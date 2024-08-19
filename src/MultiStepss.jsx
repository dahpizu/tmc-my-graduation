import React, { useState } from "react";
import MultiStep from "react-multistep";
import NavBar from "./NavBar";
import StepFive from "./StepFive";
import StepSix from "./StepSix";
import StepSeven from "./StepSeven";
import StepEight from "./StepEight";

function MultiStepss() {
  const [step, setStep] = useState(1); // Initialize active step

  const handleNext = () => {
    if (step < 4) {
      setStep((prevStep) => prevStep + 1); // Increment step
    }
  };

  const handlePrev = () => {
    if (step > 1) {
      setStep((prevStep) => prevStep - 1); // Increment step
    }
  };
  switch (step) {
    case 1:
      return (
        <>
          <div className="MultiStepss">
            <NavBar />
            {step}
            <div className="steps-container">
              BOOK
              <StepFive handlePrev={handlePrev} handleNext={handleNext} />
            </div>
          </div>
        </>
      );

    case 2:
      return (
        <>
          <div className="MultiStepss">
            <NavBar />
            {step}
            <div className="steps-container">
              BOOK
              <StepSix handlePrev={handlePrev} handleNext={handleNext} />
            </div>
          </div>
        </>
      );
    case 3:
      return (
        <>
          <div className="MultiStepss">
            <NavBar />
            {step}
            <div className="steps-container">
              BOOK
              <StepSeven handlePrev={handlePrev} handleNext={handleNext} />
            </div>
          </div>
        </>
      );
    case 4:
      return (
        <>
          <div className="MultiStepss">
            <NavBar />
            {step}
            <div className="steps-container">
              BOOK
              <StepEight />
              <button
                title="Submit"
                className="StepButton"
                onClick={() => setShowResult(true)}
              >
                Submit
              </button>
            </div>
          </div>
        </>
      );
  }
}

export default MultiStepss;
