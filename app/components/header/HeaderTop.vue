<template>
  <div class="header-top">
    <div class="container header-top-container">
      <div class="top-link-items">
        <a href="#" class="link-item">
          <StoreIcon class="store-icon" />
          Stores
        </a>
        <a href="#" class="link-item">
          <CatalogIcon class="catalog-icon" />
          Catalog
        </a>
      </div>
      <p class="header-top-text">
        Watsons Beauty and Personal Care Awards Nominees!
      </p>
      <div class="top-link-items">
        <a href="tel:+908501234567" class="link-item phone-link-item">
          Call us<span class="phone-number">:(+90) 850 123 45 67</span>
          <PhoneIcon class="phone-icon" />
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import StoreIcon from "~/assets/icons/StoreIcon.svg";
import CatalogIcon from "~/assets/icons/CatalogIcon.svg";
import PhoneIcon from "~/assets/icons/PhoneIcon.svg";
</script>

<style scoped>
.header-top {
  width: 100%;
  background: #505357;
}

.header-top-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.25rem;
  height: 2.5rem;
}

.top-link-items {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  font-size: 14px;
  font-weight: 400;
  color: #fff;
}

.top-link-items .link-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.header-top-text {
  font-size: 14px;
  color: #ececec80;
}

.store-icon,
.catalog-icon {
  width: 18px;
  height: 14px;
}

.phone-icon {
  width: 14px;
  height: 14px;
}

@media (max-width: 820px) {
  .header-top-text,
  .phone-number {
    display: none;
  }

  .header-top-container {
    justify-content: center;
  }

  .phone-link-item {
    flex-direction: row-reverse;
  }
}
</style>
