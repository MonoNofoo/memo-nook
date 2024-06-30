import { MetadataRoute } from 'next';
import { Articles } from '@src/model/article/Articles';

const domain = 'https://memo-nook.vercel.app';

const sitemap = async (): Promise<MetadataRoute.Sitemap> => {
  const articles = (await Articles.makeArticlesByFiles()).sortDescByCreated();

  return [
    {
      url: domain,
      lastModified: articles.get().at(0)?.getCreatedAt().get(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...articles.get().map((article) => ({
      url: `${domain}/${article.getArticleSlug().get()}`,
      lastModified: article.getCreatedAt().get(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    })),
  ];
};

export default sitemap;
