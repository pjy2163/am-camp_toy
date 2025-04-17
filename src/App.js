import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LoginPage from "./LoginPage";
import RegistrationPage from "./RegistrationPage";
import LandingPage from "./LandingPage";
import GithubCallback from "./GithubCallback";
import GoogleCallback from "./GoogleCallback";

function App() {
  return (
    // <Router>
    <Routes>
      <Route path="/" element={<Navigate to="/login-page" replace />} />
      <Route path="/login-page" element={<LoginPage />} />
      <Route path="/registration-page" element={<RegistrationPage />} />
      <Route path="/landing-page" element={<LandingPage />} />
      <Route path="/callback" element={<GithubCallback />} />
      <Route path="/google-callback" element={<GoogleCallback />} />
    </Routes>
    // </Router>
  );
}

export default App;
