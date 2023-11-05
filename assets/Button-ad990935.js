import{q as Me,d as xe,e as ge,f as Ne,g as se,h as Le,a as v,i as ve,c as V,b as f,j as me,k as je,l as W,m as ue,n as pe,u as Oe,o as Ae,p as J}from"./Icon-df1c938c.js";import{a3 as Ve,a4 as Ke,K as qe,a as R,r as j,w as Qe,f as Ye,a5 as Ue,i as le,p as Xe,j as ye,a6 as Ce,l as Je,d as K,h,t as we,n as Ze}from"./runtime-core.esm-bundler-6798075e.js";import{T as Pe,a as eo}from"./runtime-dom.esm-bundler-307f6a53.js";function $e(e,...r){if(Array.isArray(e))e.forEach(t=>$e(t,...r));else return e(...r)}function q(e){return e.some(r=>Ve(r)?!(r.type===Ke||r.type===qe&&!q(r.children)):!0)?e:null}function zo(e,r){return e&&q(e())||r()}function Bo(e,r,t){return e&&q(e(r))||t(r)}function fe(e,r){const t=e&&q(e());return r(t||null)}function oo(e){return!(e&&q(e()))}function he(e){return e.replace(/#|\(|\)|,|\s/g,"_")}function ro(e,r){if(e===void 0)return!1;if(r){const{context:{ids:t}}=r;return t.has(e)}return Me(e)!==null}function l(e,r){return e+(r==="default"?"":r.replace(/^[a-z]/,t=>t.toUpperCase()))}l("abc","def");const ee=typeof document<"u"&&typeof window<"u";function to(e){const r=R(e),t=j(r.value);return Qe(r,s=>{t.value=s}),typeof e=="function"?t:{__v_isRef:!0,get value(){return t.value},set value(s){e.set(s)}}}function no(){const e=j(!1);return Ye(()=>{e.value=!0}),Ue(e)}const be=xe("n-form-item");function io(e,{defaultSize:r="medium",mergedSize:t,mergedDisabled:s}={}){const i=le(be,null);Xe(be,null);const d=R(t?()=>t(i):()=>{const{size:c}=e;if(c)return c;if(i){const{mergedSize:O}=i;if(O.value!==void 0)return O.value}return r}),m=R(s?()=>s(i):()=>{const{disabled:c}=e;return c!==void 0?c:i?i.disabled.value:!1}),n=R(()=>{const{status:c}=e;return c||(i==null?void 0:i.mergedValidationStatus.value)});return ye(()=>{i&&i.restoreValidation()}),{mergedSizeRef:d,mergedDisabledRef:m,mergedStatusRef:n,nTriggerFormBlur(){i&&i.handleContentBlur()},nTriggerFormChange(){i&&i.handleContentChange()},nTriggerFormFocus(){i&&i.handleContentFocus()},nTriggerFormInput(){i&&i.handleContentInput()}}}function Se(e,r,t){if(!r)return;const s=ge(),i=le(Ne,null),d=()=>{const m=t==null?void 0:t.value;r.mount({id:m===void 0?e:m+e,head:!0,anchorMetaName:se,props:{bPrefix:m?`.${m}-`:void 0},ssr:s}),i!=null&&i.preflightStyleDisabled||Le.mount({id:"n-global",head:!0,anchorMetaName:se,ssr:s})};s?d():Ce(d)}function so(e,r,t){if(!r)return;const s=ge(),i=R(()=>{const{value:m}=r;if(!m)return;const n=m[e];if(n)return n}),d=()=>{Je(()=>{const{value:m}=t,n=`${m}${e}Rtl`;if(ro(n,s))return;const{value:c}=i;c&&c.style.mount({id:n,head:!0,anchorMetaName:se,props:{bPrefix:m?`.${m}-`:void 0},ssr:s})})};return s?d():Ce(d),i}const Te=K({name:"BaseIconSwitchTransition",setup(e,{slots:r}){const t=no();return()=>h(Pe,{name:"icon-switch-transition",appear:t.value},r)}}),ao=K({name:"FadeInExpandTransition",props:{appear:Boolean,group:Boolean,mode:String,onLeave:Function,onAfterLeave:Function,onAfterEnter:Function,width:Boolean,reverse:Boolean},setup(e,{slots:r}){function t(n){e.width?n.style.maxWidth=`${n.offsetWidth}px`:n.style.maxHeight=`${n.offsetHeight}px`,n.offsetWidth}function s(n){e.width?n.style.maxWidth="0":n.style.maxHeight="0",n.offsetWidth;const{onLeave:c}=e;c&&c()}function i(n){e.width?n.style.maxWidth="":n.style.maxHeight="";const{onAfterLeave:c}=e;c&&c()}function d(n){if(n.style.transition="none",e.width){const c=n.offsetWidth;n.style.maxWidth="0",n.offsetWidth,n.style.transition="",n.style.maxWidth=`${c}px`}else if(e.reverse)n.style.maxHeight=`${n.offsetHeight}px`,n.offsetHeight,n.style.transition="",n.style.maxHeight="0";else{const c=n.offsetHeight;n.style.maxHeight="0",n.offsetWidth,n.style.transition="",n.style.maxHeight=`${c}px`}n.offsetWidth}function m(n){var c;e.width?n.style.maxWidth="":e.reverse||(n.style.maxHeight=""),(c=e.onAfterEnter)===null||c===void 0||c.call(e)}return()=>{const n=e.group?eo:Pe;return h(n,{name:e.width?"fade-in-width-expand-transition":"fade-in-height-expand-transition",mode:e.mode,appear:e.appear,onEnter:d,onAfterEnter:m,onBeforeLeave:t,onLeave:s,onAfterLeave:i},r)}}}),{cubicBezierEaseInOut:lo}=ve;function ae({originalTransform:e="",left:r=0,top:t=0,transition:s=`all .3s ${lo} !important`}={}){return[v("&.icon-switch-transition-enter-from, &.icon-switch-transition-leave-to",{transform:e+" scale(0.75)",left:r,top:t,opacity:0}),v("&.icon-switch-transition-enter-to, &.icon-switch-transition-leave-from",{transform:`scale(1) ${e}`,left:r,top:t,opacity:1}),v("&.icon-switch-transition-enter-active, &.icon-switch-transition-leave-active",{transformOrigin:"center",position:"absolute",left:r,top:t,transition:s})]}const co=v([v("@keyframes loading-container-rotate",`
 to {
 -webkit-transform: rotate(360deg);
 transform: rotate(360deg);
 }
 `),v("@keyframes loading-layer-rotate",`
 12.5% {
 -webkit-transform: rotate(135deg);
 transform: rotate(135deg);
 }
 25% {
 -webkit-transform: rotate(270deg);
 transform: rotate(270deg);
 }
 37.5% {
 -webkit-transform: rotate(405deg);
 transform: rotate(405deg);
 }
 50% {
 -webkit-transform: rotate(540deg);
 transform: rotate(540deg);
 }
 62.5% {
 -webkit-transform: rotate(675deg);
 transform: rotate(675deg);
 }
 75% {
 -webkit-transform: rotate(810deg);
 transform: rotate(810deg);
 }
 87.5% {
 -webkit-transform: rotate(945deg);
 transform: rotate(945deg);
 }
 100% {
 -webkit-transform: rotate(1080deg);
 transform: rotate(1080deg);
 } 
 `),v("@keyframes loading-left-spin",`
 from {
 -webkit-transform: rotate(265deg);
 transform: rotate(265deg);
 }
 50% {
 -webkit-transform: rotate(130deg);
 transform: rotate(130deg);
 }
 to {
 -webkit-transform: rotate(265deg);
 transform: rotate(265deg);
 }
 `),v("@keyframes loading-right-spin",`
 from {
 -webkit-transform: rotate(-265deg);
 transform: rotate(-265deg);
 }
 50% {
 -webkit-transform: rotate(-130deg);
 transform: rotate(-130deg);
 }
 to {
 -webkit-transform: rotate(-265deg);
 transform: rotate(-265deg);
 }
 `),V("base-loading",`
 position: relative;
 line-height: 0;
 width: 1em;
 height: 1em;
 `,[f("transition-wrapper",`
 position: absolute;
 width: 100%;
 height: 100%;
 `,[ae()]),f("container",`
 display: inline-flex;
 position: relative;
 direction: ltr;
 line-height: 0;
 animation: loading-container-rotate 1568.2352941176ms linear infinite;
 font-size: 0;
 letter-spacing: 0;
 white-space: nowrap;
 opacity: 1;
 width: 100%;
 height: 100%;
 `,[f("svg",`
 stroke: var(--n-text-color);
 fill: transparent;
 position: absolute;
 height: 100%;
 overflow: hidden;
 `),f("container-layer",`
 position: absolute;
 width: 100%;
 height: 100%;
 animation: loading-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
 `,[f("container-layer-left",`
 display: inline-flex;
 position: relative;
 width: 50%;
 height: 100%;
 overflow: hidden;
 `,[f("svg",`
 animation: loading-left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
 width: 200%;
 `)]),f("container-layer-patch",`
 position: absolute;
 top: 0;
 left: 47.5%;
 box-sizing: border-box;
 width: 5%;
 height: 100%;
 overflow: hidden;
 `,[f("svg",`
 left: -900%;
 width: 2000%;
 transform: rotate(180deg);
 `)]),f("container-layer-right",`
 display: inline-flex;
 position: relative;
 width: 50%;
 height: 100%;
 overflow: hidden;
 `,[f("svg",`
 animation: loading-right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
 left: -100%;
 width: 200%;
 `)])])]),f("placeholder",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[ae({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})])])]),uo={strokeWidth:{type:Number,default:28},stroke:{type:String,default:void 0}},fo=K({name:"BaseLoading",props:Object.assign({clsPrefix:{type:String,required:!0},show:{type:Boolean,default:!0},scale:{type:Number,default:1},radius:{type:Number,default:100}},uo),setup(e){Se("-base-loading",co,we(e,"clsPrefix"))},render(){const{clsPrefix:e,radius:r,strokeWidth:t,stroke:s,scale:i}=this,d=r/i;return h("div",{class:`${e}-base-loading`,role:"img","aria-label":"loading"},h(Te,null,{default:()=>this.show?h("div",{key:"icon",class:`${e}-base-loading__transition-wrapper`},h("div",{class:`${e}-base-loading__container`},h("div",{class:`${e}-base-loading__container-layer`},h("div",{class:`${e}-base-loading__container-layer-left`},h("svg",{class:`${e}-base-loading__svg`,viewBox:`0 0 ${2*d} ${2*d}`,xmlns:"http://www.w3.org/2000/svg",style:{color:s}},h("circle",{fill:"none",stroke:"currentColor","stroke-width":t,"stroke-linecap":"round",cx:d,cy:d,r:r-t/2,"stroke-dasharray":4.91*r,"stroke-dashoffset":2.46*r}))),h("div",{class:`${e}-base-loading__container-layer-patch`},h("svg",{class:`${e}-base-loading__svg`,viewBox:`0 0 ${2*d} ${2*d}`,xmlns:"http://www.w3.org/2000/svg",style:{color:s}},h("circle",{fill:"none",stroke:"currentColor","stroke-width":t,"stroke-linecap":"round",cx:d,cy:d,r:r-t/2,"stroke-dasharray":4.91*r,"stroke-dashoffset":2.46*r}))),h("div",{class:`${e}-base-loading__container-layer-right`},h("svg",{class:`${e}-base-loading__svg`,viewBox:`0 0 ${2*d} ${2*d}`,xmlns:"http://www.w3.org/2000/svg",style:{color:s}},h("circle",{fill:"none",stroke:"currentColor","stroke-width":t,"stroke-linecap":"round",cx:d,cy:d,r:r-t/2,"stroke-dasharray":4.91*r,"stroke-dashoffset":2.46*r})))))):h("div",{key:"placeholder",class:`${e}-base-loading__placeholder`},this.$slots)}))}}),ho=V("base-wave",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
`),bo=K({name:"BaseWave",props:{clsPrefix:{type:String,required:!0}},setup(e){Se("-base-wave",ho,we(e,"clsPrefix"));const r=j(null),t=j(!1);let s=null;return ye(()=>{s!==null&&window.clearTimeout(s)}),{active:t,selfRef:r,play(){s!==null&&(window.clearTimeout(s),t.value=!1,s=null),Ze(()=>{var i;(i=r.value)===null||i===void 0||i.offsetHeight,t.value=!0,s=window.setTimeout(()=>{t.value=!1,s=null},1e3)})}}},render(){const{clsPrefix:e}=this;return h("div",{ref:"selfRef","aria-hidden":!0,class:[`${e}-base-wave`,this.active&&`${e}-base-wave--active`]})}}),{cubicBezierEaseInOut:M}=ve;function xo({duration:e=".2s",delay:r=".1s"}={}){return[v("&.fade-in-width-expand-transition-leave-from, &.fade-in-width-expand-transition-enter-to",{opacity:1}),v("&.fade-in-width-expand-transition-leave-to, &.fade-in-width-expand-transition-enter-from",`
 opacity: 0!important;
 margin-left: 0!important;
 margin-right: 0!important;
 `),v("&.fade-in-width-expand-transition-leave-active",`
 overflow: hidden;
 transition:
 opacity ${e} ${M},
 max-width ${e} ${M} ${r},
 margin-left ${e} ${M} ${r},
 margin-right ${e} ${M} ${r};
 `),v("&.fade-in-width-expand-transition-enter-active",`
 overflow: hidden;
 transition:
 opacity ${e} ${M} ${r},
 max-width ${e} ${M},
 margin-left ${e} ${M},
 margin-right ${e} ${M};
 `)]}const go=ee&&"chrome"in window;ee&&navigator.userAgent.includes("Firefox");const vo=ee&&navigator.userAgent.includes("Safari")&&!go;function L(e){return me(e,[255,255,255,.16])}function Z(e){return me(e,[0,0,0,.12])}const mo=xe("n-button-group"),po={paddingTiny:"0 6px",paddingSmall:"0 10px",paddingMedium:"0 14px",paddingLarge:"0 18px",paddingRoundTiny:"0 10px",paddingRoundSmall:"0 14px",paddingRoundMedium:"0 18px",paddingRoundLarge:"0 22px",iconMarginTiny:"6px",iconMarginSmall:"6px",iconMarginMedium:"6px",iconMarginLarge:"6px",iconSizeTiny:"14px",iconSizeSmall:"18px",iconSizeMedium:"18px",iconSizeLarge:"20px",rippleDuration:".6s"},yo=e=>{const{heightTiny:r,heightSmall:t,heightMedium:s,heightLarge:i,borderRadius:d,fontSizeTiny:m,fontSizeSmall:n,fontSizeMedium:c,fontSizeLarge:O,opacityDisabled:oe,textColor2:T,textColor3:re,primaryColorHover:C,primaryColorPressed:H,borderColor:Q,primaryColor:E,baseColor:b,infoColor:I,infoColorHover:S,infoColorPressed:a,successColor:x,successColorHover:P,successColorPressed:o,warningColor:z,warningColorHover:k,warningColorPressed:G,errorColor:B,errorColorHover:w,errorColorPressed:_,fontWeight:D,buttonColor2:A,buttonColor2Hover:F,buttonColor2Pressed:g,fontWeightStrong:Y}=e;return Object.assign(Object.assign({},po),{heightTiny:r,heightSmall:t,heightMedium:s,heightLarge:i,borderRadiusTiny:d,borderRadiusSmall:d,borderRadiusMedium:d,borderRadiusLarge:d,fontSizeTiny:m,fontSizeSmall:n,fontSizeMedium:c,fontSizeLarge:O,opacityDisabled:oe,colorOpacitySecondary:"0.16",colorOpacitySecondaryHover:"0.22",colorOpacitySecondaryPressed:"0.28",colorSecondary:A,colorSecondaryHover:F,colorSecondaryPressed:g,colorTertiary:A,colorTertiaryHover:F,colorTertiaryPressed:g,colorQuaternary:"#0000",colorQuaternaryHover:F,colorQuaternaryPressed:g,color:"#0000",colorHover:"#0000",colorPressed:"#0000",colorFocus:"#0000",colorDisabled:"#0000",textColor:T,textColorTertiary:re,textColorHover:C,textColorPressed:H,textColorFocus:C,textColorDisabled:T,textColorText:T,textColorTextHover:C,textColorTextPressed:H,textColorTextFocus:C,textColorTextDisabled:T,textColorGhost:T,textColorGhostHover:C,textColorGhostPressed:H,textColorGhostFocus:C,textColorGhostDisabled:T,border:`1px solid ${Q}`,borderHover:`1px solid ${C}`,borderPressed:`1px solid ${H}`,borderFocus:`1px solid ${C}`,borderDisabled:`1px solid ${Q}`,rippleColor:E,colorPrimary:E,colorHoverPrimary:C,colorPressedPrimary:H,colorFocusPrimary:C,colorDisabledPrimary:E,textColorPrimary:b,textColorHoverPrimary:b,textColorPressedPrimary:b,textColorFocusPrimary:b,textColorDisabledPrimary:b,textColorTextPrimary:E,textColorTextHoverPrimary:C,textColorTextPressedPrimary:H,textColorTextFocusPrimary:C,textColorTextDisabledPrimary:T,textColorGhostPrimary:E,textColorGhostHoverPrimary:C,textColorGhostPressedPrimary:H,textColorGhostFocusPrimary:C,textColorGhostDisabledPrimary:E,borderPrimary:`1px solid ${E}`,borderHoverPrimary:`1px solid ${C}`,borderPressedPrimary:`1px solid ${H}`,borderFocusPrimary:`1px solid ${C}`,borderDisabledPrimary:`1px solid ${E}`,rippleColorPrimary:E,colorInfo:I,colorHoverInfo:S,colorPressedInfo:a,colorFocusInfo:S,colorDisabledInfo:I,textColorInfo:b,textColorHoverInfo:b,textColorPressedInfo:b,textColorFocusInfo:b,textColorDisabledInfo:b,textColorTextInfo:I,textColorTextHoverInfo:S,textColorTextPressedInfo:a,textColorTextFocusInfo:S,textColorTextDisabledInfo:T,textColorGhostInfo:I,textColorGhostHoverInfo:S,textColorGhostPressedInfo:a,textColorGhostFocusInfo:S,textColorGhostDisabledInfo:I,borderInfo:`1px solid ${I}`,borderHoverInfo:`1px solid ${S}`,borderPressedInfo:`1px solid ${a}`,borderFocusInfo:`1px solid ${S}`,borderDisabledInfo:`1px solid ${I}`,rippleColorInfo:I,colorSuccess:x,colorHoverSuccess:P,colorPressedSuccess:o,colorFocusSuccess:P,colorDisabledSuccess:x,textColorSuccess:b,textColorHoverSuccess:b,textColorPressedSuccess:b,textColorFocusSuccess:b,textColorDisabledSuccess:b,textColorTextSuccess:x,textColorTextHoverSuccess:P,textColorTextPressedSuccess:o,textColorTextFocusSuccess:P,textColorTextDisabledSuccess:T,textColorGhostSuccess:x,textColorGhostHoverSuccess:P,textColorGhostPressedSuccess:o,textColorGhostFocusSuccess:P,textColorGhostDisabledSuccess:x,borderSuccess:`1px solid ${x}`,borderHoverSuccess:`1px solid ${P}`,borderPressedSuccess:`1px solid ${o}`,borderFocusSuccess:`1px solid ${P}`,borderDisabledSuccess:`1px solid ${x}`,rippleColorSuccess:x,colorWarning:z,colorHoverWarning:k,colorPressedWarning:G,colorFocusWarning:k,colorDisabledWarning:z,textColorWarning:b,textColorHoverWarning:b,textColorPressedWarning:b,textColorFocusWarning:b,textColorDisabledWarning:b,textColorTextWarning:z,textColorTextHoverWarning:k,textColorTextPressedWarning:G,textColorTextFocusWarning:k,textColorTextDisabledWarning:T,textColorGhostWarning:z,textColorGhostHoverWarning:k,textColorGhostPressedWarning:G,textColorGhostFocusWarning:k,textColorGhostDisabledWarning:z,borderWarning:`1px solid ${z}`,borderHoverWarning:`1px solid ${k}`,borderPressedWarning:`1px solid ${G}`,borderFocusWarning:`1px solid ${k}`,borderDisabledWarning:`1px solid ${z}`,rippleColorWarning:z,colorError:B,colorHoverError:w,colorPressedError:_,colorFocusError:w,colorDisabledError:B,textColorError:b,textColorHoverError:b,textColorPressedError:b,textColorFocusError:b,textColorDisabledError:b,textColorTextError:B,textColorTextHoverError:w,textColorTextPressedError:_,textColorTextFocusError:w,textColorTextDisabledError:T,textColorGhostError:B,textColorGhostHoverError:w,textColorGhostPressedError:_,textColorGhostFocusError:w,textColorGhostDisabledError:B,borderError:`1px solid ${B}`,borderHoverError:`1px solid ${w}`,borderPressedError:`1px solid ${_}`,borderFocusError:`1px solid ${w}`,borderDisabledError:`1px solid ${B}`,rippleColorError:B,waveOpacity:"0.6",fontWeight:D,fontWeightStrong:Y})},Co={name:"Button",common:je,self:yo},wo=Co,Po=v([V("button",`
 margin: 0;
 font-weight: var(--n-font-weight);
 line-height: 1;
 font-family: inherit;
 padding: var(--n-padding);
 height: var(--n-height);
 font-size: var(--n-font-size);
 border-radius: var(--n-border-radius);
 color: var(--n-text-color);
 background-color: var(--n-color);
 width: var(--n-width);
 white-space: nowrap;
 outline: none;
 position: relative;
 z-index: auto;
 border: none;
 display: inline-flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 align-items: center;
 justify-content: center;
 user-select: none;
 -webkit-user-select: none;
 text-align: center;
 cursor: pointer;
 text-decoration: none;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[W("color",[f("border",{borderColor:"var(--n-border-color)"}),W("disabled",[f("border",{borderColor:"var(--n-border-color-disabled)"})]),ue("disabled",[v("&:focus",[f("state-border",{borderColor:"var(--n-border-color-focus)"})]),v("&:hover",[f("state-border",{borderColor:"var(--n-border-color-hover)"})]),v("&:active",[f("state-border",{borderColor:"var(--n-border-color-pressed)"})]),W("pressed",[f("state-border",{borderColor:"var(--n-border-color-pressed)"})])])]),W("disabled",{backgroundColor:"var(--n-color-disabled)",color:"var(--n-text-color-disabled)"},[f("border",{border:"var(--n-border-disabled)"})]),ue("disabled",[v("&:focus",{backgroundColor:"var(--n-color-focus)",color:"var(--n-text-color-focus)"},[f("state-border",{border:"var(--n-border-focus)"})]),v("&:hover",{backgroundColor:"var(--n-color-hover)",color:"var(--n-text-color-hover)"},[f("state-border",{border:"var(--n-border-hover)"})]),v("&:active",{backgroundColor:"var(--n-color-pressed)",color:"var(--n-text-color-pressed)"},[f("state-border",{border:"var(--n-border-pressed)"})]),W("pressed",{backgroundColor:"var(--n-color-pressed)",color:"var(--n-text-color-pressed)"},[f("state-border",{border:"var(--n-border-pressed)"})])]),W("loading","cursor: wait;"),V("base-wave",`
 pointer-events: none;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 animation-iteration-count: 1;
 animation-duration: var(--n-ripple-duration);
 animation-timing-function: var(--n-bezier-ease-out), var(--n-bezier-ease-out);
 `,[W("active",{zIndex:1,animationName:"button-wave-spread, button-wave-opacity"})]),ee&&"MozBoxSizing"in document.createElement("div").style?v("&::moz-focus-inner",{border:0}):null,f("border, state-border",`
 position: absolute;
 left: 0;
 top: 0;
 right: 0;
 bottom: 0;
 border-radius: inherit;
 transition: border-color .3s var(--n-bezier);
 pointer-events: none;
 `),f("border",{border:"var(--n-border)"}),f("state-border",{border:"var(--n-border)",borderColor:"#0000",zIndex:1}),f("icon",`
 margin: var(--n-icon-margin);
 margin-left: 0;
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 max-width: var(--n-icon-size);
 font-size: var(--n-icon-size);
 position: relative;
 flex-shrink: 0;
 `,[V("icon-slot",`
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 position: absolute;
 left: 0;
 top: 50%;
 transform: translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 `,[ae({top:"50%",originalTransform:"translateY(-50%)"})]),xo()]),f("content",`
 display: flex;
 align-items: center;
 flex-wrap: nowrap;
 min-width: 0;
 `,[v("~",[f("icon",{margin:"var(--n-icon-margin)",marginRight:0})])]),W("block",`
 display: flex;
 width: 100%;
 `),W("dashed",[f("border, state-border",{borderStyle:"dashed !important"})]),W("disabled",{cursor:"not-allowed",opacity:"var(--n-opacity-disabled)"})]),v("@keyframes button-wave-spread",{from:{boxShadow:"0 0 0.5px 0 var(--n-ripple-color)"},to:{boxShadow:"0 0 0.5px 4.5px var(--n-ripple-color)"}}),v("@keyframes button-wave-opacity",{from:{opacity:"var(--n-wave-opacity)"},to:{opacity:0}})]),$o=Object.assign(Object.assign({},pe.props),{color:String,textColor:String,text:Boolean,block:Boolean,loading:Boolean,disabled:Boolean,circle:Boolean,size:String,ghost:Boolean,round:Boolean,secondary:Boolean,tertiary:Boolean,quaternary:Boolean,strong:Boolean,focusable:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},tag:{type:String,default:"button"},type:{type:String,default:"default"},dashed:Boolean,renderIcon:Function,iconPlacement:{type:String,default:"left"},attrType:{type:String,default:"button"},bordered:{type:Boolean,default:!0},onClick:[Function,Array],nativeFocusBehavior:{type:Boolean,default:!vo}}),So=K({name:"Button",props:$o,setup(e){const r=j(null),t=j(null),s=j(!1),i=to(()=>!e.quaternary&&!e.tertiary&&!e.secondary&&!e.text&&(!e.color||e.ghost||e.dashed)&&e.bordered),d=le(mo,{}),{mergedSizeRef:m}=io({},{defaultSize:"medium",mergedSize:a=>{const{size:x}=e;if(x)return x;const{size:P}=d;if(P)return P;const{mergedSize:o}=a||{};return o?o.value:"medium"}}),n=R(()=>e.focusable&&!e.disabled),c=a=>{var x;n.value||a.preventDefault(),!e.nativeFocusBehavior&&(a.preventDefault(),!e.disabled&&n.value&&((x=r.value)===null||x===void 0||x.focus({preventScroll:!0})))},O=a=>{var x;if(!e.disabled&&!e.loading){const{onClick:P}=e;P&&$e(P,a),e.text||(x=t.value)===null||x===void 0||x.play()}},oe=a=>{switch(a.key){case"Enter":if(!e.keyboard)return;s.value=!1}},T=a=>{switch(a.key){case"Enter":if(!e.keyboard||e.loading){a.preventDefault();return}s.value=!0}},re=()=>{s.value=!1},{inlineThemeDisabled:C,mergedClsPrefixRef:H,mergedRtlRef:Q}=Oe(e),E=pe("Button","-button",Po,wo,e,H),b=so("Button",Q,H),I=R(()=>{const a=E.value,{common:{cubicBezierEaseInOut:x,cubicBezierEaseOut:P},self:o}=a,{rippleDuration:z,opacityDisabled:k,fontWeight:G,fontWeightStrong:B}=o,w=m.value,{dashed:_,type:D,ghost:A,text:F,color:g,round:Y,circle:te,textColor:N,secondary:ke,tertiary:de,quaternary:He,strong:ze}=e,Be={"font-weight":ze?B:G};let p={"--n-color":"initial","--n-color-hover":"initial","--n-color-pressed":"initial","--n-color-focus":"initial","--n-color-disabled":"initial","--n-ripple-color":"initial","--n-text-color":"initial","--n-text-color-hover":"initial","--n-text-color-pressed":"initial","--n-text-color-focus":"initial","--n-text-color-disabled":"initial"};const U=D==="tertiary",ce=D==="default",u=U?"default":D;if(F){const y=N||g;p={"--n-color":"#0000","--n-color-hover":"#0000","--n-color-pressed":"#0000","--n-color-focus":"#0000","--n-color-disabled":"#0000","--n-ripple-color":"#0000","--n-text-color":y||o[l("textColorText",u)],"--n-text-color-hover":y?L(y):o[l("textColorTextHover",u)],"--n-text-color-pressed":y?Z(y):o[l("textColorTextPressed",u)],"--n-text-color-focus":y?L(y):o[l("textColorTextHover",u)],"--n-text-color-disabled":y||o[l("textColorTextDisabled",u)]}}else if(A||_){const y=N||g;p={"--n-color":"#0000","--n-color-hover":"#0000","--n-color-pressed":"#0000","--n-color-focus":"#0000","--n-color-disabled":"#0000","--n-ripple-color":g||o[l("rippleColor",u)],"--n-text-color":y||o[l("textColorGhost",u)],"--n-text-color-hover":y?L(y):o[l("textColorGhostHover",u)],"--n-text-color-pressed":y?Z(y):o[l("textColorGhostPressed",u)],"--n-text-color-focus":y?L(y):o[l("textColorGhostHover",u)],"--n-text-color-disabled":y||o[l("textColorGhostDisabled",u)]}}else if(ke){const y=ce?o.textColor:U?o.textColorTertiary:o[l("color",u)],$=g||y,X=D!=="default"&&D!=="tertiary";p={"--n-color":X?J($,{alpha:Number(o.colorOpacitySecondary)}):o.colorSecondary,"--n-color-hover":X?J($,{alpha:Number(o.colorOpacitySecondaryHover)}):o.colorSecondaryHover,"--n-color-pressed":X?J($,{alpha:Number(o.colorOpacitySecondaryPressed)}):o.colorSecondaryPressed,"--n-color-focus":X?J($,{alpha:Number(o.colorOpacitySecondaryHover)}):o.colorSecondaryHover,"--n-color-disabled":o.colorSecondary,"--n-ripple-color":"#0000","--n-text-color":$,"--n-text-color-hover":$,"--n-text-color-pressed":$,"--n-text-color-focus":$,"--n-text-color-disabled":$}}else if(de||He){const y=ce?o.textColor:U?o.textColorTertiary:o[l("color",u)],$=g||y;de?(p["--n-color"]=o.colorTertiary,p["--n-color-hover"]=o.colorTertiaryHover,p["--n-color-pressed"]=o.colorTertiaryPressed,p["--n-color-focus"]=o.colorSecondaryHover,p["--n-color-disabled"]=o.colorTertiary):(p["--n-color"]=o.colorQuaternary,p["--n-color-hover"]=o.colorQuaternaryHover,p["--n-color-pressed"]=o.colorQuaternaryPressed,p["--n-color-focus"]=o.colorQuaternaryHover,p["--n-color-disabled"]=o.colorQuaternary),p["--n-ripple-color"]="#0000",p["--n-text-color"]=$,p["--n-text-color-hover"]=$,p["--n-text-color-pressed"]=$,p["--n-text-color-focus"]=$,p["--n-text-color-disabled"]=$}else p={"--n-color":g||o[l("color",u)],"--n-color-hover":g?L(g):o[l("colorHover",u)],"--n-color-pressed":g?Z(g):o[l("colorPressed",u)],"--n-color-focus":g?L(g):o[l("colorFocus",u)],"--n-color-disabled":g||o[l("colorDisabled",u)],"--n-ripple-color":g||o[l("rippleColor",u)],"--n-text-color":N||(g?o.textColorPrimary:U?o.textColorTertiary:o[l("textColor",u)]),"--n-text-color-hover":N||(g?o.textColorHoverPrimary:o[l("textColorHover",u)]),"--n-text-color-pressed":N||(g?o.textColorPressedPrimary:o[l("textColorPressed",u)]),"--n-text-color-focus":N||(g?o.textColorFocusPrimary:o[l("textColorFocus",u)]),"--n-text-color-disabled":N||(g?o.textColorDisabledPrimary:o[l("textColorDisabled",u)])};let ne={"--n-border":"initial","--n-border-hover":"initial","--n-border-pressed":"initial","--n-border-focus":"initial","--n-border-disabled":"initial"};F?ne={"--n-border":"none","--n-border-hover":"none","--n-border-pressed":"none","--n-border-focus":"none","--n-border-disabled":"none"}:ne={"--n-border":o[l("border",u)],"--n-border-hover":o[l("borderHover",u)],"--n-border-pressed":o[l("borderPressed",u)],"--n-border-focus":o[l("borderFocus",u)],"--n-border-disabled":o[l("borderDisabled",u)]};const{[l("height",w)]:ie,[l("fontSize",w)]:Fe,[l("padding",w)]:Ee,[l("paddingRound",w)]:Ie,[l("iconSize",w)]:We,[l("borderRadius",w)]:De,[l("iconMargin",w)]:Re,waveOpacity:Ge}=o,_e={"--n-width":te&&!F?ie:"initial","--n-height":F?"initial":ie,"--n-font-size":Fe,"--n-padding":te||F?"initial":Y?Ie:Ee,"--n-icon-size":We,"--n-icon-margin":Re,"--n-border-radius":F?"initial":te||Y?ie:De};return Object.assign(Object.assign(Object.assign(Object.assign({"--n-bezier":x,"--n-bezier-ease-out":P,"--n-ripple-duration":z,"--n-opacity-disabled":k,"--n-wave-opacity":Ge},Be),p),ne),_e)}),S=C?Ae("button",R(()=>{let a="";const{dashed:x,type:P,ghost:o,text:z,color:k,round:G,circle:B,textColor:w,secondary:_,tertiary:D,quaternary:A,strong:F}=e;x&&(a+="a"),o&&(a+="b"),z&&(a+="c"),G&&(a+="d"),B&&(a+="e"),_&&(a+="f"),D&&(a+="g"),A&&(a+="h"),F&&(a+="i"),k&&(a+="j"+he(k)),w&&(a+="k"+he(w));const{value:g}=m;return a+="l"+g[0],a+="m"+P[0],a}),I,e):void 0;return{selfElRef:r,waveElRef:t,mergedClsPrefix:H,mergedFocusable:n,mergedSize:m,showBorder:i,enterPressed:s,rtlEnabled:b,handleMousedown:c,handleKeydown:T,handleBlur:re,handleKeyup:oe,handleClick:O,customColorCssVars:R(()=>{const{color:a}=e;if(!a)return null;const x=L(a);return{"--n-border-color":a,"--n-border-color-hover":x,"--n-border-color-pressed":Z(a),"--n-border-color-focus":x,"--n-border-color-disabled":a}}),cssVars:C?void 0:I,themeClass:S==null?void 0:S.themeClass,onRender:S==null?void 0:S.onRender}},render(){const{mergedClsPrefix:e,tag:r,onRender:t}=this;t==null||t();const s=fe(this.$slots.default,i=>i&&h("span",{class:`${e}-button__content`},i));return h(r,{ref:"selfElRef",class:[this.themeClass,`${e}-button`,`${e}-button--${this.type}-type`,`${e}-button--${this.mergedSize}-type`,this.rtlEnabled&&`${e}-button--rtl`,this.disabled&&`${e}-button--disabled`,this.block&&`${e}-button--block`,this.enterPressed&&`${e}-button--pressed`,!this.text&&this.dashed&&`${e}-button--dashed`,this.color&&`${e}-button--color`,this.secondary&&`${e}-button--secondary`,this.loading&&`${e}-button--loading`,this.ghost&&`${e}-button--ghost`],tabindex:this.mergedFocusable?0:-1,type:this.attrType,style:this.cssVars,disabled:this.disabled,onClick:this.handleClick,onBlur:this.handleBlur,onMousedown:this.handleMousedown,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},this.iconPlacement==="right"&&s,h(ao,{width:!0},{default:()=>fe(this.$slots.icon,i=>(this.loading||this.renderIcon||i)&&h("span",{class:`${e}-button__icon`,style:{margin:oo(this.$slots.default)?"0":""}},h(Te,null,{default:()=>this.loading?h(fo,{clsPrefix:e,key:"loading",class:`${e}-icon-slot`,strokeWidth:20}):h("div",{key:"icon",class:`${e}-icon-slot`,role:"none"},this.renderIcon?this.renderIcon():i)})))}),this.iconPlacement==="left"&&s,this.text?null:h(bo,{ref:"waveElRef",clsPrefix:e}),this.showBorder?h("div",{"aria-hidden":!0,class:`${e}-button__border`,style:this.customColorCssVars}):null,this.showBorder?h("div",{"aria-hidden":!0,class:`${e}-button__state-border`,style:this.customColorCssVars}):null)}}),Fo=So;export{Fo as N,to as a,ao as b,$e as c,so as d,oo as e,l as f,ee as g,fo as h,no as i,zo as j,he as k,ae as l,Te as m,Bo as n,vo as o,io as p,wo as q,fe as r,Se as u};
