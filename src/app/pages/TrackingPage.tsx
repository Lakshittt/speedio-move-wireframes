import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { useActiveEmployeesForTracking } from "@/components/hooks/useEmployees";
import { MapPin, Circle, Search } from "lucide-react";
import { useState, useMemo } from "react";
import { format } from "date-fns";

const statusConfig = {
  active: { color: "bg-emerald-500", label: "Active" },
  offline: { color: "bg-muted-foreground", label: "Offline" },
};

export default function TrackingPage() {
  const { employees, loading } = useActiveEmployeesForTracking();
  const [search, setSearch] = useState("");

  const filteredEmployees = useMemo(() => {
    if (!employees) return [];
    return employees.filter((emp) =>
      emp.name.toLowerCase().includes(search.toLowerCase()) ||
      emp.location.toLowerCase().includes(search.toLowerCase())
    );
  }, [employees, search]);

  const activeCount = employees?.filter(e => e.status === "active").length || 0;

  return (
    <DashboardLayout>
      <div className="mb-6 flex items-center justify-between opacity-0 animate-fade-in">
        <div>
          <h1 className="text-2xl font-display font-bold text-foreground">
            Live Tracking
          </h1>
          <p className="text-muted-foreground">
            Real-time employee locations
          </p>
        </div>
        <div className="flex items-center gap-4 text-sm">
          <span className="flex items-center gap-2">
            <Circle className="w-2 h-2 fill-emerald-500 text-emerald-500" />
            <span className="text-muted-foreground">Active ({activeCount})</span>
          </span>
        </div>
      </div>

      <div className="glass-card rounded-xl overflow-hidden opacity-0 animate-fade-in animate-delay-100">
        {/* Search */}
        <div className="p-4 border-b border-border">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search by name or location..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="input-speedio pl-10 py-2.5"
            />
          </div>
        </div>

        {/* Employee List */}
        <div className="divide-y divide-border">
          {loading ? (
            Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="p-4">
                <div className="skeleton h-14 w-full rounded-lg" />
              </div>
            ))
          ) : filteredEmployees.length === 0 ? (
            <div className="p-8 text-center text-muted-foreground">
              No employees found.
            </div>
          ) : (
            filteredEmployees.map((emp) => {
              const status = statusConfig[emp.status];
              return (
                <div key={emp.id} className="p-4 hover:bg-muted/30 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-primary font-semibold text-sm">
                        {emp.name.split(" ").map(n => n[0]).join("")}
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{emp.name}</p>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <span>{emp.role}</span>
                          {emp.vehicleDetails && (
                            <>
                              <span>•</span>
                              <span>{emp.vehicleDetails.registrationNumber}</span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className={`w-2 h-2 rounded-full ${status.color}`} />
                      <span className="text-xs text-muted-foreground">{status.label}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 mt-3 ml-13 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{emp.location}</span>
                    </div>
                    <span>•</span>
                    <span>Last seen: {format(new Date(emp.lastActiveAt), "MMM d, h:mm a")}</span>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </DashboardLayout>
  );
}
