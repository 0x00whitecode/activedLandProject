import { HeroSection } from '@/components/home/hero-section';
import { ServicesSection } from '@/components/home/services-section';
import { StatsSection } from '@/components/home/stats-section';
import { CommunitySection } from '@/components/home/community-section';
import { CTASection } from '@/components/home/cta-section';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <StatsSection />
      <CommunitySection />
      <CTASection />
    </>
  );
}