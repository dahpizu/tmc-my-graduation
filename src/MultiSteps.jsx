import React from "react";
import MultiStep from "react-multistep";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";
import NavBar from "./NavBar";

function MultiSteps() {
  return (
    <div className="MultiStepss">
      <NavBar />
      <div className="steps-container">
        BOOK
        <MultiStep>
          <StepOne title="Step 1" />
          <StepTwo title="Step 2" />
          <StepThree title="Step 3" />
          <StepFour title="Step 4" />
          <button title="Submit" className="submitbtn" type="Submit">
            Submit
          </button>
        </MultiStep>
      </div>
    </div>
  );
}
export default MultiSteps;

// function handleMultiStepss(event) {
//   event.preventDefault();
//   let MultiStep = event.target;
//   let MultiStepData = new MultiData(MultiStep);
//   let MultiStepDataObj = Object.fromEntries(MultiStepData.entries());
//   console.log(MultiStepDataObj);
// }
