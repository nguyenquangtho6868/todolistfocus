import React from "react";
import "./maininput.css";
import { ClockCircleTwoTone } from "@ant-design/icons";
import { useState } from "react";
function MainInput({ handleMission }) {
  const [clock, setClock] = useState(0);
  const [inputData, setInputData] = useState("");
  const handleClock1 = () => {
    if (clock < 1 || clock > 1) {
      setClock(1);
    } else {
      setClock(0);
    }
    console.log(clock);
  };
  const handleClock2 = () => {
    if (clock < 2 || clock > 2) {
      setClock(2);
    } else {
      setClock(1);
    }
    console.log(clock);
  };
  const handleClock3 = () => {
    if (clock < 3 || clock > 3) {
      setClock(3);
    } else {
      setClock(2);
    }
    console.log(clock);
  };
  const handleClock4 = () => {
    if (clock < 4) {
      setClock(4);
    } else {
      setClock(3);
    }
    console.log(clock);
  };

  const handlSubmit = (e) => {
    setInputData(e.target.value);
  };

  const sendDataToParent = () => {
    const data = { input: inputData, clock: clock * 25 };
    handleMission(data);
    setInputData("");
  };
  return (
    <div className="maininput">
      <button onClick={sendDataToParent}>+</button>
      <input
        value={inputData}
        onChange={handlSubmit}
        className="input"
        placeholder=' + Thêm công việc vào phần "Nhiệm vụ"  ,nhấn [Enter] để lưu'
      />

      <div className="button">
        {clock < 1 ? (
          <button onClick={handleClock1}>
            <ClockCircleTwoTone />
          </button>
        ) : (
          <button className="buttonactive" onClick={handleClock1}>
            <ClockCircleTwoTone />
          </button>
        )}
        {clock < 2 ? (
          <button onClick={handleClock2}>
            <ClockCircleTwoTone />
          </button>
        ) : (
          <button className="buttonactive" onClick={handleClock2}>
            <ClockCircleTwoTone />
          </button>
        )}{" "}
        {clock < 3 ? (
          <button onClick={handleClock3}>
            <ClockCircleTwoTone />
          </button>
        ) : (
          <button className="buttonactive" onClick={handleClock3}>
            <ClockCircleTwoTone />
          </button>
        )}{" "}
        {clock < 4 ? (
          <button onClick={handleClock4}>
            <ClockCircleTwoTone />
          </button>
        ) : (
          <button className="buttonactive" onClick={handleClock4}>
            <ClockCircleTwoTone />
          </button>
        )}
        {/* <button onClick={handleClock2}>
          <ClockCircleTwoTone />
        </button>
        <button onClick={handleClock3}>
          <ClockCircleTwoTone />
        </button>
        <button onClick={handleClock4}>
          <ClockCircleTwoTone />
        </button> */}
      </div>
    </div>
  );
}

export default MainInput;
