<script setup lang="ts">
import Container from '@/components/UI/Container.vue'
import TheHeader from '@/components/TheHeader.vue'
import TheSearch from '@/components/TheSearch.vue'
</script>

<template>
  <Container>
    <TheHeader />
    <TheSearch :has-error="false"/>
  </Container>
</template>

<style scoped></style>
