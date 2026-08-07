import ProfileHero from "@/components/profile/ProfileHero";
import QuickStats from "@/components/profile/QuickStats";
import RecentOrders from "@/components/profile/RecentOrders";
import Wishlist from "@/components/profile/WishList";
import SavedLooks from "@/components/profile/SavedLooks";
import CommunityStatus from "@/components/profile/CommunityStatus";

export default function ProfilePage() {
  return (
    <main className="pt-28 pb-24">
      <div className="space-y-12">
        <ProfileHero />

        <QuickStats />

        <RecentOrders />

        <Wishlist />

        <SavedLooks />

        <CommunityStatus />
      </div>
    </main>
  );
}