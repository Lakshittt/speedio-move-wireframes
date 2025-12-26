import { WireframeSidebar } from "../WireframeSidebar";
import { WireframeHeader } from "../WireframeHeader";
import { GraduationCap, BookOpen, Award, Clock } from "lucide-react";

export function TrainingWireframe() {
  return (
    <div className="flex h-[500px] bg-gray-50">
      <WireframeSidebar activeItem="training" />
      
      <div className="flex-1 flex flex-col">
        <WireframeHeader />
        
        <div className="flex-1 p-6 overflow-auto">
          {/* Title */}
          <div className="mb-6">
            <div className="h-8 w-48 bg-gray-300 rounded mb-2" />
            <div className="h-4 w-72 bg-gray-200 rounded" />
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-4 gap-4 mb-8">
            {[
              { icon: GraduationCap, label: "Total Courses", value: "12", color: "bg-blue-500" },
              { icon: BookOpen, label: "In Progress", value: "45", color: "bg-yellow-500" },
              { icon: Award, label: "Completed", value: "89", color: "bg-green-500" },
              { icon: Clock, label: "Avg. Time", value: "4.2h", color: "bg-purple-500" },
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

          {/* Training Table */}
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <div className="grid grid-cols-5 gap-4 px-4 py-3 bg-gray-50 border-b border-gray-200">
              {["Employee", "Course", "Progress", "Status", "Due Date"].map((col, i) => (
                <div key={i} className="h-4 bg-gray-300 rounded w-20" />
              ))}
            </div>
            
            {[
              { progress: 100, status: "Completed", statusColor: "bg-green-100 text-green-700" },
              { progress: 75, status: "In Progress", statusColor: "bg-yellow-100 text-yellow-700" },
              { progress: 45, status: "In Progress", statusColor: "bg-yellow-100 text-yellow-700" },
              { progress: 0, status: "Not Started", statusColor: "bg-gray-100 text-gray-600" },
            ].map((row, i) => (
              <div key={i} className="grid grid-cols-5 gap-4 px-4 py-3 border-b border-gray-100 items-center">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gray-200 rounded-full" />
                  <div className="h-4 w-20 bg-gray-200 rounded" />
                </div>
                <div className="h-4 w-28 bg-gray-200 rounded" />
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full ${row.progress === 100 ? 'bg-green-500' : row.progress > 0 ? 'bg-yellow-500' : 'bg-gray-300'}`}
                      style={{ width: `${row.progress}%` }}
                    />
                  </div>
                  <span className="text-xs text-gray-500 w-8">{row.progress}%</span>
                </div>
                <div className={`h-5 w-20 ${row.statusColor} rounded-full text-xs flex items-center justify-center`}>
                  {row.status}
                </div>
                <div className="h-4 w-20 bg-gray-200 rounded" />
              </div>
            ))}
          </div>

          {/* Annotation */}
          <div className="mt-6 border-t border-dashed border-gray-300 pt-4">
            <p className="text-xs text-gray-400 italic">
              Training: Course stats + Progress tracking table • Visual progress bars • Completion status
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
