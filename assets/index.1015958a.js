import{j as m,r as t,H as I,S as E,R as h,o as T,a as b}from"./vendor.a34827cf.js";const L=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function c(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=c(e);fetch(e.href,o)}};L();const j="modulepreload",_={},O="/",l=function(n,c){return!c||c.length===0?n():Promise.all(c.map(r=>{if(r=`${O}${r}`,r in _)return;_[r]=!0;const e=r.endsWith(".css"),o=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${o}`))return;const s=document.createElement("link");if(s.rel=e?"stylesheet":j,e||(s.as="script",s.crossOrigin=""),s.href=r,document.head.appendChild(s),e)return new Promise((u,d)=>{s.addEventListener("load",u),s.addEventListener("error",d)})})).then(()=>n())};var R="/assets/icon.3ae36dba.svg",k="/assets/pixel-dog.802ee817.gif";const a=m.exports.jsx,x=m.exports.jsxs,J=m.exports.Fragment;function w(){return a("img",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",userSelect:"none"},src:k,width:"100"})}document.querySelector("#icon").setAttribute("href",R);const C=t.exports.lazy(()=>l(()=>import("./Header.dfa29d3f.js"),["assets/Header.dfa29d3f.js","assets/vendor.a34827cf.js","assets/iconBase.bf5a2285.js","assets/grey.f05699ba.js","assets/ModalImage.758ef24d.js"])),D=t.exports.lazy(()=>l(()=>import("./Find.7550ad8b.js"),["assets/Find.7550ad8b.js","assets/vendor.a34827cf.js","assets/ButtonFollow.e6b0aa74.js","assets/grey.f05699ba.js","assets/NotFound.6bcd1c95.js"])),M=t.exports.lazy(()=>l(()=>import("./DashBoard.9e42e485.js"),["assets/DashBoard.9e42e485.js","assets/vendor.a34827cf.js","assets/grey.f05699ba.js","assets/ButtonFollow.e6b0aa74.js","assets/index.esm.4b9ccd0e.js","assets/iconBase.bf5a2285.js","assets/splitDate.9d8fdbe2.js"])),F=t.exports.lazy(()=>l(()=>import("./Profile.60298527.js"),["assets/Profile.60298527.js","assets/vendor.a34827cf.js","assets/ButtonFollow.e6b0aa74.js","assets/grey.f05699ba.js","assets/ModalImage.758ef24d.js","assets/splitDate.9d8fdbe2.js","assets/NotFound.6bcd1c95.js"])),U=t.exports.lazy(()=>l(()=>import("./BackToTop.5c97a68f.js"),["assets/BackToTop.5c97a68f.js","assets/vendor.a34827cf.js","assets/index.esm.4b9ccd0e.js","assets/iconBase.bf5a2285.js"]));var z=t.exports.memo(function(){return x(t.exports.Suspense,{fallback:a(w,{}),children:[x(I,{children:[a(C,{}),x(E,{children:[a(h,{exact:!0,path:"/",component:M}),a(h,{exact:!0,path:"/profile",component:F}),a(h,{exact:!0,path:"/find",component:D})]})]}),a(U,{})]})});function B(i="",n={}){return fetch("https://only-dog-be.azurewebsites.net"+i,{headers:n})}function N(i){return i?T(i).userId:""}var V=t.exports.memo(function({children:n}){const[c,r]=t.exports.useState(JSON.parse(localStorage.getItem("accessToken"))),[e,o]=t.exports.useState(JSON.parse(localStorage.getItem("refreshToken")));return a(v.Provider,{value:{stateAccessToken:c,setStateAccessToken:r,stateRefreshToken:e,setStateRefreshToken:o},children:n})});const v=t.exports.createContext();var H=t.exports.memo(function({children:n}){const[c,r]=t.exports.useState(!1),[e,o]=t.exports.useState(!1),[s,u]=t.exports.useState(!1),[d,S]=t.exports.useState(!1),[y,A]=t.exports.useState(""),[P,g]=t.exports.useState({}),{stateAccessToken:p}=t.exports.useContext(v);return t.exports.useEffect(()=>(p&&B("/users/find_by_id/"+N(p)).then(f=>f.json()).then(f=>g(f.user)),()=>{g({})}),[p]),a($.Provider,{value:{showModalRegister:c,setShowModalRegister:r,showModalLogin:e,setShowModalLogin:o,showModalUpdateAvatar:s,setShowModalUpdateAvatar:u,showModalImage:d,setShowModalImage:S,stateUserIdProfile:y,setStateUserIdProfile:A,stateObInfoUserCurrent:P},children:n})});const $=t.exports.createContext();b.exports.render(a(V,{children:a(H,{children:a(z,{})})}),document.getElementById("root"));export{v as A,J as F,x as a,$ as b,B as c,N as g,a as j};
