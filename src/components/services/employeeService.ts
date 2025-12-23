import { Employee, EmployeeStats } from "@/components/types/employee";
import mockData from "@/components/data/mockEmployees.json";

// Simulates API delay for realistic behavior
const simulateDelay = (ms: number = 300): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

/**
 * Fetches all employees
 * Replace with actual API call when ready
 */
export async function fetchEmployees(): Promise<Employee[]> {
  await simulateDelay();
  return mockData.employees as Employee[];
}

/**
 * Fetches a single employee by ID
 */
export async function fetchEmployeeById(id: string): Promise<Employee | null> {
  await simulateDelay();
  const employee = mockData.employees.find((emp) => emp.id === id);
  return (employee as Employee) || null;
}

/**
 * Fetches employees with pagination
 */
export async function fetchEmployeesPaginated(
  page: number = 1,
  limit: number = 10
): Promise<{ employees: Employee[]; total: number; totalPages: number }> {
  await simulateDelay();
  const allEmployees = mockData.employees as Employee[];
  const start = (page - 1) * limit;
  const end = start + limit;
  
  return {
    employees: allEmployees.slice(start, end),
    total: allEmployees.length,
    totalPages: Math.ceil(allEmployees.length / limit),
  };
}

/**
 * Fetches employees by KYC status
 */
export async function fetchEmployeesByKycStatus(
  status: Employee["kycStatus"]
): Promise<Employee[]> {
  await simulateDelay();
  return mockData.employees.filter(
    (emp) => emp.kycStatus === status
  ) as Employee[];
}

/**
 * Fetches employees by status (active/offline)
 */
export async function fetchEmployeesByStatus(
  status: Employee["status"]
): Promise<Employee[]> {
  await simulateDelay();
  return mockData.employees.filter((emp) => emp.status === status) as Employee[];
}

/**
 * Fetches employees by role
 */
export async function fetchEmployeesByRole(
  role: Employee["role"]
): Promise<Employee[]> {
  await simulateDelay();
  return mockData.employees.filter((emp) => emp.role === role) as Employee[];
}

/**
 * Calculates and returns employee statistics
 */
export async function fetchEmployeeStats(): Promise<EmployeeStats> {
  await simulateDelay();
  const employees = mockData.employees as Employee[];
  
  const totalProgress = employees.reduce((sum, emp) => sum + emp.trainingProgress, 0);
  
  return {
    total: employees.length,
    active: employees.filter((emp) => emp.status === "active").length,
    offline: employees.filter((emp) => emp.status === "offline").length,
    kycVerified: employees.filter((emp) => emp.kycStatus === "verified").length,
    kycPending: employees.filter((emp) => emp.kycStatus === "pending").length,
    kycSubmitted: employees.filter((emp) => emp.kycStatus === "submitted").length,
    kycRejected: employees.filter((emp) => emp.kycStatus === "rejected").length,
    averageTrainingProgress: Math.round(totalProgress / employees.length),
  };
}

/**
 * Search employees by name or email
 */
export async function searchEmployees(query: string): Promise<Employee[]> {
  await simulateDelay();
  const lowerQuery = query.toLowerCase();
  return mockData.employees.filter(
    (emp) =>
      emp.name.toLowerCase().includes(lowerQuery) ||
      emp.email.toLowerCase().includes(lowerQuery)
  ) as Employee[];
}

/**
 * Fetches recent employees (sorted by join date, newest first)
 */
export async function fetchRecentEmployees(limit: number = 5): Promise<Employee[]> {
  await simulateDelay();
  const employees = [...mockData.employees] as Employee[];
  return employees
    .sort((a, b) => new Date(b.joinDate).getTime() - new Date(a.joinDate).getTime())
    .slice(0, limit);
}

/**
 * Fetches active employees for live tracking
 */
export async function fetchActiveEmployeesForTracking(): Promise<Employee[]> {
  await simulateDelay();
  return mockData.employees.filter(
    (emp) => emp.status === "active"
  ) as Employee[];
}
