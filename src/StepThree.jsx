import React, { useState } from "react";

function StepThree({ handleNext, handlePrev }) {
  const [TicketType, setTicketType] = useState("");

  let costumizeNext = () => {
    if (TicketType != "") {
      handleNext();
      localStorage.setItem("TicketType", TicketType);
    } else {
      alert(" empty input");
    }
  };
  return (
    <div className="StepsForm">
      Trip Type
      <div className="Stepboxx">
        <div className="Stepbox">
          <select
            name="TicketType"
            className="StepOption"
            onChange={(e) => setTicketType(e.target.value)}
            value={TicketType}
          >
            <option className="StepOptions">SELECT </option>
            <option className="StepOptions">Silver ($20) </option>
            <option className="StepOptions">Gold ($70) </option>
            <option className="StepOptions">Diamond ($30) </option>
          </select>
        </div>
      </div>
      <button className="StepButton" onClick={handlePrev}>
        perv
      </button>
      <button className="StepButton" onClick={costumizeNext}>
        next
      </button>
    </div>
  );
}

export default StepThree;
