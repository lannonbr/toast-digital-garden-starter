/** @jsx h */
import { h } from "preact";
import { Helmet } from "react-helmet";
import { MDXProvider } from "@mdx-js/preact";

export default ({ children, ...props }) => {
  return (
    <div>
      <Helmet>
        <link rel="stylesheet" href="style.css" />
      </Helmet>
      <header className="bg-green-400 p-2">
        <div className="flex max-w-6xl w-full mx-auto">
          <h1 className="flex-1">
            <a href="/">Toast Digital Garden Starter</a>
          </h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/garden">Garden</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <MDXProvider
        components={{
          h1: (props) => <h1 className="text-4xl" {...props} />,
        }}
      >
        <div className="max-w-6xl mx-auto px-2">{children}</div>
      </MDXProvider>
    </div>
  );
};
