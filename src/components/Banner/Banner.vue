<template>
    <div>
        <div>
            <img :src="imagen" :alt="nombre">
        </div>
        <div>
            <p>$ {{ valor }}</p>
            <img src="/icon.svg" alt="">
        </div>

    </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps([
    'imagen',
    'nombre',
    'valor'
])

const { imagen, nombre, valor } = props

</script>

<style scoped>
img{
    width: 100px;
}

</style>