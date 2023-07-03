import React from "react";
import "./mission.css";
import { useNavigate } from "react-router-dom";
function Mission() {
  const navigate = useNavigate();
  const handleFocus = () => {
    console.log("Mission");
    navigate("/mission");
  };
  const handleBlur = () => {
    console.log("Blur");
  };
  return (
    <div className="mission" onMouseEnter={handleFocus} onMouseOut={handleBlur}>
      Mission
    </div>
  );
}

export default Mission;
