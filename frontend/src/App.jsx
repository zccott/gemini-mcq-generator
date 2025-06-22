import { useState } from "react";
import "./App.css";
import ClerkProviderWithRoutes from "./auth/ClerkProviderWithRoutes";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./layout/layout.jsx";
import { ChallengeGenerator } from "./challenge/ChallengeGenerator.jsx";
import { HistoryPannel } from "./history/HistoryPannel.jsx";
import { AutheticationPage } from "./auth/AutheticationPage.jsx"

function App() {
  return (
    <ClerkProviderWithRoutes>
      <Routes></Routes>
    </ClerkProviderWithRoutes>
  );
}

export default App;
