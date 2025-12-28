import { Home, MapPin, GraduationCap, User } from "lucide-react";

type NavTab = "home" | "route" | "training" | "profile";

interface MobileBottomNavProps {
  activeTab?: NavTab;
}

const navItems: { id: NavTab; label: string; icon: React.ReactNode }[] = [
  { id: "home", label: "Home", icon: <Home size={20} /> },
  { id: "route", label: "Route", icon: <MapPin size={20} /> },
  { id: "training", label: "Training", icon: <GraduationCap size={20} /> },
  { id: "profile", label: "Profile", icon: <User size={20} /> },
];

export function MobileBottomNav({ activeTab = "home" }: MobileBottomNavProps) {
  return (
    <div className="bg-gray-800 border-t border-gray-700 px-2 py-2">
      <div className="flex items-center justify-around">
        {navItems.map((item) => (
          <div
            key={item.id}
            className={`flex flex-col items-center gap-1 px-4 py-2 rounded-lg transition-colors ${
              activeTab === item.id
                ? "text-orange-500 bg-orange-500/10"
                : "text-gray-400"
            }`}
          >
            {item.icon}
            <span className="text-xs font-medium">{item.label}</span>
          </div>
        ))}
      </div>
      {/* Home indicator */}
      <div className="flex justify-center mt-2">
        <div className="w-32 h-1 bg-gray-600 rounded-full" />
      </div>
    </div>
  );
}
