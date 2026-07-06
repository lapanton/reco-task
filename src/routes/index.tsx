import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SettingsPage from "../pages/SettingsPage.tsx";
import InventoryPage from "../pages/InventoryPage.tsx";
import DiscoveryPage from "../pages/DiscoveryPage.tsx";

export default function AppRecoRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<DiscoveryPage />} />
        <Route path="inventory" element={<InventoryPage />} />
        <Route path="settings" element={<SettingsPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}
