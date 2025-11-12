import { defineType, defineField } from 'sanity';

export default defineType({
    name: 'homepage',
    title: 'Homepage',
    type: 'document',
    fields: [
        defineField({ name: 'heroTitle', title: 'Hero Title', type: 'string' }),
        defineField({ name: 'heroSub', title: 'Hero Subhead', type: 'text' }),
        defineField({
            name: 'gallery',
            title: 'Gallery',
            type: 'array',
            of: [{
                type: 'image', options: { hotspot: true }, fields: [
                    { name: 'alt', title: 'Alt text', type: 'string' }
                ]
            }],
        }),
    ],
});
