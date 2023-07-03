import React from "react";
import "./thisweek.css";
import { useNavigate } from "react-router-dom";
function Thisweek() {
  const navigate = useNavigate();
  const handleFocus = () => {
    console.log("Thisweek");
    navigate("/thisweek");
  };
  return (
    <div className="thisweek" onMouseEnter={handleFocus}>
      This Week
    </div>
  );
}

export default Thisweek;
