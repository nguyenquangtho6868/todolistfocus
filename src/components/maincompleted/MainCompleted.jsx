import React from "react";
import { useState } from "react";
import MainWorkCompleted from "../mainwork/MainWorkCompletded";

function Completed() {
  const dataCompleted = localStorage.getItem("completed")
    ? JSON.parse(localStorage.getItem("completed"))
    : [];
  const [data, setData] = useState(dataCompleted);
  const handleCompleted = (m) => {
    console.log(m);
    setData(data.filter((check) => check !== m));
    localStorage.setItem("completed", JSON.stringify(data));
  };
  return (
    <div>
      <MainWorkCompleted mission={data} handleCompleted={handleCompleted} />
    </div>
  );
}

export default Completed;
