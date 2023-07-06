import React, { useEffect } from "react";
import "./mainalert.css";
import { useState } from "react";
function MainAlert({ mission }) {
  const missionLength = mission.length;
  const missionClock = mission ? mission.map((m) => m.clock) : [];
  const c = missionClock.flat(1).length * 25;
  const quotient = Math.floor(c / 60);
  const remainder = c % 60;
  console.log("Kết quả: " + quotient);
  console.log("Số dư: " + remainder);

  const [seconds, setSeconds] = useState(1500);
  const [running, setRunning] = useState(false);
  const [on, setOn] = useState(false);
  const minute = Math.floor(seconds / 60);
  const second = seconds % 60;

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [running]);

  useEffect(() => {
    if (seconds === 0) {
      setRunning(false);
      console.log("Đếm ngược kết thúc!");
    }
  }, [seconds]);

  return (
    <div className="alert">
      <div className="alertitem">
        <div className="times">
          <h2 style={{ marginTop: 50, marginLeft: 70 }}>
            {quotient !== 0 && quotient}
          </h2>
          {quotient !== 0 && <p style={{ marginTop: 60 }}>g</p>}
          <h2 style={{ marginTop: 50 }}>{remainder}</h2>
          <p style={{ marginTop: 60 }}>ph</p>
        </div>

        <h6 style={{ marginTop: 0, marginLeft: 50 }}>Thời gian ước tính</h6>
      </div>
      <div className="alertitem">
        <div className="times">
          <h2 style={{ marginTop: 50, marginLeft: 100 }}>{missionLength}</h2>
        </div>

        <h6 style={{ marginTop: 0, marginLeft: 50 }}>
          Công việc cần hoàn thành
        </h6>
      </div>
      {/* <div className="alertitem">
        <div className="times">
          <h2 style={{ marginTop: 10, marginLeft: 100 }}>1</h2>
          <p>ph</p>
        </div>

        <h6 style={{ marginTop: 0, marginLeft: 50 }}>Thời gian ước tính</h6>
      </div> */}
      {/* {on && (
        <div className="alertcircle">
          <div className="times">
            <h2 style={{ marginTop: 10, marginLeft: 100 }}>
              {minute !== 0 && minute}
            </h2>
            {minute !== 0 && <p>ph</p>}
            <h2 style={{ marginTop: 10 }}>{second}</h2>
            <p>s</p>
            {!running && seconds > 0 && (
              <button
                style={{ backgroundColor: "green" }}
                onClick={startCountdown}
              >
                Bắt đầu
              </button>
            )}
            {running && (
              <button
                style={{ backgroundColor: "yellow" }}
                onClick={stopCountdown}
              >
                Dừng
              </button>
            )}
            <button
              style={{ backgroundColor: "red" }}
              onClick={() => {
                setOn(false);
              }}
            >
              OffPomodoro
            </button>
          </div>

          <h6 style={{ marginTop: 0, marginLeft: 50 }}>Thời gian ước tính</h6>
        </div>
      )} */}
      {on && (
        <div class="clock">
          <div className="number">
            <div className="minutes">{minute}</div>
            <div className="minutes">:</div>
            <div className="minutes">{second}</div>
          </div>

          <button
            onClick={() => {
              setRunning(!running);
            }}
            style={{ backgroundColor: "green" }}
          >
            {running ? "pause" : "start"}
          </button>
          <button
            onClick={() => {
              setSeconds(1500);
            }}
          >
            reset
          </button>
          <button
            style={{ backgroundColor: "red" }}
            onClick={() => {
              setOn(false);
            }}
          >
            OffPomodoro
          </button>
        </div>
      )}

      {!on && (
        <button
          style={{ backgroundColor: "green" }}
          onClick={() => {
            setOn(true);
          }}
        >
          OnPomodoro
        </button>
      )}
    </div>
  );
}

export default MainAlert;
