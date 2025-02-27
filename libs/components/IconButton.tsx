import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

export interface IconButtonType
  extends AnchorHTMLAttributes<HTMLAnchorElement> {
  label: string;
  icon: ReactNode;
  href: string;
}

const IconButton = ({ label, href, icon, target }: IconButtonType) => {
  return (
    <Link
      className={
        "flex transform rounded-full bg-secondary-200 py-1 text-lg shadow-md transition duration-300 ease-in-out hover:scale-105 hover:bg-secondary-300 hover:shadow-xl"
      }
      key={label}
      href={href}
      target={target}
    >
      {icon && (
        <span className="my-auto ml-1 rounded-full bg-secondary-200 p-2 align-middle ">
          {icon}
        </span>
      )}
      <span className="m-auto mx-1 pr-3 text-sm">{label}</span>
    </Link>
  );
};

export default IconButton;
