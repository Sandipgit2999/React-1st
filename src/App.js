import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Manufacture from "./Components/Manufacture.jsx";
import Operating from "./Components/operating.jsx";

function App() {
  return (
    <div className="abcd">
      <Operating />
      <Manufacture />
    </div>
  );
}

export default App;
