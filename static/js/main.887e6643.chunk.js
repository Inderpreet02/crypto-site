(this["webpackJsonpcrypto-app"]=this["webpackJsonpcrypto-app"]||[]).push([[0],{101:function(e,a,t){},102:function(e,a,t){},103:function(e,a,t){},130:function(e,a,t){},139:function(e,a,t){},140:function(e,a,t){},141:function(e,a,t){},142:function(e,a,t){},143:function(e,a,t){},156:function(e,a,t){},262:function(e,a,t){},263:function(e,a){},265:function(e,a,t){"use strict";t.r(a);var c=t(0),s=t.n(c),i=t(37),n=t.n(i),r=(t(101),t(102),t(103),t(3)),l=t(11),d=t.n(l),o=function(){var e=Object(c.useState)(null),a=Object(r.a)(e,2),t=a[0],s=a[1],i={method:"GET",url:"https://coinranking1.p.rapidapi.com/stats",headers:{"x-rapidapi-host":"coinranking1.p.rapidapi.com","x-rapidapi-key":"3744bb210bmsh9079a40f3323be6p16506djsn74dfee50bfc2"}};return Object(c.useEffect)((function(){d.a.request(i).then((function(e){s(e.data)})).catch((function(e){console.error(e)}))}),[]),{data:t}},j=t(4),h=t.n(j),u=t(15),b=(t(130),t(1));var m=function(e){var a=e.rank,t=e.id,c=e.src,s=e.change,i=e.name,n=e.price,r=e.marketCap;return Object(b.jsxs)(u.b,{to:"crypto/".concat(t),className:"link cryptoCard",children:[Object(b.jsxs)("div",{className:"cryptoCard__top",children:[Object(b.jsxs)("h4",{className:"cryptoCard__name",children:[a,". ",i]}),Object(b.jsx)("img",{className:"cryptoCard__img",src:c,alt:""})]}),Object(b.jsxs)("div",{className:"cryptoCard__data",children:[Object(b.jsxs)("p",{className:"cryptoCard__data",children:["Price: ",h()(n)]}),Object(b.jsxs)("p",{className:"cryptoCard__data",children:["Market Cap: ",h()(r)]}),Object(b.jsxs)("p",{className:"cryptoCard__data",children:["Daily Change: ",s,"%"]})]})]})},p=function(e){var a=Object(c.useState)(null),t=Object(r.a)(a,2),s=t[0],i=t[1],n={method:"GET",url:"https://coinranking1.p.rapidapi.com/coins",headers:{"x-rapidapi-host":"coinranking1.p.rapidapi.com","x-rapidapi-key":"3744bb210bmsh9079a40f3323be6p16506djsn74dfee50bfc2"}};return Object(c.useEffect)((function(){d.a.request(n).then((function(e){i(e.data)})).catch((function(e){console.error(e)}))}),[]),{data:s}},v=(t(139),t(12)),x=t.n(v);var O=function(e){var a,t=e.count,s=p(t).data,i=Object(c.useState)(null===s||void 0===s||null===(a=s.data)||void 0===a?void 0:a.coins),n=Object(r.a)(i,2),l=n[0],d=(n[1],Object(c.useState)("")),o=Object(r.a)(d,2),j=o[0],h=o[1];return console.log(l),Object(b.jsxs)("div",{className:"crypto",children:[Object(b.jsx)("form",{children:Object(b.jsx)("input",{type:"text",className:"crypto__search",placeholder:"Coins",value:j,onChange:function(e){return h(e.target.value)}})}),Object(b.jsxs)("div",{className:"crypto__head",children:[Object(b.jsx)("h1",{children:"Cryptocurrencies"}),Object(b.jsx)(u.b,{to:"/cryptos",className:"showMore",children:10===t?"Show More":""})]}),l?Object(b.jsx)("div",{className:"crypto__container",children:null===l||void 0===l?void 0:l.map((function(e){return Object(b.jsx)(m,{id:e.id,rank:e.rank,change:e.change,name:e.name,src:e.iconUrl,price:e.price,marketCap:e.marketCap},e.rank)}))}):Object(b.jsx)(x.a,{className:"loading",type:"balls",color:"rgb(3, 3, 32)",height:100,width:100})]})},_=t(11).default,f=function(){var e=Object(c.useState)(null),a=Object(r.a)(e,2),t=a[0],s=a[1],i={method:"GET",url:"https://bing-news-search1.p.rapidapi.com/news/search",params:{q:"Crypto",safeSearch:"Off",textFormat:"Raw",freshness:"Day"},headers:{"x-bingapis-sdk":"true","x-rapidapi-host":"bing-news-search1.p.rapidapi.com","x-rapidapi-key":"3744bb210bmsh9079a40f3323be6p16506djsn74dfee50bfc2"}};return Object(c.useEffect)((function(){_.request(i).then((function(e){s(e.data)})).catch((function(e){console.error(e)}))}),[]),{data:t}},g=t(90),N=t.n(g);t(140);var y=function(e){var a=e.date,t=e.providerName,c=e.providerLogo,s=e.url,i=e.title,n=e.desc,r=e.src;return Object(b.jsxs)("div",{className:"newsCard",children:[Object(b.jsxs)("div",{className:"newsCard__top",children:[Object(b.jsx)("a",{href:s,target:"_blank",children:Object(b.jsx)("h1",{className:"newsCard__heading",children:i})}),Object(b.jsx)("img",{src:r,alt:"",className:"newsCard__img"})]}),Object(b.jsx)("div",{className:"newsCard__desc",children:Object(b.jsx)("p",{children:n})}),Object(b.jsxs)("div",{className:"newsCard__footer",children:[Object(b.jsxs)("div",{className:"footer__info",children:[Object(b.jsx)("img",{className:"provider__logo",src:c,alt:"name"}),Object(b.jsx)("p",{children:t})]}),Object(b.jsx)("div",{className:"date",children:N()(a).startOf("ss").fromNow()})]})]})};t(141);var k=function(){var e=f().data,a=null===e||void 0===e?void 0:e.value;return console.log(a),Object(b.jsxs)("div",{className:"news",children:[Object(b.jsx)("h1",{children:"News"}),a?Object(b.jsx)("div",{className:"news__container",children:a.map((function(e,a){var t,c,s,i,n,r;return Object(b.jsx)(y,{url:e.url,date:e.datePublished,providerName:null===e||void 0===e||null===(t=e.provider[0])||void 0===t?void 0:t.name,providerLogo:null===e||void 0===e||null===(c=e.provider[0])||void 0===c||null===(s=c.image)||void 0===s||null===(i=s.thumbnail)||void 0===i?void 0:i.contentUrl,title:e.name,desc:e.description,src:null===e||void 0===e||null===(n=e.image)||void 0===n||null===(r=n.thumbnail)||void 0===r?void 0:r.contentUrl},a)}))}):Object(b.jsx)(x.a,{className:"loading",type:"balls",color:"rgb(3, 3, 32)",height:100,width:100})]})};var C=function(){var e=o(),a=e.data,t=e.isFetching,c=null===a||void 0===a?void 0:a.data;return t?"Loading .....":Object(b.jsxs)("div",{className:"main",children:[Object(b.jsx)("h1",{children:"Global Crypto Stats"}),c?Object(b.jsxs)("div",{className:"main__container",children:[Object(b.jsxs)("div",{className:"main__stats",children:[Object(b.jsxs)("div",{className:"main__stat",children:[Object(b.jsx)("h1",{className:"stat__heading",children:"Total Cryptocurrencies"}),Object(b.jsx)("p",{className:"stat__data",children:h()(null===c||void 0===c?void 0:c.totalCoins)})]}),Object(b.jsxs)("div",{className:"main__stat",children:[Object(b.jsx)("h1",{className:"stat__heading",children:"Total Market Cap"}),Object(b.jsx)("p",{className:"stat__data",children:h()(null===c||void 0===c?void 0:c.totalMarketCap)})]}),Object(b.jsxs)("div",{className:"main__stat",children:[Object(b.jsx)("h1",{className:"stat__heading",children:"Total Markets"}),Object(b.jsx)("p",{className:"stat__data",children:h()(null===c||void 0===c?void 0:c.totalMarkets)})]})]}),Object(b.jsxs)("div",{className:"main__stats",children:[Object(b.jsxs)("div",{className:"main__stat",children:[Object(b.jsx)("h1",{className:"stat__heading",children:"Total Exchanges"}),Object(b.jsx)("p",{className:"stat__data",children:h()(null===c||void 0===c?void 0:c.totalExchanges)})]}),Object(b.jsxs)("div",{className:"main__stat",children:[Object(b.jsx)("h1",{className:"stat__heading",children:"Total 24h Volume"}),Object(b.jsx)("p",{className:"stat__data",children:h()(null===c||void 0===c?void 0:c.total24hVolume)})]})]})]}):Object(b.jsx)(x.a,{className:"loading",type:"balls",color:"rgb(3, 3, 32)",height:100,width:100}),Object(b.jsx)(O,{count:10}),Object(b.jsx)(k,{})]})},w=(t(142),t.p+"static/media/logo.c7da9b89.png");var S=function(){return Object(b.jsx)("div",{className:"sidebar",children:Object(b.jsx)(u.b,{to:"/",className:"link",children:Object(b.jsxs)("div",{className:"sidebar__top",children:[Object(b.jsx)("img",{className:"sidebar__logo",src:w,alt:"logo"}),Object(b.jsx)("h1",{className:"sidebar__heading",children:"CryptoDog"})]})})})},E=t(2),T=(t(143),t(11).default),M=function(e){var a=Object(c.useState)(null),t=Object(r.a)(a,2),s=t[0],i=t[1],n={method:"GET",url:"https://coinranking1.p.rapidapi.com/coin/".concat(e),headers:{"x-rapidapi-host":"coinranking1.p.rapidapi.com","x-rapidapi-key":"3744bb210bmsh9079a40f3323be6p16506djsn74dfee50bfc2"}};return Object(c.useEffect)((function(){T.request(n).then((function(e){i(e.data),console.log(e.data)})).catch((function(e){console.error(e)}))}),[]),{data:s}},P=t(91),$=function(e){var a=e.coinId,t=e.timestamp,s={method:"GET",url:"https://coinranking1.p.rapidapi.com/coin/".concat(a,"/history/").concat(t),headers:{"x-rapidapi-host":"coinranking1.p.rapidapi.com","x-rapidapi-key":"3744bb210bmsh9079a40f3323be6p16506djsn74dfee50bfc2"}},i=Object(c.useState)(null),n=Object(r.a)(i,2),l=n[0],o=n[1];return Object(c.useEffect)((function(){d.a.request(s).then((function(e){o(e.data),console.log(e.data)})).catch((function(e){console.error(e)}))}),[]),{data:l}},q=(t(156),t(96));var A=function(e){for(var a,t=e.coinHistory,c=e.currentPrice,s=e.coinName,i=[],n=[],r=0;r<(null===t||void 0===t||null===(l=t.data)||void 0===l||null===(d=l.history)||void 0===d?void 0:d.length);r+=1){var l,d,o;i.push(null===t||void 0===t||null===(o=t.data)||void 0===o?void 0:o.history[r].price)}for(var j=0;j<(null===t||void 0===t||null===(h=t.data)||void 0===h||null===(u=h.history)||void 0===u?void 0:u.length);j+=1){var h,u,m;n.push(new Date(null===t||void 0===t||null===(m=t.data)||void 0===m?void 0:m.history[j].timestamp).toLocaleDateString())}console.log(n),console.log(i);var p={labels:n,datasets:[{label:"Price In USD",data:i,fill:!1,backgroundColor:"#0071bd",borderColor:"#0071bd"}]};return Object(b.jsx)("div",{className:"lineChart",children:Object(b.jsxs)("div",{className:"chart__container",children:[Object(b.jsxs)("h1",{className:"chart__heading",children:[s," Price Chart"]}),Object(b.jsxs)("div",{className:"chart__info",children:[Object(b.jsxs)("div",{className:"price__change",children:["Price Change ",null===t||void 0===t||null===(a=t.data)||void 0===a?void 0:a.change]}),Object(b.jsxs)("div",{className:"current__price",children:["Current ",s," Price : $",c]})]}),Object(b.jsx)(q.a,{data:p,options:{scales:{yAxes:[{ticks:{beginAtZero:!0}}]}}})]})})};var D=function(){var e,a=Object(E.f)().coinId,t=Object(c.useState)("7d"),s=Object(r.a)(t,2),i=s[0],n=s[1],l=M(a),d=l.data,o=(l.isFetching,$({coinId:a,timePeriod:i}).data),j=null===d||void 0===d||null===(e=d.data)||void 0===e?void 0:e.coin;if(console.log(o),!j)return Object(b.jsx)(x.a,{className:"loading",type:"balls",color:"rgb(3, 3, 32)",height:100,width:100});var u=[{title:"Price to USD",value:"$ ".concat((null===j||void 0===j?void 0:j.price)&&h()(null===j||void 0===j?void 0:j.price))},{title:"Rank",value:j.rank},{title:"24h Volume",value:"$ ".concat(j.volume&&h()(j.volume))},{title:"Market Cap",value:"$ ".concat(j.marketCap&&h()(j.marketCap))},{title:"All-time-high(daily avg.)",value:"$ ".concat(h()(j.allTimeHigh.price))}],m=[{title:"Number Of Markets",value:j.numberOfMarkets},{title:"Number Of Exchanges",value:j.numberOfExchanges},{title:"Aprroved Supply",value:"True"},{title:"Total Supply",value:"$ ".concat(h()(j.totalSupply))},{title:"Circulating Supply",value:"$ ".concat(h()(j.circulatingSupply))}];return Object(b.jsx)("div",{className:"details",children:Object(b.jsxs)("div",{className:"details__container",children:[Object(b.jsxs)("div",{className:"details__containerTop",children:[Object(b.jsxs)("h1",{className:"details__heading",children:[j.name," (",j.slug,") Price"]}),Object(b.jsx)("p",{className:"details__headingTopdesc",children:"Live Price and other usefull shit comes here"})]}),Object(b.jsxs)("div",{className:"details__main",children:[Object(b.jsx)("div",{className:"details__mainTime",children:Object(b.jsx)("select",{className:"detail__mainSelect",defaultValue:"7d",onChange:function(e){return n(e)},placeholder:"Select Time Period",children:["3h","24h","7d","30d","1y","3m","3y","5y"].map((function(e){return Object(b.jsx)("option",{children:e},e)}))})}),Object(b.jsx)(A,{coinHistory:o,currentPrice:h()(j.price),coinName:j.name}),Object(b.jsxs)("div",{className:"details__statsContainer",children:[Object(b.jsxs)("h1",{children:[j.name," value stats"]}),Object(b.jsxs)("div",{className:"detail__stats",children:[Object(b.jsx)("div",{className:"detail__stat",children:u.map((function(e){return Object(b.jsxs)("div",{className:"stat__box",children:[Object(b.jsx)("div",{className:"stat__name",children:e.title}),Object(b.jsx)("div",{className:"stat__value",children:e.value})]})}))}),Object(b.jsx)("div",{className:"detail__stat",children:m.map((function(e){return Object(b.jsxs)("div",{className:"stat__box",children:[Object(b.jsx)("div",{className:"stat__name",children:e.title}),Object(b.jsx)("div",{className:"stat__value",children:e.value})]})}))})]})]}),Object(b.jsxs)("div",{className:"details__desc",children:[Object(b.jsxs)("div",{className:"detail__descMain",children:[Object(b.jsxs)("h1",{className:"detail__descHeading",children:["What is ",j.name]}),Object(P.a)(j.description)]}),Object(b.jsx)("div",{className:"detail__links",children:j.links.map((function(e){return Object(b.jsxs)("div",{className:"coin__link",children:[Object(b.jsx)("div",{className:"link__title",children:e.type}),Object(b.jsx)("a",{href:e.url,target:"_blank",children:e.name})]})}))})]})]})]})})},G=function(){var e={method:"GET",url:"https://coinranking1.p.rapidapi.com/exchanges",headers:{"x-rapidapi-host":"coinranking1.p.rapidapi.com","x-rapidapi-key":"3744bb210bmsh9079a40f3323be6p16506djsn74dfee50bfc2"}},a=Object(c.useState)(),t=Object(r.a)(a,2),s=t[0],i=t[1];return Object(c.useEffect)((function(){d.a.request(e).then((function(e){i(e.data),console.log(e.data)})).catch((function(e){console.error(e)}))}),[]),{data:s}};t(262);var I=function(){var e,a=G().data,t=null===a||void 0===a||null===(e=a.data)||void 0===e?void 0:e.exchanges;return console.log(t),t?Object(b.jsxs)("div",{className:"exe",children:[Object(b.jsx)("h1",{className:"exe__heading",children:"Exchanges will be here."}),Object(b.jsx)("div",{className:"exe__container",children:t.map((function(e){return Object(b.jsxs)("div",{className:"exe__box",children:[Object(b.jsxs)("div",{className:"exe__boxName",children:[Object(b.jsx)("img",{className:"box__icon",src:e.iconUrl,alt:"bruv"}),Object(b.jsxs)("h4",{className:"exe__boxLabel",children:[Object(b.jsxs)("div",{className:"exe__rank",children:[e.rank,"."]}),Object(b.jsx)("div",{className:"exe__name",children:e.name})]})]}),Object(b.jsxs)("div",{className:"box__info",children:[Object(b.jsxs)("p",{children:["No of Markets: ",e.numberOfMarkets]}),Object(b.jsxs)("p",{children:["Volume: ",h()(e.volume)]})]})]})}))})]}):Object(b.jsx)(x.a,{className:"loading",type:"balls",color:"rgb(3, 3, 32)",height:100,width:100})};t(263);var L=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)(u.a,{children:[Object(b.jsx)(S,{}),Object(b.jsxs)(E.c,{children:[Object(b.jsx)(E.a,{path:"/crypto/:coinId",children:Object(b.jsx)(D,{})}),Object(b.jsx)(E.a,{path:"/cryptos",children:Object(b.jsx)(O,{count:100})}),Object(b.jsx)(E.a,{path:"/exchanges",children:Object(b.jsx)(I,{})}),Object(b.jsx)(E.a,{path:"/",children:Object(b.jsx)(C,{})})]})]})})},U=t(38),V=Object(U.b)({name:"counter",initialState:{value:0,status:"idle"},reducers:{increment:function(e){e.value+=1},decrement:function(e){e.value-=1},incrementByAmount:function(e,a){e.value+=a.payload}}}),B=V.actions,H=(B.increment,B.decrement,B.incrementByAmount,V.reducer),F=Object(U.a)({reducer:{counter:H}}),W=t(95);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(W.a,{store:F,children:Object(b.jsx)(L,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[265,1,2]]]);
//# sourceMappingURL=main.887e6643.chunk.js.map