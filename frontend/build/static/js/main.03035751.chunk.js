(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{26:function(e,t,n){},27:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n.n(a),i=n(16),s=n.n(i),u=(n(26),n(19)),l=(n(27),n(6)),h=n.n(l),o=n(17),r=n(18),b=n(3),j=n(21),d=n(20),f=n(0),O=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={nameValue:""},a.handleChange=a.handleChange.bind(Object(b.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(b.a)(a)),a}return Object(r.a)(n,[{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"handleSubmit",value:function(e){var t=this;h.a.get("/flask/"+this.state.value).then((function(e){t.setState({nameValue:e.data.result})})).catch((function(e){console.log(e)})),e.preventDefault()}},{key:"render",value:function(){return Object(f.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(f.jsx)("p",{children:Object(f.jsxs)("label",{children:["First Name",Object(f.jsx)("input",{type:"text",value:this.state.value,onChange:this.handleChange})]})}),Object(f.jsxs)("p",{children:[Object(f.jsx)("input",{type:"submit",value:"Submit"}),Object(f.jsx)("h1",{children:this.state.nameValue})]})]})}}]),n}(c.a.Component);var v=function(){var e=Object(a.useState)({}),t=Object(u.a)(e,2),n=(t[0],t[1]);return Object(a.useEffect)((function(){h.a.get("http://localhost:5000/flask/hello").then((function(e){console.log("SUCCESS",e),n(e)})).catch((function(e){console.log(e)}))}),[]),Object(f.jsxs)("div",{children:[Object(f.jsx)("h3",{children:"Last Name Finder"}),Object(f.jsx)(O,{})]})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,48)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),i(e),s(e)}))};s.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(v,{})}),document.getElementById("root")),g()}},[[47,1,2]]]);
//# sourceMappingURL=main.03035751.chunk.js.map