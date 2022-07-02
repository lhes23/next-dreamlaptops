import Head from "next/head";
import BlogSection from "../components/BlogSection";
import HeroSection from "../components/HeroSection";
import Nav from "../components/Nav";
import styles from "../styles/Home.module.css";

export default function Home({ posts, generalSettings }) {
  const { title, description } = generalSettings;

  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <Nav />
        <HeroSection title={title} description={description} />
        <BlogSection posts={posts} />
      </main>
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("https://dreamlaptops.com/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `query NewQuery {
        posts {
          nodes {
            featuredImage {
              node {
                sourceUrl
              }
            }
            slug
            title
            content
            modified
            excerpt
          }
        }
        generalSettings {
          title
          description
        }
      }`,
    }),
  });

  const { data } = await res.json();

  return {
    props: {
      posts: data.posts,
      generalSettings: data.generalSettings,
    },
  };
};
