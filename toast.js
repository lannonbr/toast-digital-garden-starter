// Code credit to Chris Biscardi

import * as MDXPostsSource from "./fetch-mdx-posts.js";

export const sourceData = async ({ setData, createPage }) => {
  const mdxPostsData = await MDXPostsSource.sourceData({ createPage });

  // prep page data for index and post pages
  const allPostsData = mdxPostsData.map(
    ({ title, date, slug, description }) => ({
      title,
      updatedAt: date,
      slug,
      description,
      contentType: "post",
    })
  );

  await setData({ slug: "/garden", data: { posts: allPostsData } });

  // index.html
  const topPostsData = allPostsData
    .sort((b, a) => {
      const da = new Date(a.updatedAt).getTime();
      const db = new Date(b.updatedAt).getTime();
      if (da < db) return -1;
      if (da === db) return 0;
      if (da > db) return 1;
    })
    .filter(({ contentType }) => contentType === "post")
    .slice(0, 5);

  await setData({ slug: "/", data: { posts: topPostsData } });
};
