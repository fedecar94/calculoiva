(function(t){function e(e){for(var n,r,o=e[0],l=e[1],u=e[2],c=0,p=[];c<o.length;c++)r=o[c],s[r]&&p.push(s[r][0]),s[r]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);v&&v(e);while(p.length)p.shift()();return i.push.apply(i,u||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,o=1;o<a.length;o++){var l=a[o];0!==s[l]&&(n=!1)}n&&(i.splice(e--,1),t=r(r.s=a[0]))}return t}var n={},s={0:0},i=[];function r(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=n,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(a,n,function(e){return t[e]}.bind(null,n));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var v=l;i.push([0,1]),a()})({0:function(t,e,a){t.exports=a("Vtdi")},1:function(t,e){},2:function(t,e){},Vtdi:function(t,e,a){"use strict";a.r(e);a("yt8O"),a("VRzm");var n=a("Kw5r"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("h1",[t._v("Caluladora de IVA")]),a("anadir"),a("br"),a("calculo"),a("br"),a("descarga"),a("br"),a("tabla")],1)},i=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{"text-align":"center"}},[a("h3",[t._v("Ingrese las facturas para calcular el impuesto a pagar")]),a("br"),a("form",[a("div",{staticClass:"row"},[a("div",{staticClass:"col col-md-4"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[t._v("Tipo de factura")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.tipo,expression:"tipo"}],staticClass:"form-control",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.tipo=e.target.multiple?a:a[0]}}},[a("option",[t._v("Compra")]),a("option",[t._v("Venta")])])])]),a("div",{staticClass:"form-group col-md-4"},[a("label",[t._v("Numero de la factura")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.nuevo.numero,expression:"nuevo.numero"}],staticClass:"form-control",attrs:{type:"text",placeholder:"XXX-YYY-ZZZZZZZ"},domProps:{value:t.nuevo.numero},on:{input:function(e){e.target.composing||t.$set(t.nuevo,"numero",e.target.value)}}})]),a("div",{staticClass:"form-group col-md-4"},[a("label",[t._v("Nombre en la factura")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.nuevo.nombre,expression:"nuevo.nombre"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Empresa Ejemplar S.A."},domProps:{value:t.nuevo.nombre},on:{input:function(e){e.target.composing||t.$set(t.nuevo,"nombre",e.target.value)}}})]),a("div",{staticClass:"form-group col-md-4"},[a("label",[t._v("Monto al 10%")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.nuevo.iva10,expression:"nuevo.iva10"}],staticClass:"form-control",attrs:{type:"number",placeholder:"1234567"},domProps:{value:t.nuevo.iva10},on:{input:function(e){e.target.composing||t.$set(t.nuevo,"iva10",e.target.value)}}})]),a("div",{staticClass:"form-group col-md-4"},[a("label",[t._v("Monto al 5%")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.nuevo.iva05,expression:"nuevo.iva05"}],staticClass:"form-control",attrs:{type:"number",placeholder:"1234567"},domProps:{value:t.nuevo.iva05},on:{input:function(e){e.target.composing||t.$set(t.nuevo,"iva05",e.target.value)}}})]),a("div",{staticClass:"form-group col-md-4"},[a("label",[t._v("Monto excento")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.nuevo.ivaEX,expression:"nuevo.ivaEX"}],staticClass:"form-control",attrs:{type:"number",placeholder:"1234567"},domProps:{value:t.nuevo.ivaEX},on:{input:function(e){e.target.composing||t.$set(t.nuevo,"ivaEX",e.target.value)}}})])])]),a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.anadir}},[t._v("Añadir")])])},o=[],l={name:"anadir",data:function(){return{tipo:"Compra",nuevo:{numero:"",nombre:"",iva10:"",iva05:"",ivaEX:"",timbrado:"",condicion:"Contado",cuotas:0}}},computed:{Ventas:{get:function(){return this.$store.state.Ventas},set:function(t){this.$store.dispatch("setVentas",t)}},Compras:{get:function(){return this.$store.state.Compras},set:function(t){this.$store.dispatch("setCompras",t)}}},methods:{anadir:function(){""===this.nuevo.numero&&(this.nuevo.numero="Sin numero"),""===this.nuevo.nombre&&(this.nuevo.nombre="Sin nombre"),""===this.nuevo.iva10&&(this.nuevo.iva10=0),""===this.nuevo.iva05&&(this.nuevo.iva05=0),""===this.nuevo.ivaEX&&(this.nuevo.ivaEX=0),""===this.nuevo.timbrado&&(this.nuevo.timbrado=0),"Contado"===this.nuevo.condicion?this.nuevo.cuotas=0:this.nuevo.cuotas<=0&&(this.nuevo.cuotas=1);var t=[];if("Venta"===this.tipo){for(var e=0;e<this.Ventas.length;e++)t.push(this.Ventas[e]);t.push(this.nuevo),this.Ventas=t}else{for(var a=0;a<this.Compras.length;a++)t.push(this.Compras[a]);t.push(this.nuevo),this.Compras=t}this.nuevo={numero:"",nombre:"",iva10:"",iva05:"",ivaEX:"",timbrado:"",condicion:"Contado",cuotas:0}}}},u=l,v=a("KHd+"),c=Object(v["a"])(u,r,o,!1,null,null,null),p=c.exports,m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("br"),a("h4",[t._v("Ventas")]),a("table",{staticClass:"table"},[t._m(0),a("tbody",t._l(t.Ventas,function(e){return a("tr",{key:e.index},[a("td",[t._v(t._s(e.numero))]),a("td",[t._v(t._s(e.nombre))]),a("td",{staticStyle:{"text-align":"right"}},[t._v(t._s(e.iva10))]),a("td",{staticStyle:{"text-align":"right"}},[t._v(t._s(e.iva05))]),a("td",{staticStyle:{"text-align":"right"}},[t._v(t._s(e.ivaEX))]),a("td",{staticStyle:{"text-align":"right"}},[t._v(t._s(parseInt(e.iva10)+parseInt(e.iva05)+parseInt(e.ivaEX)))]),a("td",[a("button",{staticClass:"btn btn-danger",on:{click:function(a){t.eliminarIngreso(e)}}},[t._v("Eliminar")])])])}))]),a("br"),a("h4",[t._v("Compras")]),a("table",{staticClass:"table"},[t._m(1),a("tbody",t._l(t.Compras,function(e){return a("tr",{key:e.index},[a("td",[t._v(t._s(e.numero))]),a("td",[t._v(t._s(e.nombre))]),a("td",{staticStyle:{"text-align":"right"}},[t._v(t._s(e.iva10))]),a("td",{staticStyle:{"text-align":"right"}},[t._v(t._s(e.iva05))]),a("td",{staticStyle:{"text-align":"right"}},[t._v(t._s(e.ivaEX))]),a("td",{staticStyle:{"text-align":"right"}},[t._v(t._s(parseInt(e.iva10)+parseInt(e.iva05)+parseInt(e.ivaEX)))]),a("td",[a("button",{staticClass:"btn btn-danger",on:{click:function(a){t.eliminarEgreso(e)}}},[t._v("Eliminar")])])])}))])])},h=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",[t._v("Factura numero")]),a("th",[t._v("Cliente")]),a("th",[t._v("10%")]),a("th",[t._v("5%")]),a("th",[t._v("Excenta")]),a("th",[t._v("Total")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",[t._v("Factura numero")]),a("th",[t._v("Proveedor")]),a("th",[t._v("10%")]),a("th",[t._v("5%")]),a("th",[t._v("Excenta")]),a("th",[t._v("Total")])])])}],d={name:"tabla",computed:{Ventas:{get:function(){return this.$store.state.Ventas},set:function(t){this.$store.dispatch("setVentas",t)}},Compras:{get:function(){return this.$store.state.Compras},set:function(t){this.$store.dispatch("setCompras",t)}}},methods:{eliminarIngreso:function(t){for(var e=[],a=0;a<this.Ventas.length;a++)t!==this.Ventas[a]&&e.push(this.Ventas[a]);this.Ventas=e},eliminarEgreso:function(t){for(var e=[],a=0;a<this.Compras.length;a++)t!==this.Compras[a]&&e.push(this.Compras[a]);this.Compras=e}}},g=d,f=Object(v["a"])(g,m,h,!1,null,null,null),_=f.exports,b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[t._m(0),a("div",{staticClass:"col col-md-6"},[a("table",{staticClass:"table"},[t._m(1),a("tr",[a("th",[t._v("Ventas 10%")]),a("td",{staticStyle:{"text-align":"right"}},[t._v(t._s(Math.round(t.totalVentas.iva10/1.1)))]),a("td",{staticStyle:{"text-align":"right"}},[t._v(t._s(Math.round(t.totalVentas.iva10/11)))])]),a("tr",[a("th",[t._v("Ventas 5%")]),a("td",{staticStyle:{"text-align":"right"}},[t._v(t._s(Math.round(t.totalVentas.iva05/1.05)))]),a("td",{staticStyle:{"text-align":"right"}},[t._v(t._s(Math.round(t.totalVentas.iva05/21)))])]),a("tr",[a("th",[t._v("Ventas excenta")]),a("td",{staticStyle:{"text-align":"right"}},[t._v(t._s(t.totalVentas.ivaEX))]),a("td",{staticStyle:{"text-align":"right"}},[t._v("-")])])])]),a("div",{staticClass:"col col-md-6"},[a("table",{staticClass:"table"},[t._m(2),a("tr",[a("th",[t._v("Compras 10%")]),a("td",{staticStyle:{"text-align":"right"}},[t._v(t._s(Math.round(t.totalCompras.iva10/1.1)))]),a("td",{staticStyle:{"text-align":"right"}},[t._v(t._s(Math.round(t.totalCompras.iva10/11)))])]),a("tr",[a("th",[t._v("Compras 5%")]),a("td",{staticStyle:{"text-align":"right"}},[t._v(t._s(Math.round(t.totalCompras.iva05/1.05)))]),a("td",{staticStyle:{"text-align":"right"}},[t._v(t._s(Math.round(t.totalCompras.iva05/21)))])]),a("tr",[a("th",[t._v("Compras excenta")]),a("td",{staticStyle:{"text-align":"right"}},[t._v(t._s(t.totalCompras.ivaEX))]),a("td",{staticStyle:{"text-align":"right"}},[t._v("-")])])])]),a("div",{staticClass:"col col-12"},[a("h5",{staticStyle:{"text-align":"center"}},[a("b",[t._v("Total a pagar IVA: "+t._s(t.totalGeneral))])])])])},y=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col col-md-12",staticStyle:{"text-align":"center"}},[a("h3",[t._v("Montos para rellenar el formulario")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",{staticStyle:{"text-align":"center"}},[a("th",[t._v("TOTAL Ventas")]),a("th",[t._v("LIQUIDACION")]),a("th",[t._v("IMPUESTO")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",{staticStyle:{"text-align":"center"}},[a("th",[t._v("TOTAL Compras")]),a("th",[t._v("LIQUIDACION")]),a("th",[t._v("IMPUESTO")])])}],C={name:"calculo",computed:{Ventas:function(){return this.$store.state.Ventas},Compras:function(){return this.$store.state.Compras},totalVentas:function(){for(var t={iva10:0,iva05:0,ivaEX:0},e=0;e<this.Ventas.length;e++)t.iva10=t.iva10+parseInt(this.Ventas[e].iva10),t.iva05=t.iva05+parseInt(this.Ventas[e].iva05),t.ivaEX=t.ivaEX+parseInt(this.Ventas[e].ivaEX);return t},totalCompras:function(){for(var t={iva10:0,iva05:0,ivaEX:0},e=0;e<this.Compras.length;e++)t.iva10=t.iva10+parseInt(this.Compras[e].iva10),t.iva05=t.iva05+parseInt(this.Compras[e].iva05),t.ivaEX=t.ivaEX+parseInt(this.Compras[e].ivaEX);return t},totalGeneral:function(){var t=0;return t=Math.round(this.totalVentas.iva10/11),t+=Math.round(this.totalVentas.iva05/21),t-=Math.round(this.totalCompras.iva10/11),t-=Math.round(this.totalCompras.iva05/21),t}}},V=C,x=Object(v["a"])(V,b,y,!1,null,null,null),E=x.exports,S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"archivo-name"}},[t._v("Nombre del archivo cuando se descargue")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.nombre,expression:"nombre"}],staticClass:"form-control",attrs:{type:"text",id:"archivo-name","aria-describedby":"helpId",placeholder:"Juan Pueblo"},domProps:{value:t.nombre},on:{input:function(e){e.target.composing||(t.nombre=e.target.value)}}}),a("small",{staticClass:"form-text text-muted",attrs:{id:"helpId"}},[t._v("el archivo se llamara "+t._s(t.nombre)+".xlsx")])]),a("button",{staticClass:"btn btn-info",on:{click:t.ComprasXlsx}},[t._v("Descargar Compras como excel")]),a("button",{staticClass:"btn btn-primary",on:{click:t.VentasXlsx}},[t._v("Descargar Ventas como excel")])])},X=[],I=a("G5je"),M={name:"Botones de descarga",data:function(){return{nombre:""}},computed:{Ventas:{get:function(){return this.$store.state.Ventas}},Compras:{get:function(){return this.$store.state.Compras}}},methods:{VentasXlsx:function(){for(var t=[],e=0;e<this.Ventas.length;e++)t.push({value:this.Ventas[e].ruc,type:"string"},{value:this.Ventas[e].dv,type:"string"},{value:this.Ventas[e].nombre,type:"string"},{value:this.Ventas[e].numero,type:"string"},{value:this.Ventas[e].fecha,type:"string"},{value:Math.round(this.Ventas[e].iva10/1.1),type:"number"},{value:Math.round(this.Ventas[e].iva10/11),type:"number"},{value:Math.round(this.Ventas[e].iva05/1.05),type:"number"},{value:Math.round(this.Ventas[e].iva05/21),type:"number"},{value:this.Ventas[e].ivaEX,type:"number"},{value:this.Ventas[e].iva10+this.Ventas[e].iva5+this.Ventas[e].ivaEX,type:"number"},{value:this.Ventas[e].condicion,type:"string"},{value:this.Ventas[e].cuotas,type:"number"},{value:this.Ventas[e].timbrado,type:"string"});var a={filename:"Ventas-"+this.nombre,sheet:{data:[[{value:"RUC",type:"string"},{value:"DV",type:"string"},{value:"Razon Social",type:"string"},{value:"Numero Documento",type:"string"},{value:"Fecha",type:"string"},{value:"Liquidacion 10%",type:"string"},{value:"Iva 10%",type:"string"},{value:"Liquidacion 5%",type:"string"},{value:"Iva 5%",type:"string"},{value:"Excenta",type:"string"},{value:"Total",type:"string"},{value:"Condicion",type:"string"},{value:"Cuotas",type:"string"},{value:"Timbrado",type:"string"}],t]}};Object(I["a"])(a)},ComprasXlsx:function(){for(var t=[],e=0;e<this.Ventas.length;e++)t.push({value:this.Ventas[e].ruc,type:"string"},{value:this.Ventas[e].dv,type:"string"},{value:this.Ventas[e].nombre,type:"string"},{value:this.Ventas[e].numero,type:"string"},{value:this.Ventas[e].fecha,type:"string"},{value:Math.round(this.Ventas[e].iva10/1.1),type:"number"},{value:Math.round(this.Ventas[e].iva10/11),type:"number"},{value:Math.round(this.Ventas[e].iva05/1.05),type:"number"},{value:Math.round(this.Ventas[e].iva05/21),type:"number"},{value:this.Ventas[e].ivaEX,type:"number"},{value:this.Ventas[e].iva10+this.Ventas[e].iva5+this.Ventas[e].ivaEX,type:"number"},{value:this.Ventas[e].condicion,type:"string"},{value:this.Ventas[e].cuotas,type:"number"},{value:this.Ventas[e].timbrado,type:"string"});var a={filename:"Compras-"+this.nombre,sheet:{data:[[{value:"RUC",type:"string"},{value:"DV",type:"string"},{value:"Razon Social",type:"string"},{value:"Timbrado",type:"string"},{value:"Numero Documento",type:"string"},{value:"Fecha",type:"string"},{value:"Liquidacion 10%",type:"string"},{value:"Iva 10%",type:"string"},{value:"Liquidacion 5%",type:"string"},{value:"Iva 5%",type:"string"},{value:"Excenta",type:"string"},{value:"Total",type:"string"},{value:"Condicion",type:"string"},{value:"Cuotas",type:"string"}],t]}};Object(I["a"])(a)}}},$=M,w=Object(v["a"])($,S,X,!1,null,null,null),O=w.exports,T={name:"app",components:{anadir:p,tabla:_,calculo:E,descarga:O}},j=T,N=Object(v["a"])(j,s,i,!1,null,null,null),P=N.exports,k=a("L2JU");n["a"].use(k["a"]);var A=new k["a"].Store({state:{Ventas:[],Compras:[]},mutations:{SET_Ventas:function(t,e){t.Ventas=e},SET_Compras:function(t,e){t.Compras=e}},actions:{setVentas:function(t,e){t.commit("SET_Ventas",e)},setCompras:function(t,e){t.commit("SET_Compras",e)}}}),L=a("lIOY");Object(L["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached:function(){console.log("Content has been cached for offline use.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}}),n["a"].config.productionTip=!1,new n["a"]({store:A,render:function(t){return t(P)}}).$mount("#app")}});
//# sourceMappingURL=app.e2cf938b.js.map