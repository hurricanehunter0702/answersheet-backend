"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[96],{10096:function(e,r,t){t.r(r),t.d(r,{default:function(){return b}});var n=t(74165),a=t(15861),s=t(70885),c=t(72791),o=t(57689),i=t(47022),u=t(9140),d=t(59434),l=t(76887),f=t(85239),m=t(9085),p=t(80184),b=function(){var e=(0,c.useRef)(0),r=(0,o.s0)(),t=(0,d.I0)(),b=(0,c.useState)({name:"",content:""}),v=(0,s.Z)(b,2),Z=v[0],h=v[1],g=(0,d.v9)((function(e){return e.user.user})),x=(0,o.UO)();(0,c.useEffect)((function(){document.title="AnswerSheet - HSC made easy";var e=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(){var a,s,c,o,i,u,d,p,b;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t((0,l.K4)(!0)),a=x.year,s=x.subject,c=x.topic,o=x.subtopic,e.next=4,f.Z.get("sub-topics/get-subtopic-by-slug",{params:{year_slug:a,subject_slug:s,topic_slug:c,subtopic_slug:o}});case 4:i=e.sent,(u=i.data).success?(d=u.data,p=d.permission,b=d.subject,0===Number(p)?h(u.data):1===Number(p)?g._id?h(u.data):(m.Am.info("Sign up to view this for free."),r("/login")):2===Number(p)&&(g._id?w(b)?h(u.data):m.Am.info("Premium membership access only."):(m.Am.info("Sign up to view."),r("/login"))),setTimeout((function(){return t((0,l.K4)(!1))}),1500)):(m.Am.error(u.msg),r("/subjects"));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]);var w=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(r){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.Z.get("check-membership",{params:{user:g._id,subject:r}});case 2:return e.abrupt("return",!1);case 3:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}();return(0,c.useEffect)((function(){window.com.wiris.js.JsPluginViewer.parseElement(e.current,!0,(function(){}))}),[Z]),(0,p.jsx)("div",{className:"lecture-container",children:(0,p.jsx)(i.Z,{children:(0,p.jsx)(u.Z,{className:"mb-4",children:(0,p.jsxs)(u.Z.Body,{className:"pt-5 px-5 pb-4",children:[(0,p.jsx)("h2",{className:"lecture-title",children:Z.name}),(0,p.jsx)("div",{ref:e,className:"mt-3 lecture-content",dangerouslySetInnerHTML:{__html:Z.content}})]})})})})}},85239:function(e,r,t){var n=t(61044),a=function(){return window.localStorage.getItem("token")?localStorage.getItem("token"):null},s=n.ZP.create({baseURL:"/api/v1/",timeout:15e3,headers:{Authorization:"Bearer ".concat(a())}});s.interceptors.request.use((function(e){return e.headers.Authorization="Bearer ".concat(a()),e})),s.interceptors.response.use((function(e){return e}),(function(e){return 401!==e.response.status&&403!==e.response.status&&406!==e.response.status||(window.localStorage.clear(),window.location.href="/login"),Promise.reject(e)})),r.Z=s},9140:function(e,r,t){t.d(r,{Z:function(){return A}});var n=t(1413),a=t(45987),s=t(81694),c=t.n(s),o=t(72791),i=t(10162),u=t(66543),d=t(27472),l=t(80184),f=["bsPrefix","className","variant","as"],m=o.forwardRef((function(e,r){var t=e.bsPrefix,s=e.className,o=e.variant,u=e.as,d=void 0===u?"img":u,m=(0,a.Z)(e,f),p=(0,i.vE)(t,"card-img");return(0,l.jsx)(d,(0,n.Z)({ref:r,className:c()(o?"".concat(p,"-").concat(o):p,s)},m))}));m.displayName="CardImg";var p=m,b=t(96040),v=["bsPrefix","className","as"],Z=o.forwardRef((function(e,r){var t=e.bsPrefix,s=e.className,u=e.as,d=void 0===u?"div":u,f=(0,a.Z)(e,v),m=(0,i.vE)(t,"card-header"),p=(0,o.useMemo)((function(){return{cardHeaderBsPrefix:m}}),[m]);return(0,l.jsx)(b.Z.Provider,{value:p,children:(0,l.jsx)(d,(0,n.Z)((0,n.Z)({ref:r},f),{},{className:c()(s,m)}))})}));Z.displayName="CardHeader";var h=Z,g=["bsPrefix","className","bg","text","border","body","children","as"],x=(0,d.Z)("h5"),w=(0,d.Z)("h6"),N=(0,u.Z)("card-body"),j=(0,u.Z)("card-title",{Component:x}),y=(0,u.Z)("card-subtitle",{Component:w}),P=(0,u.Z)("card-link",{Component:"a"}),k=(0,u.Z)("card-text",{Component:"p"}),C=(0,u.Z)("card-footer"),S=(0,u.Z)("card-img-overlay"),_=o.forwardRef((function(e,r){var t=e.bsPrefix,s=e.className,o=e.bg,u=e.text,d=e.border,f=e.body,m=e.children,p=e.as,b=void 0===p?"div":p,v=(0,a.Z)(e,g),Z=(0,i.vE)(t,"card");return(0,l.jsx)(b,(0,n.Z)((0,n.Z)({ref:r},v),{},{className:c()(s,Z,o&&"bg-".concat(o),u&&"text-".concat(u),d&&"border-".concat(d)),children:f?(0,l.jsx)(N,{children:m}):m}))}));_.displayName="Card",_.defaultProps={body:!1};var A=Object.assign(_,{Img:p,Title:j,Subtitle:y,Body:N,Link:P,Text:k,Header:h,Footer:C,ImgOverlay:S})}}]);
//# sourceMappingURL=96.01745edc.chunk.js.map