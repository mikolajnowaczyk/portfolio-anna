(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[5],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(o.default.useContext(a.AmpStateContext))};var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r},a=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,a=e.hasQuery;return n||o&&(void 0!==a&&a)}},"00an":function(e,t,n){"use strict";function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}n.d(t,"a",(function(){return o}))},"2bPg":function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,"a",(function(){return r}))},"5fIB":function(e,t,n){var r=n("7eYB");e.exports=function(e){if(Array.isArray(e))return r(e)}},"8Kt/":function(e,t,n){"use strict";n("oI91");t.__esModule=!0,t.defaultHead=s,t.default=void 0;var r,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=r?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),a=(r=n("Xuae"))&&r.__esModule?r:{default:r},i=n("lwAK"),c=n("FYa8"),u=n("/0+H");function l(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function s(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var d=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(f,[]).reverse().concat(s(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var a=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var i=o.key.slice(o.key.indexOf("$")+1);e.has(i)?a=!1:e.add(i)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var c=0,u=d.length;c<u;c++){var l=d[c];if(o.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?a=!1:n.add(l);else{var s=o.props[l],f=r[l]||new Set;f.has(s)?a=!1:(f.add(s),r[l]=f)}}}return a}}()).reverse().map((function(e,t){var n=e.key||t;return o.default.cloneElement(e,{key:n})}))}function _(e){var t=e.children,n=(0,o.useContext)(i.AmpStateContext),r=(0,o.useContext)(c.HeadManagerContext);return o.default.createElement(a.default,{reduceComponentsToState:p,headManager:r,inAmpMode:(0,u.isInAmpMode)(n)},t)}_.rewind=function(){};var m=_;t.default=m},BRlI:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}n.d(t,"a",(function(){return o}))},HZ9p:function(e,t,n){e.exports={Navbar:"NavigationItems_Navbar__3jYo_",NavLink:"NavigationItems_NavLink__SCyZJ",Link:"NavigationItems_Link__3Qu94"}},Lnxd:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n("q1tI"),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=r.createContext&&r.createContext(o),i=function(){return(i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&(n[r[o]]=e[r[o]])}return n};function u(e){return function(t){return r.createElement(l,i({attr:i({},e.attr)},t),function e(t){return t&&t.map((function(t,n){return r.createElement(t.tag,i({key:n},t.attr),e(t.child))}))}(e.child))}}function l(e){var t=function(t){var n,o=e.size||t.size||"1em";t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className);var a=e.attr,u=e.title,l=c(e,["attr","title"]);return r.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,a,l,{className:n,style:i({color:e.color||t.color},t.style,e.style),height:o,width:o,xmlns:"http://www.w3.org/2000/svg"}),u&&r.createElement("title",null,u),e.children)};return void 0!==a?r.createElement(a.Consumer,null,(function(e){return t(e)})):t(o)}},"OR+1":function(e,t,n){e.exports={Logo:"Logo_Logo__2hBdV"}},SWNY:function(e,t,n){e.exports={DrawerToggle:"DrawerToggle_DrawerToggle__35DCO"}},W6df:function(e,t,n){e.exports={Content:"Layout_Content__Tooq0"}},WMwr:function(e,t,n){e.exports={SideDrawer:"Sidedrawer_SideDrawer__2apti",Open:"Sidedrawer_Open__2peQe",Close:"Sidedrawer_Close__2-DtA",Logo:"Sidedrawer_Logo__325MH"}},XsQz:function(e,t,n){e.exports={Toolbar:"Toolbar_Toolbar__1iit2",Logo:"Toolbar_Logo__1Ec1V",DesktopOnly:"Toolbar_DesktopOnly__1FugW"}},Xuae:function(e,t,n){"use strict";var r=n("mPvQ"),o=n("/GRZ"),a=n("i2R6"),i=n("qXWd"),c=n("48fX"),u=n("tCBg"),l=n("T0f4");function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=l(e);if(t){var o=l(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return u(this,n)}}t.__esModule=!0,t.default=void 0;var f=n("q1tI"),d=!1,p=function(e){c(n,e);var t=s(n);function n(e){var a;return o(this,n),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(r(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,d&&a._hasHeadManager&&(a.props.headManager.mountedInstances.add(i(a)),a.emitChange()),a}return a(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(f.Component);t.default=p},YCH4:function(e,t,n){e.exports={Footer:"Footer_Footer__2eZPF",FooterBottom:"Footer_FooterBottom__9uGuy",ContatctTile:"Footer_ContatctTile__1_1Iq",FooterElementWrapper:"Footer_FooterElementWrapper__XOu3x",Footer__Content:"Footer_Footer__Content__DerWV",Footer__Content__Link:"Footer_Footer__Content__Link__3tWA3",Footer__Content__Text:"Footer_Footer__Content__Text__2qMd8",DesktopOnly:"Footer_DesktopOnly__2CijQ"}},YFqc:function(e,t,n){e.exports=n("cTJO")},ZUcE:function(e,t,n){e.exports={Backdrop:"Backdrop_Backdrop__1ep7N"}},cTJO:function(e,t,n){"use strict";var r=n("zoAU"),o=n("7KCV");t.__esModule=!0,t.default=void 0;var a,i=o(n("q1tI")),c=n("g/15"),u=n("nOHt"),l=n("elyg");var s=new Map,f=window.IntersectionObserver,d={};var p=function(e,t){var n=a||(f?a=new f((function(e){e.forEach((function(e){if(s.has(e.target)){var t=s.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(e.target),s.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(e),s.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}s.delete(e)}):function(){}};function _(e,t,n,r){e.prefetch(t,n,r).catch((function(e){0})),d[t+"%"+n]=!0}function m(e,t,n,r,o,a,i){var u=e.currentTarget,l=u.nodeName,s=u.target;"A"===l&&(s&&"_self"!==s||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)||function(e){var t=(0,c.getLocationOrigin)();return new URL(e,t).origin===t}(n)&&(e.preventDefault(),null==i&&(i=r.indexOf("#")<0),t[o?"replace":"push"](n,r,{shallow:a}).then((function(e){e&&i&&(window.scrollTo(0,0),document.body.focus())})))}var h=function(e){var t=!1!==e.prefetch,o=i.default.useState(),a=r(o,2),c=a[0],s=a[1],h=(0,u.useRouter)(),v=h&&h.pathname||"/",y=i.default.useMemo((function(){var t=(0,l.resolveHref)(v,e.href);return{href:t,as:e.as?(0,l.resolveHref)(v,e.as):t}}),[v,e.href,e.as]),g=y.href,w=y.as;i.default.useEffect((function(){if(t&&f&&c&&c.tagName&&!d[g+"%"+w])return p(c,(function(){_(h,g,w)}))}),[t,c,g,w,h]);var b=e.children,k=e.replace,O=e.shallow,C=e.scroll;"string"===typeof b&&(b=i.default.createElement("a",null,b));var N=i.Children.only(b),D={ref:function(e){e&&s(e),N&&"object"===typeof N&&N.ref&&("function"===typeof N.ref?N.ref(e):"object"===typeof N.ref&&(N.ref.current=e))},onClick:function(e){N.props&&"function"===typeof N.props.onClick&&N.props.onClick(e),e.defaultPrevented||m(e,h,g,w,k,O,C)}};t&&(D.onMouseEnter=function(e){N.props&&"function"===typeof N.props.onMouseEnter&&N.props.onMouseEnter(e),_(h,g,w,{priority:!0})}),!e.passHref&&("a"!==N.type||"href"in N.props)||(D.href=(0,l.addBasePath)(w));var j=n("P5f7").rewriteUrlForNextExport;return D.href&&"undefined"!==typeof __NEXT_DATA__&&__NEXT_DATA__.nextExport&&(D.href=j(D.href)),i.default.cloneElement(N,D)};t.default=h},cXHz:function(e,t,n){"use strict";var r=n("2bPg"),o=n("BRlI"),a=n("tquP"),i=n("00an"),c=n("tLe6"),u=n("g4DW"),l=n("q1tI"),s=n.n(l),f=n("xRaJ"),d=n("W6df"),p=n.n(d),_=n("XsQz"),m=n.n(_),h=n("OR+1"),v=n.n(h),y=s.a.createElement,g=function(e){return y("div",{className:v.a.Logo,style:{height:e.height}},y("img",{src:"./images/logo.png",alt:"MyLogo"}))},w=n("HZ9p"),b=n.n(w),k=n("YFqc"),O=n.n(k),C=n("iGSj"),N=n.n(C),D=n("ma3e"),j=s.a.createElement,S=function(e){var t=[N.a.dd_List],n=[N.a.dd__Header],r=[N.a.NavLink];e.open?t.push(N.a.Show):t.push(N.a.Hide);var o=e.list.map((function(t){return j("li",{key:t[0],onClick:e.clicked},j(O.a,{href:t[0]},j("a",{className:N.a.Link},j("div",{className:r.join(" ")},t[1]))))}));return j("div",{className:N.a.dd__Wrapper,onMouseEnter:e.mouseEntered,onMouseLeave:e.mouseLeft},j("div",{className:n.join(" ")},j("div",{className:N.a.dd__HeaderTitle,onTouchStart:e.touched,onTouchEnd:function(e){return e.preventDefault()}},e.title),e.open?j(D.a,{className:N.a.Icon}):j(D.b,null)),j("ul",{className:t.join(" ")},o))},L=s.a.createElement,M=function(e){Object(i.a)(n,e);var t=Object(c.a)(n);function n(){var e;Object(r.a)(this,n);for(var o=arguments.length,i=new Array(o),c=0;c<o;c++)i[c]=arguments[c];return e=t.call.apply(t,[this].concat(i)),Object(u.a)(Object(a.a)(e),"state",{OfferDD:!1}),Object(u.a)(Object(a.a)(e),"offerTouchHandler",(function(){e.setState((function(e){return{OfferDD:!e.OfferDD}}))})),Object(u.a)(Object(a.a)(e),"offerMouseEnterHandler",(function(){e.setState((function(e){return{OfferDD:!e.OfferDD}}))})),Object(u.a)(Object(a.a)(e),"offerMouseLeftHandler",(function(){e.setState((function(){return{OfferDD:!1}}))})),Object(u.a)(Object(a.a)(e),"clickLinkHandler",(function(){e.setState((function(){return{OfferDD:!1}}))})),e}return Object(o.a)(n,[{key:"render",value:function(){return L("div",{className:b.a.Navbar},L(O.a,{href:"/",as:"/"},L("a",{className:b.a.Link},L("div",{className:b.a.NavLink},"Strona g\u0142\xf3wna"))),L(S,{title:"Uslugi",touched:this.offerTouchHandler,mouseEntered:this.offerMouseEnterHandler,mouseLeft:this.offerMouseLeftHandler,open:this.state.OfferDD,clicked:this.clickLinkHandler,list:[["/masaze","Masa\u017ce"],["/terapia-manualna","Terapia Manualna"],["/kinesiology-taping","Kinesiology taping"],["/kinezyterapia","Kinezyterapia"],["/wizyta-domowa","Wizyta domowa"]]}),L(O.a,{href:"/cennik"},L("a",{className:b.a.Link},L("div",{className:b.a.NavLink},"Cennik"))),L(O.a,{href:"/kontakt"},L("a",{className:b.a.Link},L("div",{className:b.a.NavLink},"Kontakt"))))}}]),n}(l.Component),x=n("SWNY"),E=n.n(x),T=s.a.createElement,H=function(e){return T("div",{onClick:e.clicked,className:E.a.DrawerToggle},T("div",null),T("div",null),T("div",null))},F=s.a.createElement,P=function(e){return F("header",{className:m.a.Toolbar},F(H,{clicked:e.drawerToggleClicked}),F("nav",{className:m.a.DesktopOnly},F(M,null)),F("div",{className:m.a.Logo},F(g,null)))},I=n("WMwr"),A=n.n(I),W=n("ZUcE"),R=n.n(W),z=s.a.createElement,q=function(e){return e.show?z("div",{className:R.a.Backdrop,onClick:e.clicked}):null},B=s.a.createElement,K=function(e){var t=[A.a.SideDrawer,A.a.Close];return e.open&&(t=[A.a.SideDrawer,A.a.Open]),B(f.a,null,B(q,{show:e.open,clicked:e.closed}),B("div",{className:t.join(" ")},B("div",{className:A.a.Logo},B(g,null)),B("nav",null,B(M,null))))},X=n("YCH4"),U=n.n(X),Y=n("NIcq"),Q=s.a.createElement,Z=function(){return Q("footer",{className:U.a.Footer},Q("div",{className:U.a.FooterElementWrapper},Q("div",{className:U.a.ContatctTile},Q("h3",null,"Kontakt"),Q("div",{className:U.a.Footer__Content},Q(D.d,null),Q("p",{className:U.a.Footer__Content__Text},"ania.fizjo@gmail.com")),Q("div",{className:U.a.Footer__Content},Q(D.e,null),Q("p",{className:U.a.Footer__Content__Text},"+48 123 456 789")),Q("div",{className:U.a.Footer__Content},Q(Y.a,null),Q("p",{className:U.a.Footer__Content__Text},"Bydgoszcz")),Q("div",{className:U.a.Footer__Content},Q(D.d,null),Q("p",{className:U.a.Footer__Content__Text},"ania.fizjo@gmail.com"))),Q("div",{className:U.a.ContatctTile},Q("h3",null,"Nawigacja"),Q("div",{className:U.a.Footer__Content__Link},Q(D.f,null),Q(O.a,{href:"/"},Q("a",null,"Strona g\u0142\xf3wna"))),Q("div",{className:U.a.Footer__Content__Link},Q(D.f,null),Q(O.a,{href:"/uslugi"},Q("a",null,"Us\u0142ugi"))),Q("div",{className:U.a.Footer__Content__Link},Q(D.f,null),Q(O.a,{href:"/cennik"},Q("a",null,"Cennik"))),Q("div",{className:U.a.Footer__Content__Link},Q(D.f,null),Q(O.a,{href:"/kontakt"},Q("a",null,"Kontakt")))),Q("div",{className:U.a.ContatctTile},Q("h3",null,"Polecane us\u0142ugi"),Q("div",{className:U.a.Footer__Content__Link},Q(D.c,null),Q(O.a,{href:"/kinesiology-taping"},Q("a",null,"Kinesiology Taping"))),Q("div",{className:U.a.Footer__Content__Link},Q(D.c,null),Q(O.a,{href:"/kinezyterapia"},Q("a",null,"Kinezyterapia"))))),Q("div",{className:U.a.FooterBottom},"Projekt i wykonanie MN \xa9 2020"))},J=s.a.createElement,G=function(e){Object(i.a)(n,e);var t=Object(c.a)(n);function n(){var e;Object(r.a)(this,n);for(var o=arguments.length,i=new Array(o),c=0;c<o;c++)i[c]=arguments[c];return e=t.call.apply(t,[this].concat(i)),Object(u.a)(Object(a.a)(e),"state",{showSideDrawer:!1}),Object(u.a)(Object(a.a)(e),"sideDrawerClosedHandler",(function(){e.setState({showSideDrawer:!1})})),Object(u.a)(Object(a.a)(e),"sideDrawerToggleHandler",(function(){e.setState((function(e){return{showSideDrawer:!e.showSideDrawer}}))})),e}return Object(o.a)(n,[{key:"render",value:function(){return J(f.a,null,J(P,{drawerToggleClicked:this.sideDrawerToggleHandler}),J(K,{open:this.state.showSideDrawer,closed:this.sideDrawerClosedHandler}),J("main",{className:p.a.Content},this.props.children),J(Z,null))}}]),n}(l.Component);t.a=G},g4DW:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))},iGSj:function(e,t,n){e.exports={dd__Header:"Dropdown_dd__Header__2i5n2",dd__HeaderTitle:"Dropdown_dd__HeaderTitle__3z9SZ",dd_List:"Dropdown_dd_List__3H-At",Show:"Dropdown_Show__-Bpk2",Hide:"Dropdown_Hide__1hf0K",NavLink:"Dropdown_NavLink__1udgb",Link:"Dropdown_Link__2py5P",dd__Wrapper:"Dropdown_dd__Wrapper__225-9"}},kG2m:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},mPvQ:function(e,t,n){var r=n("5fIB"),o=n("rlHP"),a=n("KckH"),i=n("kG2m");e.exports=function(e){return r(e)||o(e)||a(e)||i()}},oI91:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},rlHP:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},tLe6:function(e,t,n){"use strict";function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function o(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function a(e){return(a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}n.d(t,"a",(function(){return u}));var i=n("tquP");function c(e,t){return!t||"object"!==a(t)&&"function"!==typeof t?Object(i.a)(e):t}function u(e){return function(){var t,n=r(e);if(o()){var a=r(this).constructor;t=Reflect.construct(n,arguments,a)}else t=n.apply(this,arguments);return c(this,t)}}},tquP:function(e,t,n){"use strict";function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,"a",(function(){return r}))},xRaJ:function(e,t,n){"use strict";t.a=function(e){return e.children}}}]);