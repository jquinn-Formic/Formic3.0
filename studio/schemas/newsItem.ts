export default {
  name: 'newsItem',
  title: 'News Item',
  type: 'document',
  fields: [
    { name: 'headline', title: 'Headline', type: 'string' },
    { name: 'summary', title: 'Summary', type: 'text', rows: 3 },
    { name: 'date', title: 'Date', type: 'date' },
    { name: 'link', title: 'Link URL', type: 'url' },
    { name: 'externalLink', title: 'Opens in new tab', type: 'boolean' },
  ],
  orderings: [{ title: 'Newest First', name: 'dateDesc', by: [{ field: 'date', direction: 'desc' }] }],
  preview: { select: { title: 'headline', subtitle: 'date' } }
}
