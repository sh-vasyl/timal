import{c as Ee,u as Me,a as Ae,_ as Fe}from"./TheWrapper.0df23e9d.js";import{_ as Ve}from"./client-only.2fc2bbfb.js";import{_ as d,o as c,c as i,t as ne,e as $,u as M,r as n,g as e,w as y,p as re,b as se,d as ce,n as b,h as u,q as je,z as Be,S as p,f as s,T as He,v,m as Ne,F as Ue,k as Re,D as qe}from"./entry.ca07d34d.js";import{u as ze,b as Xe,_ as Ye,a as Ze}from"./useSvg.c78e7568.js";import{_ as Je}from"./TheDescription.c967d36a.js";import{t as h,d as Ke}from"./index.9c0c6351.js";const Qe={class:"category-title vt h3"},et={__name:"CategoryTitle",props:{text:String},setup(t){return(o,r)=>(c(),i("div",Qe,ne(t.text),1))}},tt=d(et,[["__scopeId","data-v-970c5ab9"]]);const ot=["innerHTML"],at={__name:"CategoryDescr",props:{text:String},setup(t){return(o,r)=>(c(),i("div",{innerHTML:t.text,class:"category-descr vt"},null,8,ot))}},nt=d(at,[["__scopeId","data-v-5c8fd474"]]);const rt={class:"category-count vt h5"},st={__name:"CategoryCount",props:{totalProjects:Number},setup(t){return(o,r)=>(c(),i("div",rt," ("+ne(t.totalProjects)+") ",1))}},ct=d(st,[["__scopeId","data-v-f93ced14"]]);const _t={},lt={class:"page-content__wrap"};function it(t,o){return c(),i("div",lt,[$(t.$slots,"default",{},void 0,!0)])}const ut=d(_t,[["render",it],["__scopeId","data-v-de3ae321"]]);const dt=t=>(re("data-v-03cf344d"),t=t(),se(),t),pt=dt(()=>ce("path",{d:"M192.743 98.9527C411.006 176.303 506.978 66.8667 116.811 6.58694C119.627 27.77 295.369 -120.064 2.00002 362.837C188.7 264.872 214.94 72.2766 72.9076 424",stroke:"#2828BD"},null,-1)),gt=[pt],yt={__name:"CategorySignatureFirst",setup(t){const o=M(),r=n(null),{animate:_}=ze();return h(()=>{e.set(r.value,{opacity:0})}),y(()=>o.transitionComplete,g=>{g&&_(r.value)}),y(()=>o.isPreloaderVisible,()=>{_(r.value)}),(g,k)=>(c(),i("svg",{ref_key:"categorySignature",ref:r,class:"category-signature-first",viewBox:"0 0 384 425",fill:"none",xmlns:"http://www.w3.org/2000/svg"},gt,512))}},ft=d(yt,[["__scopeId","data-v-03cf344d"]]);const mt={},vt=t=>(re("data-v-b26d62f9"),t=t(),se(),t),ht={class:"category-signature-second",viewBox:"0 0 861 680",fill:"none",xmlns:"http://www.w3.org/2000/svg"},xt=vt(()=>ce("path",{d:"M589.524 228.128C444.258 551.034 162.526 873.13 1 334.259C601.934 777.446 127.827 230.442 859.229 241.788C634.042 2.51596 347.866 768.399 357.007 1C425.437 27.3779 194.149 157.886 749.642 679.634",stroke:"#2828BD"},null,-1)),wt=[xt];function $t(t,o){return c(),i("svg",ht,wt)}const Ct=d(mt,[["render",$t],["__scopeId","data-v-b26d62f9"]]);const St=["src"],Tt={__name:"CategoryGalleryImg",props:{src:String},setup(t){return(o,r)=>(c(),i("img",{class:"category-gallery__img",src:t.src,alt:"category gallery image"},null,8,St))}};const Pt={__name:"CategoryGalleryLink",props:{href:String},setup(t){const{animate:o}=Xe(),r=M(),_=n(null);return h(()=>{e.set(_.value.$el,{opacity:0})}),y(()=>r.transitionComplete,g=>{g&&o(_.value.$el)}),y(()=>r.isPreloaderVisible,()=>{o(_.value.$el)}),h(()=>{e.to(_.value.$el,{rotateZ:(Math.random()-.5)*5})}),(g,k)=>{const G=Ee;return c(),b(G,{ref_key:"categoryGalleryLink",ref:_,to:t.href,class:"category-gallery__link"},{default:u(()=>[$(g.$slots,"default",{},void 0,!0)]),_:3},8,["to"])}}},bt=d(Pt,[["__scopeId","data-v-1dfa9b3c"]]);const kt={__name:"CategoryGalleryWrapper",setup(t){const o=n(null);return h(()=>{let r=e.matchMedia();r.add("(max-width: 1023px)",()=>{e.set(o.value,{paddingLeft:"calc(50vw - 206px)"})}),r.add("(max-width: 767px)",()=>{e.set(o.value,{paddingLeft:"calc(50vw - 130px)"})})}),(r,_)=>(c(),i("div",{ref_key:"categoryGalleryWrapper",ref:o,class:"category-gallery__wrapper"},[$(r.$slots,"default",{},void 0,!0)],512))}},Gt=d(kt,[["__scopeId","data-v-5217a0dc"]]);const It={},Dt={ref:"categoryGallery",class:"category-gallery"};function Ot(t,o){return c(),i("div",Dt,[$(t.$slots,"default",{},void 0,!0)],512)}const Lt=d(It,[["render",Ot],["__scopeId","data-v-7dfe6106"]]);const Wt={},Et={class:"category-view"};function Mt(t,o){return c(),i("div",Et,[$(t.$slots,"default",{},void 0,!0)])}const At=d(Wt,[["render",Mt],["__scopeId","data-v-5b6680d6"]]);const Ft={},Vt={class:"category-proxy"};function jt(t,o){return c(),i("div",Vt)}const Bt=d(Ft,[["render",jt],["__scopeId","data-v-d4fed3e0"]]),Yt={__name:"categories",async setup(t){var U,R,q,z,X,Y,Z;let o,r;const _=M();y(()=>_.transitionComplete,a=>{a&&(j(),B())}),y(()=>_.isPreloaderVisible,()=>{j(),B()}),y(()=>_.isPreloaderAnimationComplete,()=>{e.set("body,html",{overflow:"hidden"})});const k=je().public.baseUrl,{data:G}=([o,r]=Be(()=>Me("categories",()=>$fetch("/api/categories"))),o=await o,r(),o),l=(R=(U=G.value)==null?void 0:U.data)==null?void 0:R.data[_.category],_e=(q=l==null?void 0:l.attributes)==null?void 0:q.name,le=(z=l==null?void 0:l.attributes)==null?void 0:z.description,ie=(Y=(X=l==null?void 0:l.attributes)==null?void 0:X.shootings)==null?void 0:Y.data,ue=(Z=l==null?void 0:l.attributes)==null?void 0:Z.name.toLowerCase(),I=n(null),D=n(null),C=n(null),A=n(null),de=n(null),O=n(null),L=n(null),x=n(null),S=n([]),W=n([]),pe=n(null),ge=n(null),F=n(null),T=n(0),E=n(0),V=n(250),ye=n("vw");h(()=>{e.matchMedia().add("(max-width: 1439px)",()=>{ye.value="px"})}),h(()=>{fe()}),Ke(()=>{p.isTouch===1&&(e.set("body,html,#viewport",{clearProps:"all"}),p.defaults({scroller:window}))});function j(){p.isTouch===1&&(e.set("body,html",{position:"fixed",height:"100vh",width:"100vw"}),e.set("#viewport",{height:"100vh",overflowY:"scroll"}),p.defaults({scroller:"#viewport"}))}function fe(){T.value=S.value.length}function B(){let a=!1;setTimeout(()=>{p.isTouch===1?e.to(window,{scrollTo:1,duration:.01}):Re.get().scrollTo(1)},1);let w=e.to(x.value.$el,{x:document.documentElement.clientWidth-x.value.$el.clientWidth,ease:"none",scrollTrigger:{trigger:A.value.$el,pin:!0,pinType:p.isTouch===1?"fixed":"transform",id:"scroll",scrub:1,end:`+=${T.value*.5}00%`,onEnter:()=>{let f,P;qe.create(F.value.$el,{trigger:x.value.$el,type:"x",onDragStart(){this.startScroll=w.scrollTrigger.scroll(),H()},onDrag(){w.scrollTrigger.scroll(f(this.startScroll-(this.x-this.startX)*P))},onDragEnd(){N()}}),f=e.utils.clamp(w.scrollTrigger.start+1,w.scrollTrigger.end-1),P=x.value.$el.clientWidth/(document.documentElement.clientWidth*(T.value*.1))},onUpdate:f=>{E.value=f.scroll(),a||E.value>V.value&&(me(),a=!0),a&&E.value<V.value&&(ve(),a=!1)}}});p.addEventListener("scrollStart",()=>{H()}),p.addEventListener("scrollEnd",()=>{N()})}function H(){S.value.forEach(a=>{e.to(a.$el,{scale:.8,ease:"Power2.easeOut"})}),W.value.forEach(a=>{e.to(a.$el,{scale:1.2,ease:"Power2.easeOut"})})}function N(){S.value.forEach(a=>{e.to(a.$el,{scale:1,ease:"Power2.easeOut"})}),W.value.forEach(a=>{e.to(a.$el,{scale:1,ease:"Power2.easeOut"})})}function me(){let a=e.matchMedia();a.add("(max-width: 1023px)",()=>{e.to(D.value.$el,{height:0,duration:.25,ease:"Power2.easeOut"}),e.to(C.value.$el,{y:40,ease:"Power2.easeOut"})}),a.add("(max-width: 767px)",()=>{e.to(C.value.$el,{y:26,ease:"Power2.easeOut"})}),e.to(I.value.$el,{scale:.5,ease:"Power2.easeOut"}),e.to(O.value.$el,{autoAlpha:0,duration:.25,ease:"Power2.easeOut"}),a.add("(min-width: 1024px)",()=>{e.to(L.value.$el,{autoAlpha:0,duration:.25,ease:"Power2.easeOut"})})}function ve(){let a=e.matchMedia();a.add("(max-width: 1023px)",()=>{e.to(D.value.$el,{height:"auto",duration:.25,ease:"Power2.easeOut"}),e.to(C.value.$el,{y:0,ease:"Power2.easeOut"})}),e.to(I.value.$el,{scale:1,ease:"Power2.easeOut"}),e.to(O.value.$el,{autoAlpha:1,duration:.25,ease:"Power2.easeOut"}),a.add("(min-width: 1024px)",()=>{e.to(L.value.$el,{autoAlpha:1,duration:.25,ease:"Power2.easeOut"})})}return(a,w)=>{const f=Fe,P=Ve,he=tt,xe=Ye,we=nt,$e=Je,Ce=ct,Se=Ze,Te=ut,Pe=ft,be=Ct,ke=Tt,Ge=bt,Ie=Gt,De=Lt,Oe=At,Le=Bt,We=Ae;return c(),b(We,{class:"wrapper-inner"},{default:u(()=>[s(P,null,{default:u(()=>[(c(),b(He,{to:"#viewport"},[s(f)]))]),_:1}),s(Oe,{ref_key:"categoryView",ref:A},{default:u(()=>[s(Te,null,{default:u(()=>[s(xe,{ref_key:"theTitle",ref:I,class:"--darken"},{default:u(()=>[s(he,{ref_key:"categoryTitle",ref:de,text:v(_e)},null,8,["text"])]),_:1},512),s($e,{ref_key:"theDescr",ref:D,class:"--darken"},{default:u(()=>[s(we,{ref_key:"categoryDescr",ref:O,text:v(le)},null,8,["text"])]),_:1},512),s(Se,{ref_key:"theActions",ref:C,class:"--darken"},{default:u(()=>[s(Ce,{ref_key:"categoryCount",ref:L,"total-projects":v(T)},null,8,["total-projects"])]),_:1},512)]),_:1}),s(Pe,{ref_key:"categorySignatureFirst",ref:pe},null,512),s(be,{ref_key:"categorySignatureSecond",ref:ge},null,512),s(De,null,{default:u(()=>[s(Ie,{ref_key:"categoryGalleryWrapper",ref:x},{default:u(()=>[(c(!0),i(Ue,null,Ne(v(ie),(m,Ht)=>{var J;return c(),b(Ge,{ref_for:!0,ref_key:"categoryGalleryLink",ref:S,href:`/${v(ue)}/${(J=m==null?void 0:m.attributes)==null?void 0:J.slug}`},{default:u(()=>{var K,Q,ee,te,oe,ae;return[s(ke,{ref_for:!0,ref_key:"categoryGalleryImg",ref:W,src:v(k)+((ae=(oe=(te=(ee=(Q=(K=m==null?void 0:m.attributes)==null?void 0:K.photos)==null?void 0:Q.data[0])==null?void 0:ee.attributes)==null?void 0:te.formats)==null?void 0:oe.large)==null?void 0:ae.url)},null,8,["src"])]}),_:2},1032,["href"])}),256))]),_:1},512)]),_:1})]),_:1},512),s(Le,{ref_key:"categoryProxy",ref:F},null,512)]),_:1})}}};export{Yt as default};
