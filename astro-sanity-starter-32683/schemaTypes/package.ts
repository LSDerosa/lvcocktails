import { defineType, defineField } from 'sanity';

export default defineType({
    name: 'package',
    title: 'Package',
    type: 'document',
    fields: [
        defineField({ name: 'name', title: 'Name', type: 'string' }),
        defineField({ name: 'summary', title: 'Summary', type: 'text' }),
        defineField({ name: 'order', title: 'Order', type: 'number' }),
    ],
    orderings: [{ name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }],
});
