import { useState } from "react";
import "./App.css";
import ClerkProviderWithRoutes from "./auth/ClerkProviderWithRoutes";
import { Routes, Route } from "react-router-dom";
import Layout from "./layout/layout.jsx";
import ChallengeGenerator from "./challenge/ChallengeGenerator.jsx";
import HistoryPannel from "./history/HistoryPannel.jsx";
import AutheticationPage from "./auth/AutheticationPage.jsx";

function App() {
  return (
    <ClerkProviderWithRoutes>
      <Routes>
        <Route path="/sign-in/*" element={<AutheticationPage />} />
        <Route path="/sign-up" element={<AutheticationPage />} />
        <Route element={<Layout />}>
          <Route path="/" element={<ChallengeGenerator />}/>
          <Route path='/history' element={<HistoryPannel />} />
        </Route>
      </Routes>
    </ClerkProviderWithRoutes>
  );
}

export default App;
