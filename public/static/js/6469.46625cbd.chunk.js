"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[6469],{33500:function(e,a,r){r.r(a);var n=r(74165),t=r(15861),s=r(70885),i=r(72791),o=r(57689),c=r(89743),d=r(2677),l=r(9140),u=r(95313),f=r(43360),m=r(9085),p=r(55705),v=r(81724),h=r(85239),Z=r(80184);a.default=function(){var e=(0,o.UO)(),a=(0,i.useState)({firstName:"",lastName:"",email:"",password:""}),r=(0,s.Z)(a,2),b=r[0],x=r[1],N=(0,i.useState)({password:"",confirmPassword:""}),g=(0,s.Z)(N,2),j=g[0],w=(g[1],v.Ry({firstName:v.Z_().required("First name is required."),lastName:v.Z_().required("Last name is required."),email:v.Z_().email("Enter a vaild email.").required("Email is required.")})),y=v.Ry({password:v.Z_().required("Password is required.").min(8,"Password should be minimum 8 characters in length.").required("Password is required."),confirmPassword:v.Z_().test("password-match","Password and Confirm password do not match.",(function(e){return this.parent.password===e}))});(0,i.useEffect)((function(){var a=function(){var a=(0,t.Z)((0,n.Z)().mark((function a(){var r,t,s;return(0,n.Z)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return r=e.id,a.next=3,h.Z.get("admin/staffs/".concat(r));case 3:t=a.sent,s=t.data,x({firstName:s.firstName,lastName:s.lastName,email:s.email});case 6:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}();a()}),[]);var C=function(){var a=(0,t.Z)((0,n.Z)().mark((function a(r,t){var s,i;return(0,n.Z)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t.resetForm,a.next=3,h.Z.put("admin/staffs/".concat(e.id),r);case 3:s=a.sent,(i=s.data).status?m.Am.success(i.msg):m.Am.error(i.msg);case 6:case"end":return a.stop()}}),a)})));return function(e,r){return a.apply(this,arguments)}}(),P=function(){var a=(0,t.Z)((0,n.Z)().mark((function a(r,t){var s,i,o;return(0,n.Z)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return s=t.resetForm,a.next=3,h.Z.put("admin/staffs/".concat(e.id,"/password"),{password:r.password});case 3:i=a.sent,(o=i.data).status?(s(),m.Am.success(o.msg)):m.Am.error(o.msg);case 6:case"end":return a.stop()}}),a)})));return function(e,r){return a.apply(this,arguments)}}();return(0,Z.jsxs)(c.Z,{gutter:15,children:[(0,Z.jsx)(d.Z,{md:6,children:(0,Z.jsxs)(l.Z,{className:"mb-4",children:[(0,Z.jsx)(l.Z.Header,{style:{background:"#3c4b64"},bsPrefix:"card-header py-3",children:(0,Z.jsx)(l.Z.Title,{as:"h5",bsPrefix:"mb-0 card-title text-light",children:"Staff profile"})}),(0,Z.jsx)(l.Z.Body,{className:"p-4",children:(0,Z.jsx)(p.J9,{enableReinitialize:!0,validationSchema:w,validateOnChange:!1,validateOnBlur:!1,onSubmit:C,initialValues:b,children:function(e){var a=e.handleSubmit,r=e.handleChange,n=e.values,t=e.touched,s=e.errors;return(0,Z.jsxs)(u.Z,{noValidate:!0,onSubmit:a,children:[(0,Z.jsxs)(c.Z,{children:[(0,Z.jsx)(d.Z,{md:6,children:(0,Z.jsxs)(u.Z.Group,{className:"mb-3",children:[(0,Z.jsx)(u.Z.Label,{children:"First name:"}),(0,Z.jsx)(u.Z.Control,{type:"text",name:"firstName",onChange:r,value:n.firstName,isInvalid:!!s.firstName,touched:t}),(0,Z.jsx)(u.Z.Control.Feedback,{type:"invalid",children:s.firstName})]})}),(0,Z.jsx)(d.Z,{md:6,children:(0,Z.jsxs)(u.Z.Group,{className:"mb-3",children:[(0,Z.jsx)(u.Z.Label,{children:"Last name:"}),(0,Z.jsx)(u.Z.Control,{type:"text",name:"lastName",onChange:r,value:n.lastName,isInvalid:!!s.lastName,touched:t}),(0,Z.jsx)(u.Z.Control.Feedback,{type:"invalid",children:s.lastName})]})}),(0,Z.jsx)(d.Z,{md:12,children:(0,Z.jsxs)(u.Z.Group,{className:"mb-3",children:[(0,Z.jsx)(u.Z.Label,{children:"Email:"}),(0,Z.jsx)(u.Z.Control,{type:"email",name:"email",onChange:r,value:n.email,isInvalid:!!s.email,touched:t}),(0,Z.jsx)(u.Z.Control.Feedback,{type:"invalid",children:s.email})]})})]}),(0,Z.jsx)(f.Z,{type:"submit",variant:"primary",style:{float:"right"},children:"Update profile"})]})}})})]})}),(0,Z.jsx)(d.Z,{md:6,children:(0,Z.jsxs)(l.Z,{className:"mb-4",children:[(0,Z.jsx)(l.Z.Header,{style:{background:"#3c4b64"},bsPrefix:"card-header py-3",children:(0,Z.jsx)(l.Z.Title,{as:"h4",bsPrefix:"mb-0 card-title text-light",children:"Change password"})}),(0,Z.jsx)(l.Z.Body,{className:"p-4",children:(0,Z.jsx)(p.J9,{enableReinitialize:!0,validationSchema:y,validateOnChange:!1,validateOnBlur:!1,onSubmit:P,initialValues:j,children:function(e){var a=e.handleSubmit,r=e.handleChange,n=e.values,t=e.touched,s=e.errors;return(0,Z.jsxs)(u.Z,{noValidate:!0,onSubmit:a,children:[(0,Z.jsxs)(u.Z.Group,{className:"mb-3",children:[(0,Z.jsx)(u.Z.Label,{children:"New password:"}),(0,Z.jsx)(u.Z.Control,{type:"password",name:"password",onChange:r,value:n.password,isInvalid:!!s.password,touched:t}),(0,Z.jsx)(u.Z.Control.Feedback,{type:"invalid",children:s.password})]}),(0,Z.jsxs)(u.Z.Group,{className:"mb-3",children:[(0,Z.jsx)(u.Z.Label,{children:"Confirm password:"}),(0,Z.jsx)(u.Z.Control,{type:"password",name:"confirmPassword",onChange:r,value:n.confirmPassword,isInvalid:!!s.confirmPassword,touched:t}),(0,Z.jsx)(u.Z.Control.Feedback,{type:"invalid",children:s.confirmPassword})]}),(0,Z.jsx)(f.Z,{type:"submit",variant:"primary",style:{float:"right"},children:"Change password"})]})}})})]})})]})}},85239:function(e,a,r){var n=r(61044),t=function(){return window.localStorage.getItem("token")?localStorage.getItem("token"):null},s=n.ZP.create({baseURL:"/api/v1/",timeout:15e3,headers:{Authorization:"Bearer ".concat(t())}});s.interceptors.request.use((function(e){return e.headers.Authorization="Bearer ".concat(t()),e})),s.interceptors.response.use((function(e){return e}),(function(e){return 401!==e.response.status&&403!==e.response.status&&406!==e.response.status||(window.localStorage.clear(),window.location.href="/login"),Promise.reject(e)})),a.Z=s},15341:function(e,a,r){r.d(a,{FT:function(){return o}});var n=r(70885),t=r(72791),s=r(80184),i=["as","disabled"];function o(e){var a=e.tagName,r=e.disabled,n=e.href,t=e.target,s=e.rel,i=e.role,o=e.onClick,c=e.tabIndex,d=void 0===c?0:c,l=e.type;a||(a=null!=n||null!=t||null!=s?"a":"button");var u={tagName:a};if("button"===a)return[{type:l||"button",disabled:r},u];var f=function(e){(r||"a"===a&&function(e){return!e||"#"===e.trim()}(n))&&e.preventDefault(),r?e.stopPropagation():null==o||o(e)};return"a"===a&&(n||(n="#"),r&&(n=void 0)),[{role:null!=i?i:"button",disabled:void 0,tabIndex:r?void 0:d,href:n,target:"a"===a?t:void 0,"aria-disabled":r||void 0,rel:"a"===a?s:void 0,onClick:f,onKeyDown:function(e){" "===e.key&&(e.preventDefault(),f(e))}},u]}var c=t.forwardRef((function(e,a){var r=e.as,t=e.disabled,c=function(e,a){if(null==e)return{};var r,n,t={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],a.indexOf(r)>=0||(t[r]=e[r]);return t}(e,i),d=o(Object.assign({tagName:r,disabled:t},c)),l=(0,n.Z)(d,2),u=l[0],f=l[1].tagName;return(0,s.jsx)(f,Object.assign({},c,u,{ref:a}))}));c.displayName="Button",a.ZP=c},43360:function(e,a,r){var n=r(1413),t=r(70885),s=r(45987),i=r(81694),o=r.n(i),c=r(72791),d=r(15341),l=r(10162),u=r(80184),f=["as","bsPrefix","variant","size","active","className"],m=c.forwardRef((function(e,a){var r=e.as,i=e.bsPrefix,c=e.variant,m=e.size,p=e.active,v=e.className,h=(0,s.Z)(e,f),Z=(0,l.vE)(i,"btn"),b=(0,d.FT)((0,n.Z)({tagName:r},h)),x=(0,t.Z)(b,2),N=x[0],g=x[1].tagName;return(0,u.jsx)(g,(0,n.Z)((0,n.Z)((0,n.Z)({},N),h),{},{ref:a,className:o()(v,Z,p&&"active",c&&"".concat(Z,"-").concat(c),m&&"".concat(Z,"-").concat(m),h.href&&h.disabled&&"disabled")}))}));m.displayName="Button",m.defaultProps={variant:"primary",active:!1,disabled:!1},a.Z=m},9140:function(e,a,r){r.d(a,{Z:function(){return S}});var n=r(1413),t=r(45987),s=r(81694),i=r.n(s),o=r(72791),c=r(10162),d=r(66543),l=r(27472),u=r(80184),f=["bsPrefix","className","variant","as"],m=o.forwardRef((function(e,a){var r=e.bsPrefix,s=e.className,o=e.variant,d=e.as,l=void 0===d?"img":d,m=(0,t.Z)(e,f),p=(0,c.vE)(r,"card-img");return(0,u.jsx)(l,(0,n.Z)({ref:a,className:i()(o?"".concat(p,"-").concat(o):p,s)},m))}));m.displayName="CardImg";var p=m,v=r(96040),h=["bsPrefix","className","as"],Z=o.forwardRef((function(e,a){var r=e.bsPrefix,s=e.className,d=e.as,l=void 0===d?"div":d,f=(0,t.Z)(e,h),m=(0,c.vE)(r,"card-header"),p=(0,o.useMemo)((function(){return{cardHeaderBsPrefix:m}}),[m]);return(0,u.jsx)(v.Z.Provider,{value:p,children:(0,u.jsx)(l,(0,n.Z)((0,n.Z)({ref:a},f),{},{className:i()(s,m)}))})}));Z.displayName="CardHeader";var b=Z,x=["bsPrefix","className","bg","text","border","body","children","as"],N=(0,l.Z)("h5"),g=(0,l.Z)("h6"),j=(0,d.Z)("card-body"),w=(0,d.Z)("card-title",{Component:N}),y=(0,d.Z)("card-subtitle",{Component:g}),C=(0,d.Z)("card-link",{Component:"a"}),P=(0,d.Z)("card-text",{Component:"p"}),k=(0,d.Z)("card-footer"),R=(0,d.Z)("card-img-overlay"),O=o.forwardRef((function(e,a){var r=e.bsPrefix,s=e.className,o=e.bg,d=e.text,l=e.border,f=e.body,m=e.children,p=e.as,v=void 0===p?"div":p,h=(0,t.Z)(e,x),Z=(0,c.vE)(r,"card");return(0,u.jsx)(v,(0,n.Z)((0,n.Z)({ref:a},h),{},{className:i()(s,Z,o&&"bg-".concat(o),d&&"text-".concat(d),l&&"border-".concat(l)),children:f?(0,u.jsx)(j,{children:m}):m}))}));O.displayName="Card",O.defaultProps={body:!1};var S=Object.assign(O,{Img:p,Title:w,Subtitle:y,Body:j,Link:C,Text:P,Header:b,Footer:k,ImgOverlay:R})},96040:function(e,a,r){var n=r(72791).createContext(null);n.displayName="CardHeaderContext",a.Z=n},89743:function(e,a,r){var n=r(1413),t=r(45987),s=r(81694),i=r.n(s),o=r(72791),c=r(10162),d=r(80184),l=["bsPrefix","className","as"],u=o.forwardRef((function(e,a){var r=e.bsPrefix,s=e.className,o=e.as,u=void 0===o?"div":o,f=(0,t.Z)(e,l),m=(0,c.vE)(r,"row"),p=(0,c.pi)(),v=(0,c.zG)(),h="".concat(m,"-cols"),Z=[];return p.forEach((function(e){var a,r=f[e];delete f[e],a=null!=r&&"object"===typeof r?r.cols:r;var n=e!==v?"-".concat(e):"";null!=a&&Z.push("".concat(h).concat(n,"-").concat(a))})),(0,d.jsx)(u,(0,n.Z)((0,n.Z)({ref:a},f),{},{className:i().apply(void 0,[s,m].concat(Z))}))}));u.displayName="Row",a.Z=u},66543:function(e,a,r){r.d(a,{Z:function(){return m}});var n=r(1413),t=r(45987),s=r(81694),i=r.n(s),o=/-(.)/g;var c=r(72791),d=r(10162),l=r(80184),u=["className","bsPrefix","as"],f=function(e){return e[0].toUpperCase()+(a=e,a.replace(o,(function(e,a){return a.toUpperCase()}))).slice(1);var a};function m(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=a.displayName,s=void 0===r?f(e):r,o=a.Component,m=a.defaultProps,p=c.forwardRef((function(a,r){var s=a.className,c=a.bsPrefix,f=a.as,m=void 0===f?o||"div":f,p=(0,t.Z)(a,u),v=(0,d.vE)(c,e);return(0,l.jsx)(m,(0,n.Z)({ref:r,className:i()(s,v)},p))}));return p.defaultProps=m,p.displayName=s,p}},27472:function(e,a,r){var n=r(1413),t=r(72791),s=r(81694),i=r.n(s),o=r(80184);a.Z=function(e){return t.forwardRef((function(a,r){return(0,o.jsx)("div",(0,n.Z)((0,n.Z)({},a),{},{ref:r,className:i()(a.className,e)}))}))}},42391:function(e){var a=function(){};e.exports=a},11752:function(e,a,r){r.d(a,{Z:function(){return s}});var n=r(61120);function t(e,a){for(;!Object.prototype.hasOwnProperty.call(e,a)&&null!==(e=(0,n.Z)(e)););return e}function s(){return s="undefined"!==typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,a,r){var n=t(e,a);if(n){var s=Object.getOwnPropertyDescriptor(n,a);return s.get?s.get.call(arguments.length<3?e:r):s.value}},s.apply(this,arguments)}}}]);
//# sourceMappingURL=6469.46625cbd.chunk.js.map