import{r as o,L as n}from"./vendor.459d2761.js";import{P as d,B as l}from"./ButtonFollow.b83a2fdd.js";import{t as m}from"./toTop.4c4a9307.js";import{a as u,j as e}from"./index.1612b186.js";import{g as f}from"./getQueryFromURL.6c46c721.js";import"./grey.19af5ccb.js";var p=o.exports.memo(function({userName:a}){const[r,t]=o.exports.useState(!1);return u("div",{className:"col-4 col-md-2 text-center mb-3",children:[e(n,{to:"/profile?user_id=oi23osdifhsdi2342342",onClick:()=>m(),children:e("img",{src:"https://picsum.photos/1000",alt:"Image user find",width:"80",height:"80",role:"button",style:{objectFit:"cover",userSelect:"none"},onLoad:()=>t(!0),className:r?"rounded-circle":"d-none"})}),!r&&e(d,{rounded:!0,width:80,height:80}),e("br",{}),e("small",{children:a}),e("br",{}),e(l,{})]})});const h=!0,N=[{_id:"6172afc8e1783daaf7e5a3a8",userName:"duc",email:"duc@mail.com",pathAvatar:"https://picsum.photos/1000",posts:[],followers:[],following:[],createdAt:"2021-10-22T12:34:16.940Z",__v:0},{_id:"6172b190e1783daaf7e5a3ac",userName:"tai",email:"tai@mail.com",pathAvatar:"https://picsum.photos/1000",posts:[],followers:[],following:[],createdAt:"2021-10-22T12:41:52.662Z",__v:0}];var v={success:h,users:N};function g(){return e("h2",{className:"text-center",children:"Not found"})}var x=o.exports.memo(function(){const a=s=>!!(s.userName.indexOf(t)!==-1&&t),r=v.users,t=f("user_name"),c=r.filter(s=>a(s));return e("div",{className:"container mt-4",children:e("div",{className:"row",children:r&&t&&c.length?c.map(s=>e(p,{userName:s.userName},s._id)):e(g,{})})})}),L=o.exports.memo(function(){return e(x,{})});export{L as default};
