<script setup lang="ts">
import UserTitle from '@/components/UserTitle.vue'
import UserStat from '@/components/UserStat.vue'
import UserInfo from '@/components/UserInfo.vue'
import type { LocalGithubUser } from '@/types';

type PropTypes = {
  user: LocalGithubUser
}

const { user } = defineProps<PropTypes>()
</script>

<template>
  <div class="userCard">
    <img 
      :src="user.avatar"
      :alt="user.name"
      class="userCard__avatar" />
    <UserTitle
      :login="user.login"
      :name="user.name"
      :created="user.created" />
    <p 
      class="userCard__bio"
      :class="{
        'userCard__bio_empty': user.bio
      }">
      {{ user.bio || 'This profile has no bio' }}
    </p>
    <UserStat 
      :repos="user.repos"
      :followers="user.followers"
      :following="user.following" />
    <UserInfo
      :blog="user.blog"
      :company="user.company"
      :twitter="user.twitter"
      :location="user.location" />
  </div>
</template>

<style>
.userCard {
  margin: 1.5rem 0 3rem;
  width: 100%;
  padding: 30px 24px 40px;
  background-color: var(--ucard-bg);
  box-shadow: var(--ucard-shadow);
  border-radius: 15px;
  display: grid;
  grid-template-columns: 70px 1fr;
  gap: 25px 20px;
}

.userCard>*:nth-child(n + 3) {
  grid-column: 1 / span 2;
}

.userCard__avatar {
  border-radius: 50%;
  max-width: 100%;
}

.userCard__bio {
  font-size: 1rem;
  line-height: 1.5;
  color: var(--bio-color);
}

.userCard__bio_empty {
  opacity: 0.75;
}

@media (min-width: 767px) {
  .userCard{
    grid-template-columns: 120px 1fr;
    padding: 40px;
    gap: 30px 40px;
  }
}

@media (min-width: 1024px) {
  .userCard {
    gap: 30px 40px;
  }

  .userCard>*:nth-child(n + 2){
    grid-column: 2 / span 1;
  }
}
</style>