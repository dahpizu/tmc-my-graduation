import React, { useState } from "react";
import "./index.css";
import { Input } from "@mui/material";

function StepFour() {
  const [showResult, setShowResult] = useState(false);
  let date = localStorage.getItem("date");
  return (
    <div className="StepsForm">
      <div className="Stepboxx">
        <div className="Stepboxx">
          <form action="">
            <input
              name="VisitorName "
              className="stepbox"
              type="text"
              placeholder="Name Of Visitors"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default StepFour;
