import svgLoader from "vite-svg-loader";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  modules: ["@nuxtjs/google-fonts"],
  googleFonts: {
    families: {
      Roboto: [300, 400, 500, 700],
      Rubik: [400, 500, 600, 700],
    },
    display: "swap",
    download: true,
    prefetch: true,
    preload: true,
  },
  vite: {
    plugins: [
      svgLoader({
        defaultImport: "component",
        svgo: false,
      }),
    ],
  },
  runtimeConfig: {
    public: {
      apiBase: "https://dummyjson.com",
    },
  },
});
