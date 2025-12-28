import { WireframeSidebar } from "../WireframeSidebar";
import { WireframeHeader } from "../WireframeHeader";
import { Users, CheckCircle, Activity, GraduationCap, ChevronRight } from "lucide-react";

export function DashboardWireframe() {
  return (
    <div className="flex h-full min-h-[400px] bg-gray-50">
      <WireframeSidebar activeItem="dashboard" />
      
      <div className="flex-1 flex flex-col">
        <WireframeHeader />
        
        <div className="flex-1 p-6 overflow-auto">
          {/* Title */}
          <div className="mb-6">
            <div className="h-8 w-48 bg-gray-300 rounded mb-2" />
            <div className="h-4 w-72 bg-gray-200 rounded" />
          </div>

          {/* Stat Cards */}
          <div className="grid grid-cols-4 gap-4 mb-8">
            {[
              { icon: Users, label: "Total Employees", value: "156", color: "bg-blue-500" },
              { icon: CheckCircle, label: "KYC Verified", value: "89%", color: "bg-green-500" },
              { icon: Activity, label: "Active Now", value: "124", color: "bg-purple-500" },
              { icon: GraduationCap, label: "Training Done", value: "72%", color: "bg-orange-500" },
            ].map((stat, i) => (
              <div key={i} className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
                <div className={`w-10 h-10 ${stat.color} rounded-lg flex items-center justify-center mb-3`}>
                  <stat.icon size={20} className="text-white" />
                </div>
                <div className="h-3 w-20 bg-gray-200 rounded mb-2" />
                <div className="h-6 w-12 bg-gray-300 rounded" />
              </div>
            ))}
          </div>

          {/* Quick Access */}
          <div className="mb-4">
            <div className="h-6 w-32 bg-gray-300 rounded mb-4" />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {["Employee Management", "KYC Verification", "Live Tracking", "Training Portal"].map((title, i) => (
              <div key={i} className="bg-white rounded-xl p-4 border border-gray-200 flex items-center justify-between">
                <div>
                  <div className="h-4 w-32 bg-gray-300 rounded mb-2" />
                  <div className="h-3 w-48 bg-gray-200 rounded" />
                </div>
                <ChevronRight className="text-gray-400" />
              </div>
            ))}
          </div>

          {/* Annotation */}
          <div className="mt-6 border-t border-dashed border-gray-300 pt-4">
            <p className="text-xs text-gray-400 italic">
              Dashboard: 4 stat cards + 4 quick access links • Real-time data from employee database
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}