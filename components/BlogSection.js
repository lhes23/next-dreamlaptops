import React from "react";
import Link from "next/link";
import Image from "next/image";

const BlogSection = ({ posts }) => {
  const {
    title: featuredTitle,
    content,
    featuredImage,
    modified,
    excerpt,
  } = posts.nodes[0];

  return (
    <section className="dark:bg-gray-800 dark:text-gray-100">
      <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
        <a
          rel="noopener noreferrer"
          href="#"
          className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-900"
        >
          <img
            src={featuredImage.node.sourceUrl}
            alt=""
            className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500"
            layout="fill"
          />
          <div className="p-6 space-y-2 lg:col-span-5">
            <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
              {featuredTitle}
            </h3>
            <span className="text-xs dark:text-gray-400">
              {new Date(modified).toDateString()}
            </span>
            <div dangerouslySetInnerHTML={{ __html: excerpt }}></div>
          </div>
        </a>
        <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.nodes.slice(1).map((post) => {
            return (
              <Link key={post.slug} href={`/${post.slug}`}>
                <a className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900">
                  <img
                    role="presentation"
                    className="object-cover w-full rounded h-44 dark:bg-gray-500"
                    src={post.featuredImage.node.sourceUrl}
                    alt=""
                  />
                  <div className="p-6 space-y-2">
                    <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                      {post.title}
                    </h3>
                    <span className="text-xs dark:text-gray-400">
                      {new Date(post.modified).toDateString()}
                    </span>

                    <div
                      dangerouslySetInnerHTML={{ __html: post.excerpt }}
                    ></div>
                  </div>
                </a>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
