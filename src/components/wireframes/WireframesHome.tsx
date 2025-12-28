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
  Home,
  Route,
  User,
  Layers,
} from "lucide-react";

const adminModules = [
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

const mobileModules = [
  { icon: LogIn, title: "Login", description: "Employee authentication" },
  { icon: Home, title: "Home", description: "Banners & notifications" },
  { icon: Route, title: "Daily Route", description: "Delivery tracking" },
  { icon: GraduationCap, title: "Training", description: "Video courses" },
  { icon: User, title: "Profile", description: "KYC & vehicle data" },
];

export default function WireframesHome() {
  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col">
      {/* Hero Section */}
      <header className="sticky top-0 z-50 overflow-hidden border-b border-gray-800 bg-gray-950">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-orange-600/5 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 py-6 sm:py-8 lg:py-12">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12">
            {/* Left Content */}
            <div className="flex-1 max-w-xl">
              {/* Logo */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg shadow-orange-500/20">
                  <Layers size={28} className="text-white" />
                </div>
                <div>
                  <h1 className="text-3xl lg:text-4xl font-bold tracking-tight">
                    Speedio Move
                  </h1>
                  <p className="text-orange-400 font-medium text-sm">
                    Fleet Management Platform
                  </p>
                </div>
              </div>

              {/* Tagline */}
              <p className="text-lg lg:text-xl text-gray-300 mb-8 leading-relaxed">
                Comprehensive wireframe documentation for employee management
                and fleet operations.
              </p>

              {/* Stats */}
              <div className="flex gap-8 mb-8">
                <div>
                  <p className="text-3xl font-bold text-orange-500">12</p>
                  <p className="text-gray-500 text-sm">Total Screens</p>
                </div>
                <div className="w-px bg-gray-700" />
                <div>
                  <p className="text-3xl font-bold text-white">2</p>
                  <p className="text-gray-500 text-sm">Platforms</p>
                </div>
                <div className="w-px bg-gray-700" />
                <div>
                  <p className="text-3xl font-bold text-white">7</p>
                  <p className="text-gray-500 text-sm">Admin Modules</p>
                </div>
              </div>
            </div>

            {/* Right Content - Platform Cards */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-4 lg:w-80">
              {/* Admin Dashboard Card */}
              <Link
                to="/screens"
                className="group flex-1 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700 hover:border-orange-500/50 transition-all hover:shadow-xl hover:shadow-orange-500/5"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center">
                    <Monitor size={24} className="text-orange-500" />
                  </div>
                  <ArrowRight
                    size={20}
                    className="text-gray-500 group-hover:text-orange-500 group-hover:translate-x-1 transition-all"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-1">Admin Dashboard</h3>
                <p className="text-gray-400 text-sm">
                  7 screens • Desktop view
                </p>
              </Link>

              {/* Mobile App Card */}
              <Link
                to="/mobile-app"
                className="group flex-1 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700 hover:border-orange-500/50 transition-all hover:shadow-xl hover:shadow-orange-500/5"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center">
                    <Smartphone size={24} className="text-orange-500" />
                  </div>
                  <ArrowRight
                    size={20}
                    className="text-gray-500 group-hover:text-orange-500 group-hover:translate-x-1 transition-all"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-1">
                  Employee Mobile App
                </h3>
                <p className="text-gray-400 text-sm">5 screens • Mobile view</p>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-16">
        {/* Admin Dashboard Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center">
              <Monitor size={20} className="text-orange-500" />
            </div>
            <div>
              <h2 className="text-xl font-bold">Admin Dashboard</h2>
              <p className="text-gray-500 text-sm">
                Web application for fleet managers
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3">
            {adminModules.map((module, index) => (
              <div
                key={module.title}
                className="group bg-gray-900 rounded-xl p-4 border border-gray-800 hover:border-gray-700 transition-colors"
              >
                <div className="w-9 h-9 bg-gray-800 group-hover:bg-orange-500/10 rounded-lg flex items-center justify-center mb-3 transition-colors">
                  <module.icon
                    size={18}
                    className="text-gray-400 group-hover:text-orange-500 transition-colors"
                  />
                </div>
                <h3 className="font-medium text-sm mb-0.5">{module.title}</h3>
                <p className="text-gray-500 text-xs">{module.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Mobile App Section */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center">
              <Smartphone size={20} className="text-orange-500" />
            </div>
            <div>
              <h2 className="text-xl font-bold">Employee Mobile App</h2>
              <p className="text-gray-500 text-sm">
                Mobile application for delivery employees
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {mobileModules.map((module) => (
              <div
                key={module.title}
                className="group bg-gray-900 rounded-xl p-4 border border-gray-800 hover:border-gray-700 transition-colors"
              >
                <div className="w-9 h-9 bg-gray-800 group-hover:bg-orange-500/10 rounded-lg flex items-center justify-center mb-3 transition-colors">
                  <module.icon
                    size={18}
                    className="text-gray-400 group-hover:text-orange-500 transition-colors"
                  />
                </div>
                <h3 className="font-medium text-sm mb-0.5">{module.title}</h3>
                <p className="text-gray-500 text-xs">{module.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="sticky bottom-0 z-50 border-t border-gray-800 px-6 py-8 mt-auto bg-gray-950">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
              <Layers size={16} className="text-white" />
            </div>
            <span className="font-semibold">Speedio Move</span>
          </div>
          <p className="text-gray-500 text-sm text-center">
            Fleet Management Platform • Wireframe Documentation
          </p>
        </div>
      </footer>
    </div>
  );
}
