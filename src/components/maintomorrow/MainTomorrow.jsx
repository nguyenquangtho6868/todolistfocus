import React from "react";
import MainAlert from "../mainalert/MainAlert";
import MainInput from "../maininput/MainInput";
import MainWork from "../mainwork/MainWork";
import { useState } from "react";
function MainTomorrow() {
  const dataMission = localStorage.getItem("missionTomorrow")
    ? JSON.parse(localStorage.getItem("missionTomorrow"))
    : [];
  const [mission, setMission] = useState(dataMission);
  const [completed, setCompleted] = useState([]);
  const handleMission = (m) => {
    let arr = [...mission];
    const b = { ...m, key: "tomorrow" };
    arr.push(b);
    console.log(arr);
    setMission(arr);
    localStorage.setItem("missionTomorrow", JSON.stringify(arr));
  };
  const handleMissionCheck = (c) => {
    setMission(c);
    console.log(c);
    localStorage.setItem("missionTomorrow", JSON.stringify(c));
    console.log(c);
  };
  const handleCompleted = (m) => {
    let arr = [...completed];
    arr.push(m);
    console.log(arr);
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

export default MainTomorrow;
