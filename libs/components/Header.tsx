import SvgLogo from "@/lib/Logo";
import React from "react";
import { socialLinkData } from "../data/socialData";
import IconButton from "./IconButton";

const Header = () => {
  return (
    <div className="sticky top-0 z-50 w-full bg-primary-50/[.9] shadow-md">
      <div className="container mx-auto flex flex-auto text-text-800 hover:text-text-900 lg:grid-cols-7">
        <a
          href="/"
          className="m-auto ml-4 font-thin text-4xl transition duration-300 ease-in-out hover:scale-105 lg:col-span-2 lg:ml-24"
        >
          <SvgLogo />
        </a>
        <div className="my-auto">
          <IconButton
            href={socialLinkData.email.href}
            label="Email me"
            icon={socialLinkData.email.icon}
            target="_blank"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
