"use strict";(self.webpackChunk_wso2is_console=self.webpackChunk_wso2is_console||[]).push([[47487],{96812:(c,a,e)=>{e.d(a,{Z:()=>h});var i=e(62632),o=e(3442),l=e(44194),n=e(28702),t=e(41280),s=e(13996),r=e(41599),m=e(5038),f=e(31549);const d=["actions","children","defaultValue","name","onChange","value"],h=l.forwardRef((function(c,a){const{actions:e,children:h,defaultValue:p,name:u,onChange:k,value:z}=c,g=(0,o.Z)(c,d),M=l.useRef(null),[v,b]=(0,s.Z)({controlled:z,default:p,name:"RadioGroup"});l.useImperativeHandle(e,(()=>({focus:()=>{let c=M.current.querySelector("input:not(:disabled):checked");c||(c=M.current.querySelector("input:not(:disabled)")),c&&c.focus()}})),[]);const x=(0,t.Z)(a,M),w=(0,m.Z)(u),y=l.useMemo((()=>({name:w,onChange(c){b(c.target.value),k&&k(c,c.target.value)},value:v})),[w,k,b,v]);return(0,f.jsx)(r.Z.Provider,{value:y,children:(0,f.jsx)(n.Z,(0,i.Z)({role:"radiogroup",ref:x},g,{children:h}))})}))},64075:(c,a,e)=>{e.d(a,{Z:()=>A});var i=e(3442),o=e(62632),l=e(44194),n=e(14517),t=e(86194),s=e(45895);function r(c){return String(c).match(/[\d.\-+]*\s*(.*)/)[1]||""}function m(c){return parseFloat(c)}var f=e(12803),d=e(88197),h=e(81081),p=e(76989),u=e(43315);function k(c){return(0,u.ZP)("MuiSkeleton",c)}(0,p.Z)("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);var z=e(31549);const g=["animation","className","component","height","style","variant","width"];let M,v,b,x,w=c=>c;const y=(0,t.F4)(M||(M=w`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),S=(0,t.F4)(v||(v=w`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`)),R=(0,d.ZP)("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(c,a)=>{const{ownerState:e}=c;return[a.root,a[e.variant],!1!==e.animation&&a[e.animation],e.hasChildren&&a.withChildren,e.hasChildren&&!e.width&&a.fitContent,e.hasChildren&&!e.height&&a.heightAuto]}})((({theme:c,ownerState:a})=>{const e=r(c.shape.borderRadius)||"px",i=m(c.shape.borderRadius);return(0,o.Z)({display:"block",backgroundColor:c.vars?c.vars.palette.Skeleton.bg:(0,f.Fq)(c.palette.text.primary,"light"===c.palette.mode?.11:.13),height:"1.2em"},"text"===a.variant&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${i}${e}/${Math.round(i/.6*10)/10}${e}`,"&:empty:before":{content:'"\\00a0"'}},"circular"===a.variant&&{borderRadius:"50%"},"rounded"===a.variant&&{borderRadius:(c.vars||c).shape.borderRadius},a.hasChildren&&{"& > *":{visibility:"hidden"}},a.hasChildren&&!a.width&&{maxWidth:"fit-content"},a.hasChildren&&!a.height&&{height:"auto"})}),(({ownerState:c})=>"pulse"===c.animation&&(0,t.iv)(b||(b=w`
      animation: ${0} 1.5s ease-in-out 0.5s infinite;
    `),y)),(({ownerState:c,theme:a})=>"wave"===c.animation&&(0,t.iv)(x||(x=w`
      position: relative;
      overflow: hidden;

      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */
      -webkit-mask-image: -webkit-radial-gradient(white, black);

      &::after {
        animation: ${0} 1.6s linear 0.5s infinite;
        background: linear-gradient(
          90deg,
          transparent,
          ${0},
          transparent
        );
        content: '';
        position: absolute;
        transform: translateX(-100%); /* Avoid flash during server-side hydration */
        bottom: 0;
        left: 0;
        right: 0;
        top: 0;
      }