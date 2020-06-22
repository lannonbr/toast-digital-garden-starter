/** @jsx h */
import { h } from "preact";

export default (props) => {
  const posts = props.posts;

  return (
    <main>
      <h1 className="text-center text-4xl md:text-left md:text-6xl">
        Hello World
      </h1>
      <p className="lg:text-xl md:leading-loose mb-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis cum
        sed beatae magnam voluptas labore qui recusandae provident deleniti hic,
        in sit numquam, a laboriosam corrupti libero maxime ducimus accusamus?
      </p>
      <div className="flex items-baseline justify-between px-3 mb-4">
        <h2 className="text-2xl font-bold">New Posts</h2>
        <a className="flex items-center group" href="/garden">
          All Posts
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="h-5 w-5 relative right-0"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </a>
      </div>
      <ul>
        {posts.map((post) => {
          return (
            <li className="mb-3">
              <a
                className="rounded py-2 px-3 flex items-center transition-all duration-200 ease-in-out hover:text-green-700 hover:bg-green-100 hover:no-underline"
                href={`/${post.slug}`}
              >
                {post.title}
              </a>
            </li>
          );
        })}
      </ul>
    </main>
  );
};
