/** @jsx h */
import { h } from "preact";

export default ({ posts }) => {
  return (
    <main>
      <h1 className="text-center text-4xl md:text-left md:text-6xl">
        Digital Garden
      </h1>
      <ul>
        {posts.map((post) => {
          return (
            <article className="py-2 px-3 transition-all duration-200 ease-in-out hover:text-green-700 hover:bg-green-100 mb-2">
              <a
                className="flex items-center text-md md:text-2xl rounded-sm mb-3 hover:no-underline"
                href={`/${post.slug}`}
              >
                {post.title}
              </a>
              <p className="text-sm md:text-base mb-0">{post.description}</p>
            </article>
          );
        })}
      </ul>
    </main>
  );
};
