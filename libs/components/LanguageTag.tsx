import React from "react";
import type { Languages } from "../data/websites";

const LanguageTag = ({ language }: { language: Languages }) => {
  const colors = {
    React:
      "bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700",
    Typescript: "bg-blue-800 hover:bg-blue-900",
    Nextjs: "bg-black hover:bg-gray-900 border-solid border-[1px]",
    "Chakra-ui": "bg-purple-600 hover:bg-purple-700",
    Stripe:
      "bg-gradient-to-r from-blue-400  via-violet-400 to-violet-500 hover:from-blue-500 hover:via-violet-500 hover:to-violet-600",
    Prisma:
      "bg-gradient-to-r from-gray-400 to-emerald-500 hover:from-gray-500 hover:to-emerald-600",
    Wordpress: "bg-blue-500 hover:bg-blue-600",
    Mantine: "bg-sky-600 hover:bg-sky-700",
    Postgres: "bg-gray-600 hover:bg-gray-700",
    Vercel:
      " bg-gradient-to-r from-black via-blue-600 to-purple-600 hover:from-black hover:via-blue-700 hover:to-purple-700 ",
    "Chrome Extensions":
      "bg-gradient-to-l from-yellow-400 via-blue-500 to-red-500 hover:from-yellow-500 hover:via-blue-600 hover:to-red-600",
    "Tailwind CSS": "bg-sky-500 hover:bg-sky-600",
  };

  return (
    <div
      className={`m-[2px] w-auto max-w-fit rounded-full px-3 py-1 text-center text-xs ${colors[language]} cursor-default text-white shadow-sm duration-300 ease-in-out`}
    >
      {language}
    </div>
  );
};

export default LanguageTag;
