import { BrowserRouter } from "react-router-dom";
import Sidebar from "../components/sidebar";
import Layout from "../components/Layout";

export default function AppRecoRoutes() {
  return (
    <BrowserRouter>
      <div className="d-flex">
        <Sidebar />
        <Layout />
      </div>
    </BrowserRouter>
  );
}
