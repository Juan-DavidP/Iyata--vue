<template>
    <footer class="mt-8 bg-blue-400 text-white text-center text-xl py-1 flex flex-col w-full">
        <h2>Prueba Vue</h2>
        <div class="flex justify-around">
            <h3>Realizado por: Juan Pelaez</h3>
            <p>Día de inicio 28/09/2024</p>
            <p>Fecha actual: {{ fechaFormateada }} </p>
        </div>
    </footer>
</template>

<script setup>
const fecha = new Date()

const año = fecha.getFullYear()
const mes = fecha.getMonth() + 1
const dia = fecha.getDate()

const fechaFormateada = `${dia}/${mes}/${año}`

</script>

<style scoped></style>