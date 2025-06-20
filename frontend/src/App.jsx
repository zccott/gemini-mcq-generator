import { useState } from "react";
import "./App.css";
import ClerkProviderWithRoutes from "./auth/ClerkProviderWithRoutes";
import { Routes, Route } from "react-router-dom";

function App() {
  return <ClerkProviderWithRoutes>
    <Routes>
      
    </Routes>
  </ClerkProviderWithRoutes>;
}

export default App;
