"use strict";(self.webpackChunkEduAffair=self.webpackChunkEduAffair||[]).push([[250],{250:(A,s,o)=>{o.r(s),o.d(s,{mdTransitionAnimation:()=>T});var t=o(128),d=o(191);const T=(O,e)=>{var a,r,l;const c="40px",u="back"===e.direction,E=e.leavingEl,f=(0,d.g)(e.enteringEl),g=f.querySelector("ion-toolbar"),n=(0,t.c)();if(n.addElement(f).fill("both").beforeRemoveClass("ion-page-invisible"),u?n.duration((null!==(a=e.duration)&&void 0!==a?a:0)||200).easing("cubic-bezier(0.47,0,0.745,0.715)"):n.duration((null!==(r=e.duration)&&void 0!==r?r:0)||280).easing("cubic-bezier(0.36,0.66,0.04,1)").fromTo("transform",`translateY(${c})`,"translateY(0px)").fromTo("opacity",.01,1),g){const i=(0,t.c)();i.addElement(g),n.addAnimation(i)}if(E&&u){n.duration((null!==(l=e.duration)&&void 0!==l?l:0)||200).easing("cubic-bezier(0.47,0,0.745,0.715)");const i=(0,t.c)();i.addElement((0,d.g)(E)).onFinish(v=>{1===v&&i.elements.length>0&&i.elements[0].style.setProperty("display","none")}).fromTo("transform","translateY(0px)",`translateY(${c})`).fromTo("opacity",1,0),n.addAnimation(i)}return n}}}]);