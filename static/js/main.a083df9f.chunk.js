(this["webpackJsonpreact-components"]=this["webpackJsonpreact-components"]||[]).push([[0],{15:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var o=n(1),c=n.n(o),i=n(4),r=n.n(i),s=(n(15),n(5)),d=n(6),a=n(10),l=n(9),u=n(7),j=n.n(u),p=n(0);function x(t){var e=t.children;return Object(p.jsx)("div",{className:j.a.container,children:e})}var m=n(2),f=n.n(m),b=function(t){var e=t.todos,n=t.onDeleteTodo;return Object(p.jsx)("ul",{className:f.a.todoList,children:e.map((function(t){var e=t.id,o=t.text;t.completed;return Object(p.jsxs)("li",{className:f.a.item,children:[Object(p.jsx)("p",{className:f.a.text,children:o}),Object(p.jsx)("button",{type:"button",className:f.a.deleteButton,onClick:function(){return n(e)},children:"Delete"})]},e)}))})},h=n(8),O=function(t){Object(a.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(s.a)(this,n);for(var o=arguments.length,c=new Array(o),i=0;i<o;i++)c[i]=arguments[i];return(t=e.call.apply(e,[this].concat(c))).state={todos:h},t.deleteTodo=function(e){t.setState((function(t){return{todos:t.todos.filter((function(t){return t.id!==e}))}}))},t}return Object(d.a)(n,[{key:"render",value:function(){var t=this.state.todos,e=t.reduce((function(t,e){return e.completed?t+1:t}),0);return Object(p.jsxs)(x,{children:[Object(p.jsx)(b,{todos:t,onDeleteTodo:this.deleteTodo}),Object(p.jsxs)("div",{children:[Object(p.jsxs)("p",{children:["\u041e\u0431\u0449\u0435\u0435 \u043a\u043e\u043b-\u0432\u043e \u0442\u0443\u0434\u0443:",t.length]}),Object(p.jsxs)("p",{children:["K\u043e\u043b-\u0432\u043e \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043d\u044b\u0445:",e]})]})]})}}]),n}(o.Component),_=O;r.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(_,{})}),document.getElementById("root"))},2:function(t,e,n){t.exports={todoList:"TodoList_todoList__2xmE1",item:"TodoList_item__3yBJj",text:"TodoList_text__1aq6H",deleteButton:"TodoList_deleteButton__3mQoz"}},7:function(t,e,n){t.exports={container:"Container_container__1z73A"}},8:function(t){t.exports=JSON.parse('[{"id":"id-1","text":"\u0412\u044b\u0443\u0447\u0438\u0442\u044c \u0420\u0435\u0430\u043a\u0442","completed":true},{"id":"id-2","text":"\u0412\u044b\u0443\u0447\u0438\u0442\u044c \u041d\u043e\u0434\u0443","completed":false},{"id":"id-3","text":"\u0420\u0430\u0437\u043e\u0431\u0440\u0430\u0442\u044c\u0441\u044f \u0441 \u0420\u0435\u0434\u0430\u043a\u0441","completed":false},{"id":"id-4","text":"\u0423\u0441\u0442\u0440\u043e\u0438\u0442\u044c\u0441\u044f \u043d\u0430 \u0440\u0430\u0431\u043e\u0442\u0443","completed":false}]')}},[[17,1,2]]]);
//# sourceMappingURL=main.a083df9f.chunk.js.map