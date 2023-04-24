<script setup lang="ts">
import { useLazyQuery } from '@vue/apollo-composable'
import { computed, reactive } from 'vue'
import Container from '@/components/UI/Container.vue'
import TheHeader from '@/components/TheHeader.vue'
import TheSearch from '@/components/TheSearch.vue'
import UserCard from '@/components/UserCard.vue'
import USER_QUERY from '@/graphql/User.query.gql'
import { extractLocalUser } from './utils/extract-local-user'
import type { LocalGithubUser, GithubUser } from '@/types'

const variables = reactive({login: ''})

const { loading, error, result, load } = useLazyQuery<{user: GithubUser}>(
  USER_QUERY,
  variables
)

const user = computed<LocalGithubUser | null>(() => {
  if (result.value?.user) {
    return extractLocalUser(result.value.user)
  }
  return null
})

const handleSearchSubmit = (search: string) => {
  variables.login = search
  load()
}
</script>

<template>
  <Container>
    <TheHeader />
    <TheSearch :has-error="false" @submit="handleSearchSubmit"/>
    <p v-if="loading" class="fetching-info">Loading...</p>
    <p v-if="error" class="fetching-info">
      Something went wrong...
    </p>
    <UserCard 
      v-if="user"
      :user="user" />
  </Container>
</template>

<style scoped>
.fetching-info {
  margin-top: 1.5rem;
  color: var(--text-color)
}
</style>
