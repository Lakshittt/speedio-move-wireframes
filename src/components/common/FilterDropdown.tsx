import { ChevronDown } from "lucide-react";

interface FilterDropdownProps {
  label: string;
  value: string;
  options: { value: string; label: string }[];
  onChange: (value: string) => void;
}

export function FilterDropdown({ label, value, options, onChange }: FilterDropdownProps) {
  return (
    <div className="dropdown">
      <div 
        tabIndex={0} 
        role="button" 
        className="flex items-center gap-2 px-3 py-2 bg-card border border-border rounded-lg text-sm font-medium text-foreground hover:bg-muted transition-colors cursor-pointer"
      >
        <span className="text-muted-foreground">{label}:</span>
        <span>{options.find(o => o.value === value)?.label || "All"}</span>
        <ChevronDown className="w-4 h-4 text-muted-foreground" />
      </div>
      <ul 
        tabIndex={0} 
        className="dropdown-content z-50 menu p-2 shadow-lg bg-card border border-border rounded-lg w-48 mt-1"
      >
        {options.map((option) => (
          <li key={option.value}>
            <button
              className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                value === option.value 
                  ? "bg-primary text-primary-foreground" 
                  : "text-foreground hover:bg-muted"
              }`}
              onClick={() => onChange(option.value)}
            >
              {option.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
