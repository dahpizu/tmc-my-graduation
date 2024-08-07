import React from "react";

function StepEight() {
  return (
    <div className="StepsForm">
      Payment Information
      <div className="Stepboxx">
        <input type="number" placeholder="Card Number" className="stepbox" />
        <div>
          <input type="date" placeholder="ExpDate" className="stepbox" />
          EXP DATE
        </div>
        <input type="number" placeholder="CVV" className="stepbox" />
      </div>
    </div>
  );
}

export default StepEight;
