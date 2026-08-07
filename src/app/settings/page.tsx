import SettingsHero from "@/components/settings/SettingsHero";
import AccountInformation from "@/components/settings/AccountInformation";
import SecuritySettings from "@/components/settings/SecuritySettings";
import NotificationSettings from "@/components/settings/NotificationSettings";
import Preferences from "@/components/settings/Preferences";
import CommunitySettings from "@/components/settings/CommunitySettings";
import PaymentMethods from "@/components/settings/PaymentMethods";
import DangerZone from "@/components/settings/DangerZone";

export default function SettingsPage() {
  return (
    <main className="pt-28 pb-24 space-y-12">
      <SettingsHero />
      <AccountInformation />
      <SecuritySettings />
      <NotificationSettings />
      <Preferences />
      <CommunitySettings />
      <PaymentMethods />
      <DangerZone />
    </main>
  );
}
