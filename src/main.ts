import { createApp, provide, h } from 'vue'
import App from './App.vue'
import ApolloClient from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { DefaultApolloClient } from '@vue/apollo-composable'

import '@/assets/main.css'

// Apollo client 
const link = new HttpLink({
    uri: import.meta.env.VITE_BASE_URL
  })

const apolloClient = new ApolloClient({
    link,
    cache: new InMemoryCache(),
})

// Vue app instance
createApp({
    setup () {
      provide(DefaultApolloClient, apolloClient)
    },
    render: () => h(App),
}).mount('#app')
