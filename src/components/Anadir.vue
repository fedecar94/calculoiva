<template>
  <div style="text-align:center">
    <h3>Ingrese las facturas para calcular el impuesto a pagar</h3>
    <br>
    <form>
      <div class="row">
        <div class="col col-md-1">
          <label>Tipo de factura</label>
        </div>
        <div class="col col-md-3">
          <div class="btn-group" data-toggle="buttons">
            <label class="btn btn-primary active">
              <input type="radio" name="radio" id="in" v-model="tipo" v-bind:value="'i'" autocomplete="off" checked> Ingreso
            </label>
            <label class="btn btn-primary">
              <input type="radio" name="radio" id="eg" v-model="tipo" v-bind:value="'e'" autocomplete="off"> Egreso
            </label>
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
    <pre>
      {{tipo}}
    </pre>
  </div>
</template>

<script>
export default {
  name: 'anadir',
  data: function () {
    return {
      tipo: 'i',
      nuevo: {
        'numero': '',
        'nombre': '',
        'iva10': '',
        'iva05': '',
        'ivaEX': ''
      }
    }
  },
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
    anadir: function (factura) {

    }
  }
}
</script>
