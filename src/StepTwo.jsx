import React from "react";

function StepTwo() {
  return (
    <div className="StepsForm">
      How many people will be visiting??
      <div className="Stepboxx">
        <input
          className="stepbox"
          type="number"
          placeholder="Number of Tickets"
        />
      </div>
    </div>
  );
}

export default StepTwo;
