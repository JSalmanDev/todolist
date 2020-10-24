(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{56:function(e,t,n){},57:function(e,t,n){},66:function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"addTodo",(function(){return _})),n.d(r,"completeTodo",(function(){return D})),n.d(r,"deleteTodo",(function(){return A})),n.d(r,"editTodo",(function(){return I})),n.d(r,"todolistFilter",(function(){return H})),n.d(r,"setTodoListFilter",(function(){return W})),n.d(r,"todolistFilters",(function(){return P}));var i=n(2),c=n(0),a=n.n(c),o=n(12),s=n.n(o),l=(n(56),n(57),n(73)),d=n(74),u=n(6),j=Object(u.f)((function(e){var t=function(t,n){t.preventDefault(),e.history.push(n)};return Object(i.jsx)(l.a,{bg:"dark",variant:"dark",children:Object(i.jsxs)(d.a,{className:"mr-auto",children:[Object(i.jsx)(d.a.Link,{href:"/todos",onClick:function(e){return t(e,"/todos")},children:"Todos"}),Object(i.jsx)(d.a.Link,{href:"/contact",onClick:function(e){return t(e,"/contact")},children:"Contact"})]})})})),h=n(36),b=n.n(h),O=n(46),p=n(22),f=n(23),m=n(27),x=n(25),v=n(68),T=n(48),C=n(72),g=n(69),E=n(70),L=n(71),S=n(24),y="ADD_TASK",w="DELETE_TASK",F="COMPLETE_TASK",k="EDIT_TASK",N="SET_TODOLIST_FILTER",_=function(e){return{type:y,title:e}},D=function(e){return{type:F,id:e}},A=function(e){return{type:w,id:e}},I=function(e,t){return{type:k,title:t,id:e}},H=function(e){return{type:N,filter:e}},W=function(e){return{type:N,filter:e}},P={SHOW_ALL:"SHOW_ALL",SHOW_COMPLETED:"SHOW_COMPLETED",SHOW_ACTIVE:"SHOW_ACTIVE"},M=function(e){Object(m.a)(n,e);var t=Object(x.a)(n);function n(e){var r;return Object(p.a)(this,n),(r=t.call(this,e)).addTodo=function(){var e=Object(O.a)(b.a.mark((function e(t){var n,i,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),n=r.state,i=n.title,c=n.objectToEdit,i||!(i.trim().length<=0)){e.next=5;break}return r.setState({invalid:!0}),e.abrupt("return");case 5:if(!c){e.next=10;break}return e.next=8,r.props.editTodo(c.id,i);case 8:e.next=12;break;case 10:return e.next=12,r.props.addTodo(i);case 12:r.setState({title:"",objectToEdit:null});case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),r.handleComplete=function(e){r.props.completeTodo(e)},r.handleEdit=function(e){r.setState({objectToEdit:e,title:e.title})},r.handleDelete=function(e){r.props.deleteTodo(e)},r.state={title:"",invaid:!1,objectToEdit:null},r}return Object(f.a)(n,[{key:"render",value:function(){var e=this;return Object(i.jsx)("div",{className:"container",children:Object(i.jsx)(v.a,{className:"s-nav-comp",children:Object(i.jsxs)(T.a,{md:{span:8,offset:2},children:[Object(i.jsx)(C.a,{onSubmit:function(t){return e.addTodo(t)},children:Object(i.jsxs)(C.a.Row,{children:[Object(i.jsx)(T.a,{md:9,children:Object(i.jsx)(C.a.Group,{controlId:"exampleForm.ControlInput1",children:Object(i.jsx)(C.a.Control,{type:"text",name:"title",required:!0,placeholder:"task...",value:this.state.title,onChange:function(t){return e.setState({title:t.target.value})},className:this.state.invalid?"in-valid":"",onFocus:function(){return e.setState({invalid:!1})}})})}),Object(i.jsx)(T.a,{md:3,children:Object(i.jsx)(g.a,{variant:"outline-primary",className:"w-f",type:"submit",onClick:function(t){return e.addTodo(t)},children:this.state.objectToEdit?"Save":"ADD"})})]})}),Object(i.jsx)(v.a,{children:Object(i.jsx)(T.a,{children:Object(i.jsx)(E.a,{hover:!0,children:Object(i.jsx)("tbody",{children:this.props.list.map((function(t){return Object(i.jsxs)("tr",{className:"list-style",children:[Object(i.jsx)("td",{style:{width:"5%"},children:Object(i.jsx)("input",{type:"checkbox",defaultChecked:t.completed,required:!0,onClick:function(){return e.handleComplete(t.id)}})}),Object(i.jsx)("td",{style:{width:"65%"},children:t.title}),Object(i.jsxs)("td",{style:{width:"10%"},children:[t.completed?Object(i.jsx)(L.a,{pill:!0,className:"custom-badge",variant:"success",children:" completed "}):null," "]}),Object(i.jsx)("td",{style:{width:"10%"},children:Object(i.jsx)(g.a,{variant:"outline-primary",onClick:function(){return e.handleEdit(t)},children:"Edit"})}),Object(i.jsx)("td",{style:{width:"10%"},children:Object(i.jsx)(g.a,{variant:"outline-primary",onClick:function(){return e.handleDelete(t.id)},children:"Delete"})})]},t.id)}))})})})}),Object(i.jsx)(v.a,{children:Object(i.jsxs)(T.a,{children:[Object(i.jsx)("h6",{children:"SHOW:"}),Object(i.jsxs)("div",{children:[Object(i.jsx)("span",{className:this.props.selectedFilter&&"SHOW_ALL"==this.props.selectedFilter?"badge badge-secondary filter-btn filter-active":"badge badge-secondary filter-btn",onClick:function(t){return e.props.setTodoListFilter("SHOW_ALL")},children:"ALL"}),Object(i.jsx)("span",{className:this.props.selectedFilter&&"SHOW_ACTIVE"==this.props.selectedFilter?"badge badge-secondary filter-btn filter-active":"badge badge-secondary filter-btn",onClick:function(t){return e.props.setTodoListFilter("SHOW_ACTIVE")},children:"ACTIVE"}),Object(i.jsx)("span",{className:this.props.selectedFilter&&"SHOW_COMPLETED"==this.props.selectedFilter?"badge badge-secondary filter-btn filter-active":"badge badge-secondary filter-btn",onClick:function(t){return e.props.setTodoListFilter("SHOW_COMPLETED")},children:"COMPLETED"})]})]})})]})})})}}]),n}(a.a.Component),R=function(e,t){switch(t){case P.SHOW_ALL:return e;case P.SHOW_ACTIVE:return e.filter((function(e){return!e.completed}));case P.SHOW_COMPLETED:return e.filter((function(e){return e.completed}));default:throw new Error("unknown filter"+t)}},q=Object(S.b)((function(e){return{list:R(e.todoslist.todos,e.todolistFilter),selectedFilter:e.todolistFilter}}),r)(M),V=n(49),G=function(e){Object(m.a)(n,e);var t=Object(x.a)(n);function n(e){var r;return Object(p.a)(this,n),(r=t.call(this,e)).handleTextChange=function(e){r.setState(Object(V.a)({},e.name,e.value))},r.handleSubmit=function(e){e.preventDefault(),r.setState({firstName:"",lastName:"",email:"",comments:""})},r.state={firstName:"",lastName:"",email:"",comments:""},r}return Object(f.a)(n,[{key:"render",value:function(){var e=this;return Object(i.jsx)("div",{className:"container",children:Object(i.jsx)(v.a,{className:"s-nav-comp",children:Object(i.jsx)(T.a,{md:{span:8,offset:2},children:Object(i.jsxs)(C.a,{onSubmit:function(t){return e.handleSubmit()},children:[Object(i.jsx)(C.a.Row,{children:Object(i.jsx)(T.a,{children:Object(i.jsxs)(C.a.Group,{controlId:"exampleForm.ControlInput1",children:[Object(i.jsx)(C.a.Label,{children:"First Name"}),Object(i.jsx)(C.a.Control,{type:"text",name:"firstName",required:!0,placeholder:"Enter First Name",value:this.state.firstName,onChange:function(t){return e.handleTextChange(t.target)}})]})})}),Object(i.jsx)(C.a.Row,{children:Object(i.jsx)(T.a,{children:Object(i.jsxs)(C.a.Group,{controlId:"exampleForm.ControlInput1",children:[Object(i.jsx)(C.a.Label,{children:"Last Name"}),Object(i.jsx)(C.a.Control,{type:"text",name:"lastName",required:!0,placeholder:"Enter Last Name",value:this.state.lastName,onChange:function(t){return e.handleTextChange(t.target)}})]})})}),Object(i.jsx)(C.a.Row,{children:Object(i.jsx)(T.a,{children:Object(i.jsxs)(C.a.Group,{controlId:"formBasicEmail",children:[Object(i.jsx)(C.a.Label,{children:"Email"}),Object(i.jsx)(C.a.Control,{type:"email",name:"email",required:!0,placeholder:"example@gmail.com",value:this.state.email,onChange:function(t){return e.handleTextChange(t.target)}})]})})}),Object(i.jsx)(C.a.Row,{children:Object(i.jsx)(T.a,{children:Object(i.jsxs)(C.a.Group,{children:[Object(i.jsx)(C.a.Label,{children:"Comments"}),Object(i.jsx)(C.a.Control,{as:"textarea",rows:3,required:!0,name:"comments",placeholder:"Comments...",value:this.state.comments,onChange:function(t){return e.handleTextChange(t.target)}})]})})}),Object(i.jsx)(C.a.Row,{children:Object(i.jsx)(T.a,{children:Object(i.jsx)(g.a,{className:"w-f",variant:"primary",type:"submit",onClick:function(t){return e.handleSubmit(t)},children:"Submit"})})})]})})})})}}]),n}(a.a.Component);var K=function(){return Object(i.jsxs)("div",{children:[Object(i.jsx)(j,{}),Object(i.jsxs)(u.c,{children:[Object(i.jsx)(u.a,{exact:!0,path:"/todos",component:q}),Object(i.jsx)(u.a,{exact:!0,path:"/contact",component:G})]})]})},B=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,75)).then((function(t){var n=t.getCLS,r=t.getFID,i=t.getFCP,c=t.getLCP,a=t.getTTFB;n(e),r(e),i(e),c(e),a(e)}))},J=(n(65),n(15)),z=n(50),Q={todos:[]};function U(e){return e.todos.reduce((function(e,t){return Math.max(t.id,e)}),-1)+1}var X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return Object.assign({},e,{todos:[{title:t.title,completed:!1,updated:!1,id:U(e)}].concat(Object(z.a)(e.todos))});case F:return Object.assign({},e,{todos:e.todos.map((function(e){return e.id===t.id?Object.assign({},e,{updated:!1,completed:!e.completed}):e}))});case k:return Object.assign({},e,{todos:e.todos.map((function(e){return e.id===t.id?Object.assign({},e,{updated:!0,title:t.title}):e}))});case w:return Object.assign({},e,{todos:e.todos.filter((function(e){return e.id!==t.id}))});default:return e}},Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P.SHOW_ALL,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N:return t.filter;default:return e}},Z=n(20),$=Object(J.b)({todoslist:X,todolistFilter:Y}),ee=(window.devToolsExtension?window.devToolsExtension()(J.c):J.c)($);s.a.render(Object(i.jsx)(i.Fragment,{children:Object(i.jsx)(S.a,{store:ee,children:Object(i.jsx)(Z.a,{basename:"/todolist",children:Object(i.jsx)(K,{})})})}),document.getElementById("root")),B()}},[[66,1,2]]]);
//# sourceMappingURL=main.7b786d32.chunk.js.map