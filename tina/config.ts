import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "master";

export default defineConfig({
  branch,
  clientId: "0c2b5b24-b1f8-466b-a2f1-10a1b58f640f", // Get this from tina.io
  token: "9a65342e89dd83d07c0fb26ceec3bfaebe2a293e", // Get this from tina.io

  build: {
    outputFolder: "admin",
    publicFolder: "docs/.vuepress/public",
  },

  search: {
    tina: {
      indexerToken: '322d31601aada3fbd8efe6cf1e87afa41dd29cd3',
      stopwordLanguages: ['eng']
    },
    indexBatchSize: 100,
    maxSearchIndexFieldLength: 100
  },


  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "docs/.vuepress/public/media",
    },
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "docs",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
    ],
  },
});
