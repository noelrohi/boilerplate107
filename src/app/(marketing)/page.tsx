import {
  Features,
  GetStartedSection,
  Hero,
  MarketingLayout,
  WhyChooseSection,
} from "@/components/layout/marketing-layout";

export default function Page() {
  return (
    <MarketingLayout>
      <Hero />
      <Features />
      <WhyChooseSection />
      <GetStartedSection />
    </MarketingLayout>
  );
}
