<script setup lang="ts">
import UserStatItem from '@/components/UserStatItem.vue'

type PropTypes = {
  repos: number
  following: number
  followers: number
}

const { repos, following, followers } = defineProps<PropTypes>()
</script>

<template>
  <div class="userStat">
    <UserStatItem title="Repos" :value="repos" />
    <UserStatItem title="Following" :value="following" />
    <UserStatItem title="Followers" :value="followers" />
  </div>
</template>

<style>
.userStat {
  background-color: var(--stat-bg);
  color: var(--stat-color);
  padding: 15px 32px;
  border-radius: 10px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
</style>