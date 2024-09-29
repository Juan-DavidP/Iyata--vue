<template>
    <div v-for="item in data" :key="item.id">
        <Banner :imagen="item.imagen" :nombre="item.nombre" :valor="item.valor" />
    </div>
</template>

<script setup>
import Banner from '../Banner/Banner.vue';
import { getData } from '../../../services/api';

const data = await getData();
console.log(data); // Imprime todo el array

// data.forEach(item => {
//     console.log(item.valor); // Imprime el nombre de cada item
// });
</script>

<style scoped></style>
