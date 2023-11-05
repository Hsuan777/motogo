import{b as q,R as je}from"./vue-router-2d09d191.js";import{a as f,i as Ke,r as Ie,k as we,j as be,p as ne,d as Q,c as v,l as w,n as G,u as se,o as ue,b as s,s as ie,m as oe,N as J}from"./Icon-df1c938c.js";import{s as Ve,t as De,d as Ue,u as Se,N as He,a as Ae,C as qe,b as ce,r as Y,c as Ye,e as Ge,k as ve,f as le,g as We,h as Xe,i as Ze}from"./Space-d06057ff.js";import{d as N,h as l,r as F,p as U,a as z,i as K,t as re,K as $e,l as xe,o as W,Y as X,Z as R,O as E,_ as V,u as L,$ as ae}from"./runtime-core.esm-bundler-6798075e.js";import{c as B,a as de,b as Je,N as Qe}from"./Button-ad990935.js";import"./runtime-dom.esm-bundler-307f6a53.js";const eo=N({name:"ChevronDownFilled",render(){return l("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l("path",{d:"M3.20041 5.73966C3.48226 5.43613 3.95681 5.41856 4.26034 5.70041L8 9.22652L11.7397 5.70041C12.0432 5.41856 12.5177 5.43613 12.7996 5.73966C13.0815 6.0432 13.0639 6.51775 12.7603 6.7996L8.51034 10.7996C8.22258 11.0668 7.77743 11.0668 7.48967 10.7996L3.23966 6.7996C2.93613 6.51775 2.91856 6.0432 3.20041 5.73966Z",fill:"currentColor"}))}}),{cubicBezierEaseInOut:M,cubicBezierEaseOut:oo,cubicBezierEaseIn:to}=Ke;function ro({overflow:e="hidden",duration:t=".3s",originalTransition:o="",leavingDelay:n="0s",foldPadding:a=!1,enterToProps:c=void 0,leaveToProps:u=void 0,reverse:m=!1}={}){const d=m?"leave":"enter",b=m?"enter":"leave";return[f(`&.fade-in-height-expand-transition-${b}-from,
 &.fade-in-height-expand-transition-${d}-to`,Object.assign(Object.assign({},c),{opacity:1})),f(`&.fade-in-height-expand-transition-${b}-to,
 &.fade-in-height-expand-transition-${d}-from`,Object.assign(Object.assign({},u),{opacity:0,marginTop:"0 !important",marginBottom:"0 !important",paddingTop:a?"0 !important":void 0,paddingBottom:a?"0 !important":void 0})),f(`&.fade-in-height-expand-transition-${b}-active`,`
 overflow: ${e};
 transition:
 max-height ${t} ${M} ${n},
 opacity ${t} ${oo} ${n},
 margin-top ${t} ${M} ${n},
 margin-bottom ${t} ${M} ${n},
 padding-top ${t} ${M} ${n},
 padding-bottom ${t} ${M} ${n}
 ${o?","+o:""}
 `),f(`&.fade-in-height-expand-transition-${d}-active`,`
 overflow: ${e};
 transition:
 max-height ${t} ${M},
 opacity ${t} ${to},
 margin-top ${t} ${M},
 margin-bottom ${t} ${M},
 padding-top ${t} ${M},
 padding-bottom ${t} ${M}
 ${o?","+o:""}
 `)]}const no=e=>{const{baseColor:t,textColor2:o,bodyColor:n,cardColor:a,dividerColor:c,actionColor:u,scrollbarColor:m,scrollbarColorHover:d,invertedColor:b}=e;return{textColor:o,textColorInverted:"#FFF",color:n,colorEmbedded:u,headerColor:a,headerColorInverted:b,footerColor:u,footerColorInverted:b,headerBorderColor:c,headerBorderColorInverted:b,footerBorderColor:c,footerBorderColorInverted:b,siderBorderColor:c,siderBorderColorInverted:b,siderColor:a,siderColorInverted:b,siderToggleButtonBorder:`1px solid ${c}`,siderToggleButtonColor:t,siderToggleButtonIconColor:o,siderToggleButtonIconColorInverted:o,siderToggleBarColor:be(n,m),siderToggleBarColorHover:be(n,d),__invertScrollbar:"true"}},io=Ie({name:"Layout",common:we,peers:{Scrollbar:Ve},self:no}),_e=io;function lo(e,t,o,n){return{itemColorHoverInverted:"#0000",itemColorActiveInverted:t,itemColorActiveHoverInverted:t,itemColorActiveCollapsedInverted:t,itemTextColorInverted:e,itemTextColorHoverInverted:o,itemTextColorChildActiveInverted:o,itemTextColorChildActiveHoverInverted:o,itemTextColorActiveInverted:o,itemTextColorActiveHoverInverted:o,itemTextColorHorizontalInverted:e,itemTextColorHoverHorizontalInverted:o,itemTextColorChildActiveHorizontalInverted:o,itemTextColorChildActiveHoverHorizontalInverted:o,itemTextColorActiveHorizontalInverted:o,itemTextColorActiveHoverHorizontalInverted:o,itemIconColorInverted:e,itemIconColorHoverInverted:o,itemIconColorActiveInverted:o,itemIconColorActiveHoverInverted:o,itemIconColorChildActiveInverted:o,itemIconColorChildActiveHoverInverted:o,itemIconColorCollapsedInverted:e,itemIconColorHorizontalInverted:e,itemIconColorHoverHorizontalInverted:o,itemIconColorActiveHorizontalInverted:o,itemIconColorActiveHoverHorizontalInverted:o,itemIconColorChildActiveHorizontalInverted:o,itemIconColorChildActiveHoverHorizontalInverted:o,arrowColorInverted:e,arrowColorHoverInverted:o,arrowColorActiveInverted:o,arrowColorActiveHoverInverted:o,arrowColorChildActiveInverted:o,arrowColorChildActiveHoverInverted:o,groupTextColorInverted:n}}const ao=e=>{const{borderRadius:t,textColor3:o,primaryColor:n,textColor2:a,textColor1:c,fontSize:u,dividerColor:m,hoverColor:d,primaryColorHover:b}=e;return Object.assign({borderRadius:t,color:"#0000",groupTextColor:o,itemColorHover:d,itemColorActive:ne(n,{alpha:.1}),itemColorActiveHover:ne(n,{alpha:.1}),itemColorActiveCollapsed:ne(n,{alpha:.1}),itemTextColor:a,itemTextColorHover:a,itemTextColorActive:n,itemTextColorActiveHover:n,itemTextColorChildActive:n,itemTextColorChildActiveHover:n,itemTextColorHorizontal:a,itemTextColorHoverHorizontal:b,itemTextColorActiveHorizontal:n,itemTextColorActiveHoverHorizontal:n,itemTextColorChildActiveHorizontal:n,itemTextColorChildActiveHoverHorizontal:n,itemIconColor:c,itemIconColorHover:c,itemIconColorActive:n,itemIconColorActiveHover:n,itemIconColorChildActive:n,itemIconColorChildActiveHover:n,itemIconColorCollapsed:c,itemIconColorHorizontal:c,itemIconColorHoverHorizontal:b,itemIconColorActiveHorizontal:n,itemIconColorActiveHoverHorizontal:n,itemIconColorChildActiveHorizontal:n,itemIconColorChildActiveHoverHorizontal:n,itemHeight:"42px",arrowColor:a,arrowColorHover:a,arrowColorActive:n,arrowColorActiveHover:n,arrowColorChildActive:n,arrowColorChildActiveHover:n,colorInverted:"#0000",borderColorHorizontal:"#0000",fontSize:u,dividerColor:m},lo("#BBB",n,"#FFF","#AAA"))},co=Ie({name:"Menu",common:we,peers:{Tooltip:De,Dropdown:Ue},self:ao}),so=co,Re=Q("n-layout-sider"),Te={type:String,default:"static"},uo=v("layout",`
 color: var(--n-text-color);
 background-color: var(--n-color);
 box-sizing: border-box;
 position: relative;
 z-index: auto;
 flex: auto;
 overflow: hidden;
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
`,[v("layout-scroll-container",`
 overflow-x: hidden;
 box-sizing: border-box;
 height: 100%;
 `),w("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),vo={embedded:Boolean,position:Te,nativeScrollbar:{type:Boolean,default:!0},scrollbarProps:Object,onScroll:Function,contentStyle:{type:[String,Object],default:""},hasSider:Boolean,siderPlacement:{type:String,default:"left"}},Pe=Q("n-layout");function mo(e){return N({name:e?"LayoutContent":"Layout",props:Object.assign(Object.assign({},G.props),vo),setup(t){const o=F(null),n=F(null),{mergedClsPrefixRef:a,inlineThemeDisabled:c}=se(t),u=G("Layout","-layout",uo,_e,t,a);function m(y,S){if(t.nativeScrollbar){const{value:_}=o;_&&(S===void 0?_.scrollTo(y):_.scrollTo(y,S))}else{const{value:_}=n;_&&_.scrollTo(y,S)}}U(Pe,t);let d=0,b=0;const k=y=>{var S;const _=y.target;d=_.scrollLeft,b=_.scrollTop,(S=t.onScroll)===null||S===void 0||S.call(t,y)};Se(()=>{if(t.nativeScrollbar){const y=o.value;y&&(y.scrollTop=b,y.scrollLeft=d)}});const A={display:"flex",flexWrap:"nowrap",width:"100%",flexDirection:"row"},g={scrollTo:m},P=z(()=>{const{common:{cubicBezierEaseInOut:y},self:S}=u.value;return{"--n-bezier":y,"--n-color":t.embedded?S.colorEmbedded:S.color,"--n-text-color":S.textColor}}),$=c?ue("layout",z(()=>t.embedded?"e":""),P,t):void 0;return Object.assign({mergedClsPrefix:a,scrollableElRef:o,scrollbarInstRef:n,hasSiderStyle:A,mergedTheme:u,handleNativeElScroll:k,cssVars:c?void 0:P,themeClass:$==null?void 0:$.themeClass,onRender:$==null?void 0:$.onRender},g)},render(){var t;const{mergedClsPrefix:o,hasSider:n}=this;(t=this.onRender)===null||t===void 0||t.call(this);const a=n?this.hasSiderStyle:void 0,c=[this.themeClass,e&&`${o}-layout-content`,`${o}-layout`,`${o}-layout--${this.position}-positioned`];return l("div",{class:c,style:this.cssVars},this.nativeScrollbar?l("div",{ref:"scrollableElRef",class:`${o}-layout-scroll-container`,style:[this.contentStyle,a],onScroll:this.handleNativeElScroll},this.$slots):l(He,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,contentStyle:[this.contentStyle,a]}),this.$slots))}})}const Ce=mo(!1),ho=v("layout-sider",`
 flex-shrink: 0;
 box-sizing: border-box;
 position: relative;
 z-index: 1;
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 min-width .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 transform .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 background-color: var(--n-color);
 display: flex;
 justify-content: flex-end;
`,[w("bordered",[s("border",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 width: 1px;
 background-color: var(--n-border-color);
 transition: background-color .3s var(--n-bezier);
 `)]),s("left-placement",[w("bordered",[s("border",`
 right: 0;
 `)])]),w("right-placement",`
 justify-content: flex-start;
 `,[w("bordered",[s("border",`
 left: 0;
 `)]),w("collapsed",[v("layout-toggle-button",[v("base-icon",`
 transform: rotate(180deg);
 `)]),v("layout-toggle-bar",[f("&:hover",[s("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),s("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])])]),v("layout-toggle-button",`
 left: 0;
 transform: translateX(-50%) translateY(-50%);
 `,[v("base-icon",`
 transform: rotate(0);
 `)]),v("layout-toggle-bar",`
 left: -28px;
 transform: rotate(180deg);
 `,[f("&:hover",[s("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),s("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})])])]),w("collapsed",[v("layout-toggle-bar",[f("&:hover",[s("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),s("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])]),v("layout-toggle-button",[v("base-icon",`
 transform: rotate(0);
 `)])]),v("layout-toggle-button",`
 transition:
 color .3s var(--n-bezier),
 right .3s var(--n-bezier),
 left .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 cursor: pointer;
 width: 24px;
 height: 24px;
 position: absolute;
 top: 50%;
 right: 0;
 border-radius: 50%;
 display: flex;
 align-items: center;
 justify-content: center;
 font-size: 18px;
 color: var(--n-toggle-button-icon-color);
 border: var(--n-toggle-button-border);
 background-color: var(--n-toggle-button-color);
 box-shadow: 0 2px 4px 0px rgba(0, 0, 0, .06);
 transform: translateX(50%) translateY(-50%);
 z-index: 1;
 `,[v("base-icon",`
 transition: transform .3s var(--n-bezier);
 transform: rotate(180deg);
 `)]),v("layout-toggle-bar",`
 cursor: pointer;
 height: 72px;
 width: 32px;
 position: absolute;
 top: calc(50% - 36px);
 right: -28px;
 `,[s("top, bottom",`
 position: absolute;
 width: 4px;
 border-radius: 2px;
 height: 38px;
 left: 14px;
 transition: 
 background-color .3s var(--n-bezier),
 transform .3s var(--n-bezier);
 `),s("bottom",`
 position: absolute;
 top: 34px;
 `),f("&:hover",[s("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),s("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})]),s("top, bottom",{backgroundColor:"var(--n-toggle-bar-color)"}),f("&:hover",[s("top, bottom",{backgroundColor:"var(--n-toggle-bar-color-hover)"})])]),s("border",`
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 width: 1px;
 transition: background-color .3s var(--n-bezier);
 `),v("layout-sider-scroll-container",`
 flex-grow: 1;
 flex-shrink: 0;
 box-sizing: border-box;
 height: 100%;
 opacity: 0;
 transition: opacity .3s var(--n-bezier);
 max-width: 100%;
 `),w("show-content",[v("layout-sider-scroll-container",{opacity:1})]),w("absolute-positioned",`
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 `)]),fo=N({name:"LayoutToggleButton",props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return l("div",{class:`${e}-layout-toggle-button`,onClick:this.onClick},l(Ae,{clsPrefix:e},{default:()=>l(qe,null)}))}}),go=N({props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return l("div",{onClick:this.onClick,class:`${e}-layout-toggle-bar`},l("div",{class:`${e}-layout-toggle-bar__top`}),l("div",{class:`${e}-layout-toggle-bar__bottom`}))}}),po={position:Te,bordered:Boolean,collapsedWidth:{type:Number,default:48},width:{type:[Number,String],default:272},contentStyle:{type:[String,Object],default:""},collapseMode:{type:String,default:"transform"},collapsed:{type:Boolean,default:void 0},defaultCollapsed:Boolean,showCollapsedContent:{type:Boolean,default:!0},showTrigger:{type:[Boolean,String],default:!1},nativeScrollbar:{type:Boolean,default:!0},inverted:Boolean,scrollbarProps:Object,triggerStyle:[String,Object],collapsedTriggerStyle:[String,Object],"onUpdate:collapsed":[Function,Array],onUpdateCollapsed:[Function,Array],onAfterEnter:Function,onAfterLeave:Function,onExpand:[Function,Array],onCollapse:[Function,Array],onScroll:Function},bo=N({name:"LayoutSider",props:Object.assign(Object.assign({},G.props),po),setup(e){const t=K(Pe),o=F(null),n=F(null),a=z(()=>ie(d.value?e.collapsedWidth:e.width)),c=z(()=>e.collapseMode!=="transform"?{}:{minWidth:ie(e.width)}),u=z(()=>t?t.siderPlacement:"left"),m=F(e.defaultCollapsed),d=ce(re(e,"collapsed"),m);function b(H,C){if(e.nativeScrollbar){const{value:I}=o;I&&(C===void 0?I.scrollTo(H):I.scrollTo(H,C))}else{const{value:I}=n;I&&I.scrollTo(H,C)}}function k(){const{"onUpdate:collapsed":H,onUpdateCollapsed:C,onExpand:I,onCollapse:p}=e,{value:x}=d;C&&B(C,!x),H&&B(H,!x),m.value=!x,x?I&&B(I):p&&B(p)}let A=0,g=0;const P=H=>{var C;const I=H.target;A=I.scrollLeft,g=I.scrollTop,(C=e.onScroll)===null||C===void 0||C.call(e,H)};Se(()=>{if(e.nativeScrollbar){const H=o.value;H&&(H.scrollTop=g,H.scrollLeft=A)}}),U(Re,{collapsedRef:d,collapseModeRef:re(e,"collapseMode")});const{mergedClsPrefixRef:$,inlineThemeDisabled:y}=se(e),S=G("Layout","-layout-sider",ho,_e,e,$);function _(H){var C,I;H.propertyName==="max-width"&&(d.value?(C=e.onAfterLeave)===null||C===void 0||C.call(e):(I=e.onAfterEnter)===null||I===void 0||I.call(e))}const Z={scrollTo:b},j=z(()=>{const{common:{cubicBezierEaseInOut:H},self:C}=S.value,{siderToggleButtonColor:I,siderToggleButtonBorder:p,siderToggleBarColor:x,siderToggleBarColorHover:r}=C,h={"--n-bezier":H,"--n-toggle-button-color":I,"--n-toggle-button-border":p,"--n-toggle-bar-color":x,"--n-toggle-bar-color-hover":r};return e.inverted?(h["--n-color"]=C.siderColorInverted,h["--n-text-color"]=C.textColorInverted,h["--n-border-color"]=C.siderBorderColorInverted,h["--n-toggle-button-icon-color"]=C.siderToggleButtonIconColorInverted,h.__invertScrollbar=C.__invertScrollbar):(h["--n-color"]=C.siderColor,h["--n-text-color"]=C.textColor,h["--n-border-color"]=C.siderBorderColor,h["--n-toggle-button-icon-color"]=C.siderToggleButtonIconColor),h}),O=y?ue("layout-sider",z(()=>e.inverted?"a":"b"),j,e):void 0;return Object.assign({scrollableElRef:o,scrollbarInstRef:n,mergedClsPrefix:$,mergedTheme:S,styleMaxWidth:a,mergedCollapsed:d,scrollContainerStyle:c,siderPlacement:u,handleNativeElScroll:P,handleTransitionend:_,handleTriggerClick:k,inlineThemeDisabled:y,cssVars:j,themeClass:O==null?void 0:O.themeClass,onRender:O==null?void 0:O.onRender},Z)},render(){var e;const{mergedClsPrefix:t,mergedCollapsed:o,showTrigger:n}=this;return(e=this.onRender)===null||e===void 0||e.call(this),l("aside",{class:[`${t}-layout-sider`,this.themeClass,`${t}-layout-sider--${this.position}-positioned`,`${t}-layout-sider--${this.siderPlacement}-placement`,this.bordered&&`${t}-layout-sider--bordered`,o&&`${t}-layout-sider--collapsed`,(!o||this.showCollapsedContent)&&`${t}-layout-sider--show-content`],onTransitionend:this.handleTransitionend,style:[this.inlineThemeDisabled?void 0:this.cssVars,{maxWidth:this.styleMaxWidth,width:ie(this.width)}]},this.nativeScrollbar?l("div",{class:`${t}-layout-sider-scroll-container`,onScroll:this.handleNativeElScroll,style:[this.scrollContainerStyle,{overflow:"auto"},this.contentStyle],ref:"scrollableElRef"},this.$slots):l(He,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",style:this.scrollContainerStyle,contentStyle:this.contentStyle,theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,builtinThemeOverrides:this.inverted&&this.cssVars.__invertScrollbar==="true"?{colorHover:"rgba(255, 255, 255, .4)",color:"rgba(255, 255, 255, .3)"}:void 0}),this.$slots),n?n==="bar"?l(go,{clsPrefix:t,style:o?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):l(fo,{clsPrefix:t,style:o?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):null,this.bordered?l("div",{class:`${t}-layout-sider__border`}):null)}}),ee=Q("n-menu"),me=Q("n-submenu"),he=Q("n-menu-item-group"),te=8;function fe(e){const t=K(ee),{props:o,mergedCollapsedRef:n}=t,a=K(me,null),c=K(he,null),u=z(()=>o.mode==="horizontal"),m=z(()=>u.value?o.dropdownPlacement:"tmNodes"in e?"right-start":"right"),d=z(()=>{var g;return Math.max((g=o.collapsedIconSize)!==null&&g!==void 0?g:o.iconSize,o.iconSize)}),b=z(()=>{var g;return!u.value&&e.root&&n.value&&(g=o.collapsedIconSize)!==null&&g!==void 0?g:o.iconSize}),k=z(()=>{if(u.value)return;const{collapsedWidth:g,indent:P,rootIndent:$}=o,{root:y,isGroup:S}=e,_=$===void 0?P:$;if(y)return n.value?g/2-d.value/2:_;if(c)return P/2+c.paddingLeftRef.value;if(a)return(S?P/2:P)+a.paddingLeftRef.value}),A=z(()=>{const{collapsedWidth:g,indent:P,rootIndent:$}=o,{value:y}=d,{root:S}=e;return u.value||!S||!n.value?te:($===void 0?P:$)+y+te-(g+y)/2});return{dropdownPlacement:m,activeIconSize:b,maxIconSize:d,paddingLeft:k,iconMarginRight:A,NMenu:t,NSubmenu:a}}const ge={internalKey:{type:[String,Number],required:!0},root:Boolean,isGroup:Boolean,level:{type:Number,required:!0},title:[String,Function],extra:[String,Function]},Ne=Object.assign(Object.assign({},ge),{tmNode:{type:Object,required:!0},tmNodes:{type:Array,required:!0}}),xo=N({name:"MenuOptionGroup",props:Ne,setup(e){U(me,null);const t=fe(e);U(he,{paddingLeftRef:t.paddingLeft});const{mergedClsPrefixRef:o,props:n}=K(ee);return function(){const{value:a}=o,c=t.paddingLeft.value,{nodeProps:u}=n,m=u==null?void 0:u(e.tmNode.rawNode);return l("div",{class:`${a}-menu-item-group`,role:"group"},l("div",Object.assign({},m,{class:[`${a}-menu-item-group-title`,m==null?void 0:m.class],style:[(m==null?void 0:m.style)||"",c!==void 0?`padding-left: ${c}px;`:""]}),Y(e.title),e.extra?l($e,null," ",Y(e.extra)):null),l("div",null,e.tmNodes.map(d=>pe(d,n))))}}}),ke=N({name:"MenuOptionContent",props:{collapsed:Boolean,disabled:Boolean,title:[String,Function],icon:Function,extra:[String,Function],showArrow:Boolean,childActive:Boolean,hover:Boolean,paddingLeft:Number,selected:Boolean,maxIconSize:{type:Number,required:!0},activeIconSize:{type:Number,required:!0},iconMarginRight:{type:Number,required:!0},clsPrefix:{type:String,required:!0},onClick:Function,tmNode:{type:Object,required:!0}},setup(e){const{props:t}=K(ee);return{menuProps:t,style:z(()=>{const{paddingLeft:o}=e;return{paddingLeft:o&&`${o}px`}}),iconStyle:z(()=>{const{maxIconSize:o,activeIconSize:n,iconMarginRight:a}=e;return{width:`${o}px`,height:`${o}px`,fontSize:`${n}px`,marginRight:`${a}px`}})}},render(){const{clsPrefix:e,tmNode:t,menuProps:{renderIcon:o,renderLabel:n,renderExtra:a,expandIcon:c}}=this,u=o?o(t.rawNode):Y(this.icon);return l("div",{onClick:m=>{var d;(d=this.onClick)===null||d===void 0||d.call(this,m)},role:"none",class:[`${e}-menu-item-content`,{[`${e}-menu-item-content--selected`]:this.selected,[`${e}-menu-item-content--collapsed`]:this.collapsed,[`${e}-menu-item-content--child-active`]:this.childActive,[`${e}-menu-item-content--disabled`]:this.disabled,[`${e}-menu-item-content--hover`]:this.hover}],style:this.style},u&&l("div",{class:`${e}-menu-item-content__icon`,style:this.iconStyle,role:"none"},[u]),l("div",{class:`${e}-menu-item-content-header`,role:"none"},n?n(t.rawNode):Y(this.title),this.extra||a?l("span",{class:`${e}-menu-item-content-header__extra`}," ",a?a(t.rawNode):Y(this.extra)):null),this.showArrow?l(Ae,{ariaHidden:!0,class:`${e}-menu-item-content__arrow`,clsPrefix:e},{default:()=>c?c(t.rawNode):l(eo,null)}):null)}}),Oe=Object.assign(Object.assign({},ge),{rawNodes:{type:Array,default:()=>[]},tmNodes:{type:Array,default:()=>[]},tmNode:{type:Object,required:!0},disabled:{type:Boolean,default:!1},icon:Function,onClick:Function}),Co=N({name:"Submenu",props:Oe,setup(e){const t=fe(e),{NMenu:o,NSubmenu:n}=t,{props:a,mergedCollapsedRef:c,mergedThemeRef:u}=o,m=z(()=>{const{disabled:g}=e;return n!=null&&n.mergedDisabledRef.value||a.disabled?!0:g}),d=F(!1);U(me,{paddingLeftRef:t.paddingLeft,mergedDisabledRef:m}),U(he,null);function b(){const{onClick:g}=e;g&&g()}function k(){m.value||(c.value||o.toggleExpand(e.internalKey),b())}function A(g){d.value=g}return{menuProps:a,mergedTheme:u,doSelect:o.doSelect,inverted:o.invertedRef,isHorizontal:o.isHorizontalRef,mergedClsPrefix:o.mergedClsPrefixRef,maxIconSize:t.maxIconSize,activeIconSize:t.activeIconSize,iconMarginRight:t.iconMarginRight,dropdownPlacement:t.dropdownPlacement,dropdownShow:d,paddingLeft:t.paddingLeft,mergedDisabled:m,mergedValue:o.mergedValueRef,childActive:de(()=>o.activePathRef.value.includes(e.internalKey)),collapsed:z(()=>a.mode==="horizontal"?!1:c.value?!0:!o.mergedExpandedKeysRef.value.includes(e.internalKey)),dropdownEnabled:z(()=>!m.value&&(a.mode==="horizontal"||c.value)),handlePopoverShowChange:A,handleClick:k}},render(){var e;const{mergedClsPrefix:t,menuProps:{renderIcon:o,renderLabel:n}}=this,a=()=>{const{isHorizontal:u,paddingLeft:m,collapsed:d,mergedDisabled:b,maxIconSize:k,activeIconSize:A,title:g,childActive:P,icon:$,handleClick:y,menuProps:{nodeProps:S},dropdownShow:_,iconMarginRight:Z,tmNode:j,mergedClsPrefix:O}=this,H=S==null?void 0:S(j.rawNode);return l("div",Object.assign({},H,{class:[`${O}-menu-item`,H==null?void 0:H.class],role:"menuitem"}),l(ke,{tmNode:j,paddingLeft:m,collapsed:d,disabled:b,iconMarginRight:Z,maxIconSize:k,activeIconSize:A,title:g,extra:this.extra,showArrow:!u,childActive:P,clsPrefix:O,icon:$,hover:_,onClick:y}))},c=()=>l(Je,null,{default:()=>{const{tmNodes:u,collapsed:m}=this;return m?null:l("div",{class:`${t}-submenu-children`,role:"menu"},u.map(d=>pe(d,this.menuProps)))}});return this.root?l(Ye,Object.assign({size:"large",trigger:"hover"},(e=this.menuProps)===null||e===void 0?void 0:e.dropdownProps,{themeOverrides:this.mergedTheme.peerOverrides.Dropdown,theme:this.mergedTheme.peers.Dropdown,builtinThemeOverrides:{fontSizeLarge:"14px",optionIconSizeLarge:"18px"},value:this.mergedValue,disabled:!this.dropdownEnabled,placement:this.dropdownPlacement,keyField:this.menuProps.keyField,labelField:this.menuProps.labelField,childrenField:this.menuProps.childrenField,onUpdateShow:this.handlePopoverShowChange,options:this.rawNodes,onSelect:this.doSelect,inverted:this.inverted,renderIcon:o,renderLabel:n}),{default:()=>l("div",{class:`${t}-submenu`,role:"menuitem","aria-expanded":!this.collapsed},a(),this.isHorizontal?null:c())}):l("div",{class:`${t}-submenu`,role:"menuitem","aria-expanded":!this.collapsed},a(),c())}}),Be=Object.assign(Object.assign({},ge),{tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function}),yo=N({name:"MenuOption",props:Be,setup(e){const t=fe(e),{NSubmenu:o,NMenu:n}=t,{props:a,mergedClsPrefixRef:c,mergedCollapsedRef:u}=n,m=o?o.mergedDisabledRef:{value:!1},d=z(()=>m.value||e.disabled);function b(A){const{onClick:g}=e;g&&g(A)}function k(A){d.value||(n.doSelect(e.internalKey,e.tmNode.rawNode),b(A))}return{mergedClsPrefix:c,dropdownPlacement:t.dropdownPlacement,paddingLeft:t.paddingLeft,iconMarginRight:t.iconMarginRight,maxIconSize:t.maxIconSize,activeIconSize:t.activeIconSize,mergedTheme:n.mergedThemeRef,menuProps:a,dropdownEnabled:de(()=>e.root&&u.value&&a.mode!=="horizontal"&&!d.value),selected:de(()=>n.mergedValueRef.value===e.internalKey),mergedDisabled:d,handleClick:k}},render(){const{mergedClsPrefix:e,mergedTheme:t,tmNode:o,menuProps:{renderLabel:n,nodeProps:a}}=this,c=a==null?void 0:a(o.rawNode);return l("div",Object.assign({},c,{role:"menuitem",class:[`${e}-menu-item`,c==null?void 0:c.class]}),l(Ge,{theme:t.peers.Tooltip,themeOverrides:t.peerOverrides.Tooltip,trigger:"hover",placement:this.dropdownPlacement,disabled:!this.dropdownEnabled||this.title===void 0,internalExtraClass:["menu-tooltip"]},{default:()=>n?n(o.rawNode):Y(this.title),trigger:()=>l(ke,{tmNode:o,clsPrefix:e,paddingLeft:this.paddingLeft,iconMarginRight:this.iconMarginRight,maxIconSize:this.maxIconSize,activeIconSize:this.activeIconSize,selected:this.selected,title:this.title,extra:this.extra,disabled:this.mergedDisabled,icon:this.icon,onClick:this.handleClick})}))}}),zo=N({name:"MenuDivider",setup(){const e=K(ee),{mergedClsPrefixRef:t,isHorizontalRef:o}=e;return()=>o.value?null:l("div",{class:`${t.value}-menu-divider`})}}),Io=ve(Ne),wo=ve(Be),So=ve(Oe);function Me(e){return e.type==="divider"||e.type==="render"}function Ho(e){return e.type==="divider"}function pe(e,t){const{rawNode:o}=e,{show:n}=o;if(n===!1)return null;if(Me(o))return Ho(o)?l(zo,Object.assign({key:e.key},o.props)):null;const{labelField:a}=t,{key:c,level:u,isGroup:m}=e,d=Object.assign(Object.assign({},o),{title:o.title||o[a],extra:o.titleExtra||o.extra,key:c,internalKey:c,level:u,root:u===0,isGroup:m});return e.children?e.isGroup?l(xo,le(d,Io,{tmNode:e,tmNodes:e.children,key:c})):l(Co,le(d,So,{key:c,rawNodes:o[t.childrenField],tmNodes:e.children,tmNode:e})):l(yo,le(d,wo,{key:c,tmNode:e}))}const ye=[f("&::before","background-color: var(--n-item-color-hover);"),s("arrow",`
 color: var(--n-arrow-color-hover);
 `),s("icon",`
 color: var(--n-item-icon-color-hover);
 `),v("menu-item-content-header",`
 color: var(--n-item-text-color-hover);
 `,[f("a",`
 color: var(--n-item-text-color-hover);
 `),s("extra",`
 color: var(--n-item-text-color-hover);
 `)])],ze=[s("icon",`
 color: var(--n-item-icon-color-hover-horizontal);
 `),v("menu-item-content-header",`
 color: var(--n-item-text-color-hover-horizontal);
 `,[f("a",`
 color: var(--n-item-text-color-hover-horizontal);
 `),s("extra",`
 color: var(--n-item-text-color-hover-horizontal);
 `)])],Ao=f([v("menu",`
 background-color: var(--n-color);
 color: var(--n-item-text-color);
 overflow: hidden;
 transition: background-color .3s var(--n-bezier);
 box-sizing: border-box;
 font-size: var(--n-font-size);
 padding-bottom: 6px;
 `,[w("horizontal",`
 display: inline-flex;
 padding-bottom: 0;
 `,[v("submenu","margin: 0;"),v("menu-item","margin: 0;"),v("menu-item-content",`
 padding: 0 20px;
 border-bottom: 2px solid #0000;
 `,[f("&::before","display: none;"),w("selected","border-bottom: 2px solid var(--n-border-color-horizontal)")]),v("menu-item-content",[w("selected",[s("icon","color: var(--n-item-icon-color-active-horizontal);"),v("menu-item-content-header",`
 color: var(--n-item-text-color-active-horizontal);
 `,[f("a","color: var(--n-item-text-color-active-horizontal);"),s("extra","color: var(--n-item-text-color-active-horizontal);")])]),w("child-active",`
 border-bottom: 2px solid var(--n-border-color-horizontal);
 `,[v("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-horizontal);
 `,[f("a",`
 color: var(--n-item-text-color-child-active-horizontal);
 `),s("extra",`
 color: var(--n-item-text-color-child-active-horizontal);
 `)]),s("icon",`
 color: var(--n-item-icon-color-child-active-horizontal);
 `)]),oe("disabled",[oe("selected, child-active",[f("&:focus-within",ze)]),w("selected",[D(null,[s("icon","color: var(--n-item-icon-color-active-hover-horizontal);"),v("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover-horizontal);
 `,[f("a","color: var(--n-item-text-color-active-hover-horizontal);"),s("extra","color: var(--n-item-text-color-active-hover-horizontal);")])])]),w("child-active",[D(null,[s("icon","color: var(--n-item-icon-color-child-active-hover-horizontal);"),v("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover-horizontal);
 `,[f("a","color: var(--n-item-text-color-child-active-hover-horizontal);"),s("extra","color: var(--n-item-text-color-child-active-hover-horizontal);")])])]),D("border-bottom: 2px solid var(--n-border-color-horizontal);",ze)]),v("menu-item-content-header",[f("a","color: var(--n-item-text-color-horizontal);")])])]),w("collapsed",[v("menu-item-content",[w("selected",[f("&::before",`
 background-color: var(--n-item-color-active-collapsed) !important;
 `)]),v("menu-item-content-header","opacity: 0;"),s("arrow","opacity: 0;"),s("icon","color: var(--n-item-icon-color-collapsed);")])]),v("menu-item",`
 height: var(--n-item-height);
 margin-top: 6px;
 position: relative;
 `),v("menu-item-content",`
 box-sizing: border-box;
 line-height: 1.75;
 height: 100%;
 display: grid;
 grid-template-areas: "icon content arrow";
 grid-template-columns: auto 1fr auto;
 align-items: center;
 cursor: pointer;
 position: relative;
 padding-right: 18px;
 transition:
 background-color .3s var(--n-bezier),
 padding-left .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[f("> *","z-index: 1;"),f("&::before",`
 z-index: auto;
 content: "";
 background-color: #0000;
 position: absolute;
 left: 8px;
 right: 8px;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),w("disabled",`
 opacity: .45;
 cursor: not-allowed;
 `),w("collapsed",[s("arrow","transform: rotate(0);")]),w("selected",[f("&::before","background-color: var(--n-item-color-active);"),s("arrow","color: var(--n-arrow-color-active);"),s("icon","color: var(--n-item-icon-color-active);"),v("menu-item-content-header",`
 color: var(--n-item-text-color-active);
 `,[f("a","color: var(--n-item-text-color-active);"),s("extra","color: var(--n-item-text-color-active);")])]),w("child-active",[v("menu-item-content-header",`
 color: var(--n-item-text-color-child-active);
 `,[f("a",`
 color: var(--n-item-text-color-child-active);
 `),s("extra",`
 color: var(--n-item-text-color-child-active);
 `)]),s("arrow",`
 color: var(--n-arrow-color-child-active);
 `),s("icon",`
 color: var(--n-item-icon-color-child-active);
 `)]),oe("disabled",[oe("selected, child-active",[f("&:focus-within",ye)]),w("selected",[D(null,[s("arrow","color: var(--n-arrow-color-active-hover);"),s("icon","color: var(--n-item-icon-color-active-hover);"),v("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover);
 `,[f("a","color: var(--n-item-text-color-active-hover);"),s("extra","color: var(--n-item-text-color-active-hover);")])])]),w("child-active",[D(null,[s("arrow","color: var(--n-arrow-color-child-active-hover);"),s("icon","color: var(--n-item-icon-color-child-active-hover);"),v("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover);
 `,[f("a","color: var(--n-item-text-color-child-active-hover);"),s("extra","color: var(--n-item-text-color-child-active-hover);")])])]),w("selected",[D(null,[f("&::before","background-color: var(--n-item-color-active-hover);")])]),D(null,ye)]),s("icon",`
 grid-area: icon;
 color: var(--n-item-icon-color);
 transition:
 color .3s var(--n-bezier),
 font-size .3s var(--n-bezier),
 margin-right .3s var(--n-bezier);
 box-sizing: content-box;
 display: inline-flex;
 align-items: center;
 justify-content: center;
 `),s("arrow",`
 grid-area: arrow;
 font-size: 16px;
 color: var(--n-arrow-color);
 transform: rotate(180deg);
 opacity: 1;
 transition:
 color .3s var(--n-bezier),
 transform 0.2s var(--n-bezier),
 opacity 0.2s var(--n-bezier);
 `),v("menu-item-content-header",`
 grid-area: content;
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 opacity: 1;
 white-space: nowrap;
 overflow: hidden;
 text-overflow: ellipsis;
 color: var(--n-item-text-color);
 `,[f("a",`
 outline: none;
 text-decoration: none;
 transition: color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 `,[f("&::before",`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),s("extra",`
 font-size: .93em;
 color: var(--n-group-text-color);
 transition: color .3s var(--n-bezier);
 `)])]),v("submenu",`
 cursor: pointer;
 position: relative;
 margin-top: 6px;
 `,[v("menu-item-content",`
 height: var(--n-item-height);
 `),v("submenu-children",`
 overflow: hidden;
 padding: 0;
 `,[ro({duration:".2s"})])]),v("menu-item-group",[v("menu-item-group-title",`
 margin-top: 6px;
 color: var(--n-group-text-color);
 cursor: default;
 font-size: .93em;
 height: 36px;
 display: flex;
 align-items: center;
 transition:
 padding-left .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)])]),v("menu-tooltip",[f("a",`
 color: inherit;
 text-decoration: none;
 `)]),v("menu-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 6px 18px;
 `)]);function D(e,t){return[w("hover",e,t),f("&:hover",e,t)]}const $o=Object.assign(Object.assign({},G.props),{options:{type:Array,default:()=>[]},collapsed:{type:Boolean,default:void 0},collapsedWidth:{type:Number,default:48},iconSize:{type:Number,default:20},collapsedIconSize:{type:Number,default:24},rootIndent:Number,indent:{type:Number,default:32},labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},disabledField:{type:String,default:"disabled"},defaultExpandAll:Boolean,defaultExpandedKeys:Array,expandedKeys:Array,value:[String,Number],defaultValue:{type:[String,Number],default:null},mode:{type:String,default:"vertical"},watchProps:{type:Array,default:void 0},disabled:Boolean,show:{type:Boolean,defalut:!0},inverted:Boolean,"onUpdate:expandedKeys":[Function,Array],onUpdateExpandedKeys:[Function,Array],onUpdateValue:[Function,Array],"onUpdate:value":[Function,Array],expandIcon:Function,renderIcon:Function,renderLabel:Function,renderExtra:Function,dropdownProps:Object,accordion:Boolean,nodeProps:Function,items:Array,onOpenNamesChange:[Function,Array],onSelect:[Function,Array],onExpandedNamesChange:[Function,Array],expandedNames:Array,defaultExpandedNames:Array,dropdownPlacement:{type:String,default:"bottom"}}),_o=N({name:"Menu",props:$o,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:o}=se(e),n=G("Menu","-menu",Ao,so,e,t),a=K(Re,null),c=z(()=>{var p;const{collapsed:x}=e;if(x!==void 0)return x;if(a){const{collapseModeRef:r,collapsedRef:h}=a;if(r.value==="width")return(p=h.value)!==null&&p!==void 0?p:!1}return!1}),u=z(()=>{const{keyField:p,childrenField:x,disabledField:r}=e;return Xe(e.items||e.options,{getIgnored(h){return Me(h)},getChildren(h){return h[x]},getDisabled(h){return h[r]},getKey(h){var T;return(T=h[p])!==null&&T!==void 0?T:h.name}})}),m=z(()=>new Set(u.value.treeNodes.map(p=>p.key))),{watchProps:d}=e,b=F(null);d!=null&&d.includes("defaultValue")?xe(()=>{b.value=e.defaultValue}):b.value=e.defaultValue;const k=re(e,"value"),A=ce(k,b),g=F([]),P=()=>{g.value=e.defaultExpandAll?u.value.getNonLeafKeys():e.defaultExpandedNames||e.defaultExpandedKeys||u.value.getPath(A.value,{includeSelf:!1}).keyPath};d!=null&&d.includes("defaultExpandedKeys")?xe(P):P();const $=We(e,["expandedNames","expandedKeys"]),y=ce($,g),S=z(()=>u.value.treeNodes),_=z(()=>u.value.getPath(A.value).keyPath);U(ee,{props:e,mergedCollapsedRef:c,mergedThemeRef:n,mergedValueRef:A,mergedExpandedKeysRef:y,activePathRef:_,mergedClsPrefixRef:t,isHorizontalRef:z(()=>e.mode==="horizontal"),invertedRef:re(e,"inverted"),doSelect:Z,toggleExpand:O});function Z(p,x){const{"onUpdate:value":r,onUpdateValue:h,onSelect:T}=e;h&&B(h,p,x),r&&B(r,p,x),T&&B(T,p,x),b.value=p}function j(p){const{"onUpdate:expandedKeys":x,onUpdateExpandedKeys:r,onExpandedNamesChange:h,onOpenNamesChange:T}=e;x&&B(x,p),r&&B(r,p),h&&B(h,p),T&&B(T,p),g.value=p}function O(p){const x=Array.from(y.value),r=x.findIndex(h=>h===p);if(~r)x.splice(r,1);else{if(e.accordion&&m.value.has(p)){const h=x.findIndex(T=>m.value.has(T));h>-1&&x.splice(h,1)}x.push(p)}j(x)}const H=p=>{const x=u.value.getPath(p??A.value,{includeSelf:!1}).keyPath;if(!x.length)return;const r=Array.from(y.value),h=new Set([...r,...x]);e.accordion&&m.value.forEach(T=>{h.has(T)&&!x.includes(T)&&h.delete(T)}),j(Array.from(h))},C=z(()=>{const{inverted:p}=e,{common:{cubicBezierEaseInOut:x},self:r}=n.value,{borderRadius:h,borderColorHorizontal:T,fontSize:Ee,itemHeight:Le,dividerColor:Fe}=r,i={"--n-divider-color":Fe,"--n-bezier":x,"--n-font-size":Ee,"--n-border-color-horizontal":T,"--n-border-radius":h,"--n-item-height":Le};return p?(i["--n-group-text-color"]=r.groupTextColorInverted,i["--n-color"]=r.colorInverted,i["--n-item-text-color"]=r.itemTextColorInverted,i["--n-item-text-color-hover"]=r.itemTextColorHoverInverted,i["--n-item-text-color-active"]=r.itemTextColorActiveInverted,i["--n-item-text-color-child-active"]=r.itemTextColorChildActiveInverted,i["--n-item-text-color-child-active-hover"]=r.itemTextColorChildActiveInverted,i["--n-item-text-color-active-hover"]=r.itemTextColorActiveHoverInverted,i["--n-item-icon-color"]=r.itemIconColorInverted,i["--n-item-icon-color-hover"]=r.itemIconColorHoverInverted,i["--n-item-icon-color-active"]=r.itemIconColorActiveInverted,i["--n-item-icon-color-active-hover"]=r.itemIconColorActiveHoverInverted,i["--n-item-icon-color-child-active"]=r.itemIconColorChildActiveInverted,i["--n-item-icon-color-child-active-hover"]=r.itemIconColorChildActiveHoverInverted,i["--n-item-icon-color-collapsed"]=r.itemIconColorCollapsedInverted,i["--n-item-text-color-horizontal"]=r.itemTextColorHorizontalInverted,i["--n-item-text-color-hover-horizontal"]=r.itemTextColorHoverHorizontalInverted,i["--n-item-text-color-active-horizontal"]=r.itemTextColorActiveHorizontalInverted,i["--n-item-text-color-child-active-horizontal"]=r.itemTextColorChildActiveHorizontalInverted,i["--n-item-text-color-child-active-hover-horizontal"]=r.itemTextColorChildActiveHoverHorizontalInverted,i["--n-item-text-color-active-hover-horizontal"]=r.itemTextColorActiveHoverHorizontalInverted,i["--n-item-icon-color-horizontal"]=r.itemIconColorHorizontalInverted,i["--n-item-icon-color-hover-horizontal"]=r.itemIconColorHoverHorizontalInverted,i["--n-item-icon-color-active-horizontal"]=r.itemIconColorActiveHorizontalInverted,i["--n-item-icon-color-active-hover-horizontal"]=r.itemIconColorActiveHoverHorizontalInverted,i["--n-item-icon-color-child-active-horizontal"]=r.itemIconColorChildActiveHorizontalInverted,i["--n-item-icon-color-child-active-hover-horizontal"]=r.itemIconColorChildActiveHoverHorizontalInverted,i["--n-arrow-color"]=r.arrowColorInverted,i["--n-arrow-color-hover"]=r.arrowColorHoverInverted,i["--n-arrow-color-active"]=r.arrowColorActiveInverted,i["--n-arrow-color-active-hover"]=r.arrowColorActiveHoverInverted,i["--n-arrow-color-child-active"]=r.arrowColorChildActiveInverted,i["--n-arrow-color-child-active-hover"]=r.arrowColorChildActiveHoverInverted,i["--n-item-color-hover"]=r.itemColorHoverInverted,i["--n-item-color-active"]=r.itemColorActiveInverted,i["--n-item-color-active-hover"]=r.itemColorActiveHoverInverted,i["--n-item-color-active-collapsed"]=r.itemColorActiveCollapsedInverted):(i["--n-group-text-color"]=r.groupTextColor,i["--n-color"]=r.color,i["--n-item-text-color"]=r.itemTextColor,i["--n-item-text-color-hover"]=r.itemTextColorHover,i["--n-item-text-color-active"]=r.itemTextColorActive,i["--n-item-text-color-child-active"]=r.itemTextColorChildActive,i["--n-item-text-color-child-active-hover"]=r.itemTextColorChildActiveHover,i["--n-item-text-color-active-hover"]=r.itemTextColorActiveHover,i["--n-item-icon-color"]=r.itemIconColor,i["--n-item-icon-color-hover"]=r.itemIconColorHover,i["--n-item-icon-color-active"]=r.itemIconColorActive,i["--n-item-icon-color-active-hover"]=r.itemIconColorActiveHover,i["--n-item-icon-color-child-active"]=r.itemIconColorChildActive,i["--n-item-icon-color-child-active-hover"]=r.itemIconColorChildActiveHover,i["--n-item-icon-color-collapsed"]=r.itemIconColorCollapsed,i["--n-item-text-color-horizontal"]=r.itemTextColorHorizontal,i["--n-item-text-color-hover-horizontal"]=r.itemTextColorHoverHorizontal,i["--n-item-text-color-active-horizontal"]=r.itemTextColorActiveHorizontal,i["--n-item-text-color-child-active-horizontal"]=r.itemTextColorChildActiveHorizontal,i["--n-item-text-color-child-active-hover-horizontal"]=r.itemTextColorChildActiveHoverHorizontal,i["--n-item-text-color-active-hover-horizontal"]=r.itemTextColorActiveHoverHorizontal,i["--n-item-icon-color-horizontal"]=r.itemIconColorHorizontal,i["--n-item-icon-color-hover-horizontal"]=r.itemIconColorHoverHorizontal,i["--n-item-icon-color-active-horizontal"]=r.itemIconColorActiveHorizontal,i["--n-item-icon-color-active-hover-horizontal"]=r.itemIconColorActiveHoverHorizontal,i["--n-item-icon-color-child-active-horizontal"]=r.itemIconColorChildActiveHorizontal,i["--n-item-icon-color-child-active-hover-horizontal"]=r.itemIconColorChildActiveHoverHorizontal,i["--n-arrow-color"]=r.arrowColor,i["--n-arrow-color-hover"]=r.arrowColorHover,i["--n-arrow-color-active"]=r.arrowColorActive,i["--n-arrow-color-active-hover"]=r.arrowColorActiveHover,i["--n-arrow-color-child-active"]=r.arrowColorChildActive,i["--n-arrow-color-child-active-hover"]=r.arrowColorChildActiveHover,i["--n-item-color-hover"]=r.itemColorHover,i["--n-item-color-active"]=r.itemColorActive,i["--n-item-color-active-hover"]=r.itemColorActiveHover,i["--n-item-color-active-collapsed"]=r.itemColorActiveCollapsed),i}),I=o?ue("menu",z(()=>e.inverted?"a":"b"),C,e):void 0;return{mergedClsPrefix:t,controlledExpandedKeys:$,uncontrolledExpanededKeys:g,mergedExpandedKeys:y,uncontrolledValue:b,mergedValue:A,activePath:_,tmNodes:S,mergedTheme:n,mergedCollapsed:c,cssVars:o?void 0:C,themeClass:I==null?void 0:I.themeClass,onRender:I==null?void 0:I.onRender,showOption:H}},render(){const{mergedClsPrefix:e,mode:t,themeClass:o,onRender:n}=this;return n==null||n(),l("div",{role:t==="horizontal"?"menubar":"menu",class:[`${e}-menu`,o,`${e}-menu--${t}`,this.mergedCollapsed&&`${e}-menu--collapsed`],style:this.cssVars},this.tmNodes.map(a=>pe(a,this.$props)))}}),Ro={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},To=R("path",{d:"M98 190.06l139.78 163.12a24 24 0 0 0 36.44 0L414 190.06c13.34-15.57 2.28-39.62-18.22-39.62h-279.6c-20.5 0-31.56 24.05-18.18 39.62z",fill:"currentColor"},null,-1),Po=[To],No=N({name:"CaretDownOutline",render:function(t,o){return W(),X("svg",Ro,Po)}}),ko={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 32 32"},Oo=R("path",{d:"M24 21h2v5h-2z",fill:"currentColor"},null,-1),Bo=R("path",{d:"M20 16h2v10h-2z",fill:"currentColor"},null,-1),Mo=R("path",{d:"M11 26a5.006 5.006 0 0 1-5-5h2a3 3 0 1 0 3-3v-2a5 5 0 0 1 0 10z",fill:"currentColor"},null,-1),Eo=R("path",{d:"M28 2H4a2.002 2.002 0 0 0-2 2v24a2.002 2.002 0 0 0 2 2h24a2.003 2.003 0 0 0 2-2V4a2.002 2.002 0 0 0-2-2zm0 9H14V4h14zM12 4v7H4V4zM4 28V13h24l.002 15z",fill:"currentColor"},null,-1),Lo=[Oo,Bo,Mo,Eo],Fo=N({name:"Dashboard",render:function(t,o){return W(),X("svg",ko,Lo)}}),jo={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},Ko=R("path",{d:"M416 320h-96c-17.6 0-32-14.4-32-32s14.4-32 32-32h96s96-107 96-160s-43-96-96-96s-96 43-96 96c0 25.5 22.2 63.4 45.3 96H320c-52.9 0-96 43.1-96 96s43.1 96 96 96h96c17.6 0 32 14.4 32 32s-14.4 32-32 32H185.5c-16 24.8-33.8 47.7-47.3 64H416c52.9 0 96-43.1 96-96s-43.1-96-96-96zm0-256c17.7 0 32 14.3 32 32s-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32zM96 256c-53 0-96 43-96 96s96 160 96 160s96-107 96-160s-43-96-96-96zm0 128c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z",fill:"currentColor"},null,-1),Vo=[Ko],Do=N({name:"Route",render:function(t,o){return W(),X("svg",jo,Vo)}}),Uo={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},qo=R("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z",fill:"currentColor"},null,-1),Yo=R("path",{d:"M14 17H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z",fill:"currentColor"},null,-1),Go=[qo,Yo],Wo=N({name:"ArticleOutlined",render:function(t,o){return W(),X("svg",Uo,Go)}}),Xo={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},Zo=R("path",{d:"M12 11.39c0-.65-.39-1.23-.98-1.48L5.44 7.55c-1.48 1.68-2.32 3.7-2.8 5.45h7.75c.89 0 1.61-.72 1.61-1.61z",fill:"currentColor"},null,-1),Jo=R("path",{d:"M21.96 11.22c-.41-4.41-4.56-7.49-8.98-7.2c-2.51.16-4.44.94-5.93 2.04l4.74 2.01c1.33.57 2.2 1.87 2.2 3.32c0 1.99-1.62 3.61-3.61 3.61H2.21C2 16.31 2 17.2 2 17.2v.8c0 1.1.9 2 2 2h10c4.67 0 8.41-4.01 7.96-8.78z",fill:"currentColor"},null,-1),Qo=[Zo,Jo],et=N({name:"SportsMotorsportsFilled",render:function(t,o){return W(),X("svg",Xo,Qo)}}),ot={class:"px-6 border-b"},tt={class:"flex items-center my-4"},rt={class:"text-black mr-auto text-2xl leading-normal"},nt=R("span",{class:"text-sm ml-2"},"控制台",-1),it={class:"flex items-center"},lt={class:"mx-3 border-b border-white hover:border-b hover:border-green-500"},at={class:"ml-3"},ht={__name:"DashboardView",setup(e){const t=[{label:()=>l(q,{to:{path:"/manage"}},{default:()=>"總覽"}),key:"manage"},{label:()=>l(q,{to:{path:"/manage/routes"}},{default:()=>"路線管理"}),key:"routes"},{label:()=>l(q,{to:{path:"/manage/activities"}},{default:()=>"活動管理"}),key:"activities"},{label:()=>l(q,{to:{path:"/manage/articles"}},{default:()=>"文章管理"}),key:"articles"}],o=F(!0),n=c=>{if(c.key==="manage")return l(J,null,{default:()=>l(Fo)});if(c.key==="routes")return l(J,null,{default:()=>l(Do)});if(c.key==="activities")return l(J,null,{default:()=>l(et)});if(c.key==="articles")return l(J,null,{default:()=>l(Wo)})},a=()=>l(J,null,{default:()=>l(No)});return(c,u)=>(W(),X($e,null,[R("header",ot,[R("nav",tt,[R("h1",rt,[E(L(q),{to:"/manage"},{default:V(()=>[ae("MOTO GO")]),_:1}),nt]),R("ul",it,[R("li",lt,[E(L(q),{to:"/",target:"_blank"},{default:V(()=>[ae("回到前台")]),_:1})]),R("li",at,[E(L(Qe),{type:"primary",class:"bg-primary"},{default:V(()=>[ae("登出")]),_:1})])])])]),R("main",null,[E(L(Ze),{vertical:""},{default:V(()=>[E(L(Ce),{"has-sider":""},{default:V(()=>[E(L(bo),{bordered:"","collapse-mode":"width","collapsed-width":64,width:240,collapsed:o.value,"show-trigger":"",onCollapse:u[0]||(u[0]=m=>o.value=!0),onExpand:u[1]||(u[1]=m=>o.value=!1)},{default:V(()=>[E(L(_o),{collapsed:o.value,"collapsed-width":64,"collapsed-icon-size":24,options:t,"render-icon":n,"expand-icon":a},null,8,["collapsed"])]),_:1},8,["collapsed"]),E(L(Ce),null,{default:V(()=>[E(L(je))]),_:1})]),_:1})]),_:1})])],64))}};export{ht as default};
