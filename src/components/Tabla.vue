<template>
  <div>
    <br>
    <h4>Ingresos</h4>
    <table class="table">
      <thead>
        <tr>
          <th>Factura numero</th>
          <th>Nombre en la factura</th>
          <th>Monto al 10%</th>
          <th>Monto al 5%</th>
          <th>Monto excenta</th>
          <th>Total de la factura</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="factura in ingresos" v-bind:key="factura.index">
          <td>{{factura.numero}}</td>
          <td>{{factura.nombre}}</td>
          <td>{{factura.iva10}}</td>
          <td>{{factura.iva05}}</td>
          <td>{{factura.ivaEX}}</td>
          <td>{{factura.iva10 + factura,iva05 + factura.ivaEX}}</td>
        </tr>
      </tbody>
    </table>
    <br>
    <h4>Egresos</h4>
    <table class="table">
      <thead>
        <tr>
          <th>Factura numero</th>
          <th>Nombre en la factura</th>
          <th>Monto al 10%</th>
          <th>Monto al 5%</th>
          <th>Monto excenta</th>
          <th>Total de la factura</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="factura in egresos" v-bind:key="factura.index">
          <td>{{factura.numero}}</td>
          <td>{{factura.nombre}}</td>
          <td>{{factura.iva10}}</td>
          <td>{{factura.iva05}}</td>
          <td>{{factura.ivaEX}}</td>
          <td>{{factura.iva10 + factura,iva05 + factura.ivaEX}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'tabla',
  computed: {
    ingresos () {
      return this.$store.state.ingresos
    },
    egresos () {
      return this.$store.state.egresos
    }
  }
}
</script>
