import React, { useState } from "react";

function StepFive() {
  return (
    <div className="StepsForm">
      Personal Information
      <div className="Stepboxx">
        <input
          name="name"
          className="stepbox"
          type="text"
          placeholder="Full Name"
          required
        />
        <input
          name="number"
          className="stepbox"
          type="number"
          placeholder="Phone Number"
          required
        />
        <input
          name="email"
          className="stepbox"
          type="Email"
          placeholder="Email"
          required
        />
      </div>
      <button className="StepButton">perv</button>
      <button className="StepButton">next</button>
    </div>
  );
}

export default StepFive;
