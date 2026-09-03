import { defineField, defineType } from 'sanity';

export const studioMember = defineType({
  name: 'studioMember',
  title: 'Studio Member',
  type: 'document',
  fields: [
    defineField({ name: 'name', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'role', type: 'string' }),
    defineField({
      name: 'photo',
      type: 'image',
      fields: [
        defineField({ name: 'alt', type: 'string', validation: (r) => r.required() }),
      ],
    }),
    defineField({ name: 'bio', type: 'text', rows: 4 }),
    defineField({ name: 'orderRank', type: 'number' }),
  ],
});
