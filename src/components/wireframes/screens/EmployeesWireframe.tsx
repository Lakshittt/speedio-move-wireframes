import { WireframeSidebar } from "../WireframeSidebar";
import { WireframeHeader } from "../WireframeHeader";
import { Search, Filter, ChevronLeft, ChevronRight } from "lucide-react";

export function EmployeesWireframe() {
  return (
    <div className="flex h-full min-h-[400px] bg-gray-50">
      <WireframeSidebar activeItem="employees" />
      
      <div className="flex-1 flex flex-col">
        <WireframeHeader />
        
        <div className="flex-1 p-6 overflow-auto">
          {/* Title & Controls */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="h-8 w-48 bg-gray-300 rounded mb-2" />
              <div className="h-4 w-64 bg-gray-200 rounded" />
            </div>
          </div>

          {/* Search & Filters */}
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg px-4 py-2 flex-1 max-w-md">
              <Search size={16} className="text-gray-400" />
              <div className="h-4 w-32 bg-gray-200 rounded" />
            </div>
            {["Role", "KYC Status", "Status"].map((filter, i) => (
              <div key={i} className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg px-4 py-2">
                <Filter size={14} className="text-gray-400" />
                <div className="h-4 w-16 bg-gray-200 rounded" />
              </div>
            ))}
          </div>

          {/* Table */}
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-7 gap-4 px-4 py-3 bg-gray-50 border-b border-gray-200">
              {["Employee", "Role", "Department", "KYC", "Status", "Location", "Actions"].map((col, i) => (
                <div key={i} className="h-4 bg-gray-300 rounded w-16" />
              ))}
            </div>
            
            {/* Rows */}
            {[1, 2, 3, 4, 5].map((row) => (
              <div key={row} className="grid grid-cols-7 gap-4 px-4 py-3 border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gray-200 rounded-full" />
                  <div className="h-4 w-20 bg-gray-200 rounded" />
                </div>
                <div className="h-4 w-16 bg-gray-200 rounded" />
                <div className="h-4 w-20 bg-gray-200 rounded" />
                <div className="h-5 w-16 bg-green-100 rounded-full" />
                <div className="h-5 w-14 bg-blue-100 rounded-full" />
                <div className="h-4 w-20 bg-gray-200 rounded" />
                <div className="flex gap-1">
                  <div className="w-6 h-6 bg-gray-100 rounded" />
                  <div className="w-6 h-6 bg-gray-100 rounded" />
                  <div className="w-6 h-6 bg-gray-100 rounded" />
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between mt-4">
            <div className="h-4 w-32 bg-gray-200 rounded" />
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center">
                <ChevronLeft size={16} className="text-gray-400" />
              </div>
              {[1, 2, 3].map((p) => (
                <div key={p} className={`w-8 h-8 rounded flex items-center justify-center ${p === 1 ? 'bg-orange-500 text-white' : 'bg-gray-200'}`}>
                  <span className="text-xs">{p}</span>
                </div>
              ))}
              <div className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center">
                <ChevronRight size={16} className="text-gray-400" />
              </div>
            </div>
          </div>

          {/* Annotation */}
          <div className="mt-4 border-t border-dashed border-gray-300 pt-4">
            <p className="text-xs text-gray-400 italic">
              Employees: Searchable table with filters • Sortable columns • Pagination • CRUD actions
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
