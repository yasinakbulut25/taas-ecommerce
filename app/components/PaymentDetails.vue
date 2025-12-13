<template>
  <div class="form-section">
    <div class="section-header">
      <span class="icon-wrapper"><PaymentIcon class="section-icon" /></span>
      <h4 class="section-title">Payment details</h4>
    </div>

    <div class="payment-container">
      <form class="form-grid">
        <BaseInput
          id="cardName"
          label="Card Holder Name"
          placeholder=""
          hint="Full name on card"
          :isRequired="true"
          :fullGrid="true"
        />

        <BaseInput
          id="cardNumber"
          label="Card Number"
          placeholder=""
          hint="Enter digits without spaces"
          :isRequired="true"
          :fullGrid="true"
        />

        <BaseInput
          id="expiryDate"
          label="Expiry Date"
          placeholder="MM / YY"
          :isRequired="true"
        />

        <BaseInput id="cvv" label="CVV" placeholder="" :isRequired="true">
          <template #icon>
            <QuestionMarkIcon />
          </template>
        </BaseInput>

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
import QuestionMarkIcon from "~/assets/icons/QuestionMarkIcon.svg";
import BaseInput from "@/components/form/BaseInput.vue";
</script>

<style scoped>
.payment-container {
  display: flex;
  align-items: flex-start;
  gap: 40px;
}
</style>
