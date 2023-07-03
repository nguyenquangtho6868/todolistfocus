import React from "react";
import MainAlert from "../mainalert/MainAlert";
import MainInput from "../maininput/MainInput";
function MainTomorrow() {
  let test = 5;
  return (
    <div>
      <MainAlert test={test} />
      <MainInput />
    </div>
  );
}

export default MainTomorrow;
