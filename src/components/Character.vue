<template>
    <div class="character border-2 p-2 rounded-xl border-gray-100 mb-2 flex flex-col md:flex-row justify-start items-center hover:bg-gray-50 hover:shadow-lg" v-if="character">
        <div class="character__image md:w-16 mb-4 md:mb-0"><img class="rounded-full md:w-10" :src="character?.image" /></div>
        <div class="character__name md:w-1/4 text-xl md:text-base">{{ character?.name }}</div>
        <div class="character__species md:w-1/4">{{ character?.species }}</div>
        <div class="character__status md:w-1/4">{{ character?.status }}</div>
    </div>
</template>

<script lang="ts" setup>
    let props = defineProps({
        character: {
            type: Object,
            default: {}
        }
    })
</script>