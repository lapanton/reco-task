import { Navigate, Route, Routes } from "react-router-dom";
import DiscoveryPage from "../../pages/DiscoveryPage.tsx";
import InventoryPage from "../../pages/InventoryPage.tsx";
import SettingsPage from "../../pages/SettingsPage.tsx";

export default function Layout() {
  return (
    <Routes>
      <Route index element={<DiscoveryPage />} />
      <Route path="inventory" element={<InventoryPage />} />
      <Route path="settings" element={<SettingsPage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
