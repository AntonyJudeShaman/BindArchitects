import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://bindarchitects.com",
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: "https://bindarchitects.com/",
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
        url: "https://bindarchitects.com/contact",
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 1,
      },
      {
        url: "https://bindarchitects.com/about",
        lastModified: new Date(),
        changeFrequency: 'daily',
      },
      {
        url: "https://bindarchitects.com/faq",
        lastModified: new Date(),
        changeFrequency: 'daily',
      },
      {
        url: "https://bindarchitects.com/works",
        changeFrequency: 'daily',
        lastModified: new Date(),
      },
      {
        url: "https://bindarchitects.com/projects",
        lastModified: new Date(),
        changeFrequency: 'daily',
      },
  ];
}