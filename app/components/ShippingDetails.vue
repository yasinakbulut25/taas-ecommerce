<template>
  <div class="form-section">
    <div class="section-header">
      <span class="icon-wrapper"><ShippingIcon class="section-icon" /></span>
      <h4 class="section-title">Shipping details</h4>
    </div>

    <form class="form-grid">
      <BaseInput
        id="name"
        label="First Name"
        placeholder=""
        :isRequired="true"
      />

      <BaseInput
        id="lastName"
        label="Last Name"
        placeholder=""
        :isRequired="true"
      />

      <BaseInput
        id="email"
        type="email"
        label="Email Address"
        placeholder=""
        :isRequired="true"
      />

      <BaseInput
        id="phoneNumber"
        label="Phone Number"
        placeholder="+90 (5 _ _) _ _ _  _ _  _ _"
        :isRequired="true"
      />

      <div class="form-group">
        <label for="city" class="form-label">
          City <span class="required">*</span>
        </label>
        <select id="city" required>
          <option>Please select</option>
          <option value="Istanbul">Istanbul</option>
        </select>
      </div>

      <div class="form-group">
        <label for="district" class="form-label">
          District <span class="required">*</span>
        </label>
        <select id="district" disabled required>
          <option>Please select</option>
        </select>
      </div>

      <div class="form-group full-grid">
        <label for="address" class="form-label">
          Address <span class="required">*</span>
        </label>
        <textarea
          id="address"
          required
          rows="3"
          placeholder="Enter neighborhood, street, avenue and other information"
        ></textarea>
      </div>
    </form>
  </div>
</template>

<script setup>
import ShippingIcon from "~/assets/icons/ShippingIcon.svg";
import BaseInput from "@/components/form/BaseInput.vue";
</script>
