import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./libs/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "var(--main)",
        overlay: "var(--overlay)",
        bg: "var(--bg)",
        bw: "var(--bw)",
        blank: "var(--blank)",
        text: "var(--text)",
        mtext: "var(--mtext)",
        border: "var(--border)",
        ring: "var(--ring)",
        ringOffset: "var(--ring-offset)",

        secondaryBlack: "#212121",
      },
      borderRadius: {
        base: "2px",
      },
      boxShadow: {
        shadow: "var(--shadow)",
        "double-shadow": "var(--double-shadow)",
      },
      translate: {
        hover: "-2px",
        selected: "-4px",
        pressed: "0px",
      },
      fontWeight: {
        base: "400",
        heading: "700",
      },
    },
  },
};
export default config;
