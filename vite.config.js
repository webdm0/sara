import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

const browserTargets = [
  "chrome105",
  "edge105",
  "firefox110",
  "safari16",
  "ios16",
];

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/sara/",
  build: {
    target: browserTargets,
    cssTarget: browserTargets,
  },
});
