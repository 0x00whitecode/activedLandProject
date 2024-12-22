import { PageHeader } from '@/components/services/financial/page-header';
import { ServicesGrid } from '@/components/services/financial/services-grid';
import { PensionPlans } from '@/components/services/financial/pension-plans';
import { EstateProperties } from '@/components/services/financial/estate-properties';
import { RetirementPlanning } from '@/components/services/financial/retirement-planning';
import { ConsultationCTA } from '@/components/services/financial/consultation-cta';

export default function FinancialServices() {
  return (
    <>
      <PageHeader />
      <ServicesGrid />
      <PensionPlans />
      <EstateProperties />
      <RetirementPlanning />
      <ConsultationCTA />
    </>
  );
}