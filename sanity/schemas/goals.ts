import { Rule } from 'sanity';

export default {
  name: 'goal',
  title: 'Goal',
  type: 'document',
  fields: [
    {
      name: 'description',
      title: 'Description',
      type: 'string',
      validation: (Rule: Rule) => Rule.required().min(10).max(200)
    },
    {
      name: 'year',
      title: 'Year',
      type: 'number',
      validation: (Rule: Rule) => Rule.required().min(2023).max(2030)
    }
  ]
};