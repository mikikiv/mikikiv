import { FaGithub } from "react-icons/fa";

export interface Link {
  href?: string;
  label: string;
  overlay: boolean;
  disabled?: boolean;
  icon?: React.JSX.Element;
}

export const AVAILABLE_LANGUAGES = [
  "React",
  "Typescript",
  "Nextjs",
  "Chakra-ui",
  "Stripe",
  "Prisma",
  "Wordpress",
  "Mantine",
  "Postgres",
  "Vercel",
  "Chrome Extensions",
  "Tailwind CSS",
  "Docusaurus",
] as const;

export type Language = (typeof AVAILABLE_LANGUAGES)[number];

export interface Website {
  id: number;
  name: string;
  links: Link[];
  desc: string;
  lang: Language[];
  img?: string;
  enabled: boolean;
}

export const websites: Website[] = [
  {
    id: 4,
    name: "PetSitting Website",
    links: [
      {
        href: "https://home-taylerandmikey.netlify.app/",
        label: "Visit",
        overlay: true,
        disabled: false,
      },
    ],
    desc: "Built with React components with Docusaurus, a simple website about how a guest would watch my pets",
    lang: ["React", "Docusaurus"],
    img: "/sitePhotos/petsite.jpeg",
    enabled: true,
  },
  {
    id: 5,
    name: "Amazon Distance Project",
    desc: "A Wordpress site for managing youth sport team. \n December 2017 - December 2023",
    lang: ["Wordpress"],
    img: "/sitePhotos/adp.jpeg",
    enabled: true,
    links: [
      {
        label: "Visit",
        overlay: false,
        disabled: true,
      },
    ],
  },
  {
    id: 3,
    name: "CareMatey",
    desc: "A web application for pet parents to store their pet care information",
    lang: ["React", "Typescript", "Nextjs", "Stripe", "Prisma"],
    img: "/sitePhotos/carematey.jpeg",
    enabled: true,
    links: [
      {
        href: "https://carematey-mikey-villavicencios-projects.vercel.app/",
        label: "Visit",
        overlay: true,
        disabled: false,
      },
    ],
  },
  {
    id: 1,
    name: "QuickLorem.dev",
    desc: "The fastest tool for getting lorem ipsum. A browser extension and webtool.",
    lang: ["React", "Typescript", "Nextjs", "Chrome Extensions"],
    img: "/sitePhotos/quicklorem.jpeg",
    enabled: true,
    links: [
      {
        href: "https://quicklorem.dev/",
        label: "Visit",
        overlay: true,
      },
      {
        href: "https://github.com/mikikiv/quicklorem",
        label: "Github",
        overlay: false,
        icon: <FaGithub />,
      },
      {
        href: "https://chrome.google.com/webstore/detail/aliasipsum/gpbdnbechbkbfbdbhcbllejhgggnmena",
        label: "Chrome Store",
        overlay: false,
      },
    ],
  },
  {
    id: 2,
    name: "This site your on!",
    desc: "",
    lang: ["React", "Typescript", "Nextjs", "Tailwind CSS"],
    enabled: true,
    img: "/sitePhotos/mikikiv.jpeg",
    links: [
      {
        href: "https://github.com/mikikiv/mikikiv",
        label: "Github",
        overlay: false,
        icon: <FaGithub />,
      },
    ],
  },
  {
    id: 2,
    name: "RestroomCodes",
    desc: "A project for sharing known restroom access. Under development since January 2024.",
    lang: ["React", "Typescript", "Nextjs", "Mantine", "Postgres", "Prisma"],
    img: "/sitePhotos/restroomCodes.jpeg",
    enabled: false,
    links: [
      {
        href: "https://restroomcodes.mikikiv.dev/",
        label: "Visit",
        overlay: true,
      },
      {
        href: "https://github.com/mikikiv/restroomcodes",
        label: "Github",
        overlay: false,
        icon: <FaGithub />,
      },
    ],
  },
];
