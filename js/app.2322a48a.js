(function(e){function t(t){for(var r,c,i=t[0],s=t[1],l=t[2],u=0,b=[];u<i.length;u++)c=i[u],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&b.push(o[c][0]),o[c]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);d&&d(t);while(b.length)b.shift()();return n.push.apply(n,l||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],r=!0,c=1;c<a.length;c++){var s=a[c];0!==o[s]&&(r=!1)}r&&(n.splice(t--,1),e=i(i.s=a[0]))}return e}var r={},o={app:0},n=[];function c(e){return i.p+"js/"+({login:"login",settings:"settings"}[e]||e)+"."+{login:"3b47b2a4",settings:"990809fc"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.e=function(e){var t=[],a=o[e];if(0!==a)if(a)t.push(a[2]);else{var r=new Promise((function(t,r){a=o[e]=[t,r]}));t.push(a[2]=r);var n,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=c(e);var l=new Error;n=function(t){s.onerror=s.onload=null,clearTimeout(u);var a=o[e];if(0!==a){if(a){var r=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+n+")",l.name="ChunkLoadError",l.type=r,l.request=n,a[1](l)}o[e]=void 0}};var u=setTimeout((function(){n({type:"timeout",target:s})}),12e4);s.onerror=s.onload=n,document.head.appendChild(s)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(a,r,function(t){return e[t]}.bind(null,r));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/6G6Z1111_2021_9Z6/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var d=l;n.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("cd49")},"0242":function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return c})),a.d(t,"e",(function(){return i})),a.d(t,"d",(function(){return s})),a.d(t,"c",(function(){return l}));a("4160"),a("159b");var r=a("2591"),o=(a("ea7b"),a("e71f"),{apiKey:"AIzaSyCwH9MZ5_PAhycYKkvNWtepnOtEzl-BRA8",authDomain:"advancedwebdevelopment-24804.firebaseapp.com",databaseURL:"https://advancedwebdevelopment-24804-default-rtdb.europe-west1.firebasedatabase.app",projectId:"advancedwebdevelopment-24804",storageBucket:"advancedwebdevelopment-24804.appspot.com",messagingSenderId:"567354288751",appId:"1:567354288751:web:b501ff44c206536821fb9a",measurementId:"G-X41QVBKCTJ"});r["a"].initializeApp(o);var n=r["a"].firestore(),c=r["a"].auth(),i=n.collection("users"),s=n.collection("userCollection"),l=[],u=n.collection("mutationsCollection");u.get().then((function(e){e.forEach((function(e){var t={title:e.id,data:e.data()};l.push(t)})),console.log(l)}))},"06f0":function(e,t,a){"use strict";a("6dee")},"23b2":function(e,t,a){},"24d3":function(e,t,a){},"2d63":function(e,t,a){"use strict";a("23b2")},"4a7b":function(e,t,a){"use strict";a("24d3")},"58de":function(e,t,a){"use strict";a("9893")},"5ea5":function(e,t,a){"use strict";var r=a("7a23"),o=Object(r["withScopeId"])("data-v-7aacc190");Object(r["pushScopeId"])("data-v-7aacc190");var n={class:"nav bg-dark d-flex flex-column shadow-right"},c=Object(r["createVNode"])("div",null,[Object(r["createVNode"])("h1",{class:"mt-3"},"1CWK100 - Advanced Web Devleopment")],-1),i=Object(r["createVNode"])("div",{class:"section-split"},null,-1),s={class:"nav-account"},l={class:"account d-flex justify-content-start"},u={class:"ms-4 mb-2 h6"},d={class:"account-extras d-flex"},b=Object(r["createTextVNode"])(" Settings"),p=Object(r["createVNode"])("div",{class:"section-split"},null,-1),m={class:"functionality d-flex flex-column"},f=Object(r["createTextVNode"])(" Home"),h=Object(r["createTextVNode"])("Add"),v=Object(r["createTextVNode"])("Remove"),O=Object(r["createTextVNode"])("Documents"),j=Object(r["createTextVNode"])("About");Object(r["popScopeId"])();var x=o((function(e,t,a,x,N,V){var g=Object(r["resolveComponent"])("font-awesome-icon"),w=Object(r["resolveComponent"])("router-link");return Object(r["openBlock"])(),Object(r["createBlock"])("div",null,[Object(r["createVNode"])("nav",n,[c,i,Object(r["createVNode"])("div",s,[Object(r["createVNode"])("div",l,[Object(r["createVNode"])("p",u,Object(r["toDisplayString"])(V.getEmail),1)]),Object(r["createVNode"])("div",d,[Object(r["createVNode"])(w,{class:"ms-4",to:{name:"Settings"}},{default:o((function(){return[Object(r["createVNode"])(g,{icon:""}),b]})),_:1}),Object(r["createVNode"])("a",{class:"ms-auto me-4",onClick:t[1]||(t[1]=function(){return V.logout&&V.logout.apply(V,arguments)})},"Log Out")]),p]),Object(r["createVNode"])("div",m,[Object(r["createVNode"])(w,{to:{name:"Dashboard"}},{default:o((function(){return[Object(r["createVNode"])(g,{icon:"home"}),f]})),_:1}),Object(r["createVNode"])(w,{to:{name:"Add"}},{default:o((function(){return[Object(r["createVNode"])(g,{icon:"plus"}),h]})),_:1}),Object(r["createVNode"])(w,{to:{name:"Remove"}},{default:o((function(){return[Object(r["createVNode"])(g,{icon:"minus"}),v]})),_:1}),Object(r["createVNode"])(w,{to:{name:"Documents"}},{default:o((function(){return[Object(r["createVNode"])(g,{icon:"folder"}),O]})),_:1}),Object(r["createVNode"])(w,{to:{name:"About"}},{default:o((function(){return[Object(r["createVNode"])(g,{icon:"info"}),j]})),_:1})])])])})),N={setup:function(){return{}},computed:{getEmail:{get:function(){return this.$store.getters.getUserEmail},set:function(e){this.getEmail=e}}},methods:{logout:function(){this.$store.dispatch("logout")},test:function(){console.log(this.getEmail)}}};a("2d63");N.render=x,N.__scopeId="data-v-7aacc190";t["a"]=N},"6dee":function(e,t,a){},"7e7d":function(e,t,a){},8942:function(e,t,a){"use strict";a("ca87")},9893:function(e,t,a){},ca87:function(e,t,a){},cd49:function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("7a23"),o={id:"App"};function n(e,t,a,n,c,i){var s=Object(r["resolveComponent"])("router-view");return Object(r["openBlock"])(),Object(r["createBlock"])("div",o,[Object(r["createVNode"])(s)])}var c=a("5530"),i=a("5502"),s={components:{},computed:Object(c["a"])({},Object(i["b"])(["userProfile"]))};a("8942");s.render=n;var l=s,u=(a("45fc"),a("d3b7"),a("6c02")),d={class:"d-flex flex-row"},b={class:""},p={class:"home w-100 d-flex flex-column"},m={class:"w-100"},f=Object(r["createVNode"])("p",null,"About",-1);function h(e,t,a,o,n,c){var i=Object(r["resolveComponent"])("Sidebar"),s=Object(r["resolveComponent"])("Search");return Object(r["openBlock"])(),Object(r["createBlock"])("div",d,[Object(r["createVNode"])("div",b,[Object(r["createVNode"])(i)]),Object(r["createVNode"])("div",p,[Object(r["createVNode"])("div",m,[Object(r["createVNode"])(s)]),f])])}var v=a("5ea5"),O=(a("fb6a"),Object(r["withScopeId"])("data-v-2c2856bb"));Object(r["pushScopeId"])("data-v-2c2856bb");var j={class:"navbar sticky-top navbar-expand-lg"},x={class:"w-100"},N={class:"d-flex flex-col items-center input-group w-50 mx-auto"},V={class:"w-100 d-flex flex-row p-0"},g={key:0,class:"w-100",id:"search-cards"};Object(r["popScopeId"])();var w=O((function(e,t,a,o,n,c){var i=Object(r["resolveComponent"])("font-awesome-icon");return Object(r["openBlock"])(),Object(r["createBlock"])("nav",j,[Object(r["createVNode"])("div",x,[Object(r["createVNode"])("form",N,[Object(r["createVNode"])("div",V,[Object(r["withDirectives"])(Object(r["createVNode"])("input",{type:"search",class:"form-control z-10",id:"search-bar",placeholder:"Search","aria-label":"Search",autocomplete:"off","onUpdate:modelValue":t[1]||(t[1]=function(t){return e.card=t}),onInput:t[2]||(t[2]=function(){return c.filterCards&&c.filterCards.apply(c,arguments)}),onFocus:t[3]||(t[3]=function(){return c.update&&c.update.apply(c,arguments)})},null,544),[[r["vModelText"],e.card]]),Object(r["createVNode"])("button",{class:"btn btn-danger",type:"button","data-mdb-ripple-color":"dark",onClick:t[4]||(t[4]=function(){return c.submit&&c.submit.apply(c,arguments)})},[Object(r["createVNode"])(i,{icon:"search"})])]),e.filteredCards&&e.modal?(Object(r["openBlock"])(),Object(r["createBlock"])("div",g,[Object(r["createVNode"])("div",null,[Object(r["createVNode"])("div",{id:"blanket",onClick:t[5]||(t[5]=function(){return c.killModal&&c.killModal.apply(c,arguments)})}),(Object(r["openBlock"])(!0),Object(r["createBlock"])(r["Fragment"],null,Object(r["renderList"])(e.filteredCards.slice(0,5),(function(e){return Object(r["openBlock"])(),Object(r["createBlock"])("input",{type:"text",class:"list-group-item py-2 my-1",id:"suggest",key:e,value:e.id+" "+e.data().title[0].text,onClick:function(t){return c.setCard(e)}},null,8,["value","onClick"])})),128))])])):Object(r["createCommentVNode"])("",!0)])])])})),y=(a("4160"),a("caad"),a("2532"),a("159b"),a("0242")),k={data:function(){return{card:"",storedDoc:null,docs:[],filteredCards:[],modal:!1}},mounted:function(){this.findCharts()},methods:{findCharts:function(){var e=this;y["b"].collection("mutationsCollection").get().then((function(t){t.forEach((function(t){e.docs.push(t)}))})),y["b"].collection("userCollection").doc(this.$store.getters.getUserEmail).collection("charts").get().then((function(t){t.forEach((function(t){e.docs.push(t)}))}))},update:function(){this.modal=!0,this.filteredCards=[]},filterCards:function(){var e=this;this.filteredCards=[],this.docs.forEach((function(t){var a=t.id,r=t.data().title[0].text;""!=e.card&&(a.toLowerCase().includes(e.card.toLowerCase())||r.toLowerCase().includes(e.card.toLowerCase()))&&e.filteredCards.push(t)}))},setCard:function(e){this.card=e.id+" "+e.data().title[0].text,this.storedDoc=e,this.modal=!1},killModal:function(){this.modal=!1},submit:function(){this.$store.state.searchID=this.storedDoc,this.update()}}};a("4a7b");k.render=w,k.__scopeId="data-v-2c2856bb";var C=k,S={components:{Search:C,Sidebar:v["a"]}};S.render=h;var B=S,A={class:"d-flex flex-row"},D={class:""},T={class:"home w-100 d-flex flex-column"},U={class:"w-100"},E={class:"mx-auto"},M=Object(r["createVNode"])("div",{class:"d-flex flex-row mx-auto"},[Object(r["createTextVNode"])(" Please fill in the form or click the import "),Object(r["createVNode"])("input",{class:"mx-1",type:"button",value:"json"}),Object(r["createTextVNode"])("button ")],-1),P=Object(r["createVNode"])("label",{for:"mutationName"},"Mutation Name",-1),I=Object(r["createVNode"])("label",{for:"graphTitle"},"Graph Title",-1),L=Object(r["createVNode"])("label",{for:"xaxisName"},"xaxis Title",-1),_=Object(r["createVNode"])("label",{class:"mr-1",for:"xaxisValue"},"xaxis:",-1),R=Object(r["createVNode"])("label",{for:"yName"},"y axis name title",-1),q=Object(r["createVNode"])("label",{class:"mr-1",for:"series"},"Amount of y axis",-1),F=Object(r["createVNode"])("p",null," Enter the y entry's to the length same length as the xaxis, type null for values which are empty. ",-1),$={for:"seriesName"},J={for:"seriesValue"};function W(e,t,a,o,n,c){var i=Object(r["resolveComponent"])("Sidebar"),s=Object(r["resolveComponent"])("Search");return Object(r["openBlock"])(),Object(r["createBlock"])("div",A,[Object(r["createVNode"])("div",D,[Object(r["createVNode"])(i)]),Object(r["createVNode"])("div",T,[Object(r["createVNode"])("div",U,[Object(r["createVNode"])(s)]),Object(r["createVNode"])("div",E,[M,Object(r["createVNode"])("form",{onSubmit:t[9]||(t[9]=Object(r["withModifiers"])((function(){return e.onSubmit&&e.onSubmit.apply(e,arguments)}),["prevent"]))},[Object(r["createVNode"])("div",null,[P,Object(r["withDirectives"])(Object(r["createVNode"])("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=function(t){return e.mutationName=t}),name:"mutationName"},null,512),[[r["vModelText"],e.mutationName]])]),Object(r["createVNode"])("div",null,[I,Object(r["withDirectives"])(Object(r["createVNode"])("input",{type:"text","onUpdate:modelValue":t[2]||(t[2]=function(t){return e.graphTitle=t}),name:"graphTitle"},null,512),[[r["vModelText"],e.graphTitle]])]),Object(r["createVNode"])("div",null,[L,Object(r["withDirectives"])(Object(r["createVNode"])("input",{type:"text",name:"xaxisName","onUpdate:modelValue":t[3]||(t[3]=function(t){return e.xaxisName=t})},null,512),[[r["vModelText"],e.xaxisName]]),_,Object(r["withDirectives"])(Object(r["createVNode"])("input",{type:"text",name:"xaxisValue","onUpdate:modelValue":t[4]||(t[4]=function(t){return e.xaxisValue=t})},null,512),[[r["vModelText"],e.xaxisValue]])]),Object(r["createVNode"])("div",null,[R,Object(r["withDirectives"])(Object(r["createVNode"])("input",{type:"text",name:"yName","onUpdate:modelValue":t[5]||(t[5]=function(t){return e.yName=t})},null,512),[[r["vModelText"],e.yName]]),q,Object(r["withDirectives"])(Object(r["createVNode"])("input",{type:"number",name:"series","onUpdate:modelValue":t[6]||(t[6]=function(t){return e.amountOfseries=t}),onChange:t[7]||(t[7]=function(t){return e.seriesNameArray=[],e.seriesValueArray=[]})},null,544),[[r["vModelText"],e.amountOfseries]]),F,(Object(r["openBlock"])(!0),Object(r["createBlock"])(r["Fragment"],null,Object(r["renderList"])(parseInt(e.amountOfseries),(function(t,a){return Object(r["openBlock"])(),Object(r["createBlock"])("div",{key:a},[Object(r["createVNode"])("label",$,"Entry "+Object(r["toDisplayString"])(t)+"s Name:",1),Object(r["withDirectives"])(Object(r["createVNode"])("input",{type:"text",name:"seriesName","onUpdate:modelValue":function(a){return e.seriesNameArray[t-1]=a}},null,8,["onUpdate:modelValue"]),[[r["vModelText"],e.seriesNameArray[t-1]]]),Object(r["createVNode"])("label",J,"Entry "+Object(r["toDisplayString"])(t)+"s Value:",1),Object(r["withDirectives"])(Object(r["createVNode"])("input",{type:"text",name:"seriesValue","onUpdate:modelValue":function(a){return e.seriesValueArray[t-1]=a}},null,8,["onUpdate:modelValue"]),[[r["vModelText"],e.seriesValueArray[t-1]]])])})),128))]),Object(r["createVNode"])("div",null,[Object(r["createVNode"])("input",{type:"submit",value:"submit",onClick:t[8]||(t[8]=function(){return e.jsonForm&&e.jsonForm.apply(e,arguments)})})])],32)])])])}a("d81d"),a("a9e3"),a("ac1f"),a("1276");var Z=Object(r["defineComponent"])({data:function(){return{mutationName:"mutationName",graphTitle:"graphTitle",xaxisValue:"1,2,3,4,5",xaxisName:"xaxisName",yName:"yName",yValues:"1,2,3,4,5",amountOfseries:1,seriesNameArray:[],seriesValueArray:[],data:[]}},methods:{jsonForm:function(){var e=[],t=[],a=[],r=[];this.data=[{series:e,title:t,xaxis:a,yaxis:r}];var o=this.convertStringToList(this.xaxisValue),n=o.map((function(e){return Number(e)})),c=!1;console.log(this.data[0]),(0==this.xaxisValue.length||0==this.seriesValueArray.length||this.checkTitles())&&(c=!0),console.log(c),c||this.checkXvsYs(e,c,n)?console.log("failed"):(this.createJson(t,a,r,n),this.$store.dispatch("insertUserData",{mutationName:this.mutationName,data:this.data[0]}),console.log("pass"))},convertStringToList:function(e){var t=e,a=t.split(",");return a},checkTitles:function(){return void 0==this.mutationName?(console.log(1),!0):void 0==this.graphTitle?(console.log(2),!0):void 0==this.xaxisName?(console.log(3),!0):void 0==this.yName&&(console.log(4),!0)},checkXvsYs:function(e,t,a){var r=a.length,o=this.convertStringToList(this.seriesValueArray[0]),n=o.map((function(e){return Number(e)}));for(var c in this.seriesValueArray){var i=this.seriesNameArray[c];if(void 0==i||n.length!=r||t)return!0;var s={name:i,data:n};e[c]=s}return!1},createJson:function(e,t,a,r){var o={text:this.graphTitle},n={categories:r,title:[{text:this.xaxisName}]},c={title:[{text:this.yName}]};e.push(o),t.push(n),a.push(c)}},components:{Search:C,Sidebar:v["a"]}});Z.render=W;var z=Z,G={class:"d-flex flex-row"},K={class:""},X={class:"home w-100 d-flex flex-column"},Y={class:"w-100"},H={class:"row w-100 mx-auto"};function Q(e,t,a,o,n,c){var i=Object(r["resolveComponent"])("Sidebar"),s=Object(r["resolveComponent"])("Search"),l=Object(r["resolveComponent"])("LineChart"),u=Object(r["resolveComponent"])("router-link");return Object(r["openBlock"])(),Object(r["createBlock"])("div",G,[Object(r["createVNode"])("div",K,[Object(r["createVNode"])(i)]),Object(r["createVNode"])("div",X,[Object(r["createVNode"])("div",Y,[Object(r["createVNode"])(s)]),Object(r["createVNode"])("div",H,[(Object(r["openBlock"])(),Object(r["createBlock"])("div",{key:this.chart.title,class:"col-12 col-xl-6"},[Object(r["createVNode"])(u,{to:{path:"/chart",query:{chartid:e.chart.title}}},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(l,{data:e.chart},null,8,["data"])]})),_:1},8,["to"])]))])])])}function ee(e,t,a,o,n,c){var i=Object(r["resolveComponent"])("apexchart");return Object(r["openBlock"])(),Object(r["createBlock"])(i,{type:"line",height:"350",width:"100%",options:n.options,series:n.series},null,8,["options","series"])}var te={setup:function(){return{}},props:["data"],data:function(){return{series:this.data.data.series,title:this.data.data.xaxis[0].title[0].text,options:{chart:{id:this.title},title:{text:"("+this.data.title+") "+this.data.data.title[0].text},xaxis:{categories:this.data.data.xaxis.categories,title:{text:this.data.data.xaxis[0].title[0].text}},yaxis:{title:{text:this.data.data.yaxis[0].title[0].text}}}}}};te.render=ee;var ae=te,re=Object(r["defineComponent"])({props:["chartid"],components:{Search:C,Sidebar:v["a"],LineChart:ae},data:function(){return{chart:{}}},mounted:function(){var e=this;y["b"].collection("mutationsCollection").get().then((function(t){t.forEach((function(t){t.id===e.chartid&&(e.chart=t),alert()}))}))}});a("58de");re.render=Q;var oe=re,ne={class:"d-flex flex-row"},ce={class:""},ie={class:"home w-100 d-flex flex-column"},se={class:"w-100"},le={class:"row w-100 mx-auto"};function ue(e,t,a,o,n,c){var i=Object(r["resolveComponent"])("Sidebar"),s=Object(r["resolveComponent"])("Search"),l=Object(r["resolveComponent"])("LineChart");return Object(r["openBlock"])(),Object(r["createBlock"])("div",ne,[Object(r["createVNode"])("div",ce,[Object(r["createVNode"])(i)]),Object(r["createVNode"])("div",ie,[Object(r["createVNode"])("div",se,[Object(r["createVNode"])(s)]),Object(r["createVNode"])("div",le,[(Object(r["openBlock"])(!0),Object(r["createBlock"])(r["Fragment"],null,Object(r["renderList"])(e.defaultCharts,(function(e){return Object(r["openBlock"])(),Object(r["createBlock"])("div",{key:e.title,class:"col-12 col-xl-6"},[Object(r["createVNode"])(l,{data:e},null,8,["data"])])})),128))])])])}var de=Object(r["defineComponent"])({components:{Search:C,Sidebar:v["a"],LineChart:ae},computed:{defaultCharts:function(){return this.$store.state.defaultMutations}}});a("06f0");de.render=ue;var be=de,pe={class:"d-flex flex-row"},me={class:""},fe={class:"home w-100 d-flex flex-column"},he={class:"w-100"},ve={class:"row w-100 mx-auto"};function Oe(e,t,a,o,n,c){var i=Object(r["resolveComponent"])("Sidebar"),s=Object(r["resolveComponent"])("Search"),l=Object(r["resolveComponent"])("LineChart");return Object(r["openBlock"])(),Object(r["createBlock"])("div",pe,[Object(r["createVNode"])("div",me,[Object(r["createVNode"])(i)]),Object(r["createVNode"])("div",fe,[Object(r["createVNode"])("div",he,[Object(r["createVNode"])(s)]),Object(r["createVNode"])("div",ve,[(Object(r["openBlock"])(!0),Object(r["createBlock"])(r["Fragment"],null,Object(r["renderList"])(e.userMutations,(function(e){return Object(r["openBlock"])(),Object(r["createBlock"])("div",{key:e.title,class:"col-12 col-xl-6"},[Object(r["createVNode"])(l,{data:e},null,8,["data"])])})),128))])])])}var je=Object(r["defineComponent"])({components:{Search:C,Sidebar:v["a"],LineChart:ae},setup:function(){var e=Object(i["c"])();e.dispatch("retrieveUserData").then((function(e){console.log(e)}))},computed:{userMutations:function(){return this.$store.state.userData}}});je.render=Oe;var xe=je,Ne={class:"d-flex flex-row"},Ve={class:""},ge={class:"home w-100 d-flex flex-column"},we={class:"w-100"},ye=Object(r["createVNode"])("p",null,"Manage",-1);function ke(e,t,a,o,n,c){var i=Object(r["resolveComponent"])("Sidebar"),s=Object(r["resolveComponent"])("Search");return Object(r["openBlock"])(),Object(r["createBlock"])("div",Ne,[Object(r["createVNode"])("div",Ve,[Object(r["createVNode"])(i)]),Object(r["createVNode"])("div",ge,[Object(r["createVNode"])("div",we,[Object(r["createVNode"])(s)]),ye])])}var Ce={components:{Search:C,Sidebar:v["a"]}};Ce.render=ke;var Se=Ce,Be={class:"d-flex flex-row"},Ae={class:""},De={class:"home w-100 d-flex flex-column"},Te={class:"w-100"},Ue=Object(r["createVNode"])("p",null,"Remove",-1);function Ee(e,t,a,o,n,c){var i=Object(r["resolveComponent"])("Sidebar"),s=Object(r["resolveComponent"])("Search");return Object(r["openBlock"])(),Object(r["createBlock"])("div",Be,[Object(r["createVNode"])("div",Ae,[Object(r["createVNode"])(i)]),Object(r["createVNode"])("div",De,[Object(r["createVNode"])("div",Te,[Object(r["createVNode"])(s)]),Ue])])}var Me={components:{Search:C,Sidebar:v["a"]}};Me.render=Ee;var Pe=Me,Ie=[{path:"/",name:"Dashboard",component:be,meta:{requiresAuth:!0}},{path:"/login",name:"Login",component:function(){return a.e("login").then(a.bind(null,"a55b"))}},{path:"/about",name:"About",component:B,meta:{requiresAuth:!0}},{path:"/add",name:"Add",component:z,meta:{requiresAuth:!0}},{path:"/chart",name:"Chart",component:oe,props:function(e){return{chartid:e.query.chartid}},meta:{requiresAuth:!0}},{path:"/Settings",name:"Settings",component:function(){return a.e("settings").then(a.bind(null,"26d3"))},meta:{requiresAuth:!0}},{path:"/documents",name:"Documents",component:xe,meta:{requiresAuth:!0}},{path:"/remove",name:"Remove",component:Pe,meta:{requiresAuth:!0}},{path:"/manage",name:"Manage",component:Se,meta:{requiresAuth:!0}}],Le=Object(u["a"])({history:Object(u["b"])("/6G6Z1111_2021_9Z6/"),routes:Ie});Le.beforeEach((function(e,t,a){var r=e.matched.some((function(e){return e.meta.requiresAuth}));r&&!y["a"].currentUser?a("/login"):a()}));var _e=Le,Re=(a("b0c0"),a("96cf"),a("1da1")),qe=a("0e44"),Fe=Object(i["a"])({plugins:[Object(qe["a"])()],state:{userProfile:{},userEmail:"",searchID:null,clickedChart:{},userData:[],defaultMutations:y["c"]},getters:{getUserProfile:function(e){return e.userProfile},getUserEmail:function(e){return e.userEmail},getSearchID:function(e){return e.searchID},getClickedChart:function(e){return e.clickedChart},getUserData:function(e){return e.userData}},mutations:{setUserProfile:function(e,t){e.userProfile=t},setUserEmail:function(e,t){e.userEmail=t},setSearchID:function(e,t){e.searchID=t},setClickedChart:function(e,t){e.clickedChart=t},setUserData:function(e,t){e.userData=t}},actions:{login:function(e,t){return Object(Re["a"])(regeneratorRuntime.mark((function a(){var r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return r=e.dispatch,a.next=3,y["a"].signInWithEmailAndPassword(t.email,t.password);case 3:console.log(t.email),r("fetchUserProfile",t.email);case 5:case"end":return a.stop()}}),a)})))()},fetchUserProfile:function(e,t){return Object(Re["a"])(regeneratorRuntime.mark((function a(){var r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:r=e.commit,r("setUserEmail",t),console.log("test2"+t),_e.push("/");case 4:case"end":return a.stop()}}),a)})))()},signup:function(e,t){return Object(Re["a"])(regeneratorRuntime.mark((function a(){var r,o;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return r=e.dispatch,o=y["a"].createUserWithEmailAndPassword(t.email,t.password).catch((function(e){var t=e.code,a=e.message;"auth/weak-password"==t?alert("The password is too weak."):alert(a),console.log(e)})),a.next=4,y["e"].doc().set({name:t.name,title:t.title,phone:t.phone});case 4:console.log("test"+o),o&&r("fetchUserProfile",t.email),_e.push("/");case 7:case"end":return a.stop()}}),a)})))()},updateProfile:function(e,t){return Object(Re["a"])(regeneratorRuntime.mark((function a(){var r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return r=e.dispatch,a.next=3,y["e"].doc(t).update({name:t.name,title:t.title,phone:t.phone});case 3:r("fetchUserProfile",{uid:t});case 4:case"end":return a.stop()}}),a)})))()},logout:function(e){return Object(Re["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e.commit,t.next=3,y["a"].signOut();case 3:a("setUserProfile",{}),_e.push("/login");case 5:case"end":return t.stop()}}),t)})))()},insertUserData:function(e,t){var a=this;return Object(Re["a"])(regeneratorRuntime.mark((function r(){var o,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:e.commit,o=t.mutationName,n=t.data,console.log(o),y["d"].doc(a.state.userEmail).collection("charts").doc(o).set(n).then((function(){console.log("passed")})).catch((function(){return console.log("failed")}));case 4:case"end":return r.stop()}}),r)})))()},retrieveUserData:function(e){var t=this;return Object(Re["a"])(regeneratorRuntime.mark((function a(){var r,o,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:r=e.commit,o=y["d"].doc(t.state.userEmail).collection("charts"),n=[],o.get().then((function(e){e.forEach((function(e){var t={title:e.id,data:e.data()};n.push(t)})),r("setUserData",n)}));case 4:case"end":return a.stop()}}),a)})))()}},modules:{}}),$e=a("ecee"),Je=a("c074"),We=a("ad3d"),Ze=a("ae27"),ze=a.n(Ze);a("7e7d");$e["c"].add(Je["a"]);var Ge=Object(r["createApp"])(l);Ge.component("font-awesome-icon",We["a"]),Ge.use(Fe),Ge.use(_e),Ge.use(ze.a),Ge.mount("#app"),$e["c"].add(Je["a"])}});
//# sourceMappingURL=app.2322a48a.js.map