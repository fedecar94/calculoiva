<template>
  <div class="container">
    <h1>Caluladora de IVA</h1>
    <anadir></anadir>
    <br>
    <calculo></calculo>
    <br>
    <descarga></descarga>
    <br>
    <tabla></tabla>

  </div>
</template>

<script>
import anadir from './components/Anadir.vue'
import tabla from './components/Tabla.vue'
import calculo from './components/Calculo.vue'
import descarga from './components/Descargar.vue'

export default {
  name: 'app',
  components: {
    anadir,
    tabla,
    calculo,
    descarga
  }
}
</script>
