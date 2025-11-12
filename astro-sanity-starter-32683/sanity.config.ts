import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';

// Import all of your custom document types
import siteSettings from './schematypes/siteSettings';
import homepage from './schematypes/homepage';
import pkg from './schematypes/package';
import testimonial from './schematypes/testimonial';
import faq from './schematypes/faq';

export default defineConfig({
  name: 'default',
  title: 'L&V Cocktails Studio',

  projectId: 'bwn1uu6l',     // keep your actual projectId
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: [siteSettings, homepage, pkg, testimonial, faq],
  },
});
