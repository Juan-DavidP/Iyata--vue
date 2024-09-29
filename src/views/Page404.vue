<template>
    <div>
        <h1>Página no encontrada</h1>
        <!-- <RouterLink to="/"> -->
            <button @click="volverInicio">Volver al incio</button>
        <!-- </RouterLink> -->
    </div>
</template>

<script setup>

import { useRouter } from 'vue-router';
const router = useRouter()
function volverInicio() {
    router.push('/')
}
</script>

<style scoped></style>