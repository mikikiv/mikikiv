import { cn } from "@/lib/utils";
import { type VariantProps, cva } from "class-variance-authority";

const badgeVariants = cva(
  "inline-flex items-center rounded-base border-2 border-border px-2.5 font-base py-0.5 text-xs transition-colors",
  {
    variants: {
      variant: {
        default: "bg-main text-text",
        neutral: "bg-bw text-text",
        Docusaurus: "bg-green-400 text-black",
        React: "bg-gradient-to-r bg-cyan-300 text-black",
        Typescript: "bg-blue-800 text-white",
        Nextjs: "bg-black text-bw",
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
      uiStyle: {
        button:
          "justify-center overflow-auto whitespace-nowrap transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
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

function Badge({ className, variant, uiStyle, ...props }: BadgeProps) {
  return (
    <span
      className={cn(badgeVariants({ variant, uiStyle }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
