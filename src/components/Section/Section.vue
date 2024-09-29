<template>
    <div>
        <h2>{{ titulo }}</h2>
        <slot>

        </slot>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';
const props = defineProps(['titulo'])
const { titulo } = props

</script>

<style scoped></style>