import React from "react";

function StepThree() {
  return (
    <div className="StepsForm">
      Type of Tickets
      <div className="Stepboxx">
        <select className="StepOption">
          <option className="StepOptions">Silver ($20) </option>
          <option className="StepOptions">Gold ($70) </option>
          <option className="StepOptions">Diamond ($30) </option>
        </select>
      </div>
    </div>
  );
}

export default StepThree;
