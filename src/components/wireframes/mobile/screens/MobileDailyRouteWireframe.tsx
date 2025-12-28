import { MapPin, Navigation, Clock, AlertCircle, CheckCircle2, Circle } from "lucide-react";
import { MobileStatusBar } from "../MobileStatusBar";
import { MobileHeader } from "../MobileHeader";
import { MobileBottomNav } from "../MobileBottomNav";

const routeStops = [
  { id: 1, address: "123 MG Road, Sector 5", time: "9:00 AM", status: "completed" },
  { id: 2, address: "456 Gandhi Nagar, Block B", time: "10:30 AM", status: "completed" },
  { id: 3, address: "789 Nehru Place, Floor 2", time: "12:00 PM", status: "current" },
  { id: 4, address: "321 Patel Street, Shop 12", time: "2:00 PM", status: "pending" },
  { id: 5, address: "654 Sharma Colony, House 8", time: "4:00 PM", status: "pending" },
];

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

        {/* Today's Date */}
        <div className="px-4 py-3 border-b border-gray-800">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-xs">Today's Route</p>
              <p className="text-white font-semibold">Monday, 28 Dec 2025</p>
            </div>
            <div className="px-3 py-1 bg-orange-500/20 rounded-full">
              <span className="text-orange-500 text-sm font-medium">5 stops</span>
            </div>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="h-32 bg-gray-800 relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <MapPin size={32} className="text-gray-600 mx-auto" />
              <p className="text-gray-500 text-xs mt-2">Map View</p>
            </div>
          </div>
          {/* Route line indicator */}
          <div className="absolute bottom-4 left-4 right-4 h-1 bg-gray-700 rounded-full">
            <div className="w-2/5 h-full bg-orange-500 rounded-full" />
          </div>
        </div>

        {/* Route List */}
        <div className="p-4 space-y-3">
          <p className="text-gray-400 text-xs font-medium uppercase tracking-wide">Your Stops</p>
          
          {routeStops.map((stop, index) => (
            <div
              key={stop.id}
              className={`relative pl-8 pb-4 ${
                index < routeStops.length - 1 ? "border-l-2 border-gray-700 ml-2" : "ml-2"
              }`}
            >
              {/* Status Icon */}
              <div className="absolute -left-2 top-0">
                {stop.status === "completed" ? (
                  <CheckCircle2 size={18} className="text-green-500 bg-gray-900" />
                ) : stop.status === "current" ? (
                  <div className="w-4 h-4 bg-orange-500 rounded-full border-2 border-gray-900 animate-pulse" />
                ) : (
                  <Circle size={18} className="text-gray-600 bg-gray-900" />
                )}
              </div>
              
              {/* Stop Card */}
              <div
                className={`rounded-xl p-3 ${
                  stop.status === "current"
                    ? "bg-orange-500/10 border border-orange-500/30"
                    : "bg-gray-800 border border-gray-700"
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <p className={`font-medium text-sm ${
                      stop.status === "completed" ? "text-gray-500 line-through" : "text-white"
                    }`}>
                      Stop {stop.id}
                    </p>
                    <p className="text-gray-400 text-xs mt-1">{stop.address}</p>
                  </div>
                  <div className="flex items-center gap-1 text-gray-400">
                    <Clock size={12} />
                    <span className="text-xs">{stop.time}</span>
                  </div>
                </div>
                {stop.status === "current" && (
                  <div className="mt-2 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                    <span className="text-white text-xs font-medium">Start Navigation</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <MobileBottomNav activeTab="route" />
    </div>
  );
}
