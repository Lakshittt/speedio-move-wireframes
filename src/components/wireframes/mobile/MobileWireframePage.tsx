import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { MobilePhoneFrame } from "./components/MobilePhoneFrame";
import { MobileLoginWireframe } from "./screens/MobileLoginWireframe";
import { MobileHomeWireframe } from "./screens/MobileHomeWireframe";
import { MobileDailyRouteWireframe } from "./screens/MobileDailyRouteWireframe";
import { MobileTrainingWireframe } from "./screens/MobileTrainingWireframe";
import { MobileProfileWireframe } from "./screens/MobileProfileWireframe";

type MobileScreen = "login" | "home" | "route" | "training" | "profile";

const mobileScreens: { id: MobileScreen; title: string; description: string }[] = [
  { id: "login", title: "Login / Sign Up", description: "Employee authentication with phone/email and password" },
  { id: "home", title: "Home", description: "Dashboard with KYC, training, and promotional banners" },
  { id: "route", title: "Daily Route", description: "Today's delivery stops with navigation and location tracking" },
  { id: "training", title: "Training", description: "Video courses with progress tracking" },
  { id: "profile", title: "Profile", description: "KYC status, vehicle data, settings, and logout" },
];

export default function MobileWireframePage() {
  const [activeScreen, setActiveScreen] = useState<MobileScreen>("login");

  const renderScreen = () => {
    switch (activeScreen) {
      case "login":
        return <MobileLoginWireframe />;
      case "home":
        return <MobileHomeWireframe />;
      case "route":
        return <MobileDailyRouteWireframe />;
      case "training":
        return <MobileTrainingWireframe />;
      case "profile":
        return <MobileProfileWireframe />;
      default:
        return <MobileHomeWireframe />;
    }
  };

  const currentScreen = mobileScreens.find((s) => s.id === activeScreen);

  return (
    <div className="min-h-screen bg-gray-950">
      {/* Header */}
      <div className="bg-gray-900 border-b border-gray-800 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link
              to="/"
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
            >
              <ArrowLeft size={20} />
              <span>Back</span>
            </Link>
            <div className="w-px h-6 bg-gray-700" />
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-orange-500 rounded-lg" />
              <span className="font-bold text-white text-lg">Employee Mobile App</span>
            </div>
          </div>
          <p className="text-gray-400 text-sm">Wireframe Screens</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Screen Navigation */}
          <div className="lg:col-span-1 space-y-4">
            <h2 className="text-white font-semibold text-lg mb-4">App Screens</h2>
            <div className="space-y-2">
              {mobileScreens.map((screen) => (
                <button
                  key={screen.id}
                  onClick={() => setActiveScreen(screen.id)}
                  className={`w-full text-left p-4 rounded-xl transition-all ${
                    activeScreen === screen.id
                      ? "bg-orange-500/10 border border-orange-500/30"
                      : "bg-gray-800 border border-gray-700 hover:border-gray-600"
                  }`}
                >
                  <h3 className={`font-medium ${
                    activeScreen === screen.id ? "text-orange-500" : "text-white"
                  }`}>
                    {screen.title}
                  </h3>
                  <p className="text-gray-500 text-sm mt-1">{screen.description}</p>
                </button>
              ))}
            </div>

            {/* Features List */}
            <div className="mt-6 p-4 bg-gray-800 rounded-xl border border-gray-700">
              <h3 className="text-white font-medium mb-3">App Features</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                  Bottom navigation with 4 tabs
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                  Real-time location tracking
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                  Video-based training modules
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                  KYC verification workflow
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                  Vehicle data management
                </li>
              </ul>
            </div>
          </div>

          {/* Phone Preview */}
          <div className="lg:col-span-2 flex flex-col items-center">
            <div className="mb-4 text-center">
              <h2 className="text-white font-semibold text-xl">{currentScreen?.title}</h2>
              <p className="text-gray-400 text-sm">{currentScreen?.description}</p>
            </div>
            <MobilePhoneFrame>
              {renderScreen()}
            </MobilePhoneFrame>
          </div>
        </div>
      </div>
    </div>
  );
}