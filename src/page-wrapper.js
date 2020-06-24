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
          inlineCode: ({ children }) => (
            <code
              style={{
                backgroundColor: "rgb(1,22,39)",
                padding: 3,
                margin: 3,
                borderRadius: 5,
                color: "#f0f0f0",
              }}
            >
              {children}
            </code>
          ),
          pre: (props) => {
            return (
              <div
                dangerouslySetInnerHTML={{
                  __html: props.children.props.children,
                }}
              />
            );
          },
        }}
      >
        <div className="max-w-6xl mx-auto px-2">{children}</div>
      </MDXProvider>
    </div>
  );
};
