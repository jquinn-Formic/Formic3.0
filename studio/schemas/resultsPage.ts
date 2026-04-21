export default {
  name: 'resultsPage',
  title: 'Results Page',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  fields: [
    {
      name: 'bigStats', title: 'Big Stats Bar', type: 'array',
      validation: (R: any) => R.max(4),
      of: [{ type: 'object', fields: [
        { name: 'value', title: 'Value', type: 'string' },
        { name: 'label', title: 'Label', type: 'string' },
        { name: 'description', title: 'Description', type: 'text', rows: 2 },
      ]}]
    },
    {
      name: 'outcomes', title: 'Outcome Sections', type: 'array',
      of: [{ type: 'object', fields: [
        { name: 'number', title: 'Number', type: 'string' },
        { name: 'label', title: 'Label', type: 'string' },
        { name: 'headline', title: 'Headline', type: 'string' },
        { name: 'body', title: 'Body', type: 'text', rows: 3 },
        { name: 'evidencePoints', title: 'Evidence Points', type: 'array', of: [{ type: 'string' }] },
      ]}]
    }
  ]
}
