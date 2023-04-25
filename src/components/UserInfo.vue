<script setup lang="ts">
import InfoItem from '@/components/InfoItem.vue'
import IconCompany from  '@/assets/images/icon-company.svg?component'
import IconLocation from '@/assets/images/icon-location.svg?component'
import IconTwitter from '@/assets/images/icon-twitter.svg?component'
import IconWebsite from '@/assets/images/icon-website.svg?component'

type PropTypes = {
  blog: string | null
  company: string | null
  location: string | null
  twitter: string | null
}

const { blog, company, location, twitter } = defineProps<PropTypes>()
const items = [
  {icon: IconLocation, text: location},
  {icon: IconWebsite, text: blog, isLink: true},
  {icon: IconTwitter, text: twitter},
  {icon: IconCompany, text: company},
]
</script>

<template>
  <div class="userInfo">
    <InfoItem
      v-for="item, idx in items"
      :key="idx"
      :text="item.text"
      :isLink="item.isLink">
      <component v-bind:is="item.icon" />
    </InfoItem>
  </div>
</template>

<style>
.userInfo {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

@media (min-width: 767px) {
  .userInfo {
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    grid-auto-flow: column;
  }
}
</style>