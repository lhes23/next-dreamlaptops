import Head from "next/head";
import BlogSection from "../components/BlogSection";
import HeroSection from "../components/HeroSection";
import Nav from "../components/Nav";
import styles from "../../styles/Home.module.css";
import Footer from "../components/Footer";

export default function Home({ posts, generalSettings }) {
  const { title, description } = generalSettings;

  console.log(process.env.baseUrl);

  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-gray-300">
        <Nav />
        <HeroSection title={title} description={description} />
        <BlogSection posts={posts} />
      </main>
      <Footer title={title} />
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(process.env.baseUrl, {
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
