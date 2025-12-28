import { Signal, Wifi, Battery } from "lucide-react";

export function MobileStatusBar() {
  return (
    <div className="bg-gray-900 px-4 py-1 flex items-center justify-between text-white text-xs">
      <span className="font-medium">9:41</span>
      <div className="flex items-center gap-1">
        <Signal size={12} />
        <Wifi size={12} />
        <Battery size={12} />
      </div>
    </div>
  );
}
