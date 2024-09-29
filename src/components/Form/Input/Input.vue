<template>
    <input :value="modelValue" @blur="$emit('update:modelValue', $event.target.value)" />
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps(['modelValue']);

//para trabajar el envío de valores con vue se debe usar la prop modelValue
</script>

<style scoped></style>
