(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{153:function(e,a,t){"use strict";var r=t(0),n=t.n(r),l=t(150),c=t.n(l),o=t(149),m=t(140);a.a=function(e){var a=Object(r.useRef)(!1),l=Object(r.useRef)(null),s=Object(o.useHistory)(),i=Object(m.a)().siteConfig,u=(void 0===i?{}:i).baseUrl,d=function(){a.current||(Promise.all([fetch(u+"search-doc.json").then((function(e){return e.json()})),fetch(u+"lunr-index.json").then((function(e){return e.json()})),Promise.all([t.e(83),t.e(85)]).then(t.bind(null,155)),t.e(54).then(t.t.bind(null,154,7))]).then((function(e){!function(e,a,t){new t({searchDocs:e,searchIndex:a,inputSelector:"#search_input_react",handleSelected:function(e,a,t){var r=u+t.url;document.createElement("a").href=r,s.push(r)}})}(e[0],e[1],e[2].default)})),a.current=!0)},h=Object(r.useCallback)((function(a){l.current.contains(a.target)||l.current.focus(),e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]);return n.a.createElement("div",{className:"navbar__search",key:"search-box"},n.a.createElement("span",{"aria-label":"expand searchbar",role:"button",className:c()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:h,onKeyDown:h,tabIndex:0}),n.a.createElement("input",{id:"search_input_react",type:"search",placeholder:"Search","aria-label":"Search",className:c()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onClick:d,onMouseOver:d,onFocus:h,onBlur:h,ref:l}))}},158:function(e,a,t){"use strict";var r=t(0),n=t.n(r),l=t(141),c=t(139),o=t(157),m=t(148),s=t(159),i=t(142),u=t(49),d=t.n(u),h=["January","February","March","April","May","June","July","August","September","October","November","December"];a.a=function(e){var a,t,r,u,g,E=e.children,p=e.frontMatter,b=e.metadata,f=e.truncated,v=e.isBlogPostPage,_=void 0!==v&&v,N=b.date,k=b.permalink,w=b.tags,x=b.readingTime,y=p.author,j=p.title,S=p.image,B=p.keywords,O=p.author_url||p.authorURL,T=p.author_title||p.authorTitle,M=p.author_image_url||p.authorImageURL,P=Object(i.a)(S,{absolute:!0});return n.a.createElement(n.a.Fragment,null,n.a.createElement(o.a,null,B&&B.length&&n.a.createElement("meta",{name:"keywords",content:B.join(",")}),S&&n.a.createElement("meta",{property:"og:image",content:P}),S&&n.a.createElement("meta",{property:"twitter:image",content:P}),S&&n.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+j})),n.a.createElement("article",{className:_?void 0:"margin-bottom--xl"},(a=_?"h1":"h2",t=N.substring(0,10).split("-"),r=t[0],u=h[parseInt(t[1],10)-1],g=parseInt(t[2],10),n.a.createElement("header",null,n.a.createElement(a,{className:Object(l.a)("margin-bottom--sm",d.a.blogPostTitle)},_?j:n.a.createElement(m.a,{to:k},j)),n.a.createElement("div",{className:"margin-vert--md"},n.a.createElement("time",{dateTime:N,className:d.a.blogPostDate},u," ",g,", ",r," ",x&&n.a.createElement(n.a.Fragment,null," \xb7 ",Math.ceil(x)," min read"))),n.a.createElement("div",{className:"avatar margin-vert--md"},M&&n.a.createElement("a",{className:"avatar__photo-link avatar__photo",href:O,target:"_blank",rel:"noreferrer noopener"},n.a.createElement("img",{src:M,alt:y})),n.a.createElement("div",{className:"avatar__intro"},y&&n.a.createElement(n.a.Fragment,null,n.a.createElement("h4",{className:"avatar__name"},n.a.createElement("a",{href:O,target:"_blank",rel:"noreferrer noopener"},y)),n.a.createElement("small",{className:"avatar__subtitle"},T)))))),n.a.createElement("section",{className:"markdown"},n.a.createElement(c.a,{components:s.a},E)),(w.length>0||f)&&n.a.createElement("footer",{className:"row margin-vert--lg"},w.length>0&&n.a.createElement("div",{className:"col"},n.a.createElement("strong",null,"Tags:"),w.map((function(e){var a=e.label,t=e.permalink;return n.a.createElement(m.a,{key:t,className:"margin-horiz--sm",to:t},a)}))),f&&n.a.createElement("div",{className:"col text--right"},n.a.createElement(m.a,{to:b.permalink,"aria-label":"Read more about "+j},n.a.createElement("strong",null,"Read More"))))))}},90:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),l=t(152),c=t(158),o=t(148);a.default=function(e){var a=e.metadata,t=e.items,r=a.allTagsPath,m=a.name,s=a.count;return n.a.createElement(l.a,{title:'Posts tagged "'+m+'"',description:'Blog | Tagged "'+m+'"'},n.a.createElement("div",{className:"container margin-vert--lg"},n.a.createElement("div",{className:"row"},n.a.createElement("main",{className:"col col--8 col--offset-2"},n.a.createElement("h1",null,s," ",function(e,a){return e>1?a+"s":a}(s,"post"),' tagged with "',m,'"'),n.a.createElement(o.a,{href:r},"View All Tags"),n.a.createElement("div",{className:"margin-vert--xl"},t.map((function(e){var a=e.content;return n.a.createElement(c.a,{key:a.metadata.permalink,frontMatter:a.frontMatter,metadata:a.metadata,truncated:!0},n.a.createElement(a,null))})))))))}}}]);