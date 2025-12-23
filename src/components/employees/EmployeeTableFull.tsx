import { useState, useMemo } from "react";
import { Search, Eye, Edit, Trash2 } from "lucide-react";
import { Employee } from "@/components/types/employee";
import { useEmployees } from "@/components/hooks/useEmployees";
import { FilterDropdown } from "@/components/common/FilterDropdown";
import { Pagination } from "@/components/common/Pagination";
import { format } from "date-fns";

const kycStatusConfig = {
  verified: { label: "Verified", class: "status-verified" },
  pending: { label: "Pending", class: "status-pending" },
  submitted: { label: "Submitted", class: "bg-primary/10 text-primary" },
  rejected: { label: "Rejected", class: "status-rejected" },
};

const statusConfig = {
  active: { label: "Active", class: "status-active" },
  offline: { label: "Offline", class: "status-offline" },
};

const roleOptions = [
  { value: "all", label: "All Roles" },
  { value: "Driver", label: "Driver" },
  { value: "Fleet Manager", label: "Fleet Manager" },
  { value: "Supervisor", label: "Supervisor" },
  { value: "Dispatcher", label: "Dispatcher" },
  { value: "Warehouse Staff", label: "Warehouse Staff" },
];

const kycOptions = [
  { value: "all", label: "All KYC" },
  { value: "verified", label: "Verified" },
  { value: "pending", label: "Pending" },
  { value: "submitted", label: "Submitted" },
  { value: "rejected", label: "Rejected" },
];

const statusOptions = [
  { value: "all", label: "All Status" },
  { value: "active", label: "Active" },
  { value: "offline", label: "Offline" },
];

const ITEMS_PER_PAGE = 10;

export function EmployeeTableFull() {
  const { employees, loading, error } = useEmployees();
  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState("all");
  const [kycFilter, setKycFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredEmployees = useMemo(() => {
    if (!employees) return [];
    
    return employees.filter((emp) => {
      const matchesSearch = 
        emp.name.toLowerCase().includes(search.toLowerCase()) ||
        emp.email.toLowerCase().includes(search.toLowerCase()) ||
        emp.id.toLowerCase().includes(search.toLowerCase());
      
      const matchesRole = roleFilter === "all" || emp.role === roleFilter;
      const matchesKyc = kycFilter === "all" || emp.kycStatus === kycFilter;
      const matchesStatus = statusFilter === "all" || emp.status === statusFilter;
      
      return matchesSearch && matchesRole && matchesKyc && matchesStatus;
    });
  }, [employees, search, roleFilter, kycFilter, statusFilter]);

  const paginatedEmployees = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredEmployees.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredEmployees, currentPage]);

  const totalPages = Math.ceil(filteredEmployees.length / ITEMS_PER_PAGE);

  // Reset to page 1 when filters change
  const handleFilterChange = (setter: (val: string) => void) => (value: string) => {
    setter(value);
    setCurrentPage(1);
  };

  if (error) {
    return (
      <div className="glass-card rounded-xl p-8 text-center">
        <p className="text-destructive">Error loading employees: {error}</p>
      </div>
    );
  }

  return (
    <div className="glass-card rounded-xl overflow-hidden opacity-0 animate-fade-in animate-delay-200">
      {/* Header with Search and Filters */}
      <div className="p-4 border-b border-border">
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search by name, email, or ID..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setCurrentPage(1);
              }}
              className="input-speedio pl-10 py-2.5"
            />
          </div>
          
          {/* Filters */}
          <div className="flex items-center gap-3 flex-wrap">
            <FilterDropdown
              label="Role"
              value={roleFilter}
              options={roleOptions}
              onChange={handleFilterChange(setRoleFilter)}
            />
            <FilterDropdown
              label="KYC"
              value={kycFilter}
              options={kycOptions}
              onChange={handleFilterChange(setKycFilter)}
            />
            <FilterDropdown
              label="Status"
              value={statusFilter}
              options={statusOptions}
              onChange={handleFilterChange(setStatusFilter)}
            />
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border bg-muted/30">
              <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Employee</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Role</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Department</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">KYC Status</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Status</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Location</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Join Date</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Training</th>
              <th className="px-4 py-3 text-right text-xs font-semibold text-muted-foreground uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {loading ? (
              Array.from({ length: 5 }).map((_, i) => (
                <tr key={i}>
                  <td className="px-4 py-3" colSpan={9}>
                    <div className="skeleton h-12 w-full rounded-lg" />
                  </td>
                </tr>
              ))
            ) : paginatedEmployees.length === 0 ? (
              <tr>
                <td colSpan={9} className="px-4 py-8 text-center text-muted-foreground">
                  No employees found matching your criteria.
                </td>
              </tr>
            ) : (
              paginatedEmployees.map((employee) => (
                <EmployeeRow key={employee.id} employee={employee} />
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
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
  );
}

function EmployeeRow({ employee }: { employee: Employee }) {
  const kycStatus = kycStatusConfig[employee.kycStatus];
  const status = statusConfig[employee.status];

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
      <td className="px-4 py-3 text-sm text-muted-foreground">{employee.department}</td>
      <td className="px-4 py-3">
        <span className={`status-badge ${kycStatus.class}`}>
          {kycStatus.label}
        </span>
      </td>
      <td className="px-4 py-3">
        <span className={`status-badge ${status.class}`}>
          {status.label}
        </span>
      </td>
      <td className="px-4 py-3 text-sm text-muted-foreground">{employee.location}</td>
      <td className="px-4 py-3 text-sm text-muted-foreground">
        {format(new Date(employee.joinDate), "MMM d, yyyy")}
      </td>
      <td className="px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="w-16 h-1.5 bg-muted rounded-full overflow-hidden">
            <div 
              className="h-full bg-primary rounded-full" 
              style={{ width: `${employee.trainingProgress}%` }}
            />
          </div>
          <span className="text-xs text-muted-foreground">{employee.trainingProgress}%</span>
        </div>
      </td>
      <td className="px-4 py-3">
        <div className="flex justify-end gap-1">
          <button className="p-2 hover:bg-muted rounded-lg transition-colors text-muted-foreground hover:text-foreground">
            <Eye className="w-4 h-4" />
          </button>
          <button className="p-2 hover:bg-muted rounded-lg transition-colors text-muted-foreground hover:text-foreground">
            <Edit className="w-4 h-4" />
          </button>
          <button className="p-2 hover:bg-destructive/10 rounded-lg transition-colors text-muted-foreground hover:text-destructive">
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </td>
    </tr>
  );
}
