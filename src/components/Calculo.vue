<template>
  <div class="row">
    <div class="col col-md-12" style="text-align:center">
      <h3>Montos para rellenar el formulario</h3>
    </div>
    <div class="col col-md-6">
      <table class="table">
        <tr style="text-align:center">
          <th>TOTAL Ventas</th>
          <th>LIQUIDACION</th>
          <th>IMPUESTO</th>
        </tr>
        <tr>
          <th>Ventas 10%</th>
          <td style="text-align:right">{{Math.round(totalVentas.iva10 / 1.1)}}</td>
          <td style="text-align:right">{{Math.round(totalVentas.iva10 / 11)}}</td>
        </tr>
        <tr>
          <th>Ventas 5%</th>
          <td style="text-align:right">{{Math.round(totalVentas.iva05 / 1.05)}}</td>
          <td style="text-align:right">{{Math.round(totalVentas.iva05 / 21)}}</td>
        </tr>
        <tr>
          <th>Ventas excenta</th>
          <td style="text-align:right">{{totalVentas.ivaEX}}</td>
          <td style="text-align:right">-</td>
        </tr>
      </table>
    </div>
    <div class="col col-md-6">
      <table class="table">
        <tr style="text-align:center">
          <th>TOTAL Compras</th>
          <th>LIQUIDACION</th>
          <th>IMPUESTO</th>
        </tr>
        <tr>
          <th>Compras 10%</th>
          <td style="text-align:right">{{Math.round(totalCompras.iva10 / 1.1)}}</td>
          <td style="text-align:right">{{Math.round(totalCompras.iva10 / 11)}}</td>
        </tr>
        <tr>
          <th>Compras 5%</th>
          <td style="text-align:right">{{Math.round(totalCompras.iva05 / 1.05)}}</td>
          <td style="text-align:right">{{Math.round(totalCompras.iva05 / 21)}}</td>
        </tr>
        <tr>
          <th>Compras excenta</th>
          <td style="text-align:right">{{totalCompras.ivaEX}}</td>
          <td style="text-align:right">-</td>
        </tr>
      </table>
    </div>
    <div class="col col-12">
      <h5 style="text-align:center">
        <b>Total a pagar IVA: {{ totalGeneral }}</b>
      </h5>
    </div>
  </div>
</template>

<script>
export default {
  name: 'calculo',
  computed: {
    Ventas () {
      return this.$store.state.Ventas
    },
    Compras () {
      return this.$store.state.Compras
    },
    totalVentas () {
      var total = {'iva10': 0, 'iva05': 0, 'ivaEX': 0}
      for (let i = 0; i < this.Ventas.length; i++) {
        total.iva10 = total.iva10 + parseInt(this.Ventas[i].iva10)
        total.iva05 = total.iva05 + parseInt(this.Ventas[i].iva05)
        total.ivaEX = total.ivaEX + parseInt(this.Ventas[i].ivaEX)
      }
      return total
    },
    totalCompras () {
      var total = {'iva10': 0, 'iva05': 0, 'ivaEX': 0}
      for (let i = 0; i < this.Compras.length; i++) {
        total.iva10 = total.iva10 + parseInt(this.Compras[i].iva10)
        total.iva05 = total.iva05 + parseInt(this.Compras[i].iva05)
        total.ivaEX = total.ivaEX + parseInt(this.Compras[i].ivaEX)
      }
      return total
    },
    totalGeneral () {
      let total = 0
      total = Math.round(this.totalVentas.iva10 / 11)
      total = total + Math.round(this.totalVentas.iva05 / 21)
      total = total - Math.round(this.totalCompras.iva10 / 11)
      total = total - Math.round(this.totalCompras.iva05 / 21)
      return total
    }
  }
}
</script>
