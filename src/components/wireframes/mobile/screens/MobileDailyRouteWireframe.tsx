import { MapPin, Navigation, AlertCircle } from "lucide-react";
import { MobileStatusBar } from "../components/MobileStatusBar";
import { MobileHeader } from "../components/MobileHeader";
import { MobileBottomNav } from "../components/MobileBottomNav";

export function MobileDailyRouteWireframe() {
  return (
    <div className="h-full min-h-[667px] bg-gray-900 flex flex-col">
      <MobileStatusBar />
      <MobileHeader title="Daily Route" />
      
      <div className="flex-1 overflow-auto">
        {/* Location Warning Banner */}
        <div className="bg-orange-500/10 border-b border-orange-500/30 px-4 py-3 flex items-center gap-3">
          <AlertCircle size={18} className="text-orange-500 flex-shrink-0" />
          <p className="text-orange-500 text-xs font-medium">
            Keep your location ON during deliveries
          </p>
          <Navigation size={16} className="text-orange-500 ml-auto" />
        </div>

        {/* Empty State Placeholder */}
        <div className="flex-1 flex flex-col items-center justify-center px-6 py-16">
          <div className="w-20 h-20 rounded-full bg-gray-800 flex items-center justify-center mb-4">
            <MapPin size={36} className="text-gray-600" />
          </div>
          <p className="text-gray-400 text-sm text-center">
            Your assigned routes will appear here
          </p>
        </div>
      </div>

      <MobileBottomNav activeTab="route" />
    </div>
  );
}
