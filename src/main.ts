import { createApp, provide, h } from 'vue'
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core'
import { DefaultApolloClient } from '@vue/apollo-composable'

import App from './App.vue'
import { API_TOKEN, API_URL } from '@/config'
import './assets/styles/base.css'

const httpLink = createHttpLink({
  uri: API_URL,
  headers: {
    'Authorization': `bearer ${API_TOKEN}`,
  }
})

const cache = new InMemoryCache()

const apolloClient = new ApolloClient({
  link: httpLink,
  cache
})

const app = createApp({
  setup () {
    provide(DefaultApolloClient, apolloClient)
  },

  render: () => h(App),
})

app.mount('#app')
