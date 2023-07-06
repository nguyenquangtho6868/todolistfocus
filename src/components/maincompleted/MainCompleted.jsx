import React from "react";
import MainAlert from "../mainalert/MainAlert";
import MainInput from "../maininput/MainInput";
import MainWork from "../mainwork/MainWork";
import { useState } from "react";
function Completed() {
  const dataCompleted = localStorage.getItem("completed")
    ? JSON.parse(localStorage.getItem("completed"))
    : [];

  return (
    <div>
      <MainWork mission={dataCompleted} />
    </div>
  );
}

export default Completed;
