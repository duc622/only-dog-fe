import{r as e}from"./vendor.c65eed6e.js";import{g as c}from"./grey.9d7e0e97.js";import{j as n,b as m,A as d,g as i}from"./index.d851137f.js";var g=e.exports.memo(function({rounded:s,width:t="100%",height:o}){return n("img",{src:c,width:t,height:o,className:s?"rounded-circle":""})}),f=e.exports.memo(function({userIdBeFollow:s}){var r;const{setShowModalLogin:t,stateObInfoUserCurrent:o}=e.exports.useContext(m);e.exports.useState(((r=o==null?void 0:o.followings)==null?void 0:r.includes(s))?"Following":"Follow"),e.exports.useState(!1);const{stateAccessToken:l}=e.exports.useContext(d);return i(l),n("div",{})});export{f as B,g as P};
