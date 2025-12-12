<template>
  <section class="promo-section">
    <div class="container promo-container">
      <img
        src="~/assets/images/promo/promo-product-1.png"
        alt="Nivea Deodorants"
        class="product-img-left"
      />

      <div class="promo-right">
        <div class="offer-card">
          <h3 class="brand-subtext">
            <span>EN SEVDİĞİNİZ ÜRÜNLER</span>
            TEK TIKLA KAPINIZDA!
          </h3>
          <div class="discount-wrapper font-secondary">
            <span class="percent">60 %</span>
            <span class="text">DISCOUNT</span>
          </div>
          <button class="shop-btn">SHOP NOW</button>
        </div>

        <img
          src="~/assets/images/promo/promo-product-2.png"
          alt="Nivea Men"
          class="product-img-right"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.promo-section {
  position: relative;
  width: 100%;
  min-height: 400px;
  background: linear-gradient(
      0deg,
      rgba(19, 138, 150, 0.3),
      rgba(19, 138, 150, 0.3)
    ),
    linear-gradient(
      88.28deg,
      rgba(16, 160, 174, 0.3) 14.56%,
      rgba(98, 214, 225, 0.3) 56.19%,
      rgba(21, 166, 181, 0.3) 98.69%
    );
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
  overflow: hidden;
}

.promo-section::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-image: url("~/assets/images/promo/promo-bg.png");
  background-size: cover;
  background-repeat: no-repeat;
  z-index: 1;
}

.promo-container {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  position: relative;
  z-index: 2;
}

.product-img-left {
  max-width: 100%;
  height: 292px;
  margin: 5rem 0 0 0;
}

.promo-right {
  display: flex;
  align-items: center;
}

.offer-card {
  width: 274px;
  background-color: #fff;
  border-radius: 3.5rem 0 3.5rem 0;
  padding: 2rem;
  z-index: 1;
}

.brand-subtext {
  color: var(--color-promo);
  font-size: 1.25rem;
  font-weight: 700;
}

.brand-subtext span {
  font-size: 1rem;
  font-weight: 400;
}

.discount-wrapper {
  color: var(--color-promo);
  margin: 0.75rem 0 1.25rem;
  line-height: 1;
}

.percent {
  font-size: 3rem;
  font-weight: 700;
}

.text {
  display: block;
  font-size: 2rem;
  font-weight: 700;
  text-transform: uppercase;
}

.shop-btn {
  background-color: var(--color-primary);
  color: #fff;
  border: none;
  padding: 0.75rem 1.5rem;
  font-size: 14px;
  font-weight: 700;
  border-radius: 0.25rem;
  cursor: pointer;
}

.product-img-right {
  position: relative;
  max-width: 100%;
  height: 294px;
  margin: 4rem 0 0 -3rem;
  z-index: 2;
}

@media (max-width: 768px) {
  .promo-container,
  .promo-right {
    flex-direction: column;
    gap: 30px;
  }

  .product-img-left,
  .product-img-right {
    margin: 0;
  }
}
</style>
