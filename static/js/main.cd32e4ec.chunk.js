(this["webpackJsonpreact-todo-ts"]=this["webpackJsonpreact-todo-ts"]||[]).push([[0],{14:function(e,t,n){},24:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),o=n(15),i=n.n(o),s=(n(24),n(14),n(5)),a=n(1),l=function(){return Object(a.jsx)("nav",{children:Object(a.jsxs)("div",{className:"nav-wrapper blue lighten-1 px1",children:[Object(a.jsx)("a",{href:"/",className:"brand-logo",children:"React + TypeScript"}),Object(a.jsxs)("ul",{id:"nav-mobile",className:"right hide-on-med-and-down",children:[Object(a.jsx)("li",{children:Object(a.jsx)(s.b,{to:"/",children:"Todo's"})}),Object(a.jsx)("li",{children:Object(a.jsx)(s.b,{to:"/about",children:"About"})})]})]})})},j=function(){return Object(a.jsx)("footer",{className:"page-footer footer blue lighten-1",children:Object(a.jsxs)("div",{className:"container",children:["\xa9 by Fillsen 2021",Object(a.jsx)("a",{className:"grey-text text-lighten-4 right",href:"/",children:"Project Repo"})]})})},d=n(2),u=n(13),b=n(18),h=n(19),m=function(e){var t=Object(c.useRef)(null);return Object(a.jsxs)("div",{className:"input-field mt2",children:[Object(a.jsx)("input",{onKeyPress:function(n){"Enter"===n.key&&(e.onAdd(t.current.value),t.current.value="")},ref:t,type:"text",id:"title",placeholder:"Example: Learn JavaScript"}),Object(a.jsx)("label",{htmlFor:"title",className:"active",children:"Input your todo"})]})},O=function(e){var t=e.todos,n=e.onRemove,c=e.onToggle;if(0===t.length)return Object(a.jsx)("h5",{className:"center",children:"There a no todos"});return Object(a.jsx)("ul",{children:t.map((function(e){var t=["todo"];return e.completed&&t.push("completed"),Object(a.jsx)("li",{className:t.join(" "),children:Object(a.jsxs)("label",{children:[Object(a.jsx)("input",{type:"checkbox",checked:e.completed,onChange:c.bind(null,e.id)}),Object(a.jsx)("span",{children:e.title}),Object(a.jsx)("i",{className:"material-icons red-text",onClick:function(t){return function(e,t){e.preventDefault(),n(t)}(t,e.id)},children:"delete"})]})},e.id)}))})},x=function(){var e=Object(c.useState)([]),t=Object(h.a)(e,2),n=t[0],r=t[1];Object(c.useEffect)((function(){var e=JSON.parse(localStorage.getItem("todos")||"[]");r(e)}),[]),Object(c.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(n))}),[n]);return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(m,{onAdd:function(e){var t={id:Date.now(),title:e,completed:!1};r((function(e){return[t].concat(Object(b.a)(e))}))}}),Object(a.jsx)(O,{todos:n,onRemove:function(e){confirm("Are you sure?")&&r((function(t){return t.filter((function(t){return t.id!==e}))}))},onToggle:function(e){r((function(t){return t.map((function(t){return t.id===e?Object(u.a)(Object(u.a)({},t),{},{completed:!t.completed}):t}))}))}})]})},f=function(){var e=Object(d.f)();return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h1",{children:"About"}),Object(a.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum enim expedita facere fuga iste iusto magnam maiores non quidem repellat."}),Object(a.jsx)("button",{className:"btn",onClick:function(){return e.push("/")},children:"Go back"})]})},p=function(){return Object(a.jsxs)(s.a,{basename:"/react-ts-todo",children:[Object(a.jsx)(l,{}),Object(a.jsx)("div",{className:"container",children:Object(a.jsxs)(d.c,{children:[Object(a.jsx)(d.a,{exact:!0,path:"/",component:x}),Object(a.jsx)(d.a,{exact:!0,path:"/about",component:f})]})}),Object(a.jsx)(j,{})]})};i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(p,{})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.cd32e4ec.chunk.js.map