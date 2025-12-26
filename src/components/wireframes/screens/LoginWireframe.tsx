import { Lock } from "lucide-react";

export function LoginWireframe() {
  return (
    <div className="min-h-[400px] bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center p-8">
      <div className="bg-white/10 backdrop-blur rounded-xl p-8 w-full max-w-sm border border-gray-600">
        {/* Logo */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="w-10 h-10 bg-orange-500 rounded-lg" />
          <span className="font-bold text-white text-xl">Speedio Move</span>
        </div>

        {/* Title */}
        <div className="text-center mb-6">
          <div className="h-6 w-32 bg-gray-500 rounded mx-auto mb-2" />
          <div className="h-4 w-48 bg-gray-600 rounded mx-auto" />
        </div>

        {/* Password Field */}
        <div className="mb-4">
          <div className="h-4 w-20 bg-gray-500 rounded mb-2" />
          <div className="flex items-center gap-2 bg-gray-700 rounded-lg px-4 py-3">
            <Lock size={16} className="text-gray-400" />
            <div className="h-4 w-full bg-gray-600 rounded" />
          </div>
        </div>

        {/* Button */}
        <div className="h-12 bg-orange-500 rounded-lg flex items-center justify-center">
          <div className="h-4 w-24 bg-orange-400 rounded" />
        </div>

        {/* Hint */}
        <div className="mt-4 text-center">
          <div className="h-3 w-40 bg-gray-600 rounded mx-auto" />
        </div>

        {/* Annotation */}
        <div className="mt-6 border-t border-gray-600 pt-4">
          <p className="text-xs text-gray-400 text-center italic">
            Password: "speedio2024" • Session-based auth
          </p>
        </div>
      </div>
    </div>
  );
}
