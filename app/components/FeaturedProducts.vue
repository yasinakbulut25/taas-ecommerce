<script setup>
import SectionTitle from "@/components/SectionTitle.vue";

const products = [
  {
    id: 1,
    name: "Herbal Science Boom Butter Hair Care Oil 190 ml",
    price: "44,95 TL",
    image: "https://placehold.co/228x152/png?text=Example",
  },
  {
    id: 2,
    name: "Diadermine Lift + Serum Booster Vitamin C",
    price: "42,25 TL",
    image: "https://placehold.co/228x152/png?text=Example",
  },
  {
    id: 3,
    name: "Ashley Joy Strengthening Shampoo 400ml",
    price: "29,45 TL",
    image: "https://placehold.co/228x152/png?text=Example",
  },
  {
    id: 4,
    name: "Herbal Extract Refreshing Shampoo 400ml",
    price: "28,95 TL",
    image: "https://placehold.co/228x152/png?text=Example",
  },
];
</script>

<template>
  <section class="featured-container">
    <div class="container">
      <SectionTitle text="Featured products" />

      <div class="product-grid">
        <div v-for="product in products" :key="product.id" class="product-card">
          <div class="image-wrapper">
            <img :src="product.image" :alt="product.name" class="product-img" />
          </div>

          <div class="info-wrapper">
            <span class="price">{{ product.price }}</span>
            <h3 class="product-name">{{ product.name }}</h3>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.featured-container {
  padding: 2.5rem 0;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2.5rem;
}

.product-card {
  background-color: #fff;
  border: 1px solid var(--border-color);
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 1px 8px 0px #0000000a;
  cursor: pointer;
}

.image-wrapper {
  width: 100%;
  height: 184px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--bg-light);
}

.product-img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.info-wrapper {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.price {
  font-size: 20px;
  font-weight: 700;
  color: var(--text-primary);
  line-height: 1.5rem;
}

.product-name {
  font-size: 1rem;
  font-weight: 400;
  color: var(--text-secondary);
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

@media (max-width: 992px) {
  .product-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.25rem;
  }
}

@media (max-width: 768px) {
  .product-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 576px) {
  .product-grid {
    grid-template-columns: 1fr;
    justify-items: center;
    gap: 30px;
  }

  .product-card {
    max-width: 280px;
    width: max-content;
  }
}
</style>
