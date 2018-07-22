<template>
  <div class="container">
    <h1>Caluladora de IVA</h1>
    <anadir></anadir>
    <calculo></calculo>
    <tabla></tabla>

  </div>
</template>

<script>
import anadir from './components/Anadir.vue'
import tabla from './components/Tabla.vue'
import calculo from './components/Calculo.vue'

export default {
  name: 'app',
  components: {
    anadir,
    tabla,
    calculo
  }
}
</script>
