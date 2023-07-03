import React from "react";
import "./completed.css";
import { useNavigate } from "react-router-dom";
function Completed() {
  const navigate = useNavigate();
  const handleFocus = () => {
    console.log("Mission");
    navigate("/completed");
  };
  return (
    <div className="completed" onMouseEnter={handleFocus}>
      Completed
    </div>
  );
}

export default Completed;
