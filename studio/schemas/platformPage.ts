export default {
  name: 'platformPage',
  title: 'Platform Page',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  fields: [
    { name: 'heroHeadline', title: 'Hero Headline', type: 'string', initialValue: 'Production Ready Intelligence.' },
    { name: 'heroSubtext', title: 'Hero Subtext', type: 'text', rows: 3 },
    {
      name: 'products', title: 'Product Tabs', type: 'array',
      validation: (R: any) => R.max(4),
      of: [{ type: 'object', fields: [
        { name: 'tabNumber', title: 'Tab Number', type: 'string' },
        { name: 'tabName', title: 'Tab Name', type: 'string' },
        { name: 'tabSubtitle', title: 'Tab Subtitle', type: 'string' },
        { name: 'sectionId', title: 'Section Anchor ID', type: 'string' },
        { name: 'label', title: 'Section Label', type: 'string' },
        { name: 'headline', title: 'Headline', type: 'string' },
        { name: 'body', title: 'Body Text', type: 'text', rows: 4 },
        { name: 'features', title: 'Feature List', type: 'array', of: [{ type: 'string' }] },
        { name: 'ctaText', title: 'CTA Text', type: 'string' },
        { name: 'ctaHref', title: 'CTA URL', type: 'string' },
      ]}]
    },
    {
      name: 'architectureCells', title: 'Architecture Grid Cells', type: 'array',
      of: [{ type: 'object', fields: [
        { name: 'tag', title: 'Tag', type: 'string' },
        { name: 'headline', title: 'Headline', type: 'string' },
        { name: 'body', title: 'Body', type: 'text', rows: 3 },
      ]}]
    }
  ]
}
