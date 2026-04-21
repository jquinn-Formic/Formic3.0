export default {
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  fields: [
    { name: 'heroLabel', title: 'Hero Label', type: 'string' },
    { name: 'heroHeadline', title: 'Hero Headline', type: 'string' },
    { name: 'heroSubtext', title: 'Hero Subtext', type: 'text', rows: 3 },
    { name: 'magicLabel', title: 'Magic Section Label', type: 'string' },
    { name: 'magicHeadline', title: 'Magic Section Headline', type: 'string' },
    { name: 'magicSubtext', title: 'Magic Section Body', type: 'text', rows: 4 },
    {
      name: 'stats', title: 'Stats Row', type: 'array',
      validation: (R: any) => R.max(4),
      of: [{ type: 'object', fields: [
        { name: 'value', title: 'Value', type: 'string' },
        { name: 'label', title: 'Label', type: 'string' },
      ]}]
    },
    { name: 'pullQuote', title: 'Pull Quote', type: 'text' },
    { name: 'pullQuoteCite', title: 'Quote Attribution', type: 'string' },
    {
      name: 'featuredStories', title: 'Featured Customer Stories', type: 'array',
      validation: (R: any) => R.max(4),
      of: [{ type: 'reference', to: [{ type: 'customerStory' }] }]
    },
  ]
}
