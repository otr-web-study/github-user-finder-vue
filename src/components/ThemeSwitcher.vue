<script setup lang="ts">
/// <reference types="vite-svg-loader" />
import { ref, watch, computed } from 'vue'
import SunIcon from '@/assets/images/icon-sun.svg?component'
import MoonIcon from '@/assets/images/icon-moon.svg?component'

const isDark = ref(false)
const themeText = computed(() => isDark.value ? 'Light' : 'Dark')
const ThemeIcon = computed(() => isDark.value ? SunIcon : MoonIcon)

const setDark = () => {
  isDark.value = !isDark.value
}

watch(isDark, () => {
  document.body.setAttribute('data-theme', isDark.value ? 'dark' : 'light')
})

</script>

<template>
  <div class="switcher" @click="setDark">
    <span class="switcher__text">{{ themeText }}</span>
    <ThemeIcon class="switcher__icon" />
  </div>
</template>

<style scoped>
.switcher {
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
}

.switcher__text {
  color: var(--switcher-color);
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 2.5px;
}

.switcher__text:hover {
  color: var(--switcher-color-hover);
}

.switcher__icon {
  fill: var(--switcher-color);
}
.switcher__icon:hover {
  fill: var(--switcher-color-hover);
}
</style>