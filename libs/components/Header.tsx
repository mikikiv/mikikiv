import React from "react";

const Header = () => {
  const svgLogo = (
    <svg
      version="1.2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1280 720"
      width={50}
      style={{ fill: "var(--text)" }}
    >
      <title>MV Logo</title>
      <path
        id="Path 0"
        className="s0"
        d="m648.7 139.4c1.1 1.2 278 540.1 278 540.1h37l-330.4-639.6c0 0-96.4 541.1-97.8 539.6-1.2-1.3-268.6-540.2-269.5-540.5l-114 641.5 31.7-0.1 95-538.7 272.9 533.1c0 0 96-536.8 97.1-535.4z"
      />
      <path
        id="Path 0"
        className="s0"
        d="m1010.6 679.3l116.8-638.4-37-0.3-95.7 528.8-268.6-528.7h-34.2z"
      />
    </svg>
  );

  return (
    <div className="sticky top-0 z-50 w-full bg-primary-50/[.9] shadow-md">
      <div className="container mx-auto grid grid-cols-6 gap-4 p-2 text-text-800 hover:text-text-900 lg:grid-cols-7">
        <a
          href="/"
          className="m-auto ml-4 font-thin text-4xl transition duration-300 ease-in-out hover:scale-105 lg:col-span-2 lg:ml-24"
        >
          MV
        </a>
      </div>
    </div>
  );
};

export default Header;
