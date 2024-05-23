"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[64485],{69378:function(e){e.exports=function e(t,o){if(t===o)return!0;if(t&&o&&"object"==typeof t&&"object"==typeof o){if(t.constructor!==o.constructor)return!1;if(Array.isArray(t)){if((r=t.length)!=o.length)return!1;for(n=r;0!=n--;)if(!e(t[n],o[n]))return!1;return!0}if(t.constructor===RegExp)return t.source===o.source&&t.flags===o.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===o.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===o.toString();if((r=(s=Object.keys(t)).length)!==Object.keys(o).length)return!1;for(n=r;0!=n--;)if(!Object.prototype.hasOwnProperty.call(o,s[n]))return!1;for(n=r;0!=n--;){var r,n,s,i=s[n];if(!e(t[i],o[i]))return!1}return!0}return t!=t&&o!=o}},89868:function(e,t,o){o.d(t,{Z:function(){return r}});/**
 * @license @tabler/icons-react v3.3.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var r=(0,o(73681).Z)("outline","at","IconAt",[["path",{d:"M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0",key:"svg-0"}],["path",{d:"M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28",key:"svg-1"}]])},51934:function(e,t,o){o.d(t,{Z:function(){return r}});/**
 * @license @tabler/icons-react v3.3.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var r=(0,o(73681).Z)("outline","lock","IconLock",[["path",{d:"M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6z",key:"svg-0"}],["path",{d:"M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0",key:"svg-1"}],["path",{d:"M8 11v-4a4 4 0 1 1 8 0v4",key:"svg-2"}]])},15463:function(e,t,o){function r(e,t,o){"object"==typeof o.value&&(o.value=n(o.value)),o.enumerable&&!o.get&&!o.set&&o.configurable&&o.writable&&"__proto__"!==t?e[t]=o.value:Object.defineProperty(e,t,o)}function n(e){if("object"!=typeof e)return e;var t,o,s,i=0,a=Object.prototype.toString.call(e);if("[object Object]"===a?s=Object.create(e.__proto__||null):"[object Array]"===a?s=Array(e.length):"[object Set]"===a?(s=new Set,e.forEach(function(e){s.add(n(e))})):"[object Map]"===a?(s=new Map,e.forEach(function(e,t){s.set(n(t),n(e))})):"[object Date]"===a?s=new Date(+e):"[object RegExp]"===a?s=new RegExp(e.source,e.flags):"[object DataView]"===a?s=new e.constructor(n(e.buffer)):"[object ArrayBuffer]"===a?s=e.slice(0):"Array]"===a.slice(-6)&&(s=new e.constructor(e)),s){for(o=Object.getOwnPropertySymbols(e);i<o.length;i++)r(s,o[i],Object.getOwnPropertyDescriptor(e,o[i]));for(i=0,o=Object.getOwnPropertyNames(e);i<o.length;i++)Object.hasOwnProperty.call(s,t=o[i])&&s[t]===e[t]||r(s,t,Object.getOwnPropertyDescriptor(e,t))}return s||e}o.d(t,{Y:function(){return n}})},63644:function(e,t,o){o.d(t,{j:function(){return l}});var r=o(52322),n=o(78222),s=o(17115),i=o(3900),a=o(3789);let l={type:"code",code:`
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} title="Authentication">
        {/* Modal content */}
      </Modal>

      <Button onClick={open}>Open modal</Button>
    </>
  );
}
`,centered:!0,component:function(){let[e,{open:t,close:o}]=(0,i.q)(!1);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.u,{opened:e,onClose:o,title:"Authentication",children:(0,r.jsx)(a._,{noShadow:!0,noPadding:!0})}),(0,r.jsx)(s.z,{onClick:t,children:"Open modal"})]})}}},3789:function(e,t,o){o.d(t,{_:function(){return v}});var r=o(52322),n=o(2784),s=o(89868),i=o(51934),a=o(1198),l=o(20992),c=o(93010),u=o(74770),d=o(60284),p=o(95047),f=o(8582),m=o(71873),g=o(17115),h=o(405);function v({noShadow:e,noPadding:t,noSubmit:o,style:v}){let[b,y]=(0,n.useState)("register"),[j,w]=(0,n.useState)(!1),[x,C]=(0,n.useState)(null),O=(0,h.c)({initialValues:{firstName:"",lastName:"",email:"",password:"",confirmPassword:"",termsOfService:!0}});return(0,r.jsx)(a.X,{p:t?0:"lg",shadow:e?"none":"sm",style:{...v,position:"relative",backgroundColor:"var(--mantine-color-body)"},children:(0,r.jsxs)("form",{onSubmit:O.onSubmit(()=>{w(!0),C(null),setTimeout(()=>{w(!1),C("register"===b?"User with this email already exists":"User with this email does not exist")},3e3)}),children:[(0,r.jsx)(l.f,{visible:j}),"register"===b&&(0,r.jsxs)(c.Z,{grow:!0,children:[(0,r.jsx)(u.o,{"data-autofocus":!0,required:!0,placeholder:"Your first name",label:"First name",...O.getInputProps("firstName")}),(0,r.jsx)(u.o,{required:!0,placeholder:"Your last name",label:"Last name",...O.getInputProps("lastName")})]}),(0,r.jsx)(u.o,{mt:"md",required:!0,placeholder:"Your email",label:"Email",leftSection:(0,r.jsx)(s.Z,{size:16,stroke:1.5}),...O.getInputProps("email")}),(0,r.jsx)(d.W,{mt:"md",required:!0,placeholder:"Password",label:"Password",leftSection:(0,r.jsx)(i.Z,{size:16,stroke:1.5}),...O.getInputProps("password")}),"register"===b&&(0,r.jsx)(d.W,{mt:"md",required:!0,label:"Confirm Password",placeholder:"Confirm password",leftSection:(0,r.jsx)(i.Z,{size:16,stroke:1.5}),...O.getInputProps("confirmPassword")}),"register"===b&&(0,r.jsx)(p.X,{mt:"xl",label:"I agree to sell my soul and privacy to this corporation",...O.getInputProps("termsOfService",{type:"checkbox"})}),x&&(0,r.jsx)(f.x,{c:"red",size:"sm",mt:"sm",children:x}),!o&&(0,r.jsxs)(c.Z,{justify:"space-between",mt:"xl",children:[(0,r.jsx)(m.e,{component:"button",type:"button",c:"dimmed",onClick:()=>{y(e=>"register"===e?"login":"register"),C(null)},size:"sm",children:"register"===b?"Have an account? Login":"Don't have an account? Register"}),(0,r.jsx)(g.z,{color:"blue",type:"submit",children:"register"===b?"Register":"Login"})]})]})})}},20992:function(e,t,o){o.d(t,{f:function(){return v}});var r=o(52322);o(2784);var n=o(97263),s=o(11200),i=o(68755),a=o(38483),l=o(46690),c=o(28559),u=o(82027),d=o(12491),p=o(87170),f=o(96321),m={root:"m_6e45937b",loader:"m_e8eb006c",overlay:"m_df587f17"};let g={transitionProps:{transition:"fade",duration:0},overlayProps:{backgroundOpacity:.75},zIndex:(0,n.w)("overlay")},h=(0,s.Z)((e,{zIndex:t})=>({root:{"--lo-z-index":t?.toString()}})),v=(0,u.d)((e,t)=>{let o=(0,a.w)("LoadingOverlay",g,e),{classNames:n,className:s,style:u,styles:v,unstyled:b,vars:y,transitionProps:j,loaderProps:w,overlayProps:x,visible:C,zIndex:O,...k}=o,P=(0,i.rZ)(),S=(0,l.y)({name:"LoadingOverlay",classes:m,props:o,className:s,style:u,classNames:n,styles:v,unstyled:b,vars:y,varsResolver:h}),_={...g.overlayProps,...x};return(0,r.jsx)(f.u,{transition:"fade",...j,mounted:!!C,children:e=>(0,r.jsxs)(c.x,{...S("root",{style:e}),ref:t,...k,children:[(0,r.jsx)(d.a,{...S("loader"),unstyled:b,...w}),(0,r.jsx)(p.a,{..._,...S("overlay"),darkHidden:!0,unstyled:b,color:x?.color||P.white}),(0,r.jsx)(p.a,{..._,...S("overlay"),lightHidden:!0,unstyled:b,color:x?.color||P.colors.dark[5]})]})})});v.classes=m,v.displayName="@mantine/core/LoadingOverlay"},60284:function(e,t,o){o.d(t,{W:function(){return j}});var r=o(52322),n=o(40489),s=o(66178),i=o(9341);o(2784);var a=o(91482),l=o(11200),c=o(51477),u=o(46690),d=o(38483),p=o(97072),f=o(82027),m=o(54813),g=o(6941),h=o(73063),v={root:"m_f61ca620",input:"m_ccf8da4c",innerInput:"m_f2d85dd2",visibilityToggle:"m_b1072d44"};let b={visibilityToggleIcon:({reveal:e})=>(0,r.jsx)("svg",{viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{width:"var(--psi-icon-size)",height:"var(--psi-icon-size)"},children:(0,r.jsx)("path",{d:e?"M13.3536 2.35355C13.5488 2.15829 13.5488 1.84171 13.3536 1.64645C13.1583 1.45118 12.8417 1.45118 12.6464 1.64645L10.6828 3.61012C9.70652 3.21671 8.63759 3 7.5 3C4.30786 3 1.65639 4.70638 0.0760002 7.23501C-0.0253338 7.39715 -0.0253334 7.60288 0.0760014 7.76501C0.902945 9.08812 2.02314 10.1861 3.36061 10.9323L1.64645 12.6464C1.45118 12.8417 1.45118 13.1583 1.64645 13.3536C1.84171 13.5488 2.15829 13.5488 2.35355 13.3536L4.31723 11.3899C5.29348 11.7833 6.36241 12 7.5 12C10.6921 12 13.3436 10.2936 14.924 7.76501C15.0253 7.60288 15.0253 7.39715 14.924 7.23501C14.0971 5.9119 12.9769 4.81391 11.6394 4.06771L13.3536 2.35355ZM9.90428 4.38861C9.15332 4.1361 8.34759 4 7.5 4C4.80285 4 2.52952 5.37816 1.09622 7.50001C1.87284 8.6497 2.89609 9.58106 4.09974 10.1931L9.90428 4.38861ZM5.09572 10.6114L10.9003 4.80685C12.1039 5.41894 13.1272 6.35031 13.9038 7.50001C12.4705 9.62183 10.1971 11 7.5 11C6.65241 11 5.84668 10.8639 5.09572 10.6114Z":"M7.5 11C4.80285 11 2.52952 9.62184 1.09622 7.50001C2.52952 5.37816 4.80285 4 7.5 4C10.1971 4 12.4705 5.37816 13.9038 7.50001C12.4705 9.62183 10.1971 11 7.5 11ZM7.5 3C4.30786 3 1.65639 4.70638 0.0760002 7.23501C-0.0253338 7.39715 -0.0253334 7.60288 0.0760014 7.76501C1.65639 10.2936 4.30786 12 7.5 12C10.6921 12 13.3436 10.2936 14.924 7.76501C15.0253 7.60288 15.0253 7.39715 14.924 7.23501C13.3436 4.70638 10.6921 3 7.5 3ZM7.5 9.5C8.60457 9.5 9.5 8.60457 9.5 7.5C9.5 6.39543 8.60457 5.5 7.5 5.5C6.39543 5.5 5.5 6.39543 5.5 7.5C5.5 8.60457 6.39543 9.5 7.5 9.5Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})})},y=(0,l.Z)((e,{size:t})=>({root:{"--psi-icon-size":(0,a.ap)(t,"psi-icon-size"),"--psi-button-size":(0,a.ap)(t,"psi-button-size")}})),j=(0,f.d)((e,t)=>{let o=(0,d.w)("PasswordInput",b,e),{classNames:a,className:l,style:f,styles:h,unstyled:j,vars:w,required:x,error:C,leftSection:O,disabled:k,id:P,variant:S,inputContainer:_,description:I,label:M,size:Z,errorProps:z,descriptionProps:D,labelProps:L,withAsterisk:A,inputWrapperOrder:N,wrapperProps:E,radius:q,rightSection:R,rightSectionWidth:B,rightSectionPointerEvents:T,leftSectionWidth:V,visible:W,defaultVisible:Y,onVisibilityChange:F,visibilityToggleIcon:H,visibilityToggleButtonProps:K,rightSectionProps:U,leftSectionProps:X,leftSectionPointerEvents:G,mod:J,...Q}=o,$=(0,s.M)(P),[ee,et]=(0,i.C)({value:W,defaultValue:Y,finalValue:!1,onChange:F}),eo=()=>et(!ee),er=(0,u.y)({name:"PasswordInput",classes:v,props:o,className:l,style:f,classNames:a,styles:h,unstyled:j,vars:w,varsResolver:y}),{resolvedClassNames:en,resolvedStyles:es}=(0,c.h)({classNames:a,styles:h,props:o}),{styleProps:ei,rest:ea}=(0,p.c)(Q),el=(0,r.jsx)(m.A,{...er("visibilityToggle"),disabled:k,radius:q,"aria-hidden":!K,tabIndex:-1,...K,variant:"subtle",color:"gray",unstyled:j,onMouseDown:e=>{e.preventDefault(),K?.onMouseDown?.(e),eo()},onKeyDown:e=>{K?.onKeyDown?.(e)," "===e.key&&(e.preventDefault(),eo())},children:(0,r.jsx)(H,{reveal:ee})});return(0,r.jsx)(g.I.Wrapper,{required:x,id:$,label:M,error:C,description:I,size:Z,classNames:en,styles:es,__staticSelector:"PasswordInput",errorProps:z,descriptionProps:D,unstyled:j,withAsterisk:A,inputWrapperOrder:N,inputContainer:_,variant:S,labelProps:{...L,htmlFor:$},mod:J,...er("root"),...ei,...E,children:(0,r.jsx)(g.I,{component:"div",error:C,leftSection:O,size:Z,classNames:{...en,input:(0,n.Z)(v.input,en.input)},styles:es,radius:q,disabled:k,__staticSelector:"PasswordInput",rightSectionWidth:B,rightSection:R??el,variant:S,unstyled:j,leftSectionWidth:V,rightSectionPointerEvents:T||"all",rightSectionProps:U,leftSectionProps:X,leftSectionPointerEvents:G,withAria:!1,children:(0,r.jsx)("input",{required:x,"data-invalid":!!C||void 0,"data-with-left-section":!!O||void 0,...er("innerInput"),disabled:k,id:$,ref:t,...ea,autoComplete:ea.autoComplete||"off",type:ee?"text":"password"})})})});j.classes={...h.M.classes,...v},j.displayName="@mantine/core/PasswordInput"},3900:function(e,t,o){o.d(t,{q:function(){return n}});var r=o(2784);function n(e=!1,t){let{onOpen:o,onClose:n}=t||{},[s,i]=(0,r.useState)(e),a=(0,r.useCallback)(()=>{i(e=>e||(o?.(),!0))},[o]),l=(0,r.useCallback)(()=>{i(e=>e?(n?.(),!1):e)},[n]),c=(0,r.useCallback)(()=>{s?l():a()},[l,a,s]);return[s,{open:a,close:l,toggle:c}]}}}]);