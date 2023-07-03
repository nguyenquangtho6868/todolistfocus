import React from "react";
import "./tabar.css";
import Today from "../tabaritem/today/Today";
import Tomorrow from "../tabaritem/tomorrow/Tomorrow";
import Thisweek from "../tabaritem/thisweek/Thisweek";
import Planned from "../tabaritem/planned/Planned";
import Completed from "../tabaritem/completed/Completed";
import Mission from "../tabaritem/mission/Mission";
function Tabar() {
  return (
    <div className="tabar">
      <Today />
      <Tomorrow />
      <Thisweek />
      <Planned />
      <Completed />
      <Mission />
    </div>
  );
}

export default Tabar;
