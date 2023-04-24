<script setup lang="ts">
import { localDate } from '@/utils/local-date'
import type { LocalGithubUser } from '@/types';

interface UserTitleProps extends Pick<
  LocalGithubUser,
  'login' | 'name' | 'created'
> { }

const { name, login, created } = defineProps<UserTitleProps>()

// const joinedDate = localDate.format(new Date(created));
</script>

<template>
  hello
  <div class="userTitle">
    <h2>{{ name }}</h2>
    <h3>{{ login }}</h3>
    <!-- <span>{{ joinedDate }}</span> -->
  </div>
</template>

<style scoped>
.userTitle h2 {
  font-size: 1rem;
  line-height: 1.5;
  font-weight: 700;
  color: var(--utitle-color);
}

.userTitle h3 {
  color: var(--main-color);
  font-size: 0.75rem;
  line-height: 1.5;
}

.userTitle h3::before {
  content: '@';
}

.userTitle span {
    color: var(--ujoined-color);
    font-size: 0.75rem;
    line-height: 1.5;
    margin-top: 6px;
}

.userTitle span::before {
  content: 'Joined ';
}

@media (min-width: 767px) {
  .userTitle {
    display: grid;
    grid-template-rows: repeat(2, auto);
    grid-auto-flow: column;
    gap: 2px 10px;
  }
  .userTitle h2 {
    font-size: 1.5rem;
  }

  .userTitle h3 {
    font-size: 1rem;
  }

  .userTitle span {
    font-size: 1rem;
    justify-self: end;
  }
}
</style>