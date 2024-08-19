import React, { useState } from "react";

function StepOne({ handleNext, handlePrev }) {
  const [date, setdate] = useState("");

  let costumizeNext = () => {
    if (date != "") {
      handleNext();
      localStorage.setItem("date", date);
    } else {
      alert(" empty input");
    }
  };

  return (
    <div className="StepsForm">
      Tour Date
      <div className="Stepboxx">
        <div className="Stepbox">
          <form className="stepFormf">
            <input
              name="date"
              className="stepbox"
              type="date"
              placeholder=""
              required
              onChange={(e) => setdate(e.target.value)}
              value={date}
            />
          </form>
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

export default StepOne;
