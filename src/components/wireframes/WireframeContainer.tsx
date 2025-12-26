type ViewSize = "desktop" | "tablet" | "mobile";

interface WireframeContainerProps {
  title: string;
  children: React.ReactNode;
  viewSize?: ViewSize;
  fillHeight?: boolean;
}

export function WireframeContainer({ title, children, viewSize = "desktop", fillHeight = false }: WireframeContainerProps) {
  const heightStyles: Record<ViewSize, string> = {
    desktop: "min-h-[500px]",
    tablet: "min-h-[600px]",
    mobile: "min-h-[700px]",
  };

  return (
    <div className={`bg-gray-100 border-2 border-gray-300 rounded-lg overflow-hidden flex flex-col ${fillHeight ? 'h-full' : ''}`}>
      <div className="bg-gray-200 px-4 py-2 border-b border-gray-300 flex-shrink-0">
        <span className="text-sm font-medium text-gray-600">{title}</span>
      </div>
      <div className={`p-1 flex-1 ${heightStyles[viewSize]}`}>
        {children}
      </div>
    </div>
  );
}
