(this["webpackJsonpkh2fm-randomizer"]=this["webpackJsonpkh2fm-randomizer"]||[]).push([[0],{112:function(e,a,t){"use strict";t.r(a);var n,r=t(0),l=t.n(r),c=t(9),i=t.n(c),o=t(41),s=t(151),m=t(148),E=t(27),d=t(153),p=Object(m.a)((function(){return{footer:{flexShrink:0},link:{color:"green",textDecoration:"none"},left:{float:"left"},right:{float:"right"}}})),h=function(){var e=p();return l.a.createElement("footer",{className:e.footer},l.a.createElement(s.a,null,l.a.createElement(d.a,{className:e.left},l.a.createElement("a",{href:"https://github.com/afresquet/kh2fm-randomizer",target:"_blank",rel:"noopener noreferrer",className:e.link},"GitHub")," - ",l.a.createElement("a",{href:"http://twitter.valaxor.com",target:"_blank",rel:"noopener noreferrer",className:e.link},"Twitter")," - ",l.a.createElement("a",{href:"http://twitch.valaxor.com",target:"_blank",rel:"noopener noreferrer",className:e.link},"Twitch")," - ",l.a.createElement("a",{href:"http://donate.valaxor.com",target:"_blank",rel:"noopener noreferrer",className:e.link},"Donate")),l.a.createElement(d.a,{className:e.right},"Special thanks to"," ",l.a.createElement("a",{href:"https://twitter.com/Sonicshadowsil2",target:"_blank",rel:"noopener noreferrer",className:e.link},"Sonicshadowsilver2"),", ",l.a.createElement("a",{href:"https://twitter.com/desa3579",target:"_blank",rel:"noopener noreferrer",className:e.link},"Desa3579")," and ",l.a.createElement("a",{href:"https://twitter.com/Bizkit047",target:"_blank",rel:"noopener noreferrer",className:e.link},"Bizkit047"))))},u=t(23),b=t.n(u),g=t(34),f=t(35),v=t(11),w=t(17),k=t(158),x=t(167),y=t(157),O=t(169),A=t(170),C=t(154),j=t(165),R=t(168),D=t(48),T=t.n(D),B="https://us-central1-kh2fm-randomizer.cloudfunctions.net/randomizer";!function(e){e[e.BASE_GAME=0]="BASE_GAME",e[e.GOA_MOD=1]="GOA_MOD"}(n||(n={}));var S=Object(m.a)((function(e){return{paper:{margin:e.spacing(3),marginLeft:"auto",marginRight:"auto",padding:e.spacing(3),width:"50%"},marginBottom:{marginBottom:e.spacing(3)},chipsWrapper:{marginBottom:e.spacing(3),display:"flex",justifyContent:"center",flexWrap:"wrap","& > *":{margin:e.spacing(.5)}},buttonWrapper:{textAlign:"center"},button:{width:"75%"}}})),G=function(e){var a=e.history,t=S(),c=Object(r.useState)(!1),i=Object(w.a)(c,2),o=i[0],s=i[1],m=Object(r.useState)({seed:""}),E=Object(w.a)(m,2),p=E[0],h=E[1],u=Object(r.useState)({stats:!0,criticalMode:!0,abilities:!0,level50:!0,level1:!1,donaldAbilities:!0,goofyAbilities:!0,formAbilities:!0,growthAbilities:!0,simulatedTwilightTown:!0,twilightTown:!0,hollowBastion:!0,cavernOfRemembrance:!0,organizationXIII:!0,beastsCastle:!0,olympus:!0,olympusCups:!0,agrabah:!0,landOfDragons:!0,pooh:!0,atlantica:!0,prideLands:!0,disneyCastle:!0,timelessRiver:!0,halloweenTown:!0,portRoyal:!0,spaceParanoids:!0,twtnw:!0,ultimaWeapon:!0,maxGrowthAbilities:!0,finalForm:!0,synthItems:!0}),D=Object(w.a)(u,2),G=D[0],M=D[1],N=Object(r.useState)(n.GOA_MOD),W=Object(w.a)(N,2),L=W[0],F=W[1],I=Object(r.useCallback)((function(e){var a=e.target,t=a.name,n=a.value;h((function(e){return Object(v.a)(Object(v.a)({},e),{},Object(f.a)({},t,n))}))}),[]),_=Object(r.useCallback)((function(e){F(e.target.value)}),[]),z=Object(r.useCallback)((function(e){return function(){M((function(a){return"abilities"===e&&a.abilities?Object(v.a)(Object(v.a)({},a),{},{abilities:!1,level50:!1}):"level1"!==e||a.level1?"level50"!==e||a.level50?Object(v.a)(Object(v.a)({},a),{},Object(f.a)({},e,!a[e])):Object(v.a)(Object(v.a)({},a),{},{level50:!0,level1:!1}):Object(v.a)(Object(v.a)({},a),{},{level50:!1,level1:!0})}))}}),[]),P=Object(r.useCallback)((function(e){var a=e.label,t=e.name,n=e.checked,r=e.disabled;return l.a.createElement(x.a,{label:a,color:n?"primary":"default",onClick:z(t),disabled:r})}),[z]),V=Object(r.useCallback)(function(){var e=Object(g.a)(b.a.mark((function e(t){var n,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.preventDefault(),s(!0),n=Object.entries(G).filter((function(e){var a=Object(w.a)(e,2);a[0];return a[1]})).reduce((function(e,a){var t=Object(w.a)(a,2),n=t[0],r=t[1];return Object(v.a)(Object(v.a)({},e),{},Object(f.a)({},n,r))}),{}),e.next=6,T.a.post("".concat(B,"/seed"),Object(v.a)(Object(v.a)(Object(v.a)({},p),n),{},{gameMode:L}));case 6:r=e.sent,a.push("/seed/".concat(r.data.seed)),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0),s(!1);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(a){return e.apply(this,arguments)}}(),[p,G,L,a]);return l.a.createElement(C.a,{className:t.paper},l.a.createElement("form",{noValidate:!0,onSubmit:V},l.a.createElement("div",{className:t.marginBottom},l.a.createElement(R.a,{name:"seed",value:p.seed,label:"Click to set a seed (defaults to random bytes)",onChange:I,fullWidth:!0})),l.a.createElement("div",{className:t.marginBottom},l.a.createElement(y.a,{variant:"outlined",fullWidth:!0,disabled:!0},l.a.createElement(O.a,null,"Game Mode"),l.a.createElement(j.a,{value:L,onChange:_,label:"Game Mode"},l.a.createElement(A.a,{value:n.BASE_GAME},"Base Game"),l.a.createElement(A.a,{value:n.GOA_MOD},"Garden of Assemblage Mod")))),l.a.createElement(d.a,{align:"center"},"Randomize"),l.a.createElement("div",{className:t.chipsWrapper},l.a.createElement(P,{label:"Stats",name:"stats",checked:G.stats}),l.a.createElement(P,{label:"Abilities",name:"abilities",checked:G.abilities}),l.a.createElement(P,{label:"Cap abilities at Level 50",name:"level50",checked:G.level50,disabled:!G.abilities}),l.a.createElement(P,{label:"Level 1",name:"level1",checked:G.level1}),l.a.createElement(P,{label:"Donald's Abilities",name:"donaldAbilities",checked:G.donaldAbilities}),l.a.createElement(P,{label:"Goofy's Abilities",name:"goofyAbilities",checked:G.goofyAbilities}),l.a.createElement(P,{label:"Form Abilities",name:"formAbilities",checked:G.formAbilities}),l.a.createElement(P,{label:"Growth Abilities",name:"growthAbilities",checked:G.growthAbilities})),l.a.createElement(d.a,{align:"center"},"Worlds"),l.a.createElement("div",{className:t.chipsWrapper},l.a.createElement(P,{label:"Simulated Twilight Town",name:"simulatedTwilightTown",checked:G.simulatedTwilightTown}),l.a.createElement(P,{label:"Twilight Town",name:"twilightTown",checked:G.twilightTown}),l.a.createElement(P,{label:"Hollow Bastion",name:"hollowBastion",checked:G.hollowBastion}),l.a.createElement(P,{label:"Cavern of Remembrance",name:"cavernOfRemembrance",checked:G.cavernOfRemembrance}),l.a.createElement(P,{label:"Beast's Castle",name:"beastsCastle",checked:G.beastsCastle}),l.a.createElement(P,{label:"Olympus Coliseum",name:"olympus",checked:G.olympus}),l.a.createElement(P,{label:"Agrabah",name:"agrabah",checked:G.agrabah}),l.a.createElement(P,{label:"Land of Dragons",name:"landOfDragons",checked:G.landOfDragons}),l.a.createElement(P,{label:"100 Acre Wood",name:"pooh",checked:G.pooh}),l.a.createElement(P,{label:"Atlantica",name:"atlantica",checked:G.atlantica}),l.a.createElement(P,{label:"Pride Lands",name:"prideLands",checked:G.prideLands}),l.a.createElement(P,{label:"Disney Castle",name:"disneyCastle",checked:G.disneyCastle}),l.a.createElement(P,{label:"Timeless River",name:"timelessRiver",checked:G.timelessRiver}),l.a.createElement(P,{label:"Halloween Town",name:"halloweenTown",checked:G.halloweenTown}),l.a.createElement(P,{label:"Port Royal",name:"portRoyal",checked:G.portRoyal}),l.a.createElement(P,{label:"Space Paranoids",name:"spaceParanoids",checked:G.spaceParanoids}),l.a.createElement(P,{label:"The World That Never Was",name:"twtnw",checked:G.twtnw})),l.a.createElement(d.a,{align:"center"},"Include"),l.a.createElement("div",{className:t.chipsWrapper},l.a.createElement(P,{label:"Critical Mode",name:"criticalMode",checked:G.criticalMode}),l.a.createElement(P,{label:"Data Org/Absent Silhouettes",name:"organizationXIII",checked:G.organizationXIII}),l.a.createElement(P,{label:"Olympus Cups",name:"olympusCups",checked:G.olympusCups}),l.a.createElement(P,{label:"Ultima Weapon",name:"ultimaWeapon",checked:G.ultimaWeapon}),l.a.createElement(P,{label:"MAX Growth Abilities",name:"maxGrowthAbilities",checked:G.maxGrowthAbilities}),l.a.createElement(P,{label:"Final Form",name:"finalForm",checked:G.finalForm}),l.a.createElement(P,{label:"Synth Items",name:"synthItems",checked:G.synthItems})),l.a.createElement("div",{className:t.buttonWrapper},l.a.createElement(k.a,{type:"submit",disabled:o,className:t.button,color:"primary",variant:"contained"},o?"Generating seed...":"Generate seed"))))},M=Object(m.a)((function(){return{link:{color:"green",textDecoration:"none"}}})),N=function(){var e=M();return l.a.createElement("header",null,l.a.createElement(s.a,null,l.a.createElement(d.a,{variant:"h4",align:"center"},l.a.createElement(o.b,{to:"/",className:e.link},"KH2FM Randomizer (Beta)")),l.a.createElement(d.a,{variant:"subtitle1",align:"center"},"by"," ",l.a.createElement("a",{href:"https://github.com/afresquet",target:"_blank",rel:"noopener noreferrer",className:e.link},"Alvaro")," ","(",l.a.createElement("a",{href:"http://twitch.valaxor.com",target:"_blank",rel:"noopener noreferrer",className:e.link},"Valaxor"),")")))},W=t(161),L=t(166),F=t(162),I=t(164),_=t(160),z=t(163),P=t(159),V=t(73),X=t.n(V),H=function(e,a){var t=[];return a.growthAbilities&&t.push("\n//Remove High Jump LV2\npatch=1,EE,E0030300,extended,0032EE25\npatch=1,EE,1036E5A4,extended,00000000\npatch=1,EE,1032EE2C,extended,0000805F\npatch=1,EE,1032EE42,extended,00000000\n//Remove High Jump LV3\npatch=1,EE,E0030500,extended,0032EE25\npatch=1,EE,1036E5A6,extended,00000000\npatch=1,EE,1032EE2C,extended,00008060\npatch=1,EE,1032EE42,extended,00000000\n//Remove High Jump MAX\npatch=1,EE,E0020700,extended,0032EE25\npatch=1,EE,1032EE2C,extended,00008061\npatch=1,EE,1032EE42,extended,00000000\n//Remove Quick Run LV2\npatch=1,EE,E0030300,extended,0032EE5D\npatch=1,EE,1036E5AE,extended,00000000\npatch=1,EE,1032EE64,extended,00008063\npatch=1,EE,1032EE74,extended,00000000\n//Remove Quick Run LV3\npatch=1,EE,E0030500,extended,0032EE5D\npatch=1,EE,1036E5B0,extended,00000000\npatch=1,EE,1032EE64,extended,00008064\npatch=1,EE,1032EE74,extended,00000000\n//Remove Quick Run MAX\npatch=1,EE,E0020700,extended,0032EE5D\npatch=1,EE,1032EE64,extended,00008065\npatch=1,EE,1032EE74,extended,00000000\n//Remove Dodge Roll LV2\npatch=1,EE,E0030300,extended,0032EE95\npatch=1,EE,1036E5B8,extended,00000000\npatch=1,EE,1032EE9C,extended,00008235\npatch=1,EE,1032EEC2,extended,00000000\n//Remove Dodge Roll LV3\npatch=1,EE,E0030500,extended,0032EE95\npatch=1,EE,1036E5BA,extended,00000000\npatch=1,EE,1032EE9C,extended,00008236\npatch=1,EE,1032EEC2,extended,00000000\n//Remove Dodge Roll MAX\npatch=1,EE,E0020700,extended,0032EE95\npatch=1,EE,1032EE9C,extended,00008237\npatch=1,EE,1032EEC2,extended,00000000\n//Remove Aerial Dodge LV2\npatch=1,EE,E0030300,extended,0032EECD\npatch=1,EE,1036E5C2,extended,00000000\npatch=1,EE,1032EED4,extended,00008067\npatch=1,EE,1032EEEA,extended,00000000\n//Remove Aerial Dodge LV3\npatch=1,EE,E0030500,extended,0032EECD\npatch=1,EE,1036E5C4,extended,00000000\npatch=1,EE,1032EED4,extended,00008068\npatch=1,EE,1032EEEA,extended,00000000\n//Remove Aerial Dodge MAX\npatch=1,EE,E0020700,extended,0032EECD\npatch=1,EE,1032EED4,extended,00008069\npatch=1,EE,1032EEEA,extended,00000000\n//Remove Glide LV2\npatch=1,EE,E0030300,extended,0032EF05\npatch=1,EE,1036E5CC,extended,00000000\npatch=1,EE,1032EF0C,extended,0000806B\npatch=1,EE,1032EF1E,extended,00000000\n//Remove Glide LV3\npatch=1,EE,E0030500,extended,0032EF05\npatch=1,EE,1036E5CE,extended,00000000\npatch=1,EE,1032EF0C,extended,0000806C\npatch=1,EE,1032EF1E,extended,00000000\n//Remove Glide MAX\npatch=1,EE,E0020700,extended,0032EF05\npatch=1,EE,1032EF0C,extended,0000806D\npatch=1,EE,1032EF1E,extended,00000000\n"),e.reduce((function(e,a){return e+function(e,a){var t=e.padStart(8,"0").toUpperCase(),n=a.padStart(8,"0").toUpperCase();return"patch=1,EE,".concat(t,",extended,").concat(n,"\n")}(a.location.value,a.reward.value)}),t.join("\n"))},J=function(e){var a=e.property,t=e.children;return a?l.a.createElement(d.a,null,t):null},Q=function(e){var a=e.reward,t=e.location;return t.description&&a?l.a.createElement(P.a,null,l.a.createElement(_.a,null,t.description),l.a.createElement(_.a,null,t.type),l.a.createElement(_.a,{colSpan:t.reward.name?1:2},a.name),t.reward.name?l.a.createElement(_.a,null,t.reward.name):null):null},U=Object(m.a)((function(e){var a={margin:e.spacing(3),marginLeft:"auto",marginRight:"auto",padding:e.spacing(3),width:"50%",textAlign:"center"};return Object(L.a)({paper:a,marginBottom:{marginBottom:e.spacing(3)},chipsWrapper:{marginBottom:e.spacing(3),display:"flex",justifyContent:"center",flexWrap:"wrap","& > *":{margin:e.spacing(.5),marginLeft:e.spacing(1.5),marginRight:e.spacing(1.5)}},button:{marginTop:e.spacing(3),width:"75%"},spoilerPaper:Object(v.a)(Object(v.a)({},a),{},{width:"auto"}),loadingContainer:{paddingTop:e.spacing(20),textAlign:"center"}})})),q=function(e){var a=e.match.params.seed,t=U(),c=Object(r.useState)(null),i=Object(w.a)(c,2),o=i[0],s=i[1],m=Object(r.useState)(null),E=Object(w.a)(m,2),p=E[0],h=E[1],u=Object(r.useState)(!1),f=Object(w.a)(u,2),v=f[0],x=f[1],y=Object(r.useState)(!0),O=Object(w.a)(y,2),A=O[0],j=O[1],R=Object(r.useState)(null),D=Object(w.a)(R,2),S=D[0],G=D[1];Object(r.useEffect)((function(){Object(g.a)(b.a.mark((function e(){var t,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,T.a.get("".concat(B,"/seed/").concat(a));case 3:t=e.sent,n=t.data,s(n.configuration),h(n.seed),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),G(e.t0);case 12:return e.prev=12,j(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})))()}),[a]);var M=Object(r.useCallback)(Object(g.a)(b.a.mark((function e(){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,p&&o){e.next=3;break}return e.abrupt("return");case 3:j(!0),"F266B00B.pnach",a=H(p,o),X()(a,"F266B00B.pnach","application/octet-stream"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),G(e.t0);case 12:return e.prev=12,j(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])}))),[p,o]),N=Object(r.useCallback)(Object(g.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:x((function(e){return!e}));case 1:case"end":return e.stop()}}),e)}))),[]);if(A&&!o)return l.a.createElement("div",{className:t.loadingContainer},l.a.createElement(W.a,{size:250}));if(S)return console.error(S),l.a.createElement(d.a,null,"Invalid seed!");if(!o||!p)return null;var L="";return o.gameMode.mode===n.BASE_GAME?L="Base Game":o.gameMode.mode===n.GOA_MOD&&(L=l.a.createElement("a",{href:"https://docs.google.com/document/d/1GYjEnrM_TIk7qyO75clPLYD-_nP5wTR7K6SE-Wn-QCg",target:"_blank",rel:"noopener noreferrer"},"Garden of Assemblage Mod")),l.a.createElement(l.a.Fragment,null,l.a.createElement(C.a,{variant:"outlined",className:t.paper},l.a.createElement("div",{className:t.marginBottom},l.a.createElement(d.a,{variant:"h4"},"Seed: ",o.seed),l.a.createElement(d.a,{variant:"h6"},"Game Mode: ",L)),l.a.createElement(d.a,{variant:"h6"},"Randomize"),l.a.createElement("div",{className:t.chipsWrapper},l.a.createElement(J,{property:o.stats},"Stats"),l.a.createElement(J,{property:o.abilities},"Abilities"),l.a.createElement(J,{property:o.level50},"Cap abilities at Level 50"),l.a.createElement(J,{property:o.level1},"Level 1"),l.a.createElement(J,{property:o.donaldAbilities},"Donald's Abilities"),l.a.createElement(J,{property:o.goofyAbilities},"Goofy's Abilities"),l.a.createElement(J,{property:o.formAbilities},"Form Abilities"),l.a.createElement(J,{property:o.maxGrowthAbilities},"Growth Abilities")),l.a.createElement(d.a,{variant:"h6"},"Worlds"),l.a.createElement("div",{className:t.chipsWrapper},l.a.createElement(J,{property:o.simulatedTwilightTown},"Simulated Twilight Town"),l.a.createElement(J,{property:o.twilightTown},"Twilight Town"),l.a.createElement(J,{property:o.hollowBastion},"Hollow Bastion"),l.a.createElement(J,{property:o.cavernOfRemembrance},"Cavern of Remembrance"),l.a.createElement(J,{property:o.beastsCastle},"Beast's Castle"),l.a.createElement(J,{property:o.olympus},"Olympus"),l.a.createElement(J,{property:o.agrabah},"Agrabah"),l.a.createElement(J,{property:o.landOfDragons},"Land of Dragons"),l.a.createElement(J,{property:o.pooh},"100 Acre Wood"),l.a.createElement(J,{property:o.atlantica},"Atlantica"),l.a.createElement(J,{property:o.prideLands},"Pride Lands"),l.a.createElement(J,{property:o.disneyCastle},"Disney Castle"),l.a.createElement(J,{property:o.timelessRiver},"Timeless River"),l.a.createElement(J,{property:o.halloweenTown},"Halloween Town"),l.a.createElement(J,{property:o.portRoyal},"Port Royal"),l.a.createElement(J,{property:o.spaceParanoids},"Space Paranoids"),l.a.createElement(J,{property:o.twtnw},"The World That Never Was")),l.a.createElement(d.a,{variant:"h6"},"Include"),l.a.createElement("div",{className:t.chipsWrapper},l.a.createElement(J,{property:o.criticalMode},"Critical Mode"),l.a.createElement(J,{property:o.organizationXIII},"Data Org/Absent Silhouettes"),l.a.createElement(J,{property:o.olympusCups},"Olympus Cups"),l.a.createElement(J,{property:o.ultimaWeapon},"Ultima Weapon"),l.a.createElement(J,{property:o.maxGrowthAbilities},"MAX Growth Abilities"),l.a.createElement(J,{property:o.finalForm},"Final Form"),l.a.createElement(J,{property:o.synthItems},"Synth Items")),l.a.createElement(k.a,{onClick:M,color:"primary",variant:"contained",className:t.button},"Download seed"),l.a.createElement(k.a,{onClick:N,color:"primary",variant:"contained",className:t.button},v?"Hide":"Show"," spoiler logs")),v?l.a.createElement(C.a,{className:t.spoilerPaper,variant:"outlined"},l.a.createElement(F.a,{size:"small"},l.a.createElement(z.a,null,l.a.createElement(P.a,null,l.a.createElement(_.a,null,"Location"),l.a.createElement(_.a,null,"Type"),l.a.createElement(_.a,null,"Became"),l.a.createElement(_.a,null,"Original"))),l.a.createElement(I.a,null,p.map((function(e){var a=e.reward,t=e.location;return l.a.createElement(Q,{key:t.value,reward:a,location:t})}))))):null)},K=Object(m.a)((function(e){return{content:{padding:e.spacing(3),flex:"1 0 auto"}}}));var Y=function(){var e=K();return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:e.content},l.a.createElement(N,null),l.a.createElement("main",null,l.a.createElement(s.a,null,l.a.createElement(E.c,null,l.a.createElement(E.a,{path:"/",component:G,exact:!0}),l.a.createElement(E.a,{path:"/seed/:seed",component:q,exact:!0}))))),l.a.createElement(h,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(o.a,{basename:"/"},l.a.createElement(Y,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},84:function(e,a,t){e.exports=t(112)}},[[84,1,2]]]);
//# sourceMappingURL=main.51d15675.chunk.js.map