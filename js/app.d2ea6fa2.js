(function(t){function e(e){for(var o,r,s=e[0],l=e[1],c=e[2],p=0,d=[];p<s.length;p++)r=s[p],a[r]&&d.push(a[r][0]),a[r]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);u&&u(e);while(d.length)d.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],o=!0,s=1;s<n.length;s++){var l=n[s];0!==a[l]&&(o=!1)}o&&(i.splice(e--,1),t=r(r.s=n[0]))}return t}var o={},a={app:0},i=[];function r(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=o,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var o=n("64a9"),a=n.n(o);a.a},"0d03":function(t,e,n){"use strict";var o=n("fe3c"),a=n.n(o);a.a},"0edf":function(t,e,n){},1007:function(t,e,n){"use strict";var o=n("e3bb"),a=n.n(o);a.a},"1c7c":function(t,e,n){},"3f09":function(t,e,n){"use strict";var o=n("1c7c"),a=n.n(o);a.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var o=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Navbar"),n("MainMap"),n("MapLegend"),n("b-container",{attrs:{fluid:""}},[n("b-row",[n("b-col",{staticClass:"maincol",attrs:{sm:"12",md:"6"}},[n("MainInfo")],1),n("b-col",{staticClass:"maincol",attrs:{sm:"12",md:"6"}},[n("MainForm")],1)],1)],1),n("Footer"),n("CustomPanel")],1)},i=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"mainMap"}},[n("mapbox",{attrs:{mapOptions:{style:"mapbox://styles/thibaultlepez/cjpe5zf7r28d02spc17r22xjy"},accessToken:"pk.eyJ1IjoidGhpYmF1bHRsZXBleiIsImEiOiJjam9rODhlOHIwMXBqM3FteDY3cjVnMmk4In0.1y1C0L8RxjVOkndgeo5xMg"},on:{"map-click":t.mapClicked}})],1)},s=[],l=n("7be2"),c=n.n(l),u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"popupCard"}},[n("div",{staticClass:"container"},[n("b-card",{staticClass:"text-center",attrs:{"bg-variant":"warning",header:"<h1 class='popuph1'>"+this.destination.country+"</h1>","text-variant":"white"}},[n("div",{staticClass:"row align-items-center"},[n("div",{staticClass:"popuptext"},[n("h3",[t._v(" "+t._s(this.destination.city))]),n("h3",[t._v(t._s(this.destination.name))]),n("b-button",{staticClass:"d-flex align-items-end",on:{click:t.launchPanel}},[t._v("En savoir plus")])],1)])])],1)])},p=[],d=new o["a"],f={name:"PopupCard",props:{destination:{name:"",country:"",id:"",city:""}},data:function(){return{}},methods:{launchPanel:function(){d.$emit("clickPanel",this.destination.id)}}},m=f,b=(n("cd11"),n("2877")),v=Object(b["a"])(m,u,p,!1,null,null,null);v.options.__file="MapPopup.vue";var h=v.exports,g=n("e192"),_=n.n(g),y={name:"MainMap",components:{Mapbox:c.a},data:function(){return{PopupContent:o["a"].extend(h)}},methods:{mapClicked:function(t,e){var n=t.queryRenderedFeatures(e.point);if(0!==n.length&&("solo"===n[0].layer.id||"solo_label"===n[0].layer.id||"group_label"===n[0].layer.id||"group"===n[0].layer.id||"points"===n[0].layer.id)){var o=n[0];this.createPopUp(t,o)}},createPopUp:function(t,e){var n=window.document.createElement("div");n.id="vue-popup-content",n.style.height="90px",n.style.width="120px",new _.a.Popup({closeOnClick:!0}).setLngLat(e.geometry.coordinates).setDOMContent(n).addTo(t),new this.PopupContent({propsData:{destination:e.properties}}).$mount("#vue-popup-content")}}},x=y,k=(n("a86c"),Object(b["a"])(x,r,s,!1,null,"06ee00b3",null));k.options.__file="Map.vue";var C=k.exports,M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-navbar",{staticStyle:{"background-color":"rgb(0, 34, 46)"},attrs:{toggleable:"md",type:"dark"}},[n("b-navbar-toggle",{attrs:{target:"nav_collapse"}}),n("b-navbar-brand",{attrs:{href:"#"}},[n("img",{staticStyle:{width:"50px",height:"51px"},attrs:{src:"img/logo.png",alt:"logo"}}),t._v("\n        IMMERSION TIME\n    ")]),n("b-collapse",{attrs:{"is-nav":"",id:"nav_collapse"}},[n("b-navbar-nav",[n("b-nav-item",{attrs:{href:"#"}},[t._v("À propos")]),n("b-nav-item-dropdown",{attrs:{text:"Lang.",right:""}},[n("b-dropdown-item",{attrs:{href:"#"}},[t._v("English")]),n("b-dropdown-item",{attrs:{href:"#"}},[t._v("Français")])],1)],1),n("b-navbar-nav",{staticClass:"ml-auto"},[n("b-nav-form",[n("b-form-input",{staticClass:"mr-sm-2",attrs:{size:"sm",type:"text",placeholder:"Recherche"}}),n("b-button",{staticClass:"my-2 my-sm-0",attrs:{size:"sm",type:"submit"}},[t._v("Recherche")])],1)],1)],1)],1)},w=[],P={name:"Navbar"},O=P,j=(n("6551"),Object(b["a"])(O,M,w,!1,null,"532fa33a",null));j.options.__file="TheNavbar.vue";var E=j.exports,I=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"mainForm"}},[n("h2",[t._v("Find your destination")]),n("b-form",{on:{submit:t.onSubmit,reset:t.onReset}},[n("b-form-group",{attrs:{id:"inputSectionGroupe",label:"Votre section:","label-for":"inputSection"}},[n("b-form-select",{attrs:{id:"inputSection",options:t.section,required:""},model:{value:t.form.section,callback:function(e){t.$set(t.form,"section",e)},expression:"form.section"}})],1),"Internationale"==t.form.section?n("b-form-group",{attrs:{id:"inputToeicGroup",label:"Toeic en fin L1","label-for":"inputToiec"}},[n("b-form-input",{attrs:{id:"inputToiec",type:"number",required:"",placeholder:"Votre Toeic en fin L1"},model:{value:t.form.toiec,callback:function(e){t.$set(t.form,"toiec",e)},expression:"form.toiec"}})],1):t._e(),n("b-form-group",{attrs:{id:"inputMoyenneGroup",label:"Moyenne en L1","label-for":"inputMoyenne"}},[n("b-form-input",{attrs:{id:"inputMoyenne",type:"number",required:"",placeholder:"Votre classement en L1"},model:{value:t.form.moyenne,callback:function(e){t.$set(t.form,"moyenne",e)},expression:"form.moyenne"}})],1),n("b-form-group",{attrs:{id:"inputGPAGroup",label:"GPA en L1","label-for":"inputGPA"}},[n("b-form-input",{attrs:{id:"inputGPA",type:"number",required:"",placeholder:"Votre GPA en L1"},model:{value:t.form.gpa,callback:function(e){t.$set(t.form,"gpa",e)},expression:"form.gpa"}})],1),n("b-form-group",{attrs:{id:"inputBudgetGroup",label:"Budget","label-for":"inputBudgetGroup"}},[n("b-input-group",{attrs:{append:"€"}},[n("b-form-input",{attrs:{id:"inputBudget",type:"number",placeholder:"Votre budget"},model:{value:t.form.budget,callback:function(e){t.$set(t.form,"budget",e)},expression:"form.budget"}})],1)],1),n("b-form-group",{attrs:{id:"exampleGroup4"}},[n("b-form-checkbox-group",{attrs:{id:"exampleChecks"},model:{value:t.form.checked,callback:function(e){t.$set(t.form,"checked",e)},expression:"form.checked"}},[n("b-form-checkbox",{attrs:{value:"passport"}},[t._v("Passport en cours de validité")]),n("b-form-checkbox",{attrs:{value:"bourse"}},[t._v("Boursier")])],1)],1),n("b-button",{attrs:{type:"submit",variant:"primary"}},[t._v("Submit")]),n("b-button",{attrs:{type:"reset",variant:"danger"}},[t._v("Reset")])],1)],1)},L=[],S={name:"MainForm",data:function(){return{form:{section:null,solo:[],toeic:null,moyenne:null,gpa:null,budget:null,checked:[],choices:[],choicessolo:[]},section:["Internationale","Classique","Bio-numérique","Renforcée"],gpamoyenne:["GPA","Moyenne"],destination:["Canada","Afrique du sud","Pologne","UK","Malaisie","India"],destinationsolo:["Angleterre","Australie","Singapour","USA","Corée du Sud","Irelande"],destinationsolonul:["Irelande","Singapour"],show:!1}},methods:{onSubmit:function(t){t.preventDefault(),!1===this.show&&(this.form.choices=[]),alert(JSON.stringify(this.form))},onReset:function(t){var e=this;t.preventDefault(),this.form.section=null,this.form.solo=[],this.form.classement=null,this.form.gpa=null,this.form.budget=null,this.form.checked=[],this.form.choices=[],this.$nextTick(function(){e.show=!0})}}},$=S,A=(n("8765"),Object(b["a"])($,I,L,!1,null,"6327c477",null));A.options.__file="MainForm.vue";var T=A.exports,G=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"mainInfo"}},[n("h2",[t._v("What is Immersion Time?")]),n("p",[t._v("It's a tool to quickly visualize and gather information about all destinations for your L3 at Efrei.\n    It features a matching algorithm that could suggest you some destinations you might not have thought a lot about...")]),n("h3",[t._v("L'Equipe de Mayhem Adventure")]),n("b-table",{attrs:{striped:"",hover:"",items:t.items}})],1)},R=[],F=[{Nom:"Gabriel DUGNY",post:"Chef de projet"},{Nom:"Thibault Lepez",post:"Responsable technique"},{Nom:"Aïda LEMDANI",post:"Responsable design"},{Nom:"Louise BOUREY",post:"Responsable communication"},{Nom:"Vincent LACROUTS",post:"Testeur agile"}],N={data:function(){return{name:"MainInfo",items:F}}},q=N,J=(n("ec55"),Object(b["a"])(q,G,R,!1,null,"20dfa10e",null));J.options.__file="MainInfo.vue";var B=J.exports,D=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},z=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"page-footer font-small pt-4"},[n("div",{staticClass:"footer-copyright text-center py-3"},[t._v("© 2018 Copyright:\n        "),n("a",{attrs:{href:"#"}},[t._v(" Mayhem Adventure")])])])}],V={name:"Footer"},U=V,Y=(n("3f09"),Object(b["a"])(U,D,z,!1,null,"8f5ee242",null));Y.options.__file="TheFooter.vue";var H=Y.exports,X=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"customPanel"}},[n("vue-modaltor",{attrs:{bgPanel:"#00222E",bgOverlay:"rgb(0,0,0,0.8)","resize-width":{1200:"80%",992:"80%",768:"93%"},visible:this.open},on:{hide:t.hideModal}},[n("template",{slot:"close-icon"},[n("svg",{attrs:{version:"1.1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 40 40",width:"20",height:"20","xml:space":"preserve"}},[n("path",{staticClass:"st0",attrs:{fill:"white",d:"M8.7,7.6c-0.4-0.4-1-0.4-1.4,0C6.9,8,6.9,8.6,7.3,9l11,11l-11,11c-0.4,0.4-0.4,1,0,1.4c0.4,0.4,1,0.4,1.4,0 l11-11l11,11c0.4,0.4,1,0.4,1.4,0c0.4-0.4,0.4-1,0-1.4l-11-11L32,9c0.4-0.4,0.4-1,0-1.4c-0.4-0.4-1-0.4-1.4,0l-11,11L8.7,7.6z"}})])]),this.open?n("div",[n("PanelCountry",{attrs:{idJson:this.idJson}})],1):t._e()],2)],1)},K=[],W=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.ok?n("div",{attrs:{id:"panelCountry"}},[n("b-row",[n("b-col",{attrs:{sm:"12",md:"2"}},[n("b-img",{attrs:{blank:"","blank-color":"#ccc",width:"100px",alt:"country thumbnail"}})],1),n("b-col",{attrs:{sm:"12",md:"10"}},[n("h1",[n("a",{attrs:{href:t.destination.link_website}},[t._v(t._s(t.destination.university))])]),t.destination.country?n("h2",[t._v(" "+t._s(t.destination.country.name))]):t._e()])],1),n("b-table",{attrs:{striped:"",hover:"",items:t.cost}}),t._l(t.destination.info,function(e){return n("div",{key:e.text},[n("b-alert",{attrs:{show:"",variant:"info"}},[t._v(t._s(e.text))])],1)}),n("b-row",[n("b-col",{attrs:{sm:"12",lg:"6"}},[n("h2",[t._v("Commentaires")]),t._l(t.destination.comments,function(e){return n("b-card",{key:e.text},[n("b-media",[e.name?n("h3",[t._v(t._s(e.name))]):t._e(),n("b-img",{attrs:{slot:"aside",blank:"","blank-color":"#ccc",width:"64",alt:"profil picture"},slot:"aside"}),n("p",{staticClass:"card-text"},[t._v(t._s(e.text))])],1)],1)})],2),n("b-col",{attrs:{sm:"12",lg:"6"}},[n("h2",[t._v("Astuces d'anciens voyageurs")]),t._l(t.destination.hints,function(e){return n("div",{key:e.text},[n("b-card",[n("b-media",[n("b-img",{attrs:{slot:"aside",blank:"","blank-color":"#ccc",width:"64",alt:"profil picture"},slot:"aside"}),n("p",{staticClass:"card-text"},[t._v(t._s(e.text))])],1)],1)],1)})],2)],1)],2):n("div",[n("b-alert",{attrs:{show:"",variant:"danger"}},[t._v("Couldn't load data !")])],1)},Z=[],Q={name:"PanelCountry",props:["idJson"],data:function(){return{destination:{},cost:{},ok:!1}},created:function(){var t=this;fetch("country/"+this.idJson+".json").then(function(t){return t.text()}).then(function(e){try{var n=JSON.parse(e);t.destination=n,t.ok=!0}catch(o){t.ok=!1}}),this.cost=this.destination.prices,console.debug(this.cost),console.debug("YAS")}},tt=Q,et=(n("1007"),Object(b["a"])(tt,W,Z,!1,null,"c2a1b5ec",null));et.options.__file="PanelCountry.vue";var nt=et.exports,ot={name:"CustomPanel",components:{PanelCountry:nt},data:function(){return{open:!1,idJson:"none"}},mounted:function(){var t=this;d.$on("clickPanel",function(e){t.open=!0,t.idJson=e})},methods:{hideModal:function(){this.open=!1}}},at=ot,it=(n("0d03"),Object(b["a"])(at,X,K,!1,null,"17b68dbf",null));it.options.__file="MapPanel.vue";var rt=it.exports,st=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-container",{staticClass:"legendbar",attrs:{fluid:""}},[n("div",{staticClass:"d-flex justify-content-between"},[n("div",[n("p",[n("span",{staticClass:"dot dest-group"}),t._v(" Destination en groupe "),n("span",{staticClass:"dot dest-solo"}),t._v("\n                Destination en solo ")])]),n("div",[n("p",[t._v("Cliquez sur une destination pour en savoir plus.")])])])])},lt=[],ct={name:"MapLegend"},ut=ct,pt=(n("d158"),Object(b["a"])(ut,st,lt,!1,null,"2190fcd9",null));pt.options.__file="MapLegend.vue";var dt=pt.exports,ft={name:"app",components:{MapLegend:dt,Footer:H,MainForm:T,Navbar:E,MainMap:C,CustomPanel:rt,MainInfo:B},methods:{}},mt=ft,bt=(n("034f"),Object(b["a"])(mt,a,i,!1,null,null,null));bt.options.__file="App.vue";var vt=bt.exports,ht=n("9f7b"),gt=n("0a47"),_t=n.n(gt);o["a"].config.productionTip=!1,o["a"].use(ht["a"]),o["a"].use(_t.a),new o["a"]({render:function(t){return t(vt)}}).$mount("#app")},"64a9":function(t,e,n){},6551:function(t,e,n){"use strict";var o=n("b8b0"),a=n.n(o);a.a},8765:function(t,e,n){"use strict";var o=n("c666"),a=n.n(o);a.a},"8ba2":function(t,e,n){},a86c:function(t,e,n){"use strict";var o=n("bec3"),a=n.n(o);a.a},b8b0:function(t,e,n){},bec3:function(t,e,n){},c666:function(t,e,n){},cd11:function(t,e,n){"use strict";var o=n("f27b"),a=n.n(o);a.a},d158:function(t,e,n){"use strict";var o=n("0edf"),a=n.n(o);a.a},e3bb:function(t,e,n){},ec55:function(t,e,n){"use strict";var o=n("8ba2"),a=n.n(o);a.a},f27b:function(t,e,n){},fe3c:function(t,e,n){}});
//# sourceMappingURL=app.d2ea6fa2.js.map