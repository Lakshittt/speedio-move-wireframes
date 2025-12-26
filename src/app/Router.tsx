import { Routes, Route } from "react-router-dom";
import WireframesHome from "@/components/wireframes/WireframesHome";
import WireframePage from "@/components/wireframes/WireframePage";
import PresentationPage from "@/components/wireframes/PresentationPage";
import NotFoundPage from "@/app/pages/NotFoundPage";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<WireframesHome />} />
      <Route path="/screens" element={<WireframePage />} />
      <Route path="/presentation" element={<PresentationPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
