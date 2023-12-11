import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.bindarchitects.com",
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: "https://bindarchitects.com/",
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
        url: "https://bindarchitects.com/contact",
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 1,
      },
      {
        url: "https://bindarchitects.com/about",
        lastModified: new Date(),
        changeFrequency: 'weekly',
      },
      {
        url: "https://bindarchitects.com/frequently-asked-questions",
        lastModified: new Date(),
        changeFrequency: 'weekly',
      },
      {
        url: "https://bindarchitects.com/works",
        changeFrequency: 'weekly',
        lastModified: new Date(),
      },
      {
        url: "https://bindarchitects.com/projects",
        lastModified: new Date(),
        changeFrequency: 'weekly',
      },
  ];
}