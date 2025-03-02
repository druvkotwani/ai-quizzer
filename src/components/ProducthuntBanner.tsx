// components/ProductHuntBanner.jsx
import React from "react";
import Link from "next/link";

const ProductHuntBanner = ({
  url = "#",
  text = "We're live on Product Hunt!",
}) => {
  return (
    <div className="mb-1.5 rounded-full bg-zinc-600 w-fit mx-auto">
      <Link
        href={url}
        target="_blank"
        rel="nofollow"
        className="flex origin-top-left items-center rounded-full border border-zinc-900 bg-white p-0.5 text-sm transition-transform hover:-rotate-2 w-fit"
      >
        <span className="rounded-full bg-[#FF6154] px-2 py-0.5 font-medium text-white">
          HEY!
        </span>
        <span className="ml-1.5 mr-1 inline-block text-black">{text}</span>
        <svg
          stroke="#000"
          fill="#000"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mr-2 inline-block"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line x1="7" y1="17" x2="17" y2="7"></line>
          <polyline points="7 7 17 7 17 17"></polyline>
        </svg>
      </Link>
    </div>
  );
};

export default ProductHuntBanner;
