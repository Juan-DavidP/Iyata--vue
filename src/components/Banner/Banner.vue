<template>
    <div>
        <div>
            <img class="border border-solid border-black rounded bg-white w-28" :src="imagen" :alt="nombre">
            <p class="text-xl text-white mt-2 my-1">{{ nombre }}</p>
        </div>
        <div class="flex justify-between">
            <p class="text-xl text-white">${{ valor }}</p>
            <button> <img class="w-5" src="/icon.svg" alt="" :key="id" @click="deleteProduct(id)"></button>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';
import { deleteProduct } from '../../../services/api';

const props = defineProps([
    'imagen',
    'nombre',
    'valor',
    'id'
])

const { imagen, nombre, valor, id } = props


</script>

<style scoped></style>