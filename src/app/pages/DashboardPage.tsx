import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { StatCard } from "@/components/common/StatCard";
import { useEmployeeStats } from "@/components/hooks/useEmployees";
import { Users, FileCheck, MapPin, GraduationCap, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const quickLinks = [
  { title: "Employees", description: "Manage workforce", href: "/employees", icon: Users },
  { title: "KYC", description: "Review compliance", href: "/kyc", icon: FileCheck },
  { title: "Tracking", description: "Live locations", href: "/tracking", icon: MapPin },
  { title: "Training", description: "View progress", href: "/training", icon: GraduationCap },
];

export default function DashboardPage() {
  const { stats, loading } = useEmployeeStats();

  const statCards = [
    {
      title: "Total Employees",
      value: loading ? "-" : stats?.total || 0,
      change: loading ? "" : `${stats?.active || 0} active`,
      changeType: "neutral" as const,
      icon: Users,
      iconColor: "bg-primary/10 text-primary",
    },
    {
      title: "KYC Verified",
      value: loading ? "-" : `${Math.round(((stats?.kycVerified || 0) / (stats?.total || 1)) * 100)}%`,
      change: loading ? "" : `${stats?.kycVerified || 0} verified`,
      changeType: "positive" as const,
      icon: FileCheck,
      iconColor: "bg-emerald-100 text-emerald-600",
    },
    {
      title: "Active Now",
      value: loading ? "-" : stats?.active || 0,
      change: loading ? "" : `${Math.round(((stats?.active || 0) / (stats?.total || 1)) * 100)}% of workforce`,
      changeType: "neutral" as const,
      icon: MapPin,
      iconColor: "bg-primary/10 text-primary",
    },
    {
      title: "Avg Training",
      value: loading ? "-" : `${stats?.averageTrainingProgress || 0}%`,
      change: "completion rate",
      changeType: "positive" as const,
      icon: GraduationCap,
      iconColor: "bg-accent/20 text-accent-foreground",
    },
  ];

  return (
    <DashboardLayout>
      {/* Page Header */}
      <div className="mb-8 opacity-0 animate-fade-in">
        <h1 className="text-2xl font-display font-bold text-foreground">
          Dashboard
        </h1>
        <p className="text-muted-foreground">
          Welcome back! Here's your workforce overview.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {statCards.map((stat, index) => (
          <StatCard
            key={stat.title}
            {...stat}
            delay={index * 100}
          />
        ))}
      </div>

      {/* Quick Links */}
      <div className="opacity-0 animate-fade-in animate-delay-200">
        <h2 className="text-lg font-display font-semibold text-foreground mb-4">
          Quick Access
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="glass-card rounded-xl p-5 hover:shadow-lg transition-all group"
            >
              <div className="flex items-start justify-between">
                <div className="p-2.5 rounded-lg bg-primary/10 text-primary">
                  <link.icon className="w-5 h-5" />
                </div>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </div>
              <h3 className="font-semibold text-foreground mt-4">{link.title}</h3>
              <p className="text-sm text-muted-foreground">{link.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
