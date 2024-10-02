import {defineField, defineType} from 'sanity'

export const artistaType = defineType({
  name: 'artista',
  title: 'Artista',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
  ],
})