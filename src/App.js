import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./Views/dashboard/dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="" element={<Dashboard />} />
        <Route path="/about" element={<Dashboard />} />
        <Route path="/blog" element={<Dashboard />} />
        <Route path="/login" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/home" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
