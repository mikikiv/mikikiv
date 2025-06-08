import { cx } from "class-variance-authority";
import IconButton from "@/libs/components/IconButton";
import { type SocialPlatform, socialLinkData } from "../data/socialData";

const SocialLinks = ({
  selectedLinks,
  direction: style,
}: {
  selectedLinks?: SocialPlatform[];
  direction: "x" | "y";
}) => {
  const linksToRender =
    selectedLinks ?? (Object.keys(socialLinkData) as SocialPlatform[]);

  const direction = style === "x" ? "flex flex-wrap" : "";

  return (
    <div className={cx(direction, "justify-center gap-4 sm:gap-6")}>
      {linksToRender.map(link => (
        <IconButton
          key={socialLinkData[link].label}
          label={socialLinkData[link].label}
          href={socialLinkData[link].href}
          icon={socialLinkData[link].icon}
          target="_blank"
        />
      ))}
    </div>
  );
};

export default SocialLinks;
