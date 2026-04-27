export default {
  name: 'companyPage',
  title: 'Company Page',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  fields: [
    { name: 'heroHeadline', title: 'Hero Headline', type: 'string' },
    { name: 'heroSubtext', title: 'Hero Subtext', type: 'text', rows: 3 },
    {
      name: 'missionStats', title: 'Mission Stats', type: 'array',
      validation: (R: any) => R.max(3),
      of: [{ type: 'object', fields: [
        { name: 'value', title: 'Value', type: 'string' },
        { name: 'label', title: 'Label', type: 'string' },
      ]}]
    },
    { name: 'missionBody1', title: 'Mission Paragraph 1', type: 'text', rows: 5 },
    { name: 'missionBody2', title: 'Mission Paragraph 2', type: 'text', rows: 5 },
    {
      name: 'values', title: 'Core Values', type: 'array',
      validation: (R: any) => R.max(3),
      of: [{ type: 'object', fields: [
        { name: 'label', title: 'Value Label', type: 'string' },
        { name: 'headline', title: 'Headline', type: 'string' },
        { name: 'body', title: 'Body', type: 'text', rows: 4 },
      ]}]
    },
    { name: 'careersHeadline', title: 'Careers Headline', type: 'string' },
    { name: 'careersBody', title: 'Careers Body', type: 'text', rows: 4 },
  ]
}
