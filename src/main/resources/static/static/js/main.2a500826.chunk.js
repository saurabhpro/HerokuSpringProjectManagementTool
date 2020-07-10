(this["webpackJsonpfirst-react-task-manager-app"]=this["webpackJsonpfirst-react-task-manager-app"]||[]).push([[0],{111:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(35),o=a.n(c),l=(a(80),a(81),a(7)),s=a(8),i=a(11),u=a(10),m=a(16),p=a(37),d=a(23),h=a(12),E=a(47),f=a(19),b=a(15),j=a(9),v=a(13),g=a.n(v),y=a(26),C=a(21),k=a.n(C),O=function(e,t){return function(){var a=Object(y.a)(g.a.mark((function a(r){var n;return g.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,k.a.post("/api/projects",e);case 3:n=a.sent,console.debug(n),t.push("/dashboard"),r({type:"GET_ERRORS",payload:{}}),a.next=13;break;case 9:a.prev=9,a.t0=a.catch(0),console.error(a.t0),r({type:"GET_ERRORS",payload:a.t0.response.data});case 13:case"end":return a.stop()}}),a,null,[[0,9]])})));return function(e){return a.apply(this,arguments)}}()},N=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).onDeleteClick=function(t){e.props.deleteProject(t)},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props.project;return console.log(this.props),n.a.createElement(m.a,{className:"bg-light mb-3"},n.a.createElement(p.a,null,n.a.createElement("div",{className:"col-2"},n.a.createElement("span",{className:"mx-auto"},e.projectIdentifier)),n.a.createElement("div",{className:"col-lg-6 col-md-4 col-8"},n.a.createElement("h3",null,e.projectName),n.a.createElement("p",null,e.description)),n.a.createElement(d.a,null,n.a.createElement(E.a,{vertical:!0},n.a.createElement(b.b,{to:"/projectBoard/".concat(e.projectIdentifier),className:"btn-block"},n.a.createElement(h.a,{variant:"outline-primary",block:!0,className:"mb-1"},n.a.createElement("div",{className:"float-left"},n.a.createElement(f.a,{icon:"tasks"})," Project Board"))),n.a.createElement(b.b,{to:"/updateProject/".concat(e.projectIdentifier)},n.a.createElement(h.a,{variant:"outline-info",block:!0,className:"mb-1"},n.a.createElement("div",{className:"float-left"},n.a.createElement(f.a,{icon:"edit"})," Update Project Info"))),n.a.createElement(h.a,{variant:"outline-danger",block:!0,onClick:this.onDeleteClick.bind(this,e.projectIdentifier)},n.a.createElement("div",{className:"float-left"},n.a.createElement(f.a,{icon:"minus-square"})," Delete Project"))))))}}]),a}(r.Component),S=Object(j.b)(null,{deleteProject:function(e,t){return function(){var t=Object(y.a)(g.a.mark((function t(a){return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!window.confirm("Are you sure you want to delete?")){t.next=4;break}return t.next=3,k.a.delete("/api/projects/".concat(e));case 3:a({type:"DELETE_PROJECT",payload:e});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})(N),T=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(b.b,{to:"/addProject"},n.a.createElement(h.a,{className:"btn btn-lg btn-info"},n.a.createElement(f.a,{icon:"plus-square"})," Create a Project")))},P=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.props.getProjects()}},{key:"render",value:function(){var e=this.props.project.projects;return n.a.createElement(m.a,{fluid:!0,className:"p-2 flex-fill justify-content-center"},n.a.createElement(p.a,{className:"justify-content-md-center"},n.a.createElement("h1",{className:"display-4"},"Projects")),n.a.createElement("br",null),n.a.createElement(p.a,{className:"justify-content-md-center"},n.a.createElement(T,null)),n.a.createElement("hr",null),n.a.createElement(p.a,null,e.map((function(e){return n.a.createElement(S,{key:e.id,project:e})}))))}}]),a}(r.Component),x=Object(j.b)((function(e){return{project:e.project}}),{getProjects:function(){return function(){var e=Object(y.a)(g.a.mark((function e(t){var a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.get("/api/projects");case 2:a=e.sent,console.debug(a),t({type:"GET_PROJECTS",payload:a.data});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(P),D=(a(106),a(39)),w=a(34),I=a(2),R=a(50),_=function(e){e?k.a.defaults.headers.common.Authorization=e:delete k.a.defaults.headers.common.Authorization},G=a(49),L=a.n(G),A=function(){return function(e){console.log("logging out now"),localStorage.removeItem("jwtToken"),_(!1),e({type:"SET_CURRENT_USER",payload:{}})}},q=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).logout=function(){e.props.logout(),window.location.href="/"},e}return Object(s.a)(a,[{key:"render",value:function(){var e,t=this.props.security,a=t.validToken,r=t.user,c=n.a.createElement(D.a.Collapse,{id:"responsive-navbar-nav"},n.a.createElement(w.a,{className:"mr-auto"},n.a.createElement(w.a.Link,{href:"/dashboard",className:"text-light"},"Dashboard")),n.a.createElement(w.a,null,n.a.createElement(I.a,{inline:!0},n.a.createElement(R.a,{type:"text",placeholder:"Search Project",className:"mr-sm-1 justify-content-end"}),n.a.createElement(h.a,{variant:"outline-light mr-2"}," Search "))),n.a.createElement(w.a,null," ",n.a.createElement(D.a.Text,{className:"text-light"},n.a.createElement(f.a,{icon:"user-circle"})," ",r.fullName),n.a.createElement(w.a.Link,{onClick:this.logout.bind(this),className:"text-light"},"Logout"))),o=n.a.createElement(D.a.Collapse,{id:"responsive-navbar-nav"},n.a.createElement(w.a,{className:"ml-auto"},n.a.createElement(w.a.Link,{href:"/register",className:"text-light"},"Sign Up"),n.a.createElement(w.a.Link,{href:"/login",className:"text-light"},"Login")));return e=r&&a?c:o,n.a.createElement(n.a.Fragment,null,n.a.createElement(D.a,{collapseOnSelect:!0,expand:"lg",bg:"primary",variant:"dark"},n.a.createElement(D.a.Brand,{href:"/"},n.a.createElement(f.a,{icon:"project-diagram"})," First React Task Manager"),n.a.createElement(D.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),e))}}]),a}(r.Component),U=Object(j.b)((function(e){return{security:e.security}}),{logout:A})(q),F=a(42),B=a(31),M=a(14),J=a(25),z=a(18),H=a(4),W=a.n(H),K=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).onChange=function(t){e.setState(Object(J.a)({},t.target.name,t.target.value))},e.onSubmit=function(t){t.preventDefault();var a={projectName:e.state.projectName,projectIdentifier:e.state.projectIdentifier,description:e.state.description,startDate:e.state.startDate,endDate:e.state.endDate};e.props.createProject(a,e.props.history),console.log(a)},e.state={projectName:"",projectIdentifier:"",description:"",startDate:"",endDate:"",errors:{}},e.onChange=e.onChange.bind(Object(z.a)(e)),e.onSubmit=e.onSubmit.bind(Object(z.a)(e)),e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.state.errors;return n.a.createElement(m.a,{fluid:!0,className:"p-2 flex-fill justify-content-center"},n.a.createElement("div",{className:"col-md-8 m-auto"},n.a.createElement("h5",{className:"display-4 "},"Create Project form"),n.a.createElement("hr",null),n.a.createElement(I.a,{onSubmit:this.onSubmit,className:"d-flex-fill p-1 text-left"},n.a.createElement(I.a.Group,{controlId:"formProjectName"},n.a.createElement(I.a.Label,null,"Project Name"),n.a.createElement(I.a.Control,{as:"input",required:!0,placeholder:"Project Name",name:"projectName",className:W()({"is-invalid":e.projectName}),value:this.state.projectName,onChange:this.onChange}),n.a.createElement(I.a.Control.Feedback,{type:"invalid"},e.projectName)),n.a.createElement(I.a.Group,{controlId:"formProjectIdentifier"},n.a.createElement(I.a.Label,null,"Project Unique Identifier"),n.a.createElement(I.a.Control,{as:"input",required:!0,placeholder:"Project Unique Identifier",name:"projectIdentifier",className:W()({"is-invalid":e.projectIdentifier}),value:this.state.projectIdentifier,onChange:this.onChange}),n.a.createElement(I.a.Control.Feedback,{type:"invalid"},e.projectIdentifier)),n.a.createElement(I.a.Group,{controlId:"formProjectDescription"},n.a.createElement(I.a.Label,null,"Project Description"),n.a.createElement(I.a.Control,{as:"textarea",required:!0,placeholder:"Project Description",name:"description",className:W()({"is-invalid":e.description}),value:this.state.description,onChange:this.onChange}),n.a.createElement(I.a.Control.Feedback,{type:"invalid"},e.description)),n.a.createElement(I.a.Group,{controlId:"formStartDate"},n.a.createElement(I.a.Label,null,"Start Date"),n.a.createElement(I.a.Control,{type:"date",name:"startDate",value:this.state.startDate,onChange:this.onChange})),n.a.createElement(I.a.Group,{controlId:"formEndDate"},n.a.createElement(I.a.Label,null,"Estimated End Date"),n.a.createElement(I.a.Control,{type:"date",name:"endDate",value:this.state.endDate,onChange:this.onChange})),n.a.createElement(h.a,{type:"submit",block:!0},"Submit"))))}}]),a}(r.Component);K.getDerivedStateFromProps=function(e,t){return e.errors&&(t.errors=e.errors),t};var V=Object(j.b)((function(e){return{errors:e.errors}}),{createProject:O})(K),Y=a(30),X=a(71),$={},Q=a(22),Z={projects:[],project:{}},ee={projectTasks:[],projectTask:{}},te={validToken:!1,user:{}},ae=function(e){return!!e},re=Object(Y.c)({errors:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;return"GET_ERRORS"===t.type?t.payload:e},project:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_PROJECTS":return Object(Q.a)(Object(Q.a)({},e),{},{projects:t.payload});case"GET_PROJECT":return Object(Q.a)(Object(Q.a)({},e),{},{project:t.payload});case"DELETE_PROJECT":return Object(Q.a)(Object(Q.a)({},e),{},{projects:e.projects.filter((function(e){return e.projectIdentifier!==t.payload}))});default:return e}},backlog:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_BACKLOG":return Object(Q.a)(Object(Q.a)({},e),{},{projectTasks:t.payload});case"GET_PROJECT_TASK":return Object(Q.a)(Object(Q.a)({},e),{},{projectTask:t.payload});case"DELETE_PROJECT_TASK":return Object(Q.a)(Object(Q.a)({},e),{},{projectTasks:e.projectTasks.filter((function(e){return e.projectSequence!==t.payload}))});default:return e}},security:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,t=arguments.length>1?arguments[1]:void 0;return"SET_CURRENT_USER"===t.type?Object(Q.a)(Object(Q.a)({},e),{},{validToken:ae(t.payload),user:t.payload}):e}}),ne={},ce=[X.a],oe=window.navigator.userAgent.includes("Chrome")?Object(Y.e)(re,ne,Object(Y.d)(Y.a.apply(void 0,ce),window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__():function(e){return e})):Object(Y.e)(re,ne,Object(Y.d)(Y.a.apply(void 0,ce))),le=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var r;return Object(l.a)(this,a),(r=t.call(this,e)).onSubmit=function(e){e.preventDefault();var t={id:r.state.id,projectName:r.state.projectName,projectIdentifier:r.state.projectIdentifier,description:r.state.description,startDate:r.state.startDate,endDate:r.state.endDate};r.props.createProject(t,r.props.history),console.log(t)},r.state={id:"",projectName:"",projectIdentifier:"",description:"",startDate:"",endDate:"",errors:{}},r.onChange=r.onChange.bind(Object(z.a)(r)),r.onSubmit=r.onSubmit.bind(Object(z.a)(r)),r}return Object(s.a)(a,[{key:"UNSAFE_componentWillReceiveProps",value:function(e){var t=e.project,a=t.id,r=t.projectName,n=t.projectIdentifier,c=t.description,o=t.startDate,l=t.endDate;e.errors&&this.setState({errors:e.errors}),this.setState({id:a,projectName:r,projectIdentifier:n,description:c,startDate:o,endDate:l})}},{key:"componentDidMount",value:function(){var e=this.props.match.params.id;this.props.getProject(e,this.props.history)}},{key:"onChange",value:function(e){this.setState(Object(J.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){var e=this.state,t=e.errors,a=e.projectName,r=e.projectIdentifier,c=e.description,o=e.startDate,l=e.endDate;return n.a.createElement(m.a,{className:"p-2 flex-fill justify-content-center"},n.a.createElement("div",{className:"col-md-8 m-auto"},n.a.createElement("h5",{className:"display-4 "},"Update Project Form"),n.a.createElement("hr",null),n.a.createElement(I.a,{onSubmit:this.onSubmit,className:"d-flex-fill p-1 text-left"},n.a.createElement(I.a.Group,{controlId:"formProjectName"},n.a.createElement(I.a.Label,null,"Project Name"),n.a.createElement(I.a.Control,{as:"input",required:!0,placeholder:"Project Name",name:"projectName",className:W()({"is-invalid":t.projectName}),value:a,onChange:this.onChange}),n.a.createElement(I.a.Control.Feedback,{type:"invalid"},t.projectName)),n.a.createElement(I.a.Group,{controlId:"formProjectIdentifier"},n.a.createElement(I.a.Label,null,"Project Unique Identifier"),n.a.createElement(I.a.Control,{as:"input",required:!0,disabled:!0,placeholder:"Project Unique Identifier",name:"projectIdentifier",value:r,onChange:this.onChange})),n.a.createElement(I.a.Group,{controlId:"formProjectDescription"},n.a.createElement(I.a.Label,null,"Project Description"),n.a.createElement(I.a.Control,{as:"textarea",required:!0,placeholder:"Project Description",name:"description",className:W()({"is-invalid":t.description}),value:c,onChange:this.onChange}),n.a.createElement(I.a.Control.Feedback,{type:"invalid"},t.description)),n.a.createElement(I.a.Group,{controlId:"formStartDate"},n.a.createElement(I.a.Label,null,"Start Date"),n.a.createElement(I.a.Control,{type:"date",name:"startDate",value:o,onChange:this.onChange})),n.a.createElement(I.a.Group,{controlId:"formEndDate"},n.a.createElement(I.a.Label,null,"Estimated End Date"),n.a.createElement(I.a.Control,{type:"date",name:"endDate",value:l,onChange:this.onChange})),n.a.createElement(h.a,{type:"submit",block:!0},"Update"))))}}]),a}(r.Component),se=Object(j.b)((function(e){return{project:e.project.project,errors:e.errors}}),{getProject:function(e,t){return function(){var a=Object(y.a)(g.a.mark((function a(r){var n;return g.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,k.a.get("/api/projects/".concat(e));case 3:n=a.sent,console.debug(n),r({type:"GET_PROJECT",payload:n.data}),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(0),t.push("/error");case 11:case"end":return a.stop()}}),a,null,[[0,8]])})));return function(e){return a.apply(this,arguments)}}()},createProject:O})(le),ie=a(72),ue=a.n(ie),me=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("img",{src:ue.a,alt:"Page not Found"}),n.a.createElement("p",{style:{textAlign:"center"}},n.a.createElement(b.b,{to:"/"},"Go to Home ")))}}]),a}(r.Component),pe=a(73),de=a(51),he=a.n(de),Ee=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).getPriorityColorAndStringValue=function(e){var t,a;switch(e.priority){case 1:t="HIGH",a="bg-danger text-light";break;case 2:t="MEDIUM",a="bg-primary text-light";break;case 3:t="LOW",a="bg-secondary text-light"}return{priorityColorClass:a,priorityAsString:t}},e}return Object(s.a)(a,[{key:"onDeleteClick",value:function(e,t){this.props.deleteProjectTask(e,t)}},{key:"render",value:function(){var e=this.props.projectTask,t=he()(e).format("MMMM Do YYYY"),a=this.getPriorityColorAndStringValue(e),r=a.priorityColorClass,c=a.priorityAsString;return n.a.createElement("div",{className:"row-sm-3"},n.a.createElement(d.a,{text:"dark",className:"mb-2 mh-20"},n.a.createElement(d.a.Header,{className:"".concat(r)},"ID: ",e.projectSequence," | Priority: ",c),n.a.createElement(d.a.Body,null,n.a.createElement(d.a.Title,null,e.summary),n.a.createElement(d.a.Text,{className:"text-truncate"},e.acceptanceCriteria),n.a.createElement(E.a,null," ",n.a.createElement(b.b,{to:"/updateProjectTask/".concat(e.projectIdentifier,"/").concat(e.projectSequence)},n.a.createElement(h.a,{variant:"primary",className:"mr-2"},n.a.createElement(f.a,{icon:"edit"})," View / Update")),n.a.createElement(h.a,{variant:"danger",onClick:this.onDeleteClick.bind(this,e.projectIdentifier,e.projectSequence)},n.a.createElement(f.a,{icon:"minus-square"})," Delete"))),n.a.createElement(d.a.Text,null,n.a.createElement("small",{className:"text-muted"},"Created on ",t))))}}]),a}(r.Component),fe=Object(j.b)(null,{deleteProjectTask:function(e,t){return function(){var a=Object(y.a)(g.a.mark((function a(r){return g.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(!window.confirm("You are deleting project task ".concat(t,", this action cannot be undone?"))){a.next=4;break}return a.next=3,k.a.delete("/api/backlogs/".concat(e,"/tasks/").concat(t));case 3:r({type:"DELETE_PROJECT_TASK",payload:t});case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}})(Ee),be=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).distributeToCardDecks=function(e){var t=e.map((function(e){return n.a.createElement(fe,{key:e.id,projectTask:e})})),a=[],r=[],c=[];return t.forEach((function(e){switch(e.props.projectTask.status){case"TO_DO":a.push(e);break;case"IN_PROGRESS":r.push(e);break;case"DONE":c.push(e);break;default:console.error("Unknown Card Deck : "+e.props.projectTask.status)}})),{toDoItems:a,inProgressItems:r,doneItems:c}},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props.projectTasksProp,t=this.distributeToCardDecks(e),a=t.toDoItems,r=t.inProgressItems,c=t.doneItems;return n.a.createElement(pe.a,null,n.a.createElement(d.a,{bg:"dark",text:"white",className:"text-center p-2"},n.a.createElement(d.a.Header,{as:"h5",className:"mb-2"},"TO DO"),a),n.a.createElement(d.a,{md:{offset:1},bg:"warning",text:"light",className:"text-center p-2"},n.a.createElement(d.a.Header,{as:"h5",className:"mb-2"},"In Progress"),r),n.a.createElement(d.a,{bg:"success",text:"light",className:"text-center p-2"},n.a.createElement(d.a.Header,{as:"h5",className:"mb-2"},"Done"),c))}}]),a}(r.Component),je=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={errors:{}},e}return Object(s.a)(a,[{key:"componentWillReceiveProps",value:function(e){e.errors&&this.setState({errors:e.errors})}},{key:"componentDidMount",value:function(){var e=this.props.match.params.id;this.props.getBacklog(e)}},{key:"render",value:function(){var e,t=this.props.match.params.id,a=this.props.backlog.projectTasks,r=this.state.errors;return e=this.boardAlgorithm()(r,a),n.a.createElement(m.a,{fluid:!0,className:"justify-content-md-center"},n.a.createElement("br",null),n.a.createElement(b.b,{to:"/addProjectTask/".concat(t),className:"mb-3"},n.a.createElement(h.a,{variant:"light",size:"lg",className:"float-left"},n.a.createElement(f.a,{icon:"plus-square"})," Create Project Task")),n.a.createElement("br",null),n.a.createElement("hr",null),e)}},{key:"boardAlgorithm",value:function(){return function(e,t){return t.length<1?e.projectNotFound?n.a.createElement("div",{className:"alert alert-danger text-center",role:"alert"},e.projectNotFound):e.projectIdentifier?n.a.createElement("div",{className:"alert alert-danger text-center",role:"alert"},e.projectIdentifier):n.a.createElement("div",{className:"alert alert-info text-center",role:"alert"},"No Project Tasks on this board"):n.a.createElement(be,{projectTasksProp:t})}}}]),a}(r.Component),ve=Object(j.b)((function(e){return{backlog:e.backlog,errors:e.errors}}),{getBacklog:function(e){return function(){var t=Object(y.a)(g.a.mark((function t(a){var r;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,k.a.get("/api/projects/".concat(e,"/backlog/"));case 3:r=t.sent,console.debug(r),a({type:"GET_BACKLOG",payload:r.data}),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(0),console.error(t.t0),a({type:"GET_ERRORS",payload:t.t0.response.data});case 12:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()}})(je),ge=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var r;Object(l.a)(this,a),(r=t.call(this,e)).onChange=function(e){r.setState(Object(J.a)({},e.target.name,e.target.value))},r.onSubmit=function(e){e.preventDefault();var t={summary:r.state.summary,acceptanceCriteria:r.state.acceptanceCriteria,priority:r.state.priority,projectIdentifier:r.state.projectIdentifier,dueDate:r.state.dueDate,status:r.state.status};r.props.addProjectTask(r.state.projectIdentifier,t,r.props.history),console.debug(t)};var n=r.props.match.params.id;return r.state={summary:"",acceptanceCriteria:"",priority:0,status:"",dueDate:"",projectIdentifier:n,errors:{}},r.onChange=r.onChange.bind(Object(z.a)(r)),r.onSubmit=r.onSubmit.bind(Object(z.a)(r)),r}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props.match.params.id,t=this.state.errors;return n.a.createElement(m.a,{fluid:!0,className:"p-2 flex-fill justify-content-center"},n.a.createElement("div",{className:"col-md-8 m-auto"},n.a.createElement(b.b,{to:"/projectBoard/".concat(e),className:"mb-3"},n.a.createElement(h.a,{variant:"dark",className:"float-left",size:"sm"},n.a.createElement(f.a,{icon:"backward"})," Back to Project Board")),n.a.createElement("br",null),n.a.createElement("hr",null),n.a.createElement("h4",{className:"display-4 text-center"},"Add Project Task"),n.a.createElement("p",{className:"lead text-center"},"Project Name + Project Code"),n.a.createElement(I.a,{onSubmit:this.onSubmit,className:"d-flex-fill p-1 text-left"},n.a.createElement(I.a.Label,null,"Project Task Summary"),n.a.createElement(I.a.Group,null,n.a.createElement(I.a.Control,{as:"input",name:"summary",className:W()({"is-invalid":t.summary}),placeholder:"Project Task summary",value:this.state.summary,onChange:this.onChange}),n.a.createElement(I.a.Control.Feedback,{type:"invalid"},t.summary)),n.a.createElement(I.a.Group,null,n.a.createElement(I.a.Label,null,"Acceptance Criteria"),n.a.createElement(I.a.Control,{as:"textarea",name:"acceptanceCriteria",placeholder:"Acceptance Criteria",value:this.state.acceptanceCriteria,onChange:this.onChange})),n.a.createElement(I.a.Group,null,n.a.createElement(I.a.Label,null,"Due Date"),n.a.createElement(I.a.Control,{type:"date",name:"dueDate",value:this.state.dueDate,onChange:this.onChange})),n.a.createElement(I.a.Group,null,n.a.createElement(I.a.Label,null,"Priority"),n.a.createElement(I.a.Control,{as:"select",custom:!0,name:"priority",required:!0,value:this.state.priority,onChange:this.onChange},n.a.createElement("option",{value:0},"Select Priority"),n.a.createElement("option",{value:1},"High"),n.a.createElement("option",{value:2},"Medium"),n.a.createElement("option",{value:3},"Low"))),n.a.createElement(I.a.Group,null,n.a.createElement(I.a.Label,null,"Status"),n.a.createElement(I.a.Control,{as:"select",custom:!0,name:"status",value:this.state.status,onChange:this.onChange},n.a.createElement("option",{value:""},"Select Status"),n.a.createElement("option",{value:"TO_DO"},"TO DO"),n.a.createElement("option",{value:"IN_PROGRESS"},"IN PROGRESS"),n.a.createElement("option",{value:"DONE"},"DONE"))),n.a.createElement(h.a,{type:"submit",block:!0},"Submit"))))}}]),a}(r.Component);ge.getDerivedStateFromProps=function(e,t){return e.errors&&(t.errors=e.errors),t};var ye=Object(j.b)((function(e){return{errors:e.errors}}),{addProjectTask:function(e,t,a){return function(){var r=Object(y.a)(g.a.mark((function r(n){var c;return g.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,k.a.post("/api/projects/".concat(e,"/backlog"),t);case 3:c=r.sent,a.push("/projectBoard/".concat(e)),console.debug(c),n({type:"GET_ERRORS",payload:{}}),r.next=13;break;case 9:r.prev=9,r.t0=r.catch(0),console.error(r.t0),n({type:"GET_ERRORS",payload:r.t0.response.data});case 13:case"end":return r.stop()}}),r,null,[[0,9]])})));return function(e){return r.apply(this,arguments)}}()}})(ge),Ce=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={id:"",projectSequence:"",summary:"",acceptanceCriteria:"",status:"",priority:"",dueDate:"",projectIdentifier:"",createdAt:"",errors:{}},e.onChange=e.onChange.bind(Object(z.a)(e)),e.onSubmit=e.onSubmit.bind(Object(z.a)(e)),e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.match.params,t=e.backlogId,a=e.projectTaskId;this.props.getProjectTask(t,a,this.props.history)}},{key:"componentWillReceiveProps",value:function(e){e.errors&&this.setState({errors:e.errors});var t=e.projectTask,a=t.id,r=t.projectSequence,n=t.summary,c=t.acceptanceCriteria,o=t.status,l=t.priority,s=t.dueDate,i=t.projectIdentifier,u=t.createdAt;this.setState({id:a,projectSequence:r,summary:n,acceptanceCriteria:c,status:o,priority:l,dueDate:s,projectIdentifier:i,createdAt:u})}},{key:"onChange",value:function(e){this.setState(Object(J.a)({},e.target.name,e.target.value))}},{key:"onSubmit",value:function(e){e.preventDefault();var t={id:this.state.id,projectSequence:this.state.projectSequence,summary:this.state.summary,acceptanceCriteria:this.state.acceptanceCriteria,status:this.state.status,priority:this.state.priority,dueDate:this.state.dueDate,projectIdentifier:this.state.projectIdentifier,createdAt:this.state.createdAt};this.props.updateProjectTask(this.state.projectIdentifier,this.state.projectSequence,t,this.props.history)}},{key:"render",value:function(){var e=this.state.errors;return n.a.createElement(m.a,{fluid:!0,className:"p-2 flex-fill justify-content-center"},n.a.createElement("div",{className:"col-md-8 m-auto"},n.a.createElement(b.b,{to:"/projectBoard/".concat(this.state.projectIdentifier),className:"mb-3"},n.a.createElement(h.a,{variant:"dark",className:"float-left",size:"sm"},n.a.createElement(f.a,{icon:"backward"})," Back to Project Board")),n.a.createElement("br",null),n.a.createElement("hr",null),n.a.createElement("h4",{className:"display-4 text-center"},"Update Project Task"),n.a.createElement("p",{className:"lead text-center"},"Project Name: ",this.state.projectIdentifier," | Project Task ID:"," ",this.state.projectSequence," "),n.a.createElement(I.a,{onSubmit:this.onSubmit,className:"d-flex-fill p-1 text-left"},n.a.createElement(I.a.Label,null,"Project Task Summary"),n.a.createElement(I.a.Group,null,n.a.createElement(I.a.Control,{as:"input",name:"summary",className:W()({"is-invalid":e.summary}),placeholder:"Project Task summary",value:this.state.summary,onChange:this.onChange}),n.a.createElement(I.a.Control.Feedback,{type:"invalid"},e.summary)),n.a.createElement(I.a.Group,null,n.a.createElement(I.a.Label,null,"Acceptance Criteria"),n.a.createElement(I.a.Control,{as:"textarea",name:"acceptanceCriteria",placeholder:"Acceptance Criteria",value:this.state.acceptanceCriteria,onChange:this.onChange})),n.a.createElement(I.a.Group,null,n.a.createElement(I.a.Label,null,"Due Date"),n.a.createElement(I.a.Control,{type:"date",name:"dueDate",value:this.state.dueDate,onChange:this.onChange})),n.a.createElement(I.a.Group,null,n.a.createElement(I.a.Label,null,"Priority"),n.a.createElement(I.a.Control,{as:"select",custom:!0,name:"priority",required:!0,value:this.state.priority,onChange:this.onChange},n.a.createElement("option",{value:0},"Select Priority"),n.a.createElement("option",{value:1},"High"),n.a.createElement("option",{value:2},"Medium"),n.a.createElement("option",{value:3},"Low"))),n.a.createElement(I.a.Group,null,n.a.createElement(I.a.Label,null,"Status"),n.a.createElement(I.a.Control,{as:"select",custom:!0,name:"status",value:this.state.status,onChange:this.onChange},n.a.createElement("option",{value:""},"Select Status"),n.a.createElement("option",{value:"TO_DO"},"TO DO"),n.a.createElement("option",{value:"IN_PROGRESS"},"IN PROGRESS"),n.a.createElement("option",{value:"DONE"},"DONE"))),n.a.createElement(h.a,{type:"submit",block:!0},"Submit"))))}}]),a}(r.Component),ke=Object(j.b)((function(e){return{projectTask:e.backlog.projectTask,errors:e.errors}}),{getProjectTask:function(e,t,a){return function(){var r=Object(y.a)(g.a.mark((function r(n){var c;return g.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,k.a.get("/api/backlogs/".concat(e,"/tasks/").concat(t));case 3:c=r.sent,console.debug(c),n({type:"GET_PROJECT_TASK",payload:c.data}),r.next=12;break;case 8:r.prev=8,r.t0=r.catch(0),console.error(r.t0),a.push("/error");case 12:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(e){return r.apply(this,arguments)}}()},updateProjectTask:function(e,t,a,r){return function(){var n=Object(y.a)(g.a.mark((function n(c){return g.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,k.a.patch("/api/backlogs/".concat(e,"/tasks/").concat(t),a);case 3:r.push("/projectBoard/".concat(e)),c({type:"GET_ERRORS",payload:{}}),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),c({type:"GET_ERRORS",payload:n.t0.response.data});case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}()}})(Ce),Oe=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.props.security.validToken&&this.props.history.push("/dashboard")}},{key:"render",value:function(){return n.a.createElement("div",{className:"landing"},n.a.createElement("div",{className:"light-overlay landing-inner text-dark"},n.a.createElement(m.a,null,n.a.createElement(p.a,null,n.a.createElement("div",{className:"col-md-12 text-center"},n.a.createElement("h1",{className:"display-3 mb-4"},"Personal Project Management Tool"),n.a.createElement("p",{className:"lead"},"Create your account to join active projects or start your own"),n.a.createElement("hr",null),n.a.createElement(b.b,{to:"/register",className:"btn btn-lg btn-primary mr-2"},"Sign Up"),n.a.createElement(b.b,{to:"/login",className:"btn btn-lg btn-secondary mr-2"},"Login"))))))}}]),a}(r.Component),Ne=Object(j.b)((function(e){return{security:e.security}}))(Oe),Se=a(33),Te=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var r;return Object(l.a)(this,a),(r=t.call(this,e)).componentWillReceiveProps=function(e){return e.security.validToken&&r.props.history.push("/dashboard"),e.errors&&r.setState({errors:e.errors}),null},r.onChange=function(e){r.setState(Object(J.a)({},e.target.name,e.target.value))},r.onSubmit=function(e){e.preventDefault();var t={username:r.state.username,password:r.state.password};r.props.authenticateUser(t,r.props.history),console.log(t)},r.state={username:"",password:"",errors:{}},r.onChange=r.onChange.bind(Object(z.a)(r)),r.onSubmit=r.onSubmit.bind(Object(z.a)(r)),r.props.security.validToken&&r.props.history.push("/dashboard"),r}return Object(s.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state.errors;return n.a.createElement("div",{className:"login"},n.a.createElement(m.a,null,n.a.createElement("div",{className:"col-md-8 m-auto"},n.a.createElement("h1",{className:"display-4 text-center"},"Log In"),n.a.createElement(I.a,{onSubmit:this.onSubmit},n.a.createElement(Se.a,{className:"d-flex-fill p-1 text-left"},n.a.createElement(I.a.Control,{type:"email",placeholder:"Email Address (Username)",name:"username",required:!0,className:W()({"is-invalid":e.username}),value:this.state.username,onChange:this.onChange}),n.a.createElement(I.a.Control.Feedback,{type:"invalid"},e.username)),n.a.createElement(Se.a,{className:"d-flex-fill p-1 text-left"},n.a.createElement(I.a.Control,{type:"password",placeholder:"Password",name:"password",required:!0,className:W()({"is-invalid":e.password}),value:this.state.password,onChange:this.onChange}),n.a.createElement(I.a.Control.Feedback,{type:"invalid"},e.password)),n.a.createElement(h.a,{type:"submit",variant:"info",className:"mt-4",block:!0},"Submit")))))}}]),a}(r.Component),Pe=Object(j.b)((function(e){return{security:e.security,errors:e.errors}}),{authenticateUser:function(e,t){return function(){var t=Object(y.a)(g.a.mark((function t(a){var r,n,c;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,k.a.post("/api/users/login",e);case 3:r=t.sent,console.log(r),n=r.data.token,localStorage.setItem("jwtToken",n),_(n),c=L()(n),a({type:"SET_CURRENT_USER",payload:c}),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),a({type:"GET_ERRORS",payload:t.t0.response.data});case 15:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(e){return t.apply(this,arguments)}}()}})(Te),xe=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var r;return Object(l.a)(this,a),(r=t.call(this,e)).onChange=function(e){r.setState(Object(J.a)({},e.target.name,e.target.value))},r.onSubmit=function(e){e.preventDefault();var t={username:r.state.username,fullName:r.state.fullName,password:r.state.password,confirmPassword:r.state.confirmPassword};r.props.createNewUser(t,r.props.history),console.log(t)},r.state={username:"",fullName:"",password:"",confirmPassword:"",errors:{}},r.onChange=r.onChange.bind(Object(z.a)(r)),r.onSubmit=r.onSubmit.bind(Object(z.a)(r)),r.props.security.validToken&&r.props.history.push("/dashboard"),r}return Object(s.a)(a,[{key:"render",value:function(){var e=this.state.errors;return n.a.createElement("div",{className:"register"},n.a.createElement(m.a,null,n.a.createElement("div",{className:"col-md-8 m-auto"},n.a.createElement("h1",{className:"display-4 text-center"},"Sign Up"),n.a.createElement("p",{className:"lead text-center"},"Create your Account"),n.a.createElement(I.a,{onSubmit:this.onSubmit},n.a.createElement(Se.a,{className:"d-flex-fill p-1 text-left"},n.a.createElement(I.a.Control,{type:"text",placeholder:"Full Name",name:"fullName",size:"lg",required:!0,className:W()({"is-invalid":e.username}),value:this.state.fullName,onChange:this.onChange}),n.a.createElement(I.a.Control.Feedback,{type:"invalid"},e.fullName)),n.a.createElement(I.a.Group,{className:"d-flex-fill p-1 text-left",controlId:"formBasicEmail"},n.a.createElement(I.a.Control,{type:"email",placeholder:"Enter email (Username)",name:"username",size:"lg",required:!0,className:W()({"is-invalid":e.username}),value:this.state.username,onChange:this.onChange}),n.a.createElement(I.a.Text,{className:"text-muted"},"We'll never share your email with anyone else."),n.a.createElement(I.a.Control.Feedback,{type:"invalid"},e.username)),n.a.createElement(Se.a,null,n.a.createElement(I.a.Control,{type:"password",placeholder:"Password",name:"password",size:"lg",required:!0,className:W()({"is-invalid":e.password}),value:this.state.password,onChange:this.onChange}),n.a.createElement(I.a.Control.Feedback,{type:"invalid"},e.password)),n.a.createElement(Se.a,null,n.a.createElement(I.a.Control,{type:"password",placeholder:"Confirm Password",name:"confirmPassword",size:"lg",required:!0,className:W()({"is-invalid":e.confirmPassword}),value:this.state.confirmPassword,onChange:this.onChange}),n.a.createElement(I.a.Control.Feedback,{type:"invalid"},e.confirmPassword)),n.a.createElement(h.a,{type:"submit",variant:"info",className:"mt-4",block:!0},"Submit")))))}}]),a}(r.Component);xe.getDerivedStateFromProps=function(e,t){return e.errors&&(t.errors=e.errors),t};var De=Object(j.b)((function(e){return{security:e.security,errors:e.errors}}),{createNewUser:function(e,t){return function(){var a=Object(y.a)(g.a.mark((function a(r){var n;return g.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,k.a.post("/api/users/register",e);case 3:n=a.sent,console.log(n),t.push("/login"),r({type:"GET_ERRORS",payload:{}}),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(0),r({type:"GET_ERRORS",payload:a.t0.response.data});case 12:case"end":return a.stop()}}),a,null,[[0,9]])})));return function(e){return a.apply(this,arguments)}}()}})(xe),we=a(74),Ie=Object(j.b)((function(e){return{security:e.security}}))((function(e){var t=e.component,a=e.security,r=Object(we.a)(e,["component","security"]);return n.a.createElement(M.b,Object.assign({},r,{render:function(e){return!0===a.validToken?n.a.createElement(t,e):n.a.createElement(M.a,{to:"/login"})}}))}));F.b.add(B.b,B.c,B.d,B.e,B.f,B.a,B.h,B.i,B.g);var Re=localStorage.jwtToken;if(Re){_(Re);var _e=L()(Re);oe.dispatch({type:"SET_CURRENT_USER",payload:_e});var Ge=he()().unix();_e.exp<Ge&&(console.log("JWT Token expired - logging out..."),oe.dispatch(A()),window.location.href="/")}var Le=function(){return n.a.createElement(j.a,{store:oe},n.a.createElement(b.a,null,n.a.createElement("div",{className:"App"},n.a.createElement(U,null),n.a.createElement(M.d,null,n.a.createElement(M.b,{exact:!0,path:"/",component:Ne}),n.a.createElement(M.b,{exact:!0,path:"/login",component:Pe}),n.a.createElement(M.b,{exact:!0,path:"/register",component:De}),n.a.createElement(Ie,{exact:!0,path:"/dashboard",component:x}),n.a.createElement(Ie,{exact:!0,path:"/addProject",component:V}),n.a.createElement(Ie,{exact:!0,path:"/updateProject/:id",component:se}),n.a.createElement(Ie,{exact:!0,path:"/projectBoard/:id",component:ve}),n.a.createElement(Ie,{exact:!0,path:"/addProjectTask/:id",component:ye}),n.a.createElement(Ie,{exact:!0,path:"/updateProjectTask/:backlogId/:projectTaskId",component:ke}),n.a.createElement(M.b,{path:"*",component:me})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(Le,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},72:function(e,t,a){e.exports=a.p+"static/media/PageNotFound.e659b517.png"},75:function(e,t,a){e.exports=a(111)},80:function(e,t,a){},81:function(e,t,a){}},[[75,1,2]]]);
//# sourceMappingURL=main.2a500826.chunk.js.map