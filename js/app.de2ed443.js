(function(t){function e(e){for(var a,r,s=e[0],c=e[1],u=e[2],p=0,d=[];p<s.length;p++)r=s[p],o[r]&&d.push(o[r][0]),o[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);l&&l(e);while(d.length)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,s=1;s<n.length;s++){var c=n[s];0!==o[c]&&(a=!1)}a&&(i.splice(e--,1),t=r(r.s=n[0]))}return t}var a={},o={app:0},i=[];function r(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=a,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var l=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("64a9"),o=n.n(a);o.a},"0a20":function(t){t.exports={}},"0d03":function(t,e,n){"use strict";var a=n("fe3c"),o=n.n(a);o.a},1580:function(t,e,n){"use strict";var a=n("c92a"),o=n.n(a);o.a},"167b":function(t){t.exports={}},"171a":function(t,e,n){"use strict";var a=n("8bbf"),o=n.n(a);o.a},"174d":function(t,e,n){"use strict";var a=n("4af3"),o=n.n(a);o.a},1856:function(t,e,n){"use strict";var a=n("4fe9"),o=n.n(a);o.a},"1c7c":function(t,e,n){},"23cf":function(t){t.exports={}},"2c2a":function(t){t.exports={}},"3f09":function(t,e,n){"use strict";var a=n("1c7c"),o=n.n(a);o.a},"47d3":function(t,e,n){},"4af3":function(t,e,n){},"4fe9":function(t,e,n){},5490:function(t,e,n){"use strict";var a=n("bdf3"),o=n.n(a);o.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var a=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Navbar"),n("MainMap"),n("MapLegend"),n("b-container",{staticStyle:{"max-width":"1700px"},attrs:{fluid:""}},[n("b-row",[n("b-col",{staticClass:"maincol",attrs:{sm:"12",md:"6"}},[n("MainInfo")],1),n("b-col",{staticClass:"maincol",attrs:{sm:"12",md:"6"}},[n("MainFormLoader")],1)],1),n("result")],1),n("Footer"),n("CustomPanel")],1)},i=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"mainMap"}},[n("mapbox",{attrs:{mapOptions:{style:"mapbox://styles/thibaultlepez/cjpe5zf7r28d02spc17r22xjy"},accessToken:"pk.eyJ1IjoidGhpYmF1bHRsZXBleiIsImEiOiJjam9rODhlOHIwMXBqM3FteDY3cjVnMmk4In0.1y1C0L8RxjVOkndgeo5xMg"},on:{"map-click":t.mapClicked,"map-mousemove":t.mouseOverLabel}})],1)},s=[],c=n("7be2"),u=n.n(c),l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"popupCard"}},[n("div",{staticClass:"popupcard-container container"},[n("b-card",{staticClass:"text-center",attrs:{"bg-variant":"dark",header:"<h1 class='popup'>"+this.destination.country+"</h1> <h2 class='popup'>("+this.destination.city+")</h2>","text-variant":"white"}},[n("div",{staticClass:"row align-items-center"},[n("div",{staticClass:"popuptext"},[n("h2",{staticClass:"popup"},[t._v(t._s(this.destination.name))]),n("b-button",{staticClass:"d-flex align-items-end",attrs:{variant:"primary"},on:{click:t.launchPanel}},[t._v("En savoir plus\n                    ")])],1)])])],1)])},p=[],d=new a["a"],f={name:"PopupCard",props:{destination:{name:"",country:"",id:"",city:""}},data:function(){return{}},methods:{launchPanel:function(){d.$emit("clickPanel",this.destination.id)}}},m=f,v=(n("cd11"),n("2877")),b=Object(v["a"])(m,l,p,!1,null,null,null);b.options.__file="MapPopup.vue";var h=b.exports,_=n("e192"),y=n.n(_),g={name:"MainMap",components:{Mapbox:u.a},data:function(){return{PopupContent:a["a"].extend(h)}},methods:{mouseOverLabel:function(t,e){var n=t.queryRenderedFeatures(e.point,{layers:["group","group_label","solo","solo_label"]});t.getCanvas().style.cursor=n.length?"pointer":""},mapClicked:function(t,e){var n=t.queryRenderedFeatures(e.point);if(0!==n.length&&("solo"===n[0].layer.id||"group"===n[0].layer.id||"solo_label"===n[0].layer.id||"group_label"===n[0].layer.id)){var a=n[0];this.createPopUp(t,a)}},createPopUp:function(t,e){t.flyTo({center:e.geometry.coordinates});var n=window.document.createElement("div");n.id="vue-popup-content",n.style.height="160px",n.style.width="260px",new y.a.Popup({closeOnClick:!0}).setLngLat(e.geometry.coordinates).setDOMContent(n).addTo(t),new this.PopupContent({propsData:{destination:e.properties}}).$mount("#vue-popup-content")}}},x=g,C=(n("5490"),Object(v["a"])(x,r,s,!1,null,null,null));C.options.__file="Map.vue";var k=C.exports,w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-navbar",{staticStyle:{"background-color":"rgb(0, 34, 46)"},attrs:{toggleable:"md",type:"dark"}},[n("b-navbar-toggle",{attrs:{target:"nav_collapse"}}),n("b-navbar-brand",{attrs:{href:"#"}},[n("img",{staticStyle:{width:"50px",height:"51px"},attrs:{src:"img/logo.png",alt:"logo"}}),t._v("\n        IMMERSION TIME\n    ")]),n("b-collapse",{attrs:{"is-nav":"",id:"nav_collapse"}},[n("b-navbar-nav",{staticClass:"ml-auto"},[n("b-nav-form",[n("b-form-input",{staticClass:"mr-sm-2",attrs:{size:"sm",type:"text",placeholder:"Recherche"}}),n("b-button",{staticClass:"my-2 my-sm-0",attrs:{size:"sm",type:"submit"}},[t._v("Recherche")])],1)],1)],1)],1)},M=[],O={name:"Navbar"},P=O,j=(n("174d"),Object(v["a"])(P,w,M,!1,null,"4e779d26",null));j.options.__file="TheNavbar.vue";var L=j.exports,E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{height:"100%"}},[n("H2",[t._v("Recherche de destination")]),n("p",[t._v("Laissez-vous surprendre !")]),n("div",{staticClass:"center",class:{open:t.formOpen}},[n("div",{staticClass:"open-button",class:{open:t.formOpen}},[n("div",{directives:[{name:"show",rawName:"v-show",value:!t.formOpen,expression:"!formOpen"}],staticClass:"button-copy",on:{click:function(e){t.formOpen=!0}}},[n("span",{staticClass:"button-copy-span"},[t._v("Trouver votre destination")])]),n("form",{on:{submit:function(e){t.cancel()}}},[n("MainForm"),n("div",{directives:[{name:"show",rawName:"v-show",value:t.formOpen,expression:"formOpen"}],staticClass:"cancel"},[n("span",{on:{click:function(e){t.cancel()}}},[t._v("Retour")])])],1)])])],1)},$=[],R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"mainForm"}},[n("b-form",{on:{submit:t.onSubmit,reset:t.onReset}},[n("b-form-group",{attrs:{id:"inputSectionGroupe",label:"Votre section","label-for":"inputSection"}},[n("b-form-select",{attrs:{id:"inputSection",options:t.section,required:""},model:{value:t.form.section,callback:function(e){t.$set(t.form,"section",e)},expression:"form.section"}})],1),n("b-row",[n("b-col",{attrs:{sm:"6"}},["Internationale"==t.form.section?n("b-form-group",{attrs:{id:"inputToeicGroup",label:"Toeic en fin L1","label-for":"inputToiec"}},[n("b-form-input",{attrs:{id:"inputToiec",type:"number",required:"",placeholder:"Votre Toeic en fin L1"},model:{value:t.form.toiec,callback:function(e){t.$set(t.form,"toiec",e)},expression:"form.toiec"}})],1):t._e()],1)],1),n("b-row",[n("b-col",{attrs:{sm:"6"}},[n("b-form-group",{attrs:{id:"inputMoyenneGroup",label:"Moyenne en L1","label-for":"inputMoyenne"}},[n("b-form-input",{attrs:{id:"inputMoyenne",type:"number",required:"",placeholder:"Votre moyenne en L1"},model:{value:t.form.moyenne,callback:function(e){t.$set(t.form,"moyenne",e)},expression:"form.moyenne"}})],1)],1),n("b-col",[n("b-form-group",{attrs:{id:"inputGPAGroup",label:"GPA en L1","label-for":"inputGPA"}},[n("b-form-input",{attrs:{id:"inputGPA",type:"number",required:"",placeholder:"Votre GPA en L1"},model:{value:t.form.gpa,callback:function(e){t.$set(t.form,"gpa",e)},expression:"form.gpa"}})],1)],1)],1),n("b-form-group",{attrs:{id:"inputBudgetGroup","label-for":"inputBudgetGroup"}},[n("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{title:"Votre budget total sur les 5 mois comprenant le transport (aller-retour)"}},[t._v("Budget")]),n("b-input-group",{attrs:{append:"€"}},[n("b-form-input",{attrs:{id:"inputBudget",type:"number",placeholder:"Votre budget total"},model:{value:t.form.budget,callback:function(e){t.$set(t.form,"budget",e)},expression:"form.budget"}})],1)],1),n("b-form-group",{attrs:{id:"exampleGroup4"}},[n("b-form-checkbox-group",{attrs:{id:"exampleChecks"},model:{value:t.form.checked,callback:function(e){t.$set(t.form,"checked",e)},expression:"form.checked"}},[n("b-form-checkbox",{attrs:{value:"passport"}},[t._v("Passport en cours de validité")]),n("b-form-checkbox",{attrs:{value:"bourse"}},[t._v("Boursier")])],1)],1),n("b-button",{attrs:{type:"submit",variant:"primary"}},[t._v("Décoller ✈️")]),n("b-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"reset",variant:"danger"}},[t._v("Réinitialiser")])],1)],1)},T=[];n("6762"),n("2fdb"),n("2c2a"),n("f4ae"),n("f5dd"),n("a9f8"),n("e0cc"),n("c193"),n("c121"),n("95ee"),n("0a20"),n("23cf"),n("f52c"),n("167b");function I(t){var e=new Date(Date.UTC(2019,5,1,0,0,0,0)),n={easy:{univ:[],comments:[]},hard:{univ:[],issue:[]}};if(!(Date.now()>e.getTime())||t.checked.includes("passport"))return"Internationale"===t.section&&t.moyenne>12&&(t.toeic>700?(n.easy.univ.push("cork"),n.easy.univ.push("coventry"),n.easy.univ.push("kaist"),n.easy.univ.push("curtin")):(n.easy.univ.push(""),n.hard.issue.push("teoic level to low"),n.hard.univ.push(""))),t.gpa>2?(n.easy.univ.push("concordia"),n.easy.univ.push("malaysia")):(n.easy.univ.push("cape"),n.easy.univ.push("manipal"),n.easy.univ.push("staffordshire"),n.hard.univ.push("concordia"),n.hard.univ.push("malaysia"),n.hard.issue.push("work hard")),n;n.easy.push("agh"),n.hard.issue.push("invalid passport")}var S={name:"MainForm",data:function(){return{form:{section:null,toeic:null,moyenne:null,gpa:null,budget:null,checked:[]},section:["Internationale","Classique","Bio-numérique","Renforcée"],show:!1}},methods:{onSubmit:function(t){t.preventDefault(),!1===this.show&&(this.form.choices=[]),console.log(JSON.stringify(I(this.form))),d.$emit("displayRes",I(this.form))},onReset:function(t){var e=this;t.preventDefault(),this.form.section=null,this.form.toeic=null,this.form.moyenne=null,this.form.gpa=null,this.form.budget=null,this.form.checked=[],this.$nextTick(function(){e.show=!0})}}},N=S,q=(n("171a"),Object(v["a"])(N,R,T,!1,null,"e944ea24",null));q.options.__file="MainForm.vue";var F=q.exports,D={name:"MainFormLoader",components:{MainForm:F},data:function(){return{formOpen:!1}},methods:{cancel:function(){this.formOpen=!1}}},G=D,A=(n("cddb"),Object(v["a"])(G,E,$,!1,null,null,null));A.options.__file="MainFormLoader.vue";var J=A.exports,B=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"mainInfo"}},[n("h2",[t._v("Qu'est ce qu'Immersion Time?")]),n("p",[t._v("Dans le cadre du projet de programmation de L2, Mayhem Adventure présente un site dédié exclusivement aux étudiants d’Efrei Paris.")]),n("p",[t._v("\n        Il permet, à titre théorique, d’étudier vos possibilités de mobilités à l’international.\n        Notre équipe a pour ambition de te faire découvrir des destinations auxquelles tu n’avais peut-être pas pensé.\n    ")]),n("p",[t._v("\n        Cependant, ce site ne peut en aucun cas vous assurer l’application des destinations obtenues.\n        Ces dernières évoluant en fonction de paramètres étant propres à chaque promotions d’Efrei Paris.\n    ")]),n("h3",[t._v("L'Équipe de Mayhem Adventure")]),n("b-table",{attrs:{striped:"",hover:"",small:"",items:t.items}})],1)},V=[],z=[{Nom:"Gabriel DUGNY",poste:"Chef de projet"},{Nom:"Thibault LEPEZ",poste:"Responsable technique"},{Nom:"Aïda LEMDANI",poste:"Responsable design"},{Nom:"Louise BOUREY",poste:"Responsable communication"},{Nom:"Vincent LACROUTS",poste:"Testeur agile"}],U={data:function(){return{name:"MainInfo",items:z}}},Y=U,H=(n("1856"),Object(v["a"])(Y,B,V,!1,null,"5cc7808e",null));H.options.__file="MainInfo.vue";var X=H.exports,Z=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Q=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"page-footer font-small pt-4"},[n("div",{staticClass:"footer-copyright text-center py-3"},[t._v("© 2018 Copyright:\n        "),n("a",{attrs:{href:"#"}},[t._v(" Mayhem Adventure")])])])}],K={name:"Footer"},W=K,tt=(n("3f09"),Object(v["a"])(W,Z,Q,!1,null,"8f5ee242",null));tt.options.__file="TheFooter.vue";var et=tt.exports,nt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"customPanel"}},[n("vue-modaltor",{attrs:{bgPanel:"#00222E",bgOverlay:"rgb(0,0,0,0.8)","resize-width":{1200:"80%",992:"80%",768:"93%"},visible:this.open},on:{hide:t.hideModal}},[n("template",{slot:"close-icon"},[n("svg",{attrs:{version:"1.1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 40 40",width:"20",height:"20","xml:space":"preserve"}},[n("path",{staticClass:"st0",attrs:{fill:"white",d:"M8.7,7.6c-0.4-0.4-1-0.4-1.4,0C6.9,8,6.9,8.6,7.3,9l11,11l-11,11c-0.4,0.4-0.4,1,0,1.4c0.4,0.4,1,0.4,1.4,0 l11-11l11,11c0.4,0.4,1,0.4,1.4,0c0.4-0.4,0.4-1,0-1.4l-11-11L32,9c0.4-0.4,0.4-1,0-1.4c-0.4-0.4-1-0.4-1.4,0l-11,11L8.7,7.6z"}})])]),this.open?n("div",[n("PanelCountry",{attrs:{idJson:this.idJson}})],1):t._e()],2)],1)},at=[],ot=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.ok?n("div",{attrs:{id:"panelCountry"}},[n("div",{staticClass:"header",style:{"background-image":"url(img/country-panel/"+this.idJson+".jpg)"}},[n("div",{staticClass:"header-content"},[n("b-row",[n("b-col",{attrs:{sm:"12",md:"10"}},[n("h1",[n("a",{staticClass:"dark",attrs:{href:t.destination.link_website}},[t._v(t._s(t.destination.university))])]),t.destination.country?n("h2",[n("span",{staticClass:"dark"},[t._v(t._s(t.destination.city)+", "+t._s(t.destination.country.name))])]):t._e()])],1)],1)]),n("b-table",{attrs:{striped:"",hover:"",items:t.cost}}),t._l(t.destination.info,function(e){return n("div",{key:e.text},[n("b-alert",{attrs:{show:"",variant:"info"}},[t._v(t._s(e.text))])],1)}),n("b-container",{staticClass:"panel-content"},[n("b-row",[n("b-col",{attrs:{sm:"12",lg:"6"}},[n("h2",[t._v("Commentaires")]),t._l(t.destination.comments,function(e){return n("b-card",{key:e.text},[n("b-media",[e.name?n("h3",[t._v(t._s(e.name))]):t._e(),n("b-img",{attrs:{slot:"aside",blank:"","blank-color":"#ccc",width:"64",alt:"profil picture"},slot:"aside"}),n("p",{staticClass:"card-text"},[t._v(t._s(e.text))])],1)],1)})],2),n("b-col",{attrs:{sm:"12",lg:"6"}},[n("h2",[t._v("Astuces d'anciens voyageurs")]),t._l(t.destination.hints,function(e){return n("div",{key:e.text},[n("b-card",[n("b-media",[n("b-img",{attrs:{slot:"aside",blank:"","blank-color":"#ccc",width:"64",alt:"profil picture"},slot:"aside"}),n("p",{staticClass:"card-text"},[t._v(t._s(e.text))])],1)],1)],1)})],2)],1)],1)],2):n("div",[n("b-alert",{attrs:{show:"",variant:"danger"}},[t._v("Couldn't load data !")])],1)},it=[],rt={name:"PanelCountry",props:["idJson"],data:function(){return{destination:{},cost:{},ok:!1}},created:function(){var t=this;fetch("country/"+this.idJson+".json").then(function(t){return t.text()}).then(function(e){try{var n=JSON.parse(e);t.destination=n,t.ok=!0}catch(a){t.ok=!1}}),this.cost=this.destination.prices,console.debug(this.cost)}},st=rt,ct=(n("c137"),n("5ad3"),Object(v["a"])(st,ot,it,!1,null,"3c959117",null));ct.options.__file="PanelCountry.vue";var ut=ct.exports,lt={name:"CustomPanel",components:{PanelCountry:ut},data:function(){return{open:!1,idJson:"none"}},mounted:function(){var t=this;d.$on("clickPanel",function(e){t.open=!0,t.idJson=e})},methods:{hideModal:function(){this.open=!1}}},pt=lt,dt=(n("0d03"),Object(v["a"])(pt,nt,at,!1,null,"17b68dbf",null));dt.options.__file="MapPanel.vue";var ft=dt.exports,mt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-container",{staticClass:"legendbar",attrs:{fluid:""}},[n("div",{staticClass:"d-flex justify-content-between"},[n("div",[n("p",[n("span",{staticClass:"dot dest-group"}),t._v(" Destination en groupe "),n("span",{staticClass:"dot dest-solo"}),t._v("\n                Destination en solo ")])]),n("div",[n("p",[t._v("Cliquez sur une destination pour en savoir plus.")])])])])},vt=[],bt={name:"MapLegend"},ht=bt,_t=(n("dbae"),Object(v["a"])(ht,mt,vt,!1,null,"b79cc8ce",null));_t.options.__file="MapLegend.vue";var yt=_t.exports,gt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"result"}},t._l(this.result.easy.univ,function(e){return n("div",{key:e,staticClass:"res"},[n("p",[t._v(t._s(e))])])}))},xt=[],Ct={name:"Result",data:function(){return{result:{easy:{univ:[],comments:[]},hard:{univ:[],issue:[]}}}}},kt=Ct,wt=(n("1580"),Object(v["a"])(kt,gt,xt,!1,null,"4bc9732a",null));wt.options.__file="Result.vue";var Mt=wt.exports,Ot={name:"app",components:{Result:Mt,MapLegend:yt,Footer:et,MainFormLoader:J,Navbar:L,MainMap:k,CustomPanel:ft,MainInfo:X},methods:{}},Pt=Ot,jt=(n("034f"),Object(v["a"])(Pt,o,i,!1,null,null,null));jt.options.__file="App.vue";var Lt=jt.exports,Et=n("9f7b"),$t=n("0a47"),Rt=n.n($t);a["a"].config.productionTip=!1,a["a"].use(Et["a"]),a["a"].use(Rt.a),new a["a"]({render:function(t){return t(Lt)}}).$mount("#app")},5838:function(t,e,n){},"5ad3":function(t,e,n){"use strict";var a=n("71aa"),o=n.n(a);o.a},"64a9":function(t,e,n){},"71aa":function(t,e,n){},"7f65":function(t,e,n){},"8bbf":function(t,e,n){},"95ee":function(t){t.exports={}},a9f8:function(t){t.exports={}},bdf3:function(t,e,n){},c121:function(t){t.exports={}},c137:function(t,e,n){"use strict";var a=n("47d3"),o=n.n(a);o.a},c193:function(t){t.exports={}},c92a:function(t,e,n){},cd11:function(t,e,n){"use strict";var a=n("f27b"),o=n.n(a);o.a},cddb:function(t,e,n){"use strict";var a=n("7f65"),o=n.n(a);o.a},dbae:function(t,e,n){"use strict";var a=n("5838"),o=n.n(a);o.a},e0cc:function(t){t.exports={}},f27b:function(t,e,n){},f4ae:function(t){t.exports={}},f52c:function(t){t.exports={}},f5dd:function(t){t.exports={}},fe3c:function(t,e,n){}});
//# sourceMappingURL=app.de2ed443.js.map