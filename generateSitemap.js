import fs from 'fs';
import { SitemapStream, streamToPromise } from 'sitemap';

const hostname = 'https://ameyvijeesh.netlify.com';

const routes = [
  { url: '/', changefreq: 'weekly', priority: 1.0 },
  { url: '/about', changefreq: 'monthly', priority: 0.8 },
  { url: '/myGarage', changefreq: 'monthly', priority: 0.7 },
  { url: '/contact', changefreq: 'monthly', priority: 0.6 },
];

(async () => {
  const sitemap = new SitemapStream({ hostname });

  routes.forEach((route) => {
    sitemap.write(route);
  });

  sitemap.end();

  const xml = await streamToPromise(sitemap).then((data) => data.toString());

  fs.writeFileSync('./public/sitemap.xml', xml);

  console.log('Sitemap generated successfully.');
})();
