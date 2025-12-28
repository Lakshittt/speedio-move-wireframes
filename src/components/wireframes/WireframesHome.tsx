import { Link } from "react-router-dom";
import {
  Monitor,
  ArrowRight,
  Users,
  FileCheck,
  MapPin,
  GraduationCap,
  Settings,
  LayoutDashboard,
  LogIn,
  Smartphone,
} from "lucide-react";

const modules = [
  { icon: LogIn, title: "Login", description: "Secure access control" },
  {
    icon: LayoutDashboard,
    title: "Dashboard",
    description: "Fleet operations overview",
  },
  {
    icon: Users,
    title: "Employees",
    description: "Staff directory management",
  },
  { icon: FileCheck, title: "KYC", description: "Document compliance" },
  { icon: MapPin, title: "Tracking", description: "Real-time location" },
  {
    icon: GraduationCap,
    title: "Training",
    description: "Learning management",
  },
  { icon: Settings, title: "Settings", description: "System configuration" },
];

export default function WireframesHome() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-transparent" />
        <div className="relative max-w-6xl mx-auto px-6 py-20">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 bg-orange-500 rounded-xl" />
            <div>
              <h1 className="text-4xl font-bold">Speedio Move</h1>
              <p className="text-orange-400 font-medium">
                Fleet Management Dashboard
              </p>
            </div>
          </div>
          <p className="text-xl text-gray-300 max-w-2xl mb-10">
            Comprehensive wireframe documentation for the employee management
            and fleet operations platform.
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-4 flex-wrap">
            <Link
              to="/screens"
              className="inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-xl font-semibold transition-colors"
            >
              <Monitor size={20} />
              Admin Dashboard
              <ArrowRight size={18} />
            </Link>
            <Link
              to="/mobile-app"
              className="inline-flex items-center gap-3 bg-gray-700 hover:bg-gray-600 px-6 py-3 rounded-xl font-semibold transition-colors"
            >
              <Smartphone size={20} />
              Employee Mobile App
              <ArrowRight size={18} />
            </Link>
          </div>

          <div>
            <p className="text-gray-400 mt-6">
              Browse all 7 application screens with responsive preview options.
              Switch between desktop, tablet, and mobile views.
            </p>
          </div>
        </div>
      </header>

      {/* Modules Overview */}
      <section className="max-w-7xl mx-auto px-3 py-16">
        <h2 className="text-2xl font-bold mb-8">Application Modules</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {modules.map((module) => (
            <div
              key={module.title}
              className="bg-gray-800 rounded-xl p-5 border border-gray-700 hover:border-orange-500/50 transition-colors"
            >
              <module.icon className="text-orange-500 mb-3" size={28} />
              <h3 className="font-semibold text-lg">{module.title}</h3>
              <p className="text-gray-400 text-sm">{module.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 border-t border-gray-700 px-6 py-6 mt-auto">
        <div className="max-w-6xl mx-auto text-center">
          {/* <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-8 bg-orange-500 rounded-lg" />
            <span className="font-bold text-lg">Speedio Move</span>
          </div> */}
          <p className="text-gray-400 text-sm">
            Fleet Management Dashboard • 7 Modules • Wireframe Documentation
          </p>
        </div>
      </footer>
    </div>
  );
}
