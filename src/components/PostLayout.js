import Link from "next/link";

const PostLayout = ({ children, posts }) => {
  return (
    <>
      <section className="px-5 py-10 bg-gray-200">
        <div className="container grid grid-cols-12 mx-auto gap-y-6 md:gap-10">
          <div className="relative flex col-span-12 bg-center bg-no-repeat bg-cover lg:col-span-8 md:col-span-9 min-h-96 backdrop-blur shadow-lg rounded bg-white/70">
            {children}
          </div>
          <div className="hidden py-2 xl:col-span-3 lg:col-span-4 md:hidden lg:block">
            <div className="mb-8 space-x-5 border-b-2 border-opacity-10 dark:border-fuchsia-400">
              <span
                type="button"
                className="pb-5 text-xs font-bold uppercase border-b-2 dark:border-fuchsia-400"
              >
                Related Posts
              </span>
            </div>
            <div className="flex flex-col divide-y divide-gray-700">
              {posts.nodes?.map((post) => {
                return (
                  <div className="flex px-1 py-4" key={post.slug}>
                    <img
                      alt=""
                      className="flex-shrink-0 object-cover w-20 h-20 mr-4 dark:bg-gray-500"
                      src={post.featuredImage.node.sourceUrl}
                    />
                    <div className="flex flex-col flex-grow">
                      <Link href={`/${post.slug}`}>
                        <a className="font-serif hover:underline">
                          {post.title}
                        </a>
                      </Link>
                      <p className="mt-auto text-xs dark:text-gray-400">
                        {post.modified}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default PostLayout;
