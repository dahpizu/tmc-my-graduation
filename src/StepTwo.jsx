import React from "react";

function StepTwo() {
  return (
    <div className="StepsForm">
      How many people will be visiting??
      <div className="Stepboxx">
        <input
          name="TicketNumbers"
          className="stepbox"
          type="number"
          placeholder="Number of Tickets"
          required
        />
        <input
          name="TicketNumbers"
          className="stepbox"
          type="number"
          placeholder="Number of Tickets"
          required
        />
      </div>
    </div>
  );
}

export default StepTwo;
