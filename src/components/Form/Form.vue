<template>
    <form @submit.prevent="enviarFormulario">
        <div>
            <Input v-model="nombre" placeholder="Nombre..." />
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

console.log(nombre.value);


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
}

</script>

<style scoped></style>