import { getAllPosts } from "../lib/api";
import type { GetServerSidePropsContext } from "next/types";

// https://www.sandromaglione.com/techblog/how-to-add-dynamic-sitemap-nextjs-blog

// Change this with your website URL
const WEBSITE_URL = "https://www.pablob.eu";

// TODO: You could add a custom `priority` and `changefreq` for each page
// https://www.sitemaps.org/protocol.html

export async function getServerSideProps({ res }: GetServerSidePropsContext) {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "width",
    "height",
    "excerpt",
    "hidden",
  ]);

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
      <loc>${WEBSITE_URL}</loc>
      <lastmod>2023-01-01T13:30:00.000Z</lastmod>
      <priority>1.00</priority>
      <changefreq>weekly</changefreq>
      </url>
    ${allPosts
      .map(
        ({ slug, date }) => `<url>
      <loc>${WEBSITE_URL}/posts/${slug}</loc>
      <lastmod>${date}</lastmod>
      <priority>0.80</priority>
      <changefreq>monthly</changefreq>
      </url>`
      )
      .join("\n")}
    </urlset>`;
  if (res) {
    res.setHeader("Content-Type", "text/xml");
    res.write(sitemap);
    res.end();
  }

  return { props: {} };
}

const Sitemap: React.FC = () => null;
export default Sitemap;
