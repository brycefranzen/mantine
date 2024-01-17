(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[44076],{91911:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/x/nprogress",function(){return r(54978)}])},54978:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return G}});var n=r(24246),o=r(71670),s=r(27378),a=r(22971),i=r(8671),l=r(13041),c=r(15666),u=r(30454),m=r(28086),p=r(33993);function d(e){let t=.5;return e>=0&&e<=20?t=10:e>=20&&e<=50?t=4:e>=50&&e<=80?t=2:e>=80&&e<=99?t=1:e>=99&&e<=100&&(t=0),e+t}let g=()=>(0,p.M)({mounted:!1,progress:0,interval:0,step:1,stepInterval:100,timeouts:[]}),v=e=>(0,p.o)(e);function f(e,t){let r=t.getState();t.setState({...r,...e(t.getState())})}function h(e){f(e=>(window.clearInterval(e.interval),e.timeouts.forEach(e=>window.clearTimeout(e)),{timeouts:[]}),e)}function w(e){f(e=>(window.clearInterval(e.interval),{interval:-1}),e)}function E(e){h(e),w(e),f(()=>({progress:0,mounted:!1}),e)}let[x,P]=function(){let e=g();return[e,{start:()=>{f(e=>({progress:d(e.progress),mounted:!0}),e),f(t=>{window.clearInterval(t.interval);let r=window.setInterval(()=>{f(e=>({progress:d(e.progress),mounted:!0}),e)},t.stepInterval);return{interval:r,mounted:!0}},e)},stop:()=>w(e),reset:()=>E(e),set:t=>{f(()=>({progress:(0,m.u)(t,0,100),mounted:!0}),e)},increment:()=>{var t;f(e=>{let r=Math.min(e.progress+e.step,100),n=100!==r&&0!==r;if(!n){let o=window.setTimeout(()=>E(t),e.stepInterval+50);return{progress:r,mounted:n,timeouts:[...e.timeouts,o]}}return{progress:r,mounted:n}},t=e)},decrement:()=>{f(e=>({progress:Math.max(e.progress-e.step,0)}),e)},complete:()=>{h(e),f(t=>{let r=window.setTimeout(()=>{f(()=>({mounted:!1}),e)},50),n=window.setTimeout(()=>{f(()=>({progress:0}),e)},t.stepInterval+50);return{progress:100,timeouts:[r,n]}},e)},cleanup:()=>h(e)}]}(),{start:N,stop:k,reset:j,set:y,increment:C,decrement:b,complete:S,cleanup:_}=P;var B={root:"m-8f2832ae",section:"m-7a0fe999"};function I({initialProgress:e=0,color:t,size:r=3,stepInterval:n=500,withinPortal:o=!0,portalProps:a,zIndex:i=(0,l.w)("max"),store:m=x,...p}){m.initialize({mounted:!1,progress:e,interval:-1,step:1,stepInterval:n,timeouts:[]});let d=v(m);return(0,s.useEffect)(()=>()=>E(m),[m]),s.createElement(c.q,{...a,withinPortal:o},s.createElement(u.E,{radius:0,value:d.progress,size:r,color:t,classNames:B,"data-mounted":d.mounted||void 0,__vars:{"--nprogress-z-index":i?.toString()},...p}))}I.displayName="@mantine/nprogress/NavigationProgress";let z=`
import { Button, Group } from '@mantine/core';
import { nprogress, NavigationProgress } from '@mantine/nprogress';

function Demo() {
  return (
    <>
      <NavigationProgress />
      <Group justify="center">
        <Button onClick={() => nprogress.start()}>Start</Button>
        <Button onClick={() => nprogress.stop()}>Stop</Button>
        <Button onClick={() => nprogress.increment()}>Increment</Button>
        <Button onClick={() => nprogress.decrement()}>Decrement</Button>
        <Button onClick={() => nprogress.set(50)}>Set 50%</Button>
        <Button onClick={() => nprogress.reset()}>Reset</Button>
        <Button onClick={() => nprogress.complete()}>Complete</Button>
      </Group>
    </>
  );
}
`,R={type:"code",component:function(){return s.createElement(s.Fragment,null,s.createElement(I,null),s.createElement(a.Z,{justify:"center"},s.createElement(i.z,{onClick:()=>P.start(),variant:"default"},"Start"),s.createElement(i.z,{onClick:()=>P.stop(),variant:"default"},"Stop"),s.createElement(i.z,{onClick:()=>P.increment(),variant:"default"},"Increment"),s.createElement(i.z,{onClick:()=>P.decrement(),variant:"default"},"Decrement"),s.createElement(i.z,{onClick:()=>P.set(50),variant:"default"},"Set 50%"),s.createElement(i.z,{onClick:()=>P.reset(),variant:"default"},"Reset"),s.createElement(i.z,{onClick:()=>P.complete(),variant:"default"},"Complete")))},code:z};var M=r(3916),T=r(54568);let D=(0,M.A)(T.us.Nprogress);function A(e){let t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components},{Demo:r,InstallScript:s}=t;return r||L("Demo",!0),s||L("InstallScript",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,n.jsx)(s,{packages:"@mantine/nprogress"}),"\n",(0,n.jsx)(t.p,{children:"After installation import package styles at the root of your application:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import '@mantine/nprogress/styles.css';\n"})}),"\n",(0,n.jsx)(t.h2,{id:"setup-navigationprogress",children:"Setup NavigationProgress"}),"\n",(0,n.jsxs)(t.p,{children:["Render ",(0,n.jsx)(t.code,{children:"NavigationProgress"})," anywhere in your app within ",(0,n.jsx)(t.a,{href:"/theming/mantine-provider/",children:"MantineProvider"}),":"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import { MantineProvider } from '@mantine/core';\nimport { NavigationProgress } from '@mantine/nprogress';\n\nfunction Demo() {\n  return (\n    <MantineProvider>\n      <NavigationProgress />\n      <App />\n    </MantineProvider>\n  );\n}\n"})}),"\n",(0,n.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(r,{data:R})]})}function G(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(D,{...e,children:(0,n.jsx)(A,{...e})})}function L(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},30454:function(e,t,r){"use strict";r.d(t,{E:function(){return C}});var n=r(27378),o=r(5564),s=r(96739),a=r(20410),i=r(56589),l=r(71656);let[c,u]=(0,l.R)("Progress.Root component was not found in tree");var m={root:"m-db6d6462",section:"m-2242eb65","stripes-animation":"m-81a374bd",label:"m-91e40b74"};let p={},d=(0,a.d)((e,t)=>{let{classNames:r,className:o,style:a,styles:l,vars:c,...m}=(0,s.w)("ProgressLabel",p,e),d=u();return n.createElement(i.x,{ref:t,...d.getStyles("label",{className:o,style:a,classNames:r,styles:l}),...m})});d.classes=m,d.displayName="@mantine/core/ProgressLabel";var g=r(92082),v=r(83453),f=r(6231);let h={},w=(0,v.Z)((e,{size:t,radius:r})=>({root:{"--progress-size":(0,g.ap)(t,"progress-size"),"--progress-radius":void 0===r?void 0:(0,g.H5)(r)}})),E=(0,a.d)((e,t)=>{let r=(0,s.w)("ProgressRoot",h,e),{classNames:o,className:a,style:l,styles:u,unstyled:p,vars:d,autoContrast:g,...v}=r,E=(0,f.y)({name:"Progress",classes:m,props:r,className:a,style:l,classNames:o,styles:u,unstyled:p,vars:d,varsResolver:w});return n.createElement(c,{value:{getStyles:E,autoContrast:g}},n.createElement(i.x,{ref:t,...E("root"),...v}))});E.classes=m,E.displayName="@mantine/core/ProgressRoot";var x=r(89738),P=r(34121),N=r(2256);let k={withAria:!0},j=(0,a.d)((e,t)=>{let{classNames:r,className:o,style:a,styles:l,vars:c,value:m,withAria:p,color:d,striped:g,animated:v,...f}=(0,s.w)("ProgressSection",k,e),h=u(),w=(0,N.rZ)(),E=p?{role:"progressbar","aria-valuemax":100,"aria-valuemin":0,"aria-valuenow":m,"aria-valuetext":`${m}%`}:{};return n.createElement(i.x,{ref:t,...h.getStyles("section",{className:o,classNames:r,styles:l,style:a}),...f,...E,mod:{striped:g||v,animated:v},__vars:{"--progress-section-width":`${m}%`,"--progress-section-color":(0,x.p)(d,w),"--progress-label-color":h.autoContrast?(0,P.R)({color:d,theme:w}):void 0}})});j.classes=m,j.displayName="@mantine/core/ProgressSection";let y={},C=(0,a.d)((e,t)=>{let r=(0,s.w)("Progress",y,e),{value:a,classNames:i,styles:l,vars:c,color:u,striped:m,animated:p,"aria-label":d,...g}=r,{resolvedClassNames:v,resolvedStyles:f}=(0,o.h)({classNames:i,styles:l,props:r});return n.createElement(E,{ref:t,classNames:v,styles:f,vars:c,...g},n.createElement(j,{value:a,color:u,striped:m,animated:p,"aria-label":d}))});C.classes=m,C.displayName="@mantine/core/Progress",C.Section=j,C.Root=E,C.Label=d}},function(e){e.O(0,[30370,15819,2775,49774,92888,40179],function(){return e(e.s=91911)}),_N_E=e.O()}]);