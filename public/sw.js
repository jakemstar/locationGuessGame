if(!self.define){let e,i={};const n=(n,a)=>(n=new URL(n+".js",a).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(a,o)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let r={};const s=e=>n(e,c),d={module:{uri:c},exports:r,require:s};i[c]=Promise.all(a.map((e=>d[e]||s(e)))).then((e=>(o(...e),r)))}}define(["./workbox-d995479e"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"app.js",revision:"d908b4c748ec7167a923a61ecb5cb544"},{url:"browserconfig.xml",revision:"653d077300a12f09a69caeea7a8947f8"},{url:"game.html",revision:"2d786c0db9e43b62d6bffa10935b0dda"},{url:"icons/android-icon-144x144.png",revision:"22a79be5a0272565bb5e49323ff9ca8f"},{url:"icons/android-icon-192x192.png",revision:"0bbcf1657dee640be57fbaa82a162f0c"},{url:"icons/android-icon-36x36.png",revision:"1e9cfc9ef22a74474761a5275bccbd18"},{url:"icons/android-icon-48x48.png",revision:"ff3b9bdaee9c583a9146e191b04a151b"},{url:"icons/android-icon-72x72.png",revision:"36d502b0e594e5933a96ba3fb874e817"},{url:"icons/android-icon-96x96.png",revision:"c89cc107317601d58ca07e011486aa1d"},{url:"icons/apple-icon-114x114.png",revision:"659a1d0b0c9bf3b32be06536e62a8e6a"},{url:"icons/apple-icon-120x120.png",revision:"df0a728616bc53d9698249227ff84461"},{url:"icons/apple-icon-144x144.png",revision:"22a79be5a0272565bb5e49323ff9ca8f"},{url:"icons/apple-icon-152x152.png",revision:"573da1c8b7f31eb6c5d7de2f34e46fdf"},{url:"icons/apple-icon-180x180.png",revision:"ac7278ded1e208a056e397aa9a6697a9"},{url:"icons/apple-icon-57x57.png",revision:"c2bafc1d6e0e9273286541d5d289ead8"},{url:"icons/apple-icon-60x60.png",revision:"a3fa6dee18c9646d0af13dbad8189652"},{url:"icons/apple-icon-72x72.png",revision:"36d502b0e594e5933a96ba3fb874e817"},{url:"icons/apple-icon-76x76.png",revision:"5f8dc17dbe413c47ec79bbd1dd02aeba"},{url:"icons/apple-icon-precomposed.png",revision:"715af392fb846978e96c5e027506293f"},{url:"icons/apple-icon.png",revision:"715af392fb846978e96c5e027506293f"},{url:"icons/favicon-16x16.png",revision:"9938e16f64d32f0fb20eaca5e708be8a"},{url:"icons/favicon-32x32.png",revision:"7da7e2a542f074c52a7aa72ce549c972"},{url:"icons/favicon-96x96.png",revision:"c89cc107317601d58ca07e011486aa1d"},{url:"icons/favicon.ico",revision:"9b2efce042caa48179bb68994c96aa33"},{url:"icons/ms-icon-144x144.png",revision:"22a79be5a0272565bb5e49323ff9ca8f"},{url:"icons/ms-icon-150x150.png",revision:"7ad943f43334f8fcb25f6d856d79be99"},{url:"icons/ms-icon-310x310.png",revision:"5e39580ab2032e846126a3528da83b01"},{url:"icons/ms-icon-70x70.png",revision:"ee8050990747c73b78e6837aec8eb531"},{url:"images/question.png",revision:"bae0181f7d859ce53877ca419600ac38"},{url:"images/sus.png",revision:"7e27a65d02e5b4430488bd31fa7cd64d"},{url:"index.html",revision:"216f33a35e866a1f70281f78d7d83f2b"},{url:"index.js",revision:"112fcf395ce9c6a9dd71252033dd7f91"},{url:"locations/Airplane.png",revision:"7ffb70609be5abd2895f4954c4a08336"},{url:"locations/Bank.png",revision:"251ca2e325a8d2b887a09a1963b991ed"},{url:"locations/Basement.png",revision:"7e2eda6fe058609b46d4966eb113b023"},{url:"locations/Beach.png",revision:"10d461891c791c861fd00d4808884011"},{url:"locations/Casino.png",revision:"7d61117afbfc098a4738b7175bf16082"},{url:"locations/Chernobyl.png",revision:"59c4d960c978a1a315a05eb0a78ff645"},{url:"locations/Club.png",revision:"39e15c13d28bead3aa5010c50df0b9eb"},{url:"locations/Gas Station.png",revision:"b85f015fdbf42d11f8fa7a503e7d93f2"},{url:"locations/Hospital.png",revision:"cada1cfb8594156e1e7128aa9ea83df2"},{url:"locations/Hotel.png",revision:"caace84cad67323a99a064e6b739a4fd"},{url:"locations/Jail.png",revision:"3ce1c858c65122e2bebf4dd0d069bfd5"},{url:"locations/Paris.png",revision:"3c43fd00e0cc2bd5157e0e7cf0a9b09d"},{url:"locations/School.png",revision:"d7d30a60dad50f7499cf2a2e3df61997"},{url:"locations/Volcano.png",revision:"14e55a98f2515752d9a4758bf28374a3"},{url:"locations/Waterpark.png",revision:"9449138f521831008def171063d984ae"},{url:"locations/Zoo.png",revision:"797dd24d0c18af27a991a98085e2af1d"},{url:"manifest.json",revision:"b51228e8523a4b13b4dbf4266ce8b7d0"},{url:"style.css",revision:"9b5bac206b55f9105481926835fd0378"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map
