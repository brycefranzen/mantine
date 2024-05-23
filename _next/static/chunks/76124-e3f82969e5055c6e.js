"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[76124],{26802:function(t,e,n){n.d(e,{M:function(){return m}});var l=n(52322);n(2784);var o=n(38483),a=n(46690),i=n(12063),r=n(28559),s=n(82027),h=n(98446),d=n(65744),c=n(40580),x=n(91482),p=n(54541),j=n(32100),u=n(68755),b=n(9437);function k({spacing:t,verticalSpacing:e,cols:n,selector:o}){let a=(0,u.rZ)(),i=void 0===e?t:e,r=(0,c.L)({"--sg-spacing-x":(0,x.bG)((0,j.v)(t)),"--sg-spacing-y":(0,x.bG)((0,j.v)(i)),"--sg-cols":j.v(n)?.toString()}),s=(0,h.X)(a.breakpoints).reduce((e,l)=>(e[l]||(e[l]={}),"object"==typeof t&&void 0!==t[l]&&(e[l]["--sg-spacing-x"]=(0,x.bG)(t[l])),"object"==typeof i&&void 0!==i[l]&&(e[l]["--sg-spacing-y"]=(0,x.bG)(i[l])),"object"==typeof n&&void 0!==n[l]&&(e[l]["--sg-cols"]=n[l]),e),{}),d=(0,p.I)((0,h.X)(s),a).filter(t=>(0,h.X)(s[t.value]).length>0).map(t=>({query:`(min-width: ${a.breakpoints[t.value]})`,styles:s[t.value]}));return(0,l.jsx)(b.f,{styles:r,media:d,selector:o})}function M(t){return"object"==typeof t&&null!==t?(0,h.X)(t):[]}function v({spacing:t,verticalSpacing:e,cols:n,selector:o}){let a=void 0===e?t:e,i=(0,c.L)({"--sg-spacing-x":(0,x.bG)((0,j.v)(t)),"--sg-spacing-y":(0,x.bG)((0,j.v)(a)),"--sg-cols":j.v(n)?.toString()}),r=function({spacing:t,verticalSpacing:e,cols:n}){return Array.from(new Set([...M(t),...M(e),...M(n)])).sort((t,e)=>(0,d.px)(t)-(0,d.px)(e))}({spacing:t,verticalSpacing:e,cols:n}),s=r.reduce((e,l)=>(e[l]||(e[l]={}),"object"==typeof t&&void 0!==t[l]&&(e[l]["--sg-spacing-x"]=(0,x.bG)(t[l])),"object"==typeof a&&void 0!==a[l]&&(e[l]["--sg-spacing-y"]=(0,x.bG)(a[l])),"object"==typeof n&&void 0!==n[l]&&(e[l]["--sg-cols"]=n[l]),e),{}),h=r.map(t=>({query:`simple-grid (min-width: ${t})`,styles:s[t]}));return(0,l.jsx)(b.f,{styles:i,container:h,selector:o})}var f={container:"m_925c2d2c",root:"m_2415a157"};let g={cols:1,spacing:"md",type:"media"},m=(0,s.d)((t,e)=>{let n=(0,o.w)("SimpleGrid",g,t),{classNames:s,className:h,style:d,styles:c,unstyled:x,vars:p,cols:j,verticalSpacing:u,spacing:b,type:M,...m}=n,C=(0,a.y)({name:"SimpleGrid",classes:f,props:n,className:h,style:d,classNames:s,styles:c,unstyled:x,vars:p}),L=(0,i.m)();return"container"===M?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(v,{...n,selector:`.${L}`}),(0,l.jsx)("div",{...C("container"),children:(0,l.jsx)(r.x,{ref:e,...C("root",{className:L}),...m})})]}):(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(k,{...n,selector:`.${L}`}),(0,l.jsx)(r.x,{ref:e,...C("root",{className:L}),...m})]})});m.classes=f,m.displayName="@mantine/core/SimpleGrid"},27072:function(t,e,n){n.d(e,{l:function(){return d}});var l=n(52322);n(2784);var o=n(38483),a=n(46690),i=n(28559),r=n(82027),s={root:"m_d6493fad"};let h={},d=(0,r.d)((t,e)=>{let n=(0,o.w)("TypographyStylesProvider",h,t),{classNames:r,className:d,style:c,styles:x,unstyled:p,...j}=n,u=(0,a.y)({name:"TypographyStylesProvider",classes:s,props:n,className:d,style:c,classNames:r,styles:x,unstyled:p});return(0,l.jsx)(i.x,{ref:e,...u("root"),...j})});d.classes=s,d.displayName="@mantine/core/TypographyStylesProvider"},32100:function(t,e,n){n.d(e,{v:function(){return l}});function l(t){return"object"==typeof t&&null!==t?"base"in t?t.base:void 0:t}},99070:function(t,e,n){n.d(e,{o:function(){return o}});var l=n(65744);function o(t,e){return t in e.breakpoints?(0,l.px)(e.breakpoints[t]):(0,l.px)(t)}},54541:function(t,e,n){n.d(e,{I:function(){return o}});var l=n(99070);function o(t,e){let n=t.map(t=>({value:t,px:(0,l.o)(t,e)}));return n.sort((t,e)=>t.px-e.px),n}},84821:function(t,e,n){n.d(e,{U:function(){return o}});var l=n(2784);function o(t){let[e,n]=(0,l.useState)(t);return[e,t=>{if(t){if("function"==typeof t)n(t);else if("object"==typeof t&&"nativeEvent"in t){let{currentTarget:e}=t;n("checkbox"===e.type?e.checked:e.value)}else n(t)}else n(t)}]}},50023:function(t,e,n){n.d(e,{Y:function(){return o},r:function(){return l}});let[l,o]=(0,n(89106).R)("RichTextEditor component was not found in tree")},76124:function(t,e,n){n.d(e,{L:function(){return t7}});var l=n(52322),o=n(2784),a=n(82027),i=n(38483),r=n(46690),s=n(28559);let h={linkControlLabel:"Link",colorPickerControlLabel:"Text color",highlightControlLabel:"Highlight text",colorControlLabel:t=>`Set text color ${t}`,boldControlLabel:"Bold",italicControlLabel:"Italic",underlineControlLabel:"Underline",strikeControlLabel:"Strikethrough",clearFormattingControlLabel:"Clear formatting",unlinkControlLabel:"Remove link",bulletListControlLabel:"Bullet list",orderedListControlLabel:"Ordered list",h1ControlLabel:"Heading 1",h2ControlLabel:"Heading 2",h3ControlLabel:"Heading 3",h4ControlLabel:"Heading 4",h5ControlLabel:"Heading 5",h6ControlLabel:"Heading 6",blockquoteControlLabel:"Blockquote",alignLeftControlLabel:"Align text: left",alignCenterControlLabel:"Align text: center",alignRightControlLabel:"Align text: right",alignJustifyControlLabel:"Align text: justify",codeControlLabel:"Code",codeBlockControlLabel:"Code block",subscriptControlLabel:"Subscript",superscriptControlLabel:"Superscript",unsetColorControlLabel:"Unset color",hrControlLabel:"Horizontal line",undoControlLabel:"Undo",redoControlLabel:"Redo",tasksControlLabel:"Task list",tasksSinkLabel:"Decrease task level",tasksLiftLabel:"Increase task level",linkEditorInputLabel:"Enter URL",linkEditorInputPlaceholder:"https://example.com/",linkEditorExternalLink:"Open link in a new tab",linkEditorInternalLink:"Open link in the same tab",linkEditorSave:"Save",colorPickerCancel:"Cancel",colorPickerClear:"Clear color",colorPickerColorPicker:"Color picker",colorPickerPalette:"Color palette",colorPickerSave:"Save",colorPickerColorLabel:t=>`Set text color ${t}`};var d=n(50023),c=n(13635),x=n(27072),p=n(14852);let j={},u=(0,a.d)((t,e)=>{let{classNames:n,className:o,style:a,styles:r,vars:h,...p}=(0,i.w)("RichTextEditorContent",j,t),u=(0,d.Y)();return u.withTypographyStyles?(0,l.jsx)(x.l,{...u.getStyles("typographyStylesProvider",{className:o,style:a,styles:r,classNames:n}),unstyled:u.unstyled,ref:e,children:(0,l.jsx)(s.x,{component:c.kg,editor:u.editor,...u.getStyles("content",{classNames:n,styles:r}),...p})}):(0,l.jsx)(s.x,{component:c.kg,editor:u.editor,...u.getStyles("content",{classNames:n,styles:r,className:o,style:a}),...p})});function b(t){return(0,l.jsx)("svg",{...t,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"})}function k(t){return(0,l.jsxs)(b,{...t,children:[(0,l.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),(0,l.jsx)("path",{d:"M7 5h6a3.5 3.5 0 0 1 0 7h-6z"}),(0,l.jsx)("path",{d:"M13 12h1a3.5 3.5 0 0 1 0 7h-7v-7"})]})}function M(t){return(0,l.jsxs)(b,{...t,children:[(0,l.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),(0,l.jsx)("path",{d:"M11 5l6 0"}),(0,l.jsx)("path",{d:"M7 19l6 0"}),(0,l.jsx)("path",{d:"M14 5l-4 14"})]})}function v(t){return(0,l.jsxs)(b,{...t,children:[(0,l.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),(0,l.jsx)("path",{d:"M7 5v5a5 5 0 0 0 10 0v-5"}),(0,l.jsx)("path",{d:"M5 19h14"})]})}function f(t){return(0,l.jsxs)(b,{...t,children:[(0,l.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),(0,l.jsx)("path",{d:"M5 12l14 0"}),(0,l.jsx)("path",{d:"M16 6.5a4 2 0 0 0 -4 -1.5h-1a3.5 3.5 0 0 0 0 7h2a3.5 3.5 0 0 1 0 7h-1.5a4 2 0 0 1 -4 -1.5"})]})}function g(t){return(0,l.jsxs)(b,{...t,children:[(0,l.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),(0,l.jsx)("path",{d:"M17 15l4 4m0 -4l-4 4"}),(0,l.jsx)("path",{d:"M7 6v-1h11v1"}),(0,l.jsx)("path",{d:"M7 19l4 0"}),(0,l.jsx)("path",{d:"M13 5l-4 14"})]})}function m(t){return(0,l.jsxs)(b,{...t,children:[(0,l.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),(0,l.jsx)("path",{d:"M19 18v-8l-2 2"}),(0,l.jsx)("path",{d:"M4 6v12"}),(0,l.jsx)("path",{d:"M12 6v12"}),(0,l.jsx)("path",{d:"M11 18h2"}),(0,l.jsx)("path",{d:"M3 18h2"}),(0,l.jsx)("path",{d:"M4 12h8"}),(0,l.jsx)("path",{d:"M3 6h2"}),(0,l.jsx)("path",{d:"M11 6h2"})]})}function C(t){return(0,l.jsxs)(b,{...t,children:[(0,l.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),(0,l.jsx)("path",{d:"M17 12a2 2 0 1 1 4 0c0 .591 -.417 1.318 -.816 1.858l-3.184 4.143l4 0"}),(0,l.jsx)("path",{d:"M4 6v12"}),(0,l.jsx)("path",{d:"M12 6v12"}),(0,l.jsx)("path",{d:"M11 18h2"}),(0,l.jsx)("path",{d:"M3 18h2"}),(0,l.jsx)("path",{d:"M4 12h8"}),(0,l.jsx)("path",{d:"M3 6h2"}),(0,l.jsx)("path",{d:"M11 6h2"})]})}function L(t){return(0,l.jsxs)(b,{...t,children:[(0,l.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),(0,l.jsx)("path",{d:"M19 14a2 2 0 1 0 -2 -2"}),(0,l.jsx)("path",{d:"M17 16a2 2 0 1 0 2 -2"}),(0,l.jsx)("path",{d:"M4 6v12"}),(0,l.jsx)("path",{d:"M12 6v12"}),(0,l.jsx)("path",{d:"M11 18h2"}),(0,l.jsx)("path",{d:"M3 18h2"}),(0,l.jsx)("path",{d:"M4 12h8"}),(0,l.jsx)("path",{d:"M3 6h2"}),(0,l.jsx)("path",{d:"M11 6h2"})]})}function y(t){return(0,l.jsxs)(b,{...t,children:[(0,l.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),(0,l.jsx)("path",{d:"M20 18v-8l-4 6h5"}),(0,l.jsx)("path",{d:"M4 6v12"}),(0,l.jsx)("path",{d:"M12 6v12"}),(0,l.jsx)("path",{d:"M11 18h2"}),(0,l.jsx)("path",{d:"M3 18h2"}),(0,l.jsx)("path",{d:"M4 12h8"}),(0,l.jsx)("path",{d:"M3 6h2"}),(0,l.jsx)("path",{d:"M11 6h2"})]})}function H(t){return(0,l.jsxs)(b,{...t,children:[(0,l.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),(0,l.jsx)("path",{d:"M17 18h2a2 2 0 1 0 0 -4h-2v-4h4"}),(0,l.jsx)("path",{d:"M4 6v12"}),(0,l.jsx)("path",{d:"M12 6v12"}),(0,l.jsx)("path",{d:"M11 18h2"}),(0,l.jsx)("path",{d:"M3 18h2"}),(0,l.jsx)("path",{d:"M4 12h8"}),(0,l.jsx)("path",{d:"M3 6h2"}),(0,l.jsx)("path",{d:"M11 6h2"})]})}function S(t){return(0,l.jsxs)(b,{...t,children:[(0,l.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),(0,l.jsx)("path",{d:"M19 14a2 2 0 1 0 0 4a2 2 0 0 0 0 -4z"}),(0,l.jsx)("path",{d:"M21 12a2 2 0 1 0 -4 0v4"}),(0,l.jsx)("path",{d:"M4 6v12"}),(0,l.jsx)("path",{d:"M12 6v12"}),(0,l.jsx)("path",{d:"M11 18h2"}),(0,l.jsx)("path",{d:"M3 18h2"}),(0,l.jsx)("path",{d:"M4 12h8"}),(0,l.jsx)("path",{d:"M3 6h2"}),(0,l.jsx)("path",{d:"M11 6h2"})]})}function w(t){return(0,l.jsxs)(b,{...t,children:[(0,l.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),(0,l.jsx)("path",{d:"M9 6l11 0"}),(0,l.jsx)("path",{d:"M9 12l11 0"}),(0,l.jsx)("path",{d:"M9 18l11 0"}),(0,l.jsx)("path",{d:"M5 6l0 .01"}),(0,l.jsx)("path",{d:"M5 12l0 .01"}),(0,l.jsx)("path",{d:"M5 18l0 .01"})]})}function z(t){return(0,l.jsxs)(b,{...t,children:[(0,l.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),(0,l.jsx)("path",{d:"M11 6h9"}),(0,l.jsx)("path",{d:"M11 12h9"}),(0,l.jsx)("path",{d:"M12 18h8"}),(0,l.jsx)("path",{d:"M4 16a2 2 0 1 1 4 0c0 .591 -.5 1 -1 1.5l-3 2.5h4"}),(0,l.jsx)("path",{d:"M6 10v-6l-2 2"})]})}function E(t){return(0,l.jsxs)(b,{...t,children:[(0,l.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),(0,l.jsx)("path",{d:"M17 22v-2"}),(0,l.jsx)("path",{d:"M9 15l6 -6"}),(0,l.jsx)("path",{d:"M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464"}),(0,l.jsx)("path",{d:"M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463"}),(0,l.jsx)("path",{d:"M20 17h2"}),(0,l.jsx)("path",{d:"M2 7h2"}),(0,l.jsx)("path",{d:"M7 2v2"})]})}function A(t){return(0,l.jsxs)(b,{...t,children:[(0,l.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),(0,l.jsx)("path",{d:"M6 15h15"}),(0,l.jsx)("path",{d:"M21 19h-15"}),(0,l.jsx)("path",{d:"M15 11h6"}),(0,l.jsx)("path",{d:"M21 7h-6"}),(0,l.jsx)("path",{d:"M9 9h1a1 1 0 1 1 -1 1v-2.5a2 2 0 0 1 2 -2"}),(0,l.jsx)("path",{d:"M3 9h1a1 1 0 1 1 -1 1v-2.5a2 2 0 0 1 2 -2"})]})}function P(t){return(0,l.jsxs)(b,{...t,children:[(0,l.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),(0,l.jsx)("path",{d:"M4 6l16 0"}),(0,l.jsx)("path",{d:"M4 12l10 0"}),(0,l.jsx)("path",{d:"M4 18l14 0"})]})}function T(t){return(0,l.jsxs)(b,{...t,children:[(0,l.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),(0,l.jsx)("path",{d:"M4 6l16 0"}),(0,l.jsx)("path",{d:"M10 12l10 0"}),(0,l.jsx)("path",{d:"M6 18l14 0"})]})}function R(t){return(0,l.jsxs)(b,{...t,children:[(0,l.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),(0,l.jsx)("path",{d:"M4 6l16 0"}),(0,l.jsx)("path",{d:"M8 12l8 0"}),(0,l.jsx)("path",{d:"M6 18l12 0"})]})}function I(t){return(0,l.jsxs)(b,{...t,children:[(0,l.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),(0,l.jsx)("path",{d:"M4 6l16 0"}),(0,l.jsx)("path",{d:"M4 12l16 0"}),(0,l.jsx)("path",{d:"M4 18l12 0"})]})}function _(t){return(0,l.jsxs)(b,{...t,children:[(0,l.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),(0,l.jsx)("path",{d:"M5 7l8 10m-8 0l8 -10"}),(0,l.jsx)("path",{d:"M21 20h-4l3.5 -4a1.73 1.73 0 0 0 -3.5 -2"})]})}function G(t){return(0,l.jsxs)(b,{...t,children:[(0,l.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),(0,l.jsx)("path",{d:"M5 7l8 10m-8 0l8 -10"}),(0,l.jsx)("path",{d:"M21 11h-4l3.5 -4a1.73 1.73 0 0 0 -3.5 -2"})]})}function N(t){return(0,l.jsxs)(b,{...t,children:[(0,l.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),(0,l.jsx)("path",{d:"M7 8l-4 4l4 4"}),(0,l.jsx)("path",{d:"M17 8l4 4l-4 4"}),(0,l.jsx)("path",{d:"M14 4l-4 16"})]})}function B(t){return(0,l.jsxs)(b,{...t,children:[(0,l.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),(0,l.jsx)("path",{d:"M3 19h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4"}),(0,l.jsx)("path",{d:"M12.5 5.5l4 4"}),(0,l.jsx)("path",{d:"M4.5 13.5l4 4"}),(0,l.jsx)("path",{d:"M21 15v4h-8l4 -4z"})]})}function D(t){return(0,l.jsxs)(b,{...t,children:[(0,l.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),(0,l.jsx)("path",{d:"M5 12h2"}),(0,l.jsx)("path",{d:"M17 12h2"}),(0,l.jsx)("path",{d:"M11 12h2"})]})}function U(t){return(0,l.jsxs)(b,{...t,children:[(0,l.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),(0,l.jsx)("path",{d:"M20.042 16.045a9 9 0 0 0 -12.087 -12.087m-2.318 1.677a9 9 0 1 0 12.725 12.73"}),(0,l.jsx)("path",{d:"M3 3l18 18"})]})}function q(t){return(0,l.jsxs)(b,{...t,children:[(0,l.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),(0,l.jsx)("path",{d:"M11 7l6 6"}),(0,l.jsx)("path",{d:"M4 16l11.7 -11.7a1 1 0 0 1 1.4 0l2.6 2.6a1 1 0 0 1 0 1.4l-11.7 11.7h-4v-4z"})]})}function Z(t){return(0,l.jsxs)(b,{...t,children:[(0,l.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),(0,l.jsx)("path",{d:"M18 6l-12 12"}),(0,l.jsx)("path",{d:"M6 6l12 12"})]})}function J(t){return(0,l.jsxs)(b,{...t,children:[(0,l.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),(0,l.jsx)("path",{d:"M12 21a9 9 0 0 1 0 -18c4.97 0 9 3.582 9 8c0 1.06 -.474 2.078 -1.318 2.828c-.844 .75 -1.989 1.172 -3.182 1.172h-2.5a2 2 0 0 0 -1 3.75a1.3 1.3 0 0 1 -1 2.25"}),(0,l.jsx)("path",{d:"M8.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}),(0,l.jsx)("path",{d:"M12.5 7.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}),(0,l.jsx)("path",{d:"M16.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"})]})}function Y(t){return(0,l.jsxs)(b,{...t,children:[(0,l.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),(0,l.jsx)("path",{d:"M5 12l5 5l10 -10"})]})}function F(t){return(0,l.jsxs)(b,{...t,children:[(0,l.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),(0,l.jsx)("path",{d:"M9 15l6 -6"}),(0,l.jsx)("path",{d:"M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464"}),(0,l.jsx)("path",{d:"M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463"})]})}function $(t){return(0,l.jsxs)(b,{...t,children:[(0,l.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),(0,l.jsx)("path",{d:"M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"}),(0,l.jsx)("path",{d:"M11 13l9 -9"}),(0,l.jsx)("path",{d:"M15 4h5v5"})]})}function O(t){return(0,l.jsxs)(b,{...t,children:[(0,l.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),(0,l.jsx)("path",{d:"M9 14l-4 -4l4 -4"}),(0,l.jsx)("path",{d:"M5 10h11a4 4 0 1 1 0 8h-1"})]})}function X(t){return(0,l.jsxs)(b,{...t,children:[(0,l.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),(0,l.jsx)("path",{d:"M15 14l4 -4l-4 -4"}),(0,l.jsx)("path",{d:"M19 10h-11a4 4 0 1 0 0 8h1"})]})}function K(t){return(0,l.jsxs)(b,{...t,children:[(0,l.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),(0,l.jsx)("path",{d:"M3.5 5.5l1.5 1.5l2.5 -2.5"}),(0,l.jsx)("path",{d:"M3.5 11.5l1.5 1.5l2.5 -2.5"}),(0,l.jsx)("path",{d:"M3.5 17.5l1.5 1.5l2.5 -2.5"}),(0,l.jsx)("path",{d:"M11 6l9 0"}),(0,l.jsx)("path",{d:"M11 12l9 0"}),(0,l.jsx)("path",{d:"M11 18l9 0"})]})}function V(t){return(0,l.jsxs)(b,{...t,children:[(0,l.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),(0,l.jsx)("path",{d:"M20 6l-11 0"}),(0,l.jsx)("path",{d:"M20 12l-7 0"}),(0,l.jsx)("path",{d:"M20 18l-11 0"}),(0,l.jsx)("path",{d:"M4 8l4 4l-4 4"})]})}function W(t){return(0,l.jsxs)(b,{...t,children:[(0,l.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),(0,l.jsx)("path",{d:"M20 6l-7 0"}),(0,l.jsx)("path",{d:"M20 12l-9 0"}),(0,l.jsx)("path",{d:"M20 18l-7 0"}),(0,l.jsx)("path",{d:"M8 8l-4 4l4 4"})]})}u.classes=p.Z,u.displayName="@mantine/tiptap/RichTextEditorContent";var Q=n(63409),tt=n(58898);let te={interactive:!0},tn=(0,a.d)((t,e)=>{let{classNames:n,className:o,style:a,styles:r,vars:s,interactive:h,active:c,onMouseDown:x,disabled:p,...j}=(0,i.w)("RichTextEditorControl",te,t),u=(0,d.Y)();return(0,l.jsx)(Q.k,{...j,...u.getStyles("control",{className:o,style:a,classNames:n,styles:r}),disabled:p,"data-rich-text-editor-control":!0,tabIndex:h?0:-1,"data-interactive":h||void 0,"data-disabled":p||void 0,"data-active":c||void 0,"aria-pressed":c&&h||void 0,"aria-hidden":!h||void 0,ref:e,unstyled:u.unstyled,onMouseDown:t=>{t.preventDefault(),x?.(t)}})});tn.classes=p.Z,tn.displayName="@mantine/tiptap/RichTextEditorControl";let tl=(0,o.forwardRef)(({className:t,icon:e,...n},o)=>(0,l.jsx)(tn,{ref:o,...n,children:(0,l.jsx)(e,{style:{width:(0,tt.h)(16),height:(0,tt.h)(16)}})}));function to({label:t,isActive:e,operation:n,icon:a,isDisabled:i}){return(0,o.forwardRef)((o,r)=>{let{editor:s,labels:h}=(0,d.Y)(),c=h[t];return(0,l.jsx)(tl,{...o,"aria-label":c,title:c,active:!!e?.name&&s?.isActive(e.name,e.attributes),ref:r,onClick:()=>s?.chain().focus()[n.name](n.attributes).run(),icon:o.icon||a,disabled:i?.(s)||!1})})}tl.displayName="@mantine/tiptap/RichTextEditorControlBase";let ta=to({label:"boldControlLabel",icon:t=>(0,l.jsx)(k,{...t}),isActive:{name:"bold"},operation:{name:"toggleBold"}}),ti=to({label:"italicControlLabel",icon:t=>(0,l.jsx)(M,{...t}),isActive:{name:"italic"},operation:{name:"toggleItalic"}}),tr=to({label:"underlineControlLabel",icon:t=>(0,l.jsx)(v,{...t}),isActive:{name:"underline"},operation:{name:"toggleUnderline"}}),ts=to({label:"strikeControlLabel",icon:t=>(0,l.jsx)(f,{...t}),isActive:{name:"strike"},operation:{name:"toggleStrike"}}),th=to({label:"clearFormattingControlLabel",icon:t=>(0,l.jsx)(g,{...t}),operation:{name:"unsetAllMarks"}}),td=to({label:"unlinkControlLabel",icon:t=>(0,l.jsx)(E,{...t}),operation:{name:"unsetLink"}}),tc=to({label:"bulletListControlLabel",icon:t=>(0,l.jsx)(w,{...t}),isActive:{name:"bulletList"},operation:{name:"toggleBulletList"}}),tx=to({label:"orderedListControlLabel",icon:t=>(0,l.jsx)(z,{...t}),isActive:{name:"orderedList"},operation:{name:"toggleOrderedList"}}),tp=to({label:"h1ControlLabel",icon:t=>(0,l.jsx)(m,{...t}),isActive:{name:"heading",attributes:{level:1}},operation:{name:"toggleHeading",attributes:{level:1}}}),tj=to({label:"h2ControlLabel",icon:t=>(0,l.jsx)(C,{...t}),isActive:{name:"heading",attributes:{level:2}},operation:{name:"toggleHeading",attributes:{level:2}}}),tu=to({label:"h3ControlLabel",icon:t=>(0,l.jsx)(L,{...t}),isActive:{name:"heading",attributes:{level:3}},operation:{name:"toggleHeading",attributes:{level:3}}}),tb=to({label:"h4ControlLabel",icon:t=>(0,l.jsx)(y,{...t}),isActive:{name:"heading",attributes:{level:4}},operation:{name:"toggleHeading",attributes:{level:4}}}),tk=to({label:"h5ControlLabel",icon:t=>(0,l.jsx)(H,{...t}),isActive:{name:"heading",attributes:{level:5}},operation:{name:"toggleHeading",attributes:{level:5}}}),tM=to({label:"h6ControlLabel",icon:t=>(0,l.jsx)(S,{...t}),isActive:{name:"heading",attributes:{level:6}},operation:{name:"toggleHeading",attributes:{level:6}}}),tv=to({label:"blockquoteControlLabel",icon:t=>(0,l.jsx)(A,{...t}),isActive:{name:"blockquote"},operation:{name:"toggleBlockquote"}}),tf=to({label:"alignLeftControlLabel",icon:t=>(0,l.jsx)(P,{...t}),operation:{name:"setTextAlign",attributes:"left"}}),tg=to({label:"alignRightControlLabel",icon:t=>(0,l.jsx)(T,{...t}),operation:{name:"setTextAlign",attributes:"right"}}),tm=to({label:"alignCenterControlLabel",icon:t=>(0,l.jsx)(R,{...t}),operation:{name:"setTextAlign",attributes:"center"}}),tC=to({label:"alignJustifyControlLabel",icon:t=>(0,l.jsx)(I,{...t}),operation:{name:"setTextAlign",attributes:"justify"}}),tL=to({label:"subscriptControlLabel",icon:t=>(0,l.jsx)(_,{...t}),isActive:{name:"subscript"},operation:{name:"toggleSubscript"}}),ty=to({label:"superscriptControlLabel",icon:t=>(0,l.jsx)(G,{...t}),isActive:{name:"superscript"},operation:{name:"toggleSuperscript"}}),tH=to({label:"codeControlLabel",icon:t=>(0,l.jsx)(N,{...t}),isActive:{name:"code"},operation:{name:"toggleCode"}}),tS=to({label:"codeBlockControlLabel",icon:t=>(0,l.jsx)(N,{...t}),isActive:{name:"codeBlock"},operation:{name:"toggleCodeBlock"}}),tw=to({label:"highlightControlLabel",icon:t=>(0,l.jsx)(B,{...t}),isActive:{name:"highlight"},operation:{name:"toggleHighlight"}}),tz=to({label:"hrControlLabel",icon:t=>(0,l.jsx)(D,{...t}),operation:{name:"setHorizontalRule"}}),tE=to({label:"unsetColorControlLabel",icon:t=>(0,l.jsx)(U,{...t}),operation:{name:"unsetColor"}}),tA=to({label:"undoControlLabel",icon:t=>(0,l.jsx)(O,{...t}),isDisabled:t=>!t?.can().undo(),operation:{name:"undo"}}),tP=to({label:"redoControlLabel",icon:t=>(0,l.jsx)(X,{...t}),isDisabled:t=>!t?.can().redo(),operation:{name:"redo"}}),tT=to({label:"tasksControlLabel",icon:t=>(0,l.jsx)(K,{...t}),isActive:{name:"taskList"},operation:{name:"toggleTaskList"}}),tR=to({label:"tasksSinkLabel",icon:t=>(0,l.jsx)(V,{...t}),operation:{name:"sinkListItem",attributes:"taskItem"},isDisabled:t=>!t?.can().sinkListItem("taskItem")}),tI=to({label:"tasksLiftLabel",icon:t=>(0,l.jsx)(W,{...t}),operation:{name:"liftListItem",attributes:"taskItem"},isDisabled:t=>!t?.can().liftListItem("taskItem")});var t_=n(51477),tG=n(50205),tN=n(74770),tB=n(893),tD=n(17115),tU=n(84821),tq=n(3900),tZ=n(65695);let tJ=t=>(0,l.jsx)(F,{...t}),tY={},tF=(0,a.d)((t,e)=>{let n=(0,i.w)("RichTextEditorLinkControl",tY,t),{classNames:a,className:r,style:s,styles:h,vars:c,icon:x,popoverProps:p,disableTooltips:j,initialExternal:u,...b}=n,k=(0,d.Y)(),M={classNames:a,styles:h},[v,f]=(0,tU.U)(""),[g,m]=(0,o.useState)(u),[C,{open:L,close:y}]=(0,tq.q)(!1),H=()=>{L();let t=k.editor?.getAttributes("link");f(t?.href||""),m(t?.href?t?.target==="_blank":u)},S=()=>{y(),f(""),m(u)},w=()=>{S(),""===v?k.editor?.chain().focus().extendMarkRange("link").unsetLink().run():k.editor?.chain().focus().extendMarkRange("link").setLink({href:v,target:g?"_blank":null}).run()};(0,tZ.s)("edit-link",H,!1);let{resolvedClassNames:z,resolvedStyles:E}=(0,t_.h)({classNames:a,styles:h,props:n});return(0,l.jsxs)(tG.J,{trapFocus:!0,shadow:"md",withinPortal:!0,opened:C,onClose:S,offset:-44,zIndex:1e4,...p,children:[(0,l.jsx)(tG.J.Target,{children:(0,l.jsx)(tl,{icon:x||tJ,...b,"aria-label":k.labels.linkControlLabel,title:k.labels.linkControlLabel,onClick:H,active:k.editor?.isActive("link"),ref:e,classNames:z,styles:E,className:r,style:s})}),(0,l.jsx)(tG.J.Dropdown,{...k.getStyles("linkEditorDropdown",M),children:(0,l.jsxs)("div",{...k.getStyles("linkEditor",M),children:[(0,l.jsx)(tN.o,{placeholder:k.labels.linkEditorInputPlaceholder,"aria-label":k.labels.linkEditorInputLabel,type:"url",value:v,onChange:f,classNames:{input:k.getStyles("linkEditorInput",M).className},onKeyDown:t=>{"Enter"===t.key&&(t.preventDefault(),w())},rightSection:(0,l.jsx)(tB.u,{label:g?k.labels.linkEditorExternalLink:k.labels.linkEditorInternalLink,events:{hover:!0,focus:!0,touch:!0},withinPortal:!0,withArrow:!0,disabled:j,zIndex:1e4,children:(0,l.jsx)(Q.k,{onClick:()=>m(t=>!t),"data-active":g||void 0,...k.getStyles("linkEditorExternalControl",M),children:(0,l.jsx)($,{style:{width:(0,tt.h)(14),height:(0,tt.h)(14)}})})})}),(0,l.jsx)(tD.z,{variant:"default",onClick:w,...k.getStyles("linkEditorSave",M),children:k.labels.linkEditorSave})]})})]})});tF.classes=p.Z,tF.displayName="@mantine/tiptap/RichTextEditorLinkControl";var t$=n(27009),tO=n(26802),tX=n(37574),tK=n(93010),tV=n(54813);let tW={},tQ=(0,o.forwardRef)((t,e)=>{let{popoverProps:n,colors:a,colorPickerProps:r,...s}=(0,i.w)("RichTextEditorColorPickerControl",tW,t),{editor:h,labels:c,getStyles:x}=(0,d.Y)(),[p,{toggle:j,close:u}]=(0,tq.q)(!1),[b,k]=(0,o.useState)("palette"),M=h?.getAttributes("textStyle").color||"var(--mantine-color-text)",v=(t,e=!0)=>{(h?.chain()).focus().setColor(t).run(),e&&u()},f=a.map((t,e)=>(0,l.jsx)(t$.b,{component:"button",color:t,onClick:()=>v(t),size:26,radius:"xs",style:{cursor:"pointer"},title:c.colorPickerColorLabel(t),"aria-label":c.colorPickerColorLabel(t)},e));return(0,l.jsxs)(tG.J,{opened:p,withinPortal:!0,trapFocus:!0,onClose:u,...n,children:[(0,l.jsx)(tG.J.Target,{children:(0,l.jsx)(tn,{...s,"aria-label":c.colorPickerControlLabel,title:c.colorPickerControlLabel,ref:e,onClick:j,children:(0,l.jsx)(t$.b,{color:M,size:14})})}),(0,l.jsxs)(tG.J.Dropdown,{...x("linkEditorDropdown"),children:["palette"===b&&(0,l.jsx)(tO.M,{cols:7,spacing:2,children:f}),"colorPicker"===b&&(0,l.jsx)(tX.z,{defaultValue:M,onChange:t=>v(t,!1),...r}),(0,l.jsx)(tB.u.Group,{closeDelay:200,children:(0,l.jsxs)(tK.Z,{justify:"flex-end",gap:"xs",mt:"sm",children:["palette"===b&&(0,l.jsx)(tV.A,{variant:"default",onClick:u,title:c.colorPickerCancel,"aria-label":c.colorPickerCancel,children:(0,l.jsx)(Z,{style:{width:(0,tt.h)(16),height:(0,tt.h)(16)}})}),(0,l.jsx)(tV.A,{variant:"default",onClick:()=>{(h?.chain()).focus().unsetColor().run(),u()},title:c.colorPickerClear,"aria-label":c.colorPickerClear,children:(0,l.jsx)(U,{style:{width:(0,tt.h)(16),height:(0,tt.h)(16)}})}),"palette"===b?(0,l.jsx)(tV.A,{variant:"default",onClick:()=>k("colorPicker"),title:c.colorPickerColorPicker,"aria-label":c.colorPickerColorPicker,children:(0,l.jsx)(q,{style:{width:(0,tt.h)(16),height:(0,tt.h)(16)}})}):(0,l.jsx)(tV.A,{variant:"default",onClick:()=>k("palette"),"aria-label":c.colorPickerPalette,title:c.colorPickerPalette,children:(0,l.jsx)(J,{style:{width:(0,tt.h)(16),height:(0,tt.h)(16)}})}),"colorPicker"===b&&(0,l.jsx)(tV.A,{variant:"default",onClick:u,title:c.colorPickerSave,"aria-label":c.colorPickerSave,children:(0,l.jsx)(Y,{style:{width:(0,tt.h)(16),height:(0,tt.h)(16)}})})]})})]})]})});tQ.displayName="@mantine/tiptap/ColorPickerControl";let t0={},t1=(0,o.forwardRef)((t,e)=>{let{color:n,...o}=(0,i.w)("RichTextEditorColorControl",t0,t),{editor:a,labels:r}=(0,d.Y)(),s=a?.getAttributes("textStyle").color||null,h=r.colorControlLabel(n);return(0,l.jsx)(tn,{...o,active:s===n,"aria-label":h,title:h,onClick:()=>(a?.chain()).focus().setColor(n).run(),ref:e,children:(0,l.jsx)(t$.b,{color:n,size:14})})}),t2={},t4=(0,a.d)((t,e)=>{let{classNames:n,className:o,style:a,styles:r,vars:h,...c}=(0,i.w)("RichTextEditorControlsGroup",t2,t),x=(0,d.Y)();return(0,l.jsx)(s.x,{ref:e,...x.getStyles("controlsGroup",{className:o,style:a,styles:r,classNames:n}),...c})});t4.classes=p.Z,t4.displayName="@mantine/tiptap/RichTextEditorControlsGroup";let t5={},t6=(0,a.d)((t,e)=>{let{classNames:n,className:o,style:a,styles:r,vars:h,sticky:c,stickyOffset:x,mod:p,...j}=(0,i.w)("RichTextEditorToolbar",t5,t),u=(0,d.Y)();return(0,l.jsx)(s.x,{ref:e,mod:[{sticky:c},p],...u.getStyles("toolbar",{className:o,style:a,styles:r,classNames:n}),...j,__vars:{"--rte-sticky-offset":(0,tt.h)(x)}})});t6.classes=p.Z,t6.displayName="@mantine/tiptap/RichTextEditorToolbar";let t8={withCodeHighlightStyles:!0,withTypographyStyles:!0},t7=(0,a.d)((t,e)=>{let n=(0,i.w)("RichTextEditor",t8,t),{classNames:a,className:c,style:x,styles:j,unstyled:u,vars:b,editor:k,withCodeHighlightStyles:M,withTypographyStyles:v,labels:f,children:g,...m}=n,C=(0,r.y)({name:"RichTextEditor",classes:p.Z,props:n,className:c,style:x,classNames:a,styles:j,unstyled:u,vars:b}),L=(0,o.useMemo)(()=>({...h,...f}),[f]);return(0,l.jsx)(d.r,{value:{editor:k,getStyles:C,labels:L,withCodeHighlightStyles:M,withTypographyStyles:v,unstyled:u},children:(0,l.jsx)(s.x,{...C("root"),...m,ref:e,children:g})})});t7.classes=p.Z,t7.displayName="@mantine/tiptap/RichTextEditor",t7.Content=u,t7.Control=tn,t7.Toolbar=t6,t7.ControlsGroup=t4,t7.Bold=ta,t7.Italic=ti,t7.Strikethrough=ts,t7.Underline=tr,t7.ClearFormatting=th,t7.H1=tp,t7.H2=tj,t7.H3=tu,t7.H4=tb,t7.H5=tk,t7.H6=tM,t7.BulletList=tc,t7.OrderedList=tx,t7.Link=tF,t7.Unlink=td,t7.Blockquote=tv,t7.AlignLeft=tf,t7.AlignRight=tg,t7.AlignCenter=tm,t7.AlignJustify=tC,t7.Superscript=ty,t7.Subscript=tL,t7.Code=tH,t7.CodeBlock=tS,t7.ColorPicker=tQ,t7.Color=t1,t7.Highlight=tw,t7.Hr=tz,t7.UnsetColor=tE,t7.Undo=tA,t7.Redo=tP,t7.TaskList=tT,t7.TaskListSink=tR,t7.TaskListLift=tI},14852:function(t,e,n){n.d(e,{Z:function(){return l}});var l={root:"m_dd3f7539",typographyStylesProvider:"m_d37966d9",content:"m_c2204cc2",linkEditorDropdown:"m_8a991b4f",control:"m_c2207da6",controlsGroup:"m_2ab47ef2",linkEditor:"m_b67b711e",linkEditorInput:"m_296cf94c",linkEditorExternalControl:"m_cfef614",linkEditorSave:"m_3b28e7bb",toolbar:"m_4574a3c4",taskList:"m_8b44009a"}}}]);