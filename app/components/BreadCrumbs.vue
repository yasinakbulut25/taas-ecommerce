<template>
  <section class="breadcrumb-section">
    <div class="container breadcrumb-container">
      <ol class="breadcrumb-list">
        <li class="breadcrumb-item">Homepage</li>
        <li class="breadcrumb-item">
          <ChevronArrowIcon class="breadcrumb-icon" />
        </li>
        <li class="breadcrumb-item">Shopping Cart</li>
        <li class="breadcrumb-item">
          <ChevronArrowIcon class="breadcrumb-icon" />
        </li>
        <li class="breadcrumb-item">Checkout</li>
      </ol>

      <h2 class="breadcrumb-title font-secondary">Checkout</h2>
    </div>
  </section>
</template>

<script setup>
import ChevronArrowIcon from "~/assets/icons/ChevronArrowIcon.svg";
</script>

<style scoped>
.breadcrumb-section {
  width: 100%;
  background-color: #ececec4d;
  padding: 1.5rem 0;
}

.breadcrumb-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.breadcrumb-list {
  list-style: none;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding: 0;
}

.breadcrumb-item {
  font-size: 12px;
  color: var(--text-light);
  font-weight: 300;
}

.breadcrumb-item:last-child {
  color: var(--color-primary);
}

.breadcrumb-icon {
  width: 10px;
  height: 10px;
  transform: rotate(-90deg);
}

.breadcrumb-title {
  font-size: 34px;
  font-weight: 500;
  line-height: 48px;
  color: var(--text-primary);
}
</style>
