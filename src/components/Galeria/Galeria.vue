<template>
    <div v-for="item in data" :key="item.id">
        <Banner :imagen="item.imagen" :nombre="item.nombre" :valor="item.valor" :id="item.id" />
    </div>
</template>

<script setup>
import Banner from '../Banner/Banner.vue';
import { getData } from '../../../services/api';
import { onMounted, ref, watch } from 'vue';

const data = ref([])

onMounted(async () => {
    try {
        data.value = await getData(); // Espera a que se resuelva la promesa
    } catch (error) {
        console.error("Error al obtener datos:", error);
    }
})

watch(data, async () => {
    try {
        data.value = await getData(); // Vuelve a llamar a getData
    } catch (error) {
        console.error("Error al obtener datos:", error);
    }
});


//console.log(data); // Imprime todo el array

// data.forEach(item => {
//     console.log(item.valor); // Imprime el nombre de cada item
// });
</script>

<style scoped></style>
