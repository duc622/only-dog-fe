import{r as t,L as c}from"./vendor.a34827cf.js";import{P as l,B as m}from"./ButtonFollow.4ff71fc1.js";import{a as u,j as e,c as f}from"./index.36020465.js";import{g as h,N as p}from"./NotFound.6c634051.js";import{S as g}from"./grey.af3a477d.js";var x=t.exports.memo(function({userId:r,userName:o,pathAvatar:n}){const[a,d]=t.exports.useState(!1);return u("div",{className:"col-4 col-md-2 text-center mb-3",children:[e(c,{to:"/profile?user_id="+r,children:e("img",{src:"http://localhost:5500"+n,alt:"Image user find",width:"80",height:"80",role:"button",style:{objectFit:"cover",userSelect:"none"},onLoad:()=>d(!0),className:a?"rounded-circle":"d-none"})}),!a&&e(l,{rounded:!0,width:80,height:80}),e("br",{}),e("small",{children:o}),e("br",{}),e(m,{userIdBeFollow:r})]})}),F=t.exports.memo(function(){const r=h("user_name"),[o,n]=t.exports.useState([]),[a,d]=t.exports.useState(!0);return t.exports.useEffect(()=>{f("/users/find_by_name/"+r).then(s=>s.json()).then(s=>{n(s.users),d(!1)}).catch(s=>console.log(s))},[r]),a?e(g,{}):e("div",{className:"container mt-4",children:e("div",{className:"row",children:o.length&&r?o.map(s=>e(x,{userId:s._id,pathAvatar:s.pathAvatar,userName:s.userName},s._id)):e(p,{})})})}),w=t.exports.memo(function(){return e(F,{})});export{w as default};
