(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{115:function(e,t,a){},141:function(e,t,a){},142:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(13),i=a.n(r),s=a(18),l=(a(115),a(14)),o=a(9),d=a(2),b=Object(n.createContext)(),j=function(e){var t=Object(n.useState)(!1),a=Object(o.a)(t,2),c=a[0],r=a[1];return Object(d.jsx)(b.Provider,{value:[c,r],children:e.children})},u=Object(n.createContext)(),g=function(e){var t=Object(n.useState)(),a=Object(o.a)(t,2),c=a[0],r=a[1];return Object(d.jsx)(u.Provider,{value:[c,r],children:e.children})},h=Object(n.createContext)(),p=function(e){var t=Object(n.useState)(),a=Object(o.a)(t,2),c=a[0],r=a[1];return Object(d.jsx)(h.Provider,{value:[c,r],children:e.children})},m=a(40),O=a(10),x=a(21),f=a.n(x),y=a(85),k=a.n(y),v=a(208),C=a(191),w=a(189),S=a(204),_=a(190),N=a(74),R=a.n(N),I=a(145),W=a(185),L=a(187),P=Object(W.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function T(){var e="https://api-hackernews.herokuapp.com/",t=P(),a=Object(l.g)(),c=Object(n.useState)({usernameRegistrering:"",emailRegistrering:"",passwordRegistrering:""}),r=Object(o.a)(c,2),i=r[0],s=r[1],b=function(e){s(Object(O.a)(Object(O.a)({},i),{},Object(m.a)({},e.target.name,e.target.value)))},j=Object(n.useState)({emailLogging:"",passwordLogging:""}),u=Object(o.a)(j,2),g=u[0],h=u[1],p=function(e){h(Object(O.a)(Object(O.a)({},g),{},Object(m.a)({},e.target.name,e.target.value)))};return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)(L.a,{component:"main",maxWidth:"s",id:"column",style:{display:"flex",justifyContent:"space-around",alignContent:"flex-start",color:"#3d84b8"},children:[Object(d.jsx)(w.a,{}),Object(d.jsxs)("div",{className:t.paper,id:"card",style:{backgroundColor:"#eeeeee",textAlign:"center",padding:"2%",borderRadius:"5%"},children:[Object(d.jsx)(v.a,{className:t.avatar,style:{backgroundColor:"#3d84b8"},children:Object(d.jsx)(R.a,{})}),Object(d.jsx)(I.a,{component:"h1",variant:"h5",children:"Sign up"}),Object(d.jsxs)("form",{className:t.form,noValidate:!0,children:[Object(d.jsxs)(_.a,{container:!0,spacing:1,style:{display:"flex",justifyContent:"center"},children:[Object(d.jsx)(_.a,{item:!0,xs:9,sm:10,children:Object(d.jsx)(S.a,{autoComplete:"usernameRegistrering",name:"usernameRegistrering",required:!0,fullWidth:!0,id:"usernameRegistrering",label:"Username",onChange:b})}),Object(d.jsx)(_.a,{item:!0,xs:9,sm:10,children:Object(d.jsx)(S.a,{required:!0,fullWidth:!0,id:"emailRegistrering",label:"Email Address",name:"emailRegistrering",autoComplete:"emailRegistrering",onChange:b})}),Object(d.jsx)(_.a,{item:!0,xs:9,sm:10,children:Object(d.jsx)(S.a,{required:!0,fullWidth:!0,name:"passwordRegistrering",label:"Password",type:"password",id:"passwordRegistrering",autoComplete:"current-password",onChange:b})})]}),Object(d.jsx)(C.a,{type:"submit",variant:"contained",color:"primary",style:{width:"83%",backgroundColor:"#3d84b8"},className:t.submit,onClick:function(t){t.preventDefault(),""!==i.usernameRegistrering&&""!==i.emailRegistrering&&""!==i.passwordRegistrering?k()(i&&i.emailRegistrering)?(s(Object(O.a)(Object(O.a)({},i),{},{emailRegistrering:i&&i.emailRegistrering})),f.a.post("".concat(e,"api/users/register"),{username:i.usernameRegistrering,email:i.emailRegistrering,password:i.passwordRegistrering}).then((function(e){window.alert("You may now log in.")})).catch((function(e){e&&window.alert("User already exists.")}))):window.alert("Please enter a valid email."):window.alert("Please fill all forms.")},children:"Sign Up"})]})]}),Object(d.jsx)(w.a,{}),Object(d.jsxs)("div",{className:t.paper,id:"card",style:{backgroundColor:"#eeeeee",textAlign:"center",padding:"2%",borderRadius:"5%"},children:[Object(d.jsx)(v.a,{className:t.avatar,style:{backgroundColor:"#3d84b8"},children:Object(d.jsx)(R.a,{})}),Object(d.jsx)(I.a,{component:"h1",variant:"h5",children:"Sign in"}),Object(d.jsxs)("form",{className:t.form,noValidate:!0,children:[Object(d.jsx)(S.a,{margin:"normal",required:!0,fullWidth:!0,id:"emailLogging",label:"Email Address",name:"emailLogging",autoComplete:"emailLogging",autoFocus:!0,onChange:p}),Object(d.jsx)(S.a,{margin:"normal",required:!0,fullWidth:!0,name:"passwordLogging",label:"Password",type:"password",id:"passwordLogging",autoComplete:"current-password",onChange:p}),Object(d.jsx)(C.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:t.submit,style:{backgroundColor:"#3d84b8"},onClick:function(t){t.preventDefault(),""!==g.emailLogging&&""!==g.passwordLogging?f.a.post("".concat(e,"api/users/login"),{email:g.emailLogging,password:g.passwordLogging}).then((function(e){var t,n=e.data.user._id;a.push("/access/user/".concat(n)),t=e.data,localStorage.setItem("keyUser",t.token),localStorage.setItem("idUser",t.user._id),localStorage.setItem("logInStatus",!0)})).catch((function(e){e&&window.alert("Wrong credentials.")})):window.alert("Please fill all forms.")},children:"Sign In"})]})]})]}),Object(d.jsx)(w.a,{})]})}var U=a(192),z=a(86),D=a.n(z),E=a(193),A=a(87),q=a.n(A),F=a(206),V=a(209),B=Object(W.a)((function(e){return{toolbar:{borderBottom:"1px solid ".concat(e.palette.divider)},toolbarTitle:{flex:1},toolbarSecondary:{justifyContent:"space-between",overflowX:"auto"},toolbarLink:{padding:e.spacing(1),flexShrink:0},typography:{padding:e.spacing(2)}}}));function M(){var e=B(),t=Object(l.g)(),a=c.a.useState(null),r=Object(o.a)(a,2),i=r[0],j=r[1],g=Boolean(i),h=g?"simple-popover":void 0,p=Object(n.useContext)(b),m=Object(o.a)(p,2),O=m[0],x=m[1],y=Object(n.useContext)(u),k=Object(o.a)(y,2),v=k[0],w=k[1];Object(n.useEffect)((function(){if(localStorage.getItem("logInStatus")&&x(!0),O&&O){var e=localStorage.getItem("idUser"),t=localStorage.getItem("keyUser");if(e){var a={headers:{"x-auth-token":"".concat(t)}};f.a.get("".concat("https://api-hackernews.herokuapp.com/","api/users/").concat(e),a).then((function(e){w(e.data)})).catch((function(e){e&&console.log(e)}))}}}),[O]);var S=Object(n.useState)(""),_=Object(o.a)(S,2),N=_[0],R=_[1];return Object(d.jsxs)(c.a.Fragment,{children:[Object(d.jsxs)(U.a,{className:e.toolbar,style:{backgroundColor:"#eeeeee"},children:[Object(d.jsx)(C.a,{"aria-describedby":h,variant:"outlined",size:"small",id:"btn",onClick:function(e){j(e.currentTarget)},children:Object(d.jsx)(D.a,{})}),Object(d.jsx)(I.a,{component:"h2",variant:"h5",color:"inherit",align:"center",noWrap:!0,className:e.toolbarTitle,style:{color:"#3d84b8",fontWeight:"bold"},children:Object(d.jsx)(s.c,{to:"/",id:"linkStyle",children:"HACKERNEWS"})}),Object(d.jsx)(s.c,{to:O&&O?"access/user/".concat(v&&v._id):"/access/users",id:"linkStyle",style:{color:"#eeeeee"},children:Object(d.jsx)(C.a,{variant:"outlined",size:"small",id:"btn",children:O&&O?"".concat(v&&v.username):Object(d.jsx)(q.a,{style:{color:"#eeeeee",backgroundColor:"#3d84b8"}})})})]}),Object(d.jsxs)(U.a,{component:"nav",variant:"dense",className:e.toolbarSecondary,children:[Object(d.jsx)(s.c,{to:"/Cyber attacks",id:"linkStyle",children:Object(d.jsx)(E.a,{style:{textTransform:"uppercase"},noWrap:!0,id:"linkStyle",variant:"body2",className:e.toolbarLink,children:"Cyber attacks "})}),Object(d.jsx)(s.c,{to:"/Cyber security",id:"linkStyle",children:Object(d.jsx)(E.a,{style:{textTransform:"uppercase"},noWrap:!0,id:"linkStyle",variant:"body2",className:e.toolbarLink,children:"Cyber security "})}),Object(d.jsx)(s.c,{to:"/Data breaches",id:"linkStyle",children:Object(d.jsx)(E.a,{style:{textTransform:"uppercase"},noWrap:!0,id:"linkStyle",variant:"body2",className:e.toolbarLink,children:"Data breaches "})}),Object(d.jsx)(s.c,{to:"/Vulnerabilities",id:"linkStyle",children:Object(d.jsx)(E.a,{style:{textTransform:"uppercase"},noWrap:!0,id:"linkStyle",variant:"body2",className:e.toolbarLink,children:"Vulnerabilities "})}),Object(d.jsx)(s.c,{to:"/Malware",id:"linkStyle",children:Object(d.jsx)(E.a,{style:{textTransform:"uppercase"},noWrap:!0,id:"linkStyle",variant:"body2",className:e.toolbarLink,children:"Malware "})})]}),Object(d.jsx)("div",{children:Object(d.jsx)(F.a,{id:h,open:g,anchorEl:i,onClose:function(){j(null)},anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"bottom",horizontal:"center"},children:Object(d.jsx)(V.a,{id:"input",placeholder:"Search\u2026",classes:{root:e.inputRoot,input:e.inputInput},inputProps:{"aria-label":"search"},onChange:function(){R(document.querySelector("#input").value)},onKeyPress:function(e){N&&N&&"Enter"===e.key&&(t.push("/".concat(N)),j(null))}})})})]})}var G=a(58),J=a(88),K=a.n(J),Y=a(51),H=a.n(Y),X=Object(W.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function Q(e){var t=e.fetchingPosts,a=X(),c=(Object(l.g)(),Object(n.useContext)(b)),r=Object(o.a)(c,2),i=r[0],s=(r[1],Object(n.useContext)(u)),j=Object(o.a)(s,2),g=(j[0],j[1],Object(n.useState)({title:"",link:"",about:"",author:localStorage.getItem("idUser"),category:""})),p=Object(o.a)(g,2),x=p[0],y=p[1],k=Object(n.useContext)(h),v=Object(o.a)(k,2),_=v[0],N=v[1],R=function(e){y(Object(O.a)(Object(O.a)({},x),{},Object(m.a)({},e.target.name,e.target.value)))},W=function(e){y(Object(O.a)(Object(O.a)({},x),{},{category:e}))};return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(L.a,{component:"main",maxWidth:"s",style:{display:"flex",justifyContent:"center",marginTop:"2%"},children:Object(d.jsxs)("div",{className:a.paper,style:{backgroundColor:"#eeeeee",textAlign:"center",padding:"1%",borderRadius:"2%",margin:0,width:"60%"},children:[Object(d.jsx)(I.a,{component:"h6",variant:"h6",children:"Post your article"}),Object(d.jsxs)("form",{className:a.form,noValidate:!0,children:[Object(d.jsx)(S.a,{margin:"normal",required:!0,fullWidth:!0,id:"title",label:"Title",name:"title",autoComplete:"title",autoFocus:!0,onChange:R}),Object(d.jsx)(S.a,{margin:"normal",required:!0,fullWidth:!0,name:"link",label:"Link",type:"link",id:"link",autoComplete:"link",onChange:R}),Object(d.jsxs)("div",{children:[Object(d.jsx)("p",{children:"Choose the correct category"}),Object(d.jsx)(H.a,{fontSize:"large",className:x.category.includes("Cyber attacks")?"blue":"grey",onClick:function(){return W("Cyber attacks")}}),"Cyber attacks",Object(d.jsx)(H.a,{fontSize:"large",className:x.category.includes("Cyber security")?"blue":"grey",onClick:function(){return W("Cyber security")}}),"Cyber security",Object(d.jsx)(H.a,{fontSize:"large",className:x.category.includes("Data breaches")?"blue":"grey",onClick:function(){return W("Data breaches")}}),"Data breaches",Object(d.jsx)(H.a,{fontSize:"large",className:x.category.includes("Vulnerabilities")?"blue":"grey",onClick:function(){return W("Vulnerabilities")}}),"Vulnerabilities",Object(d.jsx)(H.a,{fontSize:"large",className:x.category.includes("Malware")?"blue":"grey",onClick:function(){return W("Malware")}}),"Malware"]}),Object(d.jsx)(S.a,{margin:"normal",required:!0,fullWidth:!0,id:"about",label:"About",name:"about",autoComplete:"about",autoFocus:!0,onChange:R}),Object(d.jsx)(C.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:a.submit,style:{backgroundColor:"#3d84b8"},onClick:function(e){if(e.preventDefault(),""!==x.title&&""!==x.link&&""!==x.about&&""!==x.category)if(K()(x&&x.link)){if(y(Object(O.a)(Object(O.a)({},x),{},{link:x&&x.link})),i&&i){var a=localStorage.getItem("keyUser"),n={headers:{"x-auth-token":"".concat(a)}},c={title:x&&x.title,link:x&&x.link,author:x&&x.author,about:x&&x.about,tot_likes:0,category:x&&x.category};f.a.post("".concat("https://api-hackernews.herokuapp.com/","api/posts"),c,n).then((function(e){N([e.data].concat(Object(G.a)(_))),t()})).catch((function(e){e&&(console.log(e),window.alert("Post already exists."))}))}}else window.alert("Please enter a valid link (example: https://thehackernews.com/).");else window.alert("Please fill all forms.")},children:"Publish"})]})]})}),Object(d.jsx)(w.a,{})]})}var Z=a(194),$=a(196),ee=a(195),te=a(89),ae=a.n(te),ne=Object(W.a)({root:{minWidth:275},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},pos:{marginBottom:12},title:{fontSize:14}});function ce(){var e="https://api-hackernews.herokuapp.com/",t=ne(),a=Object(l.h)().category,c=Object(n.useContext)(u),r=Object(o.a)(c,2),i=r[0],s=r[1],j=Object(n.useContext)(b),g=Object(o.a)(j,2),p=g[0],m=(g[1],Object(n.useState)()),x=Object(o.a)(m,2),y=x[0],k=x[1],v=Object(n.useContext)(h),w=Object(o.a)(v,2),S=w[0],_=w[1];function N(){fetch("".concat(e,"api/posts")).then((function(e){return e.json()})).then((function(e){return k(e)}))}return Object(n.useEffect)((function(){N()}),[]),Object(n.useEffect)((function(){if(!a&&y&&y)_(y&&y);else if(a){var e=y&&y.filter((function(e){return e.category[0].includes(a)||e.title.toLowerCase().includes(a.toLowerCase())}));_(e)}}),[a,y]),Object(d.jsxs)(d.Fragment,{children:[p&&p?Object(d.jsx)(Q,{fetchingPosts:N}):null,Object(d.jsx)("div",{style:{display:"flex",margin:"2% 15%",flexDirection:"column"},children:S&&S.map((function(a){return Object(d.jsxs)(Z.a,{className:t.root,style:{textAlign:"center",boxShadow:"0px 0px 0px 0px",marginBottom:"2%",border:"1px solid #eeeeee",padding:"0.5%"},children:[Object(d.jsxs)(ee.a,{style:{padding:0},children:[Object(d.jsx)(I.a,{className:t.title,color:"textPrimary",style:{color:"#3d84b8",fontSize:"1.1rem",textTransform:"uppercase"},children:a&&a.title}),Object(d.jsxs)(I.a,{className:t.pos,color:"textSecondary",style:{margin:0},children:[a&&a.category[0],Object(d.jsx)("br",{}),"Posted by ",a&&a.author.username]}),Object(d.jsxs)(I.a,{className:t.pos,color:"textSecondary",style:{margin:0},children:["About: ",a&&a.about]})]}),Object(d.jsxs)($.a,{style:{display:"flex",justifyContent:"center",padding:0},children:[Object(d.jsx)(C.a,{size:"small",id:"btn",target:"blank",href:"".concat(a&&a.link),children:"Read here"}),p&&p?Object(d.jsx)(ae.a,{style:{marginLeft:"10%"},fontSize:"large",onClick:function(){!function(t){var a=i&&i.posts_liked.find((function(e){return e._id===t._id}));if(a){if(a){var n={tot_likes:t.tot_likes-1};f.a.put("".concat(e,"api/posts/likes/").concat(t&&t._id),n).then((function(e){var t=S&&S.map((function(t){return t._id===e.data._id?Object(O.a)(Object(O.a)({},t),{},{tot_likes:e.data.tot_likes}):t}));_(t)})).catch((function(e){e&&console.log(e)}));var c=localStorage.getItem("keyUser"),r={headers:{"x-auth-token":"".concat(c)}},l=i&&i.posts_liked.filter((function(e){return e._id!==t._id}));f.a.put("".concat(e,"api/users/").concat(i&&i._id),{posts_liked:l},r).then((function(e){s(Object(O.a)(Object(O.a)({},i),{},{posts_liked:l})),N()})).catch((function(e){e&&console.log(e)}))}}else{var o={tot_likes:t.tot_likes+1};f.a.put("".concat(e,"api/posts/likes/").concat(t._id),o).then((function(e){var t=S&&S.map((function(t){return t._id===e.data._id?Object(O.a)(Object(O.a)({},t),{},{tot_likes:e.data.tot_likes}):t}));_(t)})).catch((function(e){e&&console.log(e)}));var d=localStorage.getItem("keyUser"),b={headers:{"x-auth-token":"".concat(d)}};f.a.put("".concat(e,"api/users/").concat(i&&i._id),{posts_liked:[t].concat(Object(G.a)(i&&i.posts_liked))},b).then((function(e){s(Object(O.a)(Object(O.a)({},i&&i),{},{posts_liked:[].concat(Object(G.a)(i&&i.posts_liked),[t])})),N()})).catch((function(e){e&&console.log(e)}))}}(a)},className:i&&i.posts_liked.find((function(e){return e._id===a._id}))?"blue":"grey"}):Object(d.jsx)("p",{style:{color:"rgba(0, 0, 0, 0.54)"},children:"likes:"}),Object(d.jsx)("p",{style:{color:"rgba(0, 0, 0, 0.54)"},children:a&&a.tot_likes})]})]})}))})]})}var re=a(93),ie=a.n(re),se=a(92),le=a.n(se),oe=a(91),de=a.n(oe),be=a(94),je=a.n(be),ue=a(95),ge=a.n(ue),he=a(90),pe=a.n(he);function me(){var e=(new Date).getFullYear();return Object(d.jsxs)("footer",{style:{backgroundColor:"#eeeeee",width:"100%",marginTop:"2%"},children:[Object(d.jsx)("br",{}),Object(d.jsxs)("div",{style:{display:"flex",justifyContent:"space-around"},children:[Object(d.jsx)(C.a,{id:"btn",target:"blank",href:"https://github.com/GiuliaGiovannoli/hackernews_challenge",children:"Check the Code"}),Object(d.jsx)(C.a,{id:"btn",target:"blank",href:"https://www.linkedin.com/in/giulia-giovannoli/",children:"Contact the Author"})]}),Object(d.jsxs)("div",{style:{display:"flex",justifyContent:"space-around",marginTop:"2%"},children:[Object(d.jsx)(pe.a,{}),Object(d.jsx)(de.a,{}),Object(d.jsx)(le.a,{}),Object(d.jsx)(ie.a,{}),Object(d.jsx)(je.a,{}),Object(d.jsx)(ge.a,{})]}),Object(d.jsxs)("p",{style:{textAlign:"center"},children:["Copyright \xa9 ",e,"."]})]})}var Oe=a(96),xe=a(197),fe=a(207),ye=a(198),ke=a(205),ve=a(200),Ce=a(203),we=a(199),Se=a(201),_e=a(202),Ne=a(98);function Re(e){var t=e.children,a=e.value,n=e.index,c=Object(Oe.a)(e,["children","value","index"]);return Object(d.jsx)("div",Object(O.a)(Object(O.a)({role:"tabpanel",hidden:a!==n,id:"simple-tabpanel-".concat(n),"aria-labelledby":"simple-tab-".concat(n)},c),{},{children:a===n&&Object(d.jsx)(ke.a,{p:3,children:Object(d.jsx)(I.a,{children:t})})}))}function Ie(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}var We=Object(W.a)((function(e){return{root:{flexGrow:1,backgroundColor:e.palette.background.paper},table:{minWidth:650}}}));function Le(){var e="https://api-hackernews.herokuapp.com/",t=We(),a=c.a.useState(0),r=Object(o.a)(a,2),i=r[0],s=r[1],j=Object(l.g)(),g=Object(n.useContext)(b),h=Object(o.a)(g,2),p=h[0],m=h[1],x=Object(n.useContext)(u),y=Object(o.a)(x,2),k=y[0],v=y[1];var w=Object(n.useState)([]),S=Object(o.a)(w,2),_=S[0],N=S[1];return Object(n.useEffect)((function(){if(localStorage.getItem("logInStatus")&&m(!0),p&&p){var t=localStorage.getItem("idUser"),a=localStorage.getItem("keyUser");if(t){var n={headers:{"x-auth-token":"".concat(a)}};f.a.get("".concat(e,"api/users/").concat(t),n).then((function(e){v(e.data)})).catch((function(e){e&&console.log(e)})),f.a.get("".concat(e,"api/users/oneUser/posts/").concat(t),n).then((function(e){N(e.data[0].postsCreated)})).catch((function(e){e&&console.log(e)}))}}}),[p]),Object(d.jsxs)("div",{className:t.root,children:[p&&Object(d.jsx)(C.a,{id:"btn",style:{float:"right",margin:"2%"},onClick:function(){return localStorage.removeItem("logInStatus"),localStorage.removeItem("idUser"),localStorage.removeItem("keyUser"),m(!1),j.push("/access/users"),void v()},children:"Log out"}),Object(d.jsx)(xe.a,{position:"static",style:{backgroundColor:"#3d84b8",marginTop:"2%"},children:Object(d.jsxs)(fe.a,{value:i,onChange:function(e,t){s(t)},"aria-label":"simple tabs example",children:[Object(d.jsx)(ye.a,Object(O.a)({label:"Profile"},Ie(0))),Object(d.jsx)(ye.a,Object(O.a)({label:"Posts published"},Ie(1))),Object(d.jsx)(ye.a,Object(O.a)({label:"Posts liked"},Ie(2)))]})}),Object(d.jsx)(Re,{value:i,index:0,children:k&&Object(d.jsx)(we.a,{component:Ne.a,children:Object(d.jsx)(ve.a,{className:t.table,"aria-label":"simple table",children:Object(d.jsxs)(Se.a,{children:[Object(d.jsxs)(_e.a,{children:[Object(d.jsx)(Ce.a,{children:"Username:  "}),Object(d.jsxs)(Ce.a,{children:[k.username,"  "]})]}),Object(d.jsxs)(_e.a,{children:[Object(d.jsx)(Ce.a,{children:"Email:  "}),Object(d.jsxs)(Ce.a,{children:[k.email,"  "]})]})]})})})}),Object(d.jsx)(Re,{value:i,index:1,children:Object(d.jsx)(we.a,{component:Ne.a,children:Object(d.jsx)(ve.a,{className:t.table,"aria-label":"simple table",children:Object(d.jsx)(Se.a,{children:_&&_.map((function(e){return Object(d.jsxs)(_e.a,{children:[Object(d.jsx)(Ce.a,{children:"Title:  "}),Object(d.jsxs)(Ce.a,{style:{color:"#3d84b8",fontSize:"1.1rem",textTransform:"uppercase"},children:[" ",e.title," "]}),Object(d.jsxs)(Ce.a,{children:[Object(d.jsx)("a",{id:"linkStyle",target:"blank",href:e.link,children:"Read here  "})," "]})]})}))})})})}),Object(d.jsx)(Re,{value:i,index:2,children:Object(d.jsx)(we.a,{component:Ne.a,children:Object(d.jsx)(ve.a,{className:t.table,"aria-label":"simple table",children:Object(d.jsx)(Se.a,{children:k&&k.posts_liked.map((function(e){return Object(d.jsxs)(_e.a,{children:[Object(d.jsx)(Ce.a,{children:"Title:  "}),Object(d.jsxs)(Ce.a,{style:{color:"#3d84b8",fontSize:"1.1rem",textTransform:"uppercase"},children:[e.title,"  "]}),Object(d.jsxs)(Ce.a,{children:[Object(d.jsx)("a",{id:"linkStyle",target:"blank",href:e.link,children:"Read here  "})," "]})]})}))})})})})]})}a(141);var Pe=function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(s.a,{children:Object(d.jsx)(j,{children:Object(d.jsx)(g,{children:Object(d.jsxs)(p,{children:[Object(d.jsx)(M,{}),Object(d.jsxs)(l.d,{children:[Object(d.jsx)(l.b,{exact:!0,path:"/hackernews_challenge/",component:ce}),Object(d.jsx)(l.b,{exact:!0,path:"/hackernews_challenge/:category",component:ce}),Object(d.jsx)(l.b,{exact:!0,path:"/hackernews_challenge/access/users",component:T}),Object(d.jsx)(l.b,{exact:!0,path:"/hackernews_challenge/access/user/:id",component:Le}),Object(d.jsx)(l.a,{to:"/"})]}),Object(d.jsx)(me,{})]})})})})})};i.a.render(Object(d.jsx)(s.b,{children:Object(d.jsx)(Pe,{})}),document.getElementById("root"))}},[[142,1,2]]]);
//# sourceMappingURL=main.5a0a0051.chunk.js.map