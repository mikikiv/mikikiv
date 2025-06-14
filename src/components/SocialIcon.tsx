import { HiDocument, HiEnvelope } from "react-icons/hi2";
import { SiGithub, SiLinkedin, SiSubstack } from "react-icons/si";

const icons = {
  github: SiGithub,
  linkedin: SiLinkedin,
  substack: SiSubstack,
  email: HiEnvelope,
  resume: HiDocument,
} as const;

type IconType = keyof typeof icons;

interface SocialIconProps {
  type: IconType;
}

export function SocialIcon({ type }: SocialIconProps) {
  const Icon = icons[type];
  return <Icon name="icon" />;
}
