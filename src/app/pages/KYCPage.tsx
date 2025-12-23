import { useState, useMemo } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { useEmployees, useEmployeeStats } from "@/components/hooks/useEmployees";
import { FileText, Clock, CheckCircle, XCircle, Search } from "lucide-react";
import { FilterDropdown } from "@/components/common/FilterDropdown";
import { Pagination } from "@/components/common/Pagination";
import { Employee } from "@/components/types/employee";

const kycStatusConfig = {
  verified: { label: "Verified", class: "status-verified" },
  pending: { label: "Pending", class: "status-pending" },
  submitted: { label: "Submitted", class: "bg-primary/10 text-primary" },
  rejected: { label: "Rejected", class: "status-rejected" },
};

const kycOptions = [
  { value: "all", label: "All Status" },
  { value: "verified", label: "Verified" },
  { value: "pending", label: "Pending" },
  { value: "submitted", label: "Submitted" },
  { value: "rejected", label: "Rejected" },
];

const ITEMS_PER_PAGE = 10;

export default function KYCPage() {
  const { employees, loading } = useEmployees();
  const { stats } = useEmployeeStats();
  const [search, setSearch] = useState("");
  const [kycFilter, setKycFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredEmployees = useMemo(() => {
    if (!employees) return [];
    
    return employees.filter((emp) => {
      const matchesSearch = 
        emp.name.toLowerCase().includes(search.toLowerCase()) ||
        emp.email.toLowerCase().includes(search.toLowerCase());
      const matchesKyc = kycFilter === "all" || emp.kycStatus === kycFilter;
      return matchesSearch && matchesKyc;
    });
  }, [employees, search, kycFilter]);

  const paginatedEmployees = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredEmployees.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredEmployees, currentPage]);

  const totalPages = Math.ceil(filteredEmployees.length / ITEMS_PER_PAGE);

  const kycStats = useMemo(() => {
    if (!employees) return { verified: 0, pending: 0, submitted: 0, rejected: 0 };
    return {
      verified: employees.filter(e => e.kycStatus === "verified").length,
      pending: employees.filter(e => e.kycStatus === "pending").length,
      submitted: employees.filter(e => e.kycStatus === "submitted").length,
      rejected: employees.filter(e => e.kycStatus === "rejected").length,
    };
  }, [employees]);

  return (
    <DashboardLayout>
      <div className="mb-6 opacity-0 animate-fade-in">
        <h1 className="text-2xl font-display font-bold text-foreground">
          KYC Management
        </h1>
        <p className="text-muted-foreground">
          Review employee compliance status
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {[
          { label: "Verified", value: kycStats.verified, icon: CheckCircle, color: "text-emerald-500" },
          { label: "Pending", value: kycStats.pending, icon: Clock, color: "text-amber-500" },
          { label: "Submitted", value: kycStats.submitted, icon: FileText, color: "text-primary" },
          { label: "Rejected", value: kycStats.rejected, icon: XCircle, color: "text-destructive" },
        ].map((stat, i) => (
          <div
            key={stat.label}
            className="stat-card opacity-0 animate-fade-in"
            style={{ animationDelay: `${i * 100}ms` }}
          >
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-lg bg-muted ${stat.color}`}>
                <stat.icon className="w-5 h-5" />
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
        <div className="p-4 border-b border-border flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search employees..."
              value={search}
              onChange={(e) => { setSearch(e.target.value); setCurrentPage(1); }}
              className="input-speedio pl-10 py-2.5"
            />
          </div>
          <FilterDropdown
            label="KYC Status"
            value={kycFilter}
            options={kycOptions}
            onChange={(val) => { setKycFilter(val); setCurrentPage(1); }}
          />
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border bg-muted/30">
                <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground uppercase">Employee</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground uppercase">Role</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground uppercase">KYC Status</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground uppercase">ID Type</th>
                <th className="px-4 py-3 text-right text-xs font-semibold text-muted-foreground uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {loading ? (
                Array.from({ length: 5 }).map((_, i) => (
                  <tr key={i}><td colSpan={5} className="px-4 py-3"><div className="skeleton h-12 w-full rounded-lg" /></td></tr>
                ))
              ) : paginatedEmployees.length === 0 ? (
                <tr><td colSpan={5} className="px-4 py-8 text-center text-muted-foreground">No employees found.</td></tr>
              ) : (
                paginatedEmployees.map((emp) => <KYCRow key={emp.id} employee={emp} />)
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

function KYCRow({ employee }: { employee: Employee }) {
  const kycStatus = kycStatusConfig[employee.kycStatus];

  return (
    <tr className="table-row-hover">
      <td className="px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-primary font-semibold text-sm">
            {employee.name.split(" ").map(n => n[0]).join("")}
          </div>
          <div>
            <p className="font-medium text-foreground text-sm">{employee.name}</p>
            <p className="text-xs text-muted-foreground">{employee.email}</p>
          </div>
        </div>
      </td>
      <td className="px-4 py-3 text-sm text-foreground">{employee.role}</td>
      <td className="px-4 py-3">
        <span className={`status-badge ${kycStatus.class}`}>{kycStatus.label}</span>
      </td>
      <td className="px-4 py-3 text-sm text-muted-foreground">{employee.governmentId.type}</td>
      <td className="px-4 py-3 text-right">
        <button className="text-sm text-primary font-medium hover:underline">View</button>
      </td>
    </tr>
  );
}
