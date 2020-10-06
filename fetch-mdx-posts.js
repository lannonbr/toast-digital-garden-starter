// Code credit to Chris Biscardi

import { promises as fs } from "fs";
import path from "path";
import frontmatter from "gray-matter";
import mdx from "@mdx-js/mdx";
import rehypeSlug from "rehype-slug";
import cloudinary from "rehype-local-image-to-cloudinary";
import rehypePrism from "./rehype-prism-plugin.cjs";

export const sourceData = async ({ createPage, ...options }) => {
  console.log("sourceData");
  const files = await fs.readdir("./content/posts/");

  return Promise.all(
    files.map(async (filename) => {
      const file = await fs.readFile(
        `./content/posts/${filename}/index.mdx`,
        "utf-8"
      );
      let compiledMDX;

      const { data, content } = frontmatter(file);

      try {
        compiledMDX = await mdx(content, {
          rehypePlugins: [
            rehypePrism,
            rehypeSlug,
            [
              cloudinary,
              {
                baseDir: path.join(".", "content", "posts", filename),
                uploadFolder: "toast-test",
              },
            ],
          ],
        });
      } catch (e) {
        console.log(e);
        throw e;
      }

      await createPage({
        module: `/** @jsx mdx */
            import {mdx} from '@mdx-js/preact';
            ${compiledMDX}`,
        slug: filename,
        data: { ...data, slug: filename },
      });

      // Data to be stored in `mdx-posts.json` file
      return {
        ...data,
        slug: filename,
      };
    })
  );
};
