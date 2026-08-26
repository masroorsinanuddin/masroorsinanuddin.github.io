import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE } from '../config';

export async function GET(context) {
  const entries = [...await getCollection('projects'), ...await getCollection('notes')]
    .filter(({ data }) => !data.draft).sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
  return rss({
    title: SITE.title, description: SITE.description, site: context.site,
    items: entries.map((entry) => ({
      title: entry.data.title, description: entry.data.description, pubDate: entry.data.date,
      link: `${entry.collection}/${entry.id}/`,
    })),
  });
}
