<template>
    <input class="border border-solid border-blue-500 px-2 rounded-lg py-2.5 w-5/6" :value="modelValue" @blur="$emit('update:modelValue', $event.target.value)"  required/>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps(['modelValue']);

//para trabajar el envío de valores con vue se debe usar la prop modelValue
</script>

<style scoped></style>
