import {defineField, defineType} from 'sanity'

export const artistaType = defineType({
  name: 'aluno',
  title: 'Aluno',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
        name: 'idade',
        type: 'string',
      }),
    defineField({
        name: 'foto',
        type: 'image',
    }),
  ],
})