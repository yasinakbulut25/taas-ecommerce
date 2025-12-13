<script setup>
import EyeIcon from "~/assets/icons/EyeIcon.svg";
import BasketIcon from "~/assets/icons/BasketIcon.svg";

const { getFeaturedProducts } = useProducts();
const { data: products, pending, error } = await getFeaturedProducts();
</script>

<template>
  <section class="featured-container">
    <div class="container">
      <SectionTitle text="Featured products" />

      <div class="product-grid">
        <div v-for="product in products" :key="product.id" class="product-card">
          <div class="image-wrapper">
            <img
              :src="product.images[0]"
              :alt="product.title"
              class="product-img"
            />
            <div class="product-actions">
              <NuxtLink to="#" class="action-btn">
                <EyeIcon class="action-icon" />
                Quick View
              </NuxtLink>
              <button class="action-btn">
                <BasketIcon class="action-icon" /> Add
              </button>
            </div>
          </div>

          <div class="info-wrapper">
            <span class="price">{{ product.price }}</span>
            <h3 class="product-name">{{ product.title }}</h3>
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
  position: relative;
  width: 100%;
  height: 184px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--bg-light);
  overflow: hidden;
}

.product-img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.product-actions {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  background-color: #000000cc;
  transform: translateY(100%);
  transition: transform 0.25s ease;
  pointer-events: none;
}

.action-btn {
  background-color: transparent;
  width: max-content;
  color: #fff;
  font-size: 14px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.25rem 1rem;
  border: none;
  outline: none;
  cursor: pointer;
}

.action-btn:first-child {
  border-right: 1px solid #ececec20;
  flex: 1;
}

.action-icon {
  width: 16px;
  height: 14px;
  fill: #fff;
}

.product-card:hover .product-actions {
  transform: translateY(0);
  pointer-events: visible;
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
    width: 100%;
  }
}
</style>
