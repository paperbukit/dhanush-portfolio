import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import schemas from './schemas';

export default defineConfig({
  name: 'dhanushPortfolio',
  title: 'Dhanush H S Portfolio',

  projectId: 'yzbif6dj', // Updated with your actual project ID
  dataset: 'production', // Updated with your actual dataset name

  plugins: [deskTool()],

  schema: {
    types: schemas,
  },
});