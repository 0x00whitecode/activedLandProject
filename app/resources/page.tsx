import { ResourcesHeader } from '@/components/resources/header';
import { ArticlesGrid } from '@/components/resources/articles-grid';
import { GuidesList } from '@/components/resources/guides-list';
import { DownloadableResources } from '@/components/resources/downloadable-resources';
import { NewsletterSignup } from '@/components/resources/newsletter-signup';

export default function Resources() {
  return (
    <>
      <ResourcesHeader />
      <ArticlesGrid />
      <GuidesList />
      <DownloadableResources />
      <NewsletterSignup />
    </>
  );
}