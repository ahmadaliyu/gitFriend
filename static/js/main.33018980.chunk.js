(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{47:function(e,t){},54:function(e,t,n){e.exports=n(73)},66:function(e,t,n){},68:function(e,t,n){e.exports=n.p+"static/media/logo.06e73328.svg"},69:function(e,t,n){},73:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(9),o=n(41),i=n.n(o),l=(n(66),n(68),n(69),n(31)),s=n.n(l),u=n(36),m=n(10),p=n(91),d=n(92),f=n(90),h=n(87),g=n(84),E=Object(g.a)({mainContainer:{padding:0,margin:0,display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh",backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"},searchForm:{display:"flex",justifyContent:"flex-start",flexDirection:"column",alignItems:"center",background:"#fff",borderRadius:"20px",height:"25vh",padding:"5vh 15vw",paddingTop:"10vh"},inputContainer:{display:"flex",alignItems:"center",flexDirection:"column",justifyContent:"space-around",width:"90%",height:"50%",marginTop:"3vh"},btn:{padding:"0.5vh 4.5vw",marginTop:"3vh"},btnGroup:{padding:"2.5vh 4.5vw",marginTop:"3vh"},btn1:{margin:"1vw"}}),b=n(46),v=n(7),y=Object(b.a)({reducerPath:"gitApi",baseQuery:Object(v.d)({baseUrl:"https://api.github.com/users"}),endpoints:function(e){return{fetchRepos:e.mutation({query:function(e){return"/".concat(e,"/repos")},transformResponse:function(e){return e}}),fetchOrganizations:e.mutation({query:function(e){return"/".concat(e,"/orgs")},transformResponse:function(e){return e}})}}}),O=y.useFetchReposMutation,w=y.useFetchOrganizationsMutation,j=n(1),x=function(e){var t=E(e),n=Object(a.useState)(""),c=Object(m.a)(n,2),o=c[0],i=c[1],l=Object(a.useState)("repos"),g=Object(m.a)(l,2),b=g[0],v=g[1],y=O(),x=Object(m.a)(y,2),k=x[0],z=x[1],A=z.isLoading,C=(z.data,z.error),N=w(),F=Object(m.a)(N,2),R=F[0],S=F[1],D=S.isLoading,T=(S.data,S.error),I=(S.isFetching,Object(a.useRef)()),P=Object(a.useRef)();Object(a.useEffect)(function(){I.current.focus()},[]);var B=Object(j.f)(),L=function(){var e=Object(u.a)(s.a.mark(function e(){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k(o).unwrap().then(function(e){B("/user-repositories",{state:{repo:e}})}).catch(function(e){console.log(e)});case 2:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),Y=function(){var e=Object(u.a)(s.a.mark(function e(t){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R(o).unwrap().then(function(e){B("/user-organizations",{state:{orgs:e}})}).catch(function(e){console.log(e)});case 2:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,"repos"===b?r.a.createElement("h3",null,"Find your github repositories"):r.a.createElement("h3",null,"Find your github Organizations")),r.a.createElement("div",{className:t.btnGroup},r.a.createElement(p.a,{onClick:function(){v("repos")},className:t.btn1,variant:"contained",color:"primary"},"Repos"),r.a.createElement(p.a,{onClick:function(){v("orgs")},className:"btn2",variant:"contained",color:"secondary"},"Organizations")),r.a.createElement(d.a,{className:t.searchForm},r.a.createElement(f.a,{className:t.inputContainer},r.a.createElement("input",{type:"email",name:"email",ref:I,className:"username",onKeyDown:function(e){"Enter"===e.key&&"email"===e.target.name&&P.current.focus()},placeholder:"Enter GitHub Username",value:o,onChange:function(e){return i(e.target.value)}}),C&&r.a.createElement("p",{style:{color:"red",fontSize:"15px"}},C.data.message),T&&r.a.createElement("p",{style:{color:"red",fontSize:"15px"}},T.data.message),r.a.createElement(p.a,{disabled:0===o.length,className:t.btn,variant:"contained",color:"primary",name:"Submit",ref:P,onClick:"repos"===b?L:Y},"Search",A&&r.a.createElement(h.a,{size:"15px",className:"loader",color:"inherit"}),D&&r.a.createElement(h.a,{size:"15px",className:"loader",color:"inherit"})))))};var k=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement(x,null)))},z=function(e){e&&e instanceof Function&&n.e(1).then(n.bind(null,88)).then(function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),a(e),r(e),c(e),o(e)})},A=n(24),C=n(47),N=n.n(C);var F=function(){var e=Object(j.e)().state.repo;return r.a.createElement("div",{style:{margin:"5%"}},r.a.createElement("h3",null,"Your repositories"),!0===Array.isArray(e)&&0===e.length&&r.a.createElement("h4",null,"You don't have any repository"),!0===Array.isArray(e)&&r.a.createElement("div",{style:{display:"flex",flexDirection:"column",width:"90%",height:"50%",top:"10%",right:"40%"}},e.map(function(e){return r.a.createElement("li",{key:e.id},e.name)})),r.a.createElement("a",{className:"App-link",href:"/",target:"_blank",rel:"noopener noreferrer"},"Back to search"))};var R=function(){var e=Object(j.e)().state.orgs;return r.a.createElement("div",{style:{margin:"5%"}},r.a.createElement("h3",null,"Your Organizations"),!0===Array.isArray(e)&&0===e.length&&r.a.createElement("p",null,"You don't belong to any Organization"),!0===Array.isArray(e)&&r.a.createElement("div",{style:{display:"flex",flexDirection:"column",width:"90%",height:"50%",top:"10%",right:"40%"}},e.map(function(e){return r.a.createElement("li",{key:e.id},e.name)})),r.a.createElement("a",{className:"App-link",href:"/",target:"_blank",rel:"noopener noreferrer"},"Back to search"))},S=function(e){return r.a.createElement(A.a,null,r.a.createElement(j.c,null,r.a.createElement(j.a,{path:"/",element:r.a.createElement(k,null)}),r.a.createElement(j.a,{path:"/user-repositories",element:r.a.createElement(F,null)}),r.a.createElement(j.a,{path:"/user-organizations",element:r.a.createElement(R,null)}),r.a.createElement(j.a,{path:"/*",element:r.a.createElement(N.a,null)})))},D=n(48),T=n(3),I=Object(T.a)({reducer:Object(D.a)({},y.reducerPath,y.reducer),middleware:function(e){return e().concat(y.middleware)}});Object(v.e)(I.dispatch);var P=I;i.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(c.a,{store:P},r.a.createElement(S,null)))),z()}},[[54,3,2]]]);
//# sourceMappingURL=main.33018980.chunk.js.map