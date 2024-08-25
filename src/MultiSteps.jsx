import React, { useState } from "react";

import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";
import NavBar from "./NavBar";
import "./index.css";

function MultiSteps() {
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
              <StepOne handlePrev={handlePrev} handleNext={handleNext} />
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
              <StepThree handlePrev={handlePrev} handleNext={handleNext} />
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
              <StepTwo handlePrev={handlePrev} handleNext={handleNext} />
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
              <StepFour />
              <button className="StepButton">perv</button>
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
export default MultiSteps;
