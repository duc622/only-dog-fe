import{r as t,L as c}from"./vendor.a34827cf.js";import{P as m,B as u}from"./ButtonFollow.e6b0aa74.js";import{a as l,j as e,c as p}from"./index.1015958a.js";import{g as f,N as h}from"./NotFound.6bcd1c95.js";import{S as g}from"./grey.f05699ba.js";var x=t.exports.memo(function({userId:r,userName:o}){const[a,n]=t.exports.useState(!1);return l("div",{className:"col-4 col-md-2 text-center mb-3",children:[e(c,{to:"/profile?user_id="+r,children:e("img",{src:"https://picsum.photos/1000",alt:"Image user find",width:"80",height:"80",role:"button",style:{objectFit:"cover",userSelect:"none"},onLoad:()=>n(!0),className:a?"rounded-circle":"d-none"})}),!a&&e(m,{rounded:!0,width:80,height:80}),e("br",{}),e("small",{children:o}),e("br",{}),e(u,{userIdBeFollow:r})]})}),F=t.exports.memo(function(){const r=f("user_name"),[o,a]=t.exports.useState([]),[n,d]=t.exports.useState(!0);return t.exports.useEffect(()=>{p("/users/find_by_name/"+r).then(s=>s.json()).then(s=>{a(s.users),d(!1)}).catch(s=>console.log(s))},[r]),n?e(g,{}):e("div",{className:"container mt-4",children:e("div",{className:"row",children:o.length&&r?o.map(s=>e(x,{userId:s._id,userName:s.userName},s._id)):e(h,{})})})}),w=t.exports.memo(function(){return e(F,{})});export{w as default};
