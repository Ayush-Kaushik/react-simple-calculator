(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{17:function(e,l,a){},25:function(e,l,a){},34:function(e,l){},35:function(e,l,a){"use strict";a.r(l);var t=a(4),n=a.n(t),c=a(18),u=a.n(c),r=(a(25),a(17),a(5)),o=a(6),i=a(37),s=a(1),b=Object(t.createContext)({}),v=function(e){var l=Object(t.useState)({result:"",query:"",previousCalculations:[]}),a=Object(o.a)(l,2),n=a[0],c=a[1];return Object(s.jsx)(b.Provider,{value:{calculatorState:n,handleClick:function(e){var l=e.target;switch(console.log(l.value),l.value){case"=":if(""!==n.query)try{c((function(e){console.log(e);var l=e.previousCalculations;return console.log(l),l.push("".concat(n.query," = ").concat(Object(i.a)(n.query),"\n")),console.log(l),{previousCalculations:l,query:"",result:Object(i.a)(n.query)}}))}catch(a){c((function(e){return Object(r.a)(Object(r.a)({},e),{},{query:"",result:a})}))}break;case"clear":c((function(e){return Object(r.a)(Object(r.a)({},e),{},{query:""})}));break;case"delete":c((function(e){return Object(r.a)(Object(r.a)({},e),{},{result:""})}));break;case"":break;default:c((function(e){return Object(r.a)(Object(r.a)({},e),{},{query:e.query+l.value,result:e.result})}))}}},children:e.children})};var j=function(e){var l=e.label,a=e.value,n=Object(t.useContext)(b).handleClick;return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)("button",{onClick:function(e){!function(e){n(e)}(e)},value:a,className:"Button",children:l})})},d=[[{label:"Clear",value:"clear"},{label:"Delete",value:"delete"},{label:"",value:""},{label:"/",value:"/"}],[{label:"7",value:"7"},{label:"8",value:"8"},{label:"9",value:"9"},{label:"*",value:"*"}],[{label:"4",value:"4"},{label:"5",value:"5"},{label:"6",value:"6"},{label:"-",value:"-"}],[{label:"1",value:"1"},{label:"2",value:"2"},{label:"3",value:"3"},{label:"+",value:"+"}],[{label:"0",value:"0"},{label:"=",value:"="}]];var O=function(){return Object(s.jsx)("div",{className:"Keypad-layout",children:d.map((function(e,l){return Object(s.jsxs)("div",{children:[" ",e.map((function(e,l){return Object(s.jsx)(j,{label:e.label,value:e.value},"key-".concat(e.label,"-").concat(l))}))]},"div-key-".concat(l))}))})};var f=function(){var e=Object(t.useContext)(b).calculatorState;return Object(s.jsxs)("div",{className:"Display",children:[Object(s.jsx)("input",{value:null===e||void 0===e?void 0:e.query,readOnly:!0}),Object(s.jsx)("input",{value:null===e||void 0===e?void 0:e.result,readOnly:!0}),Object(s.jsx)("textarea",{value:null===e||void 0===e?void 0:e.previousCalculations,readOnly:!0})]})};var y=function(){return Object(s.jsxs)("div",{className:"Calculator",children:[Object(s.jsx)(f,{}),Object(s.jsx)(O,{})]})};var x=function(){return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)(v,{children:Object(s.jsx)(y,{})})})},h=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,38)).then((function(l){var a=l.getCLS,t=l.getFID,n=l.getFCP,c=l.getLCP,u=l.getTTFB;a(e),t(e),n(e),c(e),u(e)}))};u.a.render(Object(s.jsx)(n.a.StrictMode,{children:Object(s.jsx)(x,{})}),document.getElementById("root")),h()}},[[35,1,2]]]);
//# sourceMappingURL=main.ba22f2b6.chunk.js.map