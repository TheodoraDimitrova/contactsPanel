(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),o=a.n(c),l=a(1),i=a(2),s=a(4),m=a(3),u=a(5),d=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.branding;return r.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0"},r.a.createElement("div",{className:"container"},r.a.createElement("a",{href:"/",className:"navbar-brand"},e)),r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{href:"/",className:"nav-link"},"Home"))))}}]),t}(n.Component);d.defaultProps={branding:"My App"};var h=d,p=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={showInfo:!1},a.activateContactInfo=function(e){a.setState({showInfo:!a.state.showInfo})},a.deleteContact=function(){a.props.deleteClickHandler()},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state.showInfo,t=this.props.contact,a=t.name,n=t.phone,c=t.email;return r.a.createElement("div",{className:"card card-body mb-3"},r.a.createElement("h4",null,a," ",r.a.createElement("i",{className:"fas fa-chevron-down",style:{cursor:"pointer"},onClick:this.activateContactInfo}),r.a.createElement("i",{className:"fas fa-user-times",style:{cursor:"pointer",color:"red",float:"right"},onClick:this.deleteContact})),e?r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item"},"Email : ",c),r.a.createElement("li",{className:"list-group-item"},"Phone : ",n)):null)}}]),t}(n.Component),v=r.a.createContext(),f=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={contacts:[{id:1,name:"John doe",email:"john@gmail.com",phone:"000-55-55-555"},{id:2,name:"T. Dimitrova",email:"teddy@gmail.com",phone:"000-53-55-555"},{id:3,name:"S. Dimitrova",email:"svet@gmail.com",phone:"786-55-55-555"}]},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(v.Provider,{value:this.state},this.props.children)}}]),t}(n.Component),b=v.Consumer,E=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).deleteContact=function(e){var t=a.state.contacts.filter(function(t){return t.id!==e});a.setState({contacts:t})},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(b,null,function(t){var a=t.contacts;return r.a.createElement(r.a.Fragment,null,a.map(function(t){return r.a.createElement(p,{key:t.id,contact:t,deleteClickHandler:e.deleteContact.bind(e,t.id)})}))})}}]),t}(n.Component);a(14),a(15);var g=function(){return r.a.createElement(f,null,r.a.createElement("div",{className:"App"},r.a.createElement(h,{branding:"Contact Manager"}),r.a.createElement("div",{className:"container"},r.a.createElement(E,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,a){e.exports=a(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.9195b42c.chunk.js.map