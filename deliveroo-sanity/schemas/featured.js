export default {
  name: 'featured',
  title: 'Featured',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Featured Category name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'short_description',
      title: 'Short Description',
      type: 'string',
      validation: (Rule) => Rule.max(200),
    },
    {
      name: 'restaurant',
      title: 'Restaurants',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'restaurant'}]}],
    },
  ],
}
// import {defineField, defineType} from 'sanity'

// export default defineType({
//   name: 'featured',
//   title: 'Featured',
//   type: 'document',
//   fields: [
//     defineField({
//       name: 'name',
//       title: 'Featured Category name',
//       type: 'string',
//       validation: (Rule) => Rule.required(),
//     }),
//     defineField({
//       name: 'short_description',
//       title: 'Short Description',
//       type: 'string',
//       validation: (Rule) => Rule.max(200),
//     }),
//     defineField({
//       name: 'restaraunts',
//       title: 'Restaurants',
//       type: 'array',
//       of: [{type: 'reference', to: [{type: 'restaraunt'}]}],
//     }),
//   ],
// })
