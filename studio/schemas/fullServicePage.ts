export default {
  name: 'fullServicePage',
  title: 'Full Service Page',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  fields: [
    { name: 'heroHeadline', title: 'Hero Headline', type: 'string' },
    { name: 'heroSubtext', title: 'Hero Subtext', type: 'text', rows: 3 },
    {
      name: 'processSteps', title: 'How It Works Steps', type: 'array',
      of: [{ type: 'object', fields: [
        { name: 'timeLabel', title: 'Time Label', type: 'string' },
        { name: 'headline', title: 'Headline', type: 'string' },
        { name: 'body', title: 'Body', type: 'text', rows: 4 },
      ]}]
    },
    {
      name: 'slaStats', title: 'SLA Stats', type: 'array',
      validation: (R: any) => R.max(3),
      of: [{ type: 'object', fields: [
        { name: 'value', title: 'Value', type: 'string' },
        { name: 'label', title: 'Label', type: 'string' },
        { name: 'description', title: 'Description', type: 'text', rows: 2 },
      ]}]
    },
  ]
}
