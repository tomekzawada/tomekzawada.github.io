(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{117:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(148),l=a(153),s=a(140);t.default=function(e){const{metadata:t,items:a}=e,{allTagsPath:n,name:o,count:i}=t;return r.a.createElement(c.a,{title:`Posts tagged "${o}"`,description:`Blog | Tagged "${o}"`},r.a.createElement("div",{className:"container margin-vert--lg"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--8 col--offset-2"},r.a.createElement("h1",null,i," ",function(e,t){return e>1?t+"s":t}(i,"post"),' tagged with "',o,'"'),r.a.createElement(s.a,{href:n},"View All Tags"),r.a.createElement("div",{className:"margin-vert--xl"},a.map(({content:e})=>r.a.createElement(l.a,{key:e.metadata.permalink,frontMatter:e.frontMatter,metadata:e.metadata,truncated:!0},r.a.createElement(e,null))))))))}},141:function(e,t,a){"use strict";var n=a(0),r=a(143);t.a=function(){return Object(n.useContext)(r.a)}},142:function(e,t,a){"use strict";var n=a(136),r=a(141),c=a(139),l=a(144);t.a=()=>{const{siteConfig:{baseUrl:e,themeConfig:{navbar:{logo:t={}}={}}}={}}=Object(n.a)(),{isDarkTheme:a}=Object(r.a)(),s=t.href||e;let o={};t.target?o={target:t.target}:Object(l.a)(s)||(o={rel:"noopener noreferrer",target:"_blank"});const i=t.srcDark&&a?t.srcDark:t.src;return{logoLink:s,logoLinkProps:o,logoImageUrl:Object(c.a)(i),logoAlt:t.alt}}},143:function(e,t,a){"use strict";var n=a(0);const r=a.n(n).a.createContext({isDarkTheme:!1,setLightTheme:()=>{},setDarkTheme:()=>{}});t.a=r},146:function(e,t,a){"use strict";var n=a(0);t.a=function(e=!0){Object(n.useEffect)(()=>(document.body.style.overflow=e?"hidden":"visible",()=>{document.body.style.overflow="visible"}),[e])}},148:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(149),l=a(144),s=a(136),o=a(139);const i="",m="dark";var u=()=>{const{siteConfig:{themeConfig:{disableDarkMode:e}}={}}=Object(s.a)(),[t,a]=Object(n.useState)("undefined"!=typeof document?document.documentElement.getAttribute("data-theme"):i),r=Object(n.useCallback)(e=>{try{localStorage.setItem("theme",e)}catch(t){console.error(t)}},[a]),c=Object(n.useCallback)(()=>{a(i),r(i)},[]),l=Object(n.useCallback)(()=>{a(m),r(m)},[]);return Object(n.useEffect)(()=>{document.documentElement.setAttribute("data-theme",t)},[t]),Object(n.useEffect)(()=>{if(!e)try{const e=localStorage.getItem("theme");null!==e&&a(e)}catch(t){console.error(t)}},[a]),Object(n.useEffect)(()=>{e||window.matchMedia("(prefers-color-scheme: dark)").addListener(({matches:e})=>{a(e?m:i)})},[]),{isDarkTheme:t===m,setLightTheme:c,setDarkTheme:l}},d=a(143);var h=function(e){const{isDarkTheme:t,setLightTheme:a,setDarkTheme:n}=u();return r.a.createElement(d.a.Provider,{value:{isDarkTheme:t,setLightTheme:a,setDarkTheme:n}},e.children)};var b=()=>{const[e,t]=Object(n.useState)({}),a=Object(n.useCallback)((e,t)=>{try{localStorage.setItem("docusaurus.tab."+e,t)}catch(a){console.error(a)}},[]);return Object(n.useEffect)(()=>{try{const e={};for(let t=0;t<localStorage.length;t+=1){const a=localStorage.key(t);if(a.startsWith("docusaurus.tab.")){e[a.substring("docusaurus.tab.".length)]=localStorage.getItem(a)}}t(e)}catch(e){console.error(e)}},[]),{tabGroupChoices:e,setTabGroupChoices:(e,n)=>{t(t=>({...t,[e]:n})),a(e,n)}}};var g=Object(n.createContext)({tabGroupChoices:{},setTabGroupChoices:()=>{}});var E=function(e){const{tabGroupChoices:t,setTabGroupChoices:a}=b();return r.a.createElement(g.Provider,{value:{tabGroupChoices:t,setTabGroupChoices:a}},e.children)},f=a(92),v=a.n(f);var p=function(){const{siteConfig:{themeConfig:{announcementBar:e={}}}={}}=Object(s.a)(),{id:t,content:a,backgroundColor:c,textColor:l}=e,[o,i]=Object(n.useState)(!0);return Object(n.useEffect)(()=>{const e=localStorage.getItem("docusaurus.announcement.id"),a=t!==e;localStorage.setItem("docusaurus.announcement.id",t),a&&localStorage.setItem("docusaurus.announcement.dismiss",!1),(a||"false"===localStorage.getItem("docusaurus.announcement.dismiss"))&&i(!1)},[]),!a||o?null:r.a.createElement("div",{className:v.a.announcementBar,style:{backgroundColor:c,color:l},role:"banner"},r.a.createElement("div",{className:v.a.announcementBarContent,dangerouslySetInnerHTML:{__html:a}}),r.a.createElement("button",{type:"button",className:v.a.announcementBarClose,onClick:()=>{localStorage.setItem("docusaurus.announcement.dismiss",!0),i(!0)},"aria-label":"Close"},r.a.createElement("span",{"aria-hidden":"true"},"\xd7")))},k=a(2),j=a(137),O=a.n(j),N=a(140),_=a(145),w=a(151),C=a.n(w),y=a(93),T=a.n(y);const S=()=>r.a.createElement("span",{className:O()(T.a.toggle,T.a.moon)}),x=()=>r.a.createElement("span",{className:O()(T.a.toggle,T.a.sun)});var L=function(e){const{isClient:t}=Object(s.a)();return r.a.createElement(C.a,Object(k.a)({disabled:!t,icons:{checked:r.a.createElement(S,null),unchecked:r.a.createElement(x,null)}},e))},B=a(141),D=a(150);var I=function(e){const[t,a]=Object(n.useState)(e);return Object(n.useEffect)(()=>{const e=()=>a(window.location.hash);return window.addEventListener("hashchange",e),()=>window.removeEventListener("hashchange",e)},[]),[t,a]},M=a(34);const $=()=>({scrollX:M.a.canUseDOM?window.pageXOffset:0,scrollY:M.a.canUseDOM?window.pageYOffset:0});var P=(e,t=[])=>{const[a,r]=Object(n.useState)($()),c=()=>{const t=$();r(t),e&&e(t)};return Object(n.useEffect)(()=>(window.addEventListener("scroll",c),()=>window.removeEventListener("scroll",c,{passive:!0})),t),a};var R=e=>{const[t,a]=Object(n.useState)(!0),[r,c]=Object(n.useState)(!1),[l,s]=Object(n.useState)(0),[o,i]=Object(n.useState)(0),m=Object(n.useCallback)(e=>{null!==e&&i(e.getBoundingClientRect().height)},[]),u=Object(D.b)(),[d,h]=I(u.hash);return P(({scrollY:t})=>{if(!e)return;if(0===t&&a(!0),t<o)return;if(r)return c(!1),a(!1),void s(t);const n=document.documentElement.scrollHeight-o,i=window.innerHeight;l&&t>=l?a(!1):t+i<n&&a(!0),s(t)},[l,o]),Object(n.useEffect)(()=>{e&&(a(!0),h(u.hash))},[u]),Object(n.useEffect)(()=>{e&&d&&c(!0)},[d]),{navbarRef:m,isNavbarVisible:t}},G=a(146),A=a(142),H=a(147),U=a(94),F=a.n(U);function J({activeBasePath:e,activeBaseRegex:t,to:a,href:n,label:c,activeClassName:l="navbar__link--active",prependBaseUrlToHref:s,...i}){const m=Object(o.a)(a),u=Object(o.a)(e),d=Object(o.a)(n,!0);return r.a.createElement(N.a,Object(k.a)({},n?{target:"_blank",rel:"noopener noreferrer",href:s?d:n}:{isNavLink:!0,activeClassName:l,to:m,...e||t?{isActive:(e,a)=>t?new RegExp(t).test(a.pathname):a.pathname.startsWith(u)}:null},i),c)}function V({items:e,position:t,className:a,...n}){const c=(e,t=!1)=>O()({"navbar__item navbar__link":!t,dropdown__link:t},e);return e?r.a.createElement("div",{className:O()("navbar__item","dropdown","dropdown--hoverable",{"dropdown--left":"left"===t,"dropdown--right":"right"===t})},r.a.createElement(J,Object(k.a)({className:c(a)},n,{onClick:e=>e.preventDefault(),onKeyDown:e=>{"Enter"===e.key&&e.target.parentNode.classList.toggle("dropdown--show")}}),n.label),r.a.createElement("ul",{className:"dropdown__menu"},e.map(({className:e,...t},a)=>r.a.createElement("li",{key:a},r.a.createElement(J,Object(k.a)({activeClassName:"dropdown__link--active",className:c(e,!0)},t)))))):r.a.createElement(J,Object(k.a)({className:c(a)},n))}function W({items:e,position:t,className:a,...n}){const c=(e,t=!1)=>O()("menu__link","navbar__link",{"menu__link--sublist":t},e);return e?r.a.createElement("li",{className:"menu__list-item"},r.a.createElement(J,Object(k.a)({className:c(a,!0)},n),n.label),r.a.createElement("ul",{className:"menu__list"},e.map(({className:e,...t},a)=>r.a.createElement("li",{className:"menu__list-item",key:a},r.a.createElement(J,Object(k.a)({activeClassName:"menu__link--active",className:c(e)},t,{onClick:n.onClick})))))):r.a.createElement("li",{className:"menu__list-item"},r.a.createElement(J,Object(k.a)({className:c(a)},n)))}var Y=function(){const{siteConfig:{themeConfig:{navbar:{title:e,links:t=[],hideOnScroll:a=!1}={},disableDarkMode:c=!1}},isClient:l}=Object(s.a)(),[o,i]=Object(n.useState)(!1),[m,u]=Object(n.useState)(!1),{isDarkTheme:d,setLightTheme:h,setDarkTheme:b}=Object(B.a)(),{navbarRef:g,isNavbarVisible:E}=R(a),{logoLink:f,logoLinkProps:v,logoImageUrl:p,logoAlt:j}=Object(A.a)();Object(G.a)(o);const w=Object(n.useCallback)(()=>{i(!0)},[i]),C=Object(n.useCallback)(()=>{i(!1)},[i]),y=Object(n.useCallback)(e=>e.target.checked?b():h(),[h,b]);return r.a.createElement("nav",{ref:g,className:O()("navbar","navbar--light","navbar--fixed-top",{"navbar-sidebar--show":o,[F.a.navbarHideable]:a,[F.a.navbarHidden]:!E})},r.a.createElement("div",{className:"navbar__inner"},r.a.createElement("div",{className:"navbar__items"},null!=t&&0!==t.length&&r.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:w,onKeyDown:w},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement(N.a,Object(k.a)({className:"navbar__brand",to:f},v),null!=e&&r.a.createElement("strong",{className:O()("navbar__title",{[F.a.hideLogoText]:m})},e,r.a.createElement("span",{class:"badge badge--info"},"V2 alpha")))),r.a.createElement("div",{className:"navbar__items navbar__items--right"},t.filter(e=>"left"===e.position).map((e,t)=>r.a.createElement(V,Object(k.a)({},e,{key:t}))),r.a.createElement("div",{className:"githubStarLink"},r.a.createElement(H.a,{href:"https://github.com/software-mansion/react-native-reanimated","data-icon":"octicon-star","data-show-count":"true","aria-label":"Star software-mansion/react-native-reanimated on GitHub"},"Star")),t.filter(e=>"right"===e.position).map((e,t)=>r.a.createElement(V,Object(k.a)({},e,{key:t}))),!c&&r.a.createElement(L,{className:F.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:d,onChange:y}),r.a.createElement(_.a,{handleSearchBarToggle:u,isSearchBarExpanded:m}))),r.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:C}),r.a.createElement("div",{className:"navbar-sidebar"},r.a.createElement("div",{className:"navbar-sidebar__brand"},r.a.createElement(N.a,Object(k.a)({className:"navbar__brand",onClick:C,to:f},v),null!=p&&r.a.createElement("img",{key:l,className:"navbar__logo",src:p,alt:j}),null!=e&&r.a.createElement("strong",{className:"navbar__title"},e)),!c&&o&&r.a.createElement(L,{"aria-label":"Dark mode toggle in sidebar",checked:d,onChange:y})),r.a.createElement("div",{className:"navbar-sidebar__items"},r.a.createElement("div",{className:"menu"},r.a.createElement("ul",{className:"menu__list"},t.map((e,t)=>r.a.createElement(W,Object(k.a)({},e,{onClick:C,key:t}))))))))};a(95);var K=function(){const e=Object(s.a)(),{siteConfig:t={}}=e,{themeConfig:a={}}=t,{footer:n}=a;return n?r.a.createElement("footer",{className:O()("footer",{"footer--dark":"dark"===n.style})},r.a.createElement("div",{className:"footer-container"},r.a.createElement(N.a,{className:"navbar__brand footer-image-link",to:"https://www.swmansion.com/"},r.a.createElement("img",{className:"navbar__logo",src:"/img/swmLogo.svg",alt:"Software Mansion logo"})),r.a.createElement("div",{className:"githubStarLink"},r.a.createElement(H.a,{href:"https://github.com/software-mansion/react-native-reanimated","data-icon":"octicon-star","data-show-count":"true","aria-label":"Star software-mansion/react-native-reanimated on GitHub"},"Star")))):null};a(96);t.a=function(e){const{siteConfig:t={}}=Object(s.a)(),{favicon:a,title:n,themeConfig:{image:i},url:m}=t,{children:u,title:d,noFooter:b,description:g,image:f,keywords:v,permalink:k,version:j}=e,O=d?`${d} | ${n}`:n,N=f||i;let _=m+Object(o.a)(N);Object(l.a)(N)||(_=N);const w=Object(o.a)(a);return r.a.createElement(h,null,r.a.createElement(E,null,r.a.createElement(c.a,null,r.a.createElement("html",{lang:"en"}),O&&r.a.createElement("title",null,O),O&&r.a.createElement("meta",{property:"og:title",content:O}),a&&r.a.createElement("link",{rel:"shortcut icon",href:w}),g&&r.a.createElement("meta",{name:"description",content:g}),g&&r.a.createElement("meta",{property:"og:description",content:g}),j&&r.a.createElement("meta",{name:"docsearch:version",content:j}),v&&v.length&&r.a.createElement("meta",{name:"keywords",content:v.join(",")}),N&&r.a.createElement("meta",{property:"og:image",content:_}),N&&r.a.createElement("meta",{property:"twitter:image",content:_}),N&&r.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+O}),k&&r.a.createElement("meta",{property:"og:url",content:m+k}),k&&r.a.createElement("link",{rel:"canonical",href:m+k}),r.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"})),r.a.createElement(p,null),r.a.createElement(Y,null),r.a.createElement("div",{className:"main-wrapper"},u),!b&&r.a.createElement(K,null)))}},152:function(e,t,a){"use strict";var n=a(2),r=a(0),c=a.n(r),l=a(140),s=a(137),o=a.n(s),i=a(157),m=a(154),u=a.n(m),d=a(155),h=a.n(d),b=a(136),g=a(156),E=a(141);var f=()=>{const{siteConfig:{themeConfig:{prism:e={}}}}=Object(b.a)(),{isDarkTheme:t}=Object(E.a)(),a=e.theme||g.a,n=e.darkTheme||a;return t?n:a},v=a(97),p=a.n(v);const k=/{([\d,-]+)}/,j=(e=["js","jsBlock","jsx","python","html"])=>{const t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},a=["highlight-next-line","highlight-start","highlight-end"].join("|"),n=e.map(e=>`(?:${t[e].start}\\s*(${a})\\s*${t[e].end})`).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)},O=/title=".*"/;var N=({children:e,className:t,metastring:a})=>{const{siteConfig:{themeConfig:{prism:l={}}}}=Object(b.a)(),[s,m]=Object(r.useState)(!1),[d,g]=Object(r.useState)(!1);Object(r.useEffect)(()=>{g(!0)},[]);const E=Object(r.useRef)(null),v=Object(r.useRef)(null);let N=[],_="";const w=f();if(a&&k.test(a)){const e=a.match(k)[1];N=h.a.parse(e).filter(e=>e>0)}a&&O.test(a)&&(_=a.match(O)[0].split("title=")[1].replace(/"+/g,"")),Object(r.useEffect)(()=>{let e;return v.current&&(e=new u.a(v.current,{target:()=>E.current})),()=>{e&&e.destroy()}},[v.current,E.current]);let C=t&&t.replace(/language-/,"");!C&&l.defaultLanguage&&(C=l.defaultLanguage);let y=e.replace(/\n$/,"");if(0===N.length&&void 0!==C){let t="";const a=(e=>{switch(e){case"js":case"javascript":case"ts":case"typescript":return j(["js","jsBlock"]);case"jsx":case"tsx":return j(["js","jsBlock","jsx"]);case"html":return j(["js","jsBlock","html"]);case"python":case"py":return j(["python"]);default:return j()}})(C),n=e.replace(/\n$/,"").split("\n");let r;for(let e=0;e<n.length;){const c=e+1,l=n[e].match(a);if(null!==l){switch(l.slice(1).reduce((e,t)=>e||t,void 0)){case"highlight-next-line":t+=c+",";break;case"highlight-start":r=c;break;case"highlight-end":t+=`${r}-${c-1},`}n.splice(e,1)}else e+=1}N=h.a.parse(t),y=n.join("\n")}const T=()=>{window.getSelection().empty(),m(!0),setTimeout(()=>m(!1),2e3)};return c.a.createElement(i.a,Object(n.a)({},i.b,{key:d,theme:w,code:y,language:C}),({className:e,style:t,tokens:a,getLineProps:r,getTokenProps:l})=>c.a.createElement(c.a.Fragment,null,_&&c.a.createElement("div",{style:t,className:p.a.codeBlockTitle},_),c.a.createElement("div",{className:p.a.codeBlockContent},c.a.createElement("button",{ref:v,type:"button","aria-label":"Copy code to clipboard",className:o()(p.a.copyButton,{[p.a.copyButtonWithTitle]:_}),onClick:T},s?"Copied":"Copy"),c.a.createElement("div",{tabIndex:"0",className:o()(e,p.a.codeBlock,{[p.a.codeBlockWithTitle]:_})},c.a.createElement("div",{ref:E,className:p.a.codeBlockLines,style:t},a.map((e,t)=>{1===e.length&&""===e[0].content&&(e[0].content="\n");const a=r({line:e,key:t});return N.includes(t+1)&&(a.className=a.className+" docusaurus-highlight-code-line"),c.a.createElement("div",Object(n.a)({key:t},a),e.map((e,t)=>c.a.createElement("span",Object(n.a)({key:t},l({token:e,key:t})))))}))))))},_=(a(98),a(99)),w=a.n(_);var C=e=>function({id:t,...a}){const{siteConfig:{themeConfig:{navbar:{hideOnScroll:n=!1}={}}={}}={}}=Object(b.a)();return t?c.a.createElement(e,a,c.a.createElement("a",{"aria-hidden":"true",tabIndex:"-1",className:o()("anchor",{[w.a.enhancedAnchor]:!n}),id:t}),a.children,c.a.createElement("a",{"aria-hidden":"true",tabIndex:"-1",className:"hash-link",href:"#"+t,title:"Direct link to heading"},"#")):c.a.createElement(e,a)},y=a(100),T=a.n(y);t.a={code:e=>{const{children:t}=e;return"string"==typeof t?c.a.createElement(N,e):t},a:e=>/\.[^./]+$/.test(e.href)?c.a.createElement("a",e):c.a.createElement(l.a,e),pre:e=>c.a.createElement("div",Object(n.a)({className:T.a.mdxCodeBlock},e)),h1:C("h1"),h2:C("h2"),h3:C("h3"),h4:C("h4"),h5:C("h5"),h6:C("h6")}},153:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(137),l=a.n(c),s=a(138),o=a(140),i=a(152),m=a(101),u=a.n(m);const d=["January","February","March","April","May","June","July","August","September","October","November","December"];t.a=function(e){const{children:t,frontMatter:a,metadata:n,truncated:c,isBlogPostPage:m=!1}=e,{date:h,permalink:b,tags:g,readingTime:E}=n,{author:f,title:v}=a,p=a.author_url||a.authorURL,k=a.author_title||a.authorTitle,j=a.author_image_url||a.authorImageURL;return r.a.createElement("article",{className:m?void 0:"margin-bottom--xl"},(()=>{const e=m?"h1":"h2",t=h.substring(0,10).split("-"),a=t[0],n=d[parseInt(t[1],10)-1],c=parseInt(t[2],10);return r.a.createElement("header",null,r.a.createElement(e,{className:l()("margin-bottom--sm",u.a.blogPostTitle)},m?v:r.a.createElement(o.a,{to:b},v)),r.a.createElement("div",{className:"margin-vert--md"},r.a.createElement("time",{dateTime:h,className:u.a.blogPostDate},n," ",c,", ",a," ",E&&r.a.createElement(r.a.Fragment,null," \xb7 ",Math.ceil(E)," min read"))),r.a.createElement("div",{className:"avatar margin-vert--md"},j&&r.a.createElement("a",{className:"avatar__photo-link avatar__photo",href:p,target:"_blank",rel:"noreferrer noopener"},r.a.createElement("img",{src:j,alt:f})),r.a.createElement("div",{className:"avatar__intro"},f&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",{className:"avatar__name"},r.a.createElement("a",{href:p,target:"_blank",rel:"noreferrer noopener"},f)),r.a.createElement("small",{className:"avatar__subtitle"},k)))))})(),r.a.createElement("section",{className:"markdown"},r.a.createElement(s.a,{components:i.a},t)),(g.length>0||c)&&r.a.createElement("footer",{className:"row margin-vert--lg"},g.length>0&&r.a.createElement("div",{className:"col"},r.a.createElement("strong",null,"Tags:"),g.map(({label:e,permalink:t})=>r.a.createElement(o.a,{key:t,className:"margin-horiz--sm",to:t},e))),c&&r.a.createElement("div",{className:"col text--right"},r.a.createElement(o.a,{to:n.permalink,"aria-label":"Read more about "+v},r.a.createElement("strong",null,"Read More")))))}}}]);