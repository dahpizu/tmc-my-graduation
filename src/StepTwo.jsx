import React, { useState } from "react";

function StepTwo({ handleNext, handlePrev }) {
  const [TicketNumbers, setTicketNumbers] = useState("");

  let costumizeNext = () => {
    if (TicketNumbers != "") {
      handleNext();
      localStorage.setItem("TicketNumbers", TicketNumbers);
    } else {
      alert(" empty input");
    }
  };
  return (
    <div className="StepsForm">
      How many people will be visiting??
      <div className="Stepboxx">
        <form action="">
          <select
            name="TicketNumber"
            className="StepOption"
            onChange={(e) => setTicketNumbers(e.target.value)}
            value={TicketNumbers}
          >
            <option className="StepOptions"> Adult (11+yrs)</option>
            <option className="StepOptions">1</option>
            <option className="StepOptions">2</option>
          </select>
          <select name="TicketNumber" className="StepOption">
            <option className="StepOptions">Child (4-10yrs)</option>
            <option className="StepOptions">1</option>
            <option className="StepOptions">2</option>
          </select>
          <select name="TicketNumber" className="StepOption">
            <option className="StepOptions">Infant (0-3yrs)</option>
            <option className="StepOptions">1</option>
            <option className="StepOptions">2</option>
          </select>
        </form>
        <button className="StepButton" onClick={handlePrev}>
          perv
        </button>
        <button className="StepButton" onClick={costumizeNext}>
          next
        </button>
      </div>
    </div>
  );
}

export default StepTwo;
