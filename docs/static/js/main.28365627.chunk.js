/*! For license information please see main.28365627.chunk.js.LICENSE.txt */
(this["webpackJsonp05-hooks-app"]=this["webpackJsonp05-hooks-app"]||[]).push([[0],{35:function(e,t,c){},46:function(e,t,c){"use strict";c.r(t);var n=c(0),o=c(1),a=c.n(o),r=c(16),s=c.n(r),i=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,58)).then((function(t){var c=t.getCLS,n=t.getFID,o=t.getFCP,a=t.getLCP,r=t.getTTFB;c(e),n(e),o(e),a(e),r(e)}))},j=(c(35),c(3)),l=c(8),u=c(4),b="/countercustomhook",d="/formcustomhook",h="/multiplecustomhooks",O="/userefreal",x="/uselayout",m="/memos",f="/memochallenge",p="/usereduce",v="/usecontext",g=function(){return Object(n.jsxs)("div",{className:"home",children:[Object(n.jsx)("h1",{children:"HOOKS APP"}),Object(n.jsx)("h3",{children:"Project by Cristina Picatoste"})]})},C=function(e){var t=Object(o.useState)({data:null,loading:!0,error:null}),c=Object(j.a)(t,2),n=c[0],a=c[1],r=Object(o.useRef)(!0);return Object(o.useEffect)((function(){return function(){r.current=!1}}),[]),Object(o.useEffect)((function(){a({data:null,loading:!0,error:null}),fetch(e).then((function(e){return e.json()})).then((function(e){r.current?a({loading:!1,error:null,data:e}):console.log("setState not called")})).catch(a({loading:!1,error:!0,data:null}))}),[e]),n},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,t=Object(o.useState)(e),c=Object(j.a)(t,2),n=c[0],a=c[1],r=function(){a(e)},s=function(){a(n+1)},i=function(){a(n-1)};return{reset:r,counter:n,inc:s,dec:i}},N=function(){var e=k(1),t=e.counter,c=e.inc,o=C("https://www.breakingbadapi.com/api/quotes/".concat(t)),a=o.loading,r=o.data,s=C("https://www.breakingbadapi.com/api/quotes");return console.log(s),Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{children:"UseFetch"}),Object(n.jsx)("h3",{children:"Breaking Bad Quotes"}),a?Object(n.jsx)("div",{children:"Loading..."}):Object(n.jsx)("blockquote",{children:r&&r.length&&Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("p",{children:Object(n.jsx)("em",{children:r[0].quote})}),Object(n.jsx)("h5",{children:r[0].author}),Object(n.jsx)("h6",{children:r[0].quote_id}),Object(n.jsx)("hr",{})," "]})}),Object(n.jsx)("button",{onClick:c,children:"Next quote"})]})},y=c(14),S=c(6),w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(o.useState)(e),c=Object(j.a)(t,2),n=c[0],a=c[1],r=function(){a(e)},s=function(e){var t=e.target;a(Object(S.a)(Object(S.a)({},n),{},Object(y.a)({},t.name,t.value)))};return[n,s,r]},F=function(){var e=w({name:"",email:"",password:""}),t=Object(j.a)(e,2),c=t[0],o=t[1],a=c.name,r=c.email,s=c.password;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("h1",{children:"Form Custom Hook"}),Object(n.jsxs)("div",{children:[Object(n.jsx)("input",{type:"text",name:"name",autoComplete:"off",value:a,onChange:o,placeholder:"Name"}),Object(n.jsx)("input",{type:"text",name:"email",autoComplete:"off",value:r,onChange:o,placeholder:"E-mail"}),Object(n.jsx)("input",{type:"password",name:"password",autoComplete:"off",value:s,onChange:o,placeholder:"Password"}),Object(n.jsx)("button",{type:"submit",onClick:function(){console.log(c)},className:"blue",children:"Guardar"})]})]})},E=function(){var e=Object(o.useState)({name:"",email:""}),t=Object(j.a)(e,2),c=t[0],a=t[1],r=c.name,s=c.email;Object(o.useEffect)((function(){return console.log("hey")}),[]),Object(o.useEffect)((function(){return console.log("formState cambi\xf3")}),[c]),Object(o.useEffect)((function(){return console.log("email actualizado")}),[s]);var i=function(e){var t=e.target;a(Object(S.a)(Object(S.a)({},c),{},Object(y.a)({},t.name,t.value))),console.log(c)};return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("h1",{children:"UseEffect"}),Object(n.jsx)("input",{type:"text",name:"name",autoComplete:"off",value:r,onChange:i,placeholder:"Name"}),Object(n.jsx)("input",{type:"text",name:"email",autoComplete:"off",value:s,onChange:i,placeholder:"E-mail"})]})},U=function(){var e=Object(o.useState)({counter1:10,counter2:20,counter3:30,counter4:40,counter5:50,counter6:60}),t=Object(j.a)(e,2),c=t[0],a=t[1];return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("h1",{children:["Counter 1 ",c.counter1]}),Object(n.jsxs)("h1",{children:["Counter 2 ",c.counter2]}),Object(n.jsx)("button",{onClick:function(){a(Object(S.a)(Object(S.a)({},c),{},{counter1:c.counter1+1}))},children:"+1"})]})},R=function(){var e=k(100),t=e.reset,c=e.counter,o=e.inc,a=e.dec;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("h1",{children:"Counter Hook:"}),Object(n.jsx)("h2",{children:c}),Object(n.jsx)("button",{className:"add",onClick:o,children:"+1"}),Object(n.jsx)("button",{onClick:t,children:"Reset"}),Object(n.jsx)("button",{className:"add",onClick:a,children:"-1"})]})},T=function(){return Object(n.jsxs)("nav",{children:[Object(n.jsx)(l.b,{exact:!0,activeClassName:"activeNav",to:"/",children:"Home"}),Object(n.jsx)(l.b,{exact:!0,activeClassName:"activeNav",to:b,children:"Counter"}),Object(n.jsx)(l.b,{exact:!0,activeClassName:"activeNav",to:d,children:"Form"}),Object(n.jsx)(l.b,{exact:!0,activeClassName:"activeNav",to:h,children:"Fetch"}),Object(n.jsx)(l.b,{exact:!0,activeClassName:"activeNav",to:O,children:"UseRef"}),Object(n.jsx)(l.b,{exact:!0,activeClassName:"activeNav",to:x,children:"UseLayout"}),Object(n.jsx)(l.b,{exact:!0,activeClassName:"activeNav",to:m,children:"UseMemo"}),Object(n.jsx)(l.b,{exact:!0,activeClassName:"activeNav",to:f,children:"Challenge"}),Object(n.jsx)(l.b,{exact:!0,activeClassName:"activeNav",to:p,children:"UseReducer"}),Object(n.jsx)(l.b,{exact:!0,activeClassName:"activeNav",to:v,children:"UseContext"})]})},q=function(){var e=Object(o.useRef)(),t=Object(o.useState)(!1),c=Object(j.a)(t,2),a=c[0],r=c[1];return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("h1",{children:"Focus / Select with useRef"}),Object(n.jsx)("input",{placeholder:"Name"}),Object(n.jsx)("button",{onClick:function(){e.current.select()},children:"Focus"}),Object(n.jsx)("hr",{}),Object(n.jsx)("h1",{children:"Real Example useRef"}),a&&Object(n.jsx)(N,{}),Object(n.jsx)("button",{onClick:function(){return r(!a)},children:"Show/Hide"})]})},L=function(){var e=k(1),t=e.counter,c=e.inc,a=C("https://www.breakingbadapi.com/api/quotes/".concat(t)).data,r=(!!a&&a[0]).quote,s=Object(o.useRef)(),i=Object(o.useState)({}),l=Object(j.a)(i,2),u=l[0],b=l[1];return Object(o.useLayoutEffect)((function(){return function(){b(s.current.getBoundingClientRect())}}),[r]),Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{children:"Use Layout Effect"}),Object(n.jsx)("h3",{children:"Breaking Bad Quotes"}),Object(n.jsxs)("blockquote",{children:[Object(n.jsx)("p",{ref:s,children:Object(n.jsx)("em",{children:r})}),Object(n.jsx)("hr",{})]}),Object(n.jsx)("pre",{children:JSON.stringify(u,null,3)}),Object(n.jsx)("button",{onClick:c,children:"Next quote"})]})},H=a.a.memo((function(e){var t=e.value;return console.log("soy un memo SMALL"),Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("small",{children:t})})})),J=function(){var e=k(500),t=e.counter,c=e.inc,a=Object(o.useState)(!0),r=Object(j.a)(a,2),s=r[0],i=r[1],l=Object(o.useMemo)((function(){return function(e){for(var t=0;t<e;t++)console.log("Ah\xed vamos...");return"".concat(e," iteraciones realizadas.")}(t)}),[t]);return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("h1",{children:"Memo Hook"}),Object(n.jsxs)("h3",{children:["Counter:",Object(n.jsx)("small",{children:t})]}),Object(n.jsx)("p",{children:l}),Object(n.jsx)("button",{onClick:c,className:"add",children:"+1"}),Object(n.jsxs)("button",{onClick:function(){return i(!s)},children:["Show/Hide ",JSON.stringify(s)]})]})},P=a.a.memo((function(e){var t=e.increment;return console.log("Generated again"),Object(n.jsx)("button",{onClick:function(){return t(5)},children:"Increment"})})),B=function(){var e=Object(o.useState)(10),t=Object(j.a)(e,2),c=t[0],a=t[1],r=Object(o.useCallback)((function(e){a((function(t){return t+e}))}),[a]);return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("h1",{children:["Callback Hook: ",c]}),Object(n.jsx)(P,{increment:r})]})},M=function(){var e=k(10),t=e.counter,c=e.inc,a=Object(o.useState)(!0),r=Object(j.a)(a,2),s=r[0],i=r[1];return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("h1",{children:"Memorize"}),Object(n.jsxs)("h3",{children:["Counter: ",Object(n.jsx)(H,{value:t})]}),Object(n.jsx)("button",{onClick:c,className:"add",children:"+1"}),Object(n.jsxs)("button",{onClick:function(){return i(!s)},children:["Show/Hide ",JSON.stringify(s)]}),Object(n.jsx)("hr",{}),Object(n.jsx)(J,{}),Object(n.jsx)("hr",{}),Object(n.jsx)(B,{})]})},z=a.a.memo((function(e){var t=e.numero,c=e.incrementar;return console.log("  Me volv\xed a generar :(  "),Object(n.jsx)("button",{className:"add",onClick:function(){return c(t)},children:t})})),D=function(){var e=Object(o.useState)(0),t=Object(j.a)(e,2),c=t[0],a=t[1],r=Object(o.useCallback)((function(e){a((function(t){return t+e}))}),[a]);return Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{children:"Challenge"}),Object(n.jsxs)("p",{children:[" Total: ",c," "]}),Object(n.jsx)("hr",{}),[2,4,6,8,10].map((function(e){return Object(n.jsx)(z,{numero:e,incrementar:r},e)}))]})},A=c(28),I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"add":return[].concat(Object(A.a)(e),[t.payload]);case"delete":return e.filter((function(e){return e.id!==t.payload}));case"toggle":case"toggle-old":return e.map((function(e){return e.id===t.payload?Object(S.a)(Object(S.a)({},e),{},{done:!e.done}):e}));default:return e}},G=c(27),K=c.n(G),Q=c(25),X=c.n(Q),_=c(26),V=c.n(_),W=function(e){var t=e.todo,c=e.handleDelete,o=e.handleToggle;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("li",{onClick:function(){return o(t.id)},className:"".concat(t.done&&"complete"),children:t.desc},t.id),Object(n.jsxs)("div",{className:"icons-options",children:[Object(n.jsx)(X.a,{fontSize:"small",style:{color:"white"},onClick:function(){return c(t.id)}}),Object(n.jsx)(V.a,{fontSize:"small",style:{color:"white",opacity:"50%"}})]},"icons-div")]})},Y=function(e){var t=e.todos,c=e.handleDelete,o=e.handleToggle;return Object(n.jsx)("ol",{children:t.map((function(e){return Object(n.jsx)("div",{className:"list-options",children:Object(n.jsx)(W,{todo:e,handleDelete:c,handleToggle:o})},e.id)}))})},Z=function(){return JSON.parse(localStorage.getItem("todos"))||[]},$=function(){var e=Object(o.useReducer)(I,[],Z),t=Object(j.a)(e,2),c=t[0],a=t[1];Object(o.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(c))}),[c]);var r=w({description:""}),s=Object(j.a)(r,3),i=s[0].description,l=s[1],u=s[2],b=Object(o.useRef)(null),d=function(e){i.trim().length<=1||(a({type:"add",payload:{id:(new Date).getTime(),desc:i,done:!1}}),u(),b.current.focus())};return Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{children:"Todo App"}),Object(n.jsxs)("h4",{children:["Total todos: ",c.length]}),Object(n.jsxs)("div",{className:"add-list-options",children:[Object(n.jsx)("input",{type:"text",name:"description",value:i,onChange:l,onKeyUp:function(e){"Enter"===e.key&&d()},ref:b,placeholder:"Add new to do",autoComplete:"off"}),Object(n.jsx)(K.a,{fontSize:"large",style:{color:"white"},onClick:d})]}),Object(n.jsx)(Y,{todos:c,handleDelete:function(e){a({type:"delete",payload:e})},handleToggle:function(e){a({type:"toggle",payload:e})}})]})},ee=Object(o.createContext)(null),te=function(){var e=Object(o.useContext)(ee).setUser;return Object(n.jsx)("button",{onClick:function(){e({})},className:"blue",children:"Logout"})},ce=function(){var e=Object(o.useContext)(ee).setUser;return Object(n.jsx)("button",{onClick:function(){e({id:123456789,name:"Cristina",email:"cp@gmail.com"})},children:"Login"})},ne=function(){var e=Object(o.useContext)(ee).user;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("h1",{children:"CONTEXT"}),Object(n.jsx)("p",{children:"Using ~useContext~ to keep the user information when he/she logs in."}),Object(n.jsx)("pre",{children:JSON.stringify(e,null,3)}),Object(n.jsx)(ce,{}),Object(n.jsx)(te,{})]})},oe=function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(R,{}),Object(n.jsx)(F,{}),Object(n.jsx)(N,{})]})},ae=function(){var e=Object(o.useState)({}),t=Object(j.a)(e,2),c=t[0],a=t[1];return Object(n.jsx)(ee.Provider,{value:{user:c,setUser:a},children:Object(n.jsxs)(l.a,{children:[Object(n.jsx)(T,{}),Object(n.jsxs)(u.c,{children:[Object(n.jsx)(u.a,{exact:!0,path:"/",component:g}),Object(n.jsx)(u.a,{exact:!0,path:"/customhooks",component:oe}),Object(n.jsx)(u.a,{exact:!0,path:h,component:N}),Object(n.jsx)(u.a,{exact:!0,path:d,component:F}),Object(n.jsx)(u.a,{exact:!0,path:"/simpleform",component:E}),Object(n.jsx)(u.a,{exact:!0,path:b,component:R}),Object(n.jsx)(u.a,{exact:!0,path:"/counterapp",component:U}),Object(n.jsx)(u.a,{exact:!0,path:O,component:q}),Object(n.jsx)(u.a,{exact:!0,path:x,component:L}),Object(n.jsx)(u.a,{exact:!0,path:m,component:M}),Object(n.jsx)(u.a,{exact:!0,path:"/memohook",component:J}),Object(n.jsx)(u.a,{exact:!0,path:"/callbackhook",component:B}),Object(n.jsx)(u.a,{exact:!0,path:f,component:D}),Object(n.jsx)(u.a,{exact:!0,path:p,component:$}),Object(n.jsx)(u.a,{exact:!0,path:v,component:ne})]})]})})};s.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(ae,{})}),document.getElementById("root")),i()}},[[46,1,2]]]);
//# sourceMappingURL=main.28365627.chunk.js.map