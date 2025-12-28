import { Routes, Route } from "react-router-dom";
import WireframesHome from "@/components/wireframes/WireframesHome";
import WireframePage from "@/components/wireframes/WireframePage";
import { MobileWireframePage } from "@/components/wireframes/MobileWireframePage";
import NotFoundPage from "@/app/pages/NotFoundPage";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<WireframesHome />} />
      <Route path="/screens" element={<WireframePage />} />
      <Route path="/mobile-app" element={<MobileWireframePage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
