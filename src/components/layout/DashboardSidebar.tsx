import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  MapPin,
  GraduationCap,
  FileCheck,
  Settings,
  LogOut,
  ChevronLeft,
  ChevronRight,
  Truck,
} from "lucide-react";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/" },
  { icon: Users, label: "Employees", path: "/employees" },
  { icon: FileCheck, label: "KYC Management", path: "/kyc" },
  { icon: MapPin, label: "Live Tracking", path: "/tracking" },
  { icon: GraduationCap, label: "Training", path: "/training" },
];

const bottomItems = [
  { icon: Settings, label: "Settings", path: "/settings" },
];

export function DashboardSidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  return (
    <aside
      className={`fixed left-0 top-0 h-screen bg-sidebar flex flex-col z-50 transition-[width] duration-300 ease-in-out ${
        collapsed ? "w-20" : "w-64"
      }`}
    >
      {/* Logo */}
      <div className="p-6 flex items-center gap-3 border-b border-sidebar-border overflow-hidden">
        <div className="w-10 h-10 min-w-[2.5rem] bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/30">
          <Truck className="w-5 h-5 min-w-[1.25rem] text-primary-foreground" />
        </div>
        <div className={`transition-opacity duration-200 ${collapsed ? "opacity-0 w-0" : "opacity-100"}`}>
          <h1 className="font-display font-bold text-lg text-sidebar-foreground whitespace-nowrap">
            Speedio<span className="text-accent">Move</span>
          </h1>
          <p className="text-[10px] text-sidebar-foreground/50 uppercase tracking-widest whitespace-nowrap">
            Admin Portal
          </p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1 overflow-hidden">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={`nav-item ${isActive ? "nav-item-active" : ""}`}
            >
              <div className="w-5 h-5 min-w-[1.25rem] flex items-center justify-center">
                <item.icon className="w-5 h-5" />
              </div>
              <span className={`font-medium whitespace-nowrap transition-opacity duration-200 ${collapsed ? "opacity-0 w-0 overflow-hidden" : "opacity-100"}`}>
                {item.label}
              </span>
            </NavLink>
          );
        })}
      </nav>

      {/* Bottom section */}
      <div className="p-4 border-t border-sidebar-border space-y-1 overflow-hidden">
        {bottomItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={`nav-item ${isActive ? "nav-item-active" : ""}`}
            >
              <div className="w-5 h-5 min-w-[1.25rem] flex items-center justify-center">
                <item.icon className="w-5 h-5" />
              </div>
              <span className={`font-medium whitespace-nowrap transition-opacity duration-200 ${collapsed ? "opacity-0 w-0 overflow-hidden" : "opacity-100"}`}>
                {item.label}
              </span>
            </NavLink>
          );
        })}
        <button className="nav-item w-full text-destructive/80 hover:text-destructive hover:bg-destructive/10">
          <div className="w-5 h-5 min-w-[1.25rem] flex items-center justify-center">
            <LogOut className="w-5 h-5" />
          </div>
          <span className={`font-medium whitespace-nowrap transition-opacity duration-200 ${collapsed ? "opacity-0 w-0 overflow-hidden" : "opacity-100"}`}>
            Logout
          </span>
        </button>
      </div>

      {/* Collapse button */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="absolute -right-3 top-20 w-6 h-6 bg-primary rounded-full flex items-center justify-center text-primary-foreground shadow-lg hover:scale-110 transition-transform"
      >
        {collapsed ? (
          <ChevronRight className="w-4 h-4" />
        ) : (
          <ChevronLeft className="w-4 h-4" />
        )}
      </button>
    </aside>
  );
}
