import logo from "./logo.svg";
import "./App.css";
import AllHouses from "./page/all-houses/AllHouses";
import MathHouse from "./page/match-house/MatchHouse";
import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <div>
        <Routes>
          <Route exact path="/all-houses" element={<AllHouses />} />
          <Route exact path="/" element={<MathHouse />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
