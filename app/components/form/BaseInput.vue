<template>
  <div class="form-group" :class="{ 'full-grid': fullGrid }">
    <label v-if="label" :for="id" class="form-label">
      {{ label }}
      <span v-if="isRequired" class="required">*</span>
    </label>

    <div class="input-wrapper" :class="{ 'has-end': $slots.icon }">
      <input
        :id="id"
        :type="type"
        :placeholder="placeholder"
        :disabled="disabled"
      />

      <div v-if="$slots.icon" class="input-end">
        <slot name="icon" />
      </div>
    </div>

    <span v-if="hint" class="hint">{{ hint }}</span>
  </div>
</template>

<script setup>
defineProps({
  id: {
    type: String,
    default: "",
  },
  label: {
    type: String,
    default: "",
  },
  placeholder: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: "text",
  },
  hint: {
    type: String,
    default: "",
  },
  fullGrid: {
    type: Boolean,
    default: false,
  },
  isRequired: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});
</script>
