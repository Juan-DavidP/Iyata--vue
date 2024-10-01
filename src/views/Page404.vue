<template>
    <Header />
    <div class="flex items-center px-24 min-h-screen">
        <div class="text-start">
            <h1 class="text-4xl text-bold py-5">Página no encontrada</h1>
            <p class="mb-8 pr-24 text-xl">Lo sentimos parece que la página que buscas no existe o ha sido movida.
                ¡No te preocupes! Estamos aquí
                para ayudarte a volver al camino correcto.</p>
            <!-- <RouterLink to="/"> -->
            <button
                class="px-4 py-3 font-semibold text-white bg-blue-500 rounded-lg shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
                @click="volverInicio">Volver al incio</button>
            <!-- </RouterLink> -->
        </div>
        <div class="self-center">
            <img class="w-dvw" src="/page404.svg" alt="">
        </div>
    </div>
    <Footer />
</template>

<script setup>
import Header from '@/components/Header/Header.vue';
import Footer from '@/components/Footer/Footer.vue';

import { useRouter } from 'vue-router';
const router = useRouter()
function volverInicio() {
    router.push('/')
}
</script>

<style scoped></style>