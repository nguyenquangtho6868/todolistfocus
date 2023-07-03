import React from "react";
import "./tomorrow.css";
import { useNavigate } from "react-router-dom";
function Tomorrow() {
  const navigate = useNavigate();
  const handleFocus = () => {
    console.log("Mission");
    navigate("/tomorrow");
  };
  return (
    <div className="tomorrow" onMouseEnter={handleFocus}>
      Tỏmoww
    </div>
  );
}

export default Tomorrow;
