import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './studio/schemas';

const singletonTypes = new Set([
  'siteSettings', 'homePage', 'platformPage', 'fullServicePage',
  'solutionsPage', 'resultsPage', 'customersPage', 'companyPage',
]);

export default defineConfig({
  name: 'formic-studio',
  title: 'Formic CMS',
  projectId: process.env.SANITY_STUDIO_PROJECT_ID ?? 'placeholder',
  dataset: process.env.SANITY_STUDIO_DATASET ?? 'production',
  plugins: [
    structureTool({
      structure: (S) =>
        S.list().title('Content').items([
          S.listItem().title('Site Settings').id('siteSettings')
            .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
          S.listItem().title('Home Page').id('homePage')
            .child(S.document().schemaType('homePage').documentId('homePage')),
          S.listItem().title('Platform Page').id('platformPage')
            .child(S.document().schemaType('platformPage').documentId('platformPage')),
          S.listItem().title('Full Service Page').id('fullServicePage')
            .child(S.document().schemaType('fullServicePage').documentId('fullServicePage')),
          S.listItem().title('Solutions Page').id('solutionsPage')
            .child(S.document().schemaType('solutionsPage').documentId('solutionsPage')),
          S.listItem().title('Results Page').id('resultsPage')
            .child(S.document().schemaType('resultsPage').documentId('resultsPage')),
          S.listItem().title('Customers Page').id('customersPage')
            .child(S.document().schemaType('customersPage').documentId('customersPage')),
          S.listItem().title('Company Page').id('companyPage')
            .child(S.document().schemaType('companyPage').documentId('companyPage')),
          S.divider(),
          S.documentTypeListItem('customerStory').title('Customer Stories'),
          S.documentTypeListItem('newsItem').title('News Items'),
        ])
    }),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
    templates: (prev: any[]) => prev.filter(({ schemaType }: any) => !singletonTypes.has(schemaType)),
  },
});
