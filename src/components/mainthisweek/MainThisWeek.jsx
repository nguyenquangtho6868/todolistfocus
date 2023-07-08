import React from "react";
import MainAlert from "../mainalert/MainAlert";
import MainInput from "../maininput/MainInput";
import MainWork from "../mainwork/MainWork";
import { useState } from "react";
function Main() {
  const dataMissionToday = localStorage.getItem("missionToday")
    ? JSON.parse(localStorage.getItem("missionToday"))
    : [];
  const dataMissionTomorrow = localStorage.getItem("missionTomorrow")
    ? JSON.parse(localStorage.getItem("missionTomorrow"))
    : [];
  const dataMissionThisWeek = [...dataMissionToday, ...dataMissionTomorrow];
  console.log(dataMissionThisWeek);
  const [mission, setMission] = useState(dataMissionThisWeek);
  const [completed, setCompleted] = useState([]);
  const handleMission = (m) => {
    let arr = [...mission];
    arr.push(m);
    console.log(arr);
    setMission(arr);
    const today = arr.filter((element) => {
      return !dataMissionTomorrow.includes(element);
    });
    localStorage.setItem("missionToday", JSON.stringify(today));
  };
  const handleMissionCheck = (c, key, m) => {
    console.log(key);
    console.log(m);
    setMission(c);
  };
  const handleCompleted = (m) => {
    let arr = [...completed];
    arr.push(m);
    console.log(arr);
    setCompleted(arr);
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
export default Main;
