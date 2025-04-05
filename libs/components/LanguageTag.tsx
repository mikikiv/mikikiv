import { cn } from "@/libs/utils";
import { type VariantProps, cva, cx } from "class-variance-authority";

const badgeVariants = cva(
  "inline-flex items-center rounded-base border-2 border-border px-2.5 font-base py-0.5 transition-all",
  {
    variants: {
      variant: {
        default: "bg-main text-text",
        neutral: "bg-bw text-text",
        Docusaurus: "bg-green-400 text-black",
        React: "bg-gradient-to-r bg-cyan-300 text-black",
        Typescript: "bg-blue-800 text-white",
        Nextjs: "bg-black text-white",
        "Chakra-ui": "bg-purple-400",
        Stripe:
          "bg-gradient-to-r from-blue-400  via-violet-300 to-violet-300 text-black",
        Prisma: "bg-orange-400 text-black",
        Wordpress: "bg-blue-600 text-white",
        Mantine: "bg-sky-700 text-white",
        Vercel: "",
        Postgres: "bg-gray-600 hover:bg-gray-700",
        "Chrome Extensions": "bg-main text-mtext",
        "Tailwind CSS": "bg-sky-300 text-black",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <span
      className={cx(cn(badgeVariants({ variant }), className), "text-xs")}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
