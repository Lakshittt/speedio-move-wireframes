import { 
  AlertTriangle, 
  Car, 
  Edit3, 
  Lock, 
  LogOut, 
  ChevronRight,
  CheckCircle2,
  Camera
} from "lucide-react";
import { MobileStatusBar } from "../MobileStatusBar";
import { MobileHeader } from "../MobileHeader";
import { MobileBottomNav } from "../MobileBottomNav";

export function MobileProfileWireframe() {
  return (
    <div className="h-full min-h-[667px] bg-gray-900 flex flex-col">
      <MobileStatusBar />
      <MobileHeader title="Profile" showNotification={false} />
      
      <div className="flex-1 overflow-auto p-4 space-y-4">
        {/* Profile Header */}
        <div className="flex items-center gap-4 bg-gray-800 rounded-2xl p-4">
          <div className="relative">
            <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center">
              <span className="text-gray-400 text-xl font-bold">JD</span>
            </div>
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
              <Camera size={12} className="text-white" />
            </div>
          </div>
          <div className="flex-1">
            <h2 className="text-white font-semibold text-lg">John Driver</h2>
            <p className="text-gray-400 text-sm">+91 98765 43210</p>
            <p className="text-gray-500 text-xs">Employee ID: EMP-2024-0123</p>
          </div>
        </div>

        {/* KYC Status - PENDING (RED) */}
        <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-red-500/20 rounded-full flex items-center justify-center">
              <AlertTriangle size={20} className="text-red-500" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <h3 className="text-white font-semibold">KYC Verification</h3>
                <span className="px-2 py-0.5 bg-red-500 text-white text-xs rounded-full">PENDING</span>
              </div>
              <p className="text-gray-400 text-xs mt-1">Complete your KYC to start deliveries</p>
            </div>
            <ChevronRight size={20} className="text-gray-400" />
          </div>
          
          {/* KYC Progress */}
          <div className="mt-3 space-y-2">
            <div className="flex items-center gap-2 text-xs">
              <CheckCircle2 size={14} className="text-green-500" />
              <span className="text-gray-400">Aadhaar Card</span>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <div className="w-3.5 h-3.5 rounded-full border-2 border-gray-600" />
              <span className="text-gray-500">PAN Card</span>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <div className="w-3.5 h-3.5 rounded-full border-2 border-gray-600" />
              <span className="text-gray-500">Driving License</span>
            </div>
          </div>
        </div>

        {/* Vehicle Data */}
        <div className="bg-gray-800 border border-gray-700 rounded-xl p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-orange-500/20 rounded-full flex items-center justify-center">
              <Car size={20} className="text-orange-500" />
            </div>
            <div className="flex-1">
              <h3 className="text-white font-semibold">Vehicle Data</h3>
              <p className="text-gray-400 text-xs mt-1">Add your vehicle details</p>
            </div>
            <ChevronRight size={20} className="text-gray-400" />
          </div>
          
          {/* Vehicle Fields */}
          <div className="mt-3 space-y-2 text-xs">
            <div className="flex justify-between py-2 border-t border-gray-700">
              <span className="text-gray-500">License Number</span>
              <span className="text-gray-400">MH-12-AB-1234</span>
            </div>
            <div className="flex justify-between py-2 border-t border-gray-700">
              <span className="text-gray-500">Chassis Number</span>
              <span className="text-gray-400">CH123456789</span>
            </div>
            <div className="flex justify-between py-2 border-t border-gray-700">
              <span className="text-gray-500">Vehicle Type</span>
              <span className="text-gray-400">Two-Wheeler</span>
            </div>
          </div>
        </div>

        {/* Menu Items */}
        <div className="space-y-2">
          {/* Edit Details */}
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-4 flex items-center gap-3">
            <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center">
              <Edit3 size={18} className="text-gray-400" />
            </div>
            <div className="flex-1">
              <h3 className="text-white font-medium">Edit Details</h3>
              <p className="text-gray-500 text-xs">Update your personal information</p>
            </div>
            <ChevronRight size={20} className="text-gray-400" />
          </div>

          {/* Change Password */}
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-4 flex items-center gap-3">
            <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center">
              <Lock size={18} className="text-gray-400" />
            </div>
            <div className="flex-1">
              <h3 className="text-white font-medium">Change Password</h3>
              <p className="text-gray-500 text-xs">Update your login password</p>
            </div>
            <ChevronRight size={20} className="text-gray-400" />
          </div>

          {/* Logout */}
          <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 flex items-center gap-3">
            <div className="w-10 h-10 bg-red-500/20 rounded-full flex items-center justify-center">
              <LogOut size={18} className="text-red-500" />
            </div>
            <div className="flex-1">
              <h3 className="text-red-500 font-medium">Logout</h3>
              <p className="text-gray-500 text-xs">Sign out of your account</p>
            </div>
          </div>
        </div>
      </div>

      <MobileBottomNav activeTab="profile" />
    </div>
  );
}
