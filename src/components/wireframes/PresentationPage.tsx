import { LoginWireframe } from "./screens/LoginWireframe";
import { DashboardWireframe } from "./screens/DashboardWireframe";
import { EmployeesWireframe } from "./screens/EmployeesWireframe";
import { KYCWireframe } from "./screens/KYCWireframe";
import { TrackingWireframe } from "./screens/TrackingWireframe";
import { TrainingWireframe } from "./screens/TrainingWireframe";
import { SettingsWireframe } from "./screens/SettingsWireframe";
import { Printer, Download } from "lucide-react";

const slides = [
  {
    id: "cover",
    title: "Speedio Move",
    subtitle: "Fleet Management Dashboard",
    description: "A comprehensive employee management system for fleet operations",
    features: [
      "Real-time employee tracking",
      "KYC verification management",
      "Training & certification portal",
      "Integrated HRMIA access"
    ],
    component: null,
  },
  {
    id: "login",
    title: "Login & Security",
    subtitle: "Secure Access Control",
    description: "Password-protected dashboard with session-based authentication",
    features: [
      "Single password authentication",
      "Session management",
      "Automatic logout",
      "Administrator contact info"
    ],
    component: LoginWireframe,
  },
  {
    id: "dashboard",
    title: "Dashboard",
    subtitle: "Central Command Center",
    description: "Overview of key metrics and quick access to all modules",
    features: [
      "4 KPI stat cards with real-time data",
      "Total employees counter",
      "KYC verification percentage",
      "Active employees tracker",
      "Training completion rate",
      "Quick navigation to all modules"
    ],
    component: DashboardWireframe,
  },
  {
    id: "employees",
    title: "Employee Management",
    subtitle: "Complete Workforce Database",
    description: "Full employee database with advanced search, filtering, and CRUD operations",
    features: [
      "Searchable employee directory",
      "Filter by status, department, role",
      "Sortable data columns",
      "Pagination (15 per page)",
      "Add/Edit/Delete employees",
      "Export employee data"
    ],
    component: EmployeesWireframe,
  },
  {
    id: "kyc",
    title: "KYC Verification",
    subtitle: "Compliance Management",
    description: "Track and manage KYC documentation and verification status for all employees",
    features: [
      "Verification status overview",
      "Pending/Verified/Expired tracking",
      "Document expiry alerts",
      "Bulk status updates",
      "Compliance reporting",
      "Audit trail"
    ],
    component: KYCWireframe,
  },
  {
    id: "tracking",
    title: "Live Tracking",
    subtitle: "Real-time Location Monitoring",
    description: "Monitor active employees in real-time with location and status updates",
    features: [
      "Active employee count",
      "Real-time status indicators",
      "Last location update",
      "Online/Offline status",
      "Activity monitoring",
      "Auto-refresh every 30 seconds"
    ],
    component: TrackingWireframe,
  },
  {
    id: "training",
    title: "Training Portal",
    subtitle: "Certification & Development",
    description: "Track training progress and certification status for all employees",
    features: [
      "Training completion stats",
      "Certificate status tracking",
      "Valid/Expiring/Expired badges",
      "Training program progress",
      "Certification reminders",
      "Training history"
    ],
    component: TrainingWireframe,
  },
  {
    id: "settings",
    title: "Settings",
    subtitle: "System Configuration",
    description: "Configure system preferences and access external HRMIA integration",
    features: [
      "Account settings",
      "Notification preferences",
      "Security configuration",
      "Appearance/Theme options",
      "Language settings",
      "Direct HRMIA system access"
    ],
    component: SettingsWireframe,
  },
  {
    id: "technical",
    title: "Technical Overview",
    subtitle: "Architecture & Stack",
    description: "Built with modern web technologies for performance and maintainability",
    features: [
      "React 18 with TypeScript",
      "Vite build system",
      "Tailwind CSS styling",
      "React Router navigation",
      "TanStack Query for data",
      "Recharts for visualization",
      "DaisyUI components",
      "Responsive design"
    ],
    component: null,
  },
];

