import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";
import { Button } from "./Button";

export interface IconButtonType
  extends AnchorHTMLAttributes<HTMLAnchorElement> {
  label: string;
  icon: ReactNode;
  href: string;
}

const IconButton = ({ label, href, icon, target }: IconButtonType) => {
  return (
    <Link
      key={label}
      href={href}
      target={target}
    >
      <Button variant={"reverse"}>
        {icon && <span>{icon}</span>}
        <span className="m-auto mx-1 pr-3 text-sm">{label}</span>
      </Button>
    </Link>
  );
};

export default IconButton;
