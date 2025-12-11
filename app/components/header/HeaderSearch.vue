<template>
  <div class="search-area">
    <SearchIcon class="search-icon" />
    <input
      class="search-input"
      id="search"
      placeholder="Write the product or category you are looking for"
      aria-label="Search"
    />
  </div>
</template>

<script setup>
import SearchIcon from "~/assets/icons/SearchIcon.svg";
</script>

<style scoped>
.search-area {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  height: 42px;
  width: 100%;
  max-width: 35rem;
  background-color: #ececec4d;
  border-radius: 2rem;
  padding: 0 0.75rem;
}

.search-icon {
  width: 16px;
  height: 16px;
}

.search-input {
  background-color: transparent;
  color: var(--text-primary);
  font-size: 14px;
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
}

.search-input::placeholder {
  color: #8493a8;
}
</style>
