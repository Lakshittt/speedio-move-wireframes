import { Routes, Route } from "react-router-dom";
import DashboardPage from "@/app/pages/DashboardPage";
import EmployeesPage from "@/app/pages/EmployeesPage";
import KYCPage from "@/app/pages/KYCPage";
import TrackingPage from "@/app/pages/TrackingPage";
import TrainingPage from "@/app/pages/TrainingPage";
import SettingsPage from "@/app/pages/SettingsPage";
import NotFoundPage from "@/app/pages/NotFoundPage";
import LoginPage from "@/app/pages/LoginPage";
import { ProtectedRoute } from "@/components/auth/ProtectedRoute";

export function Router() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <DashboardPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/employees"
        element={
          <ProtectedRoute>
            <EmployeesPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/kyc"
        element={
          <ProtectedRoute>
            <KYCPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/tracking"
        element={
          <ProtectedRoute>
            <TrackingPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/training"
        element={
          <ProtectedRoute>
            <TrainingPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/settings"
        element={
          <ProtectedRoute>
            <SettingsPage />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
