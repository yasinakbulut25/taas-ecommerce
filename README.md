# E-Commerce UI Case

This project is a modern e-commerce frontend case built with **Nuxt 3** and **Vue.js**.  

The main focus here is a **clean UI architecture**, **reusable components**, and **Pixel perfect UI implementation from figma**.

## Live Demo

[View Live Demo on Vercel](https://taas-ecommerce.vercel.app/)

## Bonus Interactions
**Checkout Page:** As a bonus feature, clicking the basket button navigates the user to the Checkout page UI.

## Tech Stack

- **Nuxt 3 (Vue.js)**
- **Custom Scoped CSS (CSS Variables & Design System)**
- **DummyJSON REST API**
- **SVG as Vue Components (vite-svg-loader)**
- **Fonts:** `@nuxtjs/google-fonts` (Roboto & Rubik)

## Project Goals

- Pixel-perfect UI based on Figma design
- Reusable and scalable component architecture
- Clean and maintainable folder structure
- SSR-friendly REST API integration
- Responsive layout

## Reusable Components
The project is built with a **component-driven approach**.

Examples:
- `BaseInput` – configurable input component (icons, hints, grid layout)
- `SectionTitle` – semantic and reusable section header
- `Header`, `HeaderTop`, `HeaderCategories` – layout-based separation

## Semantic HTML & Figma Compliance
Special attention was given to **semantic HTML usage** as specified in Figma:

- Correct heading hierarchy (`h1`, `h2`, `h4`)
- Accessible button and link usage
- Meaningful structural elements

## Reusable REST API Layer
API calls are centralized using **Nuxt composables**.

```js
// composables/useProducts.js
export const useProducts = () => {
  const config = useRuntimeConfig();
  const API_BASE = config.public.apiBase;

  const getFeaturedProducts = (limit = 4) => {
    return useFetch(`${API_BASE}/products`, {
      key: `featured-products-${limit}`,
      params: { limit },
      transform: (response) => {
        return response.products;
      },
    });
  };

  return {
    getFeaturedProducts,
  };
};
```
