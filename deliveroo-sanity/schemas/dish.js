export default {
  name: 'dish',
  title: 'Dish',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name of dish',
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
      name: 'price',
      title: 'Price of the dish in $',
      type: 'number',
    },
    {
      name: 'image',
      title: 'Image of the dish',
      type: 'image',
    },
  ],
}
// import {defineField, defineType} from 'sanity'

// export default defineType({
//   name: 'dish',
//   title: 'Dish',
//   type: 'document',
//   fields: [
//     defineField({
//       name: 'name',
//       title: 'Name of dish',
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
//       name: 'price',
//       title: 'Price of the dish in $',
//       type: 'number',
//     }),
//     defineField({
//       name: 'image',
//       title: 'Image of the dish',
//       type: 'image',
//     }),
//   ],
// })
