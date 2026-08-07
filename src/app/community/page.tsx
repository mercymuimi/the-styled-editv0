import Hero from "@/components/community/Hero";
import AboutCommunity from "@/components/community/AboutCommunity";
import CommunityBenefits from "@/components/community/CommunityBenefits";
import CommunityChannels from "@/components/community/CommunityChannels";
import CommunityGallery from "@/components/community/CommunityGallery";
import CommunityVoices from "@/components/community/CommunityVoices";
import JoinCommunity from "@/components/community/JoinCommunity";

export default function CommunityPage() {
  return (
    <main>
      <Hero />

      <AboutCommunity />

      <CommunityBenefits />

      <CommunityChannels />

      <CommunityGallery />

      <CommunityVoices />

      <JoinCommunity />
    </main>
  );
}