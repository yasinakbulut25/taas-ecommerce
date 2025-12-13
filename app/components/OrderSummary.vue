<script setup>
import BaseInput from "@/components/form/BaseInput.vue";

import SummaryProductImage_1 from "~/assets/images/summary/product-1.png";
import SummaryProductImage_2 from "~/assets/images/summary/product-2.png";

const cartItems = [
  {
    id: 1,
    name: "Herbal Science Boom Butter Hair Care Oil 190ml",
    price: 44.95,
    quantity: 1,
    image: SummaryProductImage_1,
  },
  {
    id: 2,
    name: "Ashley Joy Strengthening Shampoo 400ml",
    price: 29.45,
    quantity: 1,
    image: SummaryProductImage_2,
  },
];

const formatPrice = (value) => {
  return value.toFixed(2).replace(".", ",") + " TL";
};
</script>

<template>
  <div class="summary-section">
    <div class="section-header">
      <h4 class="section-title">Shopping cart summary</h4>
    </div>

    <div class="summary-card">
      <div class="summary-items">
        <div v-for="item in cartItems" :key="item.id" class="summary-item">
          <div class="img-wrapper">
            <img :src="item.image" :alt="item.name" />
          </div>
          <div class="info-wrapper">
            <h4 class="item-name">{{ item.name }}</h4>
            <div class="price-qty">
              <span class="item-price">{{ formatPrice(item.price) }}</span>
              <div class="qty-control">
                <button class="qty-btn">+</button>
                <span>{{ item.quantity }}</span>
                <button class="qty-btn">-</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BaseInput id="disCountCode" placeholder="Discount code" />

      <div class="totals">
        <div class="total-item">
          <span class="total-name">Subtotal</span>
          <span class="total-value">74,40 TL</span>
        </div>
        <div class="total-item">
          <span class="total-name">Shipping</span>
          <span class="total-value">10,50 TL</span>
        </div>
        <hr />
        <div class="total-item">
          <span class="total-name">Total</span>
          <span class="total-value">84,90 TL</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.summary-section {
  position: sticky;
  top: 150px;
}

.summary-card {
  width: 100%;
  min-width: 360px;
  background: #fff;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1.5rem;
  border: 1px solid #ececec;
  border-radius: 6px;
  box-shadow: 0px 4px 16px 0px #2a2a480a;
}

.summary-items {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.summary-item {
  width: 100%;
  display: flex;
  align-items: center;
  box-shadow: 0px 1px 2px 0px #37415114;
  min-height: 96px;
  border-radius: 6px;
  overflow: hidden;
}

.img-wrapper {
  width: 116px;
  min-height: inherit;
  background-color: #ececec29;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.img-wrapper img {
  width: 100%;
  height: 100%;
  max-width: 84px;
  max-height: 64px;
  object-fit: contain;
}

.info-wrapper {
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0.5rem;
  min-height: inherit;
}

.item-name {
  color: var(--text-primary);
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
}

.price-qty {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
}

.item-price {
  color: var(--text-secondary);
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
}

.qty-control {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.qty-btn {
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ececec4d;
  color: var(--text-secondary);
  border: 1px solid #ececec;
  border-radius: 0.25rem;
  font-size: 1rem;
  cursor: pointer;
}

.qty-control span {
  color: var(--text-secondary);
  font-size: 1rem;
  font-weight: 400;
}

.totals {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.total-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
}

.total-name {
  color: var(--text-secondary);
  font-weight: 400;
}

.total-value {
  color: var(--text-secondary);
  font-weight: 400;
}

.totals hr {
  border: 1px solid #ececec;
}

.total-item:last-child .total-name,
.total-item:last-child .total-value {
  color: var(--text-primary);
  font-weight: 700;
  font-size: 20px;
}

@media screen and (max-width: 992px) {
  .summary-section {
    position: relative;
    top: 0;
  }
}

@media screen and (max-width: 468px) {
  .summary-card {
    min-width: 100%;
  }
}
</style>
