<template>
    <div>
        <div>
            <img :src="imagen" :alt="nombre">
        </div>
        <div>
            <p>$ {{ valor }}</p>
            <button> <img src="/icon.svg" alt="" :key="id" @click="deleteProduct(id)"></button>
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

<style scoped>
img {
    width: 100px;
}
</style>