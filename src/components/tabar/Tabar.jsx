import React from "react";
import "./tabar.css";
import Today from "../tabaritem/today/Today";
import Tomorrow from "../tabaritem/tomorrow/Tomorrow";
import Thisweek from "../tabaritem/thisweek/Thisweek";

import Completed from "../tabaritem/completed/Completed";

function Tabar() {
  return (
    <div className="tabar">
      <Today />
      <Tomorrow />
      <Thisweek />

      <Completed />
    </div>
  );
}

export default Tabar;
