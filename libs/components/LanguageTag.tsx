import { cn } from "@/lib/utils";
import { type VariantProps, cva } from "class-variance-authority";

const badgeVariants = cva(
  "inline-flex items-center rounded-base border-2 border-border px-2.5 font-base py-0.5 text-xs transition-colors focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "bg-main text-mtext",
        neutral: "bg-bw text-text",

        React: "bg-gradient-to-r bg-cyan-300",
        Typescript: "bg-blue-800 text-white",
        Nextjs: "bg-black text-white",
        "Chakra-ui": "bg-purple-400",
        Stripe: "bg-gradient-to-r from-blue-400  via-violet-300 to-violet-300",
        Prisma: "bg-orange-400",
        Wordpress: "bg-blue-600 text-white",
        Mantine: "bg-sky-700 text-white",
        Vercel: "",
        Postgres: "bg-gray-600 hover:bg-gray-700",
        "Chrome Extensions": "bg-main text-mtext",
        "Tailwind CSS": "bg-sky-300",
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
    <div
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
