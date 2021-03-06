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
    slug,
  } = posts.nodes[0];

  return (
    <section className="mt-4 rounded">
      <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
        <Link href={`/${slug}`}>
          <a className="max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline grid lg:grid-cols-2 bg-white rounded">
            <div className="relative">
              <Image
                src={featuredImage?.node.sourceUrl}
                alt={featuredTitle}
                className="h-64 object-cover rounded sm:h-96"
                layout="fill"
              />
            </div>
            <div className="p-6 space-y-2">
              <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
                {featuredTitle}
              </h3>
              <span className="text-xs">
                {new Date(modified).toDateString()}
              </span>
              <div dangerouslySetInnerHTML={{ __html: excerpt }}></div>
            </div>
          </a>
        </Link>
        <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.nodes
            .slice(1)
            .map((post) => {
              return (
                <Link key={post.slug} href={`/${post.slug}`}>
                  <a className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-white shadow-md hover:scale-105">
                    <div className="relative w-full h-44">
                      <Image
                        role="presentation"
                        className="object-cover  rounded dark:bg-gray-500"
                        src={post.featuredImage.node.sourceUrl}
                        alt=""
                        layout="fill"
                      />
                    </div>
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
            })
            .sort()}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
