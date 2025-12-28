import {
  AlertTriangle,
  GraduationCap,
  Megaphone,
  ChevronRight,
} from "lucide-react";
import { MobileStatusBar } from "../components/MobileStatusBar";
import { MobileHeader } from "../components/MobileHeader";
import { MobileBottomNav } from "../components/MobileBottomNav";

export function MobileHomeWireframe() {
  return (
    <div className="h-full min-h-[667px] bg-gray-900 flex flex-col">
      <MobileStatusBar />
      <MobileHeader title="Home" />

      <div className="flex-1 overflow-auto p-4 space-y-4">
        {/* Welcome */}
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-4">
          <p className="text-white/80 text-sm">Good Morning,</p>
          <h2 className="text-white text-xl font-bold">John Driver</h2>
          <div className="mt-2 flex items-center gap-2"></div>
        </div>

        {/* Banner: Complete KYC */}
        <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0">
              <AlertTriangle size={20} className="text-red-500" />
            </div>
            <div className="flex-1">
              <h3 className="text-white font-semibold text-sm">
                Complete Your KYC
              </h3>
              <p className="text-gray-400 text-xs mt-1">
                Verify your identity to start earning
              </p>
            </div>
            <ChevronRight size={20} className="text-gray-400" />
          </div>
          <div className="mt-3 h-1.5 bg-gray-700 rounded-full overflow-hidden">
            <div className="w-1/4 h-full bg-red-500 rounded-full" />
          </div>
          <p className="text-gray-500 text-xs mt-1">25% completed</p>
        </div>

        {/* Banner: Complete Training */}
        <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-yellow-500/20 rounded-full flex items-center justify-center flex-shrink-0">
              <GraduationCap size={20} className="text-yellow-500" />
            </div>
            <div className="flex-1">
              <h3 className="text-white font-semibold text-sm">
                Complete Training
              </h3>
              <p className="text-gray-400 text-xs mt-1">2 modules remaining</p>
            </div>
            <ChevronRight size={20} className="text-gray-400" />
          </div>
          <div className="mt-3 h-1.5 bg-gray-700 rounded-full overflow-hidden">
            <div className="w-3/5 h-full bg-yellow-500 rounded-full" />
          </div>
          <p className="text-gray-500 text-xs mt-1">60% completed</p>
        </div>

        {/* Promotional Banner */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-xl p-4 flex items-center gap-4">
          <div className="w-16 h-16 bg-gray-600 rounded-lg flex items-center justify-center">
            <div className="w-10 h-10 bg-gray-500 rounded" />
          </div>
          <div className="flex-1">
            <p className="text-gray-400 text-xs">Sponsored</p>
            <h3 className="text-white font-medium text-sm">
              Get 50% off on fuel
            </h3>
            <p className="text-orange-500 text-xs">Learn more →</p>
          </div>
        </div>
      </div>

      <MobileBottomNav activeTab="home" />
    </div>
  );
}
