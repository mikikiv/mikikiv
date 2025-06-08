import { socialLinkData } from "../data/socialData";
import SvgLogo from "../Logo";
import { Button } from "./Button";
import IconButton from "./IconButton";

const Header = () => {
  return (
    <div className="sticky top-0 z-50 w-full border-black border-b-2 border-solid bg-bg py-4">
      <div className="container mx-auto flex justify-between">
        <a
          href="/"
          className="mx-4 my-auto fill-text font-thin text-4xl transition duration-300 ease-in-out hover:scale-105"
        >
          <SvgLogo />
        </a>
        <div className="mx-4 my-auto flex">
          <Button
            className={
              "-translate-y-1 -translate-x-1 mx-4 hidden transition duration-300 sm:block"
            }
            variant={"default"}
          >
            Just a satisying button to click
          </Button>
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
