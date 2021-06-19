import { Routes, Route } from "react-router-dom";
import { TopNavbar, BottomNavbar, Dashboard } from "./components";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/test" element={<BottomNavbar />} />
      </Routes>
    </div>
  );
}

export default App;
