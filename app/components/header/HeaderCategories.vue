<template>
  <nav class="container nav-container">
    <NuxtLink to="#" class="nav-item">Campaigns</NuxtLink>
    <NuxtLink to="#" class="nav-item">Personal Care</NuxtLink>
    <NuxtLink to="#" class="nav-item">Skin Care</NuxtLink>
    <NuxtLink to="#" class="nav-item">Make-up</NuxtLink>
    <NuxtLink to="#" class="nav-item">Mother & Baby</NuxtLink>
    <NuxtLink to="#" class="nav-item">Men Care</NuxtLink>
    <NuxtLink to="#" class="nav-item">Healthy Life</NuxtLink>
    <NuxtLink to="#" class="nav-item">Brands</NuxtLink>
  </nav>
</template>

<style scoped>
.nav-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  height: 3rem;
  overflow-x: auto;
  white-space: nowrap;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.nav-container::-webkit-scrollbar {
  display: none;
}

.nav-item {
  font-size: 14px;
  font-weight: 700;
  color: var(--text-primary);
  text-transform: uppercase;
  min-width: max-content;
}
</style>
