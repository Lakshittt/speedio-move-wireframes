import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { User, Bell, Shield, ExternalLink } from "lucide-react";

const settingsSections = [
  {
    icon: User,
    title: "Profile Settings",
    description: "Manage your admin profile",
    action: "Edit",
  },
  {
    icon: Bell,
    title: "Notifications",
    description: "Configure alert preferences",
    action: "Configure",
  },
  {
    icon: Shield,
    title: "Security",
    description: "Password and access settings",
    action: "Manage",
  },
];

export default function SettingsPage() {
  return (
    <DashboardLayout>
      <div className="mb-6 opacity-0 animate-fade-in">
        <h1 className="text-2xl font-display font-bold text-foreground">
          Settings
        </h1>
        <p className="text-muted-foreground">
          Manage your account preferences
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
        {settingsSections.map((section, i) => (
          <div
            key={section.title}
            className="glass-card rounded-xl p-5 opacity-0 animate-fade-in hover:shadow-lg transition-all"
            style={{ animationDelay: `${i * 100}ms` }}
          >
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-primary/10 text-primary">
                  <section.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{section.title}</h3>
                  <p className="text-sm text-muted-foreground mt-0.5">{section.description}</p>
                </div>
              </div>
              <button className="text-sm text-primary font-medium hover:underline">
                {section.action}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* HRMIA Redirect */}
      <div className="glass-card rounded-xl p-5 opacity-0 animate-fade-in animate-delay-300">
        <div className="flex items-center justify-between">
          <div className="flex items-start gap-4">
            <div className="p-2.5 rounded-lg bg-accent/20 text-accent-foreground">
              <ExternalLink className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">HR Management System (HRMIA)</h3>
              <p className="text-sm text-muted-foreground mt-0.5">Access the full HR system</p>
            </div>
          </div>
          <button className="btn-gold flex items-center gap-2 text-sm">
            <ExternalLink className="w-4 h-4" />
            Open HRMIA
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
}
