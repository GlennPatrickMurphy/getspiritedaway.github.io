(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{144:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(43),i=n.n(c),r=(n(83),n(12)),l=n(13),s=n(17),d=n(14),u=n(16),m=n(3),p=n(18),g=(n(85),n(25)),f=n.n(g),b=n(44),h=function(e,t){return"".concat(0|e,"\xb0 ").concat(0|(e<0?e=-e:e)%1*60,"' ").concat(0|60*e%1*60,'" ').concat(function(e,t){return e>0?t?"E":"N":t?"W":"S"}(e,t))},v=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props;return o.a.createElement("div",{style:{fontSize:"large",fontWeight:"bold",margin:"2rem"}},e.isGeolocationAvailable?e.isGeolocationEnabled?e.coords?o.a.createElement("div",null,"You are at"," ",o.a.createElement("span",{className:"coordinate"},h(e.coords.latitude,!1)),","," ",o.a.createElement("span",{className:"coordinate"},h(e.coords.longitude,!0)),e.coords.altitude?o.a.createElement("span",null,", approximately ",e.coords.altitude," meters above sea level"):null,"."):o.a.createElement("div",null,"Getting the location data\u2026"):o.a.createElement("div",null,"Geolocation is not enabled."):o.a.createElement("div",null,"Your browser does not support Geolocation."))}}]),t}(o.a.Component),E=Object(b.geolocated)({positionOptions:{enableHighAccuracy:!1},userDecisionTimeout:5e3})(v),y=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(s.a)(this,Object(d.a)(t).call(this,e))).getInnerRef=n.getInnerRef.bind(Object(m.a)(Object(m.a)(n))),n.getLocation=n.getLocation.bind(Object(m.a)(Object(m.a)(n))),n}return Object(u.a)(t,e),Object(l.a)(t,[{key:"getInnerRef",value:function(e){this.innerRef=e}},{key:"getLocation",value:function(){this.innerRef&&this.innerRef.getLocation()}},{key:"render",value:function(){var e=this.getInnerRef,t=this.getLocation;return o.a.createElement("div",{className:"container",style:{"padding-left":"10%","padding-right":"10%"}},o.a.createElement("article",{style:{textAlign:"center"}},o.a.createElement(E,{onError:function(e){return console.log(e)},ref:e}),o.a.createElement("button",{className:"pure-button pure-button-primary",onClick:t,type:"button"},"Get location")),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col align-self-center"},o.a.createElement("h1",null,"Get Spirited Away"))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col align-self-center"},o.a.createElement("img",{src:f.a,alt:"plane"}))),o.a.createElement(p.b,{app:"getspiritedaway_ver2",credentials:"eJHnjdtyA:8fb5aaf5-71c4-41a1-921e-c5d88ee96777"},o.a.createElement(p.a,{className:"btrow",style:{"padding-left":"10%","padding-right":"10%"},componentId:"searchbox",dataField:["description","description.autosuggest","description.keyword"],placeholder:"Search for Vacations"}),o.a.createElement(p.c,{componentId:"result",style:{"padding-left":"10%","padding-right":"10%",image:f.a},size:10,dataField:"City.keyword",pagination:!0,react:{and:["searchbox"]},onData:function(e){return{title:e._id,description:e.dest+" on "+e.depart_month+" at "+e.price}}})))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},25:function(e,t,n){e.exports=n.p+"static/media/planecrop.a28fcd19.png"},78:function(e,t,n){e.exports=n(144)},83:function(e,t,n){},85:function(e,t,n){}},[[78,2,1]]]);
//# sourceMappingURL=main.a85c3f49.chunk.js.map