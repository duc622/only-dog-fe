import{r as l,L as w}from"./vendor.459d2761.js";import{P as T,B as M}from"./ButtonFollow.1f770bc2.js";import{t as A}from"./toTop.4c4a9307.js";import{a as c,j as a,b as x,A as S,F as Y}from"./index.1f0e12e8.js";import{s as C,f as B}from"./commonFunctions.3dd96a22.js";import{G as k}from"./iconBase.d6578262.js";import{g as j}from"./grey.19af5ccb.js";import{S as H}from"./SpinnerBootstrap.d2878db3.js";var F=l.exports.memo(function({userName:s,userId:t}){const[e,o]=l.exports.useState(!1);return c("div",{className:"col-4 col-md-2 text-center mb-3",children:[a(w,{to:"/profile?userId="+t,onClick:()=>A(),children:a("img",{src:"https://picsum.photos/1000",alt:"",width:"60",height:"60",role:"button",style:{objectFit:"cover",userSelect:"none"},onLoad:()=>o(!0),className:e?"rounded-circle mb-2":"d-none"})}),!e&&a(T,{rounded:!0,width:60,height:60}),a("br",{}),a("small",{children:s}),a("br",{}),a(M,{})]})});const O=!0,R=[{_id:"3 fl",userName:"3 fl",email:"duc@mail.com",pathAvatar:"images/dog.jpg",posts:[],followers:["6172afc8e1783daaf7e5a3a8","6172afc8e1783daaf7e5a3a8","6172afc8e1783daaf7e5a3a8"],following:[],createdAt:"2021-10-22T12:34:16.940Z",__v:0},{_id:"1 fl",userName:"1 fl",email:"tai@mail.com",pathAvatar:"images/dog.jpg",posts:["6172afc8e1783daaf7e5a3a8","6172af345345fgfdga3a8","fsdfsdfsdf8e1783daaf7e5a3a8"],followers:["6172afc8e1783daaf7e5a3a8"],following:[],createdAt:"2021-10-22T12:41:52.662Z",__v:0},{_id:"2 fl",userName:"2 fl",email:"tai@mail.com",pathAvatar:"images/dog.jpg",posts:[],followers:["6172afc8e1783daaf7e5a3a8","6172afc8e1783daaf7e5a3a8"],following:[],createdAt:"2021-10-22T12:41:52.662Z",__v:0}];var z={success:O,users:R};const U=C(z.users);var V=l.exports.memo(function({openModal:s,setOpenModal:t}){return a("div",{className:"container mt-4",children:a("div",{className:"row",children:U.map(e=>a(F,{userName:e.userName,userId:e._id,openModal:s,setOpenModal:t},e._id))})})});function D(r){return k({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M885.9 490.3c3.6-12 5.4-24.4 5.4-37 0-28.3-9.3-55.5-26.1-77.7 3.6-12 5.4-24.4 5.4-37 0-28.3-9.3-55.5-26.1-77.7 3.6-12 5.4-24.4 5.4-37 0-51.6-30.7-98.1-78.3-118.4a66.1 66.1 0 0 0-26.5-5.4H144c-17.7 0-32 14.3-32 32v364c0 17.7 14.3 32 32 32h129.3l85.8 310.8C372.9 889 418.9 924 470.9 924c29.7 0 57.4-11.8 77.9-33.4 20.5-21.5 31-49.7 29.5-79.4l-6-122.9h239.9c12.1 0 23.9-3.2 34.3-9.3 40.4-23.5 65.5-66.1 65.5-111 0-28.3-9.3-55.5-26.1-77.7zM184 456V172h81v284h-81zm627.2 160.4H496.8l9.6 198.4c.6 11.9-4.7 23.1-14.6 30.5-6.1 4.5-13.6 6.8-21.1 6.7a44.28 44.28 0 0 1-42.2-32.3L329 459.2V172h415.4a56.85 56.85 0 0 1 33.6 51.8c0 9.7-2.3 18.9-6.9 27.3l-13.9 25.4 21.9 19a56.76 56.76 0 0 1 19.6 43c0 9.7-2.3 18.9-6.9 27.3l-13.9 25.4 21.9 19a56.76 56.76 0 0 1 19.6 43c0 9.7-2.3 18.9-6.9 27.3l-14 25.5 21.9 19a56.76 56.76 0 0 1 19.6 43c0 19.1-11 37.5-28.8 48.4z"}}]})(r)}function y(r){return k({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M885.9 533.7c16.8-22.2 26.1-49.4 26.1-77.7 0-44.9-25.1-87.4-65.5-111.1a67.67 67.67 0 0 0-34.3-9.3H572.4l6-122.9c1.4-29.7-9.1-57.9-29.5-79.4A106.62 106.62 0 0 0 471 99.9c-52 0-98 35-111.8 85.1l-85.9 311H144c-17.7 0-32 14.3-32 32v364c0 17.7 14.3 32 32 32h601.3c9.2 0 18.2-1.8 26.5-5.4 47.6-20.3 78.3-66.8 78.3-118.4 0-12.6-1.8-25-5.4-37 16.8-22.2 26.1-49.4 26.1-77.7 0-12.6-1.8-25-5.4-37 16.8-22.2 26.1-49.4 26.1-77.7-.2-12.6-2-25.1-5.6-37.1zM184 852V568h81v284h-81zm636.4-353l-21.9 19 13.9 25.4a56.2 56.2 0 0 1 6.9 27.3c0 16.5-7.2 32.2-19.6 43l-21.9 19 13.9 25.4a56.2 56.2 0 0 1 6.9 27.3c0 16.5-7.2 32.2-19.6 43l-21.9 19 13.9 25.4a56.2 56.2 0 0 1 6.9 27.3c0 22.4-13.2 42.6-33.6 51.8H329V564.8l99.5-360.5a44.1 44.1 0 0 1 42.2-32.3c7.6 0 15.1 2.2 21.1 6.7 9.9 7.4 15.2 18.6 14.6 30.5l-9.6 198.4h314.4C829 418.5 840 436.9 840 456c0 16.5-7.2 32.1-19.6 43z"}}]})(r)}var $=l.exports.memo(function({like:s,setLike:t,dislike:e,setDislike:o,numberOfDislike:i}){const{setShowModalLogin:n}=l.exports.useContext(x),{stateAccessToken:d}=l.exports.useContext(S);return c("div",{onClick:()=>{d?(o(!e),s&&t(!s),console.log("set dislike")):n(!0)},children:[a("small",{children:i+e}),a(D,{size:"25",role:"button",className:e?"d-none":"mt-2"}),a(D,{size:"25",role:"button",className:e?"mt-2 text-danger":"d-none"})]})}),G=l.exports.memo(function({like:s,setLike:t,dislike:e,setDislike:o,numberOfLike:i}){const{setShowModalLogin:n}=l.exports.useContext(x),{stateAccessToken:d}=l.exports.useContext(S),h=()=>{d?(t(!s),e&&o(!e),console.log("set like")):n(!0)};return c("div",{onClick:()=>h(),children:[a("small",{children:i+s}),a(y,{size:"25",role:"button",className:s?"d-none":"",style:{marginBottom:10}}),a(y,{size:"25",role:"button",className:s?"text-primary":"d-none",style:{marginBottom:10}})]})}),W=l.exports.memo(function(){const[s,t]=l.exports.useState(!1),[e,o]=l.exports.useState(!1),[i,n]=l.exports.useState(0),[d,h]=l.exports.useState(0);return c("div",{className:"d-flex justify-content-around m-2",style:{userSelect:"none"},children:[a(G,{like:s,setLike:t,dislike:e,setDislike:o,numberOfLike:i}),a($,{like:s,setLike:t,dislike:e,setDislike:o,numberOfDislike:d})]})}),q=l.exports.memo(function({dataPost:s}){const t=s.user,[e,o]=l.exports.useState(!1);return c("div",{className:"d-flex",children:[a(w,{to:"/profile?userId="+t._id,onClick:()=>A(),children:a("img",{src:t.pathAvatar,alt:"Avatar",width:"40",height:"40",role:"button",style:{objectFit:"cover",userSelect:"none"},onLoad:()=>o(!0),className:e?"rounded-circle me-1 my-1":"d-none"})}),!e&&a("div",{className:"me-1 my-1",children:a(T,{rounded:!0,width:40,height:40})}),c("div",{children:[a("b",{children:a("small",{children:t.userName})}),a("br",{}),a("small",{className:"text-muted",children:B(s.createdAt)})]})]})}),J=l.exports.memo(function({dataPost:s}){const[t,e]=l.exports.useState(!1);return c(Y,{children:[a("img",{width:"100%",height:"300",src:s.pathImage,alt:"Image Post",style:{objectFit:"cover",userSelect:"none"},onLoad:()=>e(!0),className:t?"":"d-none"}),!t&&a("img",{src:j,height:300,width:"100%"})]})}),K=l.exports.memo(function({dataPost:s}){return c("div",{className:"col-sm-6 col-lg-4 mb-4",children:[a(q,{dataPost:s}),a(J,{dataPost:s}),a(W,{dataPost:s})]})}),m=function(r,s){return m=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])},m(r,s)};function Q(r,s){m(r,s);function t(){this.constructor=r}r.prototype=s===null?Object.create(s):(t.prototype=s.prototype,new t)}var f=function(){return f=Object.assign||function(s){for(var t,e=1,o=arguments.length;e<o;e++){t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=t[i])}return s},f.apply(this,arguments)};function X(r,s,t,e){var o,i=!1,n=0;function d(){o&&clearTimeout(o)}function h(){d(),i=!0}typeof s!="boolean"&&(e=t,t=s,s=void 0);function g(){var b=this,_=Date.now()-n,E=arguments;if(i)return;function u(){n=Date.now(),t.apply(b,E)}function I(){o=void 0}e&&!o&&u(),d(),e===void 0&&_>r?u():s!==!0&&(o=setTimeout(e?I:u,e===void 0?r-_:r))}return g.cancel=h,g}var p={Pixel:"Pixel",Percent:"Percent"},N={unit:p.Percent,value:.8};function L(r){return typeof r=="number"?{unit:p.Percent,value:r*100}:typeof r=="string"?r.match(/^(\d*(\.\d+)?)px$/)?{unit:p.Pixel,value:parseFloat(r)}:r.match(/^(\d*(\.\d+)?)%$/)?{unit:p.Percent,value:parseFloat(r)}:(console.warn('scrollThreshold format is invalid. Valid formats: "120px", "50%"...'),N):(console.warn("scrollThreshold should be string or number"),N)}var ee=function(r){Q(s,r);function s(t){var e=r.call(this,t)||this;return e.lastScrollTop=0,e.actionTriggered=!1,e.startY=0,e.currentY=0,e.dragging=!1,e.maxPullDownDistance=0,e.getScrollableTarget=function(){return e.props.scrollableTarget instanceof HTMLElement?e.props.scrollableTarget:typeof e.props.scrollableTarget=="string"?document.getElementById(e.props.scrollableTarget):(e.props.scrollableTarget===null&&console.warn(`You are trying to pass scrollableTarget but it is null. This might
        happen because the element may not have been added to DOM yet.
        See https://github.com/ankeetmaini/react-infinite-scroll-component/issues/59 for more info.
      `),null)},e.onStart=function(o){e.lastScrollTop||(e.dragging=!0,o instanceof MouseEvent?e.startY=o.pageY:o instanceof TouchEvent&&(e.startY=o.touches[0].pageY),e.currentY=e.startY,e._infScroll&&(e._infScroll.style.willChange="transform",e._infScroll.style.transition="transform 0.2s cubic-bezier(0,0,0.31,1)"))},e.onMove=function(o){!e.dragging||(o instanceof MouseEvent?e.currentY=o.pageY:o instanceof TouchEvent&&(e.currentY=o.touches[0].pageY),!(e.currentY<e.startY)&&(e.currentY-e.startY>=Number(e.props.pullDownToRefreshThreshold)&&e.setState({pullToRefreshThresholdBreached:!0}),!(e.currentY-e.startY>e.maxPullDownDistance*1.5)&&e._infScroll&&(e._infScroll.style.overflow="visible",e._infScroll.style.transform="translate3d(0px, "+(e.currentY-e.startY)+"px, 0px)")))},e.onEnd=function(){e.startY=0,e.currentY=0,e.dragging=!1,e.state.pullToRefreshThresholdBreached&&(e.props.refreshFunction&&e.props.refreshFunction(),e.setState({pullToRefreshThresholdBreached:!1})),requestAnimationFrame(function(){e._infScroll&&(e._infScroll.style.overflow="auto",e._infScroll.style.transform="none",e._infScroll.style.willChange="unset")})},e.onScrollListener=function(o){typeof e.props.onScroll=="function"&&setTimeout(function(){return e.props.onScroll&&e.props.onScroll(o)},0);var i=e.props.height||e._scrollableNode?o.target:document.documentElement.scrollTop?document.documentElement:document.body;if(!e.actionTriggered){var n=e.props.inverse?e.isElementAtTop(i,e.props.scrollThreshold):e.isElementAtBottom(i,e.props.scrollThreshold);n&&e.props.hasMore&&(e.actionTriggered=!0,e.setState({showLoader:!0}),e.props.next&&e.props.next()),e.lastScrollTop=i.scrollTop}},e.state={showLoader:!1,pullToRefreshThresholdBreached:!1,prevDataLength:t.dataLength},e.throttledOnScrollListener=X(150,e.onScrollListener).bind(e),e.onStart=e.onStart.bind(e),e.onMove=e.onMove.bind(e),e.onEnd=e.onEnd.bind(e),e}return s.prototype.componentDidMount=function(){if(typeof this.props.dataLength=="undefined")throw new Error('mandatory prop "dataLength" is missing. The prop is needed when loading more content. Check README.md for usage');if(this._scrollableNode=this.getScrollableTarget(),this.el=this.props.height?this._infScroll:this._scrollableNode||window,this.el&&this.el.addEventListener("scroll",this.throttledOnScrollListener),typeof this.props.initialScrollY=="number"&&this.el&&this.el instanceof HTMLElement&&this.el.scrollHeight>this.props.initialScrollY&&this.el.scrollTo(0,this.props.initialScrollY),this.props.pullDownToRefresh&&this.el&&(this.el.addEventListener("touchstart",this.onStart),this.el.addEventListener("touchmove",this.onMove),this.el.addEventListener("touchend",this.onEnd),this.el.addEventListener("mousedown",this.onStart),this.el.addEventListener("mousemove",this.onMove),this.el.addEventListener("mouseup",this.onEnd),this.maxPullDownDistance=this._pullDown&&this._pullDown.firstChild&&this._pullDown.firstChild.getBoundingClientRect().height||0,this.forceUpdate(),typeof this.props.refreshFunction!="function"))throw new Error(`Mandatory prop "refreshFunction" missing.
          Pull Down To Refresh functionality will not work
          as expected. Check README.md for usage'`)},s.prototype.componentWillUnmount=function(){this.el&&(this.el.removeEventListener("scroll",this.throttledOnScrollListener),this.props.pullDownToRefresh&&(this.el.removeEventListener("touchstart",this.onStart),this.el.removeEventListener("touchmove",this.onMove),this.el.removeEventListener("touchend",this.onEnd),this.el.removeEventListener("mousedown",this.onStart),this.el.removeEventListener("mousemove",this.onMove),this.el.removeEventListener("mouseup",this.onEnd)))},s.prototype.componentDidUpdate=function(t){this.props.dataLength!==t.dataLength&&(this.actionTriggered=!1,this.setState({showLoader:!1}))},s.getDerivedStateFromProps=function(t,e){var o=t.dataLength!==e.prevDataLength;return o?f(f({},e),{prevDataLength:t.dataLength}):null},s.prototype.isElementAtTop=function(t,e){e===void 0&&(e=.8);var o=t===document.body||t===document.documentElement?window.screen.availHeight:t.clientHeight,i=L(e);return i.unit===p.Pixel?t.scrollTop<=i.value+o-t.scrollHeight+1:t.scrollTop<=i.value/100+o-t.scrollHeight+1},s.prototype.isElementAtBottom=function(t,e){e===void 0&&(e=.8);var o=t===document.body||t===document.documentElement?window.screen.availHeight:t.clientHeight,i=L(e);return i.unit===p.Pixel?t.scrollTop+o>=t.scrollHeight-i.value:t.scrollTop+o>=i.value/100*t.scrollHeight},s.prototype.render=function(){var t=this,e=f({height:this.props.height||"auto",overflow:"auto",WebkitOverflowScrolling:"touch"},this.props.style),o=this.props.hasChildren||!!(this.props.children&&this.props.children instanceof Array&&this.props.children.length),i=this.props.pullDownToRefresh&&this.props.height?{overflow:"auto"}:{};return a("div",{style:i,className:"infinite-scroll-component__outerdiv",children:c("div",{className:"infinite-scroll-component "+(this.props.className||""),ref:function(n){return t._infScroll=n},style:e,children:[this.props.pullDownToRefresh&&a("div",{style:{position:"relative"},ref:function(n){return t._pullDown=n},children:a("div",{style:{position:"absolute",left:0,right:0,top:-1*this.maxPullDownDistance},children:this.state.pullToRefreshThresholdBreached?this.props.releaseToRefreshContent:this.props.pullDownToRefreshContent})}),this.props.children,!this.state.showLoader&&!o&&this.props.hasMore&&this.props.loader,this.state.showLoader&&this.props.hasMore&&this.props.loader,!this.props.hasMore&&this.props.endMessage]})})},s}(l.exports.Component),te=ee;const se=!0,oe=[{_id:"sdfxcvfgtg45345345345345",user:{_id:"6172afc8e1783daaf7e5a3a8",userName:"Phan Duc",email:"duc@mail.com",pathAvatar:"https://picsum.photos/1000",posts:[],followers:[],following:[],createdAt:"2021-10-22T12:34:16.940Z",__v:0},pathImage:"https://picsum.photos/1000",likes:[],dislikes:[],createdAt:"2021-10-20T12:34:16.940Z"},{_id:"6169afc8e1783cccf7e5a2sd",user:{_id:"6172afc8e1783daaf7e5a3a8",userName:"Phan Duc",email:"duc@mail.com",pathAvatar:"https://picsum.photos/1000",posts:[],followers:[],following:[],createdAt:"2021-10-22T12:34:16.940Z",__v:0},pathImage:"https://picsum.photos/1000",likes:[],dislikes:[],createdAt:"2021-10-21T12:34:16.940Z"},{_id:"sdfsdsdf45345dfssdfcxvrw",user:{_id:"6172afc8e1783daaf7e5a3a8",userName:"Phan Duc",email:"duc@mail.com",pathAvatar:"https://picsum.photos/1000",posts:[],followers:[],following:[],createdAt:"2021-10-22T12:34:16.940Z",__v:0},pathImage:"https://picsum.photos/1000",likes:[],dislikes:[],createdAt:"2021-10-22T12:34:16.940Z"},{_id:"sdfsdsdf45345dfssdfcxvrw2",user:{_id:"6172afc8e1783daaf7e5a3a8",userName:"Phan Duc",email:"duc@mail.com",pathAvatar:"https://picsum.photos/1000",posts:[],followers:[],following:[],createdAt:"2021-10-22T12:34:16.940Z",__v:0},pathImage:"https://picsum.photos/1000",likes:[],dislikes:[],createdAt:"2021-10-22T12:34:16.940Z"},{_id:"sdfsdsdf45345dfssdfcxvrw3",user:{_id:"6172afc8e1783daaf7e5a3a8",userName:"Phan Duc",email:"duc@mail.com",pathAvatar:"https://picsum.photos/1000",posts:[],followers:[],following:[],createdAt:"2021-10-22T12:34:16.940Z",__v:0},pathImage:"https://picsum.photos/1000",likes:[],dislikes:[],createdAt:"2021-10-22T12:34:16.940Z"},{_id:"sdfsdsdf45345dfssdfcxvrw4",user:{_id:"6172afc8e1783daaf7e5a3a8",userName:"Phan Duc",email:"duc@mail.com",pathAvatar:"https://picsum.photos/1000",posts:[],followers:[],following:[],createdAt:"2021-10-22T12:34:16.940Z",__v:0},pathImage:"https://picsum.photos/1000",likes:[],dislikes:[],createdAt:"2021-10-22T12:34:16.940Z"},{_id:"sdfsdsdf45345dfssdfcxvrw5",user:{_id:"6172afc8e1783daaf7e5a3a8",userName:"Phan Duc",email:"duc@mail.com",pathAvatar:"https://picsum.photos/1000",posts:[],followers:[],following:[],createdAt:"2021-10-22T12:34:16.940Z",__v:0},pathImage:"https://picsum.photos/1000",likes:[],dislikes:[],createdAt:"2021-10-22T12:34:16.940Z"},{_id:"sdfsdsdf45345dfssdfcxvrw55",user:{_id:"6172afc8e1783daaf7e5a3a8",userName:"Phan Duc",email:"duc@mail.com",pathAvatar:"https://picsum.photos/1000",posts:[],followers:[],following:[],createdAt:"2021-10-22T12:34:16.940Z",__v:0},pathImage:"https://picsum.photos/1000",likes:[],dislikes:[],createdAt:"2021-10-22T12:34:16.940Z"},{_id:"sdfsdsdf45345dfssdfcxvrw555",user:{_id:"6172afc8e1783daaf7e5a3a8",userName:"Phan Duc",email:"duc@mail.com",pathAvatar:"https://picsum.photos/1000",posts:[],followers:[],following:[],createdAt:"2021-10-22T12:34:16.940Z",__v:0},pathImage:"https://picsum.photos/1000",likes:[],dislikes:[],createdAt:"2021-10-22T12:34:16.940Z"},{_id:"sdfsdsdf45345dfssdfcxvrw5555",user:{_id:"6172afc8e1783daaf7e5a3a8",userName:"Phan Duc",email:"duc@mail.com",pathAvatar:"https://picsum.photos/1000",posts:[],followers:[],following:[],createdAt:"2021-10-22T12:34:16.940Z",__v:0},pathImage:"https://picsum.photos/1000",likes:[],dislikes:[],createdAt:"2021-10-22T12:34:16.940Z"},{_id:"sdfsdsdf45345dfssdfcxvrw55555",user:{_id:"6172afc8e1783daaf7e5a3a8",userName:"Phan Duc",email:"duc@mail.com",pathAvatar:"https://picsum.photos/1000",posts:[],followers:[],following:[],createdAt:"2021-10-22T12:34:16.940Z",__v:0},pathImage:"https://picsum.photos/1000",likes:[],dislikes:[],createdAt:"2021-10-22T12:34:16.940Z"},{_id:"sdfsdsdf45345dfssdfcxvrw11",user:{_id:"6172afc8e1783daaf7e5a3a8",userName:"Phan Duc",email:"duc@mail.com",pathAvatar:"https://picsum.photos/1000",posts:[],followers:[],following:[],createdAt:"2021-10-22T12:34:16.940Z",__v:0},pathImage:"https://picsum.photos/1000",likes:[],dislikes:[],createdAt:"2021-10-22T12:34:16.940Z"},{_id:"sdfsdsdf45345dfssdfcxvrw111",user:{_id:"6172afc8e1783daaf7e5a3a8",userName:"Phan Duc",email:"duc@mail.com",pathAvatar:"https://picsum.photos/1000",posts:[],followers:[],following:[],createdAt:"2021-10-22T12:34:16.940Z",__v:0},pathImage:"https://picsum.photos/1000",likes:[],dislikes:[],createdAt:"2021-10-22T12:34:16.940Z"},{_id:"sdfsdsdf45345dfssdfcxvrw1111",user:{_id:"6172afc8e1783daaf7e5a3a8",userName:"Phan Duc",email:"duc@mail.com",pathAvatar:"https://picsum.photos/1000",posts:[],followers:[],following:[],createdAt:"2021-10-22T12:34:16.940Z",__v:0},pathImage:"https://picsum.photos/1000",likes:[],dislikes:[],createdAt:"2021-10-22T12:34:16.940Z"},{_id:"sdfsdsdf45345dfssdfcxvrw11111",user:{_id:"6172afc8e1783daaf7e5a3a8",userName:"Phan Duc",email:"duc@mail.com",pathAvatar:"https://picsum.photos/1000",posts:[],followers:[],following:[],createdAt:"2021-10-22T12:34:16.940Z",__v:0},pathImage:"https://picsum.photos/1000",likes:[],dislikes:[],createdAt:"2021-10-22T12:34:16.940Z"},{_id:"sdfsdsdf45345dfssdfcxvrw22",user:{_id:"6172afc8e1783daaf7e5a3a8",userName:"Phan Duc",email:"duc@mail.com",pathAvatar:"https://picsum.photos/1000",posts:[],followers:[],following:[],createdAt:"2021-10-22T12:34:16.940Z",__v:0},pathImage:"https://picsum.photos/1000",likes:[],dislikes:[],createdAt:"2021-10-22T12:34:16.940Z"},{_id:"sdfsdsdf45345dfssdfcxvrw222",user:{_id:"6172afc8e1783daaf7e5a3a8",userName:"Phan Duc",email:"duc@mail.com",pathAvatar:"https://picsum.photos/1000",posts:[],followers:[],following:[],createdAt:"2021-10-22T12:34:16.940Z",__v:0},pathImage:"https://picsum.photos/1000",likes:[],dislikes:[],createdAt:"2021-10-22T12:34:16.940Z"},{_id:"sdfsdsdf45345dfssdfcxvrw2222",user:{_id:"6172afc8e1783daaf7e5a3a8",userName:"Phan Duc",email:"duc@mail.com",pathAvatar:"https://picsum.photos/1000",posts:[],followers:[],following:[],createdAt:"2021-10-22T12:34:16.940Z",__v:0},pathImage:"https://picsum.photos/1000",likes:[],dislikes:[],createdAt:"2021-10-22T12:34:16.940Z"},{_id:"sdfsdsdf45345dfssdfcxvrw33",user:{_id:"6172afc8e1783daaf7e5a3a8",userName:"Phan Duc",email:"duc@mail.com",pathAvatar:"https://picsum.photos/1000",posts:[],followers:[],following:[],createdAt:"2021-10-22T12:34:16.940Z",__v:0},pathImage:"https://picsum.photos/1000",likes:[],dislikes:[],createdAt:"2021-10-22T12:34:16.940Z"},{_id:"sdfsdsdf45345dfssdfcxvrw333",user:{_id:"6172afc8e1783daaf7e5a3a8",userName:"Phan Duc",email:"duc@mail.com",pathAvatar:"https://picsum.photos/1000",posts:[],followers:[],following:[],createdAt:"2021-10-22T12:34:16.940Z",__v:0},pathImage:"https://picsum.photos/1000",likes:[],dislikes:[],createdAt:"2021-10-22T12:34:16.940Z"},{_id:"sdfsdsdDf45345dfssdfcxvrw333",user:{_id:"6172afc8e1783daaf7e5a3a8",userName:"Phan Duc",email:"duc@mail.com",pathAvatar:"https://picsum.photos/1000",posts:[],followers:[],following:[],createdAt:"2021-10-22T12:34:16.940Z",__v:0},pathImage:"https://picsum.photos/1000",likes:[],dislikes:[],createdAt:"2021-10-22T12:34:16.940Z"},{_id:"sdfsdsdf45345dfssdfcxvrw33333",user:{_id:"6172afc8e1783daaf7e5a3a8",userName:"Phan Duc",email:"duc@mail.com",pathAvatar:"https://picsum.photos/1000",posts:[],followers:[],following:[],createdAt:"2021-10-22T12:34:16.940Z",__v:0},pathImage:"https://picsum.photos/1000",likes:[],dislikes:[],createdAt:"2021-10-22T12:34:16.940Z"},{_id:"sdfsdsdf45345dfssdfcxvrw32233",user:{_id:"6172afc8e1783daaf7e5a3a8",userName:"Phan Duc",email:"duc@mail.com",pathAvatar:"https://picsum.photos/1000",posts:[],followers:[],following:[],createdAt:"2021-10-22T12:34:16.940Z",__v:0},pathImage:"https://picsum.photos/1000",likes:[],dislikes:[],createdAt:"2021-10-22T12:34:16.940Z"},{_id:"sdfsdsdf45345dfssdfcxvrw33773",user:{_id:"6172afc8e1783daaf7e5a3a8",userName:"Phan Duc",email:"duc@mail.com",pathAvatar:"https://picsum.photos/1000",posts:[],followers:[],following:[],createdAt:"2021-10-22T12:34:16.940Z",__v:0},pathImage:"https://picsum.photos/1000",likes:[],dislikes:[],createdAt:"2021-10-22T12:34:16.940Z"},{_id:"sdfsdsdf45345dfssdfcxvrw33993",user:{_id:"6172afc8e1783daaf7e5a3a8",userName:"Phan Duc",email:"duc@mail.com",pathAvatar:"https://picsum.photos/1000",posts:[],followers:[],following:[],createdAt:"2021-10-22T12:34:16.940Z",__v:0},pathImage:"https://picsum.photos/1000",likes:[],dislikes:[],createdAt:"2021-10-22T12:34:16.940Z"}];var Z={success:se,posts:oe};const v=parseInt("24"),P=Z.posts;var he=l.exports.memo(function(){const[s,t]=l.exports.useState(P.slice(0,v)),[e,o]=l.exports.useState(!0),i=()=>{if(s.length>=P.length){o(!1);return}setTimeout(()=>{t(Z.posts.slice(0,s.length+v))},700),console.log(v)};return c("div",{children:[a(V,{}),a("main",{className:"container py-5",children:a(te,{dataLength:s.length,next:()=>i(),hasMore:e,loader:a(H,{}),className:"row","data-masonry":'{"percentPosition": true }',children:s.map(n=>a(K,{dataPost:n},n._id))})})]})});export{he as default};
