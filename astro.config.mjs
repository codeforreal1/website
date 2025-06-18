// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
// import openGraphImages, { presets } from "astro-opengraph-images";
// import * as fs from "fs";
// import * as path from "path";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath } from "url";
import { dirname } from "path";
// import { renderOg } from "./src/utils/og-renderer";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

export default defineConfig({
  site: "https://codeforreal.com",
  integrations: [
    mdx(),
    sitemap(),
    // openGraphImages({
    //   options: {
    //     fonts: [
    //       {
    //         name: "Poppins",
    //         weight: 400,
    //         style: "normal",
    //         data: fs.readFileSync(
    //           path.join(
    //             __dirname,
    //             "node_modules/@fontsource/poppins/files/poppins-latin-400-normal.woff"
    //           )
    //         ),
    //       },
    //     ],
    //   },
    //   render: presets.blackAndWhite,
    // }),
  ],
  outDir: "docs",
  vite: {
    plugins: [tailwindcss()],
    build: {
      rollupOptions: {
        external: ["@resvg/resvg-js"],
      },
    },
  },
});
