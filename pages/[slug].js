import React, { useState, useEffect } from "react";

const PostDetails = ({ post }) => {
  const [render, setRender] = useState(false);
  const { title, content, featuredImage, author } = post;
  const { name } = author.node;

  useEffect(() => {
    setRender(true);
  }, []);

  return (
    <>
      <div>
        <img src={featuredImage.node.sourceUrl} alt="" />
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: render && content }}></div>
      </div>

      <div className="p-5 mx-auto sm:p-10 md:p-16 dark:bg-gray-800 dark:text-gray-100">
        <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
          <img
            src={featuredImage.node.sourceUrl}
            alt=""
            className="w-full h-60 sm:h-96 dark:bg-gray-500"
          />
          <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md dark:bg-gray-900">
            <div className="space-y-2">
              <a
                rel="noopener noreferrer"
                href="#"
                className="inline-block text-2xl font-semibold sm:text-3xl"
              >
                {title}
              </a>
              <p className="text-xs dark:text-gray-400">
                By{" "}
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="text-xs hover:underline"
                >
                  {name}
                </a>
              </p>
            </div>
            <div className="dark:text-gray-100">
              <div
                dangerouslySetInnerHTML={{ __html: render && content }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostDetails;

export async function getStaticProps(ctx) {
  const res = await fetch("https://dreamlaptops.com/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      variables: {
        id: ctx.params.slug,
        idType: "SLUG",
      },
      query: `
        query SinglePost($id:ID!, $idType: PostIdType!) {
          post(id: $id, idType: $idType) {
            id
            content
            featuredImage {
              node {
                sourceUrl
              }
            }
            slug
            title
            author {
              node {
                name
              }
            }
          }
        }
          `,
    }),
  });

  const data = await res.json();
  return {
    props: {
      post: data.data.post,
    },
  };
}

export async function getStaticPaths() {
  const res = await fetch("https://dreamlaptops.com/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
              query GetAllPostsQuery {
                  posts {
                    nodes {
                      content
                      featuredImage {
                        node {
                          sourceUrl
                        }
                      }
                      slug
                      title
                    }
                  }
                }
              `,
    }),
  });
  const data = await res.json();
  const posts = data.data.posts.nodes;

  const paths = posts.map((post) => ({ params: { slug: post.slug } }));
  console.log(paths);

  return {
    paths,
    fallback: false,
  };
}
