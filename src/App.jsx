import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/login";
import Dashboard from "./components/dashboard/Dashboard";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} /> {/* Default route */}
        <Route path="/register" element={<Signup />} />{" "}
        {/* Registration page */}
        <Route path="/dashboard" element={<Dashboard />} />{" "}
        {/* Dashboard for logged-in users */}
        {/* <Route path="*" element={<NotFound />} />{" "} */}
        {/* Fallback for unmatched routes */}
      </Routes>
    </Router>
  );
};

export default App;
