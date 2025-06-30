// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap"
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
    site: 'https://rafaelcahya.space', 
    integrations: [react(), sitemap()],

    vite: {
        plugins: [tailwindcss()],
    },
});
