import{r as o,R as s,s as p,a as _}from"./vendor.a3abce89.js";const E=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}};E();const g="modulepreload",f={},y="/",c=function(a,l){return!l||l.length===0?a():Promise.all(l.map(n=>{if(n=`${y}${n}`,n in f)return;f[n]=!0;const e=n.endsWith(".css"),t=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${t}`))return;const r=document.createElement("link");if(r.rel=e?"stylesheet":g,e||(r.as="script",r.crossOrigin=""),r.href=n,document.head.appendChild(r),e)return new Promise((d,u)=>{r.addEventListener("load",d),r.addEventListener("error",u)})})).then(()=>a())};var v="/assets/pixel-dog.802ee817.gif",x="/assets/icon.3ae36dba.svg";const m=o.exports.createContext();var P=o.exports.memo(function({children:a}){const[l,n]=o.exports.useState("dashboard"),[e,t]=o.exports.useState(!1),[r,d]=o.exports.useState(!1),[u,h]=o.exports.useState(!1);return s.createElement(m.Provider,{value:{page:l,setPage:n,showModalRegister:e,setShowModalRegister:t,showModalLogin:r,setShowModalLogin:d,showAddPost:u,setShowAddPost:h}},a)});const L=o.exports.lazy(()=>c(()=>import("./Header.051bea7a.js"),["assets/Header.051bea7a.js","assets/vendor.a3abce89.js","assets/AbstractModalHeader.facb7eaf.js"])),b=o.exports.lazy(()=>c(()=>import("./Find.e5ae0bb8.js"),["assets/Find.e5ae0bb8.js","assets/vendor.a3abce89.js","assets/ButtonFollow.eb068c49.js","assets/grey.70b7c93c.js","assets/seed.68dafaaf.js"])),A=o.exports.lazy(()=>c(()=>import("./DashBoard.cfd74c67.js"),["assets/DashBoard.cfd74c67.js","assets/vendor.a3abce89.js","assets/ButtonFollow.eb068c49.js","assets/grey.70b7c93c.js","assets/seed.68dafaaf.js","assets/iconBase.13e4c446.js"])),S=o.exports.lazy(()=>c(()=>import("./Profile.b07e18c2.js"),["assets/Profile.b07e18c2.js","assets/vendor.a3abce89.js","assets/ButtonFollow.eb068c49.js","assets/grey.70b7c93c.js","assets/Modal.8365a887.js","assets/AbstractModalHeader.facb7eaf.js"])),O=o.exports.lazy(()=>c(()=>import("./BackToTop.00aaaa18.js"),["assets/BackToTop.00aaaa18.js","assets/vendor.a3abce89.js","assets/index.esm.b0be638c.js","assets/iconBase.13e4c446.js"]));document.querySelector("#icon").setAttribute("href",x);function R(){const{page:i}=o.exports.useContext(m);return s.createElement(o.exports.Suspense,{fallback:s.createElement(w,null,s.createElement(T,{src:v,width:"100"}))},s.createElement(L,null),i==="dashboard"?s.createElement(A,null):i==="profile"?s.createElement(S,null):s.createElement(b,null),s.createElement(O,null))}const w=p.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`,T=p.img`
  user-select: none;
`;_.render(s.createElement(s.StrictMode,null,s.createElement(P,null,s.createElement(R,null))),document.getElementById("root"));export{m as A,c as _};
