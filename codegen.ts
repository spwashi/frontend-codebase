import { CodegenConfig } from "@graphql-codegen/cli";
import { GRAPHQL_URL } from "./src/app/@core/constants";

const config: CodegenConfig = {
  schema: "http://localhost:4000/graphql",
  documents: ["src/**/*.graphql"],
  generates: {
    "./src/__generated__/": {
      preset: "client",
      plugins: ["typescript", "typescript-operations"],
      presetConfig: {
        gqlTagName: "appGql",
      },
    },
  },
  ignoreNoDocuments: true,
};

export default config;
