import{n as p,p as k}from"./index-1f15b9d0.js";/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const B=o=>{let s=-E*10,r=0,e,l,i;const C=o.getBoolean("animated",!0)&&o.getBoolean("rippleEffect",!0),u=new WeakMap,I=t=>{s=p(t),T(t)},m=t=>{s=p(t),h(t)},_=t=>{if(t.button===2)return;const n=p(t)-E;s<n&&T(t)},M=t=>{const n=p(t)-E;s<n&&h(t)},v=()=>{i&&clearTimeout(i),i=void 0,e&&(D(!1),e=void 0)},T=t=>{e||L(y(t),t)},h=t=>{L(void 0,t)},L=(t,n)=>{if(t&&t===e)return;i&&clearTimeout(i),i=void 0;const{x:d,y:a}=k(n);if(e){if(u.has(e))throw new Error("internal error");e.classList.contains(f)||A(e,d,a),D(!0)}if(t){const R=u.get(t);R&&(clearTimeout(R),u.delete(t)),t.classList.remove(f);const S=()=>{A(t,d,a),i=void 0};b(t)?S():i=setTimeout(S,q)}e=t},A=(t,n,d)=>{if(r=Date.now(),t.classList.add(f),!C)return;const a=U(t);a!==null&&(w(),l=a.addRipple(n,d))},w=()=>{l!==void 0&&(l.then(t=>t()),l=void 0)},D=t=>{w();const n=e;if(!n)return;const d=g-Date.now()+r;if(t&&d>0&&!b(n)){const a=setTimeout(()=>{n.classList.remove(f),u.delete(n)},g);u.set(n,a)}else n.classList.remove(f)},c=document;c.addEventListener("ionGestureCaptured",v),c.addEventListener("touchstart",I,!0),c.addEventListener("touchcancel",m,!0),c.addEventListener("touchend",m,!0),c.addEventListener("pointercancel",v,!0),c.addEventListener("mousedown",_,!0),c.addEventListener("mouseup",M,!0)},y=o=>{if(o.composedPath!==void 0){const s=o.composedPath();for(let r=0;r<s.length-2;r++){const e=s[r];if(!(e instanceof ShadowRoot)&&e.classList.contains("ion-activatable"))return e}}else return o.target.closest(".ion-activatable")},b=o=>o.classList.contains("ion-activatable-instant"),U=o=>{if(o.shadowRoot){const s=o.shadowRoot.querySelector("ion-ripple-effect");if(s)return s}return o.querySelector("ion-ripple-effect")},f="ion-activated",q=100,g=150,E=2500;export{B as startTapClick};
