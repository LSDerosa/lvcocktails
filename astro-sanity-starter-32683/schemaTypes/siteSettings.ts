import { defineType, defineField } from 'sanity';

export default defineType({
    name: 'siteSettings',
    title: 'Site Settings',
    type: 'document',
    fields: [
        defineField({ name: 'brand', title: 'Brand Name', type: 'string' }),
        defineField({ name: 'region', title: 'Service Region', type: 'string' }),
        defineField({ name: 'phone', title: 'Phone', type: 'string' }),
        defineField({ name: 'email', title: 'Email', type: 'string' }),
        defineField({ name: 'instagram', title: 'Instagram URL', type: 'url' }),
    ],
});
