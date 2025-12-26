import { WireframeSidebar } from "../WireframeSidebar";
import { WireframeHeader } from "../WireframeHeader";
import { MapPin, Clock, Navigation } from "lucide-react";

export function TrackingWireframe() {
  return (
    <div className="flex h-[500px] bg-gray-50">
      <WireframeSidebar activeItem="tracking" />
      
      <div className="flex-1 flex flex-col">
        <WireframeHeader />
        
        <div className="flex-1 p-6 overflow-auto">
          {/* Title */}
          <div className="mb-6">
            <div className="h-8 w-48 bg-gray-300 rounded mb-2" />
            <div className="h-4 w-72 bg-gray-200 rounded" />
          </div>

          <div className="grid grid-cols-3 gap-6">
            {/* Map Placeholder */}
            <div className="col-span-2 bg-gray-200 rounded-xl h-80 relative overflow-hidden">
              {/* Grid pattern for map */}
              <div className="absolute inset-0 opacity-30">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="absolute h-px bg-gray-400" style={{ top: `${(i + 1) * 12.5}%`, left: 0, right: 0 }} />
                ))}
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="absolute w-px bg-gray-400" style={{ left: `${(i + 1) * 12.5}%`, top: 0, bottom: 0 }} />
                ))}
              </div>
              
              {/* Map pins */}
              <div className="absolute top-1/4 left-1/3">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                  <MapPin size={16} className="text-white" />
                </div>
              </div>
              <div className="absolute top-1/2 left-1/2">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
                  <MapPin size={16} className="text-white" />
                </div>
              </div>
              <div className="absolute top-2/3 left-1/4">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center shadow-lg">
                  <MapPin size={16} className="text-white" />
                </div>
              </div>
              
              {/* Map label */}
              <div className="absolute bottom-4 left-4 bg-white/80 px-3 py-1 rounded text-xs text-gray-600">
                Interactive Map View
              </div>
            </div>

            {/* Active Employees List */}
            <div className="bg-white rounded-xl border border-gray-200 p-4">
              <div className="flex items-center justify-between mb-4">
                <div className="h-5 w-32 bg-gray-300 rounded" />
                <div className="flex items-center gap-1 text-green-500">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-xs">Live</span>
                </div>
              </div>

              <div className="space-y-3">
                {[
                  { status: "Moving", color: "text-green-500" },
                  { status: "Idle", color: "text-yellow-500" },
                  { status: "Moving", color: "text-green-500" },
                  { status: "Offline", color: "text-gray-400" },
                  { status: "Moving", color: "text-green-500" },
                ].map((emp, i) => (
                  <div key={i} className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg">
                    <div className="w-8 h-8 bg-gray-200 rounded-full" />
                    <div className="flex-1">
                      <div className="h-4 w-24 bg-gray-300 rounded mb-1" />
                      <div className="flex items-center gap-1">
                        <Navigation size={10} className={emp.color} />
                        <span className={`text-xs ${emp.color}`}>{emp.status}</span>
                      </div>
                    </div>
                    <Clock size={14} className="text-gray-400" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Annotation */}
          <div className="mt-6 border-t border-dashed border-gray-300 pt-4">
            <p className="text-xs text-gray-400 italic">
              Tracking: Real-time map view + Active employees list • Status indicators (Moving/Idle/Offline) • Live updates
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
