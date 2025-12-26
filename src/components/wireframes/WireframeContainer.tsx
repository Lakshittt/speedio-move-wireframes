interface WireframeContainerProps {
  title: string;
  children: React.ReactNode;
}

export function WireframeContainer({ title, children }: WireframeContainerProps) {
  return (
    <div className="bg-gray-100 border-2 border-gray-300 rounded-lg overflow-hidden">
      <div className="bg-gray-200 px-4 py-2 border-b border-gray-300">
        <span className="text-sm font-medium text-gray-600">{title}</span>
      </div>
      <div className="p-1">
        {children}
      </div>
    </div>
  );
}
