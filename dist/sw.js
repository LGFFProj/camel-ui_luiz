if(!self.define){let e,i={};const n=(n,r)=>(n=new URL(n+".js",r).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,s)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(i[d])return;let o={};const t=e=>n(e,d),c={module:{uri:d},exports:o,require:t};i[d]=Promise.all(r.map((e=>c[e]||t(e)))).then((e=>(s(...e),o)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-1f6909e6.js",revision:null},{url:"assets/index-55fec1ff.css",revision:null},{url:"index.html",revision:"a531b7268d7d08c72405fe72a2d3bd0e"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"favicon.ico",revision:"9c89ca252a0344e3f0d5987f4b3a76b3"},{url:"android-chrome-192x192.png",revision:"4ac73bb192633743f60aedf39bdf344d"},{url:"android-chrome-512x512.png",revision:"29cdcd24dbfa4ae0d1fc2a014355b363"},{url:"apple-touch-icon.png",revision:"8a7a35381743475378e979c31de4cde1"},{url:"manifest.webmanifest",revision:"e97501867feb6f4e8385768d3a168d3d"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
