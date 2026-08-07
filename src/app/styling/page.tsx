import StylingHero from "@/components/styling/StylingHero";
import StylingServices from "@/components/styling/StylingServices";
import StylingProcess from "@/components/styling/StylingProcess";
import StylingAudience from "@/components/styling/StylingAudience";

export default function StylingPage() {
  return (
    <main>
      <StylingHero />
      <StylingServices />
      <StylingProcess />
      <StylingAudience />
    </main>
  );
}