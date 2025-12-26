import { useState } from "react";
import { Monitor, Tablet, Smartphone } from "lucide-react";
import { WireframeContainer } from "./WireframeContainer";
import { LoginWireframe } from "./screens/LoginWireframe";
import { DashboardWireframe } from "./screens/DashboardWireframe";
import { EmployeesWireframe } from "./screens/EmployeesWireframe";
import { KYCWireframe } from "./screens/KYCWireframe";
import { TrackingWireframe } from "./screens/TrackingWireframe";
import { TrainingWireframe } from "./screens/TrainingWireframe";
import { SettingsWireframe } from "./screens/SettingsWireframe";

const wireframes = [
  { id: "login", title: "1. Login Screen", component: LoginWireframe },
  { id: "dashboard", title: "2. Dashboard", component: DashboardWireframe },
  { id: "employees", title: "3. Employee Management", component: EmployeesWireframe },
  { id: "kyc", title: "4. KYC Verification", component: KYCWireframe },
  { id: "tracking", title: "5. Live Tracking", component: TrackingWireframe },
  { id: "training", title: "6. Training Portal", component: TrainingWireframe },
  { id: "settings", title: "7. Settings", component: SettingsWireframe },
];

type ViewSize = "desktop" | "tablet" | "mobile";

export default function WireframePage() {
  const [activeWireframe, setActiveWireframe] = useState<string | null>(null);
  const [viewSize, setViewSize] = useState<ViewSize>("desktop");

  const sizeStyles: Record<ViewSize, string> = {
    desktop: "w-full",
    tablet: "max-w-2xl mx-auto",
    mobile: "max-w-sm mx-auto",
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-gray-800 border-b border-gray-700 px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold flex items-center gap-3">
              <div className="w-8 h-8 bg-orange-500 rounded-lg" />
              Speedio Move - Wireframes
            </h1>
            <p className="text-gray-400 text-sm mt-1">
              Static mockup components for presentation
            </p>
          </div>

          {/* View Size Toggle */}
          <div className="flex items-center gap-2 bg-gray-700 rounded-lg p-1">
            <button
              onClick={() => setViewSize("desktop")}
              className={`p-2 rounded ${viewSize === "desktop" ? "bg-orange-500" : "hover:bg-gray-600"}`}
            >
              <Monitor size={18} />
            </button>
            <button
              onClick={() => setViewSize("tablet")}
              className={`p-2 rounded ${viewSize === "tablet" ? "bg-orange-500" : "hover:bg-gray-600"}`}
            >
              <Tablet size={18} />
            </button>
            <button
              onClick={() => setViewSize("mobile")}
              className={`p-2 rounded ${viewSize === "mobile" ? "bg-orange-500" : "hover:bg-gray-600"}`}
            >
              <Smartphone size={18} />
            </button>
          </div>
        </div>

        {/* Navigation Pills */}
        <div className="flex gap-2 mt-4 flex-wrap">
          <button
            onClick={() => setActiveWireframe(null)}
            className={`px-4 py-2 rounded-lg text-sm transition-colors ${
              activeWireframe === null
                ? "bg-orange-500 text-white"
                : "bg-gray-700 text-gray-300 hover:bg-gray-600"
            }`}
          >
            All Screens
          </button>
          {wireframes.map((wf) => (
            <button
              key={wf.id}
              onClick={() => setActiveWireframe(wf.id)}
              className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                activeWireframe === wf.id
                  ? "bg-orange-500 text-white"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}
            >
              {wf.title}
            </button>
          ))}
        </div>
      </header>

      {/* Content */}
      <main className="p-6">
        <div className={`${sizeStyles[viewSize]} space-y-8`}>
          {wireframes
            .filter((wf) => !activeWireframe || wf.id === activeWireframe)
            .map((wf) => (
              <WireframeContainer key={wf.id} title={wf.title}>
                <wf.component />
              </WireframeContainer>
            ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 border-t border-gray-700 px-6 py-4 mt-12">
        <div className="text-center text-gray-400 text-sm">
          <p>Speedio Move Fleet Management Dashboard • Wireframe Documentation</p>
          <p className="mt-1">7 screens • Password protected access • Real-time data integration</p>
        </div>
      </footer>
    </div>
  );
}
