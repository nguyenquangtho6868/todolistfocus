import React from "react";
import "./mainalert.css";
function MainAlert({ test }) {
  return (
    <div className="alert">
      <div className="alertitem">
        <div className="times">
          <h2 style={{ marginTop: 10, marginLeft: 100 }}>{test}</h2>
          <p>ph</p>
        </div>

        <h6 style={{ marginTop: 0, marginLeft: 50 }}>Thời gian ước tính</h6>
      </div>
      <div className="alertitem">
        <div className="times">
          <h2 style={{ marginTop: 10, marginLeft: 100 }}>1</h2>
          <p>ph</p>
        </div>

        <h6 style={{ marginTop: 0, marginLeft: 50 }}>Thời gian ước tính</h6>
      </div>
      <div className="alertitem">
        <div className="times">
          <h2 style={{ marginTop: 10, marginLeft: 100 }}>1</h2>
          <p>ph</p>
        </div>

        <h6 style={{ marginTop: 0, marginLeft: 50 }}>Thời gian ước tính</h6>
      </div>
      <div className="alertitem">
        <div className="times">
          <h2 style={{ marginTop: 10, marginLeft: 100 }}>1</h2>
          <p>ph</p>
        </div>

        <h6 style={{ marginTop: 0, marginLeft: 50 }}>Thời gian ước tính</h6>
      </div>
    </div>
  );
}

export default MainAlert;
