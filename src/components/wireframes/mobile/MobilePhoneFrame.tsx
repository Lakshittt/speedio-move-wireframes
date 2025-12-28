interface MobilePhoneFrameProps {
  children: React.ReactNode;
}

export function MobilePhoneFrame({ children }: MobilePhoneFrameProps) {
  return (
    <div className="relative mx-auto" style={{ maxWidth: "375px" }}>
      {/* Phone bezel */}
      <div className="bg-gray-950 rounded-[2.5rem] p-2 shadow-2xl border border-gray-800">
        {/* Screen */}
        <div className="bg-gray-900 rounded-[2rem] overflow-hidden relative">
          {/* Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-gray-950 rounded-b-2xl z-10" />
          {/* Screen content */}
          <div className="min-h-[667px] flex flex-col">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
