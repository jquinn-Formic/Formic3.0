export default {
  name: 'customerStory',
  title: 'Customer Story',
  type: 'document',
  fields: [
    { name: 'companyName', title: 'Company Name', type: 'string' },
    { name: 'industry', title: 'Industry & Location', type: 'string' },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'companyName' } },
    { name: 'systemCount', title: 'Number of Systems', type: 'number' },
    { name: 'systemCountLabel', title: 'System Count Label', type: 'string' },
    { name: 'challenge', title: 'Challenge (card)', type: 'text', rows: 2 },
    { name: 'win', title: 'Win (card)', type: 'text', rows: 2 },
    { name: 'challengeFull', title: 'Challenge (full story)', type: 'text', rows: 4 },
    { name: 'solutionFull', title: 'Solution (full story)', type: 'text', rows: 4 },
    {
      name: 'stats', title: 'Story Stats', type: 'array',
      validation: (R: any) => R.max(4),
      of: [{ type: 'object', fields: [
        { name: 'value', title: 'Value', type: 'string' },
        { name: 'label', title: 'Label', type: 'string' },
      ]}]
    },
    { name: 'outcomeTags', title: 'Outcome Tags', type: 'array', of: [{ type: 'string' }] },
    { name: 'quote', title: 'Customer Quote', type: 'text' },
    { name: 'quoteName', title: 'Quote Attribution', type: 'string' },
    { name: 'image', title: 'Story Image', type: 'image', options: { hotspot: true } },
    { name: 'order', title: 'Display Order', type: 'number' },
    { name: 'featured', title: 'Featured on Homepage', type: 'boolean' },
  ],
  orderings: [{ title: 'Display Order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }],
  preview: { select: { title: 'companyName', subtitle: 'industry' } }
}
