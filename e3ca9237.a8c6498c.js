(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{84:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),o=(n(0),n(91)),i={id:"mongo-binary",title:"MongoBinary"},c={unversionedId:"api/mongo-binary",id:"api/mongo-binary",isDocsHomePage:!1,title:"MongoBinary",description:"API Documentation of MongoBinary-Class",source:"@site/../docs/api/mongobinary.md",slug:"/api/mongo-binary",permalink:"/mongodb-memory-server/docs/api/mongo-binary",editUrl:"https://github.com/nodkz/mongodb-memory-server/edit/master/docs/../docs/api/mongobinary.md",version:"current",sidebar:"api",previous:{title:"MongoInstance",permalink:"/mongodb-memory-server/docs/api/mongo-instance"}},s=[{value:"Functions",id:"functions",children:[{value:"getSystemPath",id:"getsystempath",children:[]},{value:"getDownloadPath",id:"getdownloadpath",children:[]},{value:"getPath",id:"getpath",children:[]}]},{value:"Values",id:"values",children:[{value:"cache",id:"cache",children:[]}]}],l={toc:s};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.a)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.a)("p",null,"API Documentation of ",Object(o.a)("inlineCode",{parentName:"p"},"MongoBinary"),"-Class"),Object(o.a)("h2",{id:"functions"},"Functions"),Object(o.a)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.a)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.a)("h5",{parentName:"div"},Object(o.a)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.a)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.a)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.a)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.a)("p",{parentName:"div"},"This class is not actually meant to be constructed, it only consists of static functions & values"))),Object(o.a)("h3",{id:"getsystempath"},"getSystemPath"),Object(o.a)("p",null,"Typings: ",Object(o.a)("inlineCode",{parentName:"p"},"static async getSystemPath(systemBinary: string): Promise<string | undefined>")),Object(o.a)("p",null,"Try to stat the given ",Object(o.a)("inlineCode",{parentName:"p"},"systemBinary")," path, and return it if successfull, otherwise ",Object(o.a)("inlineCode",{parentName:"p"},"undefined")),Object(o.a)("h3",{id:"getdownloadpath"},"getDownloadPath"),Object(o.a)("p",null,"Typings: ",Object(o.a)("inlineCode",{parentName:"p"},"static async getDownloadPath(options: Required<MongoBinaryOpts>): Promise<string>")),Object(o.a)("p",null,"Get an binary from cache or download it"),Object(o.a)("h3",{id:"getpath"},"getPath"),Object(o.a)("p",null,"Typings: ",Object(o.a)("inlineCode",{parentName:"p"},"static async getPath(opts: MongoBinaryOpts = {}): Promise<string>")),Object(o.a)("p",null,"Get an working binary and returns the path to it",Object(o.a)("br",null),"\n(Calls ",Object(o.a)("a",Object(a.a)({parentName:"p"},{href:"#getdownloadpath"}),Object(o.a)("inlineCode",{parentName:"a"},"getDownloadPath")),")"),Object(o.a)("h2",{id:"values"},"Values"),Object(o.a)("h3",{id:"cache"},"cache"),Object(o.a)("p",null,"Typings: ",Object(o.a)("inlineCode",{parentName:"p"},"static cache: Map<string, string>")),Object(o.a)("p",null,"Global Cache for binaries"))}p.isMDXComponent=!0},91:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,b=u["".concat(i,".").concat(m)]||u[m]||d[m]||o;return n?r.a.createElement(b,c(c({ref:t},l),{},{components:n})):r.a.createElement(b,c({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);