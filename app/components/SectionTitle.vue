<template>
  <div class="title-wrapper">
    <h3 class="section-title">{{ text }}</h3>
  </div>
</template>

<script setup>
defineProps({
  text: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
.title-wrapper {
  position: relative;
  margin-bottom: 2.5rem;
}

.title-wrapper::before {
  content: "";
  position: absolute;
  left: 0;
  top: 1rem;
  width: 100%;
  height: 1px;
  background-color: #0099a81a;
  z-index: 0;
}

.section-title {
  position: relative;
  color: var(--color-primary);
  font-size: 1.5rem;
  font-weight: 500;
  margin: 0 auto;
  display: block;
  text-align: center;
  width: 260px;
  background-color: var(--bg-body);
  z-index: 1;
}
</style>
