<template>
  <div class="form-section">
    <div class="section-header">
      <span class="icon-wrapper"><PaymentIcon class="section-icon" /></span>
      <h4 class="section-title">Payment details</h4>
    </div>

    <div class="payment-container">
      <form class="form-grid">
        <div class="form-group full-grid">
          <label for="name">Card Holder Name *</label>
          <input id="name" placeholder="" />
          <span class="hint">Full name on card</span>
        </div>

        <div class="form-group full-grid">
          <label for="cardNumber">Card Number *</label>
          <input id="cardNumber" placeholder="" />
          <span class="hint">Enter digits without spaces</span>
        </div>

        <div class="form-group">
          <label for="expiryDate">Expiry Date *</label>
          <input id="expiryDate" placeholder="MM / YY" />
        </div>

        <div class="form-group">
          <label for="cvv">CVV *</label>
          <div class="cvv-input">
            <input id="cvv" type="text" />
            <span class="info-icon">?</span>
          </div>
        </div>

        <div class="form-footer full-grid">
          <p class="required-note">* Required fields</p>
          <button class="submit-btn" disabled type="submit">PAY NOW</button>
        </div>
      </form>

      <div class="card-preview"></div>
    </div>
  </div>
</template>

<script setup>
import PaymentIcon from "~/assets/icons/PaymentIcon.svg";
</script>

<style scoped>
.payment-container {
  display: flex;
  align-items: flex-start;
  gap: 40px;
}
</style>
