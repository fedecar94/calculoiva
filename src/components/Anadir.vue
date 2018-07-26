<template>
  <div style="text-align:center">
    <h3>Ingrese las facturas para calcular el impuesto a pagar</h3>
    <br>
    <form>
      <div class="row">
        <div class="col col-md-4">
          <div class="form-group">
            <label for="">Tipo de factura</label>
            <select class="form-control" v-model="tipo">
              <option>Compra</option>
              <option>Venta</option>
            </select>
          </div>
        </div>
        <div class="form-group col-md-4">
          <label>Numero de la factura</label>
          <input type="text" v-model="nuevo.numero" class="form-control" placeholder="XXX-YYY-ZZZZZZZ">
        </div>
        <div class="form-group col-md-4">
          <label>Nombre en la factura</label>
          <input type="text" v-model="nuevo.nombre" class="form-control" placeholder="Empresa Ejemplar S.A.">
        </div>
        <div class="form-group col-md-4">
          <label>Monto al 10%</label>
          <input type="number" v-model="nuevo.iva10" class="form-control" placeholder="1234567">
        </div>
        <div class="form-group col-md-4">
          <label>Monto al 5%</label>
          <input type="number" v-model="nuevo.iva05" class="form-control" placeholder="1234567">
        </div>
        <div class="form-group col-md-4">
          <label>Monto excento</label>
          <input type="number" v-model="nuevo.ivaEX" class="form-control" placeholder="1234567">
        </div>
      </div>
    </form>
    <button @click="anadir" type="button" class="btn btn-primary">Añadir</button>
  </div>
</template>

<script>
export default {
  name: 'anadir',
  data: function () {
    return {
      tipo: 'Compra',
      nuevo: {
        'numero': '',
        'nombre': '',
        'iva10': '',
        'iva05': '',
        'ivaEX': '',
        'timbrado': '',
        'condicion': 'Contado',
        'cuotas': 0
      }
    }
  },
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
    anadir: function () {
      if (this.nuevo.numero === '') { this.nuevo.numero = 'Sin numero' }
      if (this.nuevo.nombre === '') { this.nuevo.nombre = 'Sin nombre' }
      if (this.nuevo.iva10 === '') { this.nuevo.iva10 = 0 }
      if (this.nuevo.iva05 === '') { this.nuevo.iva05 = 0 }
      if (this.nuevo.ivaEX === '') { this.nuevo.ivaEX = 0 }
      if (this.nuevo.timbrado === '') { this.nuevo.timbrado = 0 }
      if (this.nuevo.condicion === 'Contado') {
        this.nuevo.cuotas = 0
      } else {
        if (this.nuevo.cuotas <= 0) { this.nuevo.cuotas = 1 }
      }
      let array = []
      if (this.tipo === 'Venta') {
        for (let i = 0; i < this.Ventas.length; i++) {
          array.push(this.Ventas[i])
        }
        array.push(this.nuevo)
        this.Ventas = array
      } else {
        for (let i = 0; i < this.Compras.length; i++) {
          array.push(this.Compras[i])
        }
        array.push(this.nuevo)
        this.Compras = array
      }
      this.nuevo = {
        'numero': '',
        'nombre': '',
        'iva10': '',
        'iva05': '',
        'ivaEX': '',
        'timbrado': '',
        'condicion': 'Contado',
        'cuotas': 0
      }
    }
  }
}
</script>
