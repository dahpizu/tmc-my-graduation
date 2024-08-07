import React from "react";

function StepOne() {
  return (
    <div className="StepsForm">
      When do you want to go?
      <div className="Stepboxx">
        <div className="Stepboxx">
          <input
            name="date"
            className="stepbox"
            type="date"
            placeholder=""
            required
          />
        </div>
      </div>
    </div>
  );
}

export default StepOne;
