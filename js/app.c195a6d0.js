(function(t){function e(e){for(var o,i,s=e[0],c=e[1],l=e[2],p=0,f=[];p<s.length;p++)i=s[p],r[i]&&f.push(r[i][0]),r[i]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);u&&u(e);while(f.length)f.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],o=!0,s=1;s<n.length;s++){var c=n[s];0!==r[c]&&(o=!1)}o&&(a.splice(e--,1),t=i(i.s=n[0]))}return t}var o={},r={app:0},a=[];function i(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=o,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"02e4":function(t,e,n){"use strict";var o=n("cf1a"),r=n.n(o);r.a},"034f":function(t,e,n){"use strict";var o=n("64a9"),r=n.n(o);r.a},"0f81":function(t,e,n){"use strict";var o=n("8960"),r=n.n(o);r.a},"22c6":function(t,e,n){},"2e65":function(t,e,n){},3782:function(t,e,n){"use strict";var o=n("2e65"),r=n.n(o);r.a},"52ec":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var o=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Navbar"),n("MainMap"),n("MainForm"),n("Footer"),n("CustomPanel")],1)},a=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"mainMap"}},[n("mapbox",{attrs:{mapOptions:{style:"mapbox://styles/thibaultlepez/cjok8sf3600sw2rqiau1nvrmt"},accessToken:"pk.eyJ1IjoidGhpYmF1bHRsZXBleiIsImEiOiJjam9rODhlOHIwMXBqM3FteDY3cjVnMmk4In0.1y1C0L8RxjVOkndgeo5xMg"},on:{"map-click":t.mapClicked}})],1)},s=[],c=n("7be2"),l=n.n(c),u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"popupCard"}},[n("div",{staticClass:"container"},[n("b-card",{staticClass:"text-center",attrs:{"bg-variant":"warning",header:"<h1 class='popuph1'>"+this.destination.country+"</h1>","text-variant":"white"}},[n("div",{staticClass:"row align-items-center"},[n("div",{staticClass:"cols-6"},[n("b-img",{attrs:{src:this.destination.thumbnail,alt:this.destination.name,width:"200",height:"200",rounded:"",fluid:""}})],1),n("div",{staticClass:"cols-6 popuptext"},[n("h3",[t._v(t._s(this.destination.name))]),n("b-button",{staticClass:"d-flex align-items-end",on:{click:t.launchPanel}},[t._v("En savoir plus")])],1)])])],1)])},p=[],f=new o["a"],d={name:"PopupCard",props:{destination:{name:"",country:"",id:"",thumbnail:""}},data:function(){return{}},methods:{launchPanel:function(){f.$emit("clickPanel",this.destination.id)}}},m=d,b=(n("0f81"),n("2877")),h=Object(b["a"])(m,u,p,!1,null,null,null);h.options.__file="PopupCard.vue";var v=h.exports,_=n("e192"),g=n.n(_),x={name:"MainMap",components:{Mapbox:l.a},data:function(){return{PopupContent:o["a"].extend(v)}},methods:{mapClicked:function(t,e){var n=t.queryRenderedFeatures(e.point);if(n.length&&"namestest"===n[0].layer.id){var o=n[0];this.createPopUp(t,o)}},createPopUp:function(t,e){var n=window.document.createElement("div");n.id="vue-popup-content",new g.a.Popup({closeOnClick:!0}).setLngLat(e.geometry.coordinates).setDOMContent(n).addTo(t),new this.PopupContent({propsData:{destination:e.properties}}).$mount("#vue-popup-content")}}},y=x,C=Object(b["a"])(y,i,s,!1,null,null,null);C.options.__file="MainMap.vue";var k=C.exports,w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-navbar",{staticStyle:{"background-color":"rgb(240, 188, 43)"},attrs:{toggleable:"md",type:"dark"}},[n("b-navbar-toggle",{attrs:{target:"nav_collapse"}}),n("b-navbar-brand",{attrs:{href:"#"}},[t._v("Immersion Time")]),n("b-collapse",{attrs:{"is-nav":"",id:"nav_collapse"}},[n("b-navbar-nav",[n("b-nav-item",{attrs:{href:"#"}},[t._v("À propos")]),n("b-nav-item-dropdown",{attrs:{text:"Lang.",right:""}},[n("b-dropdown-item",{attrs:{href:"#"}},[t._v("English")]),n("b-dropdown-item",{attrs:{href:"#"}},[t._v("Français")])],1)],1),n("b-navbar-nav",{staticClass:"ml-auto"},[n("b-nav-form",[n("b-form-input",{staticClass:"mr-sm-2",attrs:{size:"sm",type:"text",placeholder:"Recherche"}}),n("b-button",{staticClass:"my-2 my-sm-0",attrs:{size:"sm",type:"submit"}},[t._v("Recherche")])],1)],1)],1)],1)},P=[],M={name:"Navbar"},O=M,j=(n("7a04"),Object(b["a"])(O,w,P,!1,null,"42dc4dda",null));j.options.__file="Navbar.vue";var $=j.exports,S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"mainForm"}},[n("b-container",[n("h2",[t._v("Find your destination")]),n("b-form",{on:{submit:t.onSubmit,reset:t.onReset}},[n("b-form-group",{attrs:{id:"inputSectionGroupe",label:"Votre section:","label-for":"inputSection"}},[n("b-form-select",{attrs:{id:"inputSection",options:t.section,required:""},model:{value:t.form.section,callback:function(e){t.$set(t.form,"section",e)},expression:"form.section"}})],1),n("b-form-group",{attrs:{id:"inputClassementGroup",label:"Classement en L1","label-for":"inputClassement"}},[n("b-form-input",{attrs:{id:"inputClassement",type:"number",required:"",placeholder:"Votre classement en L1"},model:{value:t.form.classement,callback:function(e){t.$set(t.form,"classement",e)},expression:"form.classement"}})],1),n("b-form-group",{attrs:{id:"inputGPAGroup",label:"GPA du S3","label-for":"inputGPAGroup"}},[n("b-form-input",{attrs:{id:"inputGPA",type:"number",placeholder:"GPA du S3"},model:{value:t.form.gpa,callback:function(e){t.$set(t.form,"gpa",e)},expression:"form.gpa"}})],1),n("b-form-group",{attrs:{id:"inputBudgetGroup",label:"Budget","label-for":"inputBudgetGroup"}},[n("b-input-group",{attrs:{append:"€"}},[n("b-form-input",{attrs:{id:"inputBudget",type:"number",placeholder:"Votre budget"},model:{value:t.form.budget,callback:function(e){t.$set(t.form,"budget",e)},expression:"form.budget"}})],1)],1),n("b-form-group",{attrs:{id:"exampleGroup4"}},[n("b-form-checkbox-group",{attrs:{id:"exampleChecks"},model:{value:t.form.checked,callback:function(e){t.$set(t.form,"checked",e)},expression:"form.checked"}},[n("b-form-checkbox",{attrs:{value:"passport"}},[t._v("Passport en cours de validité")]),n("b-form-checkbox",{attrs:{value:"bourse"}},[t._v("Boursier")])],1)],1),n("b-form-group",{attrs:{id:"choiceGroupe"}},[n("b-form-checkbox",{attrs:{value:"true"},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[t._v("Spécifiez des choix")])],1),t.show?n("b-card",{attrs:{"bg-variant":"light"}},[n("b-form-group",{staticClass:"mb-0",attrs:{horizontal:"",label:"Vos choix","label-size":"lg"}},[n("b-form-group",[n("b-input-group",{attrs:{horizontal:"",label:"1er choix","label-class":"text-sm-right","label-for":"firstChoice",prepend:"1°"}},[n("b-form-select",{attrs:{id:"firstChoice",type:"text",options:t.destination,placeholder:"Votre choix"},model:{value:t.form.choices[0],callback:function(e){t.$set(t.form.choices,0,e)},expression:"form.choices[0]"}})],1)],1),n("b-form-group",[n("b-input-group",{attrs:{horizontal:"",label:"2ème choix","label-for":"secChoice",prepend:"2°"}},[n("b-form-select",{attrs:{id:"secChoice",type:"text",options:t.destination,placeholder:"Votre choix"},model:{value:t.form.choices[1],callback:function(e){t.$set(t.form.choices,1,e)},expression:"form.choices[1]"}})],1)],1),n("b-form-group",[n("b-input-group",{attrs:{prepend:"3°"}},[n("b-form-select",{attrs:{type:"text",options:t.destination,placeholder:"Votre choix"},model:{value:t.form.choices[2],callback:function(e){t.$set(t.form.choices,2,e)},expression:"form.choices[2]"}},[n("div",{staticClass:"input-group-text"},[t._v("test")])])],1)],1)],1)],1):t._e(),n("b-button",{attrs:{type:"submit",variant:"primary"}},[t._v("Submit")]),n("b-button",{attrs:{type:"reset",variant:"danger"}},[t._v("Reset")])],1)],1)],1)},F=[],G={name:"MainForm",data:function(){return{form:{section:null,classement:null,gpa:null,budget:null,checked:[],choices:[]},section:["International","Classique","Bio-numérique","Renforcé"],destination:["Canada","Afrique du sud","Pologne","UK","Malaisie"],show:!1}},methods:{onSubmit:function(t){t.preventDefault(),!1===this.show&&(this.form.choices=[]),alert(JSON.stringify(this.form))},onReset:function(t){var e=this;t.preventDefault(),this.form.section=null,this.form.classement=null,this.form.gpa=null,this.form.budget=null,this.form.checked=[],this.form.choices=[],this.$nextTick(function(){e.show=!0})}}},E=G,q=(n("fb19"),Object(b["a"])(E,S,F,!1,null,"1936a2b8",null));q.options.__file="MainForm.vue";var J=q.exports,V=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},z=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"page-footer font-small blue pt-4"},[n("div",{staticClass:"footer-copyright text-center red py-3"},[t._v("© 2018 Copyright:\n        "),n("a",{attrs:{href:"#"}},[t._v(" Mayhem Adventure")])])])}],R={name:"Footer"},A=R,B=(n("3782"),Object(b["a"])(A,V,z,!1,null,"491167be",null));B.options.__file="Footer.vue";var I=B.exports,T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"customPanel"}},[n("vue-modaltor",{attrs:{visible:this.open,"resize-width":{1200:"60%",992:"75%",768:"93%"}},on:{hide:t.hideModal}},[this.open?n("div",[n("PanelCountry",{attrs:{idJson:this.idJson}})],1):t._e()])],1)},D=[],L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[n("a",{attrs:{href:t.destination.link_website}},[t._v(t._s(t.destination.university))])]),n("h2",[t._v(t._s(t.destination.country.name))]),t._l(t.destination.info,function(e){return n("div",{key:e.text},[n("b-alert",{attrs:{show:"",variant:"info"}},[t._v(t._s(e.text))])],1)}),t._l(t.destination.comments,function(e){return n("div",{key:e.text},[n("b-card",[n("blockquote",{staticClass:"blockquote"},[n("p",{staticClass:"card-text"},[t._v('"'+t._s(e.text)+'"')]),n("footer",{staticClass:"blockquote-footer"},[t._v("\n                    "+t._s(e.name)+" parti en "),n("cite",[t._v(t._s(e.year)+" ")])])])])],1)})],2)},N=[],U={name:"PanelCountry",props:["idJson"],data:function(){return{destination:{}}},created:function(){var t=this;fetch("country/"+this.idJson+".json").then(function(t){return t.json()}).then(function(e){t.destination=e})}},H=U,X=(n("72d4"),Object(b["a"])(H,L,N,!1,null,"7674100a",null));X.options.__file="PanelCountry.vue";var Y=X.exports,K={name:"CustomPanel",components:{PanelCountry:Y},data:function(){return{open:!1,idJson:"none"}},mounted:function(){var t=this;f.$on("clickPanel",function(e){t.open=!0,t.idJson=e})},methods:{hideModal:function(){this.open=!1}}},Z=K,Q=(n("02e4"),Object(b["a"])(Z,T,D,!1,null,"bf08778c",null));Q.options.__file="CustomPanel.vue";var W=Q.exports,tt={name:"app",components:{Footer:I,MainForm:J,Navbar:$,MainMap:k,CustomPanel:W},methods:{}},et=tt,nt=(n("034f"),Object(b["a"])(et,r,a,!1,null,null,null));nt.options.__file="App.vue";var ot=nt.exports,rt=n("9f7b"),at=n("7ee8"),it=n("0a47"),st=n.n(it);o["a"].config.productionTip=!1,o["a"].use(rt["a"]),o["a"].use(st.a),o["a"].component("slideout-panel",at["VueSlideoutPanel"]),new o["a"]({render:function(t){return t(ot)}}).$mount("#app")},"64a9":function(t,e,n){},"72d4":function(t,e,n){"use strict";var o=n("22c6"),r=n.n(o);r.a},"7a04":function(t,e,n){"use strict";var o=n("52ec"),r=n.n(o);r.a},8960:function(t,e,n){},cf1a:function(t,e,n){},dce3:function(t,e,n){},fb19:function(t,e,n){"use strict";var o=n("dce3"),r=n.n(o);r.a}});
//# sourceMappingURL=app.c195a6d0.js.map