import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "master";

export default defineConfig({
  branch,
  clientId: "615a326f-409d-4dcc-9e51-8eeddb05ed43", // Get this from tina.io
  token: "6d1286e65c59071e741287abdfac0fabe9d79666", // Get this from tina.io

  build: {
    outputFolder: "admin",
    publicFolder: "docs/.vuepress/public",
  },

  search: {
    tina: {
      indexerToken: '9f25aba7091866b8a290e8816a18232489f34106',
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
