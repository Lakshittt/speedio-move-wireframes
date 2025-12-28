import { Lock, Mail, Eye } from "lucide-react";
import { MobileStatusBar } from "../MobileStatusBar";

export function MobileLoginWireframe() {
  return (
    <div className="h-full min-h-[667px] bg-gradient-to-br from-gray-900 to-gray-800 flex flex-col">
      <MobileStatusBar />
      
      <div className="flex-1 flex flex-col items-center justify-center p-6">
        {/* Logo */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 bg-orange-500 rounded-xl" />
          <span className="font-bold text-white text-2xl">Speedio Move</span>
        </div>

        {/* Welcome Text */}
        <div className="text-center mb-8">
          <h1 className="text-xl font-bold text-white mb-2">Welcome Back!</h1>
          <p className="text-gray-400 text-sm">Sign in to continue to your account</p>
        </div>

        {/* Form */}
        <div className="w-full max-w-sm space-y-4">
          {/* Email/Phone Field */}
          <div>
            <label className="text-gray-400 text-sm mb-2 block">Email or Phone</label>
            <div className="flex items-center gap-3 bg-gray-700/50 rounded-xl px-4 py-3 border border-gray-600">
              <Mail size={18} className="text-gray-400" />
              <div className="h-4 w-full bg-gray-600 rounded" />
            </div>
          </div>

          {/* Password Field */}
          <div>
            <label className="text-gray-400 text-sm mb-2 block">Password</label>
            <div className="flex items-center gap-3 bg-gray-700/50 rounded-xl px-4 py-3 border border-gray-600">
              <Lock size={18} className="text-gray-400" />
              <div className="h-4 flex-1 bg-gray-600 rounded" />
              <Eye size={18} className="text-gray-400" />
            </div>
          </div>

          {/* Forgot Password */}
          <div className="text-right">
            <span className="text-orange-500 text-sm">Forgot Password?</span>
          </div>

          {/* Login Button */}
          <div className="h-12 bg-orange-500 rounded-xl flex items-center justify-center mt-6">
            <span className="text-white font-semibold">Sign In</span>
          </div>

          {/* Sign Up Link */}
          <div className="text-center mt-4">
            <span className="text-gray-400 text-sm">Don't have an account? </span>
            <span className="text-orange-500 text-sm font-medium">Sign Up</span>
          </div>
        </div>
      </div>

      {/* Annotation */}
      <div className="px-6 pb-6">
        <div className="border-t border-gray-700 pt-4">
          <p className="text-xs text-gray-500 text-center italic">
            Employee login • Phone/Email + Password authentication
          </p>
        </div>
      </div>
    </div>
  );
}
