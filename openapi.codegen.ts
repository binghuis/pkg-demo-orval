import { faker } from '@faker-js/faker';
import { defineConfig } from 'orval';

export default defineConfig({
  petstore: {
    output: {
      target: 'src/api/openapi/__service__',
    },
    input: {
      target: 'src/openapi/spec.json',
    },
  },
});