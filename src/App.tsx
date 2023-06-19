import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import EmissionDetails from "./EmissionDetails";
import NFTPage from "./NFTPage";
import PointManagement from "./PointManagement";
import SettingsPage from "./SettingsPage";
import InfoHelpPage from "./InfoHelpPage";
import Navbar from "./Navbar";

const App: React.FC = () => {
  return (
    <Router>
      <div
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/background.jpg)`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          minHeight: "100vh",
          backgroundColor: "#000" // ここには適当な背景色を設定してください
        }}
      >
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/emission-details" element={<EmissionDetails />} />
          <Route path="/nft" element={<NFTPage />} />
          <Route path="/points" element={<PointManagement />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/info-help" element={<InfoHelpPage />} />
          {/* 他のルートをここに追加 */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
