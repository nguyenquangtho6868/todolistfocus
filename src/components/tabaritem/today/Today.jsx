import React from "react";
import "./today.css";
import { useNavigate } from "react-router-dom";
function Today() {
  const navigate = useNavigate();
  const handleFocus = () => {
    console.log("Mission");
    navigate("/");
  };
  return (
    <div className="today" onMouseEnter={handleFocus}>
      Today
    </div>
  );
}

export default Today;
