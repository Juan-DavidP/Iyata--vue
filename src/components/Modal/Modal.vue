<template>
    <div>
        <button @click="estadoModal" class="flex items-center px-4 py-2 bg-blue-500 text-white rounded">
            <i class="pi pi-question-circle text-center"></i>
        </button>
        <div v-if="open" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div class="bg-white rounded-lg p-6 relative">
                <button @click="estadoModal" class="text-red-500 rounded absolute top-2 right-5">X</button>
                <h6 class="text-blue-600">Ayuda: uso del proyecto</h6>
                <p class="text-black">pasos:</p>
                <ol class="text-black list-decimal pl-5">
                    <li>Inicialización: Ejecuta el siguiente comando para iniciar la API:
                        <strong>npx json-server -p 3001 ./database/db.json</strong></li>
                    <li>Creación: Ingresa el nombre del producto, su precio y una imagen de referencia para crear un nuevo producto.</li>
                    <li>Eliminación: Utiliza el icono de la papelera para eliminar el producto que ya no se desee.</li>
                </ol>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import 'primeicons/primeicons.css';

const open = ref(false);

function estadoModal() {
    open.value = !open.value;
}
</script>

<style scoped></style>
