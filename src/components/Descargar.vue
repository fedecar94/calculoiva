<template>
  <div>
    <div class="form-group">
      <label for="archivo-name">Nombre del archivo cuando se descargue</label>
      <input type="text" v-model="nombre" class="form-control" id="archivo-name" aria-describedby="helpId" placeholder="Juan Pueblo">
      <small id="helpId" class="form-text text-muted">el archivo se llamara {{nombre}}.xlsx</small>
    </div>
    <button @click="ComprasXlsx" class="btn btn-info">Descargar Compras como excel</button>
    <button @click="VentasXlsx" class="btn btn-primary">Descargar Ventas como excel</button>
  </div>
</template>

<script>
import zipcelx from 'zipcelx'

export default {
  name: 'Botones de descarga',
  data: function () {
    return {
      nombre: ''
    }
  },
  computed: {
    Ventas: {
      get: function () {
        return this.$store.state.Ventas
      }
    },
    Compras: {
      get: function () {
        return this.$store.state.Compras
      }
    }
  },
  methods: {
    VentasXlsx: function () {
      let lista = []
      for (let i = 0; i < this.Ventas.length; i++) {
        lista.push(
          {
            value: this.Ventas[i].ruc,
            type: 'string'
          },
          {
            value: this.Ventas[i].dv,
            type: 'string'
          },
          {
            value: this.Ventas[i].nombre,
            type: 'string'
          },
          {
            value: this.Ventas[i].numero,
            type: 'string'
          },
          {
            value: this.Ventas[i].fecha,
            type: 'string'
          },
          {
            value: Math.round(this.Ventas[i].iva10 / 1.1),
            type: 'number'
          },
          {
            value: Math.round(this.Ventas[i].iva10 / 11),
            type: 'number'
          },
          {
            value: Math.round(this.Ventas[i].iva05 / 1.05),
            type: 'number'
          },
          {
            value: Math.round(this.Ventas[i].iva05 / 21),
            type: 'number'
          },
          {
            value: this.Ventas[i].ivaEX,
            type: 'number'
          },
          {
            value: this.Ventas[i].iva10 + this.Ventas[i].iva5 + this.Ventas[i].ivaEX,
            type: 'number'
          },
          {
            value: this.Ventas[i].condicion,
            type: 'string'
          },
          {
            value: this.Ventas[i].cuotas,
            type: 'number'
          },
          {
            value: this.Ventas[i].timbrado,
            type: 'string'
          }
        )
      }
      const config = {
        filename: 'Ventas-' + this.nombre,
        sheet: {
          data: [
            [
              {
                value: 'RUC',
                type: 'string'
              },
              {
                value: 'DV',
                type: 'string'
              },
              {
                value: 'Razon Social',
                type: 'string'
              },
              {
                value: 'Numero Documento',
                type: 'string'
              },
              {
                value: 'Fecha',
                type: 'string'
              },
              {
                value: 'Liquidacion 10%',
                type: 'string'
              },
              {
                value: 'Iva 10%',
                type: 'string'
              },
              {
                value: 'Liquidacion 5%',
                type: 'string'
              },
              {
                value: 'Iva 5%',
                type: 'string'
              },
              {
                value: 'Excenta',
                type: 'string'
              },
              {
                value: 'Total',
                type: 'string'
              },
              {
                value: 'Condicion',
                type: 'string'
              },
              {
                value: 'Cuotas',
                type: 'string'
              },
              {
                value: 'Timbrado',
                type: 'string'
              }
            ],
            lista
          ]
        }
      }
      zipcelx(config)
    },
    ComprasXlsx: function () {
      let lista = []
      for (let i = 0; i < this.Compras.length; i++) {
        lista.push(
          {
            value: this.Compras[i].ruc,
            type: 'string'
          },
          {
            value: this.Compras[i].dv,
            type: 'string'
          },
          {
            value: this.Compras[i].nombre,
            type: 'string'
          },
          {
            value: this.Compras[i].timbrado,
            type: 'string'
          },
          {
            value: this.Compras[i].numero,
            type: 'string'
          },
          {
            value: this.Compras[i].fecha,
            type: 'string'
          },
          {
            value: Math.round(this.Compras[i].iva10 / 1.1),
            type: 'number'
          },
          {
            value: Math.round(this.Compras[i].iva10 / 11),
            type: 'number'
          },
          {
            value: Math.round(this.Compras[i].iva05 / 1.05),
            type: 'number'
          },
          {
            value: Math.round(this.Compras[i].iva05 / 21),
            type: 'number'
          },
          {
            value: this.Compras[i].ivaEX,
            type: 'number'
          },
          {
            value: this.Compras[i].iva10 + this.Compras[i].iva5 + this.Compras[i].ivaEX,
            type: 'number'
          },
          {
            value: this.Compras[i].condicion,
            type: 'string'
          },
          {
            value: this.Compras[i].cuotas,
            type: 'number'
          }
        )
      }
      const config = {
        filename: 'Compras-' + this.nombre,
        sheet: {
          data: [
            [
              {
                value: 'RUC',
                type: 'string'
              },
              {
                value: 'DV',
                type: 'string'
              },
              {
                value: 'Razon Social',
                type: 'string'
              },
              {
                value: 'Timbrado',
                type: 'string'
              },
              {
                value: 'Numero Documento',
                type: 'string'
              },
              {
                value: 'Fecha',
                type: 'string'
              },
              {
                value: 'Liquidacion 10%',
                type: 'string'
              },
              {
                value: 'Iva 10%',
                type: 'string'
              },
              {
                value: 'Liquidacion 5%',
                type: 'string'
              },
              {
                value: 'Iva 5%',
                type: 'string'
              },
              {
                value: 'Excenta',
                type: 'string'
              },
              {
                value: 'Total',
                type: 'string'
              },
              {
                value: 'Condicion',
                type: 'string'
              },
              {
                value: 'Cuotas',
                type: 'string'
              }
            ],
            lista
          ]
        }
      }
      zipcelx(config)
    }
  }
}
</script>
