<template>
    <form @submit.prevent="enviarFormulario">
        <div>
            <Input v-model="name" placeholder="Nombre..." />
            <Input v-model="valor" type="number" placeholder="Precio..." />
            <Input v-model="imagen" placeholder="Imagen..." />
            <div>
                <Button nombre-button="Enviar" tipo="submit" />
                <Button nombre-button="limpiar" tipo="reset" />
            </div>
        </div>
    </form>
</template>

<script setup>
import { ref } from 'vue';
import { CreateProduct } from '../../../services/api';
import Input from './Input/Input.vue';
import Button from './Button/Button.vue';

const name = ref("")
const imagen = ref("")
const valor = ref(0)

console.log(name.value);


function enviarFormulario() {
    CreateProduct([name.value, imagen.value, valor.value])
}

</script>

<style scoped></style>