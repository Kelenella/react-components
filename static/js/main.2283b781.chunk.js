(this["webpackJsonpreact-components"]=this["webpackJsonpreact-components"]||[]).push([[0],{15:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var o=n(1),r=n.n(o),c=n(4),i=n.n(c),a=(n(15),n(5)),l=n.n(a),s=n(0);function u(t){var e=t.children;return Object(s.jsx)("div",{className:l.a.container,children:e})}var p=n(6),b=n(7),d=n(10),j=n(9),v=n(2),O=n.n(v),h=function(t){Object(d.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(p.a)(this,n);for(var o=arguments.length,r=new Array(o),c=0;c<o;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={activeOptionIdx:1},t.setActiveIndex=function(e){t.setState({activeOptionIdx:e})},t.makeOptionClassName=function(e){var n=[O.a.option];return e===t.state.activeOptionIdx&&n.push(O.a.optionActive),n.join(" ")},t}return Object(b.a)(n,[{key:"render",value:function(){var t=this;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("h2",{className:O.a.title,children:"Color Picker"}),Object(s.jsx)("div",{className:O.a.div,children:this.props.colors.map((function(e,n){return Object(s.jsx)("button",{type:"button",className:t.makeOptionClassName(n),style:{backgroundColor:e.color},onClick:function(){return t.setActiveIndex(n)}},e.color)}))})]})}}]),n}(o.Component),x=h,f=n(8);function m(){return Object(s.jsx)(u,{children:Object(s.jsx)(x,{colors:f})})}i.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(m,{})}),document.getElementById("root"))},2:function(t,e,n){t.exports={title:"ColorPicker_title__3Rnv8",div:"ColorPicker_div__1udyY",option:"ColorPicker_option__2NRBb",optionActive:"ColorPicker_optionActive__IuIQh"}},5:function(t,e,n){t.exports={container:"Container_container__1z73A"}},8:function(t){t.exports=JSON.parse('[{"label":"red","color":"#F44336"},{"label":"green","color":"#4CAF50"},{"label":"blue","color":"#2196F3"},{"label":"grey","color":"#607D8B"},{"label":"pink","color":"#E91E63"},{"label":"indigo","color":"#3F51B5"}]')}},[[17,1,2]]]);
//# sourceMappingURL=main.2283b781.chunk.js.map