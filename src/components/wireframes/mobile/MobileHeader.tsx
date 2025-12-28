import { ArrowLeft, Bell } from "lucide-react";

interface MobileHeaderProps {
  title?: string;
  showBack?: boolean;
  showNotification?: boolean;
}

export function MobileHeader({ title = "Speedio Move", showBack = false, showNotification = true }: MobileHeaderProps) {
  return (
    <div className="bg-gray-800 px-4 py-3 flex items-center justify-between border-b border-gray-700">
      <div className="flex items-center gap-3">
        {showBack ? (
          <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center">
            <ArrowLeft size={16} className="text-gray-300" />
          </div>
        ) : (
          <div className="w-8 h-8 bg-orange-500 rounded-lg" />
        )}
        <span className="font-semibold text-white">{title}</span>
      </div>
      {showNotification && (
        <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center relative">
          <Bell size={16} className="text-gray-300" />
          <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-orange-500 rounded-full" />
        </div>
      )}
    </div>
  );
}
