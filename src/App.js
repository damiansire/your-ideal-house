import "./App.css";
import AllHouses from "./page/all-houses/AllHouses";
import HouseDataContainer from "./page/match-house/HouseDataContainer";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <div className="navbar-container">
        <Navbar />
      </div>
      <div className="main-app-container">
        <Routes>
          <Route exact path="/all-houses" element={<AllHouses />} />
          <Route exact path="/" element={<HouseDataContainer />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
