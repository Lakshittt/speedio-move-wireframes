import { LayoutDashboard, Users, CheckCircle, MapPin, GraduationCap, Settings, LogOut } from "lucide-react";

interface WireframeSidebarProps {
  activeItem?: string;
}

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", id: "dashboard" },
  { icon: Users, label: "Employees", id: "employees" },
  { icon: CheckCircle, label: "KYC", id: "kyc" },
  { icon: MapPin, label: "Tracking", id: "tracking" },
  { icon: GraduationCap, label: "Training", id: "training" },
];

export function WireframeSidebar({ activeItem = "dashboard" }: WireframeSidebarProps) {
  return (
    <div className="w-48 bg-gray-800 text-gray-300 flex flex-col h-full">
      {/* Logo */}
      <div className="p-4 border-b border-gray-700">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-orange-500 rounded-lg" />
          <span className="font-bold text-white text-sm">Speedio Move</span>
        </div>
      </div>

      {/* Nav Items */}
      <nav className="flex-1 py-4">
        {navItems.map((item) => (
          <div
            key={item.id}
            className={`flex items-center gap-3 px-4 py-2.5 text-sm ${
              activeItem === item.id
                ? "bg-gray-700 text-white border-l-2 border-orange-500"
                : "text-gray-400"
            }`}
          >
            <item.icon size={16} />
            <span>{item.label}</span>
          </div>
        ))}
      </nav>

      {/* Bottom Items */}
      <div className="border-t border-gray-700 py-4">
        <div className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-400">
          <Settings size={16} />
          <span>Settings</span>
        </div>
        <div className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-400">
          <LogOut size={16} />
          <span>Logout</span>
        </div>
      </div>
    </div>
  );
}