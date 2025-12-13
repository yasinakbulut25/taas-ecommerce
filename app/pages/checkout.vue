<template>
  <BreadCrumbs />
  <section class="checkout-section">
    <div class="container checkout-container">
      <div class="left-col">
        <ShippingDetails />
        <div class="payment-details">payment-details</div>
      </div>
      <div class="right-col">
        <div class="order-summary">order-summary</div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.checkout-section {
  padding: 2rem 0;
}

.checkout-container {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 40px;
}

@media (max-width: 992px) {
  .checkout-container {
    grid-template-columns: 1fr;
  }

  .right-col {
    order: -1;
  }
}
</style>
