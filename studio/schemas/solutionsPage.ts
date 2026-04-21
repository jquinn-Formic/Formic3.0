export default {
  name: 'solutionsPage',
  title: 'Solutions Page',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  fields: [
    {
      name: 'solutions', title: 'Solution Categories', type: 'array',
      of: [{ type: 'object', fields: [
        { name: 'number', title: 'Number', type: 'string' },
        { name: 'sectionId', title: 'Anchor ID', type: 'string' },
        { name: 'label', title: 'Label', type: 'string' },
        { name: 'headline', title: 'Headline', type: 'string' },
        { name: 'body', title: 'Body', type: 'text', rows: 4 },
        { name: 'tags', title: 'Tags', type: 'array', of: [{ type: 'string' }] },
        {
          name: 'specs', title: 'Specs', type: 'array',
          of: [{ type: 'object', fields: [
            { name: 'label', title: 'Label', type: 'string' },
            { name: 'value', title: 'Value', type: 'string' },
          ]}]
        },
        { name: 'features', title: 'Features', type: 'array', of: [{ type: 'string' }] },
      ]}]
    }
  ]
}
