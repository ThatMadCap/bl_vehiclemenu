var ct=Object.defineProperty;var ut=(e,t,n)=>t in e?ct(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var be=(e,t,n)=>(ut(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))l(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&l(r)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function O(){}const at=e=>e;function ft(e,t){for(const n in t)e[n]=t[n];return e}function Je(e){return e()}function Ie(){return Object.create(null)}function I(e){e.forEach(Je)}function Oe(e){return typeof e=="function"}function j(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function dt(e){return Object.keys(e).length===0}function Qe(e,...t){if(e==null){for(const l of t)l(void 0);return O}const n=e.subscribe(...t);return n.unsubscribe?()=>n.unsubscribe():n}function Me(e){let t;return Qe(e,n=>t=n)(),t}function ke(e,t,n){e.$$.on_destroy.push(Qe(t,n))}function pt(e,t,n,l){if(e){const i=et(e,t,n,l);return e[0](i)}}function et(e,t,n,l){return e[1]&&l?ft(n.ctx.slice(),e[1](l(t))):n.ctx}function ht(e,t,n,l){if(e[2]&&l){const i=e[2](l(n));if(t.dirty===void 0)return i;if(typeof i=="object"){const o=[],r=Math.max(t.dirty.length,i.length);for(let s=0;s<r;s+=1)o[s]=t.dirty[s]|i[s];return o}return t.dirty|i}return t.dirty}function _t(e,t,n,l,i,o){if(i){const r=et(t,n,l,o);e.p(r,i)}}function mt(e){if(e.ctx.length>32){const t=[],n=e.ctx.length/32;for(let l=0;l<n;l++)t[l]=-1;return t}return-1}function gt(e,t,n){return e.set(n),t}const tt=typeof window<"u";let vt=tt?()=>window.performance.now():()=>Date.now(),Re=tt?e=>requestAnimationFrame(e):O;const Z=new Set;function nt(e){Z.forEach(t=>{t.c(e)||(Z.delete(t),t.f())}),Z.size!==0&&Re(nt)}function bt(e){let t;return Z.size===0&&Re(nt),{promise:new Promise(n=>{Z.add(t={c:e,f:n})}),abort(){Z.delete(t)}}}function b(e,t){e.appendChild(t)}function lt(e){if(!e)return document;const t=e.getRootNode?e.getRootNode():e.ownerDocument;return t&&t.host?t:e.ownerDocument}function wt(e){const t=y("style");return t.textContent="/* empty */",yt(lt(e),t),t.sheet}function yt(e,t){return b(e.head||e,t),t.sheet}function E(e,t,n){e.insertBefore(t,n||null)}function $(e){e.parentNode&&e.parentNode.removeChild(e)}function ae(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function y(e){return document.createElement(e)}function ne(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function q(e){return document.createTextNode(e)}function R(){return q(" ")}function _e(){return q("")}function M(e,t,n,l){return e.addEventListener(t,n,l),()=>e.removeEventListener(t,n,l)}function d(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function kt(e){return e===""?null:+e}function $t(e){return Array.from(e.childNodes)}function re(e,t){t=""+t,e.data!==t&&(e.data=t)}function fe(e,t){e.value=t??""}function C(e,t,n,l){n==null?e.style.removeProperty(t):e.style.setProperty(t,n,l?"important":"")}function it(e,t,{bubbles:n=!1,cancelable:l=!1}={}){return new CustomEvent(e,{detail:t,bubbles:n,cancelable:l})}const de=new Map;let pe=0;function Et(e){let t=5381,n=e.length;for(;n--;)t=(t<<5)-t^e.charCodeAt(n);return t>>>0}function Nt(e,t){const n={stylesheet:wt(t),rules:{}};return de.set(e,n),n}function Ae(e,t,n,l,i,o,r,s=0){const c=16.666/l;let u=`{
`;for(let S=0;S<=1;S+=c){const h=t+(n-t)*o(S);u+=S*100+`%{${r(h,1-h)}}
`}const _=u+`100% {${r(n,1-n)}}
}`,f=`__svelte_${Et(_)}_${s}`,a=lt(e),{stylesheet:p,rules:m}=de.get(a)||Nt(a,e);m[f]||(m[f]=!0,p.insertRule(`@keyframes ${f} ${_}`,p.cssRules.length));const v=e.style.animation||"";return e.style.animation=`${v?`${v}, `:""}${f} ${l}ms linear ${i}ms 1 both`,pe+=1,f}function Ot(e,t){const n=(e.style.animation||"").split(", "),l=n.filter(t?o=>o.indexOf(t)<0:o=>o.indexOf("__svelte")===-1),i=n.length-l.length;i&&(e.style.animation=l.join(", "),pe-=i,pe||Mt())}function Mt(){Re(()=>{pe||(de.forEach(e=>{const{ownerNode:t}=e.stylesheet;t&&$(t)}),de.clear())})}let oe;function ie(e){oe=e}function Se(){if(!oe)throw new Error("Function called outside component initialization");return oe}function Ce(e){Se().$$.on_mount.push(e)}function Rt(e){Se().$$.on_destroy.push(e)}function St(){const e=Se();return(t,n,{cancelable:l=!1}={})=>{const i=e.$$.callbacks[t];if(i){const o=it(t,n,{cancelable:l});return i.slice().forEach(r=>{r.call(e,o)}),!o.defaultPrevented}return!0}}const K=[],Te=[];let X=[];const Pe=[],Ct=Promise.resolve();let $e=!1;function Dt(){$e||($e=!0,Ct.then(ot))}function z(e){X.push(e)}const we=new Set;let F=0;function ot(){if(F!==0)return;const e=oe;do{try{for(;F<K.length;){const t=K[F];F++,ie(t),Lt(t.$$)}}catch(t){throw K.length=0,F=0,t}for(ie(null),K.length=0,F=0;Te.length;)Te.pop()();for(let t=0;t<X.length;t+=1){const n=X[t];we.has(n)||(we.add(n),n())}X.length=0}while(K.length);for(;Pe.length;)Pe.pop()();$e=!1,we.clear(),ie(e)}function Lt(e){if(e.fragment!==null){e.update(),I(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(z)}}function It(e){const t=[],n=[];X.forEach(l=>e.indexOf(l)===-1?t.push(l):n.push(l)),n.forEach(l=>l()),X=t}let le;function At(){return le||(le=Promise.resolve(),le.then(()=>{le=null})),le}function ye(e,t,n){e.dispatchEvent(it(`${t?"intro":"outro"}${n}`))}const ue=new Set;let T;function J(){T={r:0,c:[],p:T}}function Q(){T.r||I(T.c),T=T.p}function k(e,t){e&&e.i&&(ue.delete(e),e.i(t))}function N(e,t,n,l){if(e&&e.o){if(ue.has(e))return;ue.add(e),T.c.push(()=>{ue.delete(e),l&&(n&&e.d(1),l())}),e.o(t)}else l&&l()}const Tt={duration:0};function Y(e,t,n,l){let o=t(e,n,{direction:"both"}),r=l?0:1,s=null,c=null,u=null,_;function f(){u&&Ot(e,u)}function a(m,v){const S=m.b-r;return v*=Math.abs(S),{a:r,b:m.b,d:S,duration:v,start:m.start,end:m.start+v,group:m.group}}function p(m){const{delay:v=0,duration:S=300,easing:h=at,tick:w=O,css:g}=o||Tt,A={start:vt()+v,b:m};m||(A.group=T,T.r+=1),"inert"in e&&(m?_!==void 0&&(e.inert=_):(_=e.inert,e.inert=!0)),s||c?c=A:(g&&(f(),u=Ae(e,r,m,S,v,h,g)),m&&w(0,1),s=a(A,S),z(()=>ye(e,m,"start")),bt(se=>{if(c&&se>c.start&&(s=a(c,S),c=null,ye(e,s.b,"start"),g&&(f(),u=Ae(e,r,s.b,s.duration,0,h,o.css))),s){if(se>=s.end)w(r=s.b,1-r),ye(e,s.b,"end"),c||(s.b?f():--s.group.r||I(s.group.c)),s=null;else if(se>=s.start){const st=se-s.start;r=s.a+s.d*h(st/s.duration),w(r,1-r)}}return!!(s||c)}))}return{run(m){Oe(o)?At().then(()=>{o=o({direction:m?"in":"out"}),p(m)}):p(m)},end(){f(),s=c=null}}}function B(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function U(e){e&&e.c()}function H(e,t,n){const{fragment:l,after_update:i}=e.$$;l&&l.m(t,n),z(()=>{const o=e.$$.on_mount.map(Je).filter(Oe);e.$$.on_destroy?e.$$.on_destroy.push(...o):I(o),e.$$.on_mount=[]}),i.forEach(z)}function V(e,t){const n=e.$$;n.fragment!==null&&(It(n.after_update),I(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Pt(e,t){e.$$.dirty[0]===-1&&(K.push(e),Dt(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function ee(e,t,n,l,i,o,r,s=[-1]){const c=oe;ie(e);const u=e.$$={fragment:null,ctx:[],props:o,update:O,not_equal:i,bound:Ie(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(c?c.$$.context:[])),callbacks:Ie(),dirty:s,skip_bound:!1,root:t.target||c.$$.root};r&&r(u.root);let _=!1;if(u.ctx=n?n(e,t.props||{},(f,a,...p)=>{const m=p.length?p[0]:a;return u.ctx&&i(u.ctx[f],u.ctx[f]=m)&&(!u.skip_bound&&u.bound[f]&&u.bound[f](m),_&&Pt(e,f)),a}):[],u.update(),_=!0,I(u.before_update),u.fragment=l?l(u.ctx):!1,t.target){if(t.hydrate){const f=$t(t.target);u.fragment&&u.fragment.l(f),f.forEach($)}else u.fragment&&u.fragment.c();t.intro&&k(e.$$.fragment),H(e,t.target,t.anchor),ot()}ie(c)}class te{constructor(){be(this,"$$");be(this,"$$set")}$destroy(){V(this,1),this.$destroy=O}$on(t,n){if(!Oe(n))return O;const l=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return l.push(n),()=>{const i=l.indexOf(n);i!==-1&&l.splice(i,1)}}$set(t){this.$$set&&!dt(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Bt="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Bt);const W=[];function me(e,t=O){let n;const l=new Set;function i(s){if(j(e,s)&&(e=s,n)){const c=!W.length;for(const u of l)u[1](),W.push(u,e);if(c){for(let u=0;u<W.length;u+=2)W[u][0](W[u+1]);W.length=0}}}function o(s){i(s(e))}function r(s,c=O){const u=[s,c];return l.add(u),l.size===1&&(n=t(i,o)||O),s(e),()=>{l.delete(u),l.size===0&&n&&(n(),n=null)}}return{set:i,update:o,subscribe:r}}const De=me({fallbackResourceName:"debug",allowEscapeKey:!0}),Ht=me(window.GetParentResourceName?window.GetParentResourceName():Me(De).DEBUG_RESOURCE_NAME),rt=me(!window.invokeNative),Be=me(!1);var P=(e=>(e.visible="vehmenu:visible",e.update="vehmenu:update",e.initialise="vehmenu:initialise",e))(P||{}),D=(e=>(e.close="vehmenu:close",e.click="vehmenu:optionClick",e.changeType="vehmenu:changeType",e.camMove="vehmenu:camMove",e.camZoom="vehmenu:camZoom",e))(D||{});const ge=Me(rt),Vt=Me(Ht),Ee=[];async function G(e,t={}){if(ge==!0){const i=await Gt(e,t);return Promise.resolve(i)}const n={method:"post",headers:{"Content-Type":"application/json; charset=UTF-8"},body:JSON.stringify(t)};return await(await fetch(`https://${Vt}/${e}`,n)).json()}function he(e,t){const n=l=>{const{action:i,data:o}=l.data;i===e&&t(o)};Ce(()=>window.addEventListener("message",n)),Rt(()=>window.removeEventListener("message",n))}async function ve(e,t,n=0){ge&&setTimeout(()=>{const l=new MessageEvent("message",{data:{action:e,data:t}});window.dispatchEvent(l)},n)}async function jt(e,t){if(ge){if(Ee[e]!==void 0){console.log(`%c[DEBUG] %c${e} %cevent already has a debug receiver.`,"color: red; font-weight: bold;","color: green","");return}Ee[e]=t}}async function Gt(e,t){if(!ge)return;const n=Ee[e];return n===void 0?(console.log(`[DEBUG] ${e} event does not have a debugger.`),{}):await n(t)}const zt=[{action:P.visible,handler:e=>{console.log("This is always listened to because it is in the AlwaysListened array.")}}];function Ut(){for(const e of zt)he(e.action,e.handler)}function He(e){let t,n;const l=e[2].default,i=pt(l,e,e[1],null);return{c(){t=y("main"),i&&i.c(),d(t,"class","svelte-1w09ye1")},m(o,r){E(o,t,r),i&&i.m(t,null),n=!0},p(o,r){i&&i.p&&(!n||r&2)&&_t(i,l,o,o[1],n?ht(l,o[1],r,null):mt(o[1]),null)},i(o){n||(k(i,o),n=!0)},o(o){N(i,o),n=!1},d(o){o&&$(t),i&&i.d(o)}}}function qt(e){let t,n,l=e[0]&&He(e);return{c(){l&&l.c(),t=_e()},m(i,o){l&&l.m(i,o),E(i,t,o),n=!0},p(i,[o]){i[0]?l?(l.p(i,o),o&1&&k(l,1)):(l=He(i),l.c(),k(l,1),l.m(t.parentNode,t)):l&&(J(),N(l,1,1,()=>{l=null}),Q())},i(i){n||(k(l),n=!0)},o(i){N(l),n=!1},d(i){i&&$(t),l&&l.d(i)}}}function Ft(e,t,n){let l,i;ke(e,Be,s=>n(0,l=s)),ke(e,De,s=>n(3,i=s));let{$$slots:o={},$$scope:r}=t;return he(P.visible,s=>{gt(Be,l=s,l)}),Ce(()=>{if(!i.allowEscapeKey)return;const s=c=>{l&&["Escape"].includes(c.code)&&G(D.close)};return window.addEventListener("keydown",s),()=>window.removeEventListener("keydown",s)}),e.$$set=s=>{"$$scope"in s&&n(1,r=s.$$scope)},[l,r,o]}class Wt extends te{constructor(t){super(),ee(this,t,Ft,qt,j,{})}}function Ne(e){ve(P.visible,e)}const Kt=[{label:"Visible",action:()=>Ne(!0),delay:500}];function Yt(){for(const e of Kt)setTimeout(()=>{e.action()},e.delay||0)}const xt=[{action:D.close,handler:()=>{console.log("closed")}},{action:D.click,handler:e=>!e.active}];function Zt(){for(const e of xt)jt(e.action,e.handler)}const Ve=["doorl","doorr","hood","trunk","windowl","windowr","engine","root","seat"];let L=[];function Xt(){const e=window.innerWidth,t=window.innerHeight,n=Math.random()*e,l=Math.random()*t,o={icon:Ve[Math.floor(Math.random()*Ve.length)],x:n,y:l,active:!1,index:L.length,type:"debug",boneName:"test"};L=L.concat(o),ve(P.update,L)}function Jt(e){const t=window.innerWidth-100,n=window.innerHeight-100,l=Math.random()*t+50,i=Math.random()*n+50,o={icon:e,x:l,y:i,active:!1,index:L.length,type:"debug",boneName:"test"};L=L.concat(o),ve(P.update,L)}function Qt(){L.pop(),ve(P.update,L)}const ce=[{label:"Visibility",actions:[{label:"True",action:()=>Ne(!0)},{label:"False",action:()=>Ne(!1)}]},{label:"Options",actions:[{label:"Add",action:()=>Xt()},{label:"Remove",action:()=>Qt()}]},{label:"Option",actions:[{label:"Icon",action:Jt,type:"text",placeholder:"Icon"}]}];function je(e,t,n){const l=e.slice();return l[10]=t[n].label,l[11]=t[n].actions,l}function Ge(e,t,n){const l=e.slice();return l[14]=t[n],l[15]=t,l[16]=n,l}function ze(e){let t,n=B(e[0]),l=[];for(let i=0;i<n.length;i+=1)l[i]=qe(je(e,n,i));return{c(){t=y("ol");for(let i=0;i<l.length;i+=1)l[i].c();d(t,"class","flex flex-col gap-2 bg-primary z-[9999999] max-w-[25vw] h-full px-[0.5vw] py-[0.5vw]")},m(i,o){E(i,t,o);for(let r=0;r<l.length;r+=1)l[r]&&l[r].m(t,null)},p(i,o){if(o&1){n=B(i[0]);let r;for(r=0;r<n.length;r+=1){const s=je(i,n,r);l[r]?l[r].p(s,o):(l[r]=qe(s),l[r].c(),l[r].m(t,null))}for(;r<l.length;r+=1)l[r].d(1);l.length=n.length}},d(i){i&&$(t),ae(l,i)}}}function en(e){let t,n=e[14].label+"",l,i,o;function r(){return e[9](e[14])}return{c(){t=y("button"),l=q(n),d(t,"class","w-full px-[0.5vw] py-[0.25vw] bg-accent")},m(s,c){E(s,t,c),b(t,l),i||(o=M(t,"click",r),i=!0)},p(s,c){e=s,c&1&&n!==(n=e[14].label+"")&&re(l,n)},d(s){s&&$(t),i=!1,o()}}}function tn(e){let t,n,l=e[14].label+"",i,o,r,s,c,u,_,f;function a(){e[7].call(r,e[15],e[16])}function p(){return e[8](e[14])}return{c(){t=y("span"),n=y("p"),i=q(l),o=R(),r=y("input"),d(r,"type","range"),d(r,"class","w-full"),d(r,"min",s=e[14].min||0),d(r,"max",c=e[14].max||100),d(r,"step",u=e[14].step||1),d(t,"class","w-full px-[0.5vw] py-[0.25vw] flex flex-col gap-[0.2vw] bg-accent items-start")},m(m,v){E(m,t,v),b(t,n),b(n,i),b(t,o),b(t,r),fe(r,e[14].value),_||(f=[M(r,"change",a),M(r,"input",a),M(r,"input",p)],_=!0)},p(m,v){e=m,v&1&&l!==(l=e[14].label+"")&&re(i,l),v&1&&s!==(s=e[14].min||0)&&d(r,"min",s),v&1&&c!==(c=e[14].max||100)&&d(r,"max",c),v&1&&u!==(u=e[14].step||1)&&d(r,"step",u),v&1&&fe(r,e[14].value)},d(m){m&&$(t),_=!1,I(f)}}}function nn(e){let t,n,l=e[14].label+"",i,o,r,s,c;function u(){e[5].call(r,e[15],e[16])}function _(...f){return e[6](e[14],...f)}return{c(){t=y("span"),n=y("p"),i=q(l),o=R(),r=y("input"),d(r,"type","checkbox"),d(r,"class","h-full aspect-square"),d(t,"class","w-full px-[0.5vw] py-[0.25vw] flex flex-row gap-[0.2vw] bg-accent items-center")},m(f,a){E(f,t,a),b(t,n),b(n,i),b(t,o),b(t,r),r.checked=e[14].value,s||(c=[M(r,"change",u),M(r,"input",_)],s=!0)},p(f,a){e=f,a&1&&l!==(l=e[14].label+"")&&re(i,l),a&1&&(r.checked=e[14].value)},d(f){f&&$(t),s=!1,I(c)}}}function ln(e){let t,n,l=e[14].label+"",i,o,r,s,c,u,_;function f(){e[3].call(r,e[15],e[16])}function a(){return e[4](e[14])}return{c(){t=y("span"),n=y("p"),i=q(l),o=R(),r=y("input"),s=R(),c=y("button"),c.textContent="Apply",d(n,"class",""),d(r,"type","text"),d(r,"class","h-full w-full text-[color:var(--text-secondary)] px-[0.25vw]"),d(c,"class","px-[0.5vw] py-[0.25vw] w-[5vw] bg-primary"),d(t,"class","w-full px-[0.5vw] py-[0.25vw] flex flex-col gap-[0.2vw] bg-accent items-start")},m(p,m){E(p,t,m),b(t,n),b(n,i),b(t,o),b(t,r),fe(r,e[14].value),b(t,s),b(t,c),u||(_=[M(r,"input",f),M(c,"click",a)],u=!0)},p(p,m){e=p,m&1&&l!==(l=e[14].label+"")&&re(i,l),m&1&&r.value!==e[14].value&&fe(r,e[14].value)},d(p){p&&$(t),u=!1,I(_)}}}function Ue(e){let t;function n(o,r){return o[14].type==="text"?ln:o[14].type==="checkbox"?nn:o[14].type==="slider"?tn:en}let l=n(e),i=l(e);return{c(){t=y("div"),i.c(),d(t,"class","flex flex-row flex-wrap gap-[0.5vw]")},m(o,r){E(o,t,r),i.m(t,null)},p(o,r){l===(l=n(o))&&i?i.p(o,r):(i.d(1),i=l(o),i&&(i.c(),i.m(t,null)))},d(o){o&&$(t),i.d()}}}function qe(e){let t,n,l=e[10]+"",i,o,r,s=B(e[11]),c=[];for(let u=0;u<s.length;u+=1)c[u]=Ue(Ge(e,s,u));return{c(){t=y("li"),n=y("span"),i=q(l),o=R();for(let u=0;u<c.length;u+=1)c[u].c();r=R(),d(n,"class","w-full"),d(t,"class","flex flex-col gap-1 border-l-[2px] border-[color:var(--accent)] px-[0.25vw]")},m(u,_){E(u,t,_),b(t,n),b(n,i),b(t,o);for(let f=0;f<c.length;f+=1)c[f]&&c[f].m(t,null);b(t,r)},p(u,_){if(_&1&&l!==(l=u[10]+"")&&re(i,l),_&1){s=B(u[11]);let f;for(f=0;f<s.length;f+=1){const a=Ge(u,s,f);c[f]?c[f].p(a,_):(c[f]=Ue(a),c[f].c(),c[f].m(t,r))}for(;f<c.length;f+=1)c[f].d(1);c.length=s.length}},d(u){u&&$(t),ae(c,u)}}}function on(e){let t,n,l,i,o,r,s,c=e[1]&&ze(e);return{c(){t=y("div"),n=y("button"),n.textContent="Debug",l=R(),c&&c.c(),i=R(),o=y("div"),d(n,"class","px-[1vw] py-[0.5vw] w-fit h-fit z-[9999999] bg-accent"),C(o,"background-image","url('https://cdn.discordapp.com/attachments/1068663854143389788/1074878298498281554/HUD_-_Target_Menu.png')"),d(o,"class","absolute w-screen bg-cover bg-no-repeat bg-center h-screen top-0 left-0 dev-image"),d(t,"class","w-fit h-fit flex flex-col z-[9999999]")},m(u,_){E(u,t,_),b(t,n),b(t,l),c&&c.m(t,null),b(t,i),b(t,o),r||(s=M(n,"click",e[2]),r=!0)},p(u,[_]){u[1]?c?c.p(u,_):(c=ze(u),c.c(),c.m(t,i)):c&&(c.d(1),c=null)},i:O,o:O,d(u){u&&$(t),c&&c.d(),r=!1,s()}}}function rn(e,t,n){Ce(()=>{Yt(),Zt()});let l=!1;const i=()=>n(1,l=!l);function o(a,p){a[p].value=this.value,n(0,ce)}const r=a=>{a.action(a.value)};function s(a,p){a[p].value=this.checked,n(0,ce)}const c=(a,p)=>{a.action(a.value)};function u(a,p){a[p].value=kt(this.value),n(0,ce)}return[ce,l,i,o,r,s,c,u,a=>{a.action(a.value)},a=>{a.action()}]}class sn extends te{constructor(t){super(),ee(this,t,rn,on,j,{})}}function cn(e){let t,n,l,i,o,r,s;return{c(){t=ne("svg"),n=ne("g"),l=ne("g"),i=ne("g"),o=ne("path"),d(n,"id","SVGRepo_bgCarrier"),d(n,"stroke-width","0"),d(l,"id","SVGRepo_tracerCarrier"),d(l,"stroke-linecap","round"),d(l,"stroke-linejoin","round"),d(o,"stroke","var(--accent)"),d(o,"stroke-width",e[4]),d(o,"d","M0,92.375l46.188-80h92.378l46.185,80l-46.185,80H46.188L0,92.375z"),d(i,"id","SVGRepo_iconCarrier"),d(t,"width",e[0]),d(t,"height",e[1]),d(t,"version","1.1"),C(t,"fill",e[3]),C(t,"filter",e[5]),C(t,"transform","scale("+e[2]+")"),d(t,"class","origin-center transition-all duration-200"),d(t,"xmlns","http://www.w3.org/2000/svg"),d(t,"xmlns:xlink","http://www.w3.org/1999/xlink"),d(t,"viewBox","0 0 184.751 184.751"),d(t,"xml:space","preserve")},m(c,u){E(c,t,u),b(t,n),b(t,l),b(t,i),b(i,o),r||(s=M(t,"click",e[9]),r=!0)},p(c,[u]){u&16&&d(o,"stroke-width",c[4]),u&1&&d(t,"width",c[0]),u&2&&d(t,"height",c[1]),u&8&&C(t,"fill",c[3]),u&32&&C(t,"filter",c[5]),u&4&&C(t,"transform","scale("+c[2]+")")},i:O,o:O,d(c){c&&$(t),r=!1,s()}}}function un(e,t,n){const l=St();let{width:i="98%"}=t,{height:o="98%"}=t,{scale:r="1"}=t,{active:s=!1}=t,{disabled:c=!1}=t,u="var(--accent)",_="0",f="";const a=()=>l("click");return e.$$set=p=>{"width"in p&&n(0,i=p.width),"height"in p&&n(1,o=p.height),"scale"in p&&n(2,r=p.scale),"active"in p&&n(7,s=p.active),"disabled"in p&&n(8,c=p.disabled)},e.$$.update=()=>{e.$$.dirty&384&&(s?(n(3,u="var(--accent)"),n(4,_="0"),n(5,f="drop-shadow(0 0 0.5vw var(--accent))")):(n(3,u="var(--secondary)"),n(4,_=c?"0vw":"0.5vw"),n(5,f=c?"":"drop-shadow(0 0 0.1vw var(--accent))")))},[i,o,r,u,_,f,l,s,c,a]}class Le extends te{constructor(t){super(),ee(this,t,un,cn,j,{width:0,height:1,scale:2,active:7,disabled:8})}}function an(e){const t=e-1;return t*t*t+1}function x(e,{delay:t=0,duration:n=400,easing:l=an,start:i=0,opacity:o=0}={}){const r=getComputedStyle(e),s=+r.opacity,c=r.transform==="none"?"":r.transform,u=1-i,_=s*(1-o);return{delay:t,duration:n,easing:l,css:(f,a)=>`
			transform: ${c} scale(${1-u*a});
			opacity: ${s-_*a}
		`}}function Fe(e,t,n){const l=e.slice();l[9]=t[n];const i=!l[1].includes(l[9].value);return l[10]=i,l}function We(e,t,n){const l=e.slice();return l[13]=t[n],l}function Ke(e){let t=e[2],n,l,i=Ye(e);return{c(){i.c(),n=_e()},m(o,r){i.m(o,r),E(o,n,r),l=!0},p(o,r){r&4&&j(t,t=o[2])?(J(),N(i,1,1,O),Q(),i=Ye(o),i.c(),k(i,1),i.m(n.parentNode,n)):i.p(o,r)},i(o){l||(k(i),l=!0)},o(o){N(i),l=!1},d(o){o&&$(n),i.d(o)}}}function Ye(e){let t,n,l,i,o,r,s,c,u,_;n=new Le({props:{active:e[13].active}});function f(){return e[7](e[13])}return{c(){t=y("button"),U(n.$$.fragment),l=R(),i=y("i"),d(i,"class",o=e[13].icon+" icon fill-white absolute"),C(t,"left",e[13].x+"px"),C(t,"top",e[13].y+"px"),d(t,"class",r="aspect-square option "+(e[13].active?"active:outline-2 active:outline-red-600 hover:cursor-pointer":"")+" grid place-items-center absolute -translate-x-1/2 -translate-y-1/2 w-[5vh]")},m(a,p){E(a,t,p),H(n,t,null),b(t,l),b(t,i),c=!0,u||(_=M(t,"click",f),u=!0)},p(a,p){e=a;const m={};p&1&&(m.active=e[13].active),n.$set(m),(!c||p&1&&o!==(o=e[13].icon+" icon fill-white absolute"))&&d(i,"class",o),(!c||p&1)&&C(t,"left",e[13].x+"px"),(!c||p&1)&&C(t,"top",e[13].y+"px"),(!c||p&1&&r!==(r="aspect-square option "+(e[13].active?"active:outline-2 active:outline-red-600 hover:cursor-pointer":"")+" grid place-items-center absolute -translate-x-1/2 -translate-y-1/2 w-[5vh]"))&&d(t,"class",r)},i(a){c||(k(n.$$.fragment,a),a&&z(()=>{c&&(s||(s=Y(t,x,{duration:150},!0)),s.run(1))}),c=!0)},o(a){N(n.$$.fragment,a),a&&(s||(s=Y(t,x,{duration:150},!1)),s.run(0)),c=!1},d(a){a&&$(t),V(n),a&&s&&s.end(),u=!1,_()}}}function xe(e){let t,n,l=e[13].visible&&Ke(e);return{c(){l&&l.c(),t=_e()},m(i,o){l&&l.m(i,o),E(i,t,o),n=!0},p(i,o){i[13].visible?l?(l.p(i,o),o&1&&k(l,1)):(l=Ke(i),l.c(),k(l,1),l.m(t.parentNode,t)):l&&(J(),N(l,1,1,()=>{l=null}),Q())},i(i){n||(k(l),n=!0)},o(i){N(l),n=!1},d(i){i&&$(t),l&&l.d(i)}}}function Ze(e){let t,n,l,i,o,r,s,c,u,_;n=new Le({props:{disabled:e[10],active:e[2]===e[9].value}});function f(){return e[8](e[9])}return{c(){t=y("button"),U(n.$$.fragment),l=R(),i=y("div"),r=R(),d(i,"class",o=e[9].icon+" icon fill-white absolute !w-[10%] "+(e[10]&&"opacity-50")),t.disabled=s=e[10],d(t,"class","w-[9vh] h-[9vh] grid place-items-center option")},m(a,p){E(a,t,p),H(n,t,null),b(t,l),b(t,i),b(t,r),c=!0,u||(_=M(t,"click",f),u=!0)},p(a,p){e=a;const m={};p&2&&(m.disabled=e[10]),p&4&&(m.active=e[2]===e[9].value),n.$set(m),(!c||p&2&&o!==(o=e[9].icon+" icon fill-white absolute !w-[10%] "+(e[10]&&"opacity-50")))&&d(i,"class",o),(!c||p&2&&s!==(s=e[10]))&&(t.disabled=s)},i(a){c||(k(n.$$.fragment,a),c=!0)},o(a){N(n.$$.fragment,a),c=!1},d(a){a&&$(t),V(n),u=!1,_()}}}function fn(e){let t,n,l,i,o,r,s,c,u,_,f=B(e[0]),a=[];for(let h=0;h<f.length;h+=1)a[h]=xe(We(e,f,h));const p=h=>N(a[h],1,1,()=>{a[h]=null});let m=B(e[3]),v=[];for(let h=0;h<m.length;h+=1)v[h]=Ze(Fe(e,m,h));const S=h=>N(v[h],1,1,()=>{v[h]=null});return r=new Le({props:{scale:"1"}}),r.$on("click",e[6]),{c(){for(let h=0;h<a.length;h+=1)a[h].c();t=R(),n=y("div");for(let h=0;h<v.length;h+=1)v[h].c();i=R(),o=y("button"),U(r.$$.fragment),s=R(),c=y("div"),d(n,"class","flex flex-row items-center justify-center absolute left-1/2 -translate-x-1/2 bottom-[0.5vh] gap-[0.5vw]"),d(c,"class","fill-white absolute close icon !w-[50%]"),d(o,"class","w-[6vh] h-[6vh] grid place-items-center absolute left-1/2 -translate-x-1/2 bottom-[8vh]")},m(h,w){for(let g=0;g<a.length;g+=1)a[g]&&a[g].m(h,w);E(h,t,w),E(h,n,w);for(let g=0;g<v.length;g+=1)v[g]&&v[g].m(n,null);E(h,i,w),E(h,o,w),H(r,o,null),b(o,s),b(o,c),_=!0},p(h,[w]){if(w&21){f=B(h[0]);let g;for(g=0;g<f.length;g+=1){const A=We(h,f,g);a[g]?(a[g].p(A,w),k(a[g],1)):(a[g]=xe(A),a[g].c(),k(a[g],1),a[g].m(t.parentNode,t))}for(J(),g=f.length;g<a.length;g+=1)p(g);Q()}if(w&46){m=B(h[3]);let g;for(g=0;g<m.length;g+=1){const A=Fe(h,m,g);v[g]?(v[g].p(A,w),k(v[g],1)):(v[g]=Ze(A),v[g].c(),k(v[g],1),v[g].m(n,null))}for(J(),g=m.length;g<v.length;g+=1)S(g);Q()}},i(h){if(!_){for(let w=0;w<f.length;w+=1)k(a[w]);for(let w=0;w<m.length;w+=1)k(v[w]);h&&z(()=>{_&&(l||(l=Y(n,x,{duration:150},!0)),l.run(1))}),k(r.$$.fragment,h),h&&z(()=>{_&&(u||(u=Y(o,x,{duration:150},!0)),u.run(1))}),_=!0}},o(h){a=a.filter(Boolean);for(let w=0;w<a.length;w+=1)N(a[w]);v=v.filter(Boolean);for(let w=0;w<v.length;w+=1)N(v[w]);h&&(l||(l=Y(n,x,{duration:150},!1)),l.run(0)),N(r.$$.fragment,h),h&&(u||(u=Y(o,x,{duration:150},!1)),u.run(0)),_=!1},d(h){h&&($(t),$(n),$(i),$(o)),ae(a,h),ae(v,h),h&&l&&l.end(),V(r),h&&u&&u.end()}}}function dn(e,t,n){let l=[],i=[],o=[{value:"Doors",icon:"doorr"},{value:"Windows",icon:"windowr"},{value:"Seats",icon:"seat"},{value:"Extras",icon:"extra"}],r=o[0].value;he(P.update,a=>{n(0,l=a)}),he(P.initialise,a=>{n(1,i=a);for(let p=0;p<o.length;p++){const m=o[p].value;if(i.includes(m)){n(2,r=m),G(D.changeType,r);break}}});function s(a){G(D.click,a)}function c(a){n(2,r=a.value),G(D.changeType,a.value)}function u(){G(D.close)}return[l,i,r,o,s,c,u,a=>s(a),a=>c(a)]}class pn extends te{constructor(t){super(),ee(this,t,dn,fn,j,{})}}function hn(e){let t,n,l;return{c(){t=y("div"),t.innerHTML="",d(t,"class","w-full h-full cursor-grab active:cursor-grabbing")},m(i,o){E(i,t,o),n||(l=[M(t,"mousedown",e[3]),M(t,"mouseup",e[4]),M(t,"wheel",e[2]),M(t,"mousemove",e[1])],n=!0)},p:O,i:O,o:O,d(i){i&&$(t),n=!1,I(l)}}}function _n(e,t,n){let l=!1;return[l,c=>{if(!l)return;let u=c.movementX,_=c.movementY,f=u/8,a=_/8;G(D.camMove,{x:f,y:a})},c=>{let u=c.deltaY>0?.5:-.5;G(D.camZoom,u)},()=>n(0,l=!0),()=>n(0,l=!1)]}class mn extends te{constructor(t){super(),ee(this,t,_n,hn,j,{})}}function gn(e){let t,n,l,i;return t=new pn({}),l=new mn({}),{c(){U(t.$$.fragment),n=R(),U(l.$$.fragment)},m(o,r){H(t,o,r),E(o,n,r),H(l,o,r),i=!0},i(o){i||(k(t.$$.fragment,o),k(l.$$.fragment,o),i=!0)},o(o){N(t.$$.fragment,o),N(l.$$.fragment,o),i=!1},d(o){o&&$(n),V(t,o),V(l,o)}}}function Xe(e){let t,n;return t=new sn({}),{c(){U(t.$$.fragment)},m(l,i){H(t,l,i),n=!0},i(l){n||(k(t.$$.fragment,l),n=!0)},o(l){N(t.$$.fragment,l),n=!1},d(l){V(t,l)}}}function vn(e){let t,n,l,i;t=new Wt({props:{$$slots:{default:[gn]},$$scope:{ctx:e}}});let o=e[0]&&Xe();return{c(){U(t.$$.fragment),n=R(),o&&o.c(),l=_e()},m(r,s){H(t,r,s),E(r,n,s),o&&o.m(r,s),E(r,l,s),i=!0},p(r,[s]){const c={};s&2&&(c.$$scope={dirty:s,ctx:r}),t.$set(c),r[0]?o?s&1&&k(o,1):(o=Xe(),o.c(),k(o,1),o.m(l.parentNode,l)):o&&(J(),N(o,1,1,()=>{o=null}),Q())},i(r){i||(k(t.$$.fragment,r),k(o),i=!0)},o(r){N(t.$$.fragment,r),N(o),i=!1},d(r){r&&($(n),$(l)),V(t,r),o&&o.d(r)}}}function bn(e,t,n){let l;return ke(e,rt,i=>n(0,l=i)),De.set({fallbackResourceName:"bl_vehiclemenu",allowEscapeKey:!0}),Ut(),[l]}class wn extends te{constructor(t){super(),ee(this,t,bn,vn,j,{})}}new wn({target:document.getElementById("app")});
