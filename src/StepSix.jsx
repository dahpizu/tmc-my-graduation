import React from "react";

function StepSix() {
  return (
    <div className="StepsForm">
      Reservation Details (Check-In Date/Check-Out Date)
      <div className="Stepboxx">
        <div>
          <input
            name="Date"
            className="stepbox"
            type="date"
            placeholder="Check-In Date"
            required
          />
          Check-In Date
        </div>
        <div>
          <input
            name="Date"
            className="stepbox"
            type="date"
            placeholder="Check-out Date"
            required
          />
          Check-Out Date
        </div>

        <input
          name="Number"
          className="stepbox"
          type="Number"
          placeholder="Number Of Guests"
          required
        />
        <input
          name="Number"
          className="stepbox"
          type="Number"
          placeholder="Number Of Rooms"
          required
        />
      </div>
    </div>
  );
}

export default StepSix;
