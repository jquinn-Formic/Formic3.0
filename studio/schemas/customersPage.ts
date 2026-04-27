export default {
  name: 'customersPage',
  title: 'Customers Page',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  fields: [
    { name: 'heroQuote', title: 'Hero Pull Quote', type: 'text', rows: 4 },
    { name: 'heroQuoteCite', title: 'Quote Attribution', type: 'string' },
    {
      name: 'communityCards', title: 'Community Cards', type: 'array',
      validation: (R: any) => R.max(3),
      of: [{ type: 'object', fields: [
        { name: 'label', title: 'Label', type: 'string' },
        { name: 'headline', title: 'Headline', type: 'string' },
        { name: 'body', title: 'Body', type: 'text', rows: 4 },
        { name: 'ctaText', title: 'CTA Text', type: 'string' },
      ]}]
    }
  ]
}
