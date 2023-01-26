(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{125:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return u}));var a=n(2),r=n(6),s=(n(0),n(139)),c=n(146),i=n(147),l=(n(142),{title:"Sentera Credentials",description:"Credentials - Sentera"}),o={unversionedId:"credentials_sentera",id:"credentials_sentera",isDocsHomePage:!1,title:"Sentera Credentials",description:"Credentials - Sentera",source:"@site/docs/credentials_sentera.md",permalink:"/docs/credentials_sentera",editUrl:"https://github.com/Leaf-Agriculture/docs/tree/master/docs/credentials_sentera.md",sidebar:"docs",previous:{title:"Stara Credentials",permalink:"/docs/credentials_stara"},next:{title:"Configurations Overview",permalink:"/docs/configurations_overview"}},b=[{value:"Sentera Credentials Endpoints",id:"sentera-credentials-endpoints",children:[{value:"Get the Sentera credentials",id:"get-the-sentera-credentials",children:[]},{value:"Create a Sentera credentials",id:"create-a-sentera-credentials",children:[]},{value:"Delete Sentera credentials",id:"delete-sentera-credentials",children:[]}]},{value:"Troubleshooting",id:"troubleshooting",children:[{value:"Events",id:"events",children:[]}]}],d={rightToc:b};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(s.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"Form of an Sentera Credentials resource:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "username": "str",\n  "password": "str",\n  "organizationName": "str"\n}\n')),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Endpoints")),Object(s.b)("table",null,Object(s.b)("thead",{parentName:"table"},Object(s.b)("tr",{parentName:"thead"},Object(s.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"),Object(s.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Endpoints"))),Object(s.b)("tbody",{parentName:"table"},Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(s.b)("a",Object(a.a)({parentName:"td"},{href:"#get-the-sentera-credentials"}),"Get the Sentera credentials")),Object(s.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(s.b)("span",{class:"badge badge--success"},"GET")," ",Object(s.b)("inlineCode",{parentName:"td"},"/users/{leafUserId}/sentera-credentials"))),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(s.b)("a",Object(a.a)({parentName:"td"},{href:"#create-a-sentera-credentials"}),"Create a Sentera credentials")),Object(s.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(s.b)("span",{class:"badge badge--warning"},"POST")," ",Object(s.b)("inlineCode",{parentName:"td"},"/users/{leafUserId}/sentera-credentials"))),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(s.b)("a",Object(a.a)({parentName:"td"},{href:"#delete-sentera-credentials"}),"Delete Sentera credentials")),Object(s.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(s.b)("span",{class:"badge badge--danger"},"DELETE")," ",Object(s.b)("inlineCode",{parentName:"td"},"/users/{leafUserId}/sentera-credentials"))))),Object(s.b)("h2",{id:"sentera-credentials-endpoints"},"Sentera Credentials Endpoints"),Object(s.b)("h3",{id:"get-the-sentera-credentials"},"Get the Sentera credentials"),Object(s.b)("p",null,"\xa0",Object(s.b)("span",{class:"badge badge--success"},"GET")," ",Object(s.b)("inlineCode",{parentName:"p"},"/users/{leafUserId}/sentera-credentials")),Object(s.b)("p",null,"Get the Sentera credentials of the Leaf User based on its ",Object(s.b)("inlineCode",{parentName:"p"},"id")," and returns a JSON with the credentials."),Object(s.b)("h4",{id:"request-examples"},"Request examples"),Object(s.b)(c.a,{defaultValue:"sh",values:[{label:"cURL",value:"sh"},{label:"JavaScript",value:"js"},{label:"Python",value:"py"}],mdxType:"Tabs"},Object(s.b)(i.a,{value:"sh",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"curl -X GET \\\n    -H 'Authorization: Bearer YOUR_TOKEN' \\\n    'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/sentera-credentials'\n"))),Object(s.b)(i.a,{value:"js",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const axios = require('axios')\nconst TOKEN = 'YOUR_TOKEN'\n\nconst endpoint = 'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/sentera-credentials'\nconst headers = { 'Authorization': `Bearer ${TOKEN}` }\n\naxios.get(endpoint, { headers })\n    .then(res => console.log(res.data))\n    .catch(console.error)\n"))),Object(s.b)(i.a,{value:"py",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-py"}),"import requests\n\nTOKEN = 'YOUR_TOKEN'\n\nendpoint = 'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/sentera-credentials'\nheaders = {'Authorization': f'Bearer {TOKEN}'}\n\nresponse = requests.get(endpoint, headers=headers)\nprint(response.json())\n")))),Object(s.b)("h4",{id:"response"},"Response"),Object(s.b)("p",null,"A Sentera credentials resources as a JSON. "),Object(s.b)("h3",{id:"create-a-sentera-credentials"},"Create a Sentera credentials"),Object(s.b)("p",null,"\xa0",Object(s.b)("span",{class:"badge badge--warning"},"POST")," ",Object(s.b)("inlineCode",{parentName:"p"},"/users/{leafUserId}/sentera-credentials"),"  "),Object(s.b)("p",null,"Create a Sentera credentials for the Leaf User. "),Object(s.b)("h4",{id:"request-examples-1"},"Request examples"),Object(s.b)("p",null,"A Sentera credentials."),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "username":"Username",\n  "password":"Password",\n  "organizationName":"NameOfTheOrganizationInTheFieldAgent"\n}\n')),Object(s.b)(c.a,{defaultValue:"sh",values:[{label:"cURL",value:"sh"},{label:"JavaScript",value:"js"},{label:"Python",value:"py"}],mdxType:"Tabs"},Object(s.b)(i.a,{value:"js",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'const axios = require(\'axios\')\nconst TOKEN = \'YOUR_TOKEN\'\n\nconst endpoint = \'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/sentera-credentials\'\nconst headers = { \'Authorization\': `Bearer ${TOKEN}` }\n\nconst data = {\n  "username": "str", \n  "password": "str", \n  "organizationName": "str"\n}\n\naxios.post(endpoint, data, { headers })\n    .then(res => console.log(res.data))\n    .catch(console.error)\n'))),Object(s.b)(i.a,{value:"py",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-py"}),'import requests\n\nTOKEN = \'YOUR_TOKEN\'\n\nendpoint = \'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/sentera-credentials\'\nheaders = {\'Authorization\': f\'Bearer {TOKEN}\'}\n\ndata = {\n  "username": "str", \n  "password": "str", \n  "organizationName": "str"\n}\n\nresponse = requests.post(endpoint, headers=headers, json=data)\nprint(response.json())\n'))),Object(s.b)(i.a,{value:"sh",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),'curl -X POST \\\n-H \'Authorization: Bearer YOUR_TOKEN\' \\\n-H \'Content-Type: application/json\' \\\n-d \'{ "accessToken": "str","refreshToken": "str","privateKey":"str", "publicKey":"str"}\' \\\n\'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/sentera-credentials\'\n')))),Object(s.b)("h4",{id:"response-1"},"Response"),Object(s.b)("p",null,"A Sentera Credentials with status."),Object(s.b)("h3",{id:"delete-sentera-credentials"},"Delete Sentera credentials"),Object(s.b)("p",null,"\xa0",Object(s.b)("span",{class:"badge badge--danger"},"DELETE")," ",Object(s.b)("inlineCode",{parentName:"p"},"/users/{leafUserId}/sentera-credentials")),Object(s.b)("p",null,"Delete Leaf User's Sentera credentials."),Object(s.b)("h4",{id:"request-examples-2"},"Request examples"),Object(s.b)(c.a,{defaultValue:"sh",values:[{label:"cURL",value:"sh"},{label:"JavaScript",value:"js"},{label:"Python",value:"py"}],mdxType:"Tabs"},Object(s.b)(i.a,{value:"sh",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"curl -X DELETE \\\n    -H 'Authorization: Bearer YOUR_TOKEN' \\\n    'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/sentera-credentials'\n"))),Object(s.b)(i.a,{value:"js",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const axios = require('axios')\nconst TOKEN = 'YOUR_TOKEN'\n\nconst endpoint = 'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/sentera-credentials'\nconst headers = { 'Authorization': `Bearer ${TOKEN}` }\n\naxios.delete(endpoint, { headers })\n    .then(res => console.log(res.data))\n    .catch(console.error)\n"))),Object(s.b)(i.a,{value:"py",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-py"}),"import requests\n\nTOKEN = 'YOUR_TOKEN'\n\nendpoint = 'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/sentera-credentials'\nheaders = {'Authorization': f'Bearer {TOKEN}'}\n\nresponse = requests.delete(endpoint, headers=headers)\nprint(response.json())\n")))),Object(s.b)("h2",{id:"troubleshooting"},"Troubleshooting"),Object(s.b)("p",null,"With these endpoints, you can do some troubleshooting to see your credential's health."),Object(s.b)("h3",{id:"events"},"Events"),Object(s.b)("p",null,"\xa0",Object(s.b)("span",{class:"badge badge--success"},"GET")," ",Object(s.b)("inlineCode",{parentName:"p"},"/users/{leafUserId}/sentera-credentials/events")),Object(s.b)("p",null,"Get the logs of the provider credential based on the LeafUserId sent."),Object(s.b)("h4",{id:"request-examples-3"},"Request examples"),Object(s.b)(c.a,{defaultValue:"sh",values:[{label:"cURL",value:"sh"},{label:"Python",value:"py"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},Object(s.b)(i.a,{value:"js",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const axios = require('axios')\nconst TOKEN = 'YOUR_TOKEN'\n\nconst endpoint = 'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/sentera-credentials/events'\nconst headers = { 'Authorization': `Bearer ${TOKEN}` }\n\naxios.get(endpoint, { headers })\n    .then(res => console.log(res.data))\n    .catch(console.error)\n"))),Object(s.b)(i.a,{value:"py",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-py"}),"import requests\n\nTOKEN = 'YOUR_TOKEN'\n\nendpoint = 'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}/sentera-credentials/events'\nheaders = {'Authorization': f'Bearer {TOKEN}'}\n\nresponse = requests.get(endpoint, headers=headers)\nprint(response.json())\n"))),Object(s.b)(i.a,{value:"sh",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"curl -X GET \\\n    -H 'Authorization: Bearer YOUR_TOKEN' \\\n    'https://api.withleaf.io/services/usermanagement/api/users/{leafUserId}\n    /sentera-credentials/events'\n")))),Object(s.b)("h4",{id:"response-2"},"Response"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'[\n  {\n    "body": "string",\n    "createdDate": "yyyy-MM-dd\'T\'HH:mm:ss.SSSSSS\'Z\'",\n    "headers": "string",\n    "id": "string",\n    "statusCode": "int"\n  }\n]\n')),Object(s.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(s.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(s.b)("h5",{parentName:"div"},Object(s.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(s.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(s.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(s.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(s.b)("p",{parentName:"div"},"The logs are available only for 30 days and once the credential is deleted or disassociated with the Leaf User, the logs are no longer available."))))}u.isMDXComponent=!0},139:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return O}));var a=n(0),r=n.n(a);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=r.a.createContext({}),b=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=b(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),d=b(n),p=a,O=d["".concat(c,".").concat(p)]||d[p]||u[p]||s;return n?r.a.createElement(O,i(i({ref:t},o),{},{components:n})):r.a.createElement(O,i({ref:t},o))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,c=new Array(s);c[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var o=2;o<s;o++)c[o]=n[o];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},140:function(e,t,n){"use strict";var a=n(0),r=n(20);t.a=function(){var e=Object(a.useContext)(r.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},141:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},142:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return c}));var a=n(140),r=n(143);function s(){var e=Object(a.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,s=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var s=void 0===a?{}:a,c=s.forcePrependBaseUrl,i=void 0!==c&&c,l=s.absolute,o=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if(Object(r.b)(n))return n;if(i)return t+n;var b=!n.startsWith(t)?t+n.replace(/^\//,""):n;return o?e+b:b}(s,n,e,t)}}}function c(e,t){return void 0===t&&(t={}),(0,s().withBaseUrl)(e,t)}},143:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}))},144:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},145:function(e,t,n){"use strict";var a=n(0),r=n(144);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},146:function(e,t,n){"use strict";var a=n(0),r=n.n(a),s=n(145),c=n(141),i=n(48),l=n.n(i),o=37,b=39;t.a=function(e){var t=e.block,n=e.children,i=e.defaultValue,d=e.values,u=e.groupId,p=Object(s.a)(),O=p.tabGroupChoices,m=p.setTabGroupChoices,j=Object(a.useState)(i),h=j[0],f=j[1],v=Object(a.useState)(!1),g=v[0],N=v[1];if(null!=u){var y=O[u];null!=y&&y!==h&&d.some((function(e){return e.value===y}))&&f(y)}var T=function(e){f(e),null!=u&&m(u,e)},w=[],E=function(e){e.metaKey||e.altKey||e.ctrlKey||N(!0)},x=function(){N(!1)};return Object(a.useEffect)((function(){window.addEventListener("keydown",E),window.addEventListener("mousedown",x)}),[]),r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":t})},d.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":h===t,className:Object(c.a)("tabs__item",l.a.tabItem,{"tabs__item--active":h===t}),style:g?{}:{outline:"none"},key:t,ref:function(e){return w.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case b:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case o:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(w,e.target,e),E(e)},onFocus:function(){return T(t)},onClick:function(){T(t),N(!1)},onPointerDown:function(){return N(!1)}},n)}))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter((function(e){return e.props.value===h}))[0]))}},147:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){return r.a.createElement("div",null,e.children)}}}]);