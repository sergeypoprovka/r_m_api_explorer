<template>
    <div class="sm:col-span-4">
        <div class="mt-2">
            <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-gray-300 w-64">
                <input @change="$emit('filterstring', search)" v-model="search" type="text" name="username" id="username" autocomplete="username" class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="Search by character name...">
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
    import { ref } from 'vue'

    const search = ref(null)
</script>