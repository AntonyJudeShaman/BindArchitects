import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.bindhomes.com",
      lastModified: new Date(),
    },
    {
      url: "https://www.bindhomes.com/contact",
      lastModified: new Date(),
    },
    {
      url: "https://www.bindhomes.com/about",
      lastModified: new Date(),
    },
    {
      url: "https://www.bindhomes.com/frequently-asked-question",
      lastModified: new Date(),
    },
    {
      url: "https://www.bindhomes.com/works",
      lastModified: new Date(),
    },
    {
      url: "https://www.bindhomes.com/projects",
      lastModified: new Date(),
    },
    {
      url: "https://bindhomes.com/",
      lastModified: new Date(),
    },
    {
        url: "https://bindhomes.com/contact",
        lastModified: new Date(),
      },
      {
        url: "https://bindhomes.com/about",
        lastModified: new Date(),
      },
      {
        url: "https://bindhomes.com/frequently-asked-questions",
        lastModified: new Date(),
      },
      {
        url: "https://bindhomes.com/works",
        lastModified: new Date(),
      },
      {
        url: "https://bindhomes.com/projects",
        lastModified: new Date(),
      },
  ];
}