var Ke=Object.defineProperty;var Xe=(t,e,n)=>e in t?Ke(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var we=(t,e,n)=>(Xe(t,typeof e!="symbol"?e+"":e,n),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))l(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function H(){}function Ye(t,e){for(const n in e)t[n]=e[n];return t}function We(t){return t()}function Me(){return Object.create(null)}function Z(t){t.forEach(We)}function Ce(t){return typeof t=="function"}function P(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let de;function qe(t,e){return t===e?!0:(de||(de=document.createElement("a")),de.href=e,t===de.href)}function et(t){return Object.keys(t).length===0}function he(t){return t&&Ce(t.destroy)?t.destroy:H}function s(t,e){t.appendChild(e)}function S(t,e,n){t.insertBefore(e,n||null)}function V(t){t.parentNode&&t.parentNode.removeChild(t)}function te(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function u(t){return document.createElement(t)}function tt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function ne(t){return document.createTextNode(t)}function y(){return ne(" ")}function O(t,e,n,l){return t.addEventListener(e,n,l),()=>t.removeEventListener(e,n,l)}function f(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Ee(t,e){for(const n in e)f(t,n,e[n])}function nt(t){return Array.from(t.childNodes)}function $e(t,e){e=""+e,t.data!==e&&(t.data=e)}function B(t,e,n){t.classList.toggle(e,!!n)}function Ie(t,e){return new t(e)}let se;function oe(t){se=t}function lt(){if(!se)throw new Error("Function called outside component initialization");return se}function rt(t){lt().$$.on_mount.push(t)}const X=[],je=[];let ee=[];const Ae=[],it=Promise.resolve();let ye=!1;function ot(){ye||(ye=!0,it.then(Ge))}function xe(t){ee.push(t)}const _e=new Set;let K=0;function Ge(){if(K!==0)return;const t=se;do{try{for(;K<X.length;){const e=X[K];K++,oe(e),st(e.$$)}}catch(e){throw X.length=0,K=0,e}for(oe(null),X.length=0,K=0;je.length;)je.pop()();for(let e=0;e<ee.length;e+=1){const n=ee[e];_e.has(n)||(_e.add(n),n())}ee.length=0}while(X.length);for(;Ae.length;)Ae.pop()();ye=!1,_e.clear(),oe(t)}function st(t){if(t.fragment!==null){t.update(),Z(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(xe)}}function at(t){const e=[],n=[];ee.forEach(l=>t.indexOf(l)===-1?e.push(l):n.push(l)),n.forEach(l=>l()),ee=e}const pe=new Set;let F;function Ue(){F={r:0,c:[],p:F}}function Je(){F.r||Z(F.c),F=F.p}function L(t,e){t&&t.i&&(pe.delete(t),t.i(e))}function E(t,e,n,l){if(t&&t.o){if(pe.has(t))return;pe.add(t),F.c.push(()=>{pe.delete(t),l&&(n&&t.d(1),l())}),t.o(e)}else l&&l()}function z(t){return(t==null?void 0:t.length)!==void 0?t:Array.from(t)}function ct(t,e){const n={},l={},i={$$scope:1};let r=t.length;for(;r--;){const o=t[r],a=e[r];if(a){for(const c in o)c in a||(l[c]=1);for(const c in a)i[c]||(n[c]=a[c],i[c]=1);t[r]=a}else for(const c in o)i[c]=1}for(const o in l)o in n||(n[o]=void 0);return n}function T(t){t&&t.c()}function j(t,e,n){const{fragment:l,after_update:i}=t.$$;l&&l.m(e,n),xe(()=>{const r=t.$$.on_mount.map(We).filter(Ce);t.$$.on_destroy?t.$$.on_destroy.push(...r):Z(r),t.$$.on_mount=[]}),i.forEach(xe)}function A(t,e){const n=t.$$;n.fragment!==null&&(at(n.after_update),Z(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ut(t,e){t.$$.dirty[0]===-1&&(X.push(t),ot(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function D(t,e,n,l,i,r,o=null,a=[-1]){const c=se;oe(t);const d=t.$$={fragment:null,ctx:[],props:r,update:H,not_equal:i,bound:Me(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:Me(),dirty:a,skip_bound:!1,root:e.target||c.$$.root};o&&o(d.root);let g=!1;if(d.ctx=n?n(t,e.props||{},(h,v,...C)=>{const b=C.length?C[0]:v;return d.ctx&&i(d.ctx[h],d.ctx[h]=b)&&(!d.skip_bound&&d.bound[h]&&d.bound[h](b),g&&ut(t,h)),v}):[],d.update(),g=!0,Z(d.before_update),d.fragment=l?l(d.ctx):!1,e.target){if(e.hydrate){const h=nt(e.target);d.fragment&&d.fragment.l(h),h.forEach(V)}else d.fragment&&d.fragment.c();e.intro&&L(t.$$.fragment),j(t,e.target,e.anchor),Ge()}oe(c)}class R{constructor(){we(this,"$$");we(this,"$$set")}$destroy(){A(this,1),this.$destroy=H}$on(e,n){if(!Ce(n))return H;const l=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return l.push(n),()=>{const i=l.indexOf(n);i!==-1&&l.splice(i,1)}}$set(e){this.$$set&&!et(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const ft="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(ft);function dt(t){let e,n,l=[{width:t[1]},{height:t[1]},{viewBox:t[2]},{style:n=t[3]?"color: "+t[3]+";":""},{"stroke-width":"0"},{class:t[4]},t[0].a,t[6],{xmlns:"http://www.w3.org/2000/svg"}],i={};for(let r=0;r<l.length;r+=1)i=Ye(i,l[r]);return{c(){e=tt("svg"),Ee(e,i)},m(r,o){S(r,e,o),e.innerHTML=t[5]},p(r,[o]){o&32&&(e.innerHTML=r[5]),Ee(e,i=ct(l,[o&2&&{width:r[1]},o&2&&{height:r[1]},o&4&&{viewBox:r[2]},o&8&&n!==(n=r[3]?"color: "+r[3]+";":"")&&{style:n},{"stroke-width":"0"},o&16&&{class:r[4]},o&1&&r[0].a,o&64&&r[6],{xmlns:"http://www.w3.org/2000/svg"}]))},i:H,o:H,d(r){r&&V(e)}}}function pt(t,e,n){let{src:l}=e,{size:i="1em"}=e,{viewBox:r=void 0}=e,{color:o="currentColor"}=e,{title:a=void 0}=e,{className:c=""}=e,d,g={};return t.$$set=h=>{"src"in h&&n(0,l=h.src),"size"in h&&n(1,i=h.size),"viewBox"in h&&n(2,r=h.viewBox),"color"in h&&n(3,o=h.color),"title"in h&&n(7,a=h.title),"className"in h&&n(4,c=h.className)},t.$$.update=()=>{t.$$.dirty&9&&(n(6,g={}),o&&(l.a.stroke!=="none"&&n(6,g.stroke="currentColor",g),l.a.fill!=="none"&&n(6,g.fill="currentColor",g))),t.$$.dirty&129&&n(5,d=(a?`<title>${a}</title>`:"")+l.c)},[l,i,r,o,c,d,g,a]}class Y extends R{constructor(e){super(),D(this,e,pt,dt,P,{src:0,size:1,viewBox:2,color:3,title:7,className:4})}}const gt={a:{viewBox:"0 0 24 24",fill:"none"},c:'<path d="M4 6C4 5.44772 4.44772 5 5 5H19C19.5523 5 20 5.44772 20 6C20 6.55228 19.5523 7 19 7H5C4.44772 7 4 6.55228 4 6Z" fill="currentColor"></path><path d="M4 18C4 17.4477 4.44772 17 5 17H19C19.5523 17 20 17.4477 20 18C20 18.5523 19.5523 19 19 19H5C4.44772 19 4 18.5523 4 18Z" fill="currentColor"></path><path d="M5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13H13C13.5523 13 14 12.5523 14 12C14 11.4477 13.5523 11 13 11H5Z" fill="currentColor"></path>'},ht={a:{viewBox:"0 0 24 24",fill:"none"},c:'<path fill-rule="evenodd" clip-rule="evenodd" d="M12 17.456C11.2389 17.8053 10.3922 18 9.5 18C6.18629 18 3.5 15.3137 3.5 12C3.5 8.68629 6.18629 6 9.5 6C10.3922 6 11.2389 6.19474 12 6.54404C12.7611 6.19474 13.6078 6 14.5 6C17.8137 6 20.5 8.68629 20.5 12C20.5 15.3137 17.8137 18 14.5 18C13.6078 18 12.7611 17.8053 12 17.456ZM10.0003 15.969C9.83637 15.9895 9.66942 16 9.5 16C7.29086 16 5.5 14.2091 5.5 12C5.5 9.79086 7.29086 8 9.5 8C9.66942 8 9.83637 8.01053 10.0003 8.03098C9.06656 9.08871 8.5 10.4782 8.5 12C8.5 13.5218 9.06656 14.9113 10.0003 15.969ZM13.9998 8.03098C14.1636 8.01054 14.3306 8 14.5 8C16.7091 8 18.5 9.79086 18.5 12C18.5 14.2091 16.7091 16 14.5 16C14.3306 16 14.1636 15.9895 13.9998 15.969C14.9334 14.9113 15.5 13.5218 15.5 12C15.5 10.4782 14.9334 9.08872 13.9998 8.03098ZM12 8.87732C12.9145 9.61038 13.5 10.7368 13.5 12C13.5 13.2632 12.9145 14.3896 12 15.1227C11.0855 14.3896 10.5 13.2632 10.5 12C10.5 10.7368 11.0855 9.61038 12 8.87732Z" fill="currentColor"></path>'},mt={a:{viewBox:"0 0 24 24",fill:"none"},c:'<path fill-rule="evenodd" clip-rule="evenodd" d="M7 4.05444C4.23858 4.05444 2 6.29302 2 9.05444C2 11.8159 4.23858 14.0544 7 14.0544C9.76142 14.0544 12 11.8159 12 9.05444C12 6.29302 9.76142 4.05444 7 4.05444ZM5 9.05444C5 10.159 5.89543 11.0544 7 11.0544C8.10457 11.0544 9 10.159 9 9.05444C9 7.94987 8.10457 7.05444 7 7.05444C5.89543 7.05444 5 7.94987 5 9.05444Z" fill="currentColor"></path><path d="M22 10.5544H17V7.55444H22V10.5544Z" fill="currentColor"></path><path d="M11.5503 16.9457C12.6786 16.9457 13.6977 16.4786 14.4249 15.7272C14.4097 15.7429 14.3943 15.7585 14.3788 15.774L16.5001 17.8954C15.2334 19.1621 13.4834 19.9457 11.5503 19.9457C9.61734 19.9457 7.86734 19.1622 6.60059 17.8954L8.72191 15.7741C9.44576 16.498 10.4458 16.9457 11.5503 16.9457Z" fill="currentColor"></path>'},vt={a:{viewBox:"0 0 24 24",fill:"none"},c:'<path d="M7 5C7 3.89543 7.89543 3 9 3C10.1046 3 11 3.89543 11 5C11 5.74028 10.5978 6.38663 10 6.73244V14.0396H11.7915C12.8961 14.0396 13.7915 13.1441 13.7915 12.0396V10.7838C13.1823 10.4411 12.7708 9.78837 12.7708 9.03955C12.7708 7.93498 13.6662 7.03955 14.7708 7.03955C15.8753 7.03955 16.7708 7.93498 16.7708 9.03955C16.7708 9.77123 16.3778 10.4111 15.7915 10.7598V12.0396C15.7915 14.2487 14.0006 16.0396 11.7915 16.0396H10V17.2676C10.5978 17.6134 11 18.2597 11 19C11 20.1046 10.1046 21 9 21C7.89543 21 7 20.1046 7 19C7 18.2597 7.4022 17.6134 8 17.2676V6.73244C7.4022 6.38663 7 5.74028 7 5Z" fill="currentColor"></path>'},bt={a:{viewBox:"0 0 24 24",fill:"none"},c:'<path d="M6.2253 4.81108C5.83477 4.42056 5.20161 4.42056 4.81108 4.81108C4.42056 5.20161 4.42056 5.83477 4.81108 6.2253L10.5858 12L4.81114 17.7747C4.42062 18.1652 4.42062 18.7984 4.81114 19.1889C5.20167 19.5794 5.83483 19.5794 6.22535 19.1889L12 13.4142L17.7747 19.1889C18.1652 19.5794 18.7984 19.5794 19.1889 19.1889C19.5794 18.7984 19.5794 18.1652 19.1889 17.7747L13.4142 12L19.189 6.2253C19.5795 5.83477 19.5795 5.20161 19.189 4.81108C18.7985 4.42056 18.1653 4.42056 17.7748 4.81108L12 10.5858L6.2253 4.81108Z" fill="currentColor"></path>'},wt={a:{viewBox:"0 0 24 24",fill:"none"},c:'<path d="M7.75735 5.63605L6.34314 7.05026L12 12.7071L17.6569 7.05029L16.2427 5.63608L12 9.87872L7.75735 5.63605Z" fill="currentColor"></path><path d="M6.34314 12.7071L7.75735 11.2929L12 15.5356L16.2427 11.2929L17.6569 12.7071L12 18.364L6.34314 12.7071Z" fill="currentColor"></path>'},_t={a:{fill:"currentColor",viewBox:"0 0 16 16"},c:'<path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"></path>'},yt={a:{fill:"currentColor",viewBox:"0 0 16 16"},c:'<path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"></path>'};function Te(t,e,n){const l=t.slice();return l[7]=e[n],l}function Be(t){let e,n,l=t[7].label+"",i,r,o,a;return{c(){e=u("li"),n=u("a"),i=ne(l),r=y(),f(n,"href",`#${t[7].value}`),f(n,"class","block hover:opacity-70 transition-opacity"),B(n,"text-indigo-500",t[7].value===t[0])},m(c,d){S(c,e,d),s(e,n),s(n,i),s(e,r),o||(a=O(n,"click",t[6]),o=!0)},p(c,d){d&9&&B(n,"text-indigo-500",c[7].value===c[0])},d(c){c&&V(e),o=!1,a()}}}function xt(t){let e,n,l,i,r,o,a,c,d,g,h,v,C,b,x,w,_,p,k,m,N,ve,le,ke,W,re,q,ce,Ve,ie,G,ue,fe,U,be,Le;i=new Y({props:{src:gt,size:32}}),w=new Y({props:{src:bt,size:24}});let J=z(t[3]),I=[];for(let $=0;$<J.length;$+=1)I[$]=Be(Te(t,J,$));return q=new Y({props:{src:yt}}),G=new Y({props:{src:_t}}),{c(){e=u("div"),n=u("div"),l=u("button"),T(i.$$.fragment),r=y(),o=u("span"),o.textContent="Menu",a=y(),c=u("div"),d=u("span"),g=ne(t[2]),h=y(),v=u("span"),v.textContent="07",C=y(),b=u("div"),x=u("button"),T(w.$$.fragment),_=y(),p=u("span"),p.textContent="Close",k=y(),m=u("h2"),m.innerHTML='<a href="/">Alex Valle</a>',N=y(),ve=u("nav"),le=u("ul");for(let $=0;$<I.length;$+=1)I[$].c();ke=y(),W=u("div"),re=u("a"),T(q.$$.fragment),ce=u("span"),ce.textContent="Linkedin",Ve=y(),ie=u("a"),T(G.$$.fragment),ue=u("span"),ue.textContent="Github",f(o,"class","sr-only"),f(l,"class","lg:hidden"),f(d,"class","bg-black text-indigo-100 text-center w-8 pl-2 mr-2 after:contain-none relative after:absolute after:left-full after:inset-y-0 after:border-black after:border-l-8 after:border-t-[1rem] after:border-b-[1rem] after:border-b-transparent"),f(c,"class","flex gap-1 font-bold items-center"),f(n,"class","flex justify-between p-4 lg:p-0"),f(p,"class","sr-only"),f(x,"class","lg:hidden ml-auto text-xs uppercase tracking-widest"),f(m,"class","font-black uppercase tracking-widest underline underline-offset-4"),f(le,"class","space-y-4"),f(ce,"class","sr-only"),f(re,"href","https://www.linkedin.com/in/alexv/"),f(ue,"class","sr-only"),f(ie,"href","https://github.com/krystlc"),f(W,"class","flex gap-4 text-2xl font-light"),f(b,"class",fe="text-xl lg:text-base fixed overflow-auto top-0 left-0 h-screen bg-white z-20 flex flex-col p-4 gap-16 w-80 lg:px-0 py-16 lg:static lg:h-auto lg:w-auto lg:bg-transparent transition-transform delay-75 duration-150 ease-out "+(t[1]?"translate-x-0 shadow-2xl":"-translate-x-full lg:translate-x-0"))},m($,Q){S($,e,Q),s(e,n),s(n,l),j(i,l,null),s(l,r),s(l,o),s(n,a),s(n,c),s(c,d),s(d,g),s(c,h),s(c,v),s(e,C),s(e,b),s(b,x),j(w,x,null),s(x,_),s(x,p),s(b,k),s(b,m),s(b,N),s(b,ve),s(ve,le);for(let M=0;M<I.length;M+=1)I[M]&&I[M].m(le,null);s(b,ke),s(b,W),s(W,re),j(q,re,null),s(re,ce),s(W,Ve),s(W,ie),j(G,ie,null),s(ie,ue),U=!0,be||(Le=[O(l,"click",t[4]),O(x,"click",t[5])],be=!0)},p($,[Q]){if((!U||Q&4)&&$e(g,$[2]),Q&11){J=z($[3]);let M;for(M=0;M<J.length;M+=1){const Se=Te($,J,M);I[M]?I[M].p(Se,Q):(I[M]=Be(Se),I[M].c(),I[M].m(le,null))}for(;M<I.length;M+=1)I[M].d(1);I.length=J.length}(!U||Q&2&&fe!==(fe="text-xl lg:text-base fixed overflow-auto top-0 left-0 h-screen bg-white z-20 flex flex-col p-4 gap-16 w-80 lg:px-0 py-16 lg:static lg:h-auto lg:w-auto lg:bg-transparent transition-transform delay-75 duration-150 ease-out "+($[1]?"translate-x-0 shadow-2xl":"-translate-x-full lg:translate-x-0")))&&f(b,"class",fe)},i($){U||(L(i.$$.fragment,$),L(w.$$.fragment,$),L(q.$$.fragment,$),L(G.$$.fragment,$),U=!0)},o($){E(i.$$.fragment,$),E(w.$$.fragment,$),E(q.$$.fragment,$),E(G.$$.fragment,$),U=!1},d($){$&&V(e),A(i),A(w),te(I,$),A(q),A(G),be=!1,Z(Le)}}}function Ct(t,e,n){let l,{currentSection:i}=e,r=!1;const o=[{label:"Home",value:"home"},{label:"Experience",value:"experience"},{label:"About",value:"about"},{label:"Projects",value:"projects"},{label:"Skills",value:"skills"},{label:"Contact",value:"contact"}],a=()=>n(1,r=!r),c=()=>n(1,r=!1),d=()=>n(1,r=!1);return t.$$set=g=>{"currentSection"in g&&n(0,i=g.currentSection)},t.$$.update=()=>{t.$$.dirty&1&&n(2,l=`0${o.findIndex(g=>g.value===i)+1}`)},[i,r,l,o,a,c,d]}class $t extends R{constructor(e){super(),D(this,e,Ct,xt,P,{currentSection:0})}}let ge;function kt(){ge||(ge=new IntersectionObserver(t=>{t.forEach(e=>{const n=e.isIntersecting?"enterViewport":"exitViewport";e.target.dispatchEvent(new CustomEvent(n))})}))}function me(t){return kt(),ge.observe(t),{destroy(){ge.unobserve(t)}}}function He(t){let e,n;return{c(){e=u("h4"),n=ne(t[1]),f(e,"class","svelte-4yrrdc")},m(l,i){S(l,e,i),s(e,n)},p(l,i){i&2&&$e(n,l[1])},d(l){l&&V(e)}}}function Vt(t){let e,n,l,i,r=t[1]&&He(t);return{c(){e=u("div"),n=u("h2"),l=ne(t[0]),i=y(),r&&r.c(),f(n,"class","svelte-4yrrdc"),f(e,"class","max-w-lg space-y-4")},m(o,a){S(o,e,a),s(e,n),s(n,l),s(e,i),r&&r.m(e,null)},p(o,[a]){a&1&&$e(l,o[0]),o[1]?r?r.p(o,a):(r=He(o),r.c(),r.m(e,null)):r&&(r.d(1),r=null)},i:H,o:H,d(o){o&&V(e),r&&r.d()}}}function Lt(t,e,n){let{title:l}=e,{subtitle:i}=e;return t.$$set=r=>{"title"in r&&n(0,l=r.title),"subtitle"in r&&n(1,i=r.subtitle)},[l,i]}class ae extends R{constructor(e){super(),D(this,e,Lt,Vt,P,{title:0,subtitle:1})}}const St="/alex-cv/banner.webp";function Mt(t){let e,n,l,i,r,o,a,c,d,g,h,v,C,b,x,w;return l=new ae({props:{title:"About",subtitle:"Driven self-taught software engineer"}}),{c(){e=u("div"),n=u("div"),T(l.$$.fragment),i=y(),r=u("p"),r.textContent=`As a self-taught software engineer, my journey has been one of humble
      determination and continuous growth. Initially driven by curiosity, I
      embarked on the path of coding, immersing myself in learning resources and
      hands-on projects.`,o=y(),a=u("div"),c=u("img"),g=y(),h=u("div"),h.innerHTML='<div class="space-y-8"><div><p class="uppercase tracking-widest">Email</p> <p><a href="mailto:alex.valle@gmail.com">alex.valle@gmail.com</a></p></div> <div><p class="uppercase tracking-widest">Role</p> <p>Software Engineer</p></div></div>',v=y(),C=u("div"),C.innerHTML=`<p>Through persistent effort and a thirst for knowledge, I&#39;ve developed solid
      proficiency in various programming languages, frameworks, and
      technologies. My approach to challenges is grounded in pragmatism and a
      commitment to finding effective solutions rather than pursuing perfection.</p> <p>Collaboration is at the heart of my work ethic. I thrive in team
      environments, valuing the opportunity to learn from others and contribute
      my skills to collective efforts. Effective communication and adaptability
      are key strengths that enable me to seamlessly integrate into diverse
      teams and drive successful outcomes.</p> <p>As I continue to evolve as a developer, I remain steadfast in my belief in
      the power of continuous learning and improvement. I am eager to bring my
      skills and collaborative spirit to a team where I can make meaningful
      contributions and grow alongside talented individuals.</p> <p class="text-right font-mono">— Alex Valle</p>`,f(n,"class","space-y-8 mb-8"),qe(c.src,d=St)||f(c,"src",d),f(c,"alt","Alex Valle"),f(c,"class","object-cover h-full block duration-1000 opacity-0 svelte-a2gahv"),B(c,"is-active",t[0]),f(a,"class","h-48"),f(h,"class","bg-rose-600 text-white p-8 md:p-16 md:float-right md:-mt-16 md:ml-8 md:mb-8 z-10 relative"),f(C,"class","space-y-4 pt-8")},m(_,p){S(_,e,p),s(e,n),j(l,n,null),s(n,i),s(n,r),s(e,o),s(e,a),s(a,c),s(e,g),s(e,h),s(e,v),s(e,C),b=!0,x||(w=[he(me.call(null,c)),O(c,"enterViewport",t[1]),O(c,"exitViewport",t[2])],x=!0)},p(_,[p]){(!b||p&1)&&B(c,"is-active",_[0])},i(_){b||(L(l.$$.fragment,_),b=!0)},o(_){E(l.$$.fragment,_),b=!1},d(_){_&&V(e),A(l),x=!1,Z(w)}}}function Et(t,e,n){let l=!1;return[l,()=>n(0,l=!0),()=>n(0,l=!1)]}class It extends R{constructor(e){super(),D(this,e,Et,Mt,P,{})}}function Ne(t,e,n){const l=t.slice();return l[1]=e[n],l}function ze(t){let e,n,l,i,r;return{c(){e=u("a"),n=u("h3"),n.textContent=`${t[1].title}`,l=y(),i=u("p"),i.textContent=`${t[1].subtitle}`,r=y(),f(e,"href",t[1].url),f(e,"target","_blank"),f(e,"rel","noopener noreferrer"),f(e,"class","bg-slate-50/50 h-48 flex flex-col items-center justify-center hover:bg-indigo-200/50")},m(o,a){S(o,e,a),s(e,n),s(e,l),s(e,i),s(e,r)},p:H,d(o){o&&V(e)}}}function jt(t){let e,n,l,i,r;n=new ae({props:{title:"Projects",subtitle:"Projects in the making, hoping to serve a purpose someday"}});let o=z(t[0]),a=[];for(let c=0;c<o.length;c+=1)a[c]=ze(Ne(t,o,c));return{c(){e=u("div"),T(n.$$.fragment),l=y(),i=u("div");for(let c=0;c<a.length;c+=1)a[c].c();f(i,"class","divide-y mt-16")},m(c,d){S(c,e,d),j(n,e,null),s(e,l),s(e,i);for(let g=0;g<a.length;g+=1)a[g]&&a[g].m(i,null);r=!0},p(c,[d]){if(d&1){o=z(c[0]);let g;for(g=0;g<o.length;g+=1){const h=Ne(c,o,g);a[g]?a[g].p(h,d):(a[g]=ze(h),a[g].c(),a[g].m(i,null))}for(;g<a.length;g+=1)a[g].d(1);a.length=o.length}},i(c){r||(L(n.$$.fragment,c),r=!0)},o(c){E(n.$$.fragment,c),r=!1},d(c){c&&V(e),A(n),te(a,c)}}}function At(t){return[[{title:"2048 + Supertab",subtitle:"Nuxt 3, Typescript, Micropayments",url:"https://github.com/krystlc/2048-nuxt-3-supertab"},{title:"Loren Valle Art Gallery",subtitle:"Vite + React SPA",url:"https://github.com/krystlc/lorenvalleart-web"},{title:"Beta Blitz",subtitle:"React Native, Expo, Typescript",url:"https://github.com/briklabs/beta-blitz-mobile"}]]}class Tt extends R{constructor(e){super(),D(this,e,At,jt,P,{})}}const Bt={a:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},c:'<path d="M3 12h5l4 8v-16l4 8h5"></path>'};function Oe(t,e,n){const l=t.slice();return l[4]=e[n],l}function Ze(t){let e,n,l,i,r,o,a,c,d;return l=new Y({props:{src:t[4].icon,size:48}}),{c(){e=u("div"),n=u("div"),T(l.$$.fragment),i=y(),r=u("h3"),r.textContent=`${t[4].title}`,o=y(),a=u("p"),a.textContent=`${t[4].body}`,c=y(),f(n,"class","text-rose-500"),f(e,"class","space-y-4 max-w-xs")},m(g,h){S(g,e,h),s(e,n),j(l,n,null),s(e,i),s(e,r),s(e,o),s(e,a),s(e,c),d=!0},p:H,i(g){d||(L(l.$$.fragment,g),d=!0)},o(g){E(l.$$.fragment,g),d=!1},d(g){g&&V(e),A(l)}}}function Ht(t){let e,n,l,i,r,o,a,c,d,g,h,v,C,b;l=new ae({props:{title:"Experience",subtitle:`With a decade in software engineering, I've honed my skills to deliver
      solutions that truly matter`}});let x=z(t[1]),w=[];for(let p=0;p<x.length;p+=1)w[p]=Ze(Oe(t,x,p));const _=p=>E(w[p],1,1,()=>{w[p]=null});return{c(){e=u("div"),n=u("div"),T(l.$$.fragment),i=y(),r=u("p"),r.innerHTML=`At <a href="https://www.linkedin.com/company/the-inc-lab" target="_blank" rel="noopener noreferrer">TheIncLab</a>, I contributed to projects for the Department of Defense, leveraging
      JavaScript, TypeScript, and React to ensure top-quality software delivery.
      And at
      <a href="https://www.linkedin.com/company/the-well1/" target="_blank" rel="noopener noreferrer">The WELL</a>, I led frontend development, enhancing the online booking experience and
      overhauling the editorial blog. These projects highlighted my commitment
      to user-centric design and seamless functionality.`,o=y(),a=u("p"),a.textContent=`Additionally, I've explored emerging technologies like blockchain through
      projects such as the Decentralized Wine Marketplace and the NFT Rarity
      Scanner, showcasing my passion for innovation. As I continue my
      engineering journey, I'm dedicated to creating solutions that make a real
      impact. If you're seeking a confident engineer ready to tackle challenges
      head-on, let's connect and explore how we can achieve remarkable results
      together.`,c=y(),d=u("aside"),d.innerHTML='<a href="#projects">My Projects</a> <a href="https://krystlc.github.io/alex-cv/Alex%20Valle%20-%20Software%20Engineer.pdf" target="_blank">My Resume/CV</a>',g=y(),h=u("aside");for(let p=0;p<w.length;p+=1)w[p].c();f(n,"class","space-y-8"),f(d,"class","bg-indigo-600 p-8 text-center md:text-left md:p-16 my-8 md:my-16 font-bold uppercase text-white tracking-widest text-sm underline underline-offset-4 space-x-4 md:space-x-16 transition-all block duration-1000 opacity-0 svelte-a2gahv"),B(d,"is-active",t[0]),f(h,"class","grid md:grid-cols-2 gap-16")},m(p,k){S(p,e,k),s(e,n),j(l,n,null),s(n,i),s(n,r),s(n,o),s(n,a),s(e,c),s(e,d),s(e,g),s(e,h);for(let m=0;m<w.length;m+=1)w[m]&&w[m].m(h,null);v=!0,C||(b=[he(me.call(null,d)),O(d,"enterViewport",t[2]),O(d,"exitViewport",t[3])],C=!0)},p(p,[k]){if((!v||k&1)&&B(d,"is-active",p[0]),k&2){x=z(p[1]);let m;for(m=0;m<x.length;m+=1){const N=Oe(p,x,m);w[m]?(w[m].p(N,k),L(w[m],1)):(w[m]=Ze(N),w[m].c(),L(w[m],1),w[m].m(h,null))}for(Ue(),m=x.length;m<w.length;m+=1)_(m);Je()}},i(p){if(!v){L(l.$$.fragment,p);for(let k=0;k<x.length;k+=1)L(w[k]);v=!0}},o(p){E(l.$$.fragment,p),w=w.filter(Boolean);for(let k=0;k<w.length;k+=1)E(w[k]);v=!1},d(p){p&&V(e),A(l),te(w,p),C=!1,Z(b)}}}function Nt(t,e,n){const l=[{icon:mt,title:"UX/UI Focus",body:"Craft intuitive interfaces, prioritizing user experience for optimal engagement and satisfaction."},{icon:vt,title:"Develop",body:"Deliver high-quality solutions using modern technologies, ensuring scalability and maintainability."},{icon:Bt,title:"Latest Tech",body:"Stay abreast of emerging technologies, leveraging them to drive innovation and efficiency."},{icon:ht,title:"Team Work",body:"Collaborate effectively in small to medium teams, fostering synergy and achieving shared goals."}];let i=!1;return[i,l,()=>n(0,i=!0),()=>n(0,i=!1)]}class zt extends R{constructor(e){super(),D(this,e,Nt,Ht,P,{})}}const Ot="/alex-cv/alex.webp";function Zt(t){let e,n,l,i,r,o,a,c,d,g,h,v,C,b,x,w;return a=new Y({props:{src:wt,className:"text-[4rem] animate-bounce"}}),{c(){e=u("div"),n=u("div"),l=u("div"),i=u("h1"),i.innerHTML=`Hello, <br/>I’m
        <span class="underline underline-offset-4">Alex</span>`,r=y(),o=u("a"),T(a.$$.fragment),c=y(),d=u("span"),d.textContent="Next: Experience",g=y(),h=u("div"),v=u("img"),f(i,"class","text-7xl lg:text-[6rem] leading-none font-bold"),f(d,"class","sr-only"),f(o,"href","#experience"),f(o,"rel","nofollow"),f(o,"class","inline-block start -ml-3 mt-8 text-indigo-500 animate-pulse"),f(l,"class","lg:px-8 -mb-24 lg:-mr-32 z-10 relative"),f(n,"class","lg:flex lg:flex-col justify-center"),qe(v.src,C=Ot)||f(v,"src",C),f(v,"alt","Alex Valle"),f(v,"class","object-cover transition-all block duration-1000 opacity-0"),B(v,"translate-x-12",t[0]),B(v,"opacity-100",t[0]),f(h,"class","lg:py-16 overflow-hidden"),f(e,"class","lg:h-screen grid grid-cols-2 lg:-my-16")},m(_,p){S(_,e,p),s(e,n),s(n,l),s(l,i),s(l,r),s(l,o),j(a,o,null),s(o,c),s(o,d),s(e,g),s(e,h),s(h,v),b=!0,x||(w=[he(me.call(null,v)),O(v,"enterViewport",t[1]),O(v,"exitViewport",t[2])],x=!0)},p(_,[p]){(!b||p&1)&&B(v,"translate-x-12",_[0]),(!b||p&1)&&B(v,"opacity-100",_[0])},i(_){b||(L(a.$$.fragment,_),b=!0)},o(_){E(a.$$.fragment,_),b=!1},d(_){_&&V(e),A(a),x=!1,Z(w)}}}function Pt(t,e,n){let l=!1;return[l,()=>n(0,l=!0),()=>n(0,l=!1)]}class Dt extends R{constructor(e){super(),D(this,e,Pt,Zt,P,{})}}function Pe(t,e,n){const l=t.slice();return l[5]=e[n],l}function De(t,e,n){const l=t.slice();return l[8]=e[n],l}function Re(t){let e,n,l,i,r,o,a,c,d=t[8].description+"",g,h;return{c(){e=u("tr"),n=u("td"),l=u("span"),l.textContent=`${t[8].year}`,i=y(),r=u("td"),o=u("p"),a=u("span"),a.textContent=`${t[8].duration}`,c=y(),g=ne(d),h=y(),f(l,"class","transition-transform group-hover:-translate-x-2 inline-block"),f(n,"class","py-8 text-xl md:text-5xl font-extralight inline-block pr-4 md:pr-16"),f(a,"class","font-semibold mr-2"),f(o,"class","transition-transform group-hover:translate-x-2 inline-block"),f(r,"class","py-8"),f(e,"class","group")},m(v,C){S(v,e,C),s(e,n),s(n,l),s(e,i),s(e,r),s(r,o),s(o,a),s(o,c),s(o,g),s(e,h)},p:H,d(v){v&&V(e)}}}function Fe(t){let e,n,l,i,r,o;return{c(){e=u("div"),n=u("h5"),n.textContent=`${t[5].title}`,l=y(),i=u("div"),r=u("div"),o=y(),f(n,"class","col-span-2 uppercase tracking-widest font-semibold text-xs"),f(r,"class","bg-indigo-500 h-full transition-transform duration-1000 -translate-x-full"),f(r,"data-fill",`${t[5].value}%`),f(r,"style",`width: ${t[5].value}%`),B(r,"translate-x-0",t[0]),f(i,"class","bg-indigo-200 h-2 col-span-3 overflow-hidden"),f(e,"class","grid grid-cols-5 items-center")},m(a,c){S(a,e,c),s(e,n),s(e,l),s(e,i),s(i,r),s(e,o)},p(a,c){c&1&&B(r,"translate-x-0",a[0])},d(a){a&&V(e)}}}function Rt(t){let e,n,l,i,r,o,a,c,d,g,h,v,C;l=new ae({props:{title:"Skills",subtitle:"Showcasing my arsenal of skills and expertise"}});let b=z(t[1]),x=[];for(let p=0;p<b.length;p+=1)x[p]=Re(De(t,b,p));let w=z(t[2]),_=[];for(let p=0;p<w.length;p+=1)_[p]=Fe(Pe(t,w,p));return{c(){e=u("div"),n=u("div"),T(l.$$.fragment),i=y(),r=u("p"),r.textContent=`Whether it's building robust web applications, crafting elegant user
      interfaces, or collaborating with cross-functional teams, the Skills
      section is a testament to my dedication to continuous learning and mastery
      of the craft of software engineering.`,o=y(),a=u("div"),c=u("table");for(let p=0;p<x.length;p+=1)x[p].c();d=y(),g=u("section");for(let p=0;p<_.length;p+=1)_[p].c();f(n,"class","space-y-4"),f(a,"class","p-8 md:p-16 bg-indigo-600 text-white my-8 md:my-16"),f(g,"class","grid md:grid-cols-2 gap-x-16 gap-y-4")},m(p,k){S(p,e,k),s(e,n),j(l,n,null),s(n,i),s(n,r),s(e,o),s(e,a),s(a,c);for(let m=0;m<x.length;m+=1)x[m]&&x[m].m(c,null);s(e,d),s(e,g);for(let m=0;m<_.length;m+=1)_[m]&&_[m].m(g,null);h=!0,v||(C=[he(me.call(null,g)),O(g,"enterViewport",t[3]),O(g,"exitViewport",t[4])],v=!0)},p(p,[k]){if(k&2){b=z(p[1]);let m;for(m=0;m<b.length;m+=1){const N=De(p,b,m);x[m]?x[m].p(N,k):(x[m]=Re(N),x[m].c(),x[m].m(c,null))}for(;m<x.length;m+=1)x[m].d(1);x.length=b.length}if(k&5){w=z(p[2]);let m;for(m=0;m<w.length;m+=1){const N=Pe(p,w,m);_[m]?_[m].p(N,k):(_[m]=Fe(N),_[m].c(),_[m].m(g,null))}for(;m<_.length;m+=1)_[m].d(1);_.length=w.length}},i(p){h||(L(l.$$.fragment,p),h=!0)},o(p){E(l.$$.fragment,p),h=!1},d(p){p&&V(e),A(l),te(x,p),te(_,p),v=!1,Z(C)}}}function Ft(t,e,n){const l=[{year:"2019",duration:"2017 - 2019",description:"Explored data visualization and micro web app development techniques."},{year:"2020",duration:"2020-2021",description:"Mastered advanced JavaScript, CSS; enhanced data analysis skills."},{year:"2021",duration:"2021 - 2023",description:"Perfected Vue.js, React; learned Vite, TypeScript, state management, routing, various frameworks. Spearheaded DeFi projects; integrated GraphQL, Nest.js, AWS, Netlify, Vercel."},{year:"2023",duration:"2023 - current",description:"Adopted modern web practices; developed project management, collaboration skills; explored Electron. Implemented CI/CD pipelines, end-to-end testing; delved into federated runtime microservices."}],i=[{title:"JavaScript",value:90},{title:"React",value:80},{title:"Vue.js",value:85},{title:"TypeScript",value:85},{title:"CSS",value:85},{title:"Node.js",value:85},{title:"GraphQL",value:75},{title:"CI/CD",value:70},{title:"Testing",value:80},{title:"Collaboration",value:95}];let r=!1;return[r,l,i,()=>n(0,r=!0),()=>n(0,r=!1)]}class Wt extends R{constructor(e){super(),D(this,e,Ft,Rt,P,{})}}function qt(t){let e,n,l,i,r;return n=new ae({props:{title:"Contact",subtitle:"Reach out to connect, collaborate, and create together"}}),{c(){e=u("div"),T(n.$$.fragment),l=y(),i=u("div"),i.innerHTML=`<p><strong>Name:</strong> Alex Valle<br/><strong>Status:</strong>
      US Citizen<br/><strong>Location:</strong>
      Tampa, FL</p> <p class="overflow-hidden text-ellipsis"><strong>Clearance:</strong> Secret<br/><strong>Email:</strong> <a href="mailto:alex.valle@gmail.com">alex.valle@gmail.com</a><br/><strong>Languages:</strong>
      English, Español</p>`,f(i,"class","grid md:grid-cols-2 gap-x-16"),f(e,"class","max-w-2xl space-y-8 pb-16")},m(o,a){S(o,e,a),j(n,e,null),s(e,l),s(e,i),r=!0},p:H,i(o){r||(L(n.$$.fragment,o),r=!0)},o(o){E(n.$$.fragment,o),r=!1},d(o){o&&V(e),A(n)}}}class Gt extends R{constructor(e){super(),D(this,e,null,qt,P,{})}}const Qe=[{id:"home",component:Dt},{id:"experience",component:zt},{id:"about",component:It},{id:"projects",component:Tt},{id:"skills",component:Wt},{id:"contact",component:Gt}];function Ut(t,e,n){const l=t.slice();return l[2]=e[n].id,l[3]=e[n].component,l}function Jt(t){let e,n,l,i;var r=t[3];function o(a,c){return{}}return r&&(n=Ie(r,o())),{c(){e=u("section"),n&&T(n.$$.fragment),l=y(),f(e,"id",t[2]),f(e,"class","py-8 px-2 lg:px-0 lg:py-16")},m(a,c){S(a,e,c),n&&j(n,e,null),s(e,l),i=!0},p(a,c){if(r!==(r=a[3])){if(n){Ue();const d=n;E(d.$$.fragment,1,0,()=>{A(d,1)}),Je()}r?(n=Ie(r,o()),T(n.$$.fragment),L(n.$$.fragment,1),j(n,e,l)):n=null}},i(a){i||(n&&L(n.$$.fragment,a),i=!0)},o(a){n&&E(n.$$.fragment,a),i=!1},d(a){a&&V(e),n&&A(n)}}}function Qt(t){let e,n,l,i,r,o,a,c,d;l=new $t({props:{currentSection:t[0]}});let g=z(Qe),h=[];for(let v=0;v<g.length;v+=1)h[v]=Jt(Ut(t,g,v));return{c(){e=u("div"),n=u("header"),T(l.$$.fragment),i=y(),r=u("main"),o=u("div");for(let v=0;v<h.length;v+=1)h[v].c();a=y(),c=u("footer"),c.innerHTML='<p>That&#39;s it, The End!</p> <p>Oh, here&#39;s the <a href="https://github.com/krystlc/alex-cv" class="underline underline-offset-4 text-indigo-400" target="_blank" rel="noopener noreferrer">source code</a>.</p>',f(n,"class","bg-indigo-50 top-0 z-20 lg:col-span-1 lg:order-last sticky lg:h-screen lg:flex-col lg:justify-center lg:p-16"),f(o,"class","mx-auto max-w-3xl"),f(r,"class","col-span-2"),f(e,"class","lg:grid grid-cols-3"),f(c,"class","h-screen flex flex-col gap-1 items-center justify-center bg-black text-white")},m(v,C){S(v,e,C),s(e,n),j(l,n,null),s(e,i),s(e,r),s(r,o);for(let b=0;b<h.length;b+=1)h[b]&&h[b].m(o,null);S(v,a,C),S(v,c,C),d=!0},p(v,[C]){const b={};C&1&&(b.currentSection=v[0]),l.$set(b)},i(v){if(!d){L(l.$$.fragment,v);for(let C=0;C<g.length;C+=1)L(h[C]);d=!0}},o(v){E(l.$$.fragment,v),h=h.filter(Boolean);for(let C=0;C<h.length;C+=1)E(h[C]);d=!1},d(v){v&&(V(e),V(a),V(c)),A(l),te(h,v)}}}function Kt(t,e,n){let l="home";rt(()=>{const r=new IntersectionObserver(i,{root:null,rootMargin:"0px",threshold:.5});return Qe.forEach(({id:o})=>{const a=document.getElementById(o);a&&r.observe(a)}),()=>{r.disconnect()}});function i(r){r.forEach(o=>{o.isIntersecting&&n(0,l=o.target.id)})}return[l]}class Xt extends R{constructor(e){super(),D(this,e,Kt,Qt,P,{})}}new Xt({target:document.getElementById("app")});