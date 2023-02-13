"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[7172],{27172:function(e,s,a){a.r(s),a.d(s,{default:function(){return b}});var t=a(74165),n=a(15861),r=a(70885),c=a(72791),i=a(59434),l=a(11087),o=a(47022),d=a(89743),u=a(2677),f=a(18348),m=a(81564),x=a(85239);var h=a.p+"static/media/Group-14627.36b7c6295eb61907bf816d20baf54dcb.svg";var p=a.p+"static/media/Group.d7b8894f1e87ba76df59f6d9e9553a74.svg";var g=a.p+"static/media/03.948e0e9ce356d5a97431ac94b5587b86.svg";var v=a.p+"static/media/Group-14628.62e0e2fd9a0eaa0fee22ba7694e171e6.svg";var j=a.p+"static/media/Group-14566.ee71cb8645607f2b4b113c4fe5401f12.svg",y=a(80184),b=function(){var e=(0,i.v9)((function(e){return e.user})).token,s=(0,c.useState)([]),a=(0,r.Z)(s,2),b=a[0],N=a[1];return(0,c.useEffect)((function(){document.title="AnswerSheet - HSC made easy";var e=function(){var e=(0,n.Z)((0,t.Z)().mark((function e(){var s,a;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.Z.get("years");case 2:s=e.sent,a=s.data,N(a.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,y.jsxs)("div",{className:"home-container",children:[(0,y.jsx)("div",{className:"banner-container",children:(0,y.jsx)(o.Z,{children:(0,y.jsxs)(d.Z,{children:[(0,y.jsx)(u.Z,{lg:"5",children:(0,y.jsxs)("div",{className:"h-100 d-flex flex-column justify-content-center",children:[(0,y.jsxs)("h1",{className:"banner-title",children:["High quality ",(0,y.jsx)("br",{}),"HSC study guides"]}),(0,y.jsx)("p",{className:"banner-description",children:"Everything you need to get a Band 6"})]})}),(0,y.jsx)(u.Z,{lg:"7",className:"text-end",children:(0,y.jsx)("img",{src:h,alt:"banner"})})]})})}),e?null:(0,y.jsxs)("div",{className:"try-free-container",children:[(0,y.jsx)("h2",{children:"Try us for free"}),(0,y.jsx)("p",{children:"Sign up for a free account and start studying."}),(0,y.jsx)(l.Link,{to:"/signup",className:"btn btn-primary",children:"Sign up"})]}),(0,y.jsx)("div",{className:"category-container",children:(0,y.jsxs)(o.Z,{children:[(0,y.jsx)("h2",{className:"text-center",children:"Use AnswerSheet - Get a band 6"}),(0,y.jsxs)(d.Z,{className:"my-4",children:[(0,y.jsxs)(u.Z,{lg:"6",style:{marginBottom:0},children:[(0,y.jsxs)("div",{style:{paddingLeft:44,paddingBottom:22,display:"flex",alignItems:"flex-start"},children:[(0,y.jsx)("img",{src:p,alt:"book",className:"me-2 mt-1"}),(0,y.jsx)("div",{children:"Study from out high quality syllabus summaries - try for free"})]}),(0,y.jsxs)("div",{style:{paddingLeft:44,paddingBottom:22,display:"flex",alignItems:"flex-start"},children:[(0,y.jsx)("img",{src:p,alt:"book",className:"me-2 mt-1"}),(0,y.jsx)("div",{children:"Test yourself with our HSC - style exams, trials, and topic tests"})]})]}),(0,y.jsxs)(u.Z,{lg:"6",children:[(0,y.jsxs)("div",{style:{paddingLeft:44,paddingBottom:22,display:"flex",alignItems:"flex-start"},children:[(0,y.jsx)("img",{src:p,alt:"book",className:"me-2 mt-1"}),(0,y.jsx)("div",{children:"Practice with 100's of exam - style questions"})]}),(0,y.jsxs)("div",{style:{paddingLeft:44,paddingBottom:22,display:"flex",alignItems:"flex-start"},children:[(0,y.jsx)("img",{src:p,alt:"book",className:"me-2 mt-1"}),(0,y.jsx)("div",{children:"Get online support from our tutors"})]})]})]}),(0,y.jsx)(d.Z,{children:b.length&&b.map((function(e,s){return(0,y.jsx)(u.Z,{lg:"6",children:(0,y.jsxs)("div",{className:"category",children:[(0,y.jsxs)("div",{children:[(0,y.jsx)("h3",{className:"category-title",children:e.name}),(0,y.jsx)(f.Z,{className:"flex-column",children:e.subjects.map((function(s,a){return(0,y.jsx)(f.Z.Item,{children:(0,y.jsx)(m.J,{to:"/".concat(e.slug,"/").concat(s.slug),children:(0,y.jsxs)(f.Z.Link,{children:[(0,y.jsx)("i",{className:"fa fa-circle"})," ",s.name]})})},a)}))})]}),(0,y.jsxs)("div",{className:"h-100 d-flex justify-content-center align-items-center",children:[(0,y.jsx)("img",{src:s?v:g,className:"w-100",alt:"year-banner"}),(0,y.jsx)("img",{src:j,alt:"Lock",className:"align-self-start"})]})]})},s)}))})]})})]})}},85239:function(e,s,a){var t=a(61044),n=function(){return window.localStorage.getItem("token")?localStorage.getItem("token"):null},r=t.ZP.create({baseURL:"/api/v1/",timeout:15e3,headers:{Authorization:"Bearer ".concat(n())}});r.interceptors.request.use((function(e){return e.headers.Authorization="Bearer ".concat(n()),e})),r.interceptors.response.use((function(e){return e}),(function(e){return 401!==e.response.status&&403!==e.response.status&&406!==e.response.status||(window.localStorage.clear(),window.location.href="/login"),Promise.reject(e)})),s.Z=r},2677:function(e,s,a){var t=a(70885),n=a(1413),r=a(45987),c=a(81694),i=a.n(c),l=a(72791),o=a(10162),d=a(80184),u=["as","bsPrefix","className"],f=["className"];var m=l.forwardRef((function(e,s){var a=function(e){var s=e.as,a=e.bsPrefix,t=e.className,c=(0,r.Z)(e,u);a=(0,o.vE)(a,"col");var l=(0,o.pi)(),d=(0,o.zG)(),f=[],m=[];return l.forEach((function(e){var s,t,n,r=c[e];delete c[e],"object"===typeof r&&null!=r?(s=r.span,t=r.offset,n=r.order):s=r;var i=e!==d?"-".concat(e):"";s&&f.push(!0===s?"".concat(a).concat(i):"".concat(a).concat(i,"-").concat(s)),null!=n&&m.push("order".concat(i,"-").concat(n)),null!=t&&m.push("offset".concat(i,"-").concat(t))})),[(0,n.Z)((0,n.Z)({},c),{},{className:i().apply(void 0,[t].concat(f,m))}),{as:s,bsPrefix:a,spans:f}]}(e),c=(0,t.Z)(a,2),l=c[0],m=l.className,x=(0,r.Z)(l,f),h=c[1],p=h.as,g=void 0===p?"div":p,v=h.bsPrefix,j=h.spans;return(0,d.jsx)(g,(0,n.Z)((0,n.Z)({},x),{},{ref:s,className:i()(m,!j.length&&v)}))}));m.displayName="Col",s.Z=m},89743:function(e,s,a){var t=a(1413),n=a(45987),r=a(81694),c=a.n(r),i=a(72791),l=a(10162),o=a(80184),d=["bsPrefix","className","as"],u=i.forwardRef((function(e,s){var a=e.bsPrefix,r=e.className,i=e.as,u=void 0===i?"div":i,f=(0,n.Z)(e,d),m=(0,l.vE)(a,"row"),x=(0,l.pi)(),h=(0,l.zG)(),p="".concat(m,"-cols"),g=[];return x.forEach((function(e){var s,a=f[e];delete f[e],s=null!=a&&"object"===typeof a?a.cols:a;var t=e!==h?"-".concat(e):"";null!=s&&g.push("".concat(p).concat(t,"-").concat(s))})),(0,o.jsx)(u,(0,t.Z)((0,t.Z)({ref:s},f),{},{className:c().apply(void 0,[r,m].concat(g))}))}));u.displayName="Row",s.Z=u}}]);
//# sourceMappingURL=7172.88fedb1b.chunk.js.map