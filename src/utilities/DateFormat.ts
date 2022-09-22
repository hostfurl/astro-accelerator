import type { Site } from '../config';

type FrontMatter = Record<string, any>;

export const formatDate = (frontmatter: FrontMatter, lang: string, site: Site) => {
  const date = frontmatter.pubDate ?? '';

  if (date) {
    return new Date(date).toLocaleDateString(lang, site.dateOptions);
  }
  
  return '';
}