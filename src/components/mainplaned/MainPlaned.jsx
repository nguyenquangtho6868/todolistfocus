import React from "react";

import MainAlert from "../mainalert/MainAlert";
import MainInput from "../maininput/MainInput";
import MainWork from "../mainwork/MainWork";
import { useState } from "react";
function Planed() {
  const [mission, setMission] = useState([]);
  const [completed, setCompleted] = useState([]);
  const handleMission = (m) => {
    let arr = [...mission];
    arr.push(m);
    console.log(arr);
    setMission(arr);
  };
  const handleMissionCheck = (c) => {
    setMission(c);
    console.log(c);
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

export default Planed;
