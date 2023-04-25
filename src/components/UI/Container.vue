<template>
  <div class="container">
    <slot />
  </div>
</template>

<script setup lang="ts">

</script>

<style>
.container {
  width: 100%;
  padding: 0 24px;
}

@media (min-width: 767px) {
  .container {
    width: 734px;
    padding: 0;
    margin: 0 auto;
  }
}
</style>