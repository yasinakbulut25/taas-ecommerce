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
