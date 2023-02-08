import { faker } from "@faker-js/faker";
import { defineConfig } from "orval";

const INPUT = "./src/openapi/spec.yaml";

export default defineConfig({
  pet: {
    output: {
      workspace: "src/openapi",
      target: "./__service__/swagger.ts",
      client: "axios",
      mode: "split",
      mock: true,
      clean: true,
      override: {
        title: (title) => {
          return "Api";
        },
        mutator: {
          path: './custom-instance.ts',
          name: 'customInstance',
        },
        header: (info) => [
          `此类型文件由swagger解析自动生成，请勿修改`,
          "<==================================>",
          info.title,
          ...(info.version ? [`OpenAPI spec version: ${info.version}`] : []),
          ...(info.description?.match(/.{1,120}/g) ?? []),
        ].filter(Boolean),
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
