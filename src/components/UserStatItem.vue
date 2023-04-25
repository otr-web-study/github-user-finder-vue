<script setup lang="ts">
type PropTypes = {
  title: string
  value: number
}

const { title, value } = defineProps<PropTypes>()
</script>

<template>
  <div class="info">
    <div class="info__title">{{ title }}</div>
    <div class="info__number">{{ value }}</div>
  </div>
</template>

<style>
.info {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.info__title {
  color: var(--gray-200);
  font-size: 0.75rem;
  line-height: 1.5;
}

.info__number {
  font-size: 1.25rem;
  line-height: 1.5;
  font-weight: 700;
}
</style>