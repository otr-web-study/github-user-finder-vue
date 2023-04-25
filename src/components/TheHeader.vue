<template>
  <div class="header">
    <div class="logo">
      devFinder
    </div>
    <ThemeSwitcher />
  </div>
</template>

<script setup lang="ts">
import ThemeSwitcher from '@/components/ThemeSwitcher.vue'
</script>

<style>
.header {
  margin: 35px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  color: var(--header-color);
  font-size: 1.75rem;
  line-height: 1.5;
  font-weight: 700;
}
</style>