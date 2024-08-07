import React from "react";

function StepSeven() {
  return (
    <div className="StepsForm">
      Room Preferences
      <div className="Stepboxx">
        <select name="TicketType" className="StepOption">
          <option className="StepOptions">Room Type </option>
          <option className="StepOptions">Silver ($20) </option>
          <option className="StepOptions">Gold ($70) </option>
          <option className="StepOptions">Diamond ($30) </option>
        </select>
        <select name="TicketType" className="StepOption">
          <option className="StepOptions">Smoker? </option>
          <option className="StepOptions">Smoking </option>
          <option className="StepOptions">Non-Smoking </option>
        </select>
        <div>
          <input
            type="checkbox"
            className="StepCheckbox"
            placeholder="Accesibility"
          />
          Any specific requirements for accessibility?
        </div>
      </div>
    </div>
  );
}

export default StepSeven;
