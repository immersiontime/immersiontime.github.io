(function(t){function e(e){for(var o,i,s=e[0],l=e[1],c=e[2],p=0,d=[];p<s.length;p++)i=s[p],a[i]&&d.push(a[i][0]),a[i]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);u&&u(e);while(d.length)d.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],o=!0,s=1;s<n.length;s++){var l=n[s];0!==a[l]&&(o=!1)}o&&(r.splice(e--,1),t=i(i.s=n[0]))}return t}var o={},a={app:0},r=[];function i(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=o,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=l;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var o=n("64a9"),a=n.n(o);a.a},"0d03":function(t,e,n){"use strict";var o=n("fe3c"),a=n.n(o);a.a},"0edf":function(t,e,n){},1007:function(t,e,n){"use strict";var o=n("e3bb"),a=n.n(o);a.a},"1c7c":function(t,e,n){},"3f09":function(t,e,n){"use strict";var o=n("1c7c"),a=n.n(o);a.a},5490:function(t,e,n){"use strict";var o=n("bdf3"),a=n.n(o);a.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var o=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Navbar"),n("MainMap"),n("MapLegend"),n("b-container",{staticStyle:{"max-width":"1700px"},attrs:{fluid:""}},[n("b-row",[n("b-col",{staticClass:"maincol",attrs:{sm:"12",md:"6"}},[n("MainInfo")],1),n("b-col",{staticClass:"maincol",attrs:{sm:"12",md:"6"}},[n("MainFormLoader")],1)],1)],1),n("Footer"),n("CustomPanel")],1)},r=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"mainMap"}},[n("mapbox",{attrs:{mapOptions:{style:"mapbox://styles/thibaultlepez/cjpe5zf7r28d02spc17r22xjy"},accessToken:"pk.eyJ1IjoidGhpYmF1bHRsZXBleiIsImEiOiJjam9rODhlOHIwMXBqM3FteDY3cjVnMmk4In0.1y1C0L8RxjVOkndgeo5xMg"},on:{"map-click":t.mapClicked,"map-mousemove":t.mouseOverLabel}})],1)},s=[],l=n("7be2"),c=n.n(l),u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"popupCard"}},[n("div",{staticClass:"popupcard-container container"},[n("b-card",{staticClass:"text-center",attrs:{"bg-variant":"dark",header:"<h1 class='popup'>"+this.destination.country+"</h1> <h2 class='popup'>("+this.destination.city+")</h2>","text-variant":"white"}},[n("div",{staticClass:"row align-items-center"},[n("div",{staticClass:"popuptext"},[n("h2",{staticClass:"popup"},[t._v(t._s(this.destination.name))]),n("b-button",{staticClass:"d-flex align-items-end",attrs:{variant:"primary"},on:{click:t.launchPanel}},[t._v("En savoir plus\n                    ")])],1)])])],1)])},p=[],d=new o["a"],f={name:"PopupCard",props:{destination:{name:"",country:"",id:"",city:""}},data:function(){return{}},methods:{launchPanel:function(){d.$emit("clickPanel",this.destination.id)}}},m=f,b=(n("cd11"),n("2877")),v=Object(b["a"])(m,u,p,!1,null,null,null);v.options.__file="MapPopup.vue";var h=v.exports,_=n("e192"),g=n.n(_),y={name:"MainMap",components:{Mapbox:c.a},data:function(){return{PopupContent:o["a"].extend(h)}},methods:{mouseOverLabel:function(t,e){var n=t.queryRenderedFeatures(e.point,{layers:["group","group_label","solo","solo_label"]});t.getCanvas().style.cursor=n.length?"pointer":""},mapClicked:function(t,e){var n=t.queryRenderedFeatures(e.point);if(0!==n.length&&("solo"===n[0].layer.id||"group"===n[0].layer.id||"solo_label"===n[0].layer.id||"group_label"===n[0].layer.id)){var o=n[0];this.createPopUp(t,o)}},createPopUp:function(t,e){var n=window.document.createElement("div");n.id="vue-popup-content",n.style.height="160px",n.style.width="260px",new g.a.Popup({closeOnClick:!0}).setLngLat(e.geometry.coordinates).setDOMContent(n).addTo(t),new this.PopupContent({propsData:{destination:e.properties}}).$mount("#vue-popup-content")}}},x=y,w=(n("5490"),Object(b["a"])(x,i,s,!1,null,null,null));w.options.__file="Map.vue";var C=w.exports,k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-navbar",{staticStyle:{"background-color":"rgb(0, 34, 46)"},attrs:{toggleable:"md",type:"dark"}},[n("b-navbar-toggle",{attrs:{target:"nav_collapse"}}),n("b-navbar-brand",{attrs:{href:"#"}},[n("img",{staticStyle:{width:"50px",height:"51px"},attrs:{src:"img/logo.png",alt:"logo"}}),t._v("\n        IMMERSION TIME\n    ")]),n("b-collapse",{attrs:{"is-nav":"",id:"nav_collapse"}},[n("b-navbar-nav",[n("b-nav-item",{attrs:{href:"#"}},[t._v("À propos")]),n("b-nav-item-dropdown",{attrs:{text:"Lang.",right:""}},[n("b-dropdown-item",{attrs:{href:"#"}},[t._v("English")]),n("b-dropdown-item",{attrs:{href:"#"}},[t._v("Français")])],1)],1),n("b-navbar-nav",{staticClass:"ml-auto"},[n("b-nav-form",[n("b-form-input",{staticClass:"mr-sm-2",attrs:{size:"sm",type:"text",placeholder:"Recherche"}}),n("b-button",{staticClass:"my-2 my-sm-0",attrs:{size:"sm",type:"submit"}},[t._v("Recherche")])],1)],1)],1)],1)},M=[],O={name:"Navbar"},P=O,L=(n("6551"),Object(b["a"])(P,k,M,!1,null,"532fa33a",null));L.options.__file="TheNavbar.vue";var j=L.exports,E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{height:"100%"}},[n("H2",[t._v("Recherche de destination")]),n("p",[t._v("Laissez-vous surprendre !")]),n("div",{staticClass:"center",class:{open:t.formOpen}},[n("div",{staticClass:"open-button",class:{open:t.formOpen}},[n("div",{directives:[{name:"show",rawName:"v-show",value:!t.formOpen,expression:"!formOpen"}],staticClass:"button-copy",on:{click:function(e){t.formOpen=!0}}},[n("span",{staticClass:"button-copy-span"},[t._v("Trouver votre destination")])]),n("form",{on:{submit:function(e){t.cancel()}}},[n("MainForm"),n("div",{directives:[{name:"show",rawName:"v-show",value:t.formOpen,expression:"formOpen"}],staticClass:"cancel"},[n("span",{on:{click:function(e){t.cancel()}}},[t._v("Retour")])])],1)])])],1)},$=[],S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"mainForm"}},[n("b-form",{on:{submit:t.onSubmit,reset:t.onReset}},[n("b-form-group",{attrs:{id:"inputSectionGroupe",label:"Votre section:","label-for":"inputSection"}},[n("b-form-select",{attrs:{id:"inputSection",options:t.section,required:""},model:{value:t.form.section,callback:function(e){t.$set(t.form,"section",e)},expression:"form.section"}})],1),n("b-row",[n("b-col",{attrs:{sm:"6"}},["Internationale"==t.form.section?n("b-form-group",{attrs:{id:"inputToeicGroup",label:"Toeic en fin L1","label-for":"inputToiec"}},[n("b-form-input",{attrs:{id:"inputToiec",type:"number",required:"",placeholder:"Votre Toeic en fin L1"},model:{value:t.form.toiec,callback:function(e){t.$set(t.form,"toiec",e)},expression:"form.toiec"}})],1):t._e()],1)],1),n("b-row",[n("b-col",{attrs:{sm:"6"}},[n("b-form-group",{attrs:{id:"inputMoyenneGroup",label:"Moyenne en L1","label-for":"inputMoyenne"}},[n("b-form-input",{attrs:{id:"inputMoyenne",type:"number",required:"",placeholder:"Votre moyenne en L1"},model:{value:t.form.moyenne,callback:function(e){t.$set(t.form,"moyenne",e)},expression:"form.moyenne"}})],1)],1),n("b-col",[n("b-form-group",{attrs:{id:"inputGPAGroup",label:"GPA en L1","label-for":"inputGPA"}},[n("b-form-input",{attrs:{id:"inputGPA",type:"number",required:"",placeholder:"Votre GPA en L1"},model:{value:t.form.gpa,callback:function(e){t.$set(t.form,"gpa",e)},expression:"form.gpa"}})],1)],1)],1),n("b-form-group",{attrs:{id:"inputBudgetGroup",label:"Budget","label-for":"inputBudgetGroup"}},[n("b-input-group",{attrs:{append:"€"}},[n("b-form-input",{attrs:{id:"inputBudget",type:"number",placeholder:"Votre budget"},model:{value:t.form.budget,callback:function(e){t.$set(t.form,"budget",e)},expression:"form.budget"}})],1)],1),n("b-form-group",{attrs:{id:"exampleGroup4"}},[n("b-form-checkbox-group",{attrs:{id:"exampleChecks"},model:{value:t.form.checked,callback:function(e){t.$set(t.form,"checked",e)},expression:"form.checked"}},[n("b-form-checkbox",{attrs:{value:"passport"}},[t._v("Passport en cours de validité")]),n("b-form-checkbox",{attrs:{value:"bourse"}},[t._v("Boursier")])],1)],1),n("b-button",{attrs:{type:"submit",variant:"primary"}},[t._v("Décoller ✈️")]),n("b-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"reset",variant:"danger"}},[t._v("Réinitialiser")])],1)],1)},I=[],T={name:"MainForm",data:function(){return{form:{section:null,toeic:null,moyenne:null,gpa:null,budget:null,checked:[]},section:["Internationale","Classique","Bio-numérique","Renforcée"],show:!1}},methods:{onSubmit:function(t){t.preventDefault(),!1===this.show&&(this.form.choices=[]),alert(JSON.stringify(this.form))},onReset:function(t){var e=this;t.preventDefault(),this.form.section=null,this.form.toeic=null,this.form.moyenne=null,this.form.gpa=null,this.form.budget=null,this.form.checked=[],this.$nextTick(function(){e.show=!0})}}},F=T,R=(n("78fc"),Object(b["a"])(F,S,I,!1,null,"45a15422",null));R.options.__file="MainForm.vue";var N=R.exports,G={name:"MainFormLoader",components:{MainForm:N},data:function(){return{formOpen:!1}},methods:{cancel:function(){this.formOpen=!1}}},q=G,A=(n("cddb"),Object(b["a"])(q,E,$,!1,null,null,null));A.options.__file="MainFormLoader.vue";var J=A.exports,D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"mainInfo"}},[n("h2",[t._v("What is Immersion Time?")]),n("p",[t._v("It's a tool to quickly visualize and gather information about all destinations for your L3 at Efrei.\n        It features a matching algorithm that could suggest you some destinations you might not have thought a lot\n        about...")]),n("h3",[t._v("L'Équipe de Mayhem Adventure")]),n("b-table",{attrs:{striped:"",hover:"",items:t.items}})],1)},B=[],z=[{Nom:"Gabriel DUGNY",post:"Chef de projet"},{Nom:"Thibault LEPEZ",post:"Responsable technique"},{Nom:"Aïda LEMDANI",post:"Responsable design"},{Nom:"Louise BOUREY",post:"Responsable communication"},{Nom:"Vincent LACROUTS",post:"Testeur agile"}],V={data:function(){return{name:"MainInfo",items:z}}},U=V,Y=(n("9196"),Object(b["a"])(U,D,B,!1,null,"fa0cf404",null));Y.options.__file="MainInfo.vue";var H=Y.exports,X=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Z=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"page-footer font-small pt-4"},[n("div",{staticClass:"footer-copyright text-center py-3"},[t._v("© 2018 Copyright:\n        "),n("a",{attrs:{href:"#"}},[t._v(" Mayhem Adventure")])])])}],W={name:"Footer"},K=W,Q=(n("3f09"),Object(b["a"])(K,X,Z,!1,null,"8f5ee242",null));Q.options.__file="TheFooter.vue";var tt=Q.exports,et=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"customPanel"}},[n("vue-modaltor",{attrs:{bgPanel:"#00222E",bgOverlay:"rgb(0,0,0,0.8)","resize-width":{1200:"80%",992:"80%",768:"93%"},visible:this.open},on:{hide:t.hideModal}},[n("template",{slot:"close-icon"},[n("svg",{attrs:{version:"1.1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 40 40",width:"20",height:"20","xml:space":"preserve"}},[n("path",{staticClass:"st0",attrs:{fill:"white",d:"M8.7,7.6c-0.4-0.4-1-0.4-1.4,0C6.9,8,6.9,8.6,7.3,9l11,11l-11,11c-0.4,0.4-0.4,1,0,1.4c0.4,0.4,1,0.4,1.4,0 l11-11l11,11c0.4,0.4,1,0.4,1.4,0c0.4-0.4,0.4-1,0-1.4l-11-11L32,9c0.4-0.4,0.4-1,0-1.4c-0.4-0.4-1-0.4-1.4,0l-11,11L8.7,7.6z"}})])]),this.open?n("div",[n("PanelCountry",{attrs:{idJson:this.idJson}})],1):t._e()],2)],1)},nt=[],ot=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.ok?n("div",{attrs:{id:"panelCountry"}},[n("b-row",[n("b-col",{attrs:{sm:"12",md:"2"}},[n("b-img",{attrs:{blank:"","blank-color":"#ccc",width:"100px",alt:"country thumbnail"}})],1),n("b-col",{attrs:{sm:"12",md:"10"}},[n("h1",[n("a",{attrs:{href:t.destination.link_website}},[t._v(t._s(t.destination.university))])]),t.destination.country?n("h2",[t._v(" "+t._s(t.destination.country.name))]):t._e()])],1),n("b-table",{attrs:{striped:"",hover:"",items:t.cost}}),t._l(t.destination.info,function(e){return n("div",{key:e.text},[n("b-alert",{attrs:{show:"",variant:"info"}},[t._v(t._s(e.text))])],1)}),n("b-row",[n("b-col",{attrs:{sm:"12",lg:"6"}},[n("h2",[t._v("Commentaires")]),t._l(t.destination.comments,function(e){return n("b-card",{key:e.text},[n("b-media",[e.name?n("h3",[t._v(t._s(e.name))]):t._e(),n("b-img",{attrs:{slot:"aside",blank:"","blank-color":"#ccc",width:"64",alt:"profil picture"},slot:"aside"}),n("p",{staticClass:"card-text"},[t._v(t._s(e.text))])],1)],1)})],2),n("b-col",{attrs:{sm:"12",lg:"6"}},[n("h2",[t._v("Astuces d'anciens voyageurs")]),t._l(t.destination.hints,function(e){return n("div",{key:e.text},[n("b-card",[n("b-media",[n("b-img",{attrs:{slot:"aside",blank:"","blank-color":"#ccc",width:"64",alt:"profil picture"},slot:"aside"}),n("p",{staticClass:"card-text"},[t._v(t._s(e.text))])],1)],1)],1)})],2)],1)],2):n("div",[n("b-alert",{attrs:{show:"",variant:"danger"}},[t._v("Couldn't load data !")])],1)},at=[],rt={name:"PanelCountry",props:["idJson"],data:function(){return{destination:{},cost:{},ok:!1}},created:function(){var t=this;fetch("country/"+this.idJson+".json").then(function(t){return t.text()}).then(function(e){try{var n=JSON.parse(e);t.destination=n,t.ok=!0}catch(o){t.ok=!1}}),this.cost=this.destination.prices,console.debug(this.cost),console.debug("YAS")}},it=rt,st=(n("1007"),Object(b["a"])(it,ot,at,!1,null,"c2a1b5ec",null));st.options.__file="PanelCountry.vue";var lt=st.exports,ct={name:"CustomPanel",components:{PanelCountry:lt},data:function(){return{open:!1,idJson:"none"}},mounted:function(){var t=this;d.$on("clickPanel",function(e){t.open=!0,t.idJson=e})},methods:{hideModal:function(){this.open=!1}}},ut=ct,pt=(n("0d03"),Object(b["a"])(ut,et,nt,!1,null,"17b68dbf",null));pt.options.__file="MapPanel.vue";var dt=pt.exports,ft=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-container",{staticClass:"legendbar",attrs:{fluid:""}},[n("div",{staticClass:"d-flex justify-content-between"},[n("div",[n("p",[n("span",{staticClass:"dot dest-group"}),t._v(" Destination en groupe "),n("span",{staticClass:"dot dest-solo"}),t._v("\n                Destination en solo ")])]),n("div",[n("p",[t._v("Cliquez sur une destination pour en savoir plus.")])])])])},mt=[],bt={name:"MapLegend"},vt=bt,ht=(n("d158"),Object(b["a"])(vt,ft,mt,!1,null,"2190fcd9",null));ht.options.__file="MapLegend.vue";var _t=ht.exports,gt={name:"app",components:{MapLegend:_t,Footer:tt,MainFormLoader:J,Navbar:j,MainMap:C,CustomPanel:dt,MainInfo:H},methods:{}},yt=gt,xt=(n("034f"),Object(b["a"])(yt,a,r,!1,null,null,null));xt.options.__file="App.vue";var wt=xt.exports,Ct=n("9f7b"),kt=n("0a47"),Mt=n.n(kt);o["a"].config.productionTip=!1,o["a"].use(Ct["a"]),o["a"].use(Mt.a),new o["a"]({render:function(t){return t(wt)}}).$mount("#app")},"64a9":function(t,e,n){},6551:function(t,e,n){"use strict";var o=n("b8b0"),a=n.n(o);a.a},"78fc":function(t,e,n){"use strict";var o=n("8692"),a=n.n(o);a.a},"7f65":function(t,e,n){},8692:function(t,e,n){},9196:function(t,e,n){"use strict";var o=n("d47b"),a=n.n(o);a.a},b8b0:function(t,e,n){},bdf3:function(t,e,n){},cd11:function(t,e,n){"use strict";var o=n("f27b"),a=n.n(o);a.a},cddb:function(t,e,n){"use strict";var o=n("7f65"),a=n.n(o);a.a},d158:function(t,e,n){"use strict";var o=n("0edf"),a=n.n(o);a.a},d47b:function(t,e,n){},e3bb:function(t,e,n){},f27b:function(t,e,n){},fe3c:function(t,e,n){}});
//# sourceMappingURL=app.cbf7cd59.js.map