(this.webpackJsonpTrave=this.webpackJsonpTrave||[]).push([[19],{2138:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return l}));var i=n(2029),c=n(2320),a=n(18),o=n(2319),s=n(15),r=Object(a.a)(i.a)({backgroundColor:"rgb(62, 62, 62)",width:"100%",borderRadius:"18px",boxShadow:"11px 11px 6px -1px rgb(160 160 160 / 20%)"}),l=Object(a.a)(o.a)({"&.MuiTableCell-root":{backgroundColor:"transparent",boxShadow:"none",borderRadius:"20px",color:s.t}});Object(a.a)(o.a)({"&.MuiTableCell-root":{padding:"8px",paddingLeft:"24px"}}),Object(a.a)(c.a)({"&.MuiTableContainer-root":{boxShadow:"none"},"&.MuiTable-root":{borderCollapse:"separate",borderSpacing:"0 10px",border:"transparent"},"&.MuiTable-root th, &.MuiTable-root td":{borderTop:"1px solid black",borderBottom:"1px solid black"}})},2341:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return ue}));var i=n(12),c=n(34),a=n(19),o=n(24),s=n(2),r=n.n(s),l=n(1),d=n(46),j=n(412),b=n(137),x=n(411),u=n(2026),h=n(298),g=n(63),O=n(191),p=n(175),m=n(2030),f=n(2300),v=n.n(f),w=n(2031),S=n(149),y=n(15),z=n(0);function F(){var e=Object(l.useState)(!1),t=Object(o.a)(e,2),n=t[0],i=t[1],c=Object(j.c)((function(e){return e.manager.transactions})),s=Object(l.useState)([{name:"Closed P/L",data:[{x:new Date,y:0}]},{name:"Open P/L",data:[{x:new Date,y:0}]}]),d=Object(o.a)(s,2),b=d[0],u=d[1],f=Object(l.useState)({chart:{type:"area",stacked:!1,height:350,zoom:{type:"x",enabled:!0,autoScaleYaxis:!0},toolbar:{autoSelected:"zoom"},background:"#0a0a0a73"},dataLabels:{enabled:!1},markers:{size:0},fill:{type:"gradient",gradient:{shadeIntensity:1,inverseColors:!1,opacityFrom:.5,opacityTo:0,stops:[0,90,100]}},yaxis:{labels:{formatter:function(e){return"".concat(e.toFixed(3)," ETH")}}},xaxis:{type:"datetime",labels:{formatter:function(e,t,n){return n.dateFormatter(new Date(t),"dd MMM yyyy")}}},tooltip:{shared:!1,y:{formatter:function(e){return"".concat(e," ETH")}}},stroke:{curve:"smooth"},grid:{show:!0,strokeDashArray:5,position:"back",xaxis:{lines:{show:!1}},yaxis:{lines:{show:!0}}},theme:{mode:"dark",palette:"palette1",monochrome:{enabled:!1,color:"#255aee",shadeTo:"light",shadeIntensity:.65}}}),F=Object(o.a)(f,2),k=F[0];F[1];Object(l.useEffect)((function(){C(c)}),[c]);var C=function(){var e=Object(a.a)(r.a.mark((function e(t){var n,c,a,o,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i(!0),n=[],c=[],(a=new Date).setDate(a.getDate()+1),a.setUTCHours(0),a.setUTCMinutes(0),a.setUTCSeconds(0),(o=new Date).setFullYear(o.getFullYear()-1),!((null===t||void 0===t?void 0:t.length)>0)){e.next=29;break}for(t[t.length-1].timeStamp>o.getTime()&&((o=new Date(t[t.length-1].timeStamp)).setUTCHours(23),o.setUTCMinutes(59),o.setUTCSeconds(59));o.getTime()<a.getTime();)n.push({x:new Date(o.getTime()),y:Number(t.filter((function(e){return e.timeStamp<=o.getTime()})).reduce((function(e,t){return e+t.pl}),0).toFixed(3))}),o.setDate(o.getDate()+1);console.log("closed pl",n),u([{name:"Closed P/L",data:n}]),(o=new Date).setFullYear(o.getFullYear()-1),t[t.length-1].timeStamp>o.getTime()&&((o=new Date(t[t.length-1].timeStamp)).setUTCHours(23),o.setUTCMinutes(59),o.setUTCSeconds(59));case 18:if(!(o.getTime()<a.getTime())){e.next=27;break}return e.next=21,Object(S.n)(t.filter((function(e){return e.timeStamp<=o.getTime()})),o);case 21:s=e.sent,c.push({x:new Date(o.getTime()),y:Number(s.toFixed(3))}),console.log({x:new Date(o.getTime()),y:Number(s.toFixed(3))}),o.setDate(o.getDate()+1),e.next=18;break;case 27:console.log("open pl",c),u([{name:"Closed P/L",data:n},{name:"Open P/L",data:c}]);case 29:i(!1);case 30:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(z.jsxs)(O.a,{direction:"column",spacing:2,sx:{my:5},children:[Object(z.jsxs)(O.a,{direction:"row",spacing:2,children:[Object(z.jsxs)(x.a,{children:[Object(z.jsx)(p.a,{fontSize:y.z,children:"PNL Overview"}),Object(z.jsx)(p.a,{fontSize:y.w,color:y.o,children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]}),n&&Object(z.jsxs)(O.a,{direction:"row",justifyContent:"center",alignItems:"center",children:[Object(z.jsx)(w.a,{}),Object(z.jsx)(p.a,{variant:"body1",color:"white",sx:{marginLeft:"15px"},children:"Loading now, please wait... "})]})]}),!n&&Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)(x.a,{children:Object(z.jsxs)(h.a,{container:!0,columns:5,alignItems:"center",children:[Object(z.jsx)(h.a,{item:!0,xs:5,md:4,children:Object(z.jsxs)(h.a,{container:!0,columns:8,spacing:1,children:[Object(z.jsx)(h.a,{item:!0,xs:8,md:1,children:Object(z.jsx)(O.a,{bgcolor:"rgba(35, 34, 56, 0.55)",p:1.5,borderRadius:1,direction:"row",alignItems:"center",justifyContent:"center",children:Object(z.jsx)(p.a,{fontSize:y.w,textAlign:"center",color:y.q,children:"Open PNL"})})}),Object(z.jsx)(h.a,{item:!0,xs:8,md:1,children:Object(z.jsxs)(O.a,{bgcolor:"rgba(35, 34, 56, 0.55)",p:1.5,borderRadius:1,direction:"row",alignItems:"center",justifyContent:"center",spacing:1,children:[Object(z.jsx)(p.a,{component:"span",fontSize:y.w,textAlign:"center",color:y.q,children:"+1.2789"}),Object(z.jsx)(m.a,{sx:{fontSize:y.w,color:y.q},children:Object(z.jsx)(g.a,{icon:"bi:caret-up-fill"})})]})}),Object(z.jsx)(h.a,{item:!0,xs:8,md:1,children:Object(z.jsx)(O.a,{bgcolor:"rgba(35, 34, 56, 0.55)",py:1.5,borderRadius:1,direction:"row",alignItems:"center",justifyContent:"center",children:Object(z.jsx)(p.a,{fontSize:y.w,textAlign:"center",color:y.o,children:"Closed PNL"})})}),Object(z.jsx)(h.a,{item:!0,xs:8,md:1,children:Object(z.jsxs)(O.a,{bgcolor:"rgba(35, 34, 56, 0.55)",p:1.5,borderRadius:1,direction:"row",alignItems:"center",justifyContent:"center",spacing:1,children:[Object(z.jsx)(p.a,{component:"span",fontSize:y.w,textAlign:"center",color:y.h,children:"-1.2789"}),Object(z.jsx)(m.a,{sx:{fontSize:y.w,color:y.h},children:Object(z.jsx)(g.a,{icon:"bi:caret-down-fill"})})]})})]})}),Object(z.jsx)(h.a,{item:!0,xs:5,md:1,children:Object(z.jsxs)(O.a,{bgcolor:"rgba(35, 34, 56, 0.55)",p:1.5,borderRadius:1,direction:"row",alignItems:"center",justifyContent:"space-between",children:[Object(z.jsx)(p.a,{fontSize:y.w,children:"Thursday, 27 April 2022"}),Object(z.jsx)(m.a,{sx:{fontSize:y.w},children:Object(z.jsx)(g.a,{icon:"ant-design:check-circle-outlined"})})]})})]})}),Object(z.jsx)(v.a,{options:k,series:b,type:"area",height:350})]})]})}var k=n(54),C=function(e){var t=e.title,n=e.percent,i=e.icon,c=e.value;return Object(z.jsxs)(O.a,{direction:"column",spacing:1,children:[Object(z.jsx)(p.a,{variant:"body2",children:t}),Object(z.jsxs)(O.a,{direction:"row",spacing:1,children:[Object(z.jsx)(O.a,{direction:"row",alignItems:"center",sx:{border:"1px solid grey",background:"linear-gradient(97.21deg, rgba(255, 255, 255, 0.15) 10.89%, rgba(145, 183, 255, 0.15) 87.44%)",borderRadius:"10.8521px",p:1,width:.3},children:Object(z.jsx)(p.a,{variant:"body2",children:"".concat(n,"%")})}),Object(z.jsxs)(O.a,{direction:"row",alignItems:"center",spacing:2,sx:{border:"1px solid grey",background:"linear-gradient(97.21deg, rgba(255, 255, 255, 0.15) 10.89%, rgba(145, 183, 255, 0.15) 87.44%)",borderRadius:"10.8521px",p:1,width:.7},children:[Object(z.jsx)(k.d,{width:32,height:32,borderRadius:"50%",justifyContent:"center",alignItems:"center",children:Object(z.jsx)(m.a,{sx:{fontSize:y.w},children:Object(z.jsx)(g.a,{icon:i})})}),Object(z.jsx)(p.a,{variant:"body2",children:"".concat(c," ETH")})]})]})]})},T=function(e){var t=e.title,n=e.value,i=e.color,c=e.icon,a=e.subtitle;return Object(z.jsx)(k.b,{direction:"row",justifyContent:"space-between",borderRadius:1,py:2,px:2,alignItems:"center",height:"100%",children:Object(z.jsxs)(h.a,{container:!0,spacing:3,alignItems:"center",children:[Object(z.jsx)(h.a,{item:!0,xs:12,md:4,children:Object(z.jsx)(O.a,{direction:"row",justifyContent:"center",children:Object(z.jsx)(k.d,{width:60,height:60,borderRadius:"50%",justifyContent:"center",alignItems:"center",children:Object(z.jsx)(m.a,{sx:{fontSize:y.z},children:Object(z.jsx)(g.a,{icon:c})})})})}),Object(z.jsx)(h.a,{item:!0,xs:12,md:8,children:Object(z.jsxs)(O.a,{spacing:.5,children:[Object(z.jsxs)(O.a,{direction:"row",justifyContent:"space-between",alignItems:"center",children:[Object(z.jsx)(p.a,{component:"span",fontSize:y.w,color:y.o,children:t}),Object(z.jsx)(m.a,{sx:{fontSize:y.A,color:y.o},children:Object(z.jsx)(g.a,{icon:"bxs:info-circle"})})]}),Object(z.jsxs)(O.a,{direction:"row",spacing:1,children:[Object(z.jsx)(m.a,{sx:{fontSize:y.z},children:Object(z.jsx)(g.a,{icon:"logos:ethereum"})}),Object(z.jsxs)(x.a,{children:[Object(z.jsx)(p.a,{fontSize:y.A,color:i,fontWeight:y.B,children:n}),a&&Object(z.jsx)(p.a,{component:"span",fontSize:y.x-3,color:y.o,children:a})]}),i&&Object(z.jsx)(x.a,{component:"img",src:i===y.h?"assets/images/tiny-graph-red.svg":"assets/images/tiny-graph-green.svg",alt:"",mt:1,flexGrow:1})]})]})})]})})};function P(e){var t=e.selectedWallet,n=Object(j.c)((function(e){return e.manager.stats})),i=Object(l.useState)(!0),c=Object(o.a)(i,2),a=c[0];c[1];return Object(z.jsxs)(O.a,{spacing:6,children:[Object(z.jsx)(x.a,{children:Object(z.jsxs)(h.a,{container:!0,spacing:3,children:[Object(z.jsx)(h.a,{item:!0,xs:12,md:5,children:Object(z.jsxs)(k.b,{p:4,spacing:3,borderRadius:3,children:[Object(z.jsxs)(O.a,{direction:"row",alignItems:"center",spacing:2,children:[Object(z.jsx)(m.a,{sx:{fontSize:y.A},children:Object(z.jsx)(g.a,{icon:"clarity:wallet-solid"})}),Object(z.jsx)(p.a,{fontSize:y.A,color:y.o,children:"Available Balance"})]}),Object(z.jsxs)(O.a,{direction:"row",alignItems:"center",spacing:1,children:[Object(z.jsx)(p.a,{fontSize:y.A,fontWeight:y.C,children:"".concat((null===n||void 0===n?void 0:n.balance)||0," ETH")}),Object(z.jsx)(m.a,{sx:{fontSize:y.A},children:Object(z.jsx)(g.a,{icon:"logos:ethereum"})})]}),Object(z.jsx)(p.a,{fontSize:y.w,color:y.o,children:"320 items bought."})]})}),Object(z.jsx)(h.a,{item:!0,xs:12,md:7,children:t&&Object(z.jsxs)(O.a,{spacing:3,children:[Object(z.jsxs)(O.a,{direction:"row",alignItems:"center",spacing:2,children:[Object(z.jsx)(x.a,{component:"img",src:"assets/images/wallet.png",alt:"",width:50,borderRadius:"50%"}),Object(z.jsxs)(x.a,{children:[Object(z.jsx)(p.a,{color:y.o,fontSize:y.x,children:"ADDRESS:"}),Object(z.jsx)(p.a,{color:y.t,fontSize:y.w,children:Object(S.t)(t)})]})]}),Object(z.jsx)(x.a,{children:Object(z.jsxs)(h.a,{container:!0,spacing:2,children:[Object(z.jsx)(h.a,{item:!0,xs:12,md:3,children:Object(z.jsxs)(O.a,{borderRadius:1,bgcolor:"rgb(98, 246, 255, 0.1)",p:1.5,direction:"row",alignItems:"center",justifyContent:"space-between",children:[Object(z.jsx)(x.a,{component:"img",src:"assets/images/logo.png",alt:""}),Object(z.jsx)(p.a,{component:"span",fontSize:y.w,children:"NFT Degen"})]})}),Object(z.jsx)(h.a,{item:!0,xs:12,md:3,children:Object(z.jsxs)(O.a,{borderRadius:1,bgcolor:"rgb(98, 246, 255, 0.1)",p:1.5,direction:"row",alignItems:"center",justifyContent:"space-between",children:[Object(z.jsx)(m.a,{sx:{color:y.k,fontSize:y.z},children:Object(z.jsx)(g.a,{icon:"bi:arrow-up-square-fill"})}),Object(z.jsx)(p.a,{component:"span",fontSize:y.w,children:"Top Trader"})]})})]})}),Object(z.jsx)(x.a,{children:Object(z.jsxs)(h.a,{container:!0,children:[Object(z.jsx)(h.a,{item:!0,xs:12,md:3,children:Object(z.jsxs)(O.a,{spacing:1,children:[Object(z.jsx)(p.a,{component:"span",fontSize:y.w,fontWeight:y.B,children:"NFT's"}),Object(z.jsx)(p.a,{component:"span",fontSize:y.w,fontWeight:y.B,color:y.o,children:"38"})]})}),Object(z.jsx)(h.a,{item:!0,xs:12,md:3,children:Object(z.jsxs)(O.a,{spacing:1,children:[Object(z.jsx)(p.a,{component:"span",fontSize:y.w,fontWeight:y.B,children:"Collections"}),Object(z.jsx)(p.a,{component:"span",fontSize:y.w,fontWeight:y.B,color:y.o,children:"7"})]})}),Object(z.jsx)(h.a,{item:!0,xs:12,md:3,children:Object(z.jsxs)(O.a,{spacing:1,children:[Object(z.jsx)(p.a,{component:"span",fontSize:y.w,fontWeight:y.B,children:"Top Holdings"}),Object(z.jsx)(x.a,{component:"img",src:"assets/images/wallet.png",alt:"",width:30,borderRadius:"50%"})]})})]})})]})})]})}),Object(z.jsx)(x.a,{children:Object(z.jsxs)(h.a,{container:!0,spacing:2,children:[Object(z.jsx)(h.a,{item:!0,xs:12,md:4,children:Object(z.jsx)(T,{title:"Closed PNL",value:"".concat(a?(null===n||void 0===n?void 0:n.closePL)||0:(null===n||void 0===n?void 0:n.closePL_noFee)||0," ETH"),icon:"icon-park-solid:lock-one",color:a?((null===n||void 0===n?void 0:n.closePL)||0)>=0?y.q:y.h:((null===n||void 0===n?void 0:n.closePL_noFee)||0)>=0?y.q:y.h})}),Object(z.jsx)(h.a,{item:!0,xs:12,md:4,children:Object(z.jsx)(T,{title:"Open PNL",icon:"icon-park-solid:unlock-one",value:"".concat(a?(null===n||void 0===n?void 0:n.openPL)||0:(null===n||void 0===n?void 0:n.openPL_noFee)||0," ETH"),color:a?((null===n||void 0===n?void 0:n.openPL)||0)>=0?y.q:y.h:((null===n||void 0===n?void 0:n.openPL_noFee)||0)>=0?y.q:y.h})}),Object(z.jsx)(h.a,{item:!0,xs:12,md:4,children:Object(z.jsx)(T,{title:"Total Holding Value",icon:"icon-park-solid:hold-seeds",value:"".concat((null===n||void 0===n?void 0:n.totalHoldingValue)||0," ETH")})})]})}),Object(z.jsx)(F,{}),Object(z.jsx)(x.a,{children:Object(z.jsxs)(h.a,{container:!0,spacing:2,children:[Object(z.jsx)(h.a,{item:!0,xs:12,md:4,children:Object(z.jsx)(T,{title:"Total Buy",value:"".concat((null===n||void 0===n?void 0:n.totalBuy)||0," ETH"),subTitle:"".concat((null===n||void 0===n?void 0:n.buyCount)||0," Items bought"),icon:"clarity:shopping-cart-solid"})}),Object(z.jsx)(h.a,{item:!0,xs:12,md:4,children:Object(z.jsx)(T,{title:"Total Sell",icon:"fa-solid:hand-holding-usd",value:"".concat((null===n||void 0===n?void 0:n.totalSell)||0," ETH"),subTitle:"".concat((null===n||void 0===n?void 0:n.sellCount)||0," Items sold")})}),Object(z.jsx)(h.a,{item:!0,xs:12,md:4,children:Object(z.jsx)(T,{title:"Total Mint",icon:"emojione-monotone:pick",value:"".concat((null===n||void 0===n?void 0:n.totalMint)||0," ETH"),subTitle:"".concat((null===n||void 0===n?void 0:n.mintCount)||0," Items minted")})})]})}),Object(z.jsxs)(O.a,{direction:"column",sx:{border:"1px solid grey",background:"linear-gradient(97.21deg, rgba(255, 255, 255, 0.15) 10.89%, rgba(145, 183, 255, 0.15) 87.44%)",borderRadius:"10.8521px",p:2,my:3},children:[Object(z.jsxs)(O.a,{direction:"row",justifyContent:"space-between",children:[Object(z.jsxs)(O.a,{direction:"row",alignItems:"center",spacing:3,children:[Object(z.jsx)(k.d,{width:50,height:50,borderRadius:"50%",justifyContent:"center",alignItems:"center",children:Object(z.jsx)(m.a,{sx:{fontSize:y.z},children:Object(z.jsx)(g.a,{icon:"akar-icons:ribbon"})})}),Object(z.jsx)(p.a,{variant:"body1",color:"text.secondary",children:"Total Fees"}),Object(z.jsxs)(O.a,{direction:"row",spacing:2,alignItems:"center",children:[Object(z.jsx)(m.a,{sx:{fontSize:y.z},children:Object(z.jsx)(g.a,{icon:"logos:ethereum"})}),Object(z.jsx)(p.a,{variant:"h6",children:"".concat(null!==n&&void 0!==n&&n.totalFee?n.totalFee.total:0," ETH")})]})]}),Object(z.jsx)(O.a,{children:Object(z.jsx)(x.a,{component:"img",src:"/static/icons/info.svg",width:"22px",height:"22px"})})]}),Object(z.jsxs)(h.a,{container:!0,spacing:3,children:[Object(z.jsx)(h.a,{item:!0,xs:12,sm:6,md:3,children:Object(z.jsx)(C,{title:"Gas Fee",percent:null!==n&&void 0!==n&&n.totalFee?(n.totalFee.gas/n.totalFee.total*100).toFixed(0):0,icon:"bxs:gas-pump",value:null!==n&&void 0!==n&&n.totalFee?n.totalFee.gas:0})}),Object(z.jsx)(h.a,{item:!0,xs:12,sm:6,md:3,children:Object(z.jsx)(C,{title:"Marketplace Fee",percent:null!==n&&void 0!==n&&n.totalFee?(n.totalFee.market/n.totalFee.total*100).toFixed(0):0,icon:"healthicons:market-stall",value:null!==n&&void 0!==n&&n.totalFee?n.totalFee.market:0})}),Object(z.jsx)(h.a,{item:!0,xs:12,sm:6,md:3,children:Object(z.jsx)(C,{title:"Creator Fee",percent:null!==n&&void 0!==n&&n.totalFee?(n.totalFee.creator/n.totalFee.total*100).toFixed(0):0,icon:"heroicons-solid:light-bulb",value:null!==n&&void 0!==n&&n.totalFee?n.totalFee.creator:0})}),Object(z.jsx)(h.a,{item:!0,xs:12,sm:6,md:3,children:Object(z.jsx)(C,{title:"Listing Fee",percent:null!==n&&void 0!==n&&n.totalFee?(n.totalFee.listing/n.totalFee.total*100).toFixed(0):0,icon:"fluent:task-list-square-ltr-24-regular",value:null!==n&&void 0!==n&&n.totalFee?n.totalFee.listing:0})})]})]})]})}var I=n(414),L=n.n(I),W=n(2029),A=n(2347),R=n(2322),E=n(2348),H=(n(638),n(128),n(2321),n(2320),n(2027)),D=(n(2168),n(2170),n(2169),n(2167),n(2109));n(2138);function B(e,t,n){return"estimatePL_percent"===n?t.estimatePL<e.estimatePL?-1:t.estimate>e.estimate?1:0:t[n]<e[n]?-1:t[n]>e[n]?1:0}function M(e,t){return"desc"===e?function(e,n){return B(e,n,t)}:function(e,n){return-B(e,n,t)}}function N(e,t){var n=null===e||void 0===e?void 0:e.map((function(e,t){return[e,t]}));return n.sort((function(e,n){var i=t(e[0],n[0]);return 0!==i?i:e[1]-n[1]})),n.map((function(e){return e[0]}))}function q(e){var t=e.nfts,n=l.useState("desc"),i=Object(o.a)(n,2),c=i[0],a=(i[1],l.useState("price")),s=Object(o.a)(a,2),r=s[0],d=(s[1],l.useState(0)),j=Object(o.a)(d,2),b=j[0],u=j[1],h=l.useState(5),f=Object(o.a)(h,2),v=f[0],w=(f[1],function(e){u(e)});b>0&&Math.max(0,(1+b)*v-(null===t||void 0===t?void 0:t.length));return Object(z.jsxs)(O.a,{mt:2,width:"100%",spacing:3,children:[Object(z.jsxs)(O.a,{direction:"row",alignItems:"center",justifyContent:"space-between",py:2,px:2,borderBottom:"1px solid ".concat(y.n),borderTop:"1px solid ".concat(y.n),children:[Object(z.jsx)(x.a,{width:"25%",children:Object(z.jsx)(p.a,{fontWeight:y.B,fontSize:y.w,children:"Collections"})}),Object(z.jsx)(x.a,{width:"10%",children:Object(z.jsx)(p.a,{fontWeight:y.B,textAlign:"center",fontSize:y.w,children:"Last Buy"})}),Object(z.jsx)(x.a,{width:"10%",children:Object(z.jsxs)(p.a,{fontWeight:y.B,textAlign:"center",fontSize:y.w,children:["Previous",Object(z.jsx)("br",{}),"Avrg.Price"]})}),Object(z.jsx)(x.a,{width:"20%",children:Object(z.jsxs)(p.a,{fontWeight:y.B,textAlign:"center",fontSize:y.w,children:["Current",Object(z.jsx)("br",{}),"Avrg.Price"]})}),Object(z.jsx)(x.a,{width:"20%",children:Object(z.jsxs)(p.a,{fontWeight:y.B,textAlign:"center",fontSize:y.w,children:["Estimated",Object(z.jsx)("br",{}),"Value"]})})]}),(null===t||void 0===t?void 0:t.length)&&N(t,M(c,r)).slice(b*v,b*v+v).map((function(e,t){return Object(z.jsxs)(O.a,{direction:"row",alignItems:"center",justifyContent:"space-between",p:2,bgcolor:y.n,borderRadius:1,children:[Object(z.jsxs)(O.a,{width:"25%",direction:"row",spacing:2,alignItems:"center",children:[Object(z.jsx)(D.a,{src:e.image,sx:{border:"2px solid ".concat(e.estimatePL>=0?"#5CDD90":"#DD5C5C"),width:60,height:60}}),Object(z.jsx)(p.a,{fontSize:y.w,color:y.o,children:e.name})]}),Object(z.jsxs)(O.a,{width:"10%",direction:"row",justifyContent:"center",spacing:1,children:[Object(z.jsx)(m.a,{sx:{fontSize:y.A},children:Object(z.jsx)(g.a,{icon:"logos:ethereum"})}),Object(z.jsx)(p.a,{fontSize:y.w,color:y.o,children:"".concat(e.price," ETH")})]}),Object(z.jsxs)(O.a,{width:"10%",direction:"row",justifyContent:"center",spacing:1,children:[Object(z.jsx)(m.a,{sx:{fontSize:y.A},children:Object(z.jsx)(g.a,{icon:"logos:ethereum"})}),Object(z.jsx)(p.a,{fontSize:y.w,color:y.o,children:"".concat(e.curAvg," ETH")})]}),Object(z.jsxs)(O.a,{width:"20%",direction:"row",justifyContent:"center",spacing:1,children:[Object(z.jsx)(m.a,{sx:{fontSize:y.A},children:Object(z.jsx)(g.a,{icon:"logos:ethereum"})}),Object(z.jsx)(p.a,{fontSize:y.w,color:y.o,children:"".concat(e.curAvg," ETH")}),Object(z.jsxs)(O.a,{direction:"row",alignItems:"center",spacing:1,color:e.curAvg>=e.prevAvg?y.q:y.h,children:[Object(z.jsx)(p.a,{fontSize:y.w-2,children:"(".concat(((e.curAvg-e.prevAvg)/e.prevAvg*100).toFixed(2),"%)")}),Object(z.jsx)(m.a,{sx:{fontSize:y.A},children:Object(z.jsx)(g.a,{icon:e.curAvg>=e.prevAvg?"bi:caret-up-fill":"bi:caret-down-fill"})})]})]}),Object(z.jsxs)(O.a,{width:"20%",direction:"row",justifyContent:"center",spacing:1,children:[Object(z.jsx)(m.a,{sx:{fontSize:y.A},children:Object(z.jsx)(g.a,{icon:"logos:ethereum"})}),Object(z.jsx)(p.a,{fontSize:y.w,color:y.o,children:"".concat(e.estimateValue," ETH")}),Object(z.jsxs)(O.a,{direction:"row",alignItems:"center",spacing:1,color:e.estimateValue>=e.price?y.q:y.h,children:[Object(z.jsx)(p.a,{fontSize:y.w-2,children:"(".concat(((e.estimateValue-e.price)/e.price*100).toFixed(2),"%)")}),Object(z.jsx)(m.a,{sx:{fontSize:y.A},children:Object(z.jsx)(g.a,{icon:e.estimateValue>=e.price?"bi:caret-up-fill":"bi:caret-down-fill"})})]})]})]},t)})),(null===t||void 0===t?void 0:t.length)>0&&Object(z.jsx)(O.a,{direction:"row",justifyContent:"end",children:Object(z.jsxs)(O.a,{width:100,direction:"row",alignItems:"center",justifyContent:"space-between",bgcolor:y.n,p:1,borderRadius:1,children:[Object(z.jsx)(H.a,{sx:{fontSize:y.w,color:y.o},onClick:function(){return w(b-1)},disabled:t.slice((b-1)*v,(b-1)*v+v).length<1,children:Object(z.jsx)(g.a,{icon:"akar-icons:chevron-left"})}),Object(z.jsx)(p.a,{component:"span",fontSize:y.w,children:b+1}),Object(z.jsx)(H.a,{sx:{fontSize:y.w,color:y.o},onClick:function(){return w(b+1)},disabled:t.slice((b+1)*v,(b+1)*v+v).length<1,children:Object(z.jsx)(g.a,{icon:"akar-icons:chevron-right"})})]})})]})}var _=n(18),V=n(2302),U=n.n(V),Y=n(94),G=["arrowLine","onNext","onPrevious"],J={width:30,height:30},K=Object(_.a)(x.a)((function(e){e.theme;return{top:0,bottom:0,zIndex:9,height:48,width:"calc(100% + 30px)",transform:"translate(-15px, 20px)",margin:"auto",display:"flex",position:"absolute",justifyContent:"space-between"}})),Q=Object(_.a)(H.a)({width:48,height:48,display:"flex",cursor:"pointer",alignItems:"center",justifyContent:"center",color:y.p,backgroundImage:"linear-gradient(to left, ".concat(y.l,", ").concat(y.m,")"),borderRadius:"50%",boxShadow:"0px 2px 28px rgba(0, 0, 0, 0.27)","&:hover":{opacity:.5}});function X(e){e.arrowLine;var t=e.onNext,n=e.onPrevious,c=Object(Y.a)(e,G);return Object(z.jsxs)(K,Object(i.a)(Object(i.a)({},c),{},{children:[Object(z.jsx)(Q,{size:"small",onClick:n,children:Object(z.jsx)(g.a,Object(i.a)({icon:"eva:arrow-ios-back-fill"},J))}),Object(z.jsx)(Q,{size:"small",onClick:t,children:Object(z.jsx)(g.a,Object(i.a)({icon:"eva:arrow-ios-forward-fill"},J))})]}))}var Z=Object(_.a)("div")((function(e){e.theme;return{position:"relative"}}));function $(e){var t=e.data,n=e.slideSettings,c=e.carouselItemComponent,a=Object(l.useRef)();return Object(z.jsxs)(Z,{children:[Object(z.jsx)(U.a,Object(i.a)(Object(i.a)({ref:a},n),{},{children:t.map((function(e,t){return Object(l.createElement)(c,{key:t,dataItem:e})}))})),Object(z.jsx)(X,{onNext:function(){a.current.slickNext()},onPrevious:function(){a.current.slickPrev()}})]})}new L.a("https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161");var ee={dots:!1,arrows:!1,infinite:!0,speed:500,slidesToShow:3,slidesToScroll:1,initialSlide:0,autoplay:!0,autoplaySpeed:9e3,responsive:[{breakpoint:1024,settings:{slidesToShow:3}},{breakpoint:960,settings:{slidesToShow:2}},{breakpoint:480,settings:{slidesToShow:1,centerPadding:"0"}}]},te=function(e){var t,n,i,c=e.stats;return Object(z.jsxs)(O.a,{direction:"row",justifyContent:"center",alignItems:"center",spacing:1,children:[Object(z.jsx)(m.a,{children:Object(z.jsx)(g.a,{icon:"logos:ethereum"})}),Object(z.jsxs)(p.a,{fontSize:y.A,fontWeight:y.B,color:(null===c||void 0===c||null===(t=c.biggestFlip)||void 0===t?void 0:t.value)>=0?y.q:y.h,children:[(null===c||void 0===c||null===(n=c.biggestFlip)||void 0===n?void 0:n.value)>=0?"+":"-",null===c||void 0===c||null===(i=c.biggestFlip)||void 0===i?void 0:i.value]})]})},ne=function(e){var t,n=e.stats;return Object(z.jsx)(O.a,{direction:"row",justifyContent:"center",alignItems:"center",spacing:1,children:Object(z.jsx)(p.a,{fontSize:y.A,fontWeight:y.B,children:"Rank #".concat(null===n||void 0===n||null===(t=n.topRank)||void 0===t?void 0:t.rank)})})},ie=function(e){var t,n,i,c=e.stats;return Object(z.jsxs)(O.a,{direction:"row",justifyContent:"center",alignItems:"center",spacing:1,children:[Object(z.jsx)(m.a,{children:Object(z.jsx)(g.a,{icon:"logos:ethereum"})}),Object(z.jsxs)(p.a,{fontSize:y.A,fontWeight:y.B,color:(null===c||void 0===c||null===(t=c.biggestFlop)||void 0===t?void 0:t.value)>=0?y.q:y.h,children:[(null===c||void 0===c||null===(n=c.biggestFlop)||void 0===n?void 0:n.value)>=0?"+":"-",null===c||void 0===c||null===(i=c.biggestFlop)||void 0===i?void 0:i.value]})]})},ce=function(e){var t=e.dataItem;return Object(z.jsxs)(W.a,{sx:{height:"99%",mx:1,bgcolor:y.n},children:[Object(z.jsx)(A.a,{title:t.header,titleTypographyProps:{fontSize:y.A,textAlign:"center"}}),Object(z.jsxs)(R.a,{children:[Object(z.jsx)(x.a,{p:2,children:Object(z.jsx)(E.a,{component:"img",src:t.image?"assets/images/nft-rainbow.png":"/static/empty.png",height:250,alt:""})}),Object(z.jsx)(x.a,{height:2,width:"100%",bgcolor:y.p,mt:2,mb:4}),Object(l.createElement)(t.content,{stats:t.stats})]})]})};function ae(){var e,t,n,i=Object(j.c)((function(e){return e.manager.nfts})),c=Object(j.c)((function(e){return e.manager.stats}));return Object(z.jsxs)(x.a,{children:[Object(z.jsx)(q,{nfts:i}),c&&Object(z.jsx)(x.a,{mt:8,children:Object(z.jsx)($,{slideSettings:ee,carouselItemComponent:ce,data:[{header:"Biggest Flip",image:null===c||void 0===c||null===(e=c.biggestFlip)||void 0===e?void 0:e.image,content:te,stats:c},{header:"Most Rare",image:null===c||void 0===c||null===(t=c.topRank)||void 0===t?void 0:t.image,content:ne,stats:c},{header:"Biggest Flop",image:null===c||void 0===c||null===(n=c.biggestFlop)||void 0===n?void 0:n.image,content:ie,stats:c}]})})]})}n(2117),n(2195),n(2194);new L.a("https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161");var oe=n(461),se=n(474);function re(e){var t=e.setWallet,n=e.addWallet,i=e.keyPress;return Object(z.jsx)(x.a,{py:10,px:5,borderRadius:2,bgcolor:y.u,border:"2px solid ".concat(y.n),sx:{backdropFilter:y.b},children:Object(z.jsxs)(h.a,{container:!0,alignItems:"stretch",spacing:2,children:[Object(z.jsx)(h.a,{item:!0,xs:10,md:10,children:Object(z.jsx)(k.e,{placeholder:"Put your wallet address here",onChange:function(e){return t(e.target.value)},onKeyDown:i,fullWidth:!0})}),Object(z.jsx)(h.a,{item:!0,xs:2,md:2,children:Object(z.jsx)(k.c,{onClick:n,sx:{height:"100%"},fullWidth:!0,children:"Analyse"})})]})})}function le(){return Object(z.jsxs)(O.a,{direction:"row",justifyContent:"center",alignItems:"center",children:[Object(z.jsx)(w.a,{}),Object(z.jsx)(p.a,{variant:"body1",color:"white",sx:{marginLeft:"15px"},children:"Analysing now, please wait..."})]})}function de(e){var t=e.loading,n=e.selectedWallet,i=e.wallets,c=e.setWallet,a=e.addWallet,o=e.keyPress;return Object(z.jsxs)(z.Fragment,{children:[Object(z.jsxs)(O.a,{spacing:3,children:[Object(z.jsxs)(O.a,{direction:"row",alignItems:"center",spacing:3,children:[Object(z.jsx)(m.a,{sx:{color:y.k,fontSize:y.z},children:Object(z.jsx)(g.a,{icon:y.G})}),Object(z.jsx)(p.a,{fontSize:y.z,children:"Portfolio Tracker"})]}),Object(z.jsx)(p.a,{fontSize:y.w,color:y.o,children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]}),t?Object(z.jsx)(le,{}):i.length>0?Object(z.jsx)(P,{selectedWallet:n}):Object(z.jsx)(re,{setWallet:c,addWallet:a,keyPress:o})]})}function je(e){var t=e.loading,n=e.wallets,i=e.setWallet,c=e.addWallet,a=e.keyPress;return Object(z.jsxs)(z.Fragment,{children:[Object(z.jsxs)(O.a,{spacing:3,children:[Object(z.jsxs)(O.a,{direction:"row",alignItems:"center",spacing:3,children:[Object(z.jsx)(m.a,{sx:{color:y.k,fontSize:y.z},children:Object(z.jsx)(g.a,{icon:y.E})}),Object(z.jsx)(p.a,{fontSize:y.z,children:"Holdings"})]}),Object(z.jsx)(p.a,{fontSize:y.w,color:y.o,children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]}),t?Object(z.jsx)(le,{}):n.length>0?Object(z.jsx)(ae,{}):Object(z.jsx)(re,{setWallet:i,addWallet:c,keyPress:a})]})}function be(e){var t=e.loading,n=e.wallets,i=e.setWallet,c=e.addWallet,a=e.keyPress;return Object(z.jsxs)(z.Fragment,{children:[Object(z.jsxs)(O.a,{spacing:3,children:[Object(z.jsxs)(O.a,{direction:"row",alignItems:"center",spacing:3,children:[Object(z.jsx)(m.a,{sx:{color:y.k,fontSize:y.z},children:Object(z.jsx)(g.a,{icon:y.H})}),Object(z.jsx)(p.a,{fontSize:y.z,children:"Transactions"})]}),Object(z.jsx)(p.a,{fontSize:y.w,color:y.o,children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]}),t?Object(z.jsx)(le,{}):n.length>0?Object(z.jsx)(ae,{}):Object(z.jsx)(re,{setWallet:i,addWallet:c,keyPress:a})]})}var xe=[{name:"Portfolio Tracker",icon:"clarity:wallet-solid",value:"portfolio-tracker"},{name:"Holdings",icon:"fa-solid:hand-holding-medical",value:"holdings"},{name:"Transactions",icon:"fa6-solid:clock-rotate-left",value:"transactions"}];function ue(){var e=Object(j.b)(),t=Object(d.g)(),n=t.tab,s=t.address,g=Object(l.useState)([]),O=Object(o.a)(g,2),p=O[0],m=O[1],f=Object(l.useState)([]),v=Object(o.a)(f,2),w=v[0],y=v[1],F=Object(l.useState)(!1),k=Object(o.a)(F,2),C=k[0],T=k[1],P=Object(l.useState)("overview"),I=Object(o.a)(P,2),L=(I[0],I[1],Object(l.useState)("")),W=Object(o.a)(L,2),A=W[0],R=W[1],E=Object(l.useState)(""),H=Object(o.a)(E,2),D=H[0],B=H[1];Object(l.useEffect)((function(){M()}),[s]);var M=function(){var e=Object(a.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(S.b)(s);case 2:"invalid"===(t=e.sent)?b.NotificationManager.error("Please input valid address"):"account"===t&&(m([s]),N([s]));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),N=function(){var t=Object(a.a)(r.a.mark((function t(n){var a,o,s,l,d,j,b,x;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:T(!0),console.log(n),a=[],o={wallet:"",ens:"",balance:0,totalBuy:0,totalSell:0,totalMint:0,totalFee:{total:0,gas:0,creator:0,market:0,listing:0},closePL:0,closePL_noFee:0,openPL:0,openPL_noFee:0,totalHoldingValue:0,totalEstimatedPL:0,buyCount:0,sellCount:0,mintCount:0},s=[],l=0;case 4:if(!(l<n.length)){t.next=49;break}return d=n[l],t.next=8,Object(S.m)(d);case 8:return j=t.sent,a=[].concat(Object(c.a)(a),Object(c.a)(j.nfts)),console.log("nfts",d,a),e(Object(oe.a)(a)),t.next=14,Object(S.s)(d);case 14:return b=t.sent,console.log("transactions",d,b),o.balance+=b.stats.balance,o.totalBuy+=b.stats.totalBuy,o.totalSell+=b.stats.totalSell,o.totalMint+=b.stats.totalMint,o.totalFee.total+=b.stats.totalFee.total,o.totalFee.gas+=b.stats.totalFee.gas,o.totalFee.creator+=b.stats.totalFee.creator,o.totalFee.market+=b.stats.totalFee.market,o.totalFee.listing+=b.stats.totalFee.listing,o.closePL+=b.stats.closePL,o.closePL_noFee+=b.stats.closePL_noFee,o.totalEstimatedPL+=j.totalEstimatedPL,o.totalHoldingValue+=j.totalHoldingValue,o.openPL=(o.closePL+o.totalEstimatedPL).toFixed(3),o.openPL_noFee=(o.closePL_noFee+o.totalEstimatedPL).toFixed(3),o.buyCount+=b.stats.buyCount,o.sellCount+=b.stats.sellCount,o.mintCount+=b.stats.mintCount,o.biggestFlip=Object(i.a)({},b.stats.biggestFlip),o.biggestFlop=Object(i.a)({},b.stats.biggestFlop),o.topRank=Object(i.a)({},b.stats.topRank),e(Object(oe.b)(o)),s=[].concat(Object(c.a)(s),Object(c.a)(b.transactions)),e(Object(oe.c)(s)),t.next=42,Object(S.h)(d);case 42:x=t.sent,b.stats.wallet=d,b.stats.ens=x,y([].concat(Object(c.a)(w),[Object(i.a)({},b.stats)]));case 46:l++,t.next=4;break;case 49:e(Object(oe.b)(o)),e(Object(oe.a)(a)),e(Object(oe.c)(s)),T(!1);case 53:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),q=function(){A.trim()&&function(e){m([].concat(Object(c.a)(p),[e])),B(e)}(A)},_=function(e){13===e.keyCode&&q()};return Object(l.useEffect)((function(){p.length>0&&N(p)}),[p.length]),Object(z.jsxs)(x.a,{position:"relative",overflow:"hidden",minHeight:"91.5vh",children:[Object(z.jsx)(u.a,{maxWidth:"xl",sx:{position:"relative",zIndex:30,pt:10,pb:20},children:Object(z.jsxs)(h.a,{container:!0,spacing:8,children:[Object(z.jsx)(h.a,{item:!0,xs:12,md:3,children:Object(z.jsx)(se.a,{tabs:xe,wallets:p,setWallet:R,addWallet:q,setSelectedWallet:B,handleClose:function(e,t){m(p.filter((function(e){return e!==t})))},parentRoute:"/portfolio"})}),Object(z.jsxs)(h.a,{item:!0,xs:12,md:9,children:["portfolio-tracker"===n&&Object(z.jsx)(de,{loading:C,selectedWallet:D,wallets:p,setWallet:R,addWallet:q,keyPress:_}),"holdings"===n&&Object(z.jsx)(je,{loading:C,wallets:p,setWallet:R,addWallet:q,keyPress:_}),"transactions"===n&&Object(z.jsx)(be,{loading:C,wallets:p,setWallet:R,addWallet:q,keyPress:_})]})]})}),Object(z.jsx)(x.a,{component:"img",src:"assets/images/wave-portfolio.svg",alt:"",width:"100%",position:"absolute",top:"20%",zIndex:10}),Object(z.jsx)(x.a,{component:"img",src:"assets/images/gradient-portfolio-left.svg",alt:"",width:"100%",height:"",position:"absolute",bottom:0,left:0,zIndex:20}),Object(z.jsx)(x.a,{component:"img",src:"assets/images/gradient-portfolio-right.svg",alt:"",width:"100%",position:"absolute",bottom:0,right:0,zIndex:20})]})}}}]);