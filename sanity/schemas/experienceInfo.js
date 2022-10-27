export default {
  name: 'experienceInfo',
  title: 'ExperienceInfo',
  type: 'document',
  fields: [
    {
      name: 'jobTitle',
      title: 'JobTitle',
      type: 'string'
    },
    {
      name: 'companyImage',
      title: 'CompanyImage',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'company',
      title: 'Company',
      type: 'text'
    },
    {
      name: 'dateStarted',
      title: 'DateStarted',
      type: 'date'
    },
    {
      name: 'dateEnded',
      title: 'DateEnded',
      type: 'date'
    },
    {
      name: 'currentlyWorking',
      title: 'CurrentlyWorking',
      type: 'boolean'
    },
    {
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'skillsInfo' } }],
    },
    {
      name: 'points',
      title: 'Points',
      type: 'string',
      type: 'array',
      of: [{ type: 'string'}],
    },
  ],
}
