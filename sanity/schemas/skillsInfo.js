export default {
    name: 'skillsInfo',
    title: 'SkillInfo',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        descreiption: 'Title of skill',
        type: 'string'
      },
      {
        name: 'progess',
        title: 'Progress',
        type: 'string'
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true,
        }
      },
    ],
  }