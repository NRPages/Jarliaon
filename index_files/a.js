this.wp=this.wp||{},this.wp.i18n=function(t){var r={};function n(e){if(r[e])return r[e].exports;var o=r[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=r,n.d=function(t,r,e){n.o(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:e})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,r){if(1&r&&(t=n(t)),8&r)return t;if(4&r&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(n.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&r&&"string"!=typeof t)for(var o in t)n.d(e,o,function(r){return t[r]}.bind(null,o));return e},n.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(r,"a",r),r},n.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},n.p="",n(n.s=389)}({180:function(t,r,n){var e;!function(){"use strict";var o={not_string:/[^s]/,not_bool:/[^t]/,not_type:/[^T]/,not_primitive:/[^v]/,number:/[diefg]/,numeric_arg:/[bcdiefguxX]/,json:/[j]/,not_json:/[^j]/,text:/^[^\x25]+/,modulo:/^\x25{2}/,placeholder:/^\x25(?:([1-9]\d*)\$|\(([^\)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-gijostTuvxX])/,key:/^([a-z_][a-z_\d]*)/i,key_access:/^\.([a-z_][a-z_\d]*)/i,index_access:/^\[(\d+)\]/,sign:/^[\+\-]/};function i(t){return a(c(t),arguments)}function u(t,r){return i.apply(null,[t].concat(r||[]))}function a(t,r){var n,e,u,a,s,c,f,l,p,d=1,b=t.length,g="";for(e=0;e<b;e++)if("string"==typeof t[e])g+=t[e];else if(Array.isArray(t[e])){if((a=t[e])[2])for(n=r[d],u=0;u<a[2].length;u++){if(!n.hasOwnProperty(a[2][u]))throw new Error(i('[sprintf] property "%s" does not exist',a[2][u]));n=n[a[2][u]]}else n=a[1]?r[a[1]]:r[d++];if(o.not_type.test(a[8])&&o.not_primitive.test(a[8])&&n instanceof Function&&(n=n()),o.numeric_arg.test(a[8])&&"number"!=typeof n&&isNaN(n))throw new TypeError(i("[sprintf] expecting number but found %T",n));switch(o.number.test(a[8])&&(l=n>=0),a[8]){case"b":n=parseInt(n,10).toString(2);break;case"c":n=String.fromCharCode(parseInt(n,10));break;case"d":case"i":n=parseInt(n,10);break;case"j":n=JSON.stringify(n,null,a[6]?parseInt(a[6]):0);break;case"e":n=a[7]?parseFloat(n).toExponential(a[7]):parseFloat(n).toExponential();break;case"f":n=a[7]?parseFloat(n).toFixed(a[7]):parseFloat(n);break;case"g":n=a[7]?String(Number(n.toPrecision(a[7]))):parseFloat(n);break;case"o":n=(parseInt(n,10)>>>0).toString(8);break;case"s":n=String(n),n=a[7]?n.substring(0,a[7]):n;break;case"t":n=String(!!n),n=a[7]?n.substring(0,a[7]):n;break;case"T":n=Object.prototype.toString.call(n).slice(8,-1).toLowerCase(),n=a[7]?n.substring(0,a[7]):n;break;case"u":n=parseInt(n,10)>>>0;break;case"v":n=n.valueOf(),n=a[7]?n.substring(0,a[7]):n;break;case"x":n=(parseInt(n,10)>>>0).toString(16);break;case"X":n=(parseInt(n,10)>>>0).toString(16).toUpperCase()}o.json.test(a[8])?g+=n:(!o.number.test(a[8])||l&&!a[3]?p="":(p=l?"+":"-",n=n.toString().replace(o.sign,"")),c=a[4]?"0"===a[4]?"0":a[4].charAt(1):" ",f=a[6]-(p+n).length,s=a[6]&&f>0?c.repeat(f):"",g+=a[5]?p+n+s:"0"===c?p+s+n:s+p+n)}return g}var s=Object.create(null);function c(t){if(s[t])return s[t];for(var r,n=t,e=[],i=0;n;){if(null!==(r=o.text.exec(n)))e.push(r[0]);else if(null!==(r=o.modulo.exec(n)))e.push("%");else{if(null===(r=o.placeholder.exec(n)))throw new SyntaxError("[sprintf] unexpected placeholder");if(r[2]){i|=1;var u=[],a=r[2],c=[];if(null===(c=o.key.exec(a)))throw new SyntaxError("[sprintf] failed to parse named argument key");for(u.push(c[1]);""!==(a=a.substring(c[0].length));)if(null!==(c=o.key_access.exec(a)))u.push(c[1]);else{if(null===(c=o.index_access.exec(a)))throw new SyntaxError("[sprintf] failed to parse named argument key");u.push(c[1])}r[2]=u}else i|=2;if(3===i)throw new Error("[sprintf] mixing positional and named placeholders is not (yet) supported");e.push(r)}n=n.substring(r[0].length)}return s[t]=e}r.sprintf=i,r.vsprintf=u,"undefined"!=typeof window&&(window.sprintf=i,window.vsprintf=u,void 0===(e=function(){return{sprintf:i,vsprintf:u}}.call(r,n,r,t))||(t.exports=e))}()},389:function(t,r,n){"use strict";n.r(r),n.d(r,"sprintf",(function(){return s})),n.d(r,"createI18n",(function(){return _})),n.d(r,"setLocaleData",(function(){return O})),n.d(r,"__",(function(){return j})),n.d(r,"_x",(function(){return k})),n.d(r,"_n",(function(){return S})),n.d(r,"_nx",(function(){return P})),n.d(r,"isRTL",(function(){return F}));var e=n(53),o=n.n(e),i=n(180),u=n.n(i),a=o()(console.error);function s(t){try{for(var r=arguments.length,n=new Array(r>1?r-1:0),e=1;e<r;e++)n[e-1]=arguments[e];return u.a.sprintf.apply(u.a,[t].concat(n))}catch(r){return a("sprintf error: \n\n"+r.toString()),t}}var c,f,l,p,d=n(5);c={"(":9,"!":8,"*":7,"/":7,"%":7,"+":6,"-":6,"<":5,"<=":5,">":5,">=":5,"==":4,"!=":4,"&&":3,"||":2,"?":1,"?:":1},f=["(","?"],l={")":["("],":":["?","?:"]},p=/<=|>=|==|!=|&&|\|\||\?:|\(|!|\*|\/|%|\+|-|<|>|\?|\)|:/;var b={"!":function(t){return!t},"*":function(t,r){return t*r},"/":function(t,r){return t/r},"%":function(t,r){return t%r},"+":function(t,r){return t+r},"-":function(t,r){return t-r},"<":function(t,r){return t<r},"<=":function(t,r){return t<=r},">":function(t,r){return t>r},">=":function(t,r){return t>=r},"==":function(t,r){return t===r},"!=":function(t,r){return t!==r},"&&":function(t,r){return t&&r},"||":function(t,r){return t||r},"?:":function(t,r,n){if(t)throw r;return n}};function g(t){var r=function(t){for(var r,n,e,o,i=[],u=[];r=t.match(p);){for(n=r[0],(e=t.substr(0,r.index).trim())&&i.push(e);o=u.pop();){if(l[n]){if(l[n][0]===o){n=l[n][1]||n;break}}else if(f.indexOf(o)>=0||c[o]<c[n]){u.push(o);break}i.push(o)}l[n]||u.push(n),t=t.substr(r.index+n.length)}return(t=t.trim())&&i.push(t),i.concat(u.reverse())}(t);return function(t){return function(t,r){var n,e,o,i,u,a,s=[];for(n=0;n<t.length;n++){if(u=t[n],i=b[u]){for(e=i.length,o=Array(e);e--;)o[e]=s.pop();try{a=i.apply(null,o)}catch(t){return t}}else a=r.hasOwnProperty(u)?r[u]:+u;s.push(a)}return s[0]}(r,t)}}var h={contextDelimiter:"",onMissingKey:null};function v(t,r){var n;for(n in this.data=t,this.pluralForms={},this.options={},h)this.options[n]=void 0!==r&&n in r?r[n]:h[n]}function y(t,r){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);r&&(e=e.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),n.push.apply(n,e)}return n}function x(t){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?y(Object(n),!0).forEach((function(r){Object(d.a)(t,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))}))}return t}v.prototype.getPluralForm=function(t,r){var n,e,o,i,u=this.pluralForms[t];return u||("function"!=typeof(o=(n=this.data[t][""])["Plural-Forms"]||n["plural-forms"]||n.plural_forms)&&(e=function(t){var r,n,e;for(r=t.split(";"),n=0;n<r.length;n++)if(0===(e=r[n].trim()).indexOf("plural="))return e.substr(7)}(n["Plural-Forms"]||n["plural-forms"]||n.plural_forms),i=g(e),o=function(t){return+i({n:t})}),u=this.pluralForms[t]=o),u(r)},v.prototype.dcnpgettext=function(t,r,n,e,o){var i,u,a;return i=void 0===o?0:this.getPluralForm(t,o),u=n,r&&(u=r+this.options.contextDelimiter+n),(a=this.data[t][u])&&a[i]?a[i]:(this.options.onMissingKey&&this.options.onMissingKey(n,t),0===i?n:e)};var m={"":{plural_forms:function(t){return 1===t?0:1}}},_=function(t,r){var n=new v({}),e=function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"default";n.data[r]=x({},m,{},n.data[r],{},t),n.data[r][""]=x({},m[""],{},n.data[r][""])},o=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"default",r=arguments.length>1?arguments[1]:void 0,o=arguments.length>2?arguments[2]:void 0,i=arguments.length>3?arguments[3]:void 0,u=arguments.length>4?arguments[4]:void 0;return n.data[t]||e(void 0,t),n.dcnpgettext(t,r,o,i,u)},i=function(t,r,n){return o(n,r,t)};return t&&e(t,r),{setLocaleData:e,__:function(t,r){return o(r,void 0,t)},_x:i,_n:function(t,r,n,e){return o(e,void 0,t,r,n)},_nx:function(t,r,n,e,i){return o(i,e,t,r,n)},isRTL:function(){return"rtl"===i("ltr","text direction")}}},w=_(),O=w.setLocaleData.bind(w),j=w.__.bind(w),k=w._x.bind(w),S=w._n.bind(w),P=w._nx.bind(w),F=w.isRTL.bind(w)},5:function(t,r,n){"use strict";function e(t,r,n){return r in t?Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[r]=n,t}n.d(r,"a",(function(){return e}))},53:function(t,r,n){t.exports=function(t,r){var n,e,o=0;function i(){var i,u,a=n,s=arguments.length;t:for(;a;){if(a.args.length===arguments.length){for(u=0;u<s;u++)if(a.args[u]!==arguments[u]){a=a.next;continue t}return a!==n&&(a===e&&(e=a.prev),a.prev.next=a.next,a.next&&(a.next.prev=a.prev),a.next=n,a.prev=null,n.prev=a,n=a),a.val}a=a.next}for(i=new Array(s),u=0;u<s;u++)i[u]=arguments[u];return a={args:i,val:t.apply(null,i)},n?(n.prev=a,a.next=n):e=a,o===r.maxSize?(e=e.prev).next=null:o++,n=a,a.val}return r=r||{},i.clear=function(){n=null,e=null,o=0},i}}});;
this.wp=this.wp||{},this.wp.domReady=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=353)}({353:function(e,t,n){"use strict";function r(e){"complete"!==document.readyState&&"interactive"!==document.readyState?document.addEventListener("DOMContentLoaded",e):e()}n.r(t),n.d(t,"default",(function(){return r}))}}).default;;
this.wp=this.wp||{},this.wp.escapeHtml=function(e){var t={};function n(r){if(t[r])return t[r].exports;var u=t[r]={i:r,l:!1,exports:{}};return e[r].call(u.exports,u,u.exports,n),u.l=!0,u.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var u in e)n.d(r,u,function(t){return e[t]}.bind(null,u));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=403)}({403:function(e,t,n){"use strict";n.r(t),n.d(t,"escapeAmpersand",(function(){return u})),n.d(t,"escapeQuotationMark",(function(){return o})),n.d(t,"escapeLessThan",(function(){return i})),n.d(t,"escapeAttribute",(function(){return c})),n.d(t,"escapeHTML",(function(){return a})),n.d(t,"escapeEditableHTML",(function(){return f})),n.d(t,"isValidAttributeName",(function(){return p}));var r=/[\u007F-\u009F "'>/="\uFDD0-\uFDEF]/;function u(e){return e.replace(/&(?!([a-z0-9]+|#[0-9]+|#x[a-f0-9]+);)/gi,"&amp;")}function o(e){return e.replace(/"/g,"&quot;")}function i(e){return e.replace(/</g,"&lt;")}function c(e){return function(e){return e.replace(/>/g,"&gt;")}(o(u(e)))}function a(e){return i(u(e))}function f(e){return i(e.replace(/&/g,"&amp;"))}function p(e){return!r.test(e)}}});;
!function(t,e){for(var n in e)t[n]=e[n]}(window,function(t){function e(e){for(var n,r,o=e[0],a=e[1],s=0,c=[];s<o.length;s++)r=o[s],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&c.push(i[r][0]),i[r]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n]);for(u&&u(e);c.length;)c.shift()()}var n={},r={21:0},i={21:0};function o(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.e=function(t){var e=[];r[t]?e.push(r[t]):0!==r[t]&&{25:1}[t]&&e.push(r[t]=new Promise((function(e,n){for(var i="rtl"===document.dir?({25:"vendors~swiper"}[t]||t)+"."+{25:"977b76009ea556ba4f47"}[t]+".rtl.css":({25:"vendors~swiper"}[t]||t)+"."+{25:"977b76009ea556ba4f47"}[t]+".css",a=o.p+i,s=document.getElementsByTagName("link"),c=0;c<s.length;c++){var u=(f=s[c]).getAttribute("data-href")||f.getAttribute("href");if("stylesheet"===f.rel&&(u===i||u===a))return e()}var l=document.getElementsByTagName("style");for(c=0;c<l.length;c++){var f;if((u=(f=l[c]).getAttribute("data-href"))===i||u===a)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.setAttribute("data-webpack",!0),d.onload=e,d.onerror=function(e){var i=e&&e.target&&e.target.src||a,o=new Error("Loading CSS chunk "+t+" failed.\n("+i+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=i,delete r[t],d.parentNode.removeChild(d),n(o)},d.href=a,document.getElementsByTagName("head")[0].appendChild(d)})).then((function(){r[t]=0})));var n=i[t];if(0!==n)if(n)e.push(n[2]);else{var a=new Promise((function(e,r){n=i[t]=[e,r]}));e.push(n[2]=a);var s,c=document.createElement("script");c.charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.src=function(t){return o.p+""+({25:"vendors~swiper"}[t]||t)+"."+{25:"977b76009ea556ba4f47"}[t]+".js"}(t);var u=new Error;s=function(e){c.onerror=c.onload=null,clearTimeout(l);var n=i[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+r+": "+o+")",u.name="ChunkLoadError",u.type=r,u.request=o,n[1](u)}i[t]=void 0}};var l=setTimeout((function(){s({type:"timeout",target:c})}),12e4);c.onerror=c.onload=s,document.head.appendChild(c)}return Promise.all(e)},o.m=t,o.c=n,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o.oe=function(t){throw console.error(t),t};var a=window.webpackJsonp=window.webpackJsonp||[],s=a.push.bind(a);a.push=e,a=a.slice();for(var c=0;c<a.length;c++)e(a[c]);var u=s;return o(o.s=360)}({158:function(t,e,n){},17:function(t,e,n){var r=n(97),i=n(98),o=n(69),a=n(99);t.exports=function(t,e){return r(t)||i(t,e)||o(t,e)||a()}},36:function(t,e){function n(t,e,n,r,i,o,a){try{var s=t[o](a),c=s.value}catch(u){return void n(u)}s.done?e(c):Promise.resolve(c).then(r,i)}t.exports=function(t){return function(){var e=this,r=arguments;return new Promise((function(i,o){var a=t.apply(e,r);function s(t){n(a,i,o,s,c,"next",t)}function c(t){n(a,i,o,s,c,"throw",t)}s(void 0)}))}}},360:function(t,e,n){n(44),t.exports=n(361)},361:function(t,e,n){"use strict";n.r(e);var r=n(4),i=n(55),o=n.n(i),a=n(49),s=n(93),c=n(48);"undefined"!=typeof window&&o()((function(){var t=document.getElementsByClassName("wp-block-jetpack-slideshow");Object(r.forEach)(t,(function(t){if("true"!==t.getAttribute("data-jetpack-block-initialized")){var e=t.dataset,n=e.autoplay,r=e.delay,i=e.effect,o=window.matchMedia("(prefers-reduced-motion: reduce)").matches,u=n&&!o,l=t.getElementsByClassName("swiper-container")[0],f=null;Object(s.a)(l,{autoplay:!!u&&{delay:1e3*r,disableOnInteraction:!1},effect:i,init:!0,initialSlide:0,loop:!0,keyboard:{enabled:!0,onlyInViewport:!0}},{init:c.b,imagesReady:c.d,paginationRender:c.c,transitionEnd:c.a}).then((function(t){new a.a((function(){f&&(cancelAnimationFrame(f),f=null),f=requestAnimationFrame((function(){Object(c.d)(t),t.update()}))})).observe(t.el)})).catch((function(){t.querySelector(".wp-block-jetpack-slideshow_container").classList.add("wp-swiper-initialized")})),t.setAttribute("data-jetpack-block-initialized","true")}}))}))},38:function(t,e,n){"object"==typeof window&&window.Jetpack_Block_Assets_Base_Url&&(n.p=window.Jetpack_Block_Assets_Base_Url)},4:function(t,e){!function(){t.exports=this.lodash}()},44:function(t,e,n){"use strict";n.r(e);n(38)},48:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return u})),n.d(e,"d",(function(){return s}));var r=n(94),i=n(4),o="wp-block-jetpack-slideshow_autoplay-paused";function a(t){s(t),c(t),t.el.querySelector(".wp-block-jetpack-slideshow_button-pause").addEventListener("click",(function(){t.el&&(t.el.classList.contains(o)?(t.el.classList.remove(o),t.autoplay.start(),this.setAttribute("aria-label","Pause Slideshow")):(t.el.classList.add(o),t.autoplay.stop(),this.setAttribute("aria-label","Play Slideshow")))}))}function s(t){if(t&&t.el){var e=t.el.querySelector('.swiper-slide[data-swiper-slide-index="0"] img');if(e){var n=e.clientWidth/e.clientHeight,r=Math.max(Math.min(n,16/9),1),i="undefined"!=typeof window?.8*window.innerHeight:600,o=Math.min(t.width/r,i),a="".concat(Math.floor(o),"px"),s="".concat(Math.floor(o/2),"px");t.el.classList.add("wp-swiper-initialized"),t.wrapperEl.style.height=a,t.el.querySelector(".wp-block-jetpack-slideshow_button-prev").style.top=s,t.el.querySelector(".wp-block-jetpack-slideshow_button-next").style.top=s}}}function c(t){Object(i.forEach)(t.slides,(function(e,n){e.setAttribute("aria-hidden",n===t.activeIndex?"false":"true"),n===t.activeIndex?e.setAttribute("tabindex","-1"):e.removeAttribute("tabindex")})),function(t){var e=t.slides[t.activeIndex];if(e){var n=e.getElementsByTagName("FIGCAPTION")[0],i=e.getElementsByTagName("IMG")[0];t.a11y.liveRegion&&(t.a11y.liveRegion[0].innerHTML=n?n.innerHTML:Object(r.escapeHTML)(i.alt))}}(t)}function u(t){Object(i.forEach)(t.pagination.bullets,(function(e){e.addEventListener("click",(function(){var e=t.slides[t.realIndex];setTimeout((function(){e.focus()}),500)}))}))}},49:function(t,e,n){"use strict";var r=function(){if("undefined"!=typeof Map)return Map;function t(t,e){var n=-1;return t.some((function(t,r){return t[0]===e&&(n=r,!0)})),n}return(function(){function e(){this.__entries__=[]}return Object.defineProperty(e.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),e.prototype.get=function(e){var n=t(this.__entries__,e),r=this.__entries__[n];return r&&r[1]},e.prototype.set=function(e,n){var r=t(this.__entries__,e);~r?this.__entries__[r][1]=n:this.__entries__.push([e,n])},e.prototype.delete=function(e){var n=this.__entries__,r=t(n,e);~r&&n.splice(r,1)},e.prototype.has=function(e){return!!~t(this.__entries__,e)},e.prototype.clear=function(){this.__entries__.splice(0)},e.prototype.forEach=function(t,e){void 0===e&&(e=null);for(var n=0,r=this.__entries__;n<r.length;n++){var i=r[n];t.call(e,i[1],i[0])}},e}())}(),i="undefined"!=typeof window&&"undefined"!=typeof document&&window.document===document,o="undefined"!=typeof window&&window.Math===Math?window:"undefined"!=typeof self&&self.Math===Math?self:"undefined"!=typeof window&&window.Math===Math?window:Function("return this")(),a="function"==typeof requestAnimationFrame?requestAnimationFrame.bind(o):function(t){return setTimeout((function(){return t(Date.now())}),1e3/60)};var s=["top","right","bottom","left","width","height","size","weight"],c="undefined"!=typeof MutationObserver,u=function(){function t(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=function(t,e){var n=!1,r=!1,i=0;function o(){n&&(n=!1,t()),r&&c()}function s(){a(o)}function c(){var t=Date.now();if(n){if(t-i<2)return;r=!0}else n=!0,r=!1,setTimeout(s,e);i=t}return c}(this.refresh.bind(this),20)}return t.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},t.prototype.removeObserver=function(t){var e=this.observers_,n=e.indexOf(t);~n&&e.splice(n,1),!e.length&&this.connected_&&this.disconnect_()},t.prototype.refresh=function(){this.updateObservers_()&&this.refresh()},t.prototype.updateObservers_=function(){var t=this.observers_.filter((function(t){return t.gatherActive(),t.hasActive()}));return t.forEach((function(t){return t.broadcastActive()})),t.length>0},t.prototype.connect_=function(){i&&!this.connected_&&(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),c?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},t.prototype.disconnect_=function(){i&&this.connected_&&(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},t.prototype.onTransitionEnd_=function(t){var e=t.propertyName,n=void 0===e?"":e;s.some((function(t){return!!~n.indexOf(t)}))&&this.refresh()},t.getInstance=function(){return this.instance_||(this.instance_=new t),this.instance_},t.instance_=null,t}(),l=function(t,e){for(var n=0,r=Object.keys(e);n<r.length;n++){var i=r[n];Object.defineProperty(t,i,{value:e[i],enumerable:!1,writable:!1,configurable:!0})}return t},f=function(t){return t&&t.ownerDocument&&t.ownerDocument.defaultView||o},d=y(0,0,0,0);function h(t){return parseFloat(t)||0}function p(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return e.reduce((function(e,n){return e+h(t["border-"+n+"-width"])}),0)}function v(t){var e=t.clientWidth,n=t.clientHeight;if(!e&&!n)return d;var r=f(t).getComputedStyle(t),i=function(t){for(var e={},n=0,r=["top","right","bottom","left"];n<r.length;n++){var i=r[n],o=t["padding-"+i];e[i]=h(o)}return e}(r),o=i.left+i.right,a=i.top+i.bottom,s=h(r.width),c=h(r.height);if("border-box"===r.boxSizing&&(Math.round(s+o)!==e&&(s-=p(r,"left","right")+o),Math.round(c+a)!==n&&(c-=p(r,"top","bottom")+a)),!function(t){return t===f(t).document.documentElement}(t)){var u=Math.round(s+o)-e,l=Math.round(c+a)-n;1!==Math.abs(u)&&(s-=u),1!==Math.abs(l)&&(c-=l)}return y(i.left,i.top,s,c)}var b="undefined"!=typeof SVGGraphicsElement?function(t){return t instanceof f(t).SVGGraphicsElement}:function(t){return t instanceof f(t).SVGElement&&"function"==typeof t.getBBox};function m(t){return i?b(t)?function(t){var e=t.getBBox();return y(0,0,e.width,e.height)}(t):v(t):d}function y(t,e,n,r){return{x:t,y:e,width:n,height:r}}var w=function(){function t(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=y(0,0,0,0),this.target=t}return t.prototype.isActive=function(){var t=m(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},t.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t},t}(),_=function(t,e){var n,r,i,o,a,s,c,u=(r=(n=e).x,i=n.y,o=n.width,a=n.height,s="undefined"!=typeof DOMRectReadOnly?DOMRectReadOnly:Object,c=Object.create(s.prototype),l(c,{x:r,y:i,width:o,height:a,top:i,right:r+o,bottom:a+i,left:r}),c);l(this,{target:t,contentRect:u})},g=function(){function t(t,e,n){if(this.activeObservations_=[],this.observations_=new r,"function"!=typeof t)throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=e,this.callbackCtx_=n}return t.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof f(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)||(e.set(t,new w(t)),this.controller_.addObserver(this),this.controller_.refresh())}},t.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof f(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)&&(e.delete(t),e.size||this.controller_.removeObserver(this))}},t.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},t.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach((function(e){e.isActive()&&t.activeObservations_.push(e)}))},t.prototype.broadcastActive=function(){if(this.hasActive()){var t=this.callbackCtx_,e=this.activeObservations_.map((function(t){return new _(t.target,t.broadcastRect())}));this.callback_.call(t,e,t),this.clearActive()}},t.prototype.clearActive=function(){this.activeObservations_.splice(0)},t.prototype.hasActive=function(){return this.activeObservations_.length>0},t}(),E="undefined"!=typeof WeakMap?new WeakMap:new r,O=function t(e){if(!(this instanceof t))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=u.getInstance(),r=new g(e,n,this);E.set(this,r)};["observe","unobserve","disconnect"].forEach((function(t){O.prototype[t]=function(){var e;return(e=E.get(this))[t].apply(e,arguments)}}));var x=void 0!==o.ResizeObserver?o.ResizeObserver:O;e.a=x},55:function(t,e){!function(){t.exports=this.wp.domReady}()},67:function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}},69:function(t,e,n){var r=n(67);t.exports=function(t,e){if(t){if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}},93:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(17),i=n.n(r),o=n(36),a=n.n(o),s=n(4);n(158);function c(){return u.apply(this,arguments)}function u(){return(u=a()(regeneratorRuntime.mark((function t(){var e,r,o,a,c,u,l,f=arguments;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=f.length>0&&void 0!==f[0]?f[0]:".swiper-container",r=f.length>1&&void 0!==f[1]?f[1]:{},o=f.length>2&&void 0!==f[2]?f[2]:{},a={effect:"slide",grabCursor:!0,init:!0,initialSlide:0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{bulletElement:"button",clickable:!0,el:".swiper-pagination",type:"bullets"},preventClicksPropagation:!1,releaseFormElements:!1,setWrapperSize:!0,touchStartPreventDefault:!1,on:Object(s.mapValues)(o,(function(t){return function(){t(this)}}))},t.next=6,Promise.all([n.e(25).then(n.t.bind(null,310,7)),n.e(25).then(n.t.bind(null,311,7))]);case 6:return c=t.sent,u=i()(c,1),l=u[0].default,t.abrupt("return",new l(e,Object(s.merge)({},a,r)));case 10:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},94:function(t,e){!function(){t.exports=this.wp.escapeHtml}()},97:function(t,e){t.exports=function(t){if(Array.isArray(t))return t}},98:function(t,e){t.exports=function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,i=!1,o=void 0;try{for(var a,s=t[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(c){i=!0,o=c}finally{try{r||null==s.return||s.return()}finally{if(i)throw o}}return n}}},99:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}}}));;
/* global jetpackCarouselStrings, DocumentTouch */

// @start-hide-in-jetpack
if (typeof wpcom === 'undefined') {
	var wpcom = {};
}
wpcom.carousel = (function(/*$*/) {
	var prebuilt_widths = jetpackCarouselStrings.widths;
	var pageviews_stats_args = jetpackCarouselStrings.stats_query_args;

	var findFirstLargeEnoughWidth = function(original_w, original_h, dest_w, dest_h) {
		var inverse_ratio = original_h / original_w;

		for ( var i = 0; i < prebuilt_widths.length; ++i ) {
			if ( prebuilt_widths[i] >= dest_w || prebuilt_widths[i] * inverse_ratio >= dest_h ) {
				return prebuilt_widths[i];
			}
		}

		return original_w;
	};

	var removeResizeFromImageURL = function( url ) {
		return removeArgFromURL( url, 'resize' );
	};

	var removeArgFromURL = function( url, arg ) {
		var re = new RegExp( '[\\?&]' + arg + '(=[^?&]+)?' );
		if ( url.match( re ) ) {
			return url.replace( re, '' );
		}
		return url;
	};

	var addWidthToImageURL = function(url, width) {
		width = parseInt(width, 10);
		// Give devices with a higher devicePixelRatio higher-res images (Retina display = 2, Android phones = 1.5, etc)
		if ('undefined' !== typeof window.devicePixelRatio && window.devicePixelRatio > 1) {
			width = Math.round( width * window.devicePixelRatio );
		}
		url = addArgToURL(url, 'w', width);
		url = addArgToURL(url, 'h', '');
		return url;
	};

	var addArgToURL = function(url, arg, value) {
		var re = new RegExp(arg+'=[^?&]+');
		if ( url.match(re) ) {
			return url.replace(re, arg + '=' + value);
		} else {
			var divider = url.indexOf('?') !== -1 ? '&' : '?';
			return url + divider + arg + '=' + value;
		}
	};

	var stat = function ( names ) {
		if ( typeof names !== 'string' ) {
			names = names.join( ',' );
		}

		new Image().src = window.location.protocol +
			'//pixel.wp.com/g.gif?v=wpcom-no-pv' +
			'&x_carousel=' + names +
			'&baba=' + Math.random();
	};

	var pageview = function ( post_id ) {
		new Image().src = window.location.protocol +
			'//pixel.wp.com/g.gif?host=' + encodeURIComponent( window.location.host ) +
			'&ref=' + encodeURIComponent( document.referrer ) +
			'&rand=' + Math.random() +
			'&' + pageviews_stats_args +
			'&post=' + encodeURIComponent( post_id );
	};


	return {
		findFirstLargeEnoughWidth: findFirstLargeEnoughWidth,
		removeResizeFromImageURL: removeResizeFromImageURL,
		addWidthToImageURL: addWidthToImageURL,
		stat: stat,
		pageview: pageview
	};

})(jQuery);
// @end-hide-in-jetpack
jQuery( document ).ready( function( $ ) {
	// gallery faded layer and container elements
	var overlay,
		comments,
		gallery,
		container,
		nextButton,
		previousButton,
		info,
		transitionBegin,
		caption,
		resizeTimeout,
		photo_info,
		close_hint,
		commentInterval,
		lastSelectedSlide,
		screenPadding = 110,
		originalOverflow = $( 'body' ).css( 'overflow' ),
		originalHOverflow = $( 'html' ).css( 'overflow' ),
		proportion = 85,
		last_known_location_hash = '',
		imageMeta,
		titleAndDescription,
		commentForm,
		leftColWrapper,
		scrollPos;

	if ( window.innerWidth <= 760 ) {
		screenPadding = Math.round( ( window.innerWidth / 760 ) * 110 );

		if (
			screenPadding < 40 &&
			( 'ontouchstart' in window || ( window.DocumentTouch && document instanceof DocumentTouch ) )
		) {
			screenPadding = 0;
		}
	}

	// Adding a polyfill for browsers that do not have Date.now
	if ( 'undefined' === typeof Date.now ) {
		Date.now = function now() {
			return new Date().getTime();
		};
	}

	var keyListener = function( e ) {
		switch ( e.which ) {
			case 38: // up
				e.preventDefault();
				container.scrollTop( container.scrollTop() - 100 );
				break;
			case 40: // down
				e.preventDefault();
				container.scrollTop( container.scrollTop() + 100 );
				break;
			case 39: // right
				e.preventDefault();
				gallery.jp_carousel( 'next' );
				break;
			case 37: // left
			case 8: // backspace
				e.preventDefault();
				gallery.jp_carousel( 'previous' );
				break;
			case 27: // escape
				e.preventDefault();
				container.jp_carousel( 'close' );
				break;
			default:
				// making jslint happy
				break;
		}
	};

	var resizeListener = function(/*e*/) {
		clearTimeout( resizeTimeout );
		resizeTimeout = setTimeout( function() {
			gallery.jp_carousel( 'slides' ).jp_carousel( 'fitSlide', true );
			gallery.jp_carousel( 'updateSlidePositions', true );
			gallery.jp_carousel( 'fitMeta', true );
		}, 200 );
	};

	var prepareGallery = function(/*dataCarouselExtra*/) {
		if ( ! overlay ) {
			overlay = $( '<div></div>' )
				.addClass( 'jp-carousel-overlay' )
				.css( {
					position: 'fixed',
					top: 0,
					right: 0,
					bottom: 0,
					left: 0,
				} );

			var displayComments = 1 === +jetpackCarouselStrings.display_comments;
			var buttons = displayComments
				? '<a class="jp-carousel-commentlink" href="#">' + jetpackCarouselStrings.comment + '</a>'
				: '';
			if ( 1 === Number( jetpackCarouselStrings.is_logged_in ) ) {
// @start-hide-in-jetpack
				if ( 1 === Number( jetpackCarouselStrings.is_public && 1 === Number( jetpackCarouselStrings.reblog_enabled ) ) ) {
					buttons += '<a class="jp-carousel-reblog" href="#">' + jetpackCarouselStrings.reblog + '</a>';
				}
// @end-hide-in-jetpack
			}

			buttons = $( '<div class="jp-carousel-buttons">' + buttons + '</div>' );

			caption = $( '<h2 itemprop="caption description"></h2>' );
			photo_info = $( '<div class="jp-carousel-photo-info"></div>' ).append( caption );

			imageMeta = $( '<div></div>' )
				.addClass( 'jp-carousel-image-meta' )
				.css( {
					float: 'right',
					'margin-top': '20px',
					width: '250px',
				} );

			if ( 0 < buttons.children().length ) {
				imageMeta.append( buttons );
			}

			imageMeta
				.append( "<ul class='jp-carousel-image-exif' style='display:none;'></ul>" )
				.append( "<a class='jp-carousel-image-download' style='display:none;'></a>" )
				.append( "<div class='jp-carousel-image-map' style='display:none;'></div>" );

			titleAndDescription = $( '<div></div>' )
				.addClass( 'jp-carousel-titleanddesc' )
				.css( {
					width: '100%',
					'margin-top': imageMeta.css( 'margin-top' ),
				} );

			var leftWidth = $( window ).width() - screenPadding * 2 - ( imageMeta.width() + 40 );
			leftWidth += 'px';

			leftColWrapper = $( '<div></div>' )
				.addClass( 'jp-carousel-left-column-wrapper' )
				.css( {
					width: Math.floor( leftWidth ),
				} )
				.append( titleAndDescription );

			if ( displayComments ) {
				var commentFormMarkup = '<div id="jp-carousel-comment-form-container">';

				if (
					jetpackCarouselStrings.local_comments_commenting_as &&
					jetpackCarouselStrings.local_comments_commenting_as.length
				) {
					// Comments not enabled, fallback to local comments

					if (
						1 !== Number( jetpackCarouselStrings.is_logged_in ) &&
						1 === Number( jetpackCarouselStrings.comment_registration )
					) {
						commentFormMarkup +=
							'<div id="jp-carousel-comment-form-commenting-as">' +
							jetpackCarouselStrings.local_comments_commenting_as +
							'</div>';
					} else {
						commentFormMarkup += '<form id="jp-carousel-comment-form">';
						commentFormMarkup +=
							'<textarea name="comment" class="jp-carousel-comment-form-field jp-carousel-comment-form-textarea" id="jp-carousel-comment-form-comment-field" placeholder="' +
							jetpackCarouselStrings.write_comment +
							'"></textarea>';
						commentFormMarkup += '<div id="jp-carousel-comment-form-submit-and-info-wrapper">';
						commentFormMarkup +=
							'<div id="jp-carousel-comment-form-commenting-as">' +
							jetpackCarouselStrings.local_comments_commenting_as +
							'</div>';
						commentFormMarkup +=
							'<input type="submit" name="submit" class="jp-carousel-comment-form-button" id="jp-carousel-comment-form-button-submit" value="' +
							jetpackCarouselStrings.post_comment +
							'" />';
						commentFormMarkup += '<span id="jp-carousel-comment-form-spinner">&nbsp;</span>';
						commentFormMarkup += '<div id="jp-carousel-comment-post-results"></div>';
						commentFormMarkup += '</div>';
						commentFormMarkup += '</form>';
					}
				}
				commentFormMarkup += '</div>';

				commentForm = $( commentFormMarkup ).css( {
					width: '100%',
					'margin-top': '20px',
					color: '#999',
				} );

				comments = $( '<div></div>' )
					.addClass( 'jp-carousel-comments' )
					.css( {
						width: '100%',
						bottom: '10px',
						'margin-top': '20px',
					} );

				var commentsLoading = $(
					'<div id="jp-carousel-comments-loading"><span>' +
						jetpackCarouselStrings.loading_comments +
						'</span></div>'
				).css( {
					width: '100%',
					bottom: '10px',
					'margin-top': '20px',
				} );

				leftColWrapper
					.append( commentForm )
					.append( comments )
					.append( commentsLoading );
			}

			var fadeaway = $( '<div></div>' ).addClass( 'jp-carousel-fadeaway' );

			info = $( '<div></div>' )
				.addClass( 'jp-carousel-info' )
				.css( {
					top: Math.floor( ( $( window ).height() / 100 ) * proportion ),
					left: screenPadding,
					right: screenPadding,
				} )
				.append( photo_info )
				.append( imageMeta );

			if ( window.innerWidth <= 760 ) {
				photo_info.remove().insertAfter( titleAndDescription );
				info.prepend( leftColWrapper );
			} else {
				info.append( leftColWrapper );
			}

			var targetBottomPos = $( window ).height() - parseInt( info.css( 'top' ), 10 ) + 'px';

			nextButton = $( '<div><span></span></div>' )
				.addClass( 'jp-carousel-next-button' )
				.css( {
					right: '15px',
				} )
				.hide();

			previousButton = $( '<div><span></span></div>' )
				.addClass( 'jp-carousel-previous-button' )
				.css( {
					left: 0,
				} )
				.hide();

			nextButton.add( previousButton ).css( {
				position: 'fixed',
				top: '40px',
				bottom: targetBottomPos,
				width: screenPadding,
			} );

			gallery = $( '<div></div>' )
				.addClass( 'jp-carousel' )
				.css( {
					position: 'absolute',
					top: 0,
					bottom: targetBottomPos,
					left: 0,
					right: 0,
				} );

			close_hint = $( '<div class="jp-carousel-close-hint"><span>&times;</span></div>' ).css( {
				position: 'fixed',
			} );

			container = $( '<div></div>' )
				.addClass( 'jp-carousel-wrap' )
				.addClass( 'jp-carousel-transitions' );
			if ( 'white' === jetpackCarouselStrings.background_color ) {
				container.addClass( 'jp-carousel-light' );
			}

			container.attr( 'itemscope', '' );

			container.attr( 'itemtype', 'https://schema.org/ImageGallery' );

			container
				.css( {
					position: 'fixed',
					top: 0,
					right: 0,
					bottom: 0,
					left: 0,
					'z-index': 2147483647,
					'overflow-x': 'hidden',
					'overflow-y': 'auto',
					direction: 'ltr',
				} )
				.hide()
				.append( overlay )
				.append( gallery )
				.append( fadeaway )
				.append( info )
				.append( nextButton )
				.append( previousButton )
				.append( close_hint )
				.appendTo( $( 'body' ) )
				.click( function( e ) {
					var target = $( e.target ),
						wrap = target.parents( 'div.jp-carousel-wrap' ),
						data = wrap.data( 'carousel-extra' ),
						slide = wrap.find( 'div.selected' ),
						attachment_id = slide.data( 'attachment-id' );
					data = data || [];

					if (
						target.is( gallery ) ||
						target
							.parents()
							.add( target )
							.is( close_hint )
					) {
						container.jp_carousel( 'close' );
// @start-hide-in-jetpack
					} else if ( target.hasClass('jp-carousel-reblog') ) {
						e.preventDefault();
						e.stopPropagation();
						if ( !target.hasClass('reblogged') ) {
							target.jp_carousel('show_reblog_box');
							wpcom.carousel.stat('reblog_show_box');
						}
					} else if ( target.parents('#carousel-reblog-box').length ) {
						if ( target.is('a.cancel') ) {
							e.preventDefault();
							e.stopPropagation();
							target.jp_carousel('hide_reblog_box');
							wpcom.carousel.stat('reblog_cancel');
						} else if ( target.is( 'input[type="submit"]' ) ) {
							e.preventDefault();
							e.stopPropagation();

							var note = $('#carousel-reblog-box textarea').val();
							if ( jetpackCarouselStrings.reblog_add_thoughts === note ) {
								note = '';
							}

							$('#carousel-reblog-submit').val( jetpackCarouselStrings.reblogging );
							$('#carousel-reblog-submit').prop('disabled', true);
							$( '#carousel-reblog-box div.submit span.canceltext' ).show();

							$.post( jetpackCarouselStrings.ajaxurl, {
								'action': 'post_reblog',
								'reblog_source': 'carousel',
								'original_blog_id': $('#carousel-reblog-box input#carousel-reblog-blog-id').val(),
								'original_post_id': $('.jp-carousel div.selected').data('attachment-id'),
								'blog_id': $('#carousel-reblog-box select').val(),
								'blog_url': $('#carousel-reblog-box input#carousel-reblog-blog-url').val(),
								'blog_title': $('#carousel-reblog-box input#carousel-reblog-blog-title').val(),
								'post_url': $('#carousel-reblog-box input#carousel-reblog-post-url').val(),
								'post_title': slide.data( 'caption' ) || $('#carousel-reblog-box input#carousel-reblog-post-title').val(),
								'note': note,
								'_wpnonce': $('#carousel-reblog-box #_wpnonce').val()
							},
							function(/*result*/) {
								$('#carousel-reblog-box').css({ 'height': $('#carousel-reblog-box').height() + 'px' }).slideUp('fast');
								$('a.jp-carousel-reblog').html( jetpackCarouselStrings.reblogged ).removeClass( 'reblog' ).addClass( 'reblogged' );
								$( '#carousel-reblog-box div.submit span.canceltext' ).hide();
								$('#carousel-reblog-submit').val( jetpackCarouselStrings.post_reblog );
								$('div.jp-carousel-info').children().not('#carousel-reblog-box').fadeIn('fast');
								slide.data('reblogged', 1);
								$('div.gallery').find('img[data-attachment-id="' + slide.data('attachment-id') + '"]').data('reblogged', 1);


							}, 'json' );
							wpcom.carousel.stat('reblog_submit');
						}
					} else if ( target.hasClass( 'jp-carousel-image-download' ) ) {
						wpcom.carousel.stat( 'download_original_click' );
// @end-hide-in-jetpack
					} else if ( target.hasClass( 'jp-carousel-commentlink' ) ) {
						e.preventDefault();
						e.stopPropagation();
						$( window ).unbind( 'keydown', keyListener );
						container.animate( { scrollTop: parseInt( info.position()[ 'top' ], 10 ) }, 'fast' );
						$( '#jp-carousel-comment-form-submit-and-info-wrapper' ).slideDown( 'fast' );
						$( '#jp-carousel-comment-form-comment-field' ).focus();
					} else if ( target.hasClass( 'jp-carousel-comment-login' ) ) {
						var url = jetpackCarouselStrings.login_url + '%23jp-carousel-' + attachment_id;

						window.location.href = url;
					} else if ( target.parents( '#jp-carousel-comment-form-container' ).length ) {
						var textarea = $( '#jp-carousel-comment-form-comment-field' )
							.blur( function() {
								$( window ).bind( 'keydown', keyListener );
							} )
							.focus( function() {
								$( window ).unbind( 'keydown', keyListener );
							} );

						var emailField = $( '#jp-carousel-comment-form-email-field' )
							.blur( function() {
								$( window ).bind( 'keydown', keyListener );
							} )
							.focus( function() {
								$( window ).unbind( 'keydown', keyListener );
							} );

						var authorField = $( '#jp-carousel-comment-form-author-field' )
							.blur( function() {
								$( window ).bind( 'keydown', keyListener );
							} )
							.focus( function() {
								$( window ).unbind( 'keydown', keyListener );
							} );

						var urlField = $( '#jp-carousel-comment-form-url-field' )
							.blur( function() {
								$( window ).bind( 'keydown', keyListener );
							} )
							.focus( function() {
								$( window ).unbind( 'keydown', keyListener );
							} );

						if ( textarea && textarea.attr( 'id' ) === target.attr( 'id' ) ) {
							// For first page load
							$( window ).unbind( 'keydown', keyListener );
							$( '#jp-carousel-comment-form-submit-and-info-wrapper' ).slideDown( 'fast' );
						} else if ( target.is( 'input[type="submit"]' ) ) {
							e.preventDefault();
							e.stopPropagation();

							$( '#jp-carousel-comment-form-spinner' ).show();

							var ajaxData = {
								action: 'post_attachment_comment',
								nonce: jetpackCarouselStrings.nonce,
								blog_id: data[ 'blog_id' ],
								id: attachment_id,
								comment: textarea.val(),
							};

							if ( ! ajaxData[ 'comment' ].length ) {
								gallery.jp_carousel( 'postCommentError', {
									field: 'jp-carousel-comment-form-comment-field',
									error: jetpackCarouselStrings.no_comment_text,
								} );
								return;
							}

							if ( 1 !== Number( jetpackCarouselStrings.is_logged_in ) ) {
								ajaxData[ 'email' ] = emailField.val();
								ajaxData[ 'author' ] = authorField.val();
								ajaxData[ 'url' ] = urlField.val();

								if ( 1 === Number( jetpackCarouselStrings.require_name_email ) ) {
									if ( ! ajaxData[ 'email' ].length || ! ajaxData[ 'email' ].match( '@' ) ) {
										gallery.jp_carousel( 'postCommentError', {
											field: 'jp-carousel-comment-form-email-field',
											error: jetpackCarouselStrings.no_comment_email,
										} );
										return;
									} else if ( ! ajaxData[ 'author' ].length ) {
										gallery.jp_carousel( 'postCommentError', {
											field: 'jp-carousel-comment-form-author-field',
											error: jetpackCarouselStrings.no_comment_author,
										} );
										return;
									}
								}
							}

							$.ajax( {
								type: 'POST',
								url: jetpackCarouselStrings.ajaxurl,
								data: ajaxData,
								dataType: 'json',
								success: function( response /*, status, xhr*/ ) {
									if ( 'approved' === response.comment_status ) {
										$( '#jp-carousel-comment-post-results' )
											.slideUp( 'fast' )
											.html(
												'<span class="jp-carousel-comment-post-success">' +
													jetpackCarouselStrings.comment_approved +
													'</span>'
											)
											.slideDown( 'fast' );
									} else if ( 'unapproved' === response.comment_status ) {
										$( '#jp-carousel-comment-post-results' )
											.slideUp( 'fast' )
											.html(
												'<span class="jp-carousel-comment-post-success">' +
													jetpackCarouselStrings.comment_unapproved +
													'</span>'
											)
											.slideDown( 'fast' );
									} else {
										// 'deleted', 'spam', false
										$( '#jp-carousel-comment-post-results' )
											.slideUp( 'fast' )
											.html(
												'<span class="jp-carousel-comment-post-error">' +
													jetpackCarouselStrings.comment_post_error +
													'</span>'
											)
											.slideDown( 'fast' );
									}
									gallery.jp_carousel( 'clearCommentTextAreaValue' );
									gallery.jp_carousel( 'getComments', {
										attachment_id: attachment_id,
										offset: 0,
										clear: true,
									} );
									$( '#jp-carousel-comment-form-button-submit' ).val(
										jetpackCarouselStrings.post_comment
									);
									$( '#jp-carousel-comment-form-spinner' ).hide();
								},
								error: function(/*xhr, status, error*/) {
									// TODO: Add error handling and display here
									gallery.jp_carousel( 'postCommentError', {
										field: 'jp-carousel-comment-form-comment-field',
										error: jetpackCarouselStrings.comment_post_error,
									} );
									return;
								},
							} );
						}
					} else if ( ! target.parents( '.jp-carousel-info' ).length ) {
						container.jp_carousel( 'next' );
					}
				} )
				.bind( 'jp_carousel.afterOpen', function() {
					$( window ).bind( 'keydown', keyListener );
					$( window ).bind( 'resize', resizeListener );
					gallery.opened = true;

					resizeListener();
				} )
				.bind( 'jp_carousel.beforeClose', function() {
					var scroll = $( window ).scrollTop();

					$( window ).unbind( 'keydown', keyListener );
					$( window ).unbind( 'resize', resizeListener );
					$( window ).scrollTop( scroll );
					$( '.jp-carousel-previous-button' ).hide();
					$( '.jp-carousel-next-button' ).hide();
					// Set height to original value
					// Fix some themes where closing carousel brings view back to top
					$( 'html' ).css( 'height', '' );
					gallery.jp_carousel( 'hide_reblog_box' ); // @hide-in-jetpack
				} )
				.bind( 'jp_carousel.afterClose', function() {
					if ( window.location.hash && history.back ) {
						history.back();
					}
					last_known_location_hash = '';
					gallery.opened = false;
				} )
				.on( 'transitionend.jp-carousel ', '.jp-carousel-slide', function( e ) {
					// If the movement transitions take more than twice the allotted time, disable them.
					// There is some wiggle room in the 2x, since some of that time is taken up in
					// JavaScript, setting up the transition and calling the events.
					if ( 'transform' === e.originalEvent.propertyName ) {
						var transitionMultiplier =
							( Date.now() - transitionBegin ) / 1000 / e.originalEvent.elapsedTime;

						container.off( 'transitionend.jp-carousel' );

						if ( transitionMultiplier >= 2 ) {
							$( '.jp-carousel-transitions' ).removeClass( 'jp-carousel-transitions' );
						}
					}
				} );

			$( '.jp-carousel-wrap' ).touchwipe( {
				wipeLeft: function( e ) {
					e.preventDefault();
					gallery.jp_carousel( 'next' );
				},
				wipeRight: function( e ) {
					e.preventDefault();
					gallery.jp_carousel( 'previous' );
				},
				preventDefaultEvents: false,
			} );

			nextButton.add( previousButton ).click( function( e ) {
				e.preventDefault();
				e.stopPropagation();
				if ( nextButton.is( this ) ) {
					gallery.jp_carousel( 'next' );
				} else {
					gallery.jp_carousel( 'previous' );
				}
			} );
		}
	};

	var processSingleImageGallery = function() {
		// process links that contain img tag with attribute data-attachment-id
		$( 'a img[data-attachment-id]' ).each( function() {
			var container = $( this ).parent();

			// skip if image was already added to gallery by shortcode
			if ( container.parent( '.gallery-icon' ).length ) {
				return;
			}

			// skip if the container is not a link
			if ( 'undefined' === typeof $( container ).attr( 'href' ) ) {
				return;
			}

			var valid = false;

			// if link points to 'Media File' (ignoring GET parameters) and flag is set allow it
			if (
				$( container )
					.attr( 'href' )
					.split( '?' )[ 0 ] ===
					$( this )
						.attr( 'data-orig-file' )
						.split( '?' )[ 0 ] &&
				1 === Number( jetpackCarouselStrings.single_image_gallery_media_file )
			) {
				valid = true;
			}

			// if link points to 'Attachment Page' allow it
			if ( $( container ).attr( 'href' ) === $( this ).attr( 'data-permalink' ) ) {
				valid = true;
			}

			// links to 'Custom URL' or 'Media File' when flag not set are not valid
			if ( ! valid ) {
				return;
			}

			// make this node a gallery recognizable by event listener above
			$( container ).addClass( 'single-image-gallery' );
			// blog_id is needed to allow posting comments to correct blog
			$( container ).data( 'carousel-extra', {
				blog_id: Number( jetpackCarouselStrings.blog_id ),
			} );
		} );
	};

	var methods = {
		testForData: function( gallery ) {
			gallery = $( gallery ); // make sure we have it as a jQuery object.
			return ! ( ! gallery.length || ! gallery.data( 'carousel-extra' ) );
		},

		testIfOpened: function() {
			return !! (
				'undefined' !== typeof gallery &&
				'undefined' !== typeof gallery.opened &&
				gallery.opened
			);
		},

		openOrSelectSlide: function( index ) {
			// The `open` method triggers an asynchronous effect, so we will get an
			// error if we try to use `open` then `selectSlideAtIndex` immediately
			// after it. We can only use `selectSlideAtIndex` if the carousel is
			// already open.
			if ( ! $( this ).jp_carousel( 'testIfOpened' ) ) {
				// The `open` method selects the correct slide during the
				// initialization.
				$( this ).jp_carousel( 'open', { start_index: index } );
			} else {
				gallery.jp_carousel( 'selectSlideAtIndex', index );
			}
		},

		open: function( options ) {
			var settings = {
					items_selector:
						'.gallery-item [data-attachment-id], .tiled-gallery-item [data-attachment-id], img[data-attachment-id]',
					start_index: 0,
				},
				data = $( this ).data( 'carousel-extra' );

			if ( ! data ) {
				return; // don't run if the default gallery functions weren't used
			}

			prepareGallery( data );

			if ( gallery.jp_carousel( 'testIfOpened' ) ) {
				return; // don't open if already opened
			}

			// make sure to stop the page from scrolling behind the carousel overlay, so we don't trigger
			// infiniscroll for it when enabled (Reader, theme infiniscroll, etc).
			originalOverflow = $( 'body' ).css( 'overflow' );
			$( 'body' ).css( 'overflow', 'hidden' );
			// prevent html from overflowing on some of the new themes.
			originalHOverflow = $( 'html' ).css( 'overflow' );
			$( 'html' ).css( 'overflow', 'hidden' );
			scrollPos = $( window ).scrollTop();

			container.data( 'carousel-extra', data );
// @start-hide-in-jetpack
			wpcom.carousel.stat( ['open', 'view_image'] );
// @end-hide-in-jetpack

			return this.each( function() {
				// If options exist, lets merge them
				// with our default settings
				var $this = $( this );

				if ( options ) {
					$.extend( settings, options );
				}
				if ( -1 === settings.start_index ) {
					settings.start_index = 0; //-1 returned if can't find index, so start from beginning
				}

				container.trigger( 'jp_carousel.beforeOpen' ).fadeIn( 'fast', function() {
					container.trigger( 'jp_carousel.afterOpen' );
					gallery
						.jp_carousel(
							'initSlides',
							$this.find( settings.items_selector ),
							settings.start_index
						)
						.jp_carousel( 'selectSlideAtIndex', settings.start_index );
				} );
				gallery.html( '' );
			} );
		},

		selectSlideAtIndex: function( index ) {
			var slides = this.jp_carousel( 'slides' ),
				selected = slides.eq( index );

			if ( 0 === selected.length ) {
				selected = slides.eq( 0 );
			}

			gallery.jp_carousel( 'selectSlide', selected, false );
			return this;
		},

		close: function() {
			// make sure to let the page scroll again
			$( 'body' ).css( 'overflow', originalOverflow );
			$( 'html' ).css( 'overflow', originalHOverflow );
			this.jp_carousel( 'clearCommentTextAreaValue' );
			return container.trigger( 'jp_carousel.beforeClose' ).fadeOut( 'fast', function() {
				container.trigger( 'jp_carousel.afterClose' );
				$( window ).scrollTop( scrollPos );
			} );
		},

		next: function() {
			this.jp_carousel( 'previousOrNext', 'nextSlide' );
            gallery.jp_carousel( 'hide_reblog_box' ); // @hide-in-jetpack
		},

		previous: function() {
			this.jp_carousel( 'previousOrNext', 'prevSlide' );
            gallery.jp_carousel( 'hide_reblog_box' ); // @hide-in-jetpack
		},

		previousOrNext: function( slideSelectionMethodName ) {
			if ( ! this.jp_carousel( 'hasMultipleImages' ) ) {
				return false;
			}

			var slide = gallery.jp_carousel( slideSelectionMethodName );

			if ( slide ) {
				container.animate( { scrollTop: 0 }, 'fast' );
				this.jp_carousel( 'clearCommentTextAreaValue' );
				this.jp_carousel( 'selectSlide', slide );
                wpcom.carousel.stat( ['previous', 'view_image'] ); // @hide-in-jetpack
			}
		},

        // @start-hide-in-jetpack
       resetButtons : function(current) {
		   if ( current.data( 'reblogged' ) ) {
                $('.jp-carousel-buttons a.jp-carousel-reblog').addClass( 'reblogged' ).text( jetpackCarouselStrings.reblogged );
		   } else {
                $('.jp-carousel-buttons a.jp-carousel-reblog').removeClass( 'reblogged' ).text( jetpackCarouselStrings.reblog );
		   }
           // Must also take care of reblog/reblogged here
        },
        // @end-hide-in-jetpack
		selectedSlide: function() {
			return this.find( '.selected' );
		},

		setSlidePosition: function( x ) {
			transitionBegin = Date.now();

			return this.css( {
				'-webkit-transform': 'translate3d(' + x + 'px,0,0)',
				'-moz-transform': 'translate3d(' + x + 'px,0,0)',
				'-ms-transform': 'translate(' + x + 'px,0)',
				'-o-transform': 'translate(' + x + 'px,0)',
				transform: 'translate3d(' + x + 'px,0,0)',
			} );
		},

		updateSlidePositions: function( animate ) {
			var current = this.jp_carousel( 'selectedSlide' ),
				galleryWidth = gallery.width(),
				currentWidth = current.width(),
				previous = gallery.jp_carousel( 'prevSlide' ),
				next = gallery.jp_carousel( 'nextSlide' ),
				previousPrevious = previous.prev(),
				nextNext = next.next(),
				left = Math.floor( ( galleryWidth - currentWidth ) * 0.5 );

			current.jp_carousel( 'setSlidePosition', left ).show();

			// minimum width
			gallery.jp_carousel( 'fitInfo', animate );

			// prep the slides
			var direction = lastSelectedSlide.is( current.prevAll() ) ? 1 : -1;

			// Since we preload the `previousPrevious` and `nextNext` slides, we need
			// to make sure they technically visible in the DOM, but invisible to the
			// user. To hide them from the user, we position them outside the edges
			// of the window.
			//
			// This section of code only applies when there are more than three
			// slides. Otherwise, the `previousPrevious` and `nextNext` slides will
			// overlap with the `previous` and `next` slides which must be visible
			// regardless.
			if ( 1 === direction ) {
				if ( ! nextNext.is( previous ) ) {
					nextNext.jp_carousel( 'setSlidePosition', galleryWidth + next.width() ).show();
				}

				if ( ! previousPrevious.is( next ) ) {
					previousPrevious
						.jp_carousel( 'setSlidePosition', -previousPrevious.width() - currentWidth )
						.show();
				}
			} else {
				if ( ! nextNext.is( previous ) ) {
					nextNext.jp_carousel( 'setSlidePosition', galleryWidth + currentWidth ).show();
				}
			}

			previous
				.jp_carousel( 'setSlidePosition', Math.floor( -previous.width() + screenPadding * 0.75 ) )
				.show();
			next
				.jp_carousel( 'setSlidePosition', Math.ceil( galleryWidth - screenPadding * 0.75 ) )
				.show();
		},

		selectSlide: function( slide, animate ) {
			lastSelectedSlide = this.find( '.selected' ).removeClass( 'selected' );

			var slides = gallery.jp_carousel( 'slides' ).css( { position: 'fixed' } ),
				current = $( slide )
					.addClass( 'selected' )
					.css( { position: 'relative' } ),
				attachmentId = current.data( 'attachment-id' ),
				previous = gallery.jp_carousel( 'prevSlide' ),
				next = gallery.jp_carousel( 'nextSlide' ),
				previousPrevious = previous.prev(),
				nextNext = next.next(),
				animated,
				captionHtml;

			// center the main image
			gallery.jp_carousel( 'loadFullImage', current );

			caption.hide();

			if ( next.length === 0 && slides.length <= 2 ) {
				$( '.jp-carousel-next-button' ).hide();
			} else {
				$( '.jp-carousel-next-button' ).show();
			}

			if ( previous.length === 0 && slides.length <= 2 ) {
				$( '.jp-carousel-previous-button' ).hide();
			} else {
				$( '.jp-carousel-previous-button' ).show();
			}

			animated = current
				.add( previous )
				.add( previousPrevious )
				.add( next )
				.add( nextNext )
				.jp_carousel( 'loadSlide' );

			// slide the whole view to the x we want
			slides.not( animated ).hide();

			gallery.jp_carousel( 'updateSlidePositions', animate );
			gallery.jp_carousel( 'resetButtons', current ); // @hide-in-jetpack

			container.trigger( 'jp_carousel.selectSlide', [ current ] );

			gallery.jp_carousel( 'getTitleDesc', {
				title: current.data( 'title' ),
				desc: current.data( 'desc' ),
			} );

			var imageMeta = current.data( 'image-meta' );
			gallery.jp_carousel( 'updateExif', imageMeta );
			gallery.jp_carousel( 'updateFullSizeLink', current );
			gallery.jp_carousel( 'updateMap', imageMeta );

			if ( 1 === +jetpackCarouselStrings.display_comments ) {
				gallery.jp_carousel( 'testCommentsOpened', current.data( 'comments-opened' ) );
				gallery.jp_carousel( 'getComments', {
					attachment_id: attachmentId,
					offset: 0,
					clear: true,
				} );
				$( '#jp-carousel-comment-post-results' ).slideUp();
			}

			// $('<div />').text(sometext).html() is a trick to go to HTML to plain
			// text (including HTML entities decode, etc)
			if ( current.data( 'caption' ) ) {
				captionHtml = $( '<div />' )
					.text( current.data( 'caption' ) )
					.html();

				if (
					captionHtml ===
					$( '<div />' )
						.text( current.data( 'title' ) )
						.html()
				) {
					$( '.jp-carousel-titleanddesc-title' )
						.fadeOut( 'fast' )
						.empty();
				}

				if (
					captionHtml ===
					$( '<div />' )
						.text( current.data( 'desc' ) )
						.html()
				) {
					$( '.jp-carousel-titleanddesc-desc' )
						.fadeOut( 'fast' )
						.empty();
				}

				caption.html( current.data( 'caption' ) ).fadeIn( 'slow' );
			} else {
				caption.fadeOut( 'fast' ).empty();
			}

			// Record pageview in WP Stats, for each new image loaded full-screen.
			if ( jetpackCarouselStrings.stats ) {
				new Image().src =
					document.location.protocol +
					'//pixel.wp.com/g.gif?' +
					jetpackCarouselStrings.stats +
					'&post=' +
					encodeURIComponent( attachmentId ) +
					'&rand=' +
					Math.random();
			}

			wpcom.carousel.pageview( attachmentId ); // @hide-in-jetpack
			// Load the images for the next and previous slides.
			$( next )
				.add( previous )
				.each( function() {
					gallery.jp_carousel( 'loadFullImage', $( this ) );
				} );

			window.location.hash = last_known_location_hash = '#jp-carousel-' + attachmentId;
		},

		slides: function() {
			return this.find( '.jp-carousel-slide' );
		},

		slideDimensions: function() {
			return {
				width: $( window ).width() - screenPadding * 2,
				height: Math.floor( ( $( window ).height() / 100 ) * proportion - 60 ),
			};
		},

		loadSlide: function() {
			return this.each( function() {
				var slide = $( this );
				slide.find( 'img' ).one( 'load', function() {
					// set the width/height of the image if it's too big
					slide.jp_carousel( 'fitSlide', false );
				} );
			} );
		},

		bestFit: function() {
			var max = gallery.jp_carousel( 'slideDimensions' ),
				orig = this.jp_carousel( 'originalDimensions' ),
				orig_ratio = orig.width / orig.height,
				w_ratio = 1,
				h_ratio = 1,
				width,
				height;

			if ( orig.width > max.width ) {
				w_ratio = max.width / orig.width;
			}
			if ( orig.height > max.height ) {
				h_ratio = max.height / orig.height;
			}

			if ( w_ratio < h_ratio ) {
				width = max.width;
				height = Math.floor( width / orig_ratio );
			} else if ( h_ratio < w_ratio ) {
				height = max.height;
				width = Math.floor( height * orig_ratio );
			} else {
				width = orig.width;
				height = orig.height;
			}

			return {
				width: width,
				height: height,
			};
		},

		fitInfo: function(/*animated*/) {
			var current = this.jp_carousel( 'selectedSlide' ),
				size = current.jp_carousel( 'bestFit' );

			photo_info.css( {
				left: Math.floor( ( info.width() - size.width ) * 0.5 ),
				width: Math.floor( size.width ),
			} );

			return this;
		},

		fitMeta: function( animated ) {
			var newInfoTop = {
				top: Math.floor( ( $( window ).height() / 100 ) * proportion + 5 ) + 'px',
			};
			var newLeftWidth = { width: info.width() - ( imageMeta.width() + 80 ) + 'px' };

			if ( animated ) {
				info.animate( newInfoTop );
				leftColWrapper.animate( newLeftWidth );
			} else {
				info.animate( newInfoTop );
				leftColWrapper.css( newLeftWidth );
			}
		},

		fitSlide: function(/*animated*/) {
			return this.each( function() {
				var $this = $( this ),
					dimensions = $this.jp_carousel( 'bestFit' ),
					method = 'css',
					max = gallery.jp_carousel( 'slideDimensions' );

				dimensions.left = 0;
				dimensions.top = Math.floor( ( max.height - dimensions.height ) * 0.5 ) + 40;
				$this[ method ]( dimensions );
			} );
		},

		texturize: function( text ) {
			text = '' + text; // make sure we get a string. Title "1" came in as int 1, for example, which did not support .replace().
			text = text
				.replace( /'/g, '&#8217;' )
				.replace( /&#039;/g, '&#8217;' )
				.replace( /[\u2019]/g, '&#8217;' );
			text = text
				.replace( /"/g, '&#8221;' )
				.replace( /&#034;/g, '&#8221;' )
				.replace( /&quot;/g, '&#8221;' )
				.replace( /[\u201D]/g, '&#8221;' );
			text = text.replace( /([\w]+)=&#[\d]+;(.+?)&#[\d]+;/g, '$1="$2"' ); // untexturize allowed HTML tags params double-quotes
			return $.trim( text );
		},

		initSlides: function( items, start_index ) {
			if ( items.length < 2 ) {
				$( '.jp-carousel-next-button, .jp-carousel-previous-button' ).hide();
			} else {
				$( '.jp-carousel-next-button, .jp-carousel-previous-button' ).show();
			}

			// Calculate the new src.
			items.each( function(/*i*/) {
				var src_item = $( this ),
					orig_size = src_item.data( 'orig-size' ) || '',
					max = gallery.jp_carousel( 'slideDimensions' ),
					parts = orig_size.split( ',' ),
					medium_file = src_item.data( 'medium-file' ) || '',
					large_file = src_item.data( 'large-file' ) || '',
					src;
				orig_size = { width: parseInt( parts[ 0 ], 10 ), height: parseInt( parts[ 1 ], 10 ) };

// @start-hide-in-jetpack
				 if ( 'undefined' !== typeof wpcom ) {
					src = src_item.attr('src') || src_item.attr('original') || src_item.data('original') || src_item.data('lazy-src');
					if (src.indexOf('imgpress') !== -1) {
						src = src_item.data('orig-file');
					}
					// Square/Circle galleries use a resize param that needs to be removed.
					src = wpcom.carousel.removeResizeFromImageURL( src );
					src = wpcom.carousel.addWidthToImageURL( src, wpcom.carousel.findFirstLargeEnoughWidth( orig_size.width, orig_size.height, max.width, max.height ) );
				} else {

// @end-hide-in-jetpack
				src = src_item.data( 'orig-file' );

				src = gallery.jp_carousel( 'selectBestImageSize', {
					orig_file: src,
					orig_width: orig_size.width,
					orig_height: orig_size.height,
					max_width: max.width,
					max_height: max.height,
					medium_file: medium_file,
					large_file: large_file,
				} );
// @start-hide-in-jetpack
				 } // end else of if ( 'undefined' != typeof wpcom )
// @end-hide-in-jetpack

				// Set the final src
				$( this ).data( 'gallery-src', src );
			} );

			// If the start_index is not 0 then preload the clicked image first.
			if ( 0 !== start_index ) {
				$( '<img/>' )[ 0 ].src = $( items[ start_index ] ).data( 'gallery-src' );
			}

			var useInPageThumbnails =
				items.first().closest( '.tiled-gallery.type-rectangular' ).length > 0;

			// create the 'slide'
			items.each( function( i ) {
				var src_item = $( this ),
					reblogged       = src_item.data( 'reblogged' ) || 0, // @hide-in-jetpack
					attachment_id = src_item.data( 'attachment-id' ) || 0,
					comments_opened = src_item.data( 'comments-opened' ) || 0,
					image_meta = src_item.data( 'image-meta' ) || {},
					orig_size = src_item.data( 'orig-size' ) || '',
					thumb_size = { width: src_item[ 0 ].naturalWidth, height: src_item[ 0 ].naturalHeight },
					title = src_item.data( 'image-title' ) || '',
					description = src_item.data( 'image-description' ) || '',
					caption =
						src_item
							.parents( '.gallery-item' )
							.find( '.gallery-caption' )
							.html() || '',
					src = src_item.data( 'gallery-src' ) || '',
					medium_file = src_item.data( 'medium-file' ) || '',
					large_file = src_item.data( 'large-file' ) || '',
					orig_file = src_item.data( 'orig-file' ) || '';

				var tiledCaption = src_item
					.parents( 'div.tiled-gallery-item' )
					.find( 'div.tiled-gallery-caption' )
					.html();
				if ( tiledCaption ) {
					caption = tiledCaption;
				}

				if ( attachment_id && orig_size.length ) {
					title = gallery.jp_carousel( 'texturize', title );
					description = gallery.jp_carousel( 'texturize', description );
					caption = gallery.jp_carousel( 'texturize', caption );

					// Initially, the image is a 1x1 transparent gif.  The preview is shown as a background image on the slide itself.
					var image = $( '<img/>' )
						.attr(
							'src',
							'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
						)
						.css( 'width', '100%' )
						.css( 'height', '100%' );

					var slide = $(
						'<div class="jp-carousel-slide" itemprop="associatedMedia" itemscope itemtype="https://schema.org/ImageObject"></div>'
					)
						.hide()
						.css( {
							//'position' : 'fixed',
							left: i < start_index ? -1000 : gallery.width(),
						} )
						.append( image )
						.appendTo( gallery )
						.data( 'src', src )
						.data( 'title', title )
						.data( 'desc', description )
						.data( 'caption', caption )
						.data( 'attachment-id', attachment_id )
						.data( 'permalink', src_item.parents( 'a' ).attr( 'href' ) )
						.data( 'orig-size', orig_size )
						.data( 'comments-opened', comments_opened )
						.data( 'image-meta', image_meta )
						.data( 'medium-file', medium_file )
						.data( 'large-file', large_file )
						.data( 'orig-file', orig_file )
						.data( 'reblogged', reblogged ) // @hide-in-jetpack
						.data( 'thumb-size', thumb_size );
					if ( useInPageThumbnails ) {
						// Use the image already loaded in the gallery as a preview.
						slide.data( 'preview-image', src_item.attr( 'src' ) ).css( {
							'background-image': 'url("' + src_item.attr( 'src' ) + '")',
							'background-size': '100% 100%',
							'background-position': 'center center',
						} );
					}

					slide.jp_carousel( 'fitSlide', false );
				}
			} );
			return this;
		},

		selectBestImageSize: function( args ) {
			if ( 'object' !== typeof args ) {
				args = {};
			}

			if ( 'undefined' === typeof args.orig_file ) {
				return '';
			}

			if ( 'undefined' === typeof args.orig_width || 'undefined' === typeof args.max_width ) {
				return args.orig_file;
			}

			if ( 'undefined' === typeof args.medium_file || 'undefined' === typeof args.large_file ) {
				return args.orig_file;
			}

			// Check if the image is being served by Photon (using a regular expression on the hostname).

			var imageLinkParser = document.createElement( 'a' );
			imageLinkParser.href = args.large_file;

			var isPhotonUrl = /^i[0-2].wp.com$/i.test( imageLinkParser.hostname );

			var medium_size_parts = gallery.jp_carousel(
				'getImageSizeParts',
				args.medium_file,
				args.orig_width,
				isPhotonUrl
			);
			var large_size_parts = gallery.jp_carousel(
				'getImageSizeParts',
				args.large_file,
				args.orig_width,
				isPhotonUrl
			);

			var large_width = parseInt( large_size_parts[ 0 ], 10 ),
				large_height = parseInt( large_size_parts[ 1 ], 10 ),
				medium_width = parseInt( medium_size_parts[ 0 ], 10 ),
				medium_height = parseInt( medium_size_parts[ 1 ], 10 );

			// Assign max width and height.
			args.orig_max_width = args.max_width;
			args.orig_max_height = args.max_height;

			// Give devices with a higher devicePixelRatio higher-res images (Retina display = 2, Android phones = 1.5, etc)
			if ( 'undefined' !== typeof window.devicePixelRatio && window.devicePixelRatio > 1 ) {
				args.max_width = args.max_width * window.devicePixelRatio;
				args.max_height = args.max_height * window.devicePixelRatio;
			}

			if ( large_width >= args.max_width || large_height >= args.max_height ) {
				return args.large_file;
			}

			if ( medium_width >= args.max_width || medium_height >= args.max_height ) {
				return args.medium_file;
			}

			if ( isPhotonUrl ) {
				// args.orig_file doesn't point to a Photon url, so in this case we use args.large_file
				// to return the photon url of the original image.
				var largeFileIndex = args.large_file.lastIndexOf( '?' );
				var origPhotonUrl = args.large_file;
				if ( -1 !== largeFileIndex ) {
					origPhotonUrl = args.large_file.substring( 0, largeFileIndex );
					// If we have a really large image load a smaller version
					// that is closer to the viewable size
					if ( args.orig_width > args.max_width || args.orig_height > args.max_height ) {
						origPhotonUrl += '?fit=' + args.orig_max_width + '%2C' + args.orig_max_height;
					}
				}
				return origPhotonUrl;
			}

			return args.orig_file;
		},

		getImageSizeParts: function( file, orig_width, isPhotonUrl ) {
			var size = isPhotonUrl
				? file.replace( /.*=([\d]+%2C[\d]+).*$/, '$1' )
				: file.replace( /.*-([\d]+x[\d]+)\..+$/, '$1' );

			var size_parts =
				size !== file
					? isPhotonUrl
						? size.split( '%2C' )
						: size.split( 'x' )
					: [ orig_width, 0 ];

			// If one of the dimensions is set to 9999, then the actual value of that dimension can't be retrieved from the url.
			// In that case, we set the value to 0.
			if ( '9999' === size_parts[ 0 ] ) {
				size_parts[ 0 ] = '0';
			}

			if ( '9999' === size_parts[ 1 ] ) {
				size_parts[ 1 ] = '0';
			}

			return size_parts;
		},

// @start-hide-in-jetpack
        show_reblog_box: function() {
            $('#carousel-reblog-box textarea').val(jetpackCarouselStrings.reblog_add_thoughts);
            //t.addClass('selected');
            $('#carousel-reblog-box p.response').remove();
            $('#carousel-reblog-box div.submit, #carousel-reblog-box div.submit span.canceltext').show();
            $('#carousel-reblog-box div.submit input[type=submit]').prop('disabled', false);

            var current = $('.jp-carousel div.selected');
            $('#carousel-reblog-box input#carousel-reblog-post-url').val( current.data('permalink') );
            $('#carousel-reblog-box input#carousel-reblog-post-title').val( $('div.jp-carousel-info').children('h2').text() );

            $('div.jp-carousel-info').append( $('#carousel-reblog-box') ).children().fadeOut('fast');
            $('#carousel-reblog-box').fadeIn('fast');
        },

        hide_reblog_box: function () {
            $( 'div.jp-carousel-info' ).children().not( '#carousel-reblog-box' ).fadeIn( 'fast' );
            $( '#carousel-reblog-box' ).fadeOut( 'fast' );
        },
// @end-hide-in-jetpack
		originalDimensions: function() {
			var splitted = $( this )
				.data( 'orig-size' )
				.split( ',' );
			return { width: parseInt( splitted[ 0 ], 10 ), height: parseInt( splitted[ 1 ], 10 ) };
		},

		format: function( args ) {
			if ( 'object' !== typeof args ) {
				args = {};
			}
			if ( ! args.text || 'undefined' === typeof args.text ) {
				return;
			}
			if ( ! args.replacements || 'undefined' === typeof args.replacements ) {
				return args.text;
			}
			return args.text.replace( /{(\d+)}/g, function( match, number ) {
				return typeof args.replacements[ number ] !== 'undefined'
					? args.replacements[ number ]
					: match;
			} );
		},

		/**
		 * Returns a number in a fraction format that represents the shutter speed.
		 * @param Number speed
		 * @return String
		 */
		shutterSpeed: function( speed ) {
			var denominator;

			// round to one decimal if value > 1s by multiplying it by 10, rounding, then dividing by 10 again
			if ( speed >= 1 ) {
				return Math.round( speed * 10 ) / 10 + 's';
			}

			// If the speed is less than one, we find the denominator by inverting
			// the number. Since cameras usually use rational numbers as shutter
			// speeds, we should get a nice round number. Or close to one in cases
			// like 1/30. So we round it.
			denominator = Math.round( 1 / speed );

			return '1/' + denominator + 's';
		},

		parseTitleDesc: function( value ) {
			if ( ! value.match( ' ' ) && value.match( '_' ) ) {
				return '';
			}

			return value;
		},

		getTitleDesc: function( data ) {
			var title = '',
				desc = '',
				markup = '',
				target;

			target = $( 'div.jp-carousel-titleanddesc', 'div.jp-carousel-wrap' );
			target.hide();

			title = gallery.jp_carousel( 'parseTitleDesc', data.title ) || '';
			desc = gallery.jp_carousel( 'parseTitleDesc', data.desc ) || '';

			if ( title.length || desc.length ) {
				// Convert from HTML to plain text (including HTML entities decode, etc)
				if (
					$( '<div />' )
						.html( title )
						.text() ===
					$( '<div />' )
						.html( desc )
						.text()
				) {
					title = '';
				}

				markup = title.length
					? '<div class="jp-carousel-titleanddesc-title">' + title + '</div>'
					: '';
				markup += desc.length
					? '<div class="jp-carousel-titleanddesc-desc">' + desc + '</div>'
					: '';

				target.html( markup ).fadeIn( 'slow' );
			}

			$( 'div#jp-carousel-comment-form-container' ).css( 'margin-top', '20px' );
			$( 'div#jp-carousel-comments-loading' ).css( 'margin-top', '20px' );
		},

		// updateExif updates the contents of the exif UL (.jp-carousel-image-exif)
		updateExif: function( meta ) {
			if ( ! meta || 1 !== Number( jetpackCarouselStrings.display_exif ) ) {
				return false;
			}

			var $ul = $( "<ul class='jp-carousel-image-exif'></ul>" );

			$.each( meta, function( key, val ) {
				if (
					0 === parseFloat( val ) ||
					! val.length ||
					-1 === $.inArray( key, $.makeArray( jetpackCarouselStrings.meta_data ) )
				) {
					return;
				}

				switch ( key ) {
					case 'focal_length':
						val = val + 'mm';
						break;
					case 'shutter_speed':
						val = gallery.jp_carousel( 'shutterSpeed', val );
						break;
					case 'aperture':
						val = 'f/' + val;
						break;
				}

				$ul.append( '<li><h5>' + jetpackCarouselStrings[ key ] + '</h5>' + val + '</li>' );
			} );

			// Update (replace) the content of the ul
			$( 'div.jp-carousel-image-meta ul.jp-carousel-image-exif' ).replaceWith( $ul );
		},

		// updateFullSizeLink updates the contents of the jp-carousel-image-download link
		updateFullSizeLink: function( current ) {
			if ( ! current || ! current.data ) {
				return false;
			}
			var original,
				origSize = current.data( 'orig-size' ).split( ',' ),
				imageLinkParser = document.createElement( 'a' );

			imageLinkParser.href = current.data( 'src' ).replace( /\?.+$/, '' );

			// Is this a Photon URL?
			if ( imageLinkParser.hostname.match( /^i[\d]{1}.wp.com$/i ) !== null ) {
				original = imageLinkParser.href;
			} else {
				original = current.data( 'orig-file' ).replace( /\?.+$/, '' );
			}

			var permalink = $(
				'<a>' +
					gallery.jp_carousel( 'format', {
						text: jetpackCarouselStrings.download_original,
						replacements: origSize,
					} ) +
					'</a>'
			)
				.addClass( 'jp-carousel-image-download' )
				.attr( 'href', original )
				.attr( 'target', '_blank' );

			// Update (replace) the content of the anchor
			$( 'div.jp-carousel-image-meta a.jp-carousel-image-download' ).replaceWith( permalink );
		},

		updateMap: function( meta ) {
			if (
				! meta.latitude ||
				! meta.longitude ||
				1 !== Number( jetpackCarouselStrings.display_geo )
			) {
				return;
			}

			var latitude = meta.latitude,
				longitude = meta.longitude,
				$metabox = $( 'div.jp-carousel-image-meta', 'div.jp-carousel-wrap' ),
				$mapbox = $( '<div></div>' ),
				style =
					'&scale=2&style=feature:all|element:all|invert_lightness:true|hue:0x0077FF|saturation:-50|lightness:-5|gamma:0.91';

			$mapbox
				.addClass( 'jp-carousel-image-map' )
				.html(
					'<img width="154" height="154" src="https://maps.googleapis.com/maps/api/staticmap?\
							center=' +
						latitude +
						',' +
						longitude +
						'&\
							zoom=8&\
							size=154x154&\
							sensor=false&\
							markers=size:medium%7Ccolor:blue%7C' +
						latitude +
						',' +
						longitude +
						style +
						'" class="gmap-main" />\
							\
						<div class="gmap-topright"><div class="imgclip"><img width="175" height="154" src="https://maps.googleapis.com/maps/api/staticmap?\
							center=' +
						latitude +
						',' +
						longitude +
						'&\
							zoom=3&\
							size=175x154&\
							sensor=false&\
							markers=size:small%7Ccolor:blue%7C' +
						latitude +
						',' +
						longitude +
						style +
						'"c /></div></div>\
							\
						'
				)
				.prependTo( $metabox );
		},

		testCommentsOpened: function( opened ) {
			if ( 1 === parseInt( opened, 10 ) ) {
// @start-hide-in-jetpack
				if ( 1 === Number( jetpackCarouselStrings.is_logged_in ) ) {
					$('.jp-carousel-commentlink').fadeIn('fast');
				} else {
// @end-hide-in-jetpack
				$( '.jp-carousel-buttons' ).fadeIn( 'fast' );
// @start-hide-in-jetpack
				}
// @end-hide-in-jetpack
				commentForm.fadeIn( 'fast' );
			} else {
// @start-hide-in-jetpack
				if ( 1 === Number( jetpackCarouselStrings.is_logged_in ) ) {
					$('.jp-carousel-commentlink').fadeOut('fast');
				} else {
// @end-hide-in-jetpack
				$( '.jp-carousel-buttons' ).fadeOut( 'fast' );
// @start-hide-in-jetpack
				}
// @end-hide-in-jetpack
				commentForm.fadeOut( 'fast' );
			}
		},

		getComments: function( args ) {
			clearInterval( commentInterval );

			if ( 'object' !== typeof args ) {
				return;
			}

			if ( 'undefined' === typeof args.attachment_id || ! args.attachment_id ) {
				return;
			}

			if ( ! args.offset || 'undefined' === typeof args.offset || args.offset < 1 ) {
				args.offset = 0;
			}

			var comments = $( '.jp-carousel-comments' ),
				commentsLoading = $( '#jp-carousel-comments-loading' ).show();

			if ( args.clear ) {
				comments.hide().empty();
			}

			$.ajax( {
				type: 'GET',
				url: jetpackCarouselStrings.ajaxurl,
				dataType: 'json',
				data: {
					action: 'get_attachment_comments',
					nonce: jetpackCarouselStrings.nonce,
					id: args.attachment_id,
					offset: args.offset,
				},
				success: function( data /*, status, xhr*/ ) {
					if ( args.clear ) {
						comments.fadeOut( 'fast' ).empty();
					}

					$( data ).each( function() {
						var comment = $( '<div></div>' )
							.addClass( 'jp-carousel-comment' )
							.attr( 'id', 'jp-carousel-comment-' + this[ 'id' ] )
							.html(
								'<div class="comment-gravatar">' +
									this[ 'gravatar_markup' ] +
									'</div>' +
									'<div class="comment-author">' +
									this[ 'author_markup' ] +
									'</div>' +
									'<div class="comment-date">' +
									this[ 'date_gmt' ] +
									'</div>' +
									'<div class="comment-content">' +
									this[ 'content' ] +
									'</div>'
							);
						comments.append( comment );

						// Set the interval to check for a new page of comments.
						clearInterval( commentInterval );
						commentInterval = setInterval( function() {
							if (
								$( '.jp-carousel-overlay' ).height() - 150 <
								$( '.jp-carousel-wrap' ).scrollTop() + $( window ).height()
							) {
								gallery.jp_carousel( 'getComments', {
									attachment_id: args.attachment_id,
									offset: args.offset + 10,
									clear: false,
								} );
								clearInterval( commentInterval );
							}
						}, 300 );
					} );

					// Verify (late) that the user didn't repeatldy click the arrows really fast, in which case the requested
					// attachment id might no longer match the current attachment id by the time we get the data back or a now
					// registered infiniscroll event kicks in, so we don't ever display comments for the wrong image by mistake.
					var current = $( '.jp-carousel div.selected' );
					if ( current && current.data && current.data( 'attachment-id' ) != args.attachment_id ) {
						comments.fadeOut( 'fast' );
						comments.empty();
						return;
					}

					// Increase the height of the background, semi-transparent overlay to match the new length of the comments list.
					$( '.jp-carousel-overlay' ).height(
						$( window ).height() +
							titleAndDescription.height() +
							commentForm.height() +
							( comments.height() > 0 ? comments.height() : imageMeta.height() ) +
							200
					);

					comments.show();
					commentsLoading.hide();
				},
				error: function( xhr, status, error ) {
					// TODO: proper error handling
					console.log( 'Comment get fail...', xhr, status, error );
					comments.fadeIn( 'fast' );
					commentsLoading.fadeOut( 'fast' );
				},
			} );
		},

		postCommentError: function( args ) {
			if ( 'object' !== typeof args ) {
				args = {};
			}
			if (
				! args.field ||
				'undefined' === typeof args.field ||
				! args.error ||
				'undefined' === typeof args.error
			) {
				return;
			}
			$( '#jp-carousel-comment-post-results' )
				.slideUp( 'fast' )
				.html( '<span class="jp-carousel-comment-post-error">' + args.error + '</span>' )
				.slideDown( 'fast' );
			$( '#jp-carousel-comment-form-spinner' ).hide();
		},

		setCommentIframeSrc: function( attachment_id ) {
			var iframe = $( '#jp-carousel-comment-iframe' );
			// Set the proper irame src for the current attachment id
			if ( iframe && iframe.length ) {
				iframe.attr( 'src', iframe.attr( 'src' ).replace( /(postid=)\d+/, '$1' + attachment_id ) );
				iframe.attr(
					'src',
					iframe.attr( 'src' ).replace( /(%23.+)?$/, '%23jp-carousel-' + attachment_id )
				);
			}
		},

		clearCommentTextAreaValue: function() {
			var commentTextArea = $( '#jp-carousel-comment-form-comment-field' );
			if ( commentTextArea ) {
				commentTextArea.val( '' );
			}
		},

		nextSlide: function() {
			var slides = this.jp_carousel( 'slides' );
			var selected = this.jp_carousel( 'selectedSlide' );

			if ( selected.length === 0 || ( slides.length > 2 && selected.is( slides.last() ) ) ) {
				return slides.first();
			}

			return selected.next();
		},

		prevSlide: function() {
			var slides = this.jp_carousel( 'slides' );
			var selected = this.jp_carousel( 'selectedSlide' );

			if ( selected.length === 0 || ( slides.length > 2 && selected.is( slides.first() ) ) ) {
				return slides.last();
			}

			return selected.prev();
		},

		loadFullImage: function( slide ) {
			var image = slide.find( 'img:first' );

			if ( ! image.data( 'loaded' ) ) {
				// If the width of the slide is smaller than the width of the "thumbnail" we're already using,
				// don't load the full image.

				image.on( 'load.jetpack', function() {
					image.off( 'load.jetpack' );
					$( this )
						.closest( '.jp-carousel-slide' )
						.css( 'background-image', '' );
				} );

				if (
					! slide.data( 'preview-image' ) ||
					( slide.data( 'thumb-size' ) && slide.width() > slide.data( 'thumb-size' ).width )
				) {
					image
						.attr( 'src', image.closest( '.jp-carousel-slide' ).data( 'src' ) )
						.attr( 'itemprop', 'image' );
				} else {
					image.attr( 'src', slide.data( 'preview-image' ) ).attr( 'itemprop', 'image' );
				}

				image.data( 'loaded', 1 );
			}
		},

		hasMultipleImages: function() {
			return gallery.jp_carousel( 'slides' ).length > 1;
		},
	};

	$.fn.jp_carousel = function( method ) {
		// ask for the HTML of the gallery
		// Method calling logic
		if ( methods[ method ] ) {
			return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ) );
		} else if ( typeof method === 'object' || ! method ) {
			return methods.open.apply( this, arguments );
		} else {
			$.error( 'Method ' + method + ' does not exist on jQuery.jp_carousel' );
		}
	};

	// register the event listener for starting the gallery
	$( document.body ).on(
		'click.jp-carousel',
		'div.gallery, div.tiled-gallery, ul.wp-block-gallery, ul.blocks-gallery-grid, div.wp-block-jetpack-tiled-gallery, a.single-image-gallery',
		function( e ) {
			if ( ! $( this ).jp_carousel( 'testForData', e.currentTarget ) ) {
				return;
			}

			// Do not open the modal if we are looking at a gallery caption from before WP5, which may contain a link.
			if (
				$( e.target )
					.parent()
					.hasClass( 'gallery-caption' )
			) {
				return;
			}

			// Do not open the modal if we are looking at a caption of a gallery block, which may contain a link.
			if (
				$( e.target )
					.parent()
					.is( 'figcaption' )
			) {
				return;
			}

			// Set height to auto
			// Fix some themes where closing carousel brings view back to top
			$( 'html' ).css( 'height', 'auto' );

			e.preventDefault();

			// Stopping propagation in case there are parent elements
			// with .gallery or .tiled-gallery class
			e.stopPropagation();
			$( this ).jp_carousel( 'open', {
				start_index: $( this )
					.find( '.gallery-item, .tiled-gallery-item, .blocks-gallery-item, .tiled-gallery__item' )
					.index(
						$( e.target ).parents(
							'.gallery-item, .tiled-gallery-item, .blocks-gallery-item, .tiled-gallery__item'
						)
					),
			} );
		}
	);

	// handle lightbox (single image gallery) for images linking to 'Attachment Page'
	if ( 1 === Number( jetpackCarouselStrings.single_image_gallery ) ) {
		processSingleImageGallery();
		$( document.body ).on( 'post-load', function() {
			processSingleImageGallery();
		} );
	}

	// Makes carousel work on page load and when back button leads to same URL with carousel hash (ie: no actual document.ready trigger)
	$( window ).on( 'hashchange.jp-carousel', function() {
		var hashRegExp = /jp-carousel-(\d+)/,
			matches,
			attachmentId,
			galleries,
			selectedThumbnail;

		if ( ! window.location.hash || ! hashRegExp.test( window.location.hash ) ) {
			if ( gallery && gallery.opened ) {
				container.jp_carousel( 'close' );
			}

			return;
		}

		if ( window.location.hash === last_known_location_hash && gallery.opened ) {
			return;
		}

		if ( window.location.hash && gallery && ! gallery.opened && history.back ) {
			history.back();
			return;
		}

		last_known_location_hash = window.location.hash;
		matches = window.location.hash.match( hashRegExp );
		attachmentId = parseInt( matches[ 1 ], 10 );
		galleries = $(
			'div.gallery, div.tiled-gallery, a.single-image-gallery, ul.wp-block-gallery, div.wp-block-jetpack-tiled-gallery'
		);

		// Find the first thumbnail that matches the attachment ID in the location
		// hash, then open the gallery that contains it.
		galleries.each( function( _, galleryEl ) {
			$( galleryEl )
				.find( 'img' )
				.each( function( imageIndex, imageEl ) {
					if ( $( imageEl ).data( 'attachment-id' ) === parseInt( attachmentId, 10 ) ) {
						selectedThumbnail = { index: imageIndex, gallery: galleryEl };
						return false;
					}
				} );

			if ( selectedThumbnail ) {
				$( selectedThumbnail.gallery ).jp_carousel( 'openOrSelectSlide', selectedThumbnail.index );
				return false;
			}
		} );
	} );

	if ( window.location.hash ) {
		$( window ).trigger( 'hashchange' );
	}
} );

/**
 * jQuery Plugin to obtain touch gestures from iPhone, iPod Touch and iPad, should also work with Android mobile phones (not tested yet!)
 * Common usage: wipe images (left and right to show the previous or next image)
 *
 * @author Andreas Waltl, netCU Internetagentur (http://www.netcu.de)
 * Version 1.1.1, modified to pass the touchmove event to the callbacks.
 */
( function( $ ) {
	$.fn.touchwipe = function( settings ) {
		var config = {
			min_move_x: 20,
			min_move_y: 20,
			wipeLeft: function(/*e*/) {},
			wipeRight: function(/*e*/) {},
			wipeUp: function(/*e*/) {},
			wipeDown: function(/*e*/) {},
			preventDefaultEvents: true,
		};

		if ( settings ) {
			$.extend( config, settings );
		}

		this.each( function() {
			var startX;
			var startY;
			var isMoving = false;

			function cancelTouch() {
				this.removeEventListener( 'touchmove', onTouchMove );
				startX = null;
				isMoving = false;
			}

			function onTouchMove( e ) {
				if ( config.preventDefaultEvents ) {
					e.preventDefault();
				}
				if ( isMoving ) {
					var x = e.touches[ 0 ].pageX;
					var y = e.touches[ 0 ].pageY;
					var dx = startX - x;
					var dy = startY - y;
					if ( Math.abs( dx ) >= config.min_move_x ) {
						cancelTouch();
						if ( dx > 0 ) {
							config.wipeLeft( e );
						} else {
							config.wipeRight( e );
						}
					} else if ( Math.abs( dy ) >= config.min_move_y ) {
						cancelTouch();
						if ( dy > 0 ) {
							config.wipeDown( e );
						} else {
							config.wipeUp( e );
						}
					}
				}
			}

			function onTouchStart( e ) {
				if ( e.touches.length === 1 ) {
					startX = e.touches[ 0 ].pageX;
					startY = e.touches[ 0 ].pageY;
					isMoving = true;
					this.addEventListener( 'touchmove', onTouchMove, false );
				}
			}
			if ( 'ontouchstart' in document.documentElement ) {
				this.addEventListener( 'touchstart', onTouchStart, false );
			}
		} );

		return this;
	};
} )( jQuery );
;
