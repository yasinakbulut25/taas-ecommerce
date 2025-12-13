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

      <div class="credit-card-preview">
        <div class="credit-card card-front">
          <div class="card-flex">
            <CardChipIcon class="chip-icon" />
            <p class="card-number">0000 0000 0000 0000</p>
          </div>
          <div class="card-flex">
            <span class="card-info-text">Card Holder</span>
            <p class="card-preview-text">MM / YY</p>
          </div>
        </div>
        <div class="credit-card card-back">
          <div class="card-back-top"></div>
          <div class="card-flex">
            <span class="card-info-text bold">CVV</span>
            <p class="card-preview-text">XXX</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import PaymentIcon from "~/assets/icons/PaymentIcon.svg";
import QuestionMarkIcon from "~/assets/icons/QuestionMarkIcon.svg";
import CardChipIcon from "~/assets/icons/CardChipIcon.svg";
import BaseInput from "@/components/form/BaseInput.vue";
</script>

<style scoped>
.payment-container {
  display: flex;
  align-items: flex-start;
  gap: 40px;
}

.credit-card-preview {
  position: relative;
  min-width: 360px;
  height: 215px;
  margin: auto 0;
}

.credit-card {
  position: absolute;
  width: 282px;
  height: 184px;
  padding: 1.5rem;
  border-radius: 0.75rem;
  border: 1px solid #ececec;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fff;
}

.card-front {
  top: 0;
  left: 0;
  z-index: 2;
}

.card-flex {
  display: flex;
  flex-direction: column;
}

.chip-icon {
  margin-left: auto;
  width: 32px;
  height: 24px;
}

.card-number {
  color: var(--text-secondary);
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
  margin-top: 1rem;
}

.card-info-text {
  color: var(--text-light);
  font-size: 14px;
  font-weight: 300;
  margin-bottom: 0.25rem;
}

.card-preview-text {
  color: var(--text-secondary);
  font-size: 16px;
  font-weight: 400;
}

.card-back {
  bottom: 0;
  right: 0;
  z-index: 1;
  padding: 0;
  justify-content: start;
  align-items: end;
}

.card-back-top {
  width: 100%;
  height: 32px;
  background-color: #ececec;
  margin: 1.5rem 0 1rem;
}

.card-back .card-flex {
  padding-right: 1.5rem;
}

@media screen and (max-width: 768px) {
  .payment-container {
    flex-direction: column;
    align-items: center;
  }
}

@media screen and (max-width: 460px) {
  .credit-card-preview {
    min-width: 100%;
    height: auto;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }

  .credit-card {
    position: relative;
  }
}
</style>
