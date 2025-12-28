import { WireframeSidebar } from "../WireframeSidebar";
import { WireframeHeader } from "../WireframeHeader";
import { CheckCircle, Clock, AlertTriangle, XCircle } from "lucide-react";

export function KYCWireframe() {
  return (
    <div className="flex h-full min-h-[400px] bg-gray-50">
      <WireframeSidebar activeItem="kyc" />
      
      <div className="flex-1 flex flex-col">
        <WireframeHeader />
        
        <div className="flex-1 p-6 overflow-auto">
          {/* Title */}
          <div className="mb-6">
            <div className="h-8 w-48 bg-gray-300 rounded mb-2" />
            <div className="h-4 w-72 bg-gray-200 rounded" />
          </div>

          {/* Status Cards */}
          <div className="grid grid-cols-4 gap-4 mb-8">
            {[
              { icon: CheckCircle, label: "Verified", count: "89", color: "bg-green-500", bg: "bg-green-50" },
              { icon: Clock, label: "Pending", count: "23", color: "bg-yellow-500", bg: "bg-yellow-50" },
              { icon: AlertTriangle, label: "Expiring", count: "12", color: "bg-orange-500", bg: "bg-orange-50" },
              { icon: XCircle, label: "Rejected", count: "5", color: "bg-red-500", bg: "bg-red-50" },
            ].map((stat, i) => (
              <div key={i} className={`${stat.bg} rounded-xl p-4 border border-gray-200`}>
                <div className={`w-10 h-10 ${stat.color} rounded-lg flex items-center justify-center mb-3`}>
                  <stat.icon size={20} className="text-white" />
                </div>
                <div className="h-3 w-16 bg-gray-300 rounded mb-2" />
                <div className="h-8 w-10 bg-gray-400 rounded" />
              </div>
            ))}
          </div>

          {/* Table */}
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <div className="grid grid-cols-6 gap-4 px-4 py-3 bg-gray-50 border-b border-gray-200">
              {["Employee", "Document Type", "Status", "Expiry Date", "Last Updated", "Actions"].map((col, i) => (
                <div key={i} className="h-4 bg-gray-300 rounded w-20" />
              ))}
            </div>
            
            {[
              { status: "Verified", statusColor: "bg-green-100 text-green-700" },
              { status: "Pending", statusColor: "bg-yellow-100 text-yellow-700" },
              { status: "Expiring", statusColor: "bg-orange-100 text-orange-700" },
              { status: "Verified", statusColor: "bg-green-100 text-green-700" },
            ].map((row, i) => (
              <div key={i} className="grid grid-cols-6 gap-4 px-4 py-3 border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gray-200 rounded-full" />
                  <div className="h-4 w-20 bg-gray-200 rounded" />
                </div>
                <div className="h-4 w-24 bg-gray-200 rounded" />
                <div className={`h-5 w-16 ${row.statusColor} rounded-full text-xs flex items-center justify-center`}>
                  {row.status}
                </div>
                <div className="h-4 w-20 bg-gray-200 rounded" />
                <div className="h-4 w-24 bg-gray-200 rounded" />
                <div className="flex gap-1">
                  <div className="w-16 h-6 bg-blue-100 rounded text-xs flex items-center justify-center text-blue-600">View</div>
                </div>
              </div>
            ))}
          </div>

          {/* Annotation */}
          <div className="mt-6 border-t border-dashed border-gray-300 pt-4">
            <p className="text-xs text-gray-400 italic">
              KYC: Status overview cards + Compliance table • Document verification workflow • Expiry alerts
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}