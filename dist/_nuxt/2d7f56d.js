(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{273:function(t,n,c){var content=c(289);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,c(57).default)("20d7ef16",content,!0,{sourceMap:!1})},287:function(t,n,c){t.exports=c.p+"img/avatar6.c0fd38a.png"},288:function(t,n,c){"use strict";c(273)},289:function(t,n,c){var e=c(56)(!1);e.push([t.i,".notification-main{margin-bottom:8px}",""]),t.exports=e},301:function(t,n,c){"use strict";c.r(n);var e={props:["index","notification"],methods:{accept:function(){this.$emit("answerNotification",!0,this.index,this.notification)},denied:function(){this.$emit("answerNotification",!1,this.index,this.notification)}}},o=(c(288),c(21)),component=Object(o.a)(e,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"w3-card w3-round w3-white w3-center notification-main"},[e("div",{staticClass:"w3-container"},[e("p",[t._v("Request Connect")]),t._v(" "),e("img",{staticStyle:{width:"20%"},attrs:{src:c(287),alt:"Avatar"}}),e("br"),t._v(" "),e("span",[t._v("Person ID : "+t._s(t.notification.idConnect)+" want to connect")]),t._v(" "),e("div",{staticClass:"w3-row w3-opacity"},[e("div",{staticClass:"w3-half"},[e("button",{staticClass:"w3-button w3-block w3-green w3-section",attrs:{title:"Accept"},on:{click:function(n){return t.accept()}}},[e("i",{staticClass:"fa fa-check"})])]),t._v(" "),e("div",{staticClass:"w3-half"},[e("button",{staticClass:"w3-button w3-block w3-red w3-section",attrs:{title:"Decline"},on:{click:function(n){return t.denied()}}},[e("i",{staticClass:"fa fa-remove"})])])])])])}),[],!1,null,null,null);n.default=component.exports}}]);