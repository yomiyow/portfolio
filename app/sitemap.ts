import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://itsromeo.dev',
      lastModified: new Date(),
    },
  ];
}
