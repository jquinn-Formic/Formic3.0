export default {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  fields: [
    { name: 'tagline', title: 'Footer Tagline', type: 'string' },
    { name: 'contactEmail', title: 'Contact Email', type: 'string' },
    { name: 'contactPhone', title: 'Contact Phone', type: 'string' },
    { name: 'ctaHeadline', title: 'Global CTA Headline', type: 'string' },
    { name: 'ctaSubtext', title: 'Global CTA Subtext', type: 'text', rows: 3 },
  ]
}
