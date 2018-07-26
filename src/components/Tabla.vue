<template>
  <div>
    <br>
    <h4>Ventas</h4>
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
        <tr v-for="factura in Ventas" v-bind:key="factura.index">
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
    <h4>Compras</h4>
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
        <tr v-for="factura in Compras" v-bind:key="factura.index">
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
    Ventas: {
      get: function () {
        return this.$store.state.Ventas
      },
      set: function (newValue) {
        this.$store.dispatch('setVentas', newValue)
      }
    },
    Compras: {
      get: function () {
        return this.$store.state.Compras
      },
      set: function (newValue) {
        this.$store.dispatch('setCompras', newValue)
      }
    }
  },
  methods: {
    eliminarIngreso: function (factura) {
      let array = []
      for (let i = 0; i < this.Ventas.length; i++) {
        if (factura !== this.Ventas[i]) {
          array.push(this.Ventas[i])
        }
      }
      this.Ventas = array
    },
    eliminarEgreso: function (factura) {
      let array = []
      for (let i = 0; i < this.Compras.length; i++) {
        if (factura !== this.Compras[i]) {
          array.push(this.Compras[i])
        }
      }
      this.Compras = array
    }
  }
}
</script>
