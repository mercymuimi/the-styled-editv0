import Navbar from "@/components/ui/Navbar";

import Hero from "@/components/sections/Hero";
import Manifesto from "@/components/sections/Manifesto";
import House from "@/components/sections/House";
import FeaturedCollection from "@/components/sections/FeaturedCollection";
import StylingServices from "@/components/sections/StylingServices";
import Community from "@/components/sections/Community";
import Journal from "@/components/sections/Journal";
import JoinTheEdit from "@/components/sections/JoinTheEdit";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <Manifesto />

        <House />

        <FeaturedCollection />

        <StylingServices />

        <Community />

        <Journal />

        <JoinTheEdit />
      </main>

      
    </>
  );
}