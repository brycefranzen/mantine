(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[52450],{43310:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=(0,n(54764).Z)("circle-check","IconCircleCheck",[["path",{d:"M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0",key:"svg-0"}],["path",{d:"M9 12l2 2l4 -4",key:"svg-1"}]])},88265:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/stepper",function(){return n(61466)}])},61466:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return ee}});var r=n(24246),p=n(71670),c=n(27378),o=n(35292),a=n(22971),l=n(8671),i=n(56589);function s(e){return c.createElement(i.x,{style:{height:60,display:"flex",alignItems:"center",justifyContent:"center",fontWeight:500,fontSize:"var(--mantine-font-size-lg)"},...e})}let d=`
import { useState } from 'react';
import { Stepper, Button, Group } from '@mantine/core';

function Demo() {
  const [active, setActive] = useState(1);
  const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

  return (
    <>
      <Stepper active={active} onStepClick={setActive}>
        <Stepper.Step label="First step" description="Create an account">
          Step 1 content: Create an account
        </Stepper.Step>
        <Stepper.Step label="Second step" description="Verify email">
          Step 2 content: Verify email
        </Stepper.Step>
        <Stepper.Step label="Final step" description="Get full access">
          Step 3 content: Get full access
        </Stepper.Step>
        <Stepper.Completed>
          Completed, click back button to get to previous step
        </Stepper.Completed>
      </Stepper>

      <Group justify="center" mt="xl">
        <Button variant="default" onClick={prevStep}>Back</Button>
        <Button onClick={nextStep}>Next step</Button>
      </Group>
    </>
  );
}
`,S={type:"code",component:function(){let[e,t]=(0,c.useState)(1);return c.createElement(c.Fragment,null,c.createElement(o.v,{active:e,onStepClick:t},c.createElement(o.v.Step,{label:"First step",description:"Create an account"},c.createElement(s,null,"Step 1 content: Create an account")),c.createElement(o.v.Step,{label:"Second step",description:"Verify email"},c.createElement(s,null,"Step 2 content: Verify email")),c.createElement(o.v.Step,{label:"Final step",description:"Get full access"},c.createElement(s,null,"Step 3 content: Get full access")),c.createElement(o.v.Completed,null,c.createElement(s,null,"Completed, click back button to get to previous step"))),c.createElement(a.Z,{justify:"center",mt:"xl"},c.createElement(l.z,{variant:"default",onClick:()=>t(e=>e>0?e-1:e)},"Back"),c.createElement(l.z,{onClick:()=>t(e=>e<3?e+1:e)},"Next step")))},code:d},m=`
import { useState } from 'react';
import { Stepper, Button, Group } from '@mantine/core';

function Demo() {
  const [active, setActive] = useState(1);
  const [highestStepVisited, setHighestStepVisited] = useState(active);

  const handleStepChange = (nextStep: number) => {
    const isOutOfBounds = nextStep > 3 || nextStep < 0;

    if (isOutOfBounds) {
      return;
    }

    setActive(nextStep);
    setHighestStepVisited((hSC) => Math.max(hSC, nextStep));
  };

  // Allow the user to freely go back and forth between visited steps.
  const shouldAllowSelectStep = (step: number) => highestStepVisited >= step && active !== step;

  return (
    <>
      <Stepper active={active} onStepClick={setActive}>
        <Stepper.Step
          label="First step"
          description="Create an account"
          allowStepSelect={shouldAllowSelectStep(0)}
        >
          Step 1 content: Create an account
        </Stepper.Step>
        <Stepper.Step
          label="Second step"
          description="Verify email"
          allowStepSelect={shouldAllowSelectStep(1)}
        >
          Step 2 content: Verify email
        </Stepper.Step>
        <Stepper.Step
          label="Final step"
          description="Get full access"
          allowStepSelect={shouldAllowSelectStep(2)}
        >
          Step 3 content: Get full access
        </Stepper.Step>

        <Stepper.Completed>
          Completed, click back button to get to previous step
        </Stepper.Completed>
      </Stepper>

      <Group justify="center" mt="xl">
        <Button variant="default" onClick={() => handleStepChange(active - 1)}>
          Back
        </Button>
        <Button onClick={() => handleStepChange(active + 1)}>Next step</Button>
      </Group>
    </>
  );
}
`,u={type:"code",component:function(){let[e,t]=(0,c.useState)(1),[n,r]=(0,c.useState)(e),p=e=>{let n=e>3||e<0;n||(t(e),r(t=>Math.max(t,e)))};return c.createElement(c.Fragment,null,c.createElement(o.v,{active:e,onStepClick:t},c.createElement(o.v.Step,{label:"First step",description:"Create an account",allowStepSelect:n>=0&&0!==e},c.createElement(s,null,"Step 1 content: Create an account")),c.createElement(o.v.Step,{label:"Second step",description:"Verify email",allowStepSelect:n>=1&&1!==e},c.createElement(s,null,"Step 2 content: Verify email")),c.createElement(o.v.Step,{label:"Final step",description:"Get full access",allowStepSelect:n>=2&&2!==e},c.createElement(s,null,"Step 3 content: Get full access")),c.createElement(o.v.Completed,null,c.createElement(s,null,"Completed, click back button to get to previous step"))),c.createElement(a.Z,{justify:"center",mt:"xl"},c.createElement(l.z,{variant:"default",onClick:()=>p(e-1)},"Back"),c.createElement(l.z,{onClick:()=>p(e+1)},"Next step")))},code:m},h=`
import { useState } from 'react';
import { Stepper, Button, Group } from '@mantine/core';

function Demo() {
  const [active, setActive] = useState(1);
  const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

  return (
    <>
      <Stepper active={active} onStepClick={setActive} allowNextStepsSelect={false}>
        <Stepper.Step label="First step" description="Create an account">
          Step 1 content: Create an account
        </Stepper.Step>
        <Stepper.Step label="Second step" description="Verify email">
          Step 2 content: Verify email
        </Stepper.Step>
        <Stepper.Step label="Final step" description="Get full access">
          Step 3 content: Get full access
        </Stepper.Step>
        <Stepper.Completed>
          Completed, click back button to get to previous step
        </Stepper.Completed>
      </Stepper>

      <Group justify="center" mt="xl">
        <Button variant="default" onClick={prevStep}>Back</Button>
        <Button onClick={nextStep}>Next step</Button>
      </Group>
    </>
  );
}
`,v={type:"code",component:function(){let[e,t]=(0,c.useState)(1);return c.createElement(c.Fragment,null,c.createElement(o.v,{active:e,onStepClick:t,allowNextStepsSelect:!1},c.createElement(o.v.Step,{label:"First step",description:"Create an account"},c.createElement(s,null,"Step 1 content: Create an account")),c.createElement(o.v.Step,{label:"Second step",description:"Verify email"},c.createElement(s,null,"Step 2 content: Verify email")),c.createElement(o.v.Step,{label:"Final step",description:"Get full access"},c.createElement(s,null,"Step 3 content: Get full access")),c.createElement(o.v.Completed,null,c.createElement(s,null,"Completed, click back button to get to previous step"))),c.createElement(a.Z,{justify:"center",mt:"xl"},c.createElement(l.z,{variant:"default",onClick:()=>t(e=>e>0?e-1:e)},"Back"),c.createElement(l.z,{onClick:()=>t(e=>e<3?e+1:e)},"Next step")))},code:h},f=`
import { Stepper } from '@mantine/core';

function Demo() {
  return (
    <Stepper{{props}} active={1}>
      <Stepper.Step label="Step 1" description="Create an account" />
      <Stepper.Step label="Step 2" description="Verify email" />
    </Stepper>
  );
}
`,b={type:"configurator",component:function(e){return c.createElement(o.v,{...e,active:1},c.createElement(o.v.Step,{label:"Step 1",description:"Create an account"}),c.createElement(o.v.Step,{label:"Step 2",description:"Verify email"}))},code:f,centered:!0,maxWidth:"100%",controls:[{prop:"color",type:"color",initialValue:"blue",libraryValue:"blue"},{prop:"radius",type:"size",initialValue:"xl",libraryValue:"xl"},{prop:"size",type:"size",initialValue:"md",libraryValue:"md"}]},y=`
import { Stepper } from '@mantine/core';

function Demo() {
  return (
    <Stepper{{props}} active={1}>
      <Stepper.Step label="Step 1" description="Create an account" />
      <Stepper.Step label="Step 2" description="Verify email" />
    </Stepper>
  );
}
`,g={type:"configurator",component:function(e){return c.createElement(o.v,{...e,active:1},c.createElement(o.v.Step,{label:"Step 1",description:"Create an account"}),c.createElement(o.v.Step,{label:"Step 2",description:"Verify email"}))},code:y,controls:[{prop:"iconSize",type:"number",initialValue:42,libraryValue:"__",min:32,max:62,step:5}]};var C=n(43310),x=n(54764),k=(0,x.Z)("user-check","IconUserCheck",[["path",{d:"M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0",key:"svg-0"}],["path",{d:"M6 21v-2a4 4 0 0 1 4 -4h4",key:"svg-1"}],["path",{d:"M15 19l2 2l4 -4",key:"svg-2"}]]),E=(0,x.Z)("mail-opened","IconMailOpened",[["path",{d:"M3 9l9 6l9 -6l-9 -6l-9 6",key:"svg-0"}],["path",{d:"M21 9v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10",key:"svg-1"}],["path",{d:"M3 19l6 -6",key:"svg-2"}],["path",{d:"M15 13l6 6",key:"svg-3"}]]),j=(0,x.Z)("shield-check","IconShieldCheck",[["path",{d:"M11.46 20.846a12 12 0 0 1 -7.96 -14.846a12 12 0 0 0 8.5 -3a12 12 0 0 0 8.5 3a12 12 0 0 1 -.09 7.06",key:"svg-0"}],["path",{d:"M15 19l2 2l4 -4",key:"svg-1"}]]),w=n(71078);let I=`
import { useState } from 'react';
import {
  IconUserCheck,
  IconMailOpened,
  IconShieldCheck,
  IconCircleCheck,
} from '@tabler/icons-react';
import { Stepper, rem } from '@mantine/core';

function Demo() {
  const [active, setActive] = useState(1);

  return (
    <Stepper
      active={active}
      onStepClick={setActive}
      completedIcon={<IconCircleCheck style={{ width: rem(18), height: rem(18) }} />}
    >
      <Stepper.Step
        icon={<IconUserCheck style={{ width: rem(18), height: rem(18) }} />}
        label="Step 1"
        description="Create an account"
      />
      <Stepper.Step
        icon={<IconMailOpened style={{ width: rem(18), height: rem(18) }} />}
        label="Step 2"
        description="Verify email"
      />
      <Stepper.Step
        icon={<IconShieldCheck style={{ width: rem(18), height: rem(18) }} />}
        label="Step 3"
        description="Get full access"
      />
    </Stepper>
  );
}
`,V={type:"code",component:function(){let[e,t]=(0,c.useState)(1);return c.createElement(o.v,{active:e,onStepClick:t,completedIcon:c.createElement(C.Z,{style:{width:(0,w.h)(18),height:(0,w.h)(18)}})},c.createElement(o.v.Step,{icon:c.createElement(k,{style:{width:(0,w.h)(18),height:(0,w.h)(18)}}),label:"Step 1",description:"Create an account"}),c.createElement(o.v.Step,{icon:c.createElement(E,{style:{width:(0,w.h)(18),height:(0,w.h)(18)}}),label:"Step 2",description:"Verify email"}),c.createElement(o.v.Step,{icon:c.createElement(j,{style:{width:(0,w.h)(18),height:(0,w.h)(18)}}),label:"Step 3",description:"Get full access"}))},code:I},G=`
import { useState } from 'react';
import { Stepper, rem } from '@mantine/core';
import { IconUserCheck, IconMailOpened, IconShieldCheck } from '@tabler/icons-react';

function Demo() {
  const [active, setActive] = useState(0);

  return (
    <Stepper active={active} onStepClick={setActive}>
      <Stepper.Step icon={<IconUserCheck style={{ width: rem(18), height: rem(18) }} />} />
      <Stepper.Step icon={<IconMailOpened style={{ width: rem(18), height: rem(18) }} />} />
      <Stepper.Step icon={<IconShieldCheck style={{ width: rem(18), height: rem(18) }} />} />
    </Stepper>
  );
}
`,A={type:"code",component:function(){let[e,t]=(0,c.useState)(0);return c.createElement(o.v,{active:e,onStepClick:t},c.createElement(o.v.Step,{icon:c.createElement(k,{style:{width:(0,w.h)(18),height:(0,w.h)(18)}})}),c.createElement(o.v.Step,{icon:c.createElement(E,{style:{width:(0,w.h)(18),height:(0,w.h)(18)}})}),c.createElement(o.v.Step,{icon:c.createElement(j,{style:{width:(0,w.h)(18),height:(0,w.h)(18)}})}))},code:G};var z=(0,x.Z)("circle-x","IconCircleX",[["path",{d:"M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0",key:"svg-0"}],["path",{d:"M10 10l4 4m0 -4l-4 4",key:"svg-1"}]]);let B=`
import { Stepper, rem } from '@mantine/core';
import { IconCircleX } from '@tabler/icons-react';

function Demo() {
  return (
    <Stepper active={2}>
      <Stepper.Step label="Step 1" description="Create an account" />
      <Stepper.Step
        label="Step 2"
        description="Verify email"
        color="red"
        completedIcon={<IconCircleX style={{ width: rem(20), height: rem(20) }} />}
      />
      <Stepper.Step label="Step 3" description="Get full access" />
    </Stepper>
  );
}
`,N={type:"code",component:function(){return c.createElement(o.v,{active:2},c.createElement(o.v.Step,{label:"Step 1",description:"Create an account"}),c.createElement(o.v.Step,{label:"Step 2",description:"Verify email",color:"red",completedIcon:c.createElement(z,{style:{width:(0,w.h)(20),height:(0,w.h)(20)}})}),c.createElement(o.v.Step,{label:"Step 3",description:"Get full access"}))},code:B},D=`
import { useState } from 'react';
import { Stepper } from '@mantine/core';

function Demo() {
  const [active, setActive] = useState(1);

  return (
    <Stepper active={active} onStepClick={setActive} orientation="vertical">
      <Stepper.Step label="Step 1" description="Create an account" />
      <Stepper.Step label="Step 2" description="Verify email" />
      <Stepper.Step label="Step 3" description="Get full access" />
    </Stepper>
  );
}
`,M={type:"code",component:function(){let[e,t]=(0,c.useState)(1);return c.createElement(o.v,{active:e,onStepClick:t,orientation:"vertical"},c.createElement(o.v.Step,{label:"Step 1",description:"Create an account"}),c.createElement(o.v.Step,{label:"Step 2",description:"Verify email"}),c.createElement(o.v.Step,{label:"Step 3",description:"Get full access"}))},code:D},F=`
import { useState } from 'react';
import { Stepper } from '@mantine/core';

function Demo() {
  const [active, setActive] = useState(1);

  return (
    <Stepper active={active} onStepClick={setActive} iconPosition="right">
      <Stepper.Step label="Step 1" description="Create an account" />
      <Stepper.Step label="Step 2" description="Verify email" />
      <Stepper.Step label="Step 3" description="Get full access" />
    </Stepper>
  );
}
`,W={type:"code",component:function(){let[e,t]=(0,c.useState)(1);return c.createElement(o.v,{active:e,onStepClick:t,iconPosition:"right"},c.createElement(o.v.Step,{label:"Step 1",description:"Create an account"}),c.createElement(o.v.Step,{label:"Step 2",description:"Verify email"}),c.createElement(o.v.Step,{label:"Step 3",description:"Get full access"}))},code:F},P=`
import { Stepper } from '@mantine/core';

function Demo() {
  return (
    <Stepper active={1}>
      <Stepper.Step label="Step 1" description="Create an account" />
      <Stepper.Step label="Step 2" description="Verify email" loading />
      <Stepper.Step label="Step 3" description="Get full access" />
    </Stepper>
  );
}
`,_={type:"code",component:function(){return c.createElement(o.v,{active:1},c.createElement(o.v.Step,{label:"Step 1",description:"Create an account"}),c.createElement(o.v.Step,{label:"Step 2",description:"Verify email",loading:!0}),c.createElement(o.v.Step,{label:"Step 3",description:"Get full access"}))},code:P};var T=n(49717);let Z=`
import { Stepper } from '@mantine/core';

function Demo() {
  const [active, setActive] = useState(1);
  const nextStep = () => setActive((current) => (current < 2 ? current + 1 : current));
  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

  return (
    <>
      <Stepper active={active} onStepClick={setActive}{{props}}>
        <Stepper.Step label="First step" description="Create an account" loading>
          <Content>Step 1 content: Create an account</Content>
        </Stepper.Step>
        <Stepper.Step label="Second step" description="Verify email">
          <Content>Step 2 content: Verify email</Content>
        </Stepper.Step>

        <Stepper.Completed>
          <Content>Completed, click back button to get to previous step</Content>
        </Stepper.Completed>
      </Stepper>

      <Group justify="center" mt="xl">
        <Button variant="default" onClick={prevStep}>
          Back
        </Button>
        <Button onClick={nextStep}>Next step</Button>
      </Group>
    </>
  );
}
`,O={type:"styles-api",centered:!0,maxWidth:"100%",data:T.U,component:function(e){let[t,n]=(0,c.useState)(1);return c.createElement(c.Fragment,null,c.createElement(o.v,{active:t,onStepClick:n,...e},c.createElement(o.v.Step,{label:"First step",description:"Create an account",loading:!0},c.createElement(s,null,"Step 1 content: Create an account")),c.createElement(o.v.Step,{label:"Second step",description:"Verify email"},c.createElement(s,null,"Step 2 content: Verify email")),c.createElement(o.v.Completed,null,c.createElement(s,null,"Completed, click back button to get to previous step"))),c.createElement(a.Z,{justify:"center",mt:"xl"},c.createElement(l.z,{variant:"default",onClick:()=>n(e=>e>0?e-1:e)},"Back"),c.createElement(l.z,{onClick:()=>n(e=>e<2?e+1:e)},"Next step")))},code:Z},L=`
import { useState } from 'react';
import { Stepper, StepperProps, rem } from '@mantine/core';

function StyledStepper(props: StepperProps) {
  return (
    <Stepper
      styles={{
        stepBody: {
          display: 'none',
        },

        step: {
          padding: 0,
        },

        stepIcon: {
          borderWidth: rem(4),
        },

        separator: {
          marginLeft: rem(-2),
          marginRight: rem(-2),
          height: rem(10),
        },
      }}
      {...props}
    />
  );
}

function Demo() {
  const [active, setActive] = useState(1);
  return (
    <StyledStepper active={active} onStepClick={setActive}>
      <Stepper.Step label="Step 1" description="Create an account" />
      <Stepper.Step label="Step 2" description="Verify email" />
      <Stepper.Step label="Step 3" description="Get full access" />
    </StyledStepper>
  );
}
`;function R(e){return c.createElement(o.v,{styles:{stepBody:{display:"none"},step:{padding:0},stepIcon:{borderWidth:(0,w.h)(3)},separator:{marginLeft:(0,w.h)(-2),marginRight:(0,w.h)(-2),height:(0,w.h)(6)}},...e})}let U={type:"code",component:function(){let[e,t]=(0,c.useState)(1);return c.createElement(R,{active:e,onStepClick:t},c.createElement(o.v.Step,{label:"Step 1",description:"Create an account"}),c.createElement(o.v.Step,{label:"Step 2",description:"Verify email"}),c.createElement(o.v.Step,{label:"Step 3",description:"Get full access"}))},code:L};var Y={separator:"m-24b8a321",stepIcon:"m-ced9b9a9",step:"m-f1461110"};let H=`.separator {
  height: rem(2px);
  border-top: rem(2px) solid light-dark(var(--mantine-color-gray-4), var(--mantine-color-dark-3));
  border-radius: var(--mantine-radius-xl);
  background-color: transparent;

  &[data-active] {
    border-width: 0;
    background-image: linear-gradient(
      45deg,
      var(--mantine-color-blue-6),
      var(--mantine-color-cyan-6)
    );
  }
}

.stepIcon {
  border-color: transparent;
  background-color: light-dark(var(--mantine-color-gray-0), var(--mantine-color-dark-4));
  border-width: 0;

  &[data-completed] {
    border-width: 0;
    background-color: transparent;
    background-image: linear-gradient(
      45deg,
      var(--mantine-color-blue-6),
      var(--mantine-color-cyan-6)
    );
  }
}

.step {
  transition: transform 150ms ease;

  &[data-progress] {
    transform: scale(1.05);
  }
}
`,X=`
import { useState } from 'react';
import { Stepper } from '@mantine/core';
import classes from './Demo.module.css';

function Demo() {
  const [active, setActive] = useState(1);

  return (
    <Stepper classNames={classes} active={active} onStepClick={setActive} breakpoint="sm">
      <Stepper.Step label="Step 1" description="Create an account" />
      <Stepper.Step label="Step 2" description="Verify email" />
      <Stepper.Step label="Step 3" description="Get full access" />
    </Stepper>
  );
}
`,$={type:"code",component:function(){let[e,t]=(0,c.useState)(1);return c.createElement(o.v,{classNames:Y,active:e,onStepClick:t},c.createElement(o.v.Step,{label:"Step 1",description:"Create an account"}),c.createElement(o.v.Step,{label:"Step 2",description:"Verify email"}),c.createElement(o.v.Step,{label:"Step 3",description:"Get full access"}))},code:[{fileName:"Demo.tsx",code:X,language:"tsx"},{fileName:"Demo.module.css",code:H,language:"scss"}]};var q=n(3916),J=n(54568);let K=(0,q.A)(J.us.Stepper);function Q(e){let t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,p.a)(),...e.components},{Demo:n,StylesApiSelectors:c}=t;return n||et("Demo",!0),c||et("StylesApiSelectors",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(n,{data:S}),"\n",(0,r.jsx)(t.h2,{id:"allow-step-select",children:"Allow step select"}),"\n",(0,r.jsxs)(t.p,{children:["To disable step selection, set ",(0,r.jsx)(t.code,{children:"allowStepSelect"})," prop on ",(0,r.jsx)(t.code,{children:"Stepper.Step"})," component.\nIt can be used to prevent the user from reaching next steps while letting them go back and forth between steps they've already reached before:"]}),"\n",(0,r.jsx)(n,{data:u}),"\n",(0,r.jsx)(t.h2,{id:"disable-next-steps-selection",children:"Disable next steps selection"}),"\n",(0,r.jsxs)(t.p,{children:["Another way to disable selection of upcoming steps is to use the ",(0,r.jsx)(t.code,{children:"allowNextStepsSelect"})," directly on the ",(0,r.jsx)(t.code,{children:"Stepper"})," component.\nThis is useful when you don't need to control the behavior specifically for each step."]}),"\n",(0,r.jsx)(n,{data:v}),"\n",(0,r.jsx)(t.h2,{id:"color-radius-and-size",children:"Color, radius and size"}),"\n",(0,r.jsx)(n,{data:b}),"\n",(0,r.jsxs)(t.p,{children:["Component size is controlled by two props: ",(0,r.jsx)(t.code,{children:"size"})," and ",(0,r.jsx)(t.code,{children:"iconSize"}),".\n",(0,r.jsx)(t.code,{children:"size"})," prop controls icon size, label and description font size.\n",(0,r.jsx)(t.code,{children:"iconSize"})," allows to overwrite icon size separately from other size values:"]}),"\n",(0,r.jsx)(n,{data:g}),"\n",(0,r.jsx)(t.h2,{id:"with-custom-icons",children:"With custom icons"}),"\n",(0,r.jsxs)(t.p,{children:["You can replace the step icon by setting ",(0,r.jsx)(t.code,{children:"icon"})," prop on ",(0,r.jsx)(t.code,{children:"Stepper.Step"})," component.\nTo change completed check icon set ",(0,r.jsx)(t.code,{children:"completedIcon"})," on ",(0,r.jsx)(t.code,{children:"Stepper"})," component.\nYou can use any React node as an icon: component, string, number:"]}),"\n",(0,r.jsx)(n,{data:V}),"\n",(0,r.jsxs)(t.p,{children:["You can use ",(0,r.jsx)(t.code,{children:"Stepper"})," with icons only. Note that in this case, you will have to\nset ",(0,r.jsx)(t.code,{children:"aria-label"})," or ",(0,r.jsx)(t.code,{children:"title"})," on ",(0,r.jsx)(t.code,{children:"Stepper.Step"})," component to make it accessible:"]}),"\n",(0,r.jsx)(n,{data:A}),"\n",(0,r.jsx)(t.p,{children:"You can also change the completed icon for each step, for example, to indicate error state:"}),"\n",(0,r.jsx)(n,{data:N}),"\n",(0,r.jsx)(t.h2,{id:"vertical-orientation",children:"Vertical orientation"}),"\n",(0,r.jsx)(n,{data:M}),"\n",(0,r.jsx)(t.h2,{id:"icon-position",children:"Icon position"}),"\n",(0,r.jsxs)(t.p,{children:["To change step icon and body arrangement, set ",(0,r.jsx)(t.code,{children:'iconPosition="right"'}),":"]}),"\n",(0,r.jsx)(n,{data:W}),"\n",(0,r.jsx)(t.h2,{id:"loading-state",children:"Loading state"}),"\n",(0,r.jsxs)(t.p,{children:["To indicate loading state set ",(0,r.jsx)(t.code,{children:"loading"})," prop on Step component, ",(0,r.jsx)(t.code,{children:"Loader"})," will replace step icon.\nYou can configure the default loader in the ",(0,r.jsx)(t.a,{href:"/theming/theme-object/",children:"theme"}),"."]}),"\n",(0,r.jsx)(n,{data:_}),"\n",(0,r.jsx)(c,{component:"Stepper"}),"\n",(0,r.jsx)(n,{data:O}),"\n",(0,r.jsx)(t.p,{children:"Examples of styles customization with Styles API:"}),"\n",(0,r.jsx)(n,{data:U}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n,{data:$}),"\n",(0,r.jsx)(t.h2,{id:"get-step-ref",children:"Get step ref"}),"\n",(0,r.jsx)(t.p,{children:"You can get refs of step button and stepper root element (div):"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { useRef } from 'react';\nimport { Stepper } from '@mantine/core';\n\nfunction MyStepper() {\n  const firstStep = useRef<HTMLButtonElement>(null);\n  const stepper = useRef<HTMLDivElement>(null);\n\n  return (\n    <Stepper ref={stepper} active={0}>\n      <Stepper.Step label=\"First step\" ref={firstStep} />\n      <Stepper.Step label=\"Second step\" />\n    </Stepper>\n  );\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"wrap-stepperstep",children:"Wrap Stepper.Step"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"Stepper"})," component relies on ",(0,r.jsx)(t.code,{children:"Stepper.Step"})," order. Wrapping ",(0,r.jsx)(t.code,{children:"Stepper.Step"})," is not supported,\nInstead you will need to use different approaches:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:'import { Stepper } from \'@mantine/core\';\n\n// This will not work, step children will not render\nfunction WillNotWork() {\n  return (\n    <Stepper.Step label="Nope" description="It will not work">\n      This part will not render\n    </Stepper.Step>\n  );\n}\n\n// Create a separate component for children\nfunction WillWork() {\n  return <div>This will work as expected!</div>;\n}\n\nfunction Demo() {\n  return (\n    <Stepper active={1}>\n      <Stepper.Step label="Regular step">First step</Stepper.Step>\n      {/* Wrapped Stepper.Step will not render children, do not do that */}\n      <WillNotWork />\n      <Stepper.Step label="Step with custom content">\n        <WillWork />\n      </Stepper.Step>\n      <Stepper.Step label="Regular step">Third step</Stepper.Step>\n    </Stepper>\n  );\n}\n'})}),"\n",(0,r.jsx)(t.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"<Stepper.Step />"})," components render button element, set ",(0,r.jsx)(t.code,{children:"aria-label"})," or ",(0,r.jsx)(t.code,{children:"title"})," props\nto make component visible for screen readers in case you do not specify ",(0,r.jsx)(t.code,{children:"label"})," or ",(0,r.jsx)(t.code,{children:"description"}),":"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:'<Stepper.Step /> // -> not ok, empty labels for screen reader\n<Stepper.Step label="Step 1" description="Create an account" /> // -> ok\n<Stepper.Step aria-label="Create an account" /> // -> ok\n<Stepper.Step title="Create an account" /> // -> ok\n'})})]})}function ee(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(K,{...e,children:(0,r.jsx)(Q,{...e})})}function et(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},35292:function(e,t,n){"use strict";n.d(t,{v:function(){return V}});var r=n(27378),p=n(71078),c=n(92082),o=n(83453),a=n(89738),l=n(34121),i=n(96739),s=n(6231),d=n(56589),S=n(20410),m=n(71656);let[u,h]=(0,m.R)("Stepper component was not found in tree"),v=()=>null;v.displayName="@mantine/core/StepperCompleted";var f=n(2256),b=n(38765),y=n(42029),g=n(88101),C=n(19397),x={root:"m-cbb4ea7e",steps:"m-aaf89d0b",separator:"m-2a371ac9",content:"m-78da155d",step:"m-cbb57068","step--horizontal":"m-f56b1e2c","step--vertical":"m-833edb7e",verticalSeparator:"m-6496b3f3",stepWrapper:"m-818e70b",stepIcon:"m-1959ad01",stepCompletedIcon:"m-a79331dc",stepBody:"m-1956aa2a",stepLabel:"m-12051f6c",stepDescription:"m-164eea74"};let k=(e,t)=>"function"==typeof e?r.createElement(e,{step:t||0}):e,E={withIcon:!0,allowStepClick:!0,iconPosition:"left"},j=(0,S.d)((e,t)=>{let{classNames:n,className:p,style:c,styles:o,vars:l,step:s,state:d,color:S,icon:m,completedIcon:u,progressIcon:v,label:x,description:j,withIcon:w,iconSize:I,loading:V,allowStepClick:G,allowStepSelect:A,iconPosition:z,orientation:B,...N}=(0,i.w)("StepperStep",E,e),D=h(),M=(0,f.rZ)(),F={classNames:n,styles:o},W="stepCompleted"===d?null:"stepProgress"===d?v:m,P={"data-progress":"stepProgress"===d||void 0,"data-completed":"stepCompleted"===d||void 0};return r.createElement(C.k,{...D.getStyles("step",{className:p,style:c,variant:D.orientation,...F}),mod:{"icon-position":z||D.iconPosition,"allow-click":G},ref:t,...P,...N,__vars:{"--step-color":S?(0,a.p)(S,M):void 0},tabIndex:G?0:-1},w&&r.createElement("span",{...D.getStyles("stepWrapper",F)},r.createElement("span",{...D.getStyles("stepIcon",F),...P},r.createElement(g.u,{mounted:"stepCompleted"===d,transition:"pop",duration:200},e=>r.createElement("span",{...D.getStyles("stepCompletedIcon",{style:e,...F})},V?r.createElement(y.a,{color:"var(--mantine-color-white)",size:"calc(var(--stepper-icon-size) / 2)",...D.getStyles("stepLoader",F)}):k(u,s)||r.createElement(b.n,{size:"60%"}))),"stepCompleted"!==d?V?r.createElement(y.a,{...D.getStyles("stepLoader",F),size:"calc(var(--stepper-icon-size) / 2)",color:S}):k(W||m,s):null),"vertical"===B&&r.createElement("span",{...D.getStyles("verticalSeparator",F),"data-active":"stepCompleted"===d||void 0})),(x||j)&&r.createElement("span",{...D.getStyles("stepBody",F),"data-orientation":D.orientation,"data-icon-position":z||D.iconPosition},x&&r.createElement("span",{...D.getStyles("stepLabel",F)},k(x,s)),j&&r.createElement("span",{...D.getStyles("stepDescription",F)},k(j,s))))});j.classes=x,j.displayName="@mantine/core/StepperStep";let w={orientation:"horizontal",iconPosition:"left",allowNextStepsSelect:!0,wrap:!0},I=(0,o.Z)((e,{color:t,iconSize:n,size:r,contentPadding:o,radius:i,autoContrast:s})=>({root:{"--stepper-color":t?(0,a.p)(t,e):void 0,"--stepper-icon-color":s?(0,l.R)({color:t,theme:e}):void 0,"--stepper-icon-size":void 0===n?(0,c.ap)(r,"stepper-icon-size"):(0,p.h)(n),"--stepper-content-padding":(0,c.bG)(o),"--stepper-radius":void 0===i?void 0:(0,c.H5)(i),"--stepper-fz":(0,c.yv)(r),"--stepper-spacing":(0,c.bG)(r)}})),V=(0,S.d)((e,t)=>{let n=(0,i.w)("Stepper",w,e),{classNames:p,className:c,style:o,styles:a,unstyled:l,vars:S,children:m,onStepClick:h,active:f,icon:b,completedIcon:y,progressIcon:g,color:C,iconSize:k,contentPadding:E,orientation:j,iconPosition:V,size:G,radius:A,allowNextStepsSelect:z,wrap:B,...N}=n,D=(0,s.y)({name:"Stepper",classes:x,props:n,className:c,style:o,classNames:p,styles:a,unstyled:l,vars:S,varsResolver:I}),M=r.Children.toArray(m),F=M.filter(e=>e.type!==v),W=M.find(e=>e.type===v),P=F.reduce((e,t,n)=>{let p=f===n?"stepProgress":f>n?"stepCompleted":"stepInactive",c="function"==typeof h&&("boolean"==typeof t.props.allowStepSelect?t.props.allowStepSelect:"stepCompleted"===p||z);return e.push((0,r.cloneElement)(t,{icon:t.props.icon||b||n+1,key:n,step:n,state:p,onClick:()=>c&&h?.(n),allowStepClick:c,completedIcon:t.props.completedIcon||y,progressIcon:t.props.progressIcon||g,color:t.props.color||C,iconSize:k,radius:A,iconPosition:t.props.iconPosition||V,orientation:j,unstyled:l})),"horizontal"===j&&n!==F.length-1&&e.push(r.createElement("div",{...D("separator"),"data-active":n<f||void 0,"data-orientation":j,key:`separator-${n}`})),e},[]),_=F[f]?.props?.children,T=W?.props?.children,Z=f>F.length-1?T:_;return r.createElement(u,{value:{getStyles:D,orientation:j,iconPosition:V}},r.createElement(d.x,{...D("root"),ref:t,size:G,...N},r.createElement(d.x,{...D("steps"),mod:{orientation:j,"icon-position":V,wrap:B&&"vertical"!==j}},P),Z&&r.createElement("div",{...D("content")},Z)))});V.classes=x,V.displayName="@mantine/core/Stepper",V.Completed=v,V.Step=j}},function(e){e.O(0,[30370,15819,2775,49774,92888,40179],function(){return e(e.s=88265)}),_N_E=e.O()}]);