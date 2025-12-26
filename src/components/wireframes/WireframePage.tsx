import { useState } from "react";
import { Link } from "react-router-dom";
import { Monitor, Tablet, Smartphone, Home } from "lucide-react";
import { WireframeContainer } from "./WireframeContainer";
import { LoginWireframe } from "./screens/LoginWireframe";
import { DashboardWireframe } from "./screens/DashboardWireframe";
import { EmployeesWireframe } from "./screens/EmployeesWireframe";
import { KYCWireframe } from "./screens/KYCWireframe";
import { TrackingWireframe } from "./screens/TrackingWireframe";
import { TrainingWireframe } from "./screens/TrainingWireframe";
import { SettingsWireframe } from "./screens/SettingsWireframe";

const wireframes = [
  {
    id: "login",
    title: "1. Login Screen",
    subtitle: "Secure Access Control",
    description:
      "Password-protected dashboard with session-based authentication ensuring only authorized personnel can access fleet management tools.",
    features: [
      "Single password authentication",
      "Session management",
      "Automatic logout",
      "Administrator contact info",
    ],
    component: LoginWireframe,
  },
  {
    id: "dashboard",
    title: "2. Dashboard",
    subtitle: "Fleet Operations Overview",
    description:
      "Real-time KPIs and status indicators providing instant visibility into fleet performance and operational metrics.",
    features: [
      "Fleet size and vehicle counts",
      "Active employee tracking",
      "Training completion rates",
      "KYC verification status",
      "Live location monitoring",
    ],
    component: DashboardWireframe,
  },
  {
    id: "employees",
    title: "3. Employee Management",
    subtitle: "Complete Staff Directory",
    description:
      "Comprehensive employee database with advanced filtering, search capabilities, and detailed profile management.",
    features: [
      "Searchable employee directory",
      "Role-based filtering",
      "Status indicators",
      "Contact information",
      "Profile management",
      "Bulk operations",
    ],
    component: EmployeesWireframe,
  },
  {
    id: "kyc",
    title: "4. KYC Verification",
    subtitle: "Document Compliance Tracking",
    description:
      "Track and manage driver documentation including licenses, certifications, and compliance requirements.",
    features: [
      "Document upload system",
      "Expiry tracking",
      "Verification status",
      "Compliance alerts",
      "Document history",
    ],
    component: KYCWireframe,
  },
  {
    id: "tracking",
    title: "5. Live Tracking",
    subtitle: "Real-Time Location Monitoring",
    description:
      "GPS-based vehicle and driver tracking with live map visualization and trip history.",
    features: [
      "Live map view",
      "Vehicle locations",
      "Driver status",
      "Route visualization",
      "Trip history",
      "Geofencing alerts",
    ],
    component: TrackingWireframe,
  },
  {
    id: "training",
    title: "6. Training Portal",
    subtitle: "Learning Management System",
    description:
      "Assign, track, and manage driver training programs with progress monitoring and certification tracking.",
    features: [
      "Course catalog",
      "Progress tracking",
      "Certification management",
      "Training assignments",
      "Completion reports",
    ],
    component: TrainingWireframe,
  },
  {
    id: "settings",
    title: "7. Settings",
    subtitle: "System Configuration",
    description:
      "Customize application settings, manage user preferences, and configure system-wide options.",
    features: [
      "User preferences",
      "Notification settings",
      "Security options",
      "Data export",
      "Integration settings",
    ],
    component: SettingsWireframe,
  },
];

export default function WireframePage() {
  const [activeWireframe, setActiveWireframe] = useState<string | null>(null);
  const isIndividualScreen = activeWireframe !== null;

  return (
    <div
      className={`bg-gray-900 text-white ${
        isIndividualScreen ? "h-screen flex flex-col" : "min-h-screen"
      }`}
    >
      {/* Header */}
      <header
        className={`bg-gray-800 border-b border-gray-700 px-6 py-4 ${
          isIndividualScreen ? "sticky top-0 z-10 flex-shrink-0" : ""
        }`}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link
              to="/"
              className="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
              title="Back to Home"
            >
              <Home size={20} />
            </Link>
            <div>
              <h1 className="text-2xl font-bold flex items-center gap-3">
                <div className="w-8 h-8 bg-orange-500 rounded-lg" />
                Speedio Move - Wireframes
              </h1>
              <p className="text-gray-400 text-sm mt-1">
                Static mockup components for presentation
              </p>
            </div>
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

        {/* Description Section */}
        {activeWireframe && (
          <div className="mt-4 bg-gray-800 rounded-lg p-4 border border-gray-700">
            {wireframes
              .filter((wf) => wf.id === activeWireframe)
              .map((wf) => (
                <div key={wf.id}>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-orange-500 font-semibold">
                      {wf.subtitle}
                    </span>
                  </div>
                  <p className="text-gray-300 text-sm mb-3">{wf.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {wf.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
          </div>
        )}
      </header>

      {/* Content */}
      <main
        className={`p-6 ${isIndividualScreen ? "flex-1 overflow-auto" : ""}`}
      >
        <div
          className={`w-full ${isIndividualScreen ? "h-full" : "space-y-8"}`}
        >
          {wireframes
            .filter((wf) => !activeWireframe || wf.id === activeWireframe)
            .map((wf) => (
              <WireframeContainer
                key={wf.id}
                title={wf.title}
                fillHeight={isIndividualScreen}
              >
                <wf.component />
              </WireframeContainer>
            ))}
        </div>
      </main>

      {/* Footer */}
      <footer
        className={`bg-gray-800 border-t border-gray-700 px-6 py-4 ${
          isIndividualScreen ? "sticky bottom-0 flex-shrink-0" : "mt-12"
        }`}
      >
        <div className="text-center text-gray-400 text-sm">
          <p>
            Speedio Move Fleet Management Dashboard • Wireframe Documentation
          </p>
          <p className="mt-1">
            7 screens • Password protected access • Real-time data integration
          </p>
        </div>
      </footer>
    </div>
  );
}
