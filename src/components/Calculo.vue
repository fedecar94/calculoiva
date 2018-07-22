<template>
  <div class="row">
    <div class="col col-md-12" style="text-align:center">
      <h3>Montos para rellenar el formulario</h3>
    </div>
    <div class="col col-md-6">
      <table class="table">
        <tr style="text-align:center">
          <th colspan="0">TOTAL INGRESOS</th>
        </tr>
        <tr>
          <th>Ingresos 10%</th>
          <td style="text-align:right">{{Math.round(totalIngresos.iva10 / 1.1)}}</td>
          <td style="text-align:right">{{Math.round(totalIngresos.iva10 / 11)}}</td>
        </tr>
        <tr>
          <th>Ingresos 5%</th>
          <td style="text-align:right">{{Math.round(totalIngresos.iva05 / 1.05)}}</td>
          <td style="text-align:right">{{Math.round(totalIngresos.iva05 / 21)}}</td>
        </tr>
        <tr>
          <th>Ingresos excenta</th>
          <td style="text-align:right">{{totalIngresos.ivaEX}}</td>
        </tr>
      </table>
    </div>
    <div class="col col-md-6">
      <table class="table">
        <tr style="text-align:center">
          <th colspan="0">TOTAL EGRESOS</th>
        </tr>
        <tr>
          <th>Egresos 10%</th>
          <td style="text-align:right">{{Math.round(totalEgresos.iva10 / 1.1)}}</td>
          <td style="text-align:right">{{Math.round(totalEgresos.iva10 / 11)}}</td>
        </tr>
        <tr>
          <th>Egresos 5%</th>
          <td style="text-align:right">{{Math.round(totalEgresos.iva05 / 1.05)}}</td>
          <td style="text-align:right">{{Math.round(totalEgresos.iva05 / 21)}}</td>
        </tr>
        <tr>
          <th>Egresos excenta</th>
          <td style="text-align:right">{{totalEgresos.ivaEX}}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'calculo',
  computed: {
    ingresos () {
      return this.$store.state.ingresos
    },
    egresos () {
      return this.$store.state.egresos
    },
    totalIngresos () {
      var total = {'iva10': 0, 'iva05': 0, 'ivaEX': 0}
      for (let i = 0; i < this.ingresos.length; i++) {
        total.iva10 = this.ingresos[i].iva10
        total.iva05 = this.ingresos[i].iva05
        total.ivaEX = this.ingresos[i].ivaEX
      }
      return total
    },
    totalEgresos () {
      var total = {'iva10': 0, 'iva05': 0, 'ivaEX': 0}
      for (let i = 0; i < this.egresos.length; i++) {
        total.iva10 = this.egresos[i].iva10
        total.iva05 = this.egresos[i].iva05
        total.ivaEX = this.egresos[i].ivaEX
      }
      return total
    }
  }
}
</script>
