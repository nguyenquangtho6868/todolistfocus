import React from "react";
import "./mainwork.css";
import { ClockCircleTwoTone } from "@ant-design/icons";

function MainWork({ mission, check, handleCompleted }) {
  // console.log(mission);
  const checkBox = (m) => {
    handleCompleted(m);
    const a = mission.filter((check) => check !== m);

    console.log(a);
    check(a);
  };

  const render = mission.map((m, index) => {
    return (
      <div key={index}>
        <div className="work">
          <div
            className="circle"
            onClick={() => {
              checkBox(m);
            }}
          ></div>

          <p>{m.input}</p>
        </div>

        {m.clock.map((c) => {
          return <ClockCircleTwoTone />;
        })}
      </div>
    );
  });
  return (
    <div>
      <p>Không ưu Tiên 25</p>
      <div className="mainwork">{render}</div>
    </div>
  );
}

export default MainWork;
