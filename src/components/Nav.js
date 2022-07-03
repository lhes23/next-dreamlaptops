import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <header className="p-4 bg-orange-200 backdrop-blur mb-4">
      <div className="container flex justify-between h-16 mx-auto">
        <Link href="/">
          <a
            aria-label="Back to homepage"
            className="flex items-center p-2 text-xl sm:text-3xl font-semibold"
          >
            Home
          </a>
        </Link>
        {/* <ul className="items-stretch hidden space-x-3 md:flex">
          <li className="flex">
            <Link href="/">
              <a className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">
                Home
              </a>
            </Link>
          </li>
          <li className="flex">
            <Link href="/blog">
              <a className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">
                Blog
              </a>
            </Link>
          </li>
        </ul> */}
        {/* <button
          className="flex justify-end p-4 md:hidden"
          area-label="Button Menu for mobile"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button> */}
      </div>
    </header>
  );
};

export default Nav;

// export const getServerSideProps = async () => {
//   const res = await fetch("https://dreamlaptops/graphql", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({
//       query: `menu(id: "secondary-menu", idType: SLUG) {
//                 name
//                 slug
//                 menuItems {
//                   edges {
//                     node {
//                       label
//                     }
//                   }
//                 }
//               }`,
//     }),
//   });

//   const { data } = res.json();
//   console.log(res);
//   return {
//     props: {
//       data,
//     },
//   };
// };
