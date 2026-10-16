import { HiEnvelope } from "react-icons/hi2";
import { SiGithub, SiLinkedin, SiSubstack } from "react-icons/si";
import type { IconButtonType } from "../components/IconButton";

export type SocialPlatform =
  | "github"
  | "linkedin"
  | "substack"
  // | "bluesky"
  | "email";

export const socialLinkData: Record<SocialPlatform, IconButtonType> = {
  github: {
    label: "GitHub",
    href: "https://github.com/mikikiv",
    icon: <SiGithub />,
  },
  linkedin: {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mikeyvillavicencio",
    icon: <SiLinkedin />,
  },
  // bluesky: {
  //   label: "Bluesky",
  //   href: "https://bsky.app/profile/mikikiv.dev",
  //   icon: <SiBluesky />,
  // },
  substack: {
    label: "Substack",
    href: "https://substack.com/@mikikiv",
    icon: <SiSubstack />,
  },
  email: {
    label: "Email",
    href: "mailto:mikey.v.dev@gmail.com",
    icon: <HiEnvelope />,
  },
};
