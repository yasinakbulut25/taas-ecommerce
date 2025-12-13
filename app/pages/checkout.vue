<template>
  <BreadCrumbs />
  <section class="checkout-section">
    <div class="container checkout-container">
      <div class="left-col">
        <ShippingDetails />
        <PaymentDetails />
      </div>
      <div class="right-col">
        <OrderSummary />
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

.left-col {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
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
