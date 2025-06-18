import path from "path";
import * as fs from "node:fs";
import React from "react";
import type { RenderFunctionInput } from "astro-opengraph-images";

const filePath = path.join(
  process.cwd(),
  "src",
  "assets",
  "blog-placeholder.jpg"
);
const imageBase64 = `data:image/png;base64,${fs
  .readFileSync(filePath)
  .toString("base64")}`;

export async function renderOg({
  title,
  description,
}: RenderFunctionInput): Promise<React.ReactNode> {
  return Promise.resolve(
    <div>
      <div>
        <img
          style={{
            ...{ objectFit: "cover" },
          }}
          src={imageBase64}
        />
        <div>
          <h1>{title}</h1>
          <div>{description}</div>
        </div>
      </div>
    </div>
  );
}
