<template>
    <form @submit.prevent="enviarFormulario">
        <div class="flex flex-col items-center gap-10">
            <Input v-model="nombre" placeholder="Nombre..." />
            <Input v-model="valor" type="number" placeholder="Precio..." />
            <Input v-model="imagen" placeholder="Imagen..." />
            <div class="flex gap-10">
                <Button class="bg-blue-500 text-white" nombre-button="Enviar" tipo="submit" />
                <Button class="text-blue-500" nombre-button="limpiar" tipo="reset" />
            </div>
        </div>
    </form>
</template>

<script setup>
import { ref } from 'vue';
import { CreateProduct } from '../../../services/api';
import Input from './Input/Input.vue';
import Button from './Button/Button.vue';
import Modal from '../Modal/Modal.vue';

let nombreValido = true
let imagenValido = true
let valorValido = true

/*function validacionDatos() {
    if (nombre.value.length < 3) {
        nombreValido = false
    }

    if (valor.value < 5) {
        valorValido = false
    }

    if (imagen.value.length < 10) {
        imagenValido = false
    }
    return [nombreValido, valorValido, imagenValido]
}*/

const nombre = ref("")
const imagen = ref("")
const valor = ref("")

function enviarFormulario() {
    /*const validacion = validacionDatos()
    console.log(validacion);
    for (let index = 0; index < validacion.length; index++) {
        console.log(index);
        if (validacion[index] === false) {
            alert("valor invalido")
            break
        }
        else {}*/
    CreateProduct({
        nombre: nombre.value,
        imagen: imagen.value,
        valor: valor.value
    })

    nombre.value = ""
    imagen.value = ""
    valor.value = ""
}

</script>

<style scoped></style>