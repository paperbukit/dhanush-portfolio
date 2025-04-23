export default {
  name: 'skills',
  title: 'Skills',
  type: 'document',
  fields: [
    {
      name: 'programming',
      title: 'Programming',
      type: 'array',
      of: [{ type: 'string' }]
    },
    {
      name: 'webDevelopment',
      title: 'Web Development',
      type: 'array',
      of: [{ type: 'string' }]
    },
    {
      name: 'databases',
      title: 'Databases',
      type: 'array',
      of: [{ type: 'string' }]
    },
    {
      name: 'tools',
      title: 'Tools',
      type: 'array',
      of: [{ type: 'string' }]
    },
    {
      name: 'interests',
      title: 'Interests',
      type: 'array',
      of: [{ type: 'string' }]
    }
  ]
}