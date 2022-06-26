import React, { useState, useEffect } from "react";

const PostDetails = ({ post }) => {
  const [render, setRender] = useState(false);
  const { title, content, featuredImage } = post;

  useEffect(() => {
    setRender(true);
  }, []);

  return (
    <div>
      <img src={featuredImage.node.sourceUrl} alt="" />
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: render && content }}></div>
    </div>
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
