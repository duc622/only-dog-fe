import{R as e,r as a}from"./vendor.48f3248e.js";import{F as N}from"./index.3364efb1.js";function E({error:t}){return t?e.createElement("div",{className:"alert alert-danger",role:"alert"},t):e.createElement(e.Fragment,null)}function f(){const{fire:t}=a.exports.useContext(N),[n,r]=a.exports.useState(""),[c,m]=a.exports.useState(""),[d,g]=a.exports.useState(""),[i,o]=a.exports.useState(!1),b=a.exports.useRef(null),u=()=>{console.log("hello")},v=async s=>{s.preventDefault();try{o(!0),await t.auth().signInWithEmailAndPassword(n,c),o(!1),b.current.click()}catch(p){r(""),m(""),g(p.message),o(!1)}};return e.createElement("div",null,e.createElement("button",{type:"button",className:"btn btn-primary","data-bs-toggle":"modal","data-bs-target":"#modalLogin",ref:b},"Login"),e.createElement("div",{className:"modal fade",id:"modalLogin",tabIndex:-1,"aria-labelledby":"modalLoginLabel","aria-hidden":"true"},e.createElement("div",{className:"modal-dialog"},e.createElement("div",{className:"modal-content"},e.createElement("div",{className:"modal-header"},e.createElement("h5",{className:"modal-title",id:"modalLoginLabel"},"Login"),e.createElement("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})),e.createElement("div",{className:"modal-body"},e.createElement("form",{onSubmit:()=>v(),method:"POST",className:"py-3"},e.createElement("div",{className:"mb-3"},e.createElement("label",{htmlFor:"email",className:"form-label"},"Email"),e.createElement("input",{type:"email",className:"form-control",id:"email",placeholder:"Email@example.com",onChange:({target:s})=>r(s.value),value:n,required:!0,maxLength:"50"})),e.createElement("div",{className:"mb-3"},e.createElement("label",{htmlFor:"password",className:"form-label"},"Password"),e.createElement("input",{type:"password",className:"form-control",id:"password",placeholder:"Password (min leangth = 6)",onChange:({target:s})=>m(s.value),value:c,required:!0,minLength:"6",maxLength:"50"})),e.createElement("button",{type:"submit",className:"btn btn-primary me-2"},"Login"),e.createElement("button",{className:"btn btn-outline-primary",onClick:()=>u()},"Login with Google ",e.createElement("i",{className:"fab fa-google"}))),e.createElement(E,{error:d}),i&&e.createElement("div",{className:"text-center"},e.createElement("div",{className:"spinner-border text-dark ",role:"status"})))))))}function h(){a.exports.useContext(N);const[t,n]=a.exports.useState(""),[r,c]=a.exports.useState(""),[m,d]=a.exports.useState(""),[g,i]=a.exports.useState(""),[o,b]=a.exports.useState(""),[u,v]=a.exports.useState(!1),s=a.exports.useRef(null),p=async l=>{};return e.createElement("div",null,e.createElement("button",{type:"button",className:"btn btn-primary","data-bs-toggle":"modal","data-bs-target":"#modalRegister",ref:s},"Register"),e.createElement("div",{className:"modal fade",id:"modalRegister",tabIndex:-1,"aria-labelledby":"modalRegisterLabel","aria-hidden":"true"},e.createElement("div",{className:"modal-dialog"},e.createElement("div",{className:"modal-content"},e.createElement("div",{className:"modal-header"},e.createElement("h5",{className:"modal-title",id:"modalRegisterLabel"},"Register"),e.createElement("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})),e.createElement("div",{className:"modal-body"},e.createElement("form",{onSubmit:()=>p(),method:"POST",className:"py-3"},e.createElement("div",{className:"mb-3"},e.createElement("label",{htmlFor:"name",className:"form-label"},"Name"),e.createElement("input",{type:"text",className:"form-control",id:"name",placeholder:"Anri Okita",onChange:({target:l})=>n(l.value),value:t,required:!0,maxLength:"50"})),e.createElement("div",{className:"mb-3"},e.createElement("label",{htmlFor:"email",className:"form-label"},"Email"),e.createElement("input",{type:"email",className:"form-control",id:"email",placeholder:"Email@example.com",onChange:({target:l})=>c(l.value),value:r,required:!0,maxLength:"50"})),e.createElement("div",{className:"mb-3"},e.createElement("label",{htmlFor:"password",className:"form-label"},"Password"),e.createElement("input",{type:"password",className:"form-control",id:"password",placeholder:"Password (min leangth = 6, max length = 50)",onChange:({target:l})=>d(l.value),value:m,required:!0,minLength:"6",maxLength:"50"})),e.createElement("div",{className:"mb-3"},e.createElement("label",{htmlFor:"confirmPassword",className:"form-label"},"Confirm Password"),e.createElement("input",{type:"password",className:"form-control",id:"confirmPassword",placeholder:"Confirm Password",onChange:({target:l})=>i(l.value),value:m,pattern:m})),e.createElement("button",{type:"submit",className:"btn btn-primary me-2"},"Register")),e.createElement(E,{error:o}),u&&e.createElement("div",{className:"text-center"},e.createElement("div",{className:"spinner-border text-dark ",role:"status"})))))))}var x="/assets/logo.7e8cfe4c.svg";function y(){return e.createElement("div",null,e.createElement("div",null,e.createElement("button",{type:"button",className:"btn btn-primary","data-bs-toggle":"modal","data-bs-target":"#exampleModal3"},"Add Post"),e.createElement("div",{className:"modal fade",id:"exampleModal3",tabIndex:-1,"aria-labelledby":"exampleModal3Label","aria-hidden":"true"},e.createElement("div",{className:"modal-dialog"},e.createElement("div",{className:"modal-content"},e.createElement("div",{className:"modal-header"},e.createElement("h5",{className:"modal-title",id:"exampleModal3Label"},"Post"),e.createElement("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})),e.createElement("div",{className:"modal-body"},e.createElement("form",null,e.createElement("div",{className:"form-group mb-2"},e.createElement("input",{type:"file",className:"form-control-file",id:"exampleFormControlFile1"}))),e.createElement(E,null)),e.createElement("div",{className:"modal-footer"},e.createElement("button",{type:"button",className:"btn btn-secondary","data-bs-dismiss":"modal"},"Close"),e.createElement("button",{type:"button",className:"btn btn-primary"},"Add Post")))))))}function C({setPage:t}){const[n,r]=a.exports.useState("logout");return e.createElement("nav",{style:{position:"sticky",top:0,zIndex:1051},className:"navbar navbar-expand-lg navbar-light"},e.createElement("div",{className:"container-fluid"},e.createElement("a",{className:"navbar-brand",href:""},e.createElement("img",{src:x,alt:"Logo OnlyDog",width:100,onClick:()=>t("dashboard")})),e.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},e.createElement("span",{className:"navbar-toggler-icon"})),e.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},e.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"}),n==="logout"?e.createElement(e.Fragment,null,e.createElement("div",{className:"nav-item me-2 mt-2"},e.createElement(f,null)),e.createElement("div",{className:"nav-item me-2 mt-2"},e.createElement(h,null))):e.createElement(e.Fragment,null,e.createElement("div",{className:"nav-item me-2 mt-2"},e.createElement(y,null)),e.createElement("div",{className:"nav-item me-2 mt-2",onClick:()=>t("profile")},"Profile"),e.createElement("div",{className:"nav-item me-2 mt-2",onClick:()=>r("logout")},"Logout")))))}export{C as default};
