<template>
  <button class="button">
    <slot />
  </button>
</template>

<script setup lang="ts">
defineEmits<{
  (e: 'click'): void,
}>()
</script>

<style>
.button {
  padding: 12px 24px;
  border-radius: 10px;
  border: none;
  background-color: var(--main-color);
  color: var(--white);
  font-size: 1rem;
  line-height: 1.5;
  cursor: pointer;
}

.button:hover {
  background-color: var(--main-color-hover);
}
</style>