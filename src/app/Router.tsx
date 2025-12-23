import { Routes, Route } from "react-router-dom";
import DashboardPage from "@/app/pages/DashboardPage";
import EmployeesPage from "@/app/pages/EmployeesPage";
import KYCPage from "@/app/pages/KYCPage";
import TrackingPage from "@/app/pages/TrackingPage";
import TrainingPage from "@/app/pages/TrainingPage";
import SettingsPage from "@/app/pages/SettingsPage";
import NotFoundPage from "@/app/pages/NotFoundPage";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DashboardPage />} />
      <Route path="/employees" element={<EmployeesPage />} />
      <Route path="/kyc" element={<KYCPage />} />
      <Route path="/tracking" element={<TrackingPage />} />
      <Route path="/training" element={<TrainingPage />} />
      <Route path="/settings" element={<SettingsPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
