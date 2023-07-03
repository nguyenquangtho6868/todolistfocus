import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Tabar from "./components/tabar/Tabar";
import MainToday from "./components/maintoday/MainToday";
import MainTomorrow from "./components/maintomorrow/MainTomorrow";
import MainThisWeek from "./components/mainthisweek/MainThisWeek";
import MainPlaned from "./components/mainplaned/MainPlaned";
import MainCompleted from "./components/maincompleted/MainCompleted";
import MainMission from "./components/mainmission/MainMission";
function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Header />
      </div>
      <div className="page">
        <div className="page-tabar">
          <Tabar />
        </div>
        <div className="page-main">
          <Routes>
            <Route path="/" element={<MainToday />} />
            <Route path="/tomorrow" element={<MainTomorrow />} />
            <Route path="/thisweek" element={<MainThisWeek />} />
            <Route path="/planed" element={<MainPlaned />} />
            <Route path="/completed" element={<MainCompleted />} />
            <Route path="/mission" element={<MainMission />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
