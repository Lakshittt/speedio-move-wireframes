import { Search, Bell, User } from "lucide-react";

export function WireframeHeader() {
  return (
    <div className="h-14 bg-white border-b border-gray-200 flex items-center justify-between px-6">
      {/* Search */}
      <div className="flex items-center gap-2 bg-gray-100 rounded-lg px-3 py-2 w-64">
        <Search size={16} className="text-gray-400" />
        <div className="h-4 w-32 bg-gray-300 rounded" />
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        <div className="relative">
          <Bell size={20} className="text-gray-500" />
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
            <span className="text-white text-xs">3</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
            <User size={16} className="text-gray-500" />
          </div>
          <div className="h-4 w-20 bg-gray-200 rounded" />
        </div>
      </div>
    </div>
  );
}