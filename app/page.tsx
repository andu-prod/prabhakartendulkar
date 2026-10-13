import Hero from "@/components/housen/Hero";
import FeaturedSpaces from "@/components/housen/FeaturedSpaces";
import StatsDark from "@/components/housen/StatsDark";
import WhyTrust from "@/components/housen/WhyTrust";
import Insights from "@/components/housen/Insights";
import Tenants from "@/components/housen/Tenants";
import CTA from "@/components/housen/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedSpaces />
      <StatsDark />
      <WhyTrust />
      <Insights />
      <Tenants />
      <CTA />
    </>
  );
}
