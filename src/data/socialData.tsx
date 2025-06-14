export type SocialPlatform =
  | "github"
  | "linkedin"
  | "substack"
  | "email"
  | "resume";

export const socialLinkData = [
  {
    label: "GitHub",
    href: "https://github.com/mikikiv",
    iconType: "github" as const,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mikeyvillavicencio",
    iconType: "linkedin" as const,
  },
  {
    label: "Substack",
    href: "https://substack.com/@mikikiv",
    iconType: "substack" as const,
  },
  {
    label: "Email",
    href: "mailto:mikey.v.dev@gmail.com",
    iconType: "email" as const,
  },
  {
    label: "Resume",
    href: "/MikeyVillavicencio.pdf",
    iconType: "resume" as const,
  },
] as const;
