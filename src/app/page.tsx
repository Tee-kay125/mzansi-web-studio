import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { WhoWeHelp } from "@/components/sections/WhoWeHelp";
import { PackagesPreview } from "@/components/sections/PackagesPreview";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { DemoProjectsPreview } from "@/components/sections/DemoProjectsPreview";
import { CTASection } from "@/components/sections/CTASection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesPreview />
      <WhoWeHelp />
      <ProcessSection />
      <PackagesPreview />
      <DemoProjectsPreview />
      <CTASection />
    </main>
  );
}
