<template>
  <div>
    <br>
    <h4>Ingresos</h4>
    <table class="table">
      <thead>
        <tr>
          <th>Factura numero</th>
          <th>Cliente</th>
          <th>10%</th>
          <th>5%</th>
          <th>Excenta</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="factura in ingresos" v-bind:key="factura.index">
          <td>{{factura.numero}}</td>
          <td>{{factura.nombre}}</td>
          <td style="text-align:right">{{factura.iva10}}</td>
          <td style="text-align:right">{{factura.iva05}}</td>
          <td style="text-align:right">{{factura.ivaEX}}</td>
          <td style="text-align:right">{{parseInt(factura.iva10) + parseInt(factura.iva05) + parseInt(factura.ivaEX)}}</td>
          <td><button class="btn btn-danger" @click="eliminarIngreso(factura)">Eliminar</button></td>
        </tr>
      </tbody>
    </table>
    <br>
    <h4>Egresos</h4>
    <table class="table">
      <thead>
        <tr>
          <th>Factura numero</th>
          <th>Proveedor</th>
          <th>10%</th>
          <th>5%</th>
          <th>Excenta</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="factura in egresos" v-bind:key="factura.index">
          <td>{{factura.numero}}</td>
          <td>{{factura.nombre}}</td>
          <td style="text-align:right">{{factura.iva10}}</td>
          <td style="text-align:right">{{factura.iva05}}</td>
          <td style="text-align:right">{{factura.ivaEX}}</td>
          <td style="text-align:right">{{parseInt(factura.iva10) + parseInt(factura.iva05) + parseInt(factura.ivaEX)}}</td>
          <td><button class="btn btn-danger" @click="eliminarEgreso(factura)">Eliminar</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'tabla',
  computed: {
    ingresos: {
      get: function () {
        return this.$store.state.ingresos
      },
      set: function (newValue) {
        this.$store.dispatch('setingresos', newValue)
      }
    },
    egresos: {
      get: function () {
        return this.$store.state.egresos
      },
      set: function (newValue) {
        this.$store.dispatch('setegresos', newValue)
      }
    }
  },
  methods: {
    eliminarIngreso: function (factura) {
      let array = []
      for (let i = 0; i < this.ingresos.length; i++) {
        if (factura !== this.ingresos[i])
          array.push(this.ingresos[i])
      }
      this.ingresos = array
    },
    eliminarEgreso: function (factura) {
      let array = []
      for (let i = 0; i < this.egresos.length; i++) {
        if (factura !== this.egresos[i])
          array.push(this.egresos[i])
      }
      this.egresos = array
    }
  }
}
</script>
