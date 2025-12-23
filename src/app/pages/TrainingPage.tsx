import { useState, useMemo } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { useEmployees, useEmployeeStats } from "@/components/hooks/useEmployees";
import { GraduationCap, Search } from "lucide-react";
import { Pagination } from "@/components/common/Pagination";

const ITEMS_PER_PAGE = 10;

export default function TrainingPage() {
  const { employees, loading } = useEmployees();
  const { stats } = useEmployeeStats();
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredEmployees = useMemo(() => {
    if (!employees) return [];
    return employees.filter((emp) =>
      emp.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [employees, search]);

  const paginatedEmployees = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredEmployees.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredEmployees, currentPage]);

  const totalPages = Math.ceil(filteredEmployees.length / ITEMS_PER_PAGE);

  return (
    <DashboardLayout>
      <div className="mb-6 opacity-0 animate-fade-in">
        <h1 className="text-2xl font-display font-bold text-foreground">
          Training Progress
        </h1>
        <p className="text-muted-foreground">
          Track employee training completion
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {[
          { label: "Total Employees", value: stats?.total || 0 },
          { label: "Avg Progress", value: `${stats?.averageTrainingProgress || 0}%` },
          { label: "100% Complete", value: employees?.filter(e => e.trainingProgress === 100).length || 0 },
          { label: "Below 50%", value: employees?.filter(e => e.trainingProgress < 50).length || 0 },
        ].map((stat, i) => (
          <div
            key={stat.label}
            className="stat-card opacity-0 animate-fade-in"
            style={{ animationDelay: `${i * 100}ms` }}
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-accent/20 text-accent-foreground">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <p className="text-2xl font-display font-bold text-foreground">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Table */}
      <div className="glass-card rounded-xl overflow-hidden opacity-0 animate-fade-in animate-delay-200">
        <div className="p-4 border-b border-border">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search employees..."
              value={search}
              onChange={(e) => { setSearch(e.target.value); setCurrentPage(1); }}
              className="input-speedio pl-10 py-2.5"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border bg-muted/30">
                <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground uppercase">Employee</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground uppercase">Role</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground uppercase">Progress</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground uppercase">Completed</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {loading ? (
                Array.from({ length: 5 }).map((_, i) => (
                  <tr key={i}><td colSpan={4} className="px-4 py-3"><div className="skeleton h-12 w-full rounded-lg" /></td></tr>
                ))
              ) : paginatedEmployees.length === 0 ? (
                <tr><td colSpan={4} className="px-4 py-8 text-center text-muted-foreground">No employees found.</td></tr>
              ) : (
                paginatedEmployees.map((emp) => (
                  <tr key={emp.id} className="table-row-hover">
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-primary font-semibold text-sm">
                          {emp.name.split(" ").map(n => n[0]).join("")}
                        </div>
                        <div>
                          <p className="font-medium text-foreground text-sm">{emp.name}</p>
                          <p className="text-xs text-muted-foreground">{emp.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-sm text-foreground">{emp.role}</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-3">
                        <div className="w-24 h-2 bg-muted rounded-full overflow-hidden">
                          <div 
                            className={`h-full rounded-full ${
                              emp.trainingProgress >= 80 ? "bg-emerald-500" :
                              emp.trainingProgress >= 50 ? "bg-amber-500" : "bg-destructive"
                            }`}
                            style={{ width: `${emp.trainingProgress}%` }}
                          />
                        </div>
                        <span className="text-sm font-medium text-foreground">{emp.trainingProgress}%</span>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-sm text-muted-foreground">
                      {emp.completedTrainings}/{emp.totalTrainings} modules
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {!loading && filteredEmployees.length > 0 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
            totalItems={filteredEmployees.length}
            itemsPerPage={ITEMS_PER_PAGE}
          />
        )}
      </div>
    </DashboardLayout>
  );
}
