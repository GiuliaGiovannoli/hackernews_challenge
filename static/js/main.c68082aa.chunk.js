(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{119:function(e,t,a){},145:function(e,t,a){},146:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(13),i=a.n(r),s=a(22),o=(a(119),a(14)),l=a(9),j=a(2),b=Object(n.createContext)(),d=function(e){var t=Object(n.useState)(!1),a=Object(l.a)(t,2),c=a[0],r=a[1];return Object(j.jsx)(b.Provider,{value:[c,r],children:e.children})},u=Object(n.createContext)(),g=function(e){var t=Object(n.useState)(),a=Object(l.a)(t,2),c=a[0],r=a[1];return Object(j.jsx)(u.Provider,{value:[c,r],children:e.children})},m=Object(n.createContext)(),h=function(e){var t=Object(n.useState)(),a=Object(l.a)(t,2),c=a[0],r=a[1];return Object(j.jsx)(m.Provider,{value:[c,r],children:e.children})},p=a(40),O=a(10),x=a(24),f=a.n(x),y=a(87),k=a.n(y),v=a(212),C=a(195),S=a(193),w=a(208),_=a(194),N=a(76),R=a.n(N),I=a(149),W=a(189),L=a(191),T=Object(W.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function z(){var e="https://api-hackernews.herokuapp.com/",t=T(),a=Object(o.g)(),c=Object(n.useState)({usernameRegistrering:"",emailRegistrering:"",passwordRegistrering:""}),r=Object(l.a)(c,2),i=r[0],s=r[1],b=function(e){s(Object(O.a)(Object(O.a)({},i),{},Object(p.a)({},e.target.name,e.target.value)))},d=Object(n.useState)({emailLogging:"",passwordLogging:""}),u=Object(l.a)(d,2),g=u[0],m=u[1],h=function(e){m(Object(O.a)(Object(O.a)({},g),{},Object(p.a)({},e.target.name,e.target.value)))};return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)(L.a,{component:"main",maxWidth:"s",id:"column",style:{display:"flex",justifyContent:"space-around",alignContent:"flex-start",color:"#395697"},children:[Object(j.jsx)(S.a,{}),Object(j.jsxs)("div",{className:t.paper,id:"card",style:{backgroundColor:"#eeeeee",textAlign:"center",padding:"2%",borderRadius:"5%"},children:[Object(j.jsx)(v.a,{className:t.avatar,style:{backgroundColor:"#395697"},children:Object(j.jsx)(R.a,{})}),Object(j.jsx)(I.a,{component:"h1",variant:"h5",children:"Sign up"}),Object(j.jsxs)("form",{className:t.form,noValidate:!0,children:[Object(j.jsxs)(_.a,{container:!0,spacing:1,style:{display:"flex",justifyContent:"center"},children:[Object(j.jsx)(_.a,{item:!0,xs:9,sm:10,children:Object(j.jsx)(w.a,{autoComplete:"usernameRegistrering",name:"usernameRegistrering",required:!0,fullWidth:!0,id:"usernameRegistrering",label:"Username",onChange:b})}),Object(j.jsx)(_.a,{item:!0,xs:9,sm:10,children:Object(j.jsx)(w.a,{required:!0,fullWidth:!0,id:"emailRegistrering",label:"Email Address",name:"emailRegistrering",autoComplete:"emailRegistrering",onChange:b})}),Object(j.jsx)(_.a,{item:!0,xs:9,sm:10,children:Object(j.jsx)(w.a,{required:!0,fullWidth:!0,name:"passwordRegistrering",label:"Password",type:"password",id:"passwordRegistrering",autoComplete:"current-password",onChange:b})})]}),Object(j.jsx)(C.a,{type:"submit",variant:"contained",color:"primary",style:{width:"83%",backgroundColor:"#395697"},className:t.submit,onClick:function(t){t.preventDefault(),""!==i.usernameRegistrering&&""!==i.emailRegistrering&&""!==i.passwordRegistrering?k()(i&&i.emailRegistrering)?(s(Object(O.a)(Object(O.a)({},i),{},{emailRegistrering:i&&i.emailRegistrering})),f.a.post("".concat(e,"api/users/register"),{username:i.usernameRegistrering,email:i.emailRegistrering,password:i.passwordRegistrering}).then((function(e){window.alert("You may now log in.")})).catch((function(e){e&&window.alert("User already exists.")}))):window.alert("Please enter a valid email."):window.alert("Please fill all forms.")},children:"Sign Up"})]})]}),Object(j.jsx)(S.a,{}),Object(j.jsxs)("div",{className:t.paper,id:"card",style:{backgroundColor:"#eeeeee",textAlign:"center",padding:"2%",borderRadius:"5%"},children:[Object(j.jsx)(v.a,{className:t.avatar,style:{backgroundColor:"#395697"},children:Object(j.jsx)(R.a,{})}),Object(j.jsx)(I.a,{component:"h1",variant:"h5",children:"Sign in"}),Object(j.jsxs)("form",{className:t.form,noValidate:!0,children:[Object(j.jsx)(w.a,{margin:"normal",required:!0,fullWidth:!0,id:"emailLogging",label:"Email Address",name:"emailLogging",autoComplete:"emailLogging",autoFocus:!0,onChange:h}),Object(j.jsx)(w.a,{margin:"normal",required:!0,fullWidth:!0,name:"passwordLogging",label:"Password",type:"password",id:"passwordLogging",autoComplete:"current-password",onChange:h}),Object(j.jsx)(C.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:t.submit,style:{backgroundColor:"#395697"},onClick:function(t){t.preventDefault(),""!==g.emailLogging&&""!==g.passwordLogging?f.a.post("".concat(e,"api/users/login"),{email:g.emailLogging,password:g.passwordLogging}).then((function(e){var t,n=e.data.user._id;a.push("/access/user/".concat(n)),t=e.data,localStorage.setItem("keyUser",t.token),localStorage.setItem("idUser",t.user._id),localStorage.setItem("logInStatus",!0)})).catch((function(e){e&&window.alert("Wrong credentials.")})):window.alert("Please fill all forms.")},children:"Sign In"})]})]})]}),Object(j.jsx)(S.a,{})]})}var P=a(196),U=a(88),A=a.n(U),F=a(197),D=a(89),E=a.n(D),q=a(210),V=a(213),B=Object(W.a)((function(e){return{toolbar:{borderBottom:"1px solid ".concat(e.palette.divider)},toolbarTitle:{flex:1},toolbarSecondary:{justifyContent:"space-between",overflowX:"auto"},toolbarLink:{padding:e.spacing(1),flexShrink:0},typography:{padding:e.spacing(2)}}}));function M(){var e=B(),t=Object(o.g)(),a=c.a.useState(null),r=Object(l.a)(a,2),i=r[0],d=r[1],g=Boolean(i),m=g?"simple-popover":void 0,h=Object(n.useContext)(b),p=Object(l.a)(h,2),O=p[0],x=p[1],y=Object(n.useContext)(u),k=Object(l.a)(y,2),v=k[0],S=k[1];Object(n.useEffect)((function(){if(localStorage.getItem("logInStatus")&&x(!0),O&&O){var e=localStorage.getItem("idUser"),t=localStorage.getItem("keyUser");if(e){var a={headers:{"x-auth-token":"".concat(t)}};f.a.get("".concat("https://api-hackernews.herokuapp.com/","api/users/").concat(e),a).then((function(e){S(e.data)})).catch((function(e){e&&console.log(e)}))}}}),[O]);var w=Object(n.useState)(""),_=Object(l.a)(w,2),N=_[0],R=_[1];return Object(j.jsxs)(c.a.Fragment,{children:[Object(j.jsxs)(P.a,{className:e.toolbar,style:{backgroundColor:"#395697"},children:[Object(j.jsx)(C.a,{"aria-describedby":m,variant:"outlined",size:"small",id:"btn",onClick:function(e){d(e.currentTarget)},children:Object(j.jsx)(A.a,{style:{color:"#395697"}})}),Object(j.jsx)(I.a,{component:"h2",variant:"h5",color:"inherit",align:"center",noWrap:!0,className:e.toolbarTitle,style:{color:"#eeeeee",fontWeight:"bold"},children:Object(j.jsx)(s.b,{to:"/",id:"linkStyle",children:"HACKERNEWS"})}),Object(j.jsx)(s.b,{to:O&&O?"access/user/".concat(v&&v._id):"/access/users",id:"linkStyle",style:{color:"#395697"},children:Object(j.jsx)(C.a,{variant:"outlined",size:"small",id:"btn",children:O&&O?"".concat(v&&v.username):Object(j.jsx)(E.a,{style:{color:"#395697",backgroundColor:"#eeeeee"}})})})]}),Object(j.jsxs)(P.a,{component:"nav",variant:"dense",className:e.toolbarSecondary,children:[Object(j.jsx)(s.b,{to:"/Cyber attacks",id:"linkStyle",children:Object(j.jsx)(F.a,{style:{textTransform:"uppercase",color:"#F50057"},noWrap:!0,id:"linkStyle",variant:"body2",className:e.toolbarLink,children:"Cyber attacks "})}),Object(j.jsx)(s.b,{to:"/Cyber security",id:"linkStyle",children:Object(j.jsx)(F.a,{style:{textTransform:"uppercase",color:"#F50057"},noWrap:!0,id:"linkStyle",variant:"body2",className:e.toolbarLink,children:"Cyber security "})}),Object(j.jsx)(s.b,{to:"/Data breaches",id:"linkStyle",children:Object(j.jsx)(F.a,{style:{textTransform:"uppercase",color:"#F50057"},noWrap:!0,id:"linkStyle",variant:"body2",className:e.toolbarLink,children:"Data breaches "})}),Object(j.jsx)(s.b,{to:"/Vulnerabilities",id:"linkStyle",children:Object(j.jsx)(F.a,{style:{textTransform:"uppercase",color:"#F50057"},noWrap:!0,id:"linkStyle",variant:"body2",className:e.toolbarLink,children:"Vulnerabilities "})}),Object(j.jsx)(s.b,{to:"/Malware",id:"linkStyle",children:Object(j.jsx)(F.a,{style:{textTransform:"uppercase",color:"#F50057"},noWrap:!0,id:"linkStyle",variant:"body2",className:e.toolbarLink,children:"Malware "})})]}),Object(j.jsx)("div",{children:Object(j.jsx)(q.a,{id:m,open:g,anchorEl:i,onClose:function(){d(null)},anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"bottom",horizontal:"center"},children:Object(j.jsx)(V.a,{id:"input",placeholder:"Search\u2026",classes:{root:e.inputRoot,input:e.inputInput},inputProps:{"aria-label":"search"},onChange:function(){R(document.querySelector("#input").value)},onKeyPress:function(e){N&&N&&"Enter"===e.key&&(t.push("/".concat(N)),d(null))}})})})]})}var G=a(58),Y=a(90),J=a.n(Y),K=a(51),H=a.n(K),X=Object(W.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function Q(e){var t=e.fetchingPosts,a=X(),c=(Object(o.g)(),new Date),r=Object(n.useContext)(b),i=Object(l.a)(r,2),s=i[0],d=(i[1],Object(n.useContext)(u)),g=Object(l.a)(d,2),h=g[0],x=(g[1],Object(n.useState)({title:"",link:"",date_published:c,about:"",author:h&&h.username,category:""})),y=Object(l.a)(x,2),k=y[0],v=y[1],_=Object(n.useContext)(m),N=Object(l.a)(_,2),R=N[0],W=N[1],T=function(e){v(Object(O.a)(Object(O.a)({},k),{},Object(p.a)({},e.target.name,e.target.value)))},z=function(e){v(Object(O.a)(Object(O.a)({},k),{},{category:e}))};return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(L.a,{component:"main",maxWidth:"s",style:{display:"flex",justifyContent:"center",marginTop:"2%"},children:Object(j.jsxs)("div",{className:a.paper,style:{backgroundColor:"#eeeeee",textAlign:"center",padding:"1%",borderRadius:"2%",margin:0,width:"60%"},children:[Object(j.jsx)(I.a,{component:"h6",variant:"h6",style:{textAlign:"center",color:"#395697",fontWeigth:"bold",fontSize:"1.1rem",textTransform:"uppercase"},children:Object(j.jsx)("h4",{children:"POST YOUR ARTICLE"})}),Object(j.jsxs)("form",{className:a.form,noValidate:!0,children:[Object(j.jsx)(w.a,{margin:"normal",required:!0,fullWidth:!0,id:"title",label:"Title",name:"title",autoComplete:"title",autoFocus:!0,onChange:T,style:{margin:0}}),Object(j.jsx)(w.a,{margin:"normal",required:!0,fullWidth:!0,name:"link",label:"Link",type:"link",id:"link",autoComplete:"link",onChange:T,style:{margin:0}}),Object(j.jsx)(w.a,{margin:"normal",required:!0,fullWidth:!0,id:"about",label:"About",name:"about",autoComplete:"about",autoFocus:!0,onChange:T,style:{margin:0}}),Object(j.jsxs)("div",{children:[Object(j.jsx)("p",{style:{color:"rgba(0, 0, 0, 0.54)",fontSize:"1.1rem",textAlign:"left"},children:"Choose the correct category*"}),Object(j.jsxs)("div",{style:{display:"flex",alignItems:"baseline"},children:[Object(j.jsx)(H.a,{fontSize:"medium",className:k.category.includes("Cyber attacks")?"blue":"grey",onClick:function(){return z("Cyber attacks")}}),Object(j.jsx)("p",{style:{color:"rgba(0, 0, 0, 0.54)",fontSize:"1.1rem",marginRight:"2%"},children:"Cyber attacks"}),Object(j.jsx)(H.a,{fontSize:"medium",className:k.category.includes("Cyber security")?"blue":"grey",onClick:function(){return z("Cyber security")}}),Object(j.jsx)("p",{style:{color:"rgba(0, 0, 0, 0.54)",fontSize:"1.1rem",marginRight:"2%"},children:"Cyber security"}),Object(j.jsx)(H.a,{fontSize:"medium",className:k.category.includes("Data breaches")?"blue":"grey",onClick:function(){return z("Data breaches")}}),Object(j.jsx)("p",{style:{color:"rgba(0, 0, 0, 0.54)",fontSize:"1.1rem",marginRight:"2%"},children:"Data breaches"}),Object(j.jsx)(H.a,{fontSize:"medium",className:k.category.includes("Vulnerabilities")?"blue":"grey",onClick:function(){return z("Vulnerabilities")}}),Object(j.jsx)("p",{style:{color:"rgba(0, 0, 0, 0.54)",fontSize:"1.1rem",marginRight:"2%"},children:"Vulnerabilities"}),Object(j.jsx)(H.a,{fontSize:"medium",className:k.category.includes("Malware")?"blue":"grey",onClick:function(){return z("Malware")}}),Object(j.jsx)("p",{style:{color:"rgba(0, 0, 0, 0.54)",fontSize:"1.1rem",marginRight:"2%"},children:"Malware"})]}),Object(j.jsx)("hr",{})]}),Object(j.jsx)(C.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:a.submit,style:{backgroundColor:"#395697"},onClick:function(e){if(e.preventDefault(),""!==k.title&&""!==k.link&&""!==k.about&&""!==k.category)if(J()(k&&k.link)){if(v(Object(O.a)(Object(O.a)({},k),{},{link:k&&k.link})),s&&s){var a=localStorage.getItem("keyUser"),n={headers:{"x-auth-token":"".concat(a)}},c={title:k&&k.title,link:k&&k.link,date_published:k&&k.date_published,author:k&&k.author,about:k&&k.about,tot_likes:0,category:k&&k.category};f.a.post("".concat("https://api-hackernews.herokuapp.com/","api/posts"),c,n).then((function(e){W([e.data].concat(Object(G.a)(R))),t()})).catch((function(e){e&&(console.log(e),window.alert("Post already exists."))}))}}else window.alert("Please enter a valid link (example: https://thehackernews.com/).");else window.alert("Please fill all forms.")},children:"Publish"})]})]})}),Object(j.jsx)(S.a,{})]})}var Z=a(198),$=a(200),ee=a(199),te=a(67),ae=a.n(te),ne=a(66),ce=a.n(ne),re=a(91),ie=a.n(re),se=Object(W.a)({root:{minWidth:275},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},pos:{marginBottom:12},title:{fontSize:14}});function oe(){var e="https://api-hackernews.herokuapp.com/",t=se(),a=Object(o.h)().category,c=Object(n.useContext)(u),r=Object(l.a)(c,2),i=r[0],s=r[1],d=Object(n.useContext)(b),g=Object(l.a)(d,2),h=g[0],p=(g[1],Object(n.useState)()),x=Object(l.a)(p,2),y=x[0],k=x[1],v=Object(n.useContext)(m),C=Object(l.a)(v,2),S=C[0],w=C[1];function _(){fetch("".concat(e,"api/posts")).then((function(e){return e.json()})).then((function(e){return k(e)}))}return Object(n.useEffect)((function(){_()}),[]),Object(n.useEffect)((function(){if(!a&&y&&y)w(y&&y);else if(a){var e=y&&y.filter((function(e){return e.category[0].includes(a)||e.title.toLowerCase().includes(a.toLowerCase())}));w(e)}}),[a,y]),Object(j.jsxs)(j.Fragment,{children:[h&&h?Object(j.jsx)(Q,{fetchingPosts:_}):null,Object(j.jsx)("div",{style:{display:"flex",margin:"2% 15%",flexDirection:"column"},children:S&&S.map((function(a){return Object(j.jsxs)(Z.a,{className:t.root,style:{textAlign:"center",boxShadow:"0px 0px 0px 0px",marginBottom:"2%",border:"2px solid #eeeeee",padding:"0.5%"},children:[Object(j.jsxs)(ee.a,{style:{padding:0},children:[Object(j.jsx)(I.a,{className:t.title,color:"textPrimary",style:{color:"#395697",fontSize:"1.1rem",textTransform:"uppercase"},children:Object(j.jsx)("a",{id:"aStyle",target:"blank",href:"".concat(a&&a.link),children:a&&a.title})}),Object(j.jsxs)(I.a,{className:t.pos,color:"textSecondary",style:{margin:0},children:[a&&a.category[0],Object(j.jsx)("br",{}),Object(j.jsx)(ce.a,{style:{marginBottom:"-0.5%"}}),a&&a.author,Object(j.jsx)(ie.a,{style:{marginBottom:"-0.5%",marginLeft:"2%"}}),a&&a.date_published.slice(0,10)]}),Object(j.jsxs)(I.a,{className:t.pos,color:"textSecondary",style:{margin:0},children:["About: ",a&&a.about]})]}),Object(j.jsxs)($.a,{style:{display:"flex",justifyContent:"center",padding:0},children:[h&&h?Object(j.jsx)(ae.a,{fontSize:"large",onClick:function(){!function(t){var a=i&&i.posts_liked.find((function(e){return e._id===t._id}));if(a){if(a){var n={tot_likes:t.tot_likes-1};f.a.put("".concat(e,"api/posts/likes/").concat(t&&t._id),n).then((function(e){var t=S&&S.map((function(t){return t._id===e.data._id?Object(O.a)(Object(O.a)({},t),{},{tot_likes:e.data.tot_likes}):t}));w(t)})).catch((function(e){e&&console.log(e)}));var c=localStorage.getItem("keyUser"),r={headers:{"x-auth-token":"".concat(c)}},o=i&&i.posts_liked.filter((function(e){return e._id!==t._id}));f.a.put("".concat(e,"api/users/").concat(i&&i._id),{posts_liked:o},r).then((function(e){s(Object(O.a)(Object(O.a)({},i),{},{posts_liked:o})),_()})).catch((function(e){e&&console.log(e)}))}}else{var l={tot_likes:t.tot_likes+1};f.a.put("".concat(e,"api/posts/likes/").concat(t._id),l).then((function(e){var t=S&&S.map((function(t){return t._id===e.data._id?Object(O.a)(Object(O.a)({},t),{},{tot_likes:e.data.tot_likes}):t}));w(t)})).catch((function(e){e&&console.log(e)}));var j=localStorage.getItem("keyUser"),b={headers:{"x-auth-token":"".concat(j)}};f.a.put("".concat(e,"api/users/").concat(i&&i._id),{posts_liked:[t].concat(Object(G.a)(i&&i.posts_liked))},b).then((function(e){s(Object(O.a)(Object(O.a)({},i&&i),{},{posts_liked:[].concat(Object(G.a)(i&&i.posts_liked),[t])})),_()})).catch((function(e){e&&console.log(e)}))}}(a)},className:i&&i.posts_liked.find((function(e){return e._id===a._id}))?"blue":"grey"}):Object(j.jsx)("p",{style:{color:"rgba(0, 0, 0, 0.54)"},children:"likes:"}),Object(j.jsx)("p",{style:{color:"rgba(0, 0, 0, 0.54)"},children:a&&a.tot_likes})]})]})}))})]})}var le=a(95),je=a.n(le),be=a(94),de=a.n(be),ue=a(93),ge=a.n(ue),me=a(96),he=a.n(me),pe=a(97),Oe=a.n(pe),xe=a(92),fe=a.n(xe);function ye(){var e=(new Date).getFullYear();return Object(j.jsxs)("footer",{style:{backgroundColor:"#eeeeee",width:"100%",marginTop:"2%"},children:[Object(j.jsx)("br",{}),Object(j.jsxs)("div",{style:{display:"flex",justifyContent:"space-around"},children:[Object(j.jsx)(C.a,{id:"abtn",target:"blank",href:"https://github.com/GiuliaGiovannoli/hackernews_challenge",children:"Check the Code"}),Object(j.jsx)(C.a,{id:"abtn",target:"blank",href:"https://www.linkedin.com/in/giulia-giovannoli/",children:"Contact the Author"})]}),Object(j.jsxs)("div",{style:{display:"flex",justifyContent:"space-around",marginTop:"2%"},children:[Object(j.jsx)(fe.a,{style:{color:"#395697"}}),Object(j.jsx)(ge.a,{style:{color:"#395697"}}),Object(j.jsx)(de.a,{style:{color:"#395697"}}),Object(j.jsx)(je.a,{style:{color:"#395697"}}),Object(j.jsx)(he.a,{style:{color:"#395697"}}),Object(j.jsx)(Oe.a,{style:{color:"#395697"}})]}),Object(j.jsxs)("p",{style:{textAlign:"center"},children:["Copyright \xa9 ",e,"."]})]})}var ke=a(100),ve=a(201),Ce=a(211),Se=a(202),we=a(209),_e=a(204),Ne=a(207),Re=a(203),Ie=a(205),We=a(206),Le=a(102),Te=a(98),ze=a.n(Te),Pe=a(99),Ue=a.n(Pe);function Ae(e){var t=e.children,a=e.value,n=e.index,c=Object(ke.a)(e,["children","value","index"]);return Object(j.jsx)("div",Object(O.a)(Object(O.a)({role:"tabpanel",hidden:a!==n,id:"simple-tabpanel-".concat(n),"aria-labelledby":"simple-tab-".concat(n)},c),{},{children:a===n&&Object(j.jsx)(we.a,{p:3,children:Object(j.jsx)(I.a,{children:t})})}))}function Fe(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}var De=Object(W.a)((function(e){return{root:{flexGrow:1,backgroundColor:e.palette.background.paper},table:{minWidth:650}}}));function Ee(){var e="https://api-hackernews.herokuapp.com/",t=De(),a=c.a.useState(0),r=Object(l.a)(a,2),i=r[0],s=r[1],d=Object(o.g)(),g=Object(n.useContext)(b),m=Object(l.a)(g,2),h=m[0],p=m[1],x=Object(n.useContext)(u),y=Object(l.a)(x,2),k=y[0],v=y[1];var S=Object(n.useState)([]),w=Object(l.a)(S,2),_=w[0],N=w[1];return Object(n.useEffect)((function(){if(localStorage.getItem("logInStatus")&&p(!0),h&&h){var t=localStorage.getItem("idUser"),a=localStorage.getItem("keyUser");if(t){var n={headers:{"x-auth-token":"".concat(a)}};f.a.get("".concat(e,"api/users/").concat(t),n).then((function(e){v(e.data)})).catch((function(e){e&&console.log(e)})),f.a.get("".concat(e,"api/users/oneUser/posts/").concat(t),n).then((function(e){N(e.data[0].postsCreated)})).catch((function(e){e&&console.log(e)}))}}}),[h]),Object(j.jsxs)("div",{className:t.root,children:[h&&Object(j.jsx)(C.a,{id:"abtn",style:{float:"right",margin:"2%"},onClick:function(){return localStorage.removeItem("logInStatus"),localStorage.removeItem("idUser"),localStorage.removeItem("keyUser"),p(!1),d.push("/access/users"),void v()},children:"Log out"}),Object(j.jsx)(ve.a,{position:"static",style:{backgroundColor:"#395697",marginTop:"2%"},children:Object(j.jsxs)(Ce.a,{value:i,onChange:function(e,t){s(t)},"aria-label":"simple tabs example",children:[Object(j.jsx)(Se.a,Object(O.a)({label:"Profile"},Fe(0))),Object(j.jsx)(Se.a,Object(O.a)({label:"Posts published"},Fe(1))),Object(j.jsx)(Se.a,Object(O.a)({label:"Posts liked"},Fe(2)))]})}),Object(j.jsx)(Ae,{value:i,index:0,children:k&&Object(j.jsx)(Re.a,{component:Le.a,children:Object(j.jsx)(_e.a,{className:t.table,"aria-label":"simple table",children:Object(j.jsxs)(Ie.a,{children:[Object(j.jsxs)(We.a,{children:[Object(j.jsx)(Ne.a,{children:Object(j.jsx)(ce.a,{})}),Object(j.jsx)(Ne.a,{children:k.username})]}),Object(j.jsxs)(We.a,{children:[Object(j.jsx)(Ne.a,{children:Object(j.jsx)(ze.a,{})}),Object(j.jsxs)(Ne.a,{children:[k.email,"  "]})]})]})})})}),Object(j.jsx)(Ae,{value:i,index:1,children:Object(j.jsx)(Re.a,{component:Le.a,children:Object(j.jsx)(_e.a,{className:t.table,"aria-label":"simple table",children:Object(j.jsx)(Ie.a,{children:_&&_.map((function(e){return Object(j.jsxs)(We.a,{children:[Object(j.jsx)(Ne.a,{children:Object(j.jsx)(Ue.a,{})}),Object(j.jsx)(Ne.a,{style:{color:"#395697",fontSize:"1.1rem",textTransform:"uppercase"},children:Object(j.jsx)("a",{id:"aStyle",target:"blank",href:e.link,children:e.title})})]})}))})})})}),Object(j.jsx)(Ae,{value:i,index:2,children:Object(j.jsx)(Re.a,{component:Le.a,children:Object(j.jsx)(_e.a,{className:t.table,"aria-label":"simple table",children:Object(j.jsx)(Ie.a,{children:k&&k.posts_liked.map((function(e){return Object(j.jsxs)(We.a,{children:[Object(j.jsx)(Ne.a,{children:Object(j.jsx)(ae.a,{})}),Object(j.jsx)(Ne.a,{style:{color:"#395697",fontSize:"1.1rem",textTransform:"uppercase"},children:Object(j.jsx)("a",{id:"aStyle",target:"blank",href:e.link,children:e.title})})]})}))})})})})]})}a(145);var qe=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(d,{children:Object(j.jsx)(g,{children:Object(j.jsxs)(h,{children:[Object(j.jsx)(M,{}),Object(j.jsxs)(o.d,{children:[Object(j.jsx)(o.b,{exact:!0,path:"/",component:oe}),Object(j.jsx)(o.b,{exact:!0,path:"/:category",component:oe}),Object(j.jsx)(o.b,{exact:!0,path:"/access/users",component:z}),Object(j.jsx)(o.b,{exact:!0,path:"/access/user/:id",component:Ee}),Object(j.jsx)(o.a,{to:"/"})]}),Object(j.jsx)(ye,{})]})})})})};i.a.render(Object(j.jsx)(s.a,{children:Object(j.jsx)(qe,{})}),document.getElementById("root"))}},[[146,1,2]]]);
//# sourceMappingURL=main.c68082aa.chunk.js.map