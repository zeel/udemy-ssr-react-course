(()=>{"use strict";var e={n:r=>{var t=r&&r.__esModule?()=>r.default:()=>r;return e.d(t,{a:t}),t},d:(r,t)=>{for(var n in t)e.o(t,n)&&!e.o(r,n)&&Object.defineProperty(r,n,{enumerable:!0,get:t[n]})},o:(e,r)=>Object.prototype.hasOwnProperty.call(e,r)};const r=require("express");var t=e.n(r);const n=require("react");var u=e.n(n);const o=require("react-redux"),l=require("react-router"),a=require("react-dom/server"),c=function(){return u().createElement("div",null,u().createElement("div",null,"I am new Home Component"),u().createElement("button",{onClick:function(){return console.log("clicked!")}},"Press me!"))},i=require("@reduxjs/toolkit/query/react");var s=(0,i.buildCreateApi)((0,i.coreModule)(),(0,i.reactHooksModule)({unstable__sideEffectsInRender:!0}))({reducerPath:"users",baseQuery:(0,i.fetchBaseQuery)({baseUrl:"https://react-ssr-api.herokuapp.com/"}),endpoints:function(e){return{getUsers:e.query({query:function(){return{url:"users"}}})}}}),d=s.useGetUsersQuery;const m=function(){var e=d(),r=e.data,t=e.error,n=e.isLoading;return u().createElement("div",null,n&&u().createElement("div",null,"Loading..."),t&&u().createElement("div",null,"Something went wrong!"),r&&r.map((function(e){var r=e.id,t=e.name;return u().createElement("div",{key:r},u().createElement("span",null,r)," ",u().createElement("span",null,t))})))},p=function(){return u().createElement(l.Routes,null,u().createElement(l.Route,{index:!0,element:u().createElement(c,null)}),u().createElement(l.Route,{path:"/users",element:u().createElement(m,null)}))};var v,E=(0,require("@reduxjs/toolkit").configureStore)({reducer:(v={},v[s.reducerPath]=s.reducer,v),middleware:function(e){return e().concat(s.middleware)}});(0,i.setupListeners)(E.dispatch);var f=t()();f.use(t().static("public")),f.get("*",(function(e,r){r.send(function(e,r){var t=(0,a.renderToString)(u().createElement(o.Provider,{store:r},u().createElement(l.StaticRouter,{location:e.url},u().createElement(p,null))));return'<!DOCTYPE html><html><head></head><body><div id="root">'.concat(t,'</div><script src="bundle.js"><\/script></body></html>')}(e,E))})),f.listen(3e3,(function(){console.log("Listening to port 3000")}))})();