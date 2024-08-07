import React from "react";
import MultiStep from "react-multistep";
import NavBar from "./NavBar";
import StepFive from "./StepFive";
import StepSix from "./StepSix";
import StepSeven from "./StepSeven";
import StepEight from "./StepEight";

function MultiStepss() {
  return (
    <div className="MultiStepss">
      <NavBar />
      <div className="steps-container">
        BOOK
        <MultiStep>
          <StepFive title="Step 5" />
          <StepSix title="Step 6" />
          <StepSeven title="Step 7" />
          <StepEight title="Step 8" />

          <button title="PAYMENT" className="submitbtn" type="Submit">
            PAY
          </button>
        </MultiStep>
      </div>
    </div>
  );
}

export default MultiStepss;
