# Toast Digital Garden Starter

A Digital Garden template built using [Toast](https://github.com/ChristopherBiscardi/toast/).

## Setup

1. Clone and install dependencies. This will also create a `public/web_modules` folder which will include the needed npm modules when shipped up to the cloud.
1. Run `yarn build` / `npm run build` to build the site.
1. Host on a web server. `npx http-server public` will host it on your local machine at `localhost:8080`.

## Images w/ Cloudinary

I'm using [rehype-local-image-to-cloudinary](https://github.com/jlengstorf/rehype-local-image-to-cloudinary) to take local images and upload them to Cloudinary.

Read through that readme to learn how to set it up. If you want to modify the usage of it, it is in the `rehypePlugins` array in the `mdx()` call in `fetch-mdx-posts.js`.
