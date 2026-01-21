import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Deepanshu Sharma | Software Engineer",
    short_name: "Deepanshu Sharma",
    description:
      "Deepanshu Sharma - Software Engineer working building scalable software systems.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "64x64",
        type: "image/png",
      },
      {
        src: "/favicon.ico",
        sizes: "64x64",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    categories: [
      "portfolio",
      "software engineering",
      "developer",
      "backend developer",
      "full stack developer",
      "golang developer",
      "python developer",
      "react developer",
      "typescript developer",
      "software development",
      "web development",
    ],
    lang: "en",
    dir: "ltr",
    scope: "/",
  };
}
