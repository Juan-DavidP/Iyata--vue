<template>
    <div class="justify-center md:justify-start gap-2 flex md:gap-4 flex-wrap overflow-y-auto h-80">
        <div class="bg-blue-400 h-56 border border-solid border-black px-6 md:px-3 lg:px-8 py-3" v-for="item in data" :key="item.id">
            <Banner class="" :imagen="item.imagen" :nombre="item.nombre" :valor="item.valor" :id="item.id" />
        </div>
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
