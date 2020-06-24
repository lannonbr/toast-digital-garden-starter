# Toast Digital Garden Starter

A Digital Garden template built using [Toast](https://github.com/ChristopherBiscardi/toast/).

## Setup

1. Clone and install dependencies. This will also create a `public/web_modules` folder which will include the needed npm modules when shipped up to the cloud.
1. Run `yarn build` / `npm run build` to build the site.
1. Host on a web server. `npx http-server public` will host it on your local machine at `localhost:8080`.

## Images w/ Cloudinary

I'm using [rehype-local-image-to-cloudinary](https://github.com/jlengstorf/rehype-local-image-to-cloudinary) to take local images and upload them to Cloudinary.

Read through that readme to learn how to set it up. If you want to modify the usage of it, it is in the `rehypePlugins` array in the `mdx()` call in `fetch-mdx-posts.js`.

## Syntax Highlighting w/ PrismJS

Chris also created a rehype plugin for prism code blocks so prismjs was not shipped down to the client and only built at runtime. `rehype-prism-plugin.js` is closely based on such.

The theme being used by default is NightOwl, but can be changed by modifying the require statement at the top of `rehype-prism-plugin.js`:

```js
//...
const theme = require("prism-react-renderer/themes/<theme>");
```

Or create a JS object that mirrors the prism theme syntax. The built in ones from `prism-react-renderer` are here: https://github.com/FormidableLabs/prism-react-renderer/tree/master/src/themes
