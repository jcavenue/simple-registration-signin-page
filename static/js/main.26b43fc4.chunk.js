(this["webpackJsonpsample-login-signup-page"]=this["webpackJsonpsample-login-signup-page"]||[]).push([[0],{34:function(e,t,s){},35:function(e,t,s){"use strict";s.r(t);var a=s(0),c=s.n(a),n=s(10),r=s.n(n),l=s(8),i=s(3),d=s(12),o=s(2),m=s(1),j=function(){var e=Object(i.g)(),t=Object(a.useState)(null),s=Object(d.a)(t,2),c=s[0],n=s[1];return Object(m.jsx)(o.b,{className:"mt-5",children:Object(m.jsxs)(o.f,{className:"d-flex justify-content-center mt-5 p-2",children:[Object(m.jsx)("h1",{className:"text-center",children:"Simple Login Page"}),Object(m.jsx)(o.a,{className:"col-md-6 shadow-3 p-3 rounded-3",children:Object(m.jsxs)("form",{className:"my-3",onSubmit:function(t){return function(t){t.preventDefault();var s=document.getElementById("email").value,a=document.getElementById("password").value,c=JSON.parse(localStorage.getItem("formData"))||[],r=c.length&&JSON.parse(localStorage.getItem("formData")).some((function(e){return e.email.toLowerCase()===s&&e.pwd.toLowerCase()===a}));if(r){var l=c.filter((function(e){return e.email===s&&e.pwd===a}));c=[],e.push({pathname:"/dashboard",state:{isAuth:!0,userData:l[0]}})}else n(!0)}(t)},children:[Object(m.jsx)("h4",{className:"my-3",children:"Please Login "}),c&&Object(m.jsxs)("div",{className:"alert alert-danger alert-dismissible fade show",role:"alert",children:["Login Details Incorrect",Object(m.jsx)("button",{type:"button",className:"btn-close","data-mdb-dismiss":"alert","aria-label":"Close",onClick:function(){return n(null)}})]}),Object(m.jsxs)(o.c,{className:"mb-3",children:[Object(m.jsx)(o.e,{noBorder:!0,children:"Email"}),Object(m.jsx)(o.d,{name:"email",id:"email",className:"rounded",type:"email",required:!0})]}),Object(m.jsxs)(o.c,{className:"mb-3",children:[Object(m.jsx)(o.e,{noBorder:!0,children:"Password"}),Object(m.jsx)(o.d,{name:"password",id:"password",type:"password",required:!0})]}),Object(m.jsx)("div",{className:"d-flex justify-content-end",children:Object(m.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Sign In"})})]})}),Object(m.jsxs)("p",{className:"text-center mt-4",children:[" Don't have an account yet? ",Object(m.jsx)(l.b,{to:"/signup",children:"Sign up here"})]})]})})},b=Object(i.i)((function(){var e=Object(a.useState)(null),t=Object(d.a)(e,2),s=t[0],c=t[1],n=Object(a.useState)(null),r=Object(d.a)(n,2),i=r[0],j=r[1];return Object(m.jsx)(o.b,{className:"mt-5",children:Object(m.jsxs)(o.f,{className:"d-flex justify-content-center mt-5 p-2",children:[Object(m.jsx)("h1",{className:"text-center",children:"Simple Sign up page"}),Object(m.jsx)(o.a,{className:"col-md-6 shadow-3 p-3 rounded-3",children:Object(m.jsxs)("form",{className:"my-3",onSubmit:function(e){return function(e){e.preventDefault();var t=document.getElementById("fname").value,s=document.getElementById("mname").value,a=document.getElementById("lname").value,n=document.getElementById("email").value,r=document.getElementById("password").value,l=JSON.parse(localStorage.getItem("formData"))||[];l.length&&JSON.parse(localStorage.getItem("formData")).some((function(e){return e.email.toLowerCase()===n.toLowerCase()}))?(j(!0),c(null)):(l.push({fname:t,mname:s,lname:a,email:n,pwd:r}),localStorage.setItem("formData",JSON.stringify(l)),document.querySelector("form").reset(),document.getElementById("fname").focus(),c(!0),j(null))}(e)},children:[Object(m.jsx)("h4",{className:"my-3",children:"Fill up this form to register "}),i&&Object(m.jsxs)("div",{className:"alert alert-danger alert-dismissible fade show",role:"alert",children:["User email already exist",Object(m.jsx)("button",{type:"button",className:"btn-close","data-mdb-dismiss":"alert","aria-label":"Close",onClick:function(){return j(null)}})]}),s&&Object(m.jsxs)("div",{class:"alert alert-success alert-dismissible fade show",role:"alert",children:["Account Created! ",Object(m.jsx)(l.b,{to:"/",children:"Click here to Sign in "}),Object(m.jsx)("button",{type:"button",className:"btn-close","data-mdb-dismiss":"alert","aria-label":"Close",onClick:function(){return c(!1)}})]}),Object(m.jsxs)(o.c,{className:"mb-3",children:[Object(m.jsx)(o.e,{noBorder:!0,children:"First Name"}),Object(m.jsx)(o.d,{name:"fname",id:"fname",className:"rounded",type:"text",required:!0})]}),Object(m.jsxs)(o.c,{className:"mb-3",children:[Object(m.jsx)(o.e,{noBorder:!0,children:"Middle Name"}),Object(m.jsx)(o.d,{name:"mname",id:"mname",className:"rounded",type:"text",required:!0})]}),Object(m.jsxs)(o.c,{className:"mb-3",children:[Object(m.jsx)(o.e,{noBorder:!0,children:"Last Name"}),Object(m.jsx)(o.d,{name:"lname",id:"lname",className:"rounded",type:"text",required:!0})]}),Object(m.jsxs)(o.c,{className:"mb-3",children:[Object(m.jsx)(o.e,{noBorder:!0,children:"Email"}),Object(m.jsx)(o.d,{name:"email",id:"email",className:"rounded",type:"email",required:!0})]}),Object(m.jsxs)(o.c,{className:"mb-3",children:[Object(m.jsx)(o.e,{noBorder:!0,children:"Password"}),Object(m.jsx)(o.d,{name:"password",id:"password",type:"password",required:!0})]}),Object(m.jsx)("div",{className:"d-flex justify-content-end",children:Object(m.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Sign Up"})})]})}),Object(m.jsxs)("p",{className:"mt-4 text-center",children:["Already have an Account? ",Object(m.jsx)(l.b,{to:"/",children:"Sign in here"})]})]})})})),u=Object(i.i)((function(){var e=Object(i.h)();try{var t=e.state,s=t.isAuth,a=t.userData;return s?Object(m.jsx)(o.b,{className:"py-5",children:Object(m.jsxs)(o.f,{className:"px-3",children:[Object(m.jsx)("h1",{children:"Welcome to your Dashboard"}),Object(m.jsxs)("p",{children:["Account: ",a.email," ",Object(m.jsx)(l.b,{to:"/",children:"Logout"})]})]})}):Object(m.jsx)(i.a,{to:"/"})}catch(c){return Object(m.jsx)(i.a,{to:"/"})}}));var h=function(){return Object(m.jsx)(l.a,{children:Object(m.jsxs)(i.d,{children:[Object(m.jsx)(i.b,{path:"/signup",component:b}),Object(m.jsx)(i.b,{path:"/dashboard",component:u}),Object(m.jsx)(i.b,{exact:!0,path:"/",component:j})]})})};s(33),s(34);r.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(h,{})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.26b43fc4.chunk.js.map