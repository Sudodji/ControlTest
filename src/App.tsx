import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import ButtonsControl from "./components/ButtonsControl";
import AutoCompleteControl from "./components/AutoCompleteControl";

const App = () => {
  return (
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<ButtonsControl />} />
        <Route path="/autocomplete" element={<AutoCompleteControl limit={10} />} />
      </Routes>
    </div>
  )
}

export default App;