export default function PresentationPage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header - Hidden when printing */}
      <header className="bg-gray-900 text-white px-6 py-4 print:hidden sticky top-0 z-50">
        <div className="flex items-center justify-between max-w-6xl mx-auto">
          <div>
            <h1 className="text-xl font-bold flex items-center gap-3">
              <div className="w-6 h-6 bg-orange-500 rounded" />
              Speedio Move - Presentation Export
            </h1>
            <p className="text-gray-400 text-sm">
              {slides.length} slides ready for export
            </p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={handlePrint}
              className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-lg transition-colors"
            >
              <Printer size={18} />
              Print / Save as PDF
            </button>
          </div>
        </div>
        <p className="text-gray-400 text-xs mt-2 max-w-6xl mx-auto">
          Tip: Use browser's Print function (Ctrl/Cmd + P) and select "Save as PDF" for best results
        </p>
      </header>

      {/* Slides */}
      <main className="max-w-6xl mx-auto">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className="min-h-screen p-8 print:p-6 print:break-after-page border-b border-gray-200 print:border-none flex flex-col"
          >
            {/* Slide Header */}
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold">
                  {index + 1}
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">{slide.title}</h2>
                  <p className="text-orange-500 font-medium">{slide.subtitle}</p>
                </div>
              </div>
              <p className="text-gray-600 mt-3 text-lg">{slide.description}</p>
            </div>

            {/* Content Area */}
            <div className="flex-1 flex gap-8">
              {/* Features List */}
              <div className="w-72 shrink-0">
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
                  Key Features
                </h3>
                <ul className="space-y-3">
                  {slide.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-6 h-6 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center text-xs font-semibold shrink-0">
                        {i + 1}
                      </span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Wireframe or Placeholder */}
              <div className="flex-1 bg-gray-100 rounded-xl overflow-hidden">
                {slide.component ? (
                  <slide.component />
                ) : slide.id === "cover" ? (
                  <div className="h-full min-h-[400px] bg-gradient-to-br from-gray-900 to-gray-800 flex flex-col items-center justify-center text-white p-8">
                    <div className="w-24 h-24 bg-orange-500 rounded-2xl mb-6" />
                    <h1 className="text-5xl font-bold mb-2">Speedio Move</h1>
                    <p className="text-xl text-gray-400 mb-8">Fleet Management Dashboard</p>
                    <div className="grid grid-cols-4 gap-6 mt-8">
                      {[
                        { label: "Employees", value: "156" },
                        { label: "KYC Rate", value: "89%" },
                        { label: "Active", value: "124" },
                        { label: "Training", value: "72%" },
                      ].map((stat) => (
                        <div key={stat.label} className="text-center">
                          <div className="text-3xl font-bold text-orange-500">{stat.value}</div>
                          <div className="text-sm text-gray-400">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="h-full min-h-[400px] bg-gradient-to-br from-gray-800 to-gray-900 flex flex-col items-center justify-center text-white p-8">
                    <div className="w-16 h-16 bg-orange-500 rounded-xl mb-4" />
                    <h3 className="text-2xl font-bold mb-2">{slide.title}</h3>
                    <p className="text-gray-400">{slide.subtitle}</p>
                    <div className="mt-8 grid grid-cols-2 gap-4 text-sm">
                      {slide.features.slice(0, 4).map((f, i) => (
                        <div key={i} className="bg-gray-700/50 px-4 py-2 rounded-lg text-gray-300">
                          {f}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Slide Footer */}
            <div className="mt-6 pt-4 border-t border-gray-200 flex items-center justify-between text-sm text-gray-400">
              <span>Speedio Move Fleet Management</span>
              <span>Slide {index + 1} of {slides.length}</span>
            </div>
          </div>
        ))}
      </main>

      {/* Print Styles */}
      <style>{`
        @media print {
          body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
          .print\\:hidden { display: none !important; }
          .print\\:break-after-page { break-after: page; }
          .print\\:p-6 { padding: 1.5rem; }
          .print\\:border-none { border: none; }
        }
      `}</style>
    </div>
  );
}
