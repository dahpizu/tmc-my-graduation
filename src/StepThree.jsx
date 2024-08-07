import React from "react";

function StepThree() {
  return (
    <div className="StepsForm">
      Type of Tickets
      <div className="Stepboxx">
        <select name="TicketType" className="StepOption">
          <option className="StepOptions">SELECT </option>
          <option className="StepOptions">Silver ($20) </option>
          <option className="StepOptions">Gold ($70) </option>
          <option className="StepOptions">Diamond ($30) </option>
        </select>
      </div>
    </div>
  );
}

export default StepThree;
