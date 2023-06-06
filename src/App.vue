<script setup lang="ts">
  import characterQuery from '../queries/characters'
  import { useQuery } from '@vue/apollo-composable'
  import Character from '@/components/Character.vue'
  import Pagination from '@/components/Pagination.vue'
  import Search from '@/components/Search.vue'
  import Loader from '@/components/Loader.vue'
  import { ref } from 'vue'

  const currentPage = ref(1);
  const filter = ref({
    name: null
  })
  // results for the character query
  // Params: page: Integer, filter: Object, filter.name: String
  const { result, loading } = useQuery(characterQuery, () => ({
    page: currentPage.value,
    filter: {
      name: filter.value.name
    }
  }))
  // Action for page change
  const pageChange = (page) => {
    currentPage.value = page
  }
  // Action for data filtering
  const filterData = (val) => {
    currentPage.value = 1
    filter.value.name = val
  }
</script>

<template>
  <div class="container mx-auto">
    <div class="row">
      <div class="col-12 p-8">
        <div class="flex flex-col md:flex-row justify-between">
          <h1 class="text-3xl mb-2 md:mb-8">Rick &amp; Morty characters</h1>
          <search class="mb-4 md:mb-0" @filterstring="filterData"></search>
        </div>
        <loader v-if="loading" />
        <div v-if="!loading && result && result.characters && result.characters.results?.length">
          <div class="character mb-2 flex flex-row justify-start items-center hidden md:flex">
            <div class="character__image w-16"></div>
            <div class="character__name w-1/4 font-medium text-sm">Name</div>
            <div class="character__species w-1/4 font-medium text-sm">Species</div>
            <div class="character__status w-1/4 font-medium text-sm">Status</div>
          </div>
          <div v-for="(item, key) in result?.characters?.results" :key="key">
            <character :character="item"></character>
          </div>
          <pagination
            v-if="result?.characters?.info && result?.characters?.info?.pages > 1"
            :info="result?.characters?.info"
            :current="currentPage"
            @pagechange="pageChange"
          >
          </pagination>
        </div>
        <div v-else>
          Nothin found. Try another query, please.
        </div>
      </div>
    </div>
  </div>
</template>