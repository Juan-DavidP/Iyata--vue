import axios from "axios";

const api = 'http://localhost:3001/productos'

export async function getData() {
    try {
        const respuesta = await axios.get(api)
        // if (respuesta.data.length > 0) {
        // const data = respuesta.data
        // }
        // else {
        // data = []
        // }
        const data = respuesta.data
        return data
    } catch (error) {
        if (error.response) {
            console.error("error en la respuesta", error.response.data)
            console.error("código del error", error.response.status)
        } else if (error.request) {
            // La solicitud fue hecha pero no se recibió respuesta
            console.error('No se recibió respuesta del servidor:', error.request);
        } else {
            // Algo sucedió al configurar la solicitud
            console.error('Error al configurar la solicitud:', error.message);
        }
    }
}

export async function CreateProduct(datosProducto) {
    console.log(datosProducto);
    const respuesta = await axios.post(api, datosProducto);
    console.log("producto agregado: ", respuesta.data);
    return respuesta.data
}

export async function deleteProduct(id) {
    axios.delete(`${api}/${id}`)
}