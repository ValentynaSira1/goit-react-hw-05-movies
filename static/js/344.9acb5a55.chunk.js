"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[344],{344:function(e,t,r){r.r(t),r.d(t,{default:function(){return h}});var n=r(861),a=r(439),c=r(757),s=r.n(c),o=r(474),u=r(791),i=r(689),p="Home_title__FBeIP",l=r(155),f=r(521),v=r(184),h=function(){var e=(0,u.useState)([]),t=(0,a.Z)(e,2),r=t[0],c=t[1],h=(0,u.useState)(!1),d=(0,a.Z)(h,2),m=d[0],w=d[1],g=(0,u.useState)(!1),x=(0,a.Z)(g,2),k=x[0],y=x[1],Z=(0,i.TH)();return(0,u.useEffect)((function(){try{y(!0);var e=function(){var e=(0,n.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,o.wr)();case 2:t=e.sent,c(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}catch(m){m.response&&m.response.status,w(!0)}finally{y(!1)}}),[]),(0,v.jsxs)(v.Fragment,{children:[k&&(0,v.jsx)(f.a,{}),m&&(0,v.jsx)("h2",{className:p,children:"No data from services"}),(0,v.jsx)("h2",{className:p,children:"Trending today"}),r.length>0&&(0,v.jsx)(l.Z,{movies:r,state:{from:Z}})]})}},474:function(e,t,r){r.d(t,{Hx:function(){return p},Mc:function(){return u},bI:function(){return l},uV:function(){return i},wr:function(){return o}});var n=r(861),a=r(757),c=r.n(a),s=r(243),o=function(){var e=(0,n.Z)(c().mark((function e(){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.themoviedb.org/3/trending/all/day","3a46a7267a5317e24c5053073610996d",t=new URLSearchParams({api_key:"3a46a7267a5317e24c5053073610996d"}),e.prev=3,e.next=6,s.Z.get("".concat("https://api.themoviedb.org/3/trending/all/day","?").concat(t));case 6:return r=e.sent,e.abrupt("return",r.data.results);case 10:e.prev=10,e.t0=e.catch(3),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="https://api.themoviedb.org/3/movie/".concat(t),"3a46a7267a5317e24c5053073610996d",n=new URLSearchParams({api_key:"3a46a7267a5317e24c5053073610996d"}),e.prev=3,e.next=6,s.Z.get("".concat(r,"?").concat(n));case 6:return a=e.sent,e.abrupt("return",a);case 10:e.prev=10,e.t0=e.catch(3),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(t){return e.apply(this,arguments)}}(),i=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="https://api.themoviedb.org/3/movie/".concat(t,"/credits"),"3a46a7267a5317e24c5053073610996d",n=new URLSearchParams({api_key:"3a46a7267a5317e24c5053073610996d"}),e.prev=3,e.next=6,s.Z.get("".concat(r,"?").concat(n));case 6:return a=e.sent,e.abrupt("return",a.data);case 10:e.prev=10,e.t0=e.catch(3),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="https://api.themoviedb.org/3/movie/".concat(t,"/reviews"),"3a46a7267a5317e24c5053073610996d",n=new URLSearchParams({api_key:"3a46a7267a5317e24c5053073610996d"}),e.prev=3,e.next=6,s.Z.get("".concat(r,"?").concat(n));case 6:return a=e.sent,e.abrupt("return",a.data);case 10:e.prev=10,e.t0=e.catch(3),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.themoviedb.org/3/search/movie","3a46a7267a5317e24c5053073610996d",r=new URLSearchParams({api_key:"3a46a7267a5317e24c5053073610996d",query:t}),e.prev=3,e.next=6,s.Z.get("".concat("https://api.themoviedb.org/3/search/movie","?").concat(r));case 6:return n=e.sent,e.abrupt("return",n.data.results);case 10:e.prev=10,e.t0=e.catch(3),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(t){return e.apply(this,arguments)}}()},155:function(e,t,r){r.d(t,{Z:function(){return s}});var n="MoviesList_list__0Owr9",a=r(87),c=r(184),s=function(e){var t=e.movies,r=e.state;return(0,c.jsx)("ul",{className:n,children:t.map((function(e){var t,n=null!==(t=e.title)&&void 0!==t?t:e.name;return(0,c.jsx)("li",{children:(0,c.jsx)(a.rU,{to:"/movies/".concat(e.id),state:{from:r.from},children:n})},e.id)}))})}}}]);
//# sourceMappingURL=344.9acb5a55.chunk.js.map