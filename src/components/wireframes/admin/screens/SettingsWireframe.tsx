import { WireframeSidebar } from "../WireframeSidebar";
import { WireframeHeader } from "../WireframeHeader";
import { User, Bell, Shield, Palette, Globe, ExternalLink } from "lucide-react";

export function SettingsWireframe() {
  return (
    <div className="flex h-full min-h-[400px] bg-gray-50">
      <WireframeSidebar activeItem="settings" />
      
      <div className="flex-1 flex flex-col">
        <WireframeHeader />
        
        <div className="flex-1 p-6 overflow-auto">
          {/* Title */}
          <div className="mb-6">
            <div className="h-8 w-32 bg-gray-300 rounded mb-2" />
            <div className="h-4 w-64 bg-gray-200 rounded" />
          </div>

          {/* Settings Cards */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            {[
              { icon: User, title: "Account Settings", desc: "Manage your account details" },
              { icon: Bell, title: "Notifications", desc: "Configure alert preferences" },
              { icon: Shield, title: "Security", desc: "Password and authentication" },
              { icon: Palette, title: "Appearance", desc: "Theme and display options" },
              { icon: Globe, title: "Language", desc: "Regional preferences" },
            ].map((setting, i) => (
              <div key={i} className="bg-white rounded-xl p-4 border border-gray-200 flex items-center justify-between hover:border-orange-300 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                    <setting.icon size={20} className="text-gray-500" />
                  </div>
                  <div>
                    <div className="h-4 w-28 bg-gray-300 rounded mb-1" />
                    <div className="h-3 w-36 bg-gray-200 rounded" />
                  </div>
                </div>
                <div className="w-16 h-7 bg-gray-100 rounded text-xs flex items-center justify-center text-gray-500">
                  Configure
                </div>
              </div>
            ))}
          </div>

          {/* HRMIA Link */}
          <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl p-6 border border-orange-200">
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 bg-orange-500 rounded-lg" />
                  <div className="h-5 w-40 bg-orange-300 rounded" />
                </div>
                <div className="h-4 w-72 bg-orange-200 rounded" />
              </div>
              <div className="flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-lg">
                <span className="text-sm">Access HRMIA</span>
                <ExternalLink size={14} />
              </div>
            </div>
          </div>

          {/* Annotation */}
          <div className="mt-6 border-t border-dashed border-gray-300 pt-4">
            <p className="text-xs text-gray-400 italic">
              Settings: 5 configuration sections + External HRMIA system link • Organized card layout
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}