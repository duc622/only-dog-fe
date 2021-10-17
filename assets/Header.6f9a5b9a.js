import{R as e,r as a}from"./vendor.48f3248e.js";import{F as f,f as x}from"./index.3d940bd3.js";function v({error:t}){return t?e.createElement("div",{className:"alert alert-danger",role:"alert"},t):e.createElement(e.Fragment,null)}function y(){const{fire:t}=a.exports.useContext(f),[l,n]=a.exports.useState(""),[o,i]=a.exports.useState(""),[m,d]=a.exports.useState(""),[N,c]=a.exports.useState(!1),u=a.exports.useRef(null),b=()=>{console.log("hello")},g=async s=>{s.preventDefault();try{c(!0),await t.auth().signInWithEmailAndPassword(l,o),c(!1),u.current.click()}catch(p){n(""),i(""),d(p.message),c(!1)}};return e.createElement("div",null,e.createElement("button",{type:"button",className:"btn btn-primary","data-bs-toggle":"modal","data-bs-target":"#modalLogin",ref:u},"Login"),e.createElement("div",{className:"modal fade",id:"modalLogin",tabIndex:-1,"aria-labelledby":"modalLoginLabel","aria-hidden":"true"},e.createElement("div",{className:"modal-dialog"},e.createElement("div",{className:"modal-content"},e.createElement("div",{className:"modal-header"},e.createElement("h5",{className:"modal-title",id:"modalLoginLabel"},"Login"),e.createElement("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})),e.createElement("div",{className:"modal-body"},e.createElement("form",{onSubmit:g,method:"POST",className:"py-3"},e.createElement("div",{className:"mb-3"},e.createElement("label",{htmlFor:"email",className:"form-label"},"Email"),e.createElement("input",{type:"email",className:"form-control",id:"email",placeholder:"Email@example.com",onChange:({target:s})=>n(s.value),value:l,required:!0,maxLength:"50"})),e.createElement("div",{className:"mb-3"},e.createElement("label",{htmlFor:"password",className:"form-label"},"Password"),e.createElement("input",{type:"password",className:"form-control",id:"password",placeholder:"Password (min leangth = 6)",onChange:({target:s})=>i(s.value),value:o,required:!0,minLength:"6",maxLength:"50"})),e.createElement("button",{type:"submit",className:"btn btn-primary me-2"},"Login"),e.createElement("button",{className:"btn btn-outline-primary",onClick:()=>b()},"Login with Google ",e.createElement("i",{className:"fab fa-google"}))),e.createElement(v,{error:m}),N&&e.createElement("div",{className:"text-center"},e.createElement("div",{className:"spinner-border text-dark ",role:"status"})))))))}async function w(t){return(await x.firestore().collection("users").where("name","==",t.toLowerCase()).get()).docs.length>0}function L(){const{fire:t}=a.exports.useContext(f),[l,n]=a.exports.useState(""),[o,i]=a.exports.useState(""),[m,d]=a.exports.useState(""),[N,c]=a.exports.useState(""),[u,b]=a.exports.useState(""),[g,s]=a.exports.useState(!1),p=a.exports.useRef(null),h=async r=>{if(r.preventDefault(),s(!0),await w(l))n(""),b("That name is already taken, please try another."),s(!1);else try{const E=await t.auth().createUserWithEmailAndPassword(o,m);await E.user.updateProfile({displayName:l}),await t.firestore().collection("users").add({userId:E.user.uid,name:l.toLowerCase(),email:o.toLowerCase(),following:["2"],followers:[],dateCreated:Date.now()}),p.current.click(),s(!1)}catch(E){i(""),d(""),c(""),b(E.message),s(!1)}};return e.createElement("div",null,e.createElement("button",{type:"button",className:"btn btn-primary","data-bs-toggle":"modal","data-bs-target":"#modalRegister",ref:p},"Register"),e.createElement("div",{className:"modal fade",id:"modalRegister",tabIndex:-1,"aria-labelledby":"modalRegisterLabel","aria-hidden":"true"},e.createElement("div",{className:"modal-dialog"},e.createElement("div",{className:"modal-content"},e.createElement("div",{className:"modal-header"},e.createElement("h5",{className:"modal-title",id:"modalRegisterLabel"},"Register"),e.createElement("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})),e.createElement("div",{className:"modal-body"},e.createElement("form",{onSubmit:h,method:"POST",className:"py-3"},e.createElement("div",{className:"mb-3"},e.createElement("label",{htmlFor:"name",className:"form-label"},"Name"),e.createElement("input",{type:"text",className:"form-control",id:"name",placeholder:"Anri Okita",onChange:({target:r})=>n(r.value),value:l,required:!0,maxLength:"50"})),e.createElement("div",{className:"mb-3"},e.createElement("label",{htmlFor:"email",className:"form-label"},"Email"),e.createElement("input",{type:"email",className:"form-control",id:"email",placeholder:"Email@example.com",onChange:({target:r})=>i(r.value),value:o,required:!0,maxLength:"50"})),e.createElement("div",{className:"mb-3"},e.createElement("label",{htmlFor:"password",className:"form-label"},"Password"),e.createElement("input",{type:"password",className:"form-control",id:"password",placeholder:"Password (min leangth = 6, max length = 50)",onChange:({target:r})=>d(r.value),value:m,required:!0,minLength:"6",maxLength:"50"})),e.createElement("div",{className:"mb-3"},e.createElement("label",{htmlFor:"confirmPassword",className:"form-label"},"Confirm Password"),e.createElement("input",{type:"password",className:"form-control",id:"confirmPassword",placeholder:"Confirm Password",onChange:({target:r})=>c(r.value),value:m,pattern:m})),e.createElement("button",{type:"submit",className:"btn btn-primary me-2"},"Register")),e.createElement(v,{error:u}),g&&e.createElement("div",{className:"text-center"},e.createElement("div",{className:"spinner-border text-dark ",role:"status"})))))))}var C="/assets/logo.7e8cfe4c.svg";function P(){return e.createElement("div",null,e.createElement("div",null,e.createElement("button",{type:"button",className:"btn btn-primary","data-bs-toggle":"modal","data-bs-target":"#exampleModal3"},"Add Post"),e.createElement("div",{className:"modal fade",id:"exampleModal3",tabIndex:-1,"aria-labelledby":"exampleModal3Label","aria-hidden":"true"},e.createElement("div",{className:"modal-dialog"},e.createElement("div",{className:"modal-content"},e.createElement("div",{className:"modal-header"},e.createElement("h5",{className:"modal-title",id:"exampleModal3Label"},"Post"),e.createElement("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})),e.createElement("div",{className:"modal-body"},e.createElement("form",null,e.createElement("div",{className:"form-group mb-2"},e.createElement("input",{type:"file",className:"form-control-file",id:"exampleFormControlFile1"}))),e.createElement(v,null)),e.createElement("div",{className:"modal-footer"},e.createElement("button",{type:"button",className:"btn btn-secondary","data-bs-dismiss":"modal"},"Close"),e.createElement("button",{type:"button",className:"btn btn-primary"},"Add Post")))))))}function k({setPage:t}){const[l,n]=a.exports.useState("logout");return e.createElement("nav",{style:{position:"sticky",top:0,zIndex:1051},className:"navbar navbar-expand-lg navbar-light"},e.createElement("div",{className:"container-fluid"},e.createElement("a",{className:"navbar-brand",href:""},e.createElement("img",{src:C,alt:"Logo OnlyDog",width:100,onClick:()=>t("dashboard")})),e.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},e.createElement("span",{className:"navbar-toggler-icon"})),e.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},e.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"}),l==="logout"?e.createElement(e.Fragment,null,e.createElement("div",{className:"nav-item me-2 mt-2"},e.createElement(y,null)),e.createElement("div",{className:"nav-item me-2 mt-2"},e.createElement(L,null))):e.createElement(e.Fragment,null,e.createElement("div",{className:"nav-item me-2 mt-2"},e.createElement(P,null)),e.createElement("div",{className:"nav-item me-2 mt-2",onClick:()=>t("profile")},"Profile"),e.createElement("div",{className:"nav-item me-2 mt-2",onClick:()=>n("logout")},"Logout")))))}export{k as default};
