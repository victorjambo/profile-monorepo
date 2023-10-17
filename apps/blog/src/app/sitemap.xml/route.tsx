import { NextResponse } from "next/server";
import { allBlogs } from "../../../.contentlayer/generated";

export function GET(): NextResponse {
  const baseUrl = "https://blog.mutai.dev";

  const blogs = allBlogs.filter((blog) => blog.published);

  const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>${baseUrl}/</loc>
    </url>
    <url>
      <loc>${baseUrl}/logs</loc>
    </url>
    ${blogs
      .map(({ slug }) => {
        return `
      <url>
          <loc>${`${baseUrl}/logs/${slug}`}</loc>
      </url>
    `;
      })
      .join("")}
  </urlset>`;

  return new NextResponse(xmlContent, {
    headers: { "Content-Type": "text/xml" },
  });
}
