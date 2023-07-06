import React from "react";
import MainAlert from "../mainalert/MainAlert";
import MainInput from "../maininput/MainInput";
import MainWork from "../mainwork/MainWork";
import { useState } from "react";
function MainToday() {
  const dataMission = localStorage.getItem("missionToday")
    ? JSON.parse(localStorage.getItem("missionToday"))
    : [];
  console.log(dataMission);
  const [mission, setMission] = useState(dataMission);
  const [completed, setCompleted] = useState([]);
  const handleMission = (m) => {
    let arr = [...mission];
    arr.push(m);
    console.log(arr);
    setMission(arr);
    localStorage.setItem("missionToday", JSON.stringify(arr));
  };
  const handleMissionCheck = (c) => {
    setMission(c);
    localStorage.setItem("missionToday", JSON.stringify(c));
    console.log(c);
  };
  const handleCompleted = (m) => {
    let arr = [...completed];
    arr.push(m);
    console.log({ arr });
    setCompleted(arr);
    localStorage.setItem("completed", JSON.stringify(arr));
  };
  console.log(completed);
  return (
    <div>
      <MainAlert mission={mission} />
      <MainInput handleMission={handleMission} />
      <MainWork
        mission={mission}
        check={handleMissionCheck}
        handleCompleted={handleCompleted}
      />
    </div>
  );
}
export default MainToday;
