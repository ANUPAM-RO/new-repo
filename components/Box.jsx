"use client";

import Link from "next/link";

const Box = ({ data }) => {
  return (
    <div className="flex justify-center">
      <a
        href="#"
        className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:h-2/5 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <img
          className="object-cover w-full rounded-t-lg h-full md:w-84 md:rounded-none md:rounded-s-lg"
          src={data?.url}
          alt="cat-image"
        />
        <div className="p-5">
          <span className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {data?.breeds[0]?.name}
          </span>
          <span className="text-gray-600 pl-2">
            {data?.breeds[0]?.alt_names
              ? `(${data?.breeds[0]?.alt_names})`
              : ""}{" "}
          </span>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {data?.breeds[0]?.description}
          </p>
          <div className="flex justify-between pb-2">
            <p className="text-fuchsia-800 font-semibold">
              Origin: {data?.breeds[0]?.origin}
            </p>
            <p className="text-teal-700 font-semibold">
              Intelligence: {data?.breeds[0]?.intelligence}
            </p>
          </div>
          <div className="flex justify-between pb-2">
            <p className="text-violet-700 font-semibold">
              Adaptability: {data?.breeds[0]?.adaptability}
            </p>
            <p className="text-blue-700 font-semibold">
              Child Friendly: {data?.breeds[0]?.child_friendly}
            </p>
          </div>
          <Link
            href={data?.breeds[0]?.wikipedia_url || "link"}
            className="inline-flex justify-center items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Read more
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </Link>
        </div>
      </a>
    </div>
  );
};

export default Box;
