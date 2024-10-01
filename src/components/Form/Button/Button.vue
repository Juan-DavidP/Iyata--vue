<template>
    <button class=" py-4 px-14 border border-solid border-blue-500 rounded" :type="tipo"> {{ nombreButton }}</button>
</template>

<script setup>
import { defineProps } from 'vue';
const props = defineProps(['nombreButton', 'color', 'tipo'])
const { nombreButton, color, tipo } = props

</script>

<style scoped></style>