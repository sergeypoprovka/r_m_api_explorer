<template>
    <div class="pagination_group">
        <paginate
            v-model="page"
            :page-count="info?.pages"
            :click-handler="changePage"
            :prev-text="'Prev'"
            :next-text="'Next'"
        >
        </paginate>
        <div class="pagination__total hidden md:flex">Count: {{ info.count }}</div>
    </div>
</template>

<script lang="ts" setup>
    import { ref } from 'vue'
    import Paginate from "vuejs-paginate-next";
    
    const emit = defineEmits(['pagechange'])
    const page = ref(props.current)
    
    const props = defineProps({
        info: {
            type: Object,
            default: {}
        },
        current: {
            type: Number,
            value: 1
        }
    })
    // Action fo page change
    const changePage = (num) => {
        emit('pagechange', num)
    }
</script>

<style>
    .pagination_group{
        margin-top: 4rem;
        @apply flex flex-row justify-between;
    }
    .pagination{
        @apply flex flex-row;
    }
    .pagination li:not(.disabled) a{
        @apply border border-l-0 border-gray-100 p-2 hover:cursor-pointer;
    }
    .pagination li.active a, .pagination li:hover a{
        @apply bg-gray-100;
    }
    .pagination li.disabled a{
        @apply border border-l-0 border-gray-100 p-2 bg-transparent hover:cursor-default;
    }
    .pagination li:first-of-type a{
        @apply border-l;
    }
</style>