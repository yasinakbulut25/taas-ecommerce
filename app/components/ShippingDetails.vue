<template>
  <div class="section-header">
    <span class="icon-wrapper"><ShippingIcon class="section-icon" /></span>
    <h4 class="section-title">Shipping details</h4>
  </div>

  <form class="form-grid">
    <div class="form-group">
      <label for="name">First Name *</label>
      <input id="name" placeholder="" />
    </div>
    <div class="form-group">
      <label for="lastName">Last Name *</label>
      <input id="lastName" placeholder="" />
    </div>

    <div class="form-group">
      <label for="email">Email Address *</label>
      <input type="email" id="email" placeholder="" />
    </div>

    <div class="form-group">
      <label for="phoneNumber">Phone Number *</label>
      <div class="phone-input">
        <input id="phoneNumber" placeholder="+90 (5 _ _) _ _ _  _ _  _ _" />
      </div>
    </div>

    <div class="form-group">
      <label for="city">City *</label>
      <select id="city">
        <option>Please select</option>
        <option value="Istanbul">Istanbul</option>
      </select>
    </div>

    <div class="form-group">
      <label for="district">District *</label>
      <select id="district" disabled>
        <option>Please select</option>
      </select>
    </div>

    <div class="form-group full">
      <label for="address">Address *</label>
      <textarea
        id="address"
        rows="3"
        placeholder="Enter neighborhood, street, avenue and other information"
      ></textarea>
    </div>
  </form>
</template>

<script setup>
import ShippingIcon from "~/assets/icons/ShippingIcon.svg";
</script>
