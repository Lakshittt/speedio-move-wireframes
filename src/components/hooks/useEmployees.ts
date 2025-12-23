import { useState, useEffect, useCallback } from "react";
import { Employee, EmployeeStats } from "@/components/types/employee";
import {
  fetchEmployees,
  fetchEmployeeById,
  fetchEmployeesPaginated,
  fetchEmployeesByKycStatus,
  fetchEmployeesByStatus,
  fetchEmployeeStats,
  searchEmployees,
  fetchRecentEmployees,
  fetchActiveEmployeesForTracking,
} from "@/components/services/employeeService";

interface UseEmployeesReturn {
  employees: Employee[];
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

interface UsePaginatedEmployeesReturn extends UseEmployeesReturn {
  page: number;
  totalPages: number;
  total: number;
  setPage: (page: number) => void;
}

/**
 * Hook to fetch all employees
 */
export function useEmployees(): UseEmployeesReturn {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchEmployees();
      setEmployees(data);
    } catch (err) {
      setError("Failed to fetch employees");
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { employees, loading, error, refetch: fetchData };
}

/**
 * Hook to fetch paginated employees
 */
export function usePaginatedEmployees(
  initialPage: number = 1,
  limit: number = 10
): UsePaginatedEmployeesReturn {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(initialPage);
  const [totalPages, setTotalPages] = useState(0);
  const [total, setTotal] = useState(0);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchEmployeesPaginated(page, limit);
      setEmployees(data.employees);
      setTotalPages(data.totalPages);
      setTotal(data.total);
    } catch (err) {
      setError("Failed to fetch employees");
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [page, limit]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { employees, loading, error, page, totalPages, total, setPage, refetch: fetchData };
}

/**
 * Hook to fetch a single employee by ID
 */
export function useEmployee(id: string) {
  const [employee, setEmployee] = useState<Employee | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchEmployeeById(id);
        setEmployee(data);
      } catch (err) {
        setError("Failed to fetch employee");
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [id]);

  return { employee, loading, error };
}

/**
 * Hook to fetch employee statistics
 */
export function useEmployeeStats() {
  const [stats, setStats] = useState<EmployeeStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchEmployeeStats();
      setStats(data);
    } catch (err) {
      setError("Failed to fetch stats");
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { stats, loading, error, refetch: fetchData };
}

/**
 * Hook to fetch employees by KYC status
 */
export function useEmployeesByKycStatus(status: Employee["kycStatus"]) {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchEmployeesByKycStatus(status);
        setEmployees(data);
      } catch (err) {
        setError("Failed to fetch employees");
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [status]);

  return { employees, loading, error };
}

/**
 * Hook to fetch employees by status
 */
export function useEmployeesByStatus(status: Employee["status"]) {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchEmployeesByStatus(status);
        setEmployees(data);
      } catch (err) {
        setError("Failed to fetch employees");
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [status]);

  return { employees, loading, error };
}

/**
 * Hook to search employees
 */
export function useEmployeeSearch(query: string) {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!query.trim()) {
      setEmployees([]);
      return;
    }

    async function fetchData() {
      try {
        setLoading(true);
        setError(null);
        const data = await searchEmployees(query);
        setEmployees(data);
      } catch (err) {
        setError("Failed to search employees");
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [query]);

  return { employees, loading, error };
}

/**
 * Hook to fetch recent employees
 */
export function useRecentEmployees(limit: number = 5) {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchRecentEmployees(limit);
        setEmployees(data);
      } catch (err) {
        setError("Failed to fetch recent employees");
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [limit]);

  return { employees, loading, error };
}

/**
 * Hook to fetch active employees for tracking
 */
export function useActiveEmployeesForTracking() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchActiveEmployeesForTracking();
      setEmployees(data);
    } catch (err) {
      setError("Failed to fetch active employees");
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { employees, loading, error, refetch: fetchData };
}
