import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const sanityClient = createClient({
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID ?? 'placeholder',
  dataset: import.meta.env.PUBLIC_SANITY_DATASET ?? 'production',
  apiVersion: '2026-04-21',
  useCdn: true,
});

const builder = imageUrlBuilder(sanityClient);
export function urlFor(source: any) {
  return builder.image(source);
}

export async function getHomePage() {
  return sanityClient.fetch(`*[_type == "homePage"][0]{
    heroLabel, heroHeadline, heroSubtext,
    magicLabel, magicHeadline, magicSubtext,
    stats,
    pullQuote, pullQuoteCite,
    featuredStories[]->{
      companyName, systemCount, systemCountLabel,
      challenge, win, "imageUrl": image.asset->url
    }
  }`);
}

export async function getPlatformPage() {
  return sanityClient.fetch(`*[_type == "platformPage"][0]`);
}

export async function getFullServicePage() {
  return sanityClient.fetch(`*[_type == "fullServicePage"][0]`);
}

export async function getSolutionsPage() {
  return sanityClient.fetch(`*[_type == "solutionsPage"][0]`);
}

export async function getResultsPage() {
  return sanityClient.fetch(`*[_type == "resultsPage"][0]`);
}

export async function getCustomersPage() {
  return sanityClient.fetch(`*[_type == "customersPage"][0]`);
}

export async function getCompanyPage() {
  return sanityClient.fetch(`*[_type == "companyPage"][0]`);
}

export async function getCustomerStories() {
  return sanityClient.fetch(`
    *[_type == "customerStory"] | order(order asc) {
      _id, companyName, industry, systemCount, systemCountLabel,
      challenge, win, challengeFull, solutionFull,
      stats, outcomeTags, quote, quoteName,
      "imageUrl": image.asset->url,
      featured
    }
  `);
}

export async function getNewsItems(limit: number = 3) {
  return sanityClient.fetch(`
    *[_type == "newsItem"] | order(date desc) [0...$limit] {
      _id, headline, summary, date, link, externalLink
    }
  `, { limit });
}

export async function getSiteSettings() {
  return sanityClient.fetch(`*[_type == "siteSettings"][0]`);
}
