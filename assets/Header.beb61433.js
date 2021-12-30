var Fe=Object.defineProperty,ze=Object.defineProperties;var Ge=Object.getOwnPropertyDescriptors;var G=Object.getOwnPropertySymbols;var ce=Object.prototype.hasOwnProperty,de=Object.prototype.propertyIsEnumerable;var ue=(e,t,a)=>t in e?Fe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,y=(e,t)=>{for(var a in t||(t={}))ce.call(t,a)&&ue(e,a,t[a]);if(G)for(var a of G(t))de.call(t,a)&&ue(e,a,t[a]);return e},w=(e,t)=>ze(e,Ge(t));var A=(e,t)=>{var a={};for(var n in e)ce.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&G)for(var n of G(e))t.indexOf(n)<0&&de.call(e,n)&&(a[n]=e[n]);return a};import{r,L as J,_ as Ue,b as Ve,c as pe}from"./vendor.c65eed6e.js";import{j as o,a as v,A as U,b as W,F as Ke,g as _e}from"./index.d851137f.js";import{G as j}from"./iconBase.b42652f6.js";import{c as O,u as R,S as fe,g as Je}from"./grey.9d7e0e97.js";import{t as We,T as he,a as me,s as ge,E as Xe,b as ve,c as X,d as xe,u as Ze,e as qe,f as H,g as Z,C as Qe,h as ye,F as q,A as Ye,M as et,B as tt,i as at,j as nt,k as P,l as m,m as B,n as ot}from"./ModalImage.14e9cb8d.js";var rt="/only-dog-fe/assets/logo.ada3b726.svg",st=r.exports.memo(function(){return o(J,{to:"/",children:o("img",{role:"button",src:rt,alt:"Logo OnlyDog",width:200,style:{userSelect:"none"},className:"my-2"})})});function be(e){return"default"+e.charAt(0).toUpperCase()+e.substr(1)}function lt(e){var t=it(e,"string");return typeof t=="symbol"?t:String(t)}function it(e,t){if(typeof e!="object"||e===null)return e;var a=e[Symbol.toPrimitive];if(a!==void 0){var n=a.call(e,t||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function ct(e,t,a){var n=r.exports.useRef(e!==void 0),s=r.exports.useState(t),l=s[0],i=s[1],c=e!==void 0,f=n.current;return n.current=c,!c&&f&&l!==t&&i(t),[c?e:l,r.exports.useCallback(function(p){for(var d=arguments.length,g=new Array(d>1?d-1:0),h=1;h<d;h++)g[h-1]=arguments[h];a&&a.apply(void 0,[p].concat(g)),i(p)},[a])]}function Ne(e,t){return Object.keys(t).reduce(function(a,n){var s,l=a,i=l[be(n)],c=l[n],f=Ue(l,[be(n),n].map(lt)),p=t[n],d=ct(c,i,e[p]),g=d[0],h=d[1];return Ve({},f,(s={},s[n]=g,s[p]=h,s))},e)}function I(...e){return e.filter(t=>t!=null).reduce((t,a)=>{if(typeof a!="function")throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return t===null?a:function(...s){t.apply(this,s),a.apply(this,s)}},null)}const dt={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function Ce(e,t){const a=`offset${e[0].toUpperCase()}${e.slice(1)}`,n=t[a],s=dt[e];return n+parseInt(ge(t,s[0]),10)+parseInt(ge(t,s[1]),10)}const ut={[Xe]:"collapse",[ve]:"collapsing",[X]:"collapsing",[xe]:"collapse show"},pt={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,getDimensionValue:Ce},we=pe.forwardRef((g,d)=>{var h=g,{onEnter:e,onEntering:t,onEntered:a,onExit:n,onExiting:s,className:l,children:i,dimension:c="height",getDimensionValue:f=Ce}=h,p=A(h,["onEnter","onEntering","onEntered","onExit","onExiting","className","children","dimension","getDimensionValue"]);const u=typeof c=="function"?c():c,b=r.exports.useMemo(()=>I(x=>{x.style[u]="0"},e),[u,e]),N=r.exports.useMemo(()=>I(x=>{const C=`scroll${u[0].toUpperCase()}${u.slice(1)}`;x.style[u]=`${x[C]}px`},t),[u,t]),k=r.exports.useMemo(()=>I(x=>{x.style[u]=null},a),[u,a]),S=r.exports.useMemo(()=>I(x=>{x.style[u]=`${f(u,x)}px`,We(x)},n),[n,f,u]),T=r.exports.useMemo(()=>I(x=>{x.style[u]=null},s),[u,s]);return o(he,w(y({ref:d,addEndListener:me},p),{"aria-expanded":p.role?p.in:null,onEnter:b,onEntering:N,onEntered:k,onExit:S,onExiting:T,childRef:i.ref,children:(x,C)=>pe.cloneElement(i,w(y({},C),{className:O(l,i.props.className,ut[x],u==="width"&&"collapse-horizontal")}))}))});we.defaultProps=pt;var ft=we;const ht=["onKeyDown"];function mt(e,t){if(e==null)return{};var a={},n=Object.keys(e),s,l;for(l=0;l<n.length;l++)s=n[l],!(t.indexOf(s)>=0)&&(a[s]=e[s]);return a}function gt(e){return!e||e.trim()==="#"}const Se=r.exports.forwardRef((e,t)=>{let{onKeyDown:a}=e,n=mt(e,ht);const[s]=Ze(Object.assign({tagName:"a"},n)),l=qe(i=>{s.onKeyDown(i),a==null||a(i)});return gt(n.href)&&!n.role||n.role==="button"?o("a",Object.assign({ref:t},n,s,{onKeyDown:l})):o("a",Object.assign({ref:t},n,{onKeyDown:a}))});Se.displayName="Anchor";var vt=Se;const Te=ye("h4");Te.displayName="DivStyledAsH4";const xt=H("alert-heading",{Component:Te}),yt=H("alert-link",{Component:vt}),bt={variant:"primary",show:!0,transition:q,closeLabel:"Close alert"},Q=r.exports.forwardRef((e,t)=>{const S=Ne(e,{show:"onClose"}),{bsPrefix:a,show:n,closeLabel:s,closeVariant:l,className:i,children:c,variant:f,onClose:p,dismissible:d,transition:g}=S,h=A(S,["bsPrefix","show","closeLabel","closeVariant","className","children","variant","onClose","dismissible","transition"]),u=R(a,"alert"),b=Z(T=>{p&&p(!1,T)}),N=g===!0?q:g,k=v("div",w(y({role:"alert"},N?void 0:h),{ref:t,className:O(i,u,f&&`${u}-${f}`,d&&`${u}-dismissible`),children:[d&&o(Qe,{onClick:b,"aria-label":s,variant:l}),c]}));return N?o(N,w(y({unmountOnExit:!0},h),{ref:void 0,in:n,children:k})):n?k:null});Q.displayName="Alert";Q.defaultProps=bt;var ke=Object.assign(Q,{Link:yt,Heading:xt});const Nt=r.exports.createContext(null);var Ct=Nt;const Le=r.exports.createContext(null);Le.displayName="NavbarContext";var D=Le;const wt={fluid:!1},Y=r.exports.forwardRef((i,l)=>{var c=i,{bsPrefix:e,fluid:t,as:a="div",className:n}=c,s=A(c,["bsPrefix","fluid","as","className"]);const f=R(e,"container"),p=typeof t=="string"?`-${t}`:"-fluid";return o(a,w(y({ref:l},s),{className:O(n,t?`${f}${p}`:f)}))});Y.displayName="Container";Y.defaultProps=wt;var St=Y;const $e=r.exports.forwardRef((l,s)=>{var i=l,{bsPrefix:e,className:t,as:a}=i,n=A(i,["bsPrefix","className","as"]);e=R(e,"navbar-brand");const c=a||(n.href?"a":"span");return o(c,w(y({},n),{ref:s,className:O(t,e)}))});$e.displayName="NavbarBrand";var Tt=$e;const Me=r.exports.forwardRef((s,n)=>{var l=s,{children:e,bsPrefix:t}=l,a=A(l,["children","bsPrefix"]);t=R(t,"navbar-collapse");const i=r.exports.useContext(D);return o(ft,w(y({in:!!(i&&i.expanded)},a),{children:o("div",{ref:n,className:t,children:e})}))});Me.displayName="NavbarCollapse";var kt=Me;const Lt={label:"Toggle navigation"},ee=r.exports.forwardRef((f,c)=>{var p=f,{bsPrefix:e,className:t,children:a,label:n,as:s="button",onClick:l}=p,i=A(p,["bsPrefix","className","children","label","as","onClick"]);e=R(e,"navbar-toggler");const{onToggle:d,expanded:g}=r.exports.useContext(D)||{},h=Z(u=>{l&&l(u),d&&d()});return s==="button"&&(i.type="button"),o(s,w(y({},i),{ref:c,onClick:h,"aria-label":n,className:O(t,e,!g&&"collapsed"),children:a||o("span",{className:`${e}-icon`})}))});ee.displayName="NavbarToggle";ee.defaultProps=Lt;var $t=ee,Mt=H("offcanvas-body");const At={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1},Et={[X]:"show",[xe]:"show"},te=r.exports.forwardRef((l,s)=>{var i=l,{bsPrefix:e,className:t,children:a}=i,n=A(i,["bsPrefix","className","children"]);return e=R(e,"offcanvas"),o(he,w(y({ref:s,addEndListener:me},n),{childRef:a.ref,children:(c,f)=>r.exports.cloneElement(a,w(y({},f),{className:O(t,a.props.className,(c===X||c===ve)&&`${e}-toggling`,Et[c])}))}))});te.defaultProps=At;te.displayName="OffcanvasToggling";var Ot=te;const Rt={closeLabel:"Close",closeButton:!1},ae=r.exports.forwardRef((s,n)=>{var l=s,{bsPrefix:e,className:t}=l,a=A(l,["bsPrefix","className"]);return e=R(e,"offcanvas-header"),o(Ye,w(y({ref:n},a),{className:O(t,e)}))});ae.displayName="OffcanvasHeader";ae.defaultProps=Rt;var Pt=ae;const Bt=ye("h5");var jt=H("offcanvas-title",{Component:Bt});const Ht={show:!1,backdrop:!0,keyboard:!0,scroll:!1,autoFocus:!0,enforceFocus:!0,restoreFocus:!0,placement:"start"};function It(e){return o(Ot,y({},e))}function Dt(e){return o(q,y({},e))}const ne=r.exports.forwardRef((aa,Re)=>{var le=aa,{bsPrefix:e,className:t,children:a,"aria-labelledby":n,placement:s,show:l,backdrop:i,keyboard:c,scroll:f,onEscapeKeyDown:p,onShow:d,onHide:g,container:h,autoFocus:u,enforceFocus:b,restoreFocus:N,restoreFocusOptions:k,onEntered:S,onExit:T,onExiting:x,onEnter:C,onEntering:L,onExited:F,backdropClassName:z,manager:$}=le,M=A(le,["bsPrefix","className","children","aria-labelledby","placement","show","backdrop","keyboard","scroll","onEscapeKeyDown","onShow","onHide","container","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","onEntered","onExit","onExiting","onEnter","onEntering","onExited","backdropClassName","manager"]);const V=r.exports.useRef();e=R(e,"offcanvas");const{onToggle:ie}=r.exports.useContext(D)||{},K=Z(()=>{ie==null||ie(),g==null||g()}),Pe=r.exports.useMemo(()=>({onHide:K}),[K]);function Be(){return $||(f?(V.current||(V.current=new at({handleContainerOverflow:!1})),V.current):nt())}const je=(E,..._)=>{E&&(E.style.visibility="visible"),C==null||C(E,..._)},He=(E,..._)=>{E&&(E.style.visibility=""),F==null||F(..._)},Ie=r.exports.useCallback(E=>o("div",w(y({},E),{className:O(`${e}-backdrop`,z)})),[z,e]),De=E=>o("div",w(y(y({role:"dialog"},E),M),{className:O(t,e,`${e}-${s}`),"aria-labelledby":n,children:a}));return o(et.Provider,{value:Pe,children:o(tt,{show:l,ref:Re,backdrop:i,container:h,keyboard:c,autoFocus:u,enforceFocus:b&&!f,restoreFocus:N,restoreFocusOptions:k,onEscapeKeyDown:p,onShow:d,onHide:K,onEnter:je,onEntering:L,onEntered:S,onExit:T,onExiting:x,onExited:He,manager:Be(),transition:It,backdropTransition:Dt,renderBackdrop:Ie,renderDialog:De})})});ne.displayName="Offcanvas";ne.defaultProps=Ht;var Ft=Object.assign(ne,{Body:Mt,Header:Pt,Title:jt});const Ae=r.exports.forwardRef((e,t)=>{const a=r.exports.useContext(D);return o(Ft,y({ref:t,show:!!(a!=null&&a.expanded)},e))});Ae.displayName="NavbarOffcanvas";var zt=Ae;const Gt=H("navbar-text",{Component:"span"}),Ut={expand:!0,variant:"light",collapseOnSelect:!1},oe=r.exports.forwardRef((e,t)=>{const x=Ne(e,{expanded:"onToggle"}),{bsPrefix:a,expand:n,variant:s,bg:l,fixed:i,sticky:c,className:f,as:p="nav",expanded:d,onToggle:g,onSelect:h,collapseOnSelect:u}=x,b=A(x,["bsPrefix","expand","variant","bg","fixed","sticky","className","as","expanded","onToggle","onSelect","collapseOnSelect"]),N=R(a,"navbar"),k=r.exports.useCallback((...C)=>{h==null||h(...C),u&&d&&(g==null||g(!1))},[h,u,d,g]);b.role===void 0&&p!=="nav"&&(b.role="navigation");let S=`${N}-expand`;typeof n=="string"&&(S=`${S}-${n}`);const T=r.exports.useMemo(()=>({onToggle:()=>g==null?void 0:g(!d),bsPrefix:N,expanded:!!d}),[N,d,g]);return o(D.Provider,{value:T,children:o(Ct.Provider,{value:k,children:o(p,w(y({ref:t},b),{className:O(f,N,n&&S,s&&`${N}-${s}`,l&&`bg-${l}`,c&&`sticky-${c}`,i&&`fixed-${i}`)}))})})});oe.defaultProps=Ut;oe.displayName="Navbar";var re=Object.assign(oe,{Brand:Tt,Collapse:kt,Offcanvas:zt,Text:Gt,Toggle:$t});function Vt(e){return j({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"11",cy:"11",r:"8"}},{tag:"line",attr:{x1:"21",y1:"21",x2:"16.65",y2:"16.65"}}]})(e)}function Kt(e){return j({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}},{tag:"circle",attr:{cx:"8.5",cy:"7",r:"4"}},{tag:"line",attr:{x1:"20",y1:"8",x2:"20",y2:"14"}},{tag:"line",attr:{x1:"23",y1:"11",x2:"17",y2:"11"}}]})(e)}var _t=r.exports.memo(function({find:t,setFind:a}){return o("div",{className:"d-flex justify-content-center my-3",style:{width:"100%"},children:v("div",{className:"d-flex",children:[o("input",{className:"form-control me-2 p-1 bg-light border-0",placeholder:"Find user",onChange:n=>a(n.target.value),value:t}),o(J,{to:"/find?user_name="+t,children:o("div",{role:"button",className:"bg-light rounded pt-1 pb-2 px-3 text-muted",children:o(Vt,{size:20})})})]})})});function Jt(e){return j({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M21 15v3h3v2h-3v3h-2v-3h-3v-2h3v-3h2zm.008-12c.548 0 .992.445.992.993V13h-2V5H4v13.999L14 9l3 3v2.829l-3-3L6.827 19H14v2H2.992A.993.993 0 0 1 2 20.007V3.993A1 1 0 0 1 2.992 3h18.016zM8 7a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"}}]}]})(e)}function Wt(e){return j({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M4 15h2v5h12V4H6v5H4V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6zm6-4V8l5 4-5 4v-3H2v-2h8z"}}]}]})(e)}function Xt(e){return j({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M5 22a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v3h-2V4H6v16h12v-2h2v3a1 1 0 0 1-1 1H5zm13-6v-3h-7v-2h7V8l5 4-5 4z"}}]}]})(e)}const Ee="^(?=.*[A-Za-z])(?=.*\\d).{6,30}$",Oe="^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$";function se(e,t,a,n){e?localStorage.setItem("accessToken",JSON.stringify(e)):localStorage.removeItem("accessToken"),t?localStorage.setItem("refreshToken",JSON.stringify(t)):localStorage.removeItem("refreshToken"),a(e),n(t)}var Zt=r.exports.memo(function(){const[t,a]=r.exports.useState(""),[n,s]=r.exports.useState(""),[l,i]=r.exports.useState(""),[c,f]=r.exports.useState(!1),[p,d]=r.exports.useState(!1),{setStateAccessToken:g,setStateRefreshToken:h}=r.exports.useContext(U),{showModalLogin:u,setShowModalLogin:b,setShowModalRegister:N}=r.exports.useContext(W),k=()=>b(!1),S=()=>b(!0),T=C=>{C.preventDefault(),f(!0),fetch("https://localhost:3001/auth/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t,password:n})}).then(L=>L.json()).then(L=>{L.success?(i(""),b(!1),se(L.accessToken,L.refreshToken,g,h),location.reload()):i(L.message),f(!1)}).catch(L=>{i(L.toString()),f(!1)})},x=()=>{b(!1),N(!0)};return r.exports.useEffect(()=>{d(!!(t&&n))},[t,n]),v(Ke,{children:[o(Wt,{role:"button",size:"30",onClick:S,className:"me-3 text-muted"}),v(P,{show:u,onHide:k,"aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[o(P.Header,{closeButton:!0,children:o(P.Title,{children:"Login"})}),o(P.Body,{children:v(m,{onSubmit:T,children:[v(m.Group,{className:"mb-3",children:[o(m.Label,{children:"Email address"}),o(m.Control,{type:"email",placeholder:"Enter email",onChange:({target:C})=>a(C.value),value:t,maxLength:"30",pattern:Oe}),o(m.Text,{className:"text-muted",children:"Max length email is 20"})]}),v(m.Group,{className:"mb-3",children:[o(m.Label,{children:"Password"}),o(m.Control,{type:"password",placeholder:"Password",onChange:({target:C})=>s(C.value),value:n,pattern:Ee}),o(m.Text,{className:"text-muted",children:"Max length 20. Must contain at least one number, one letter or more characters and at least 6"})]}),l&&o(ke,{variant:"danger",children:l}),v("div",{className:"d-flex justify-content-between",children:[c?v(B,{variant:"primary",disabled:!0,children:[o(fe,{}),"Loading..."]}):o(B,{variant:"primary",type:"submit",disabled:!p,children:"Login"}),o(B,{variant:"primary",className:"float-end",onClick:x,children:"Register"})]})]})})]})]})});const qt="^[\\w]{1,30}$";var Qt=r.exports.memo(function(){const[t,a]=r.exports.useState(""),[n,s]=r.exports.useState(""),[l,i]=r.exports.useState(""),[c,f]=r.exports.useState(""),[p,d]=r.exports.useState(""),[g,h]=r.exports.useState(!1),[u,b]=r.exports.useState(!1),{setStateAccessToken:N,setStateRefreshToken:k}=r.exports.useContext(U),{showModalRegister:S,setShowModalRegister:T,setShowModalLogin:x}=r.exports.useContext(W),C=()=>T(!1),L=()=>T(!0),F=$=>{$.preventDefault(),h(!0),fetch("https://localhost:3001/auth/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userName:t,email:n,password:l})}).then(M=>M.json()).then(M=>{M.success?d(null):d(M.message),localStorage.setItem("accessToken",JSON.stringify(M.accessToken)),localStorage.setItem("refreshToken",JSON.stringify(M.refreshToken)),h(!1),T(!1),se(M.accessToken,M.refreshToken,N,k),location.reload()}).catch(M=>{d(M.toString()),h(!1)})},z=()=>{T(!1),x(!0)};return r.exports.useEffect(()=>{b(!!(t&&n&&l&&c))},[t,n,l,c]),v("div",{children:[o(Kt,{role:"button",size:"30",onClick:L,className:"text-muted"}),v(P,{show:S,onHide:C,"aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[o(P.Header,{closeButton:!0,children:o(P.Title,{children:"Register"})}),o(P.Body,{children:v(m,{onSubmit:F,children:[v(m.Group,{className:"mb-3",children:[o(m.Label,{children:"User Name"}),o(m.Control,{type:"text",placeholder:"Phuong Ly",onChange:({target:$})=>a($.value),value:t,pattern:qt,autoComplete:"one-time-code",maxLength:"30"}),o(m.Text,{className:"text-muted",children:"Max length name is 30. Accept a-z, A-Z, 0-9"})]}),v(m.Group,{className:"mb-3",children:[o(m.Label,{children:"Email address"}),o(m.Control,{type:"email",placeholder:"DanChoiVipPro69@gmail.com",onChange:({target:$})=>s($.value),value:n,maxLength:"30",autoComplete:"one-time-code",pattern:Oe}),o(m.Text,{className:"text-muted",children:"Max length email is 30"})]}),v(m.Group,{className:"mb-3",children:[o(m.Label,{children:"Password"}),o(m.Control,{type:"password",placeholder:"Password",onChange:({target:$})=>i($.value),value:l,maxLength:"20",autoComplete:"one-time-code",pattern:Ee}),o(m.Text,{className:"text-muted",children:"Max length 20. Must contain at least one number, one letter or more characters and at least 6"})]}),v(m.Group,{className:"mb-3",children:[o(m.Label,{children:"Confirm Password"}),o(m.Control,{type:"password",placeholder:"Confirm Password",onChange:({target:$})=>f($.value),value:c,pattern:l,maxLength:"20",autoComplete:"one-time-code"})]}),p&&o(ke,{variant:"danger",children:p}),v("div",{className:"d-flex justify-content-between",children:[g?v(B,{variant:"primary",disabled:!0,children:[o(fe,{}),"Loading..."]}):o(B,{variant:"primary",type:"submit",disabled:!u,children:"Register"}),o(B,{variant:"primary",className:"float-end",onClick:z,children:"Login"})]})]})})]})]})}),Yt=r.exports.memo(function(){const[t,a]=r.exports.useState(!1),{stateAccessToken:n}=r.exports.useContext(U),{stateObInfoUserCurrent:s}=r.exports.useContext(W);return v(J,{to:"/profile?user_id="+_e(n),children:[o("img",{role:"button",width:"30",height:"30",src:"https://localhost:3001"+(s==null?void 0:s.pathAvatar),style:{objectFit:"cover",userSelect:"none"},onLoad:()=>a(!0),className:t?"rounded-circle me-3":"d-none"}),!t&&o("img",{className:"rounded-circle me-3",src:Je,height:30,width:30})]})});function ea({setStateAccessToken:e,setStateRefreshToken:t}){return o(Xt,{role:"button",size:"30",onClick:()=>{se("","",e,t),location.reload()},className:"text-muted"})}var ta=r.exports.memo(function(){const{stateAccessToken:t,setStateAccessToken:a,setStateRefreshToken:n}=r.exports.useContext(U);return window.onstorage=()=>{localStorage.getItem("accessToken")?a(JSON.parse(localStorage.getItem("accessToken"))):a("")},v("div",{children:[v("div",{className:t?"d-flex justify-content-around":"d-none",children:[o(ot,{component:o(Jt,{style:{marginRight:18},role:"button",size:"30",className:"text-muted"}),endpoint:"/posts/add_image_post"}),o(Yt,{}),o(ea,{setStateAccessToken:a,setStateRefreshToken:n})]}),v("div",{className:t?"d-none":"d-flex justify-content-around",children:[o(Zt,{}),o(Qt,{})]})]})}),ca=r.exports.memo(function(){const[t,a]=r.exports.useState("");return o(re,{expand:"md",style:{position:"sticky",top:0,background:"white"},children:v(St,{children:[o(st,{}),o(re.Toggle,{"aria-controls":"basic-navbar-nav",className:"border-0 mt-2"}),v(re.Collapse,{id:"basic-navbar-nav",children:[o(_t,{find:t,setFind:a}),o(ta,{})]})]})})});export{ca as default};
