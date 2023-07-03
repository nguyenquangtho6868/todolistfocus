import React from "react";
import MainAlert from "../mainalert/MainAlert";
import MainInput from "../maininput/MainInput";
import { useState } from "react";
function MainToday() {
  const [mission, setMission] = useState(null);
  let test = 15;
  const handleMission = (m) => {
    setMission(m);
  };

  console.log(mission);
  return (
    <div>
      <MainAlert test={test} />
      <MainInput handleMission={handleMission} />
    </div>
  );
}
export default MainToday;
