import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.bindhomes.com",
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: "https://bindhomes.com/",
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
        url: "https://bindhomes.com/contact",
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 1,
      },
      {
        url: "https://bindhomes.com/about",
        lastModified: new Date(),
        changeFrequency: 'weekly',
      },
      {
        url: "https://bindhomes.com/frequently-asked-questions",
        lastModified: new Date(),
        changeFrequency: 'weekly',
      },
      {
        url: "https://bindhomes.com/works",
        changeFrequency: 'weekly',
        lastModified: new Date(),
      },
      {
        url: "https://bindhomes.com/projects",
        lastModified: new Date(),
        changeFrequency: 'weekly',
      },
  ];
}