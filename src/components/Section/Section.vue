<template>
    <div class=" md:w-1/2 md:px-10 pt-10">
        <h2 class="text-center text-2xl mb-12 ">{{ titulo }}</h2>
        <slot>
        </slot>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';
const props = defineProps(['titulo'])
const { titulo } = props

</script>

<style scoped>

</style>