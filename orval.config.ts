import { faker } from "@faker-js/faker";
import { defineConfig } from "orval";

const INPUT = "./src/openapi/spec.yaml";

export default defineConfig({
  pet: {
    output: {
      workspace: "src/",
      target: "./openapi/__service__/swagger.ts",
      client: "axios",
      mode: "split",
      mock: true,
      clean: true,
      override: {
        title: (title) => {
          return 'Api'
        },
        components: {
          schemas: {
            suffix: "DTO",
          },
          responses: {
            suffix: "Response",
          },
          parameters: {
            suffix: "Params",
          },
          requestBodies: {
            suffix: "Bodies",
          },
        },
      },
    },
    input: {
      target: INPUT,
    },
    hooks: {
      afterAllFilesWrite: "prettier --write",
    },
  },
});
