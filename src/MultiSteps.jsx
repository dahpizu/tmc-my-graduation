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
      <div>
        BOOK
        <MultiStep>
          <StepOne title="0%" />
          <StepTwo title="25%" />
          <StepThree title="50%" />
          <StepFour title="100%" />
        </MultiStep>
      </div>
    </div>
  );
}
export default MultiSteps;
