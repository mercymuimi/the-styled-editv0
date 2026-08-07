import Hero from "@/components/lifestyle/Hero";
import FeaturedEvents from "@/components/lifestyle/FeaturedEvents";
import UpcomingEvents from "@/components/lifestyle/UpcomingEvents";
import CommunityBenefits from "@/components/lifestyle/CommunityBenefits";
import EventGallery from "@/components/lifestyle/EventGallery";
import WhatsNext from "@/components/lifestyle/WhatsNext";
import JoinCommunity from "@/components/lifestyle/JoinCommunity";

import { lifestyleEvents } from "@/data/lifestyle";

export default function LifestylePage() {
  return (
    <main>

      <Hero />

      <FeaturedEvents
        event={lifestyleEvents[0]}
      />

      <UpcomingEvents
        events={lifestyleEvents.slice(1)}
      />

      <CommunityBenefits />

      <EventGallery />

      <WhatsNext />

      <JoinCommunity />

    </main>
  );
}
