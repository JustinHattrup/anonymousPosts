(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{28:function(e,t,n){e.exports=n(40)},33:function(e,t,n){},34:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var a=n(3),r=n.n(a),c=n(23),i=n.n(c),l=(n(33),n(9)),u=n(11),o=n(7),s=(n(34),n(13)),b=n.n(s),p=n(16),m=n(14),d=n(12),f=n(19);function v(){var e=Object(m.a)(["\n  mutation AddPost($title: String!, $description: String!) {\n    addPost(title: $title, description: $description) {\n      id\n      title\n      description\n    }\n  }\n"]);return v=function(){return e},e}var E=Object(u.b)(v());var j=function(e){var t=Object(d.a)(E),n=Object(l.a)(t,1)[0],c=Object(f.a)({title:Object(a.useState)("")},e.state||{}),i=Object(l.a)(c.title,2),u=i[0],o=i[1],s=Object(f.a)({description:Object(a.useState)("")},e.state||{}),m=Object(l.a)(s.description,2),v=m[0],j=m[1],O=Object(f.a)({submit:Object(a.useState)(!1)},e.state||{}),h=Object(l.a)(O.submit,2),w=(h[0],h[1]),g=function(){var e=Object(p.a)(b.a.mark(function e(t){return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,n({variables:{title:u,description:v}});case 4:e.sent,w(!0),o(""),j(""),e.next=12;break;case 10:e.prev=10,e.t0=e.catch(1);case 12:case"end":return e.stop()}},e,null,[[1,10]])}));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"NewPost"},r.a.createElement("h2",null,"Add something"),r.a.createElement("p",null,u),r.a.createElement("br",null),r.a.createElement("p",null,v),r.a.createElement("form",{onSubmit:g,autoComplete:"off"},"Title: ",r.a.createElement("br",null),r.a.createElement("input",{type:"text",name:"title",id:"title",placeholder:"Enter a title",value:u,onChange:function(e){o(e.target.value)}}),r.a.createElement("br",null),"Description: ",r.a.createElement("br",null),r.a.createElement("textarea",{type:"text",name:"description",id:"description",placeholder:"Enter a description",value:v,onChange:function(e){j(e.target.value)}}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("input",{id:"submit",type:"submit",value:"Submit"})))};function O(){var e=Object(m.a)(["\n  query getposts {\n    posts {\n      id\n      title\n      description\n      date\n    }\n  }\n"]);return O=function(){return e},e}function h(){var e=Object(m.a)(["\n  mutation DeletePost($id: String!) {\n    deletePost(id: $id) {\n      id\n      title\n      description\n    }\n  }\n"]);return h=function(){return e},e}var w=Object(u.b)(h()),g=Object(u.b)(O());var S=function(e){var t=Object(a.useState)(""),n=Object(l.a)(t,2),c=n[0],i=n[1],u=Object(a.useState)(""),o=Object(l.a)(u,2),s=o[0],m=o[1],f=Object(a.useState)(!1),v=Object(l.a)(f,2),E=v[0],O=v[1],h=Object(d.a)(w),S=Object(l.a)(h,1)[0],k=Object(d.b)(g);if(k.loading)return r.a.createElement("p",null,"Loading...");if(k.error)return r.a.createElement("p",null,"Error :(");!0===E&&(O(!1),k.refetch());var x=function(){var e=Object(p.a)(b.a.mark(function e(t){return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S({variables:{id:t}});case 3:e.sent,k.refetch(),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}},e,null,[[0,7]])}));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"Posts"},r.a.createElement(j,{state:{title:[c,i],description:[s,m],submit:[E,O]}}),r.a.createElement("h1",null,"List of posts:"),r.a.createElement("ul",null,k.data.posts.map(function(e,t){return r.a.createElement("li",{key:t},e.id," ",r.a.createElement("br",null)," ",e.title," ",r.a.createElement("br",null)," ",e.description," ",r.a.createElement("br",null)," ",e.date,r.a.createElement("br",null),r.a.createElement("button",{onClick:function(){return x(e.id)}},"delete"))})))},k=new u.a({uri:"/graphql"});var x=function(){var e=Object(a.useState)(0),t=Object(l.a)(e,2),n=(t[0],t[1],Object(a.useState)(!1)),c=Object(l.a)(n,2);return c[0],c[1],r.a.createElement(o.a,{client:k},r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Posts app"),r.a.createElement(S,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[28,1,2]]]);
//# sourceMappingURL=main.a6d0b04d.chunk.js.map