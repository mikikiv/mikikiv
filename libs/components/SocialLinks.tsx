import IconButton from "@/libs/components/IconButton";
import { type SocialPlatform, socialLinkData } from "../data/socialData";

const SocialLinks = ({
  selectedLinks,
  direction,
}: {
  selectedLinks?: SocialPlatform[];
  direction: "x" | "y";
}) => {
  const linksToRender =
    selectedLinks ?? (Object.keys(socialLinkData) as SocialPlatform[]);

  const style = direction === "x" ? "flex flex-wrap" : "";

  return (
    <div className={`${style} justify-center gap-4 sm:gap-6`}>
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
