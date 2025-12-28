import { Play, CheckCircle2, Lock, Clock } from "lucide-react";
import { MobileStatusBar } from "../components/MobileStatusBar";
import { MobileHeader } from "../components/MobileHeader";
import { MobileBottomNav } from "../components/MobileBottomNav";

const trainingModules = [
  { id: 1, title: "Safety Guidelines", duration: "15 min", progress: 100, status: "completed" },
  { id: 2, title: "Delivery Best Practices", duration: "20 min", progress: 100, status: "completed" },
  { id: 3, title: "Customer Communication", duration: "12 min", progress: 45, status: "in_progress" },
  { id: 4, title: "Vehicle Maintenance", duration: "18 min", progress: 0, status: "locked" },
  { id: 5, title: "Emergency Procedures", duration: "10 min", progress: 0, status: "locked" },
];

export function MobileTrainingWireframe() {
  return (
    <div className="h-full min-h-[667px] bg-gray-900 flex flex-col">
      <MobileStatusBar />
      <MobileHeader title="Training" />
      
      <div className="flex-1 overflow-auto p-4 space-y-4">
        {/* Overall Progress */}
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-4">
          <div className="flex items-center justify-between mb-3">
            <div>
              <p className="text-white/80 text-sm">Your Progress</p>
              <p className="text-white text-2xl font-bold">60%</p>
            </div>
            <div className="w-16 h-16 rounded-full border-4 border-white/30 flex items-center justify-center">
              <span className="text-white font-bold">3/5</span>
            </div>
          </div>
          <div className="h-2 bg-white/20 rounded-full overflow-hidden">
            <div className="w-3/5 h-full bg-white rounded-full" />
          </div>
          <p className="text-white/80 text-xs mt-2">Complete all modules to unlock deliveries</p>
        </div>

        {/* Training Modules */}
        <div className="space-y-3">
          <p className="text-gray-400 text-xs font-medium uppercase tracking-wide">Modules</p>
          
          {trainingModules.map((module) => (
            <div
              key={module.id}
              className={`rounded-xl p-4 ${
                module.status === "locked"
                  ? "bg-gray-800/50 border border-gray-700/50"
                  : "bg-gray-800 border border-gray-700"
              }`}
            >
              <div className="flex items-start gap-3">
                {/* Thumbnail */}
                <div className={`w-16 h-12 rounded-lg flex items-center justify-center ${
                  module.status === "locked" ? "bg-gray-700/50" : "bg-gray-700"
                }`}>
                  {module.status === "completed" ? (
                    <CheckCircle2 size={24} className="text-green-500" />
                  ) : module.status === "locked" ? (
                    <Lock size={20} className="text-gray-500" />
                  ) : (
                    <Play size={20} className="text-orange-500" />
                  )}
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <h3 className={`font-medium text-sm ${
                    module.status === "locked" ? "text-gray-500" : "text-white"
                  }`}>
                    {module.title}
                  </h3>
                  <div className="flex items-center gap-2 mt-1">
                    <Clock size={12} className="text-gray-500" />
                    <span className="text-gray-500 text-xs">{module.duration}</span>
                  </div>
                  
                  {/* Progress Bar */}
                  {module.status !== "locked" && (
                    <div className="mt-2">
                      <div className="h-1.5 bg-gray-700 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full ${
                            module.status === "completed" ? "bg-green-500" : "bg-orange-500"
                          }`}
                          style={{ width: `${module.progress}%` }}
                        />
                      </div>
                    </div>
                  )}
                </div>

                {/* Action */}
                {module.status === "in_progress" && (
                  <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                    <Play size={16} className="text-white ml-0.5" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <MobileBottomNav activeTab="training" />
    </div>
  );
}
