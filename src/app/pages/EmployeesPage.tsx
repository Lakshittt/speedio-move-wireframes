import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { EmployeeTableFull } from "@/components/employees/EmployeeTableFull";
import { UserPlus } from "lucide-react";

export default function EmployeesPage() {
  return (
    <DashboardLayout>
      <div className="mb-6 flex items-center justify-between opacity-0 animate-fade-in">
        <div>
          <h1 className="text-2xl font-display font-bold text-foreground">
            Employee Management
          </h1>
          <p className="text-muted-foreground">
            View and manage all employees
          </p>
        </div>
        <button className="btn-speedio flex items-center gap-2 text-sm">
          <UserPlus className="w-4 h-4" />
          Add Employee
        </button>
      </div>

      <EmployeeTableFull />
    </DashboardLayout>
  );
}
