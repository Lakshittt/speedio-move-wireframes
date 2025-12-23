export type KYCStatus = "verified" | "pending" | "rejected" | "submitted";
export type EmployeeStatus = "active" | "offline";
export type EmployeeRole = "Driver" | "Fleet Manager" | "Supervisor" | "Dispatcher" | "Warehouse Staff";

export interface VehicleDetails {
  licenseNumber: string;
  chassisNumber: string;
  vehicleType: string;
  registrationNumber: string;
}

export interface Employee {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: EmployeeRole;
  kycStatus: KYCStatus;
  status: EmployeeStatus;
  location: string;
  avatar?: string;
  joinDate: string;
  department: string;
  governmentId: {
    type: string;
    number: string;
  };
  vehicleDetails?: VehicleDetails;
  lastActiveAt?: string;
  trainingProgress: number;
  completedTrainings: number;
  totalTrainings: number;
}

export interface EmployeeStats {
  total: number;
  active: number;
  offline: number;
  kycVerified: number;
  kycPending: number;
  kycSubmitted: number;
  kycRejected: number;
  averageTrainingProgress: number;
}
