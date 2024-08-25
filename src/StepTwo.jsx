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
            <option className="StepOptions">11</option>
            <option className="StepOptions">12</option>
            <option className="StepOptions">13</option>
            <option className="StepOptions">14</option>
            <option className="StepOptions">15</option>
            <option className="StepOptions">16</option>
            <option className="StepOptions">17</option>
            <option className="StepOptions">18</option>
            <option className="StepOptions">19</option>
            <option className="StepOptions">20</option>
            <option className="StepOptions">21</option>
            <option className="StepOptions">22</option>
            <option className="StepOptions">23</option>
            <option className="StepOptions">24</option>
            <option className="StepOptions">25</option>
            <option className="StepOptions">26</option>
            <option className="StepOptions">27</option>
            <option className="StepOptions">28</option>
            <option className="StepOptions">29</option>
            <option className="StepOptions">30</option>
            <option className="StepOptions">31</option>
            <option className="StepOptions">32</option>
            <option className="StepOptions">33</option>
            <option className="StepOptions">34</option>
            <option className="StepOptions">35</option>
            <option className="StepOptions">36</option>
            <option className="StepOptions">37</option>
            <option className="StepOptions">38</option>
          </select>
          <select name="TicketNumber" className="StepOption">
            <option className="StepOptions">Child (4-10yrs)</option>
            <option className="StepOptions">4</option>
            <option className="StepOptions">5</option>
            <option className="StepOptions">6</option>
            <option className="StepOptions">7</option>
            <option className="StepOptions">8</option>
            <option className="StepOptions">9</option>
            <option className="StepOptions">10</option>
          </select>
          <select name="TicketNumber" className="StepOption">
            <option className="StepOptions">Infant (0-3yrs)</option>
            <option className="StepOptions">0</option>
            <option className="StepOptions">1</option>
            <option className="StepOptions">2</option>
            <option className="StepOptions">3</option>
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
