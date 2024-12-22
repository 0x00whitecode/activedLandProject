import { PageHeader } from '@/components/services/scholarships/page-header';
import { ScholarshipCategories } from '@/components/services/scholarships/scholarship-categories';
import { SearchSection } from '@/components/services/scholarships/search-section';
import { FeaturedScholarships } from '@/components/services/scholarships/featured-scholarships';
import { ApplicationProcess } from '@/components/services/scholarships/application-process';
import { SuccessStories } from '@/components/services/scholarships/success-stories';
import { ResourcesSection } from '@/components/services/scholarships/resources-section';

export default function ScholarshipsPage() {
  return (
    <>
      <PageHeader />
      <ScholarshipCategories />
      <SearchSection />
      <FeaturedScholarships />
      <ApplicationProcess />
      <SuccessStories />
      <ResourcesSection />
    </>
  );
}