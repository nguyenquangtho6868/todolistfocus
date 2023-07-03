import React from "react";
import "./planned.css";
import { useNavigate } from "react-router-dom";
function Planned() {
  const navigate = useNavigate();
  const handleFocus = () => {
    console.log("Mission");
    navigate("/planed");
  };
  return (
    <div className="planned" onMouseEnter={handleFocus}>
      planed
    </div>
  );
}

export default Planned;
