!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.ScrollReveal=t()}(this,function(){"use strict";var e={delay:0,distance:"0",duration:600,easing:"cubic-bezier(0.5, 0, 0, 1)",interval:0,opacity:0,origin:"bottom",rotate:{x:0,y:0,z:0},scale:1,cleanup:!0,container:document.documentElement,desktop:!0,mobile:!0,reset:!1,useDelay:"always",viewFactor:0,viewOffset:{top:0,right:0,bottom:0,left:0},afterReset:function(){},afterReveal:function(){},beforeReset:function(){},beforeReveal:function(){}},t={success:function(){document.documentElement.classList.add("sr"),document.body?document.body.style.height="100%":document.addEventListener("DOMContentLoaded",function(){document.body.style.height="100%"})},failure:function(){return document.documentElement.classList.remove("sr"),{clean:function(){},destroy:function(){},reveal:function(){},sync:function(){},get noop(){return!0}}}};function n(e){return"object"==typeof window.Node?e instanceof window.Node:null!==e&&"object"==typeof e&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName}function i(e,t){if(void 0===t&&(t=document),e instanceof Array)return e.filter(n);if(n(e))return[e];if(i=e,r=Object.prototype.toString.call(i),"object"==typeof window.NodeList?i instanceof window.NodeList:null!==i&&"object"==typeof i&&"number"==typeof i.length&&/^\[object (HTMLCollection|NodeList|Object)\]$/.test(r)&&(0===i.length||n(i[0])))return Array.prototype.slice.call(e);var i,r;if("string"==typeof e)try{var o=t.querySelectorAll(e);return Array.prototype.slice.call(o)}catch(e){return[]}return[]}function r(e){return null!==e&&e instanceof Object&&(e.constructor===Object||"[object Object]"===Object.prototype.toString.call(e))}function o(e,t){if(r(e))return Object.keys(e).forEach(function(n){return t(e[n],n,e)});if(e instanceof Array)return e.forEach(function(n,i){return t(n,i,e)});throw new TypeError("Expected either an array or object literal.")}function s(e){for(var t=[],n=arguments.length-1;n-- >0;)t[n]=arguments[n+1];if(this.constructor.debug&&console){var i="%cScrollReveal: "+e;t.forEach(function(e){return i+="\n \u2014 "+e}),console.log(i,"color: #ea654b;")}}function a(){var e=this,t={active:[],stale:[]},n={active:[],stale:[]},r={active:[],stale:[]};try{o(i("[data-sr-id]"),function(e){var n=parseInt(e.getAttribute("data-sr-id"));t.active.push(n)})}catch(e){throw e}o(this.store.elements,function(e){-1===t.active.indexOf(e.id)&&t.stale.push(e.id)}),o(t.stale,function(t){return delete e.store.elements[t]}),o(this.store.elements,function(e){-1===r.active.indexOf(e.containerId)&&r.active.push(e.containerId),e.hasOwnProperty("sequence")&&-1===n.active.indexOf(e.sequence.id)&&n.active.push(e.sequence.id)}),o(this.store.containers,function(e){-1===r.active.indexOf(e.id)&&r.stale.push(e.id)}),o(r.stale,function(t){var n=e.store.containers[t].node;n.removeEventListener("scroll",e.delegate),n.removeEventListener("resize",e.delegate),delete e.store.containers[t]}),o(this.store.sequences,function(e){-1===n.active.indexOf(e.id)&&n.stale.push(e.id)}),o(n.stale,function(t){return delete e.store.sequences[t]})}function c(e){var t,n=this;try{o(i(e),function(e){var i=e.getAttribute("data-sr-id");if(null!==i){t=!0;var r=n.store.elements[i];r.callbackTimer&&window.clearTimeout(r.callbackTimer.clock),e.setAttribute("style",r.styles.inline.generated),e.removeAttribute("data-sr-id"),delete n.store.elements[i]}})}catch(e){return s.call(this,"Clean failed.",e.message)}if(t)try{a.call(this)}catch(e){return s.call(this,"Clean failed.",e.message)}}function l(e){if(e.constructor!==Array)throw new TypeError("Expected array.");if(16===e.length)return e;if(6===e.length){var t=u();return t[0]=e[0],t[1]=e[1],t[4]=e[2],t[5]=e[3],t[12]=e[4],t[13]=e[5],t}throw new RangeError("Expected array with either 6 or 16 values.")}function u(){for(var e=[],t=0;t<16;t++)e.push(t%5==0?1:0);return e}function d(e,t){for(var n=l(e),i=l(t),r=[],o=0;o<4;o++)for(var s=[n[o],n[o+4],n[o+8],n[o+12]],a=0;a<4;a++){var c=4*a,u=[i[c],i[c+1],i[c+2],i[c+3]];r[o+c]=s[0]*u[0]+s[1]*u[1]+s[2]*u[2]+s[3]*u[3]}return r}var f=function(){var e={},t=document.documentElement.style;function n(n,i){if(void 0===i&&(i=t),n&&"string"==typeof n){if(e[n])return e[n];if("string"==typeof i[n])return e[n]=n;if("string"==typeof i["-webkit-"+n])return e[n]="-webkit-"+n;throw new RangeError('Unable to find "'+n+'" style property.')}throw new TypeError("Expected a string.")}return n.clearCache=function(){return e={}},n}();function h(e,t){void 0===t&&(t={});var n=!e.visible&&e.revealed&&e.config.reset;return t.reveal||e.visible&&!e.revealed?(function(e,t){var n=[e.styles.inline.generated,e.styles.opacity.computed,e.styles.transform.generated.final];n.push(t?e.styles.transition.generated.delayed:e.styles.transition.generated.instant),e.revealed=e.seen=!0,e.node.setAttribute("style",n.filter(function(e){return""!==e}).join(" ")),p.call(this,e,t)}).call(this,e,"always"===e.config.useDelay||"onload"===e.config.useDelay&&(t.pristine||this.pristine)||"once"===e.config.useDelay&&!e.seen):t.reset||n?(function(e){var t=[e.styles.inline.generated,e.styles.opacity.generated,e.styles.transform.generated.initial,e.styles.transition.generated.instant];e.revealed=!1,e.node.setAttribute("style",t.filter(function(e){return""!==e}).join(" ")),p.call(this,e)}).call(this,e):void 0}function p(e,t){var n=this,i=t?e.config.duration+e.config.delay:e.config.duration,r=e.revealed?e.config.beforeReveal:e.config.beforeReset,o=e.revealed?e.config.afterReveal:e.config.afterReset,s=0;e.callbackTimer&&(s=Date.now()-e.callbackTimer.start,window.clearTimeout(e.callbackTimer.clock)),r(e.node),e.callbackTimer={start:Date.now(),clock:window.setTimeout(function(){o(e.node),e.callbackTimer=null,e.revealed&&!e.config.reset&&e.config.cleanup&&c.call(n,e.node)},i-s)}}var m,y=(m=0,function(){return m++});function v(e,t){if(void 0===t&&(t=this.pristine),!e.visible&&e.revealed&&e.config.reset)return h.call(this,e,{reset:!0});var n=this.store.sequences[e.sequence.id],i=e.sequence.index;if(n){var r=new g(n,"visible",this.store),o=new g(n,"revealed",this.store);if(n.models={visible:r,revealed:o},!o.body.length){var s=this.store.elements[n.members[r.body[0]]];if(s)return b.call(this,n,r.body[0],-1,t),b.call(this,n,r.body[0],1,t),h.call(this,s,{reveal:!0,pristine:t})}if(!n.blocked.head&&i===[].concat(o.head).pop()&&i>=[].concat(r.body).shift())return b.call(this,n,i,-1,t),h.call(this,e,{reveal:!0,pristine:t});if(!n.blocked.foot&&i===[].concat(o.foot).shift()&&i<=[].concat(r.body).pop())return b.call(this,n,i,1,t),h.call(this,e,{reveal:!0,pristine:t})}}function g(e,t,n){var i=this;this.head=[],this.body=[],this.foot=[],o(e.members,function(e,r){var o=n.elements[e];o&&o[t]&&i.body.push(r)}),this.body.length&&o(e.members,function(e,r){var o=n.elements[e];o&&!o[t]&&(r<i.body[0]?i.head.push(r):i.foot.push(r))})}function b(e,t,n,i){var r=this,o=["head",null,"foot"][1+n],s=this.store.elements[e.members[t+n]];e.blocked[o]=!0,setTimeout(function(){e.blocked[o]=!1,s&&v.call(r,s,i)},e.interval)}function w(){var e=this;a.call(this),o(this.store.elements,function(e){var t=[e.styles.inline.generated];e.visible?(t.push(e.styles.opacity.computed),t.push(e.styles.transform.generated.final)):(t.push(e.styles.opacity.generated),t.push(e.styles.transform.generated.initial)),e.node.setAttribute("style",t.filter(function(e){return""!==e}).join(" "))}),o(this.store.containers,function(t){var n=t.node===document.documentElement?window:t.node;n.addEventListener("scroll",e.delegate),n.addEventListener("resize",e.delegate)}),this.delegate(),this.initTimeout=null}function E(e){return void 0===e&&(e=navigator.userAgent),/Android|iPhone|iPad|iPod/i.test(e)}function j(e){for(var t=[],n=arguments.length-1;n-- >0;)t[n]=arguments[n+1];if(r(e))return o(t,function(t){o(t,function(t,n){r(t)?(e[n]&&r(e[n])||(e[n]={}),j(e[n],t)):e[n]=t})}),e;throw new TypeError("Target must be an object literal.")}function T(t,n,r){var a=this;void 0===n&&(n={}),void 0===r&&(r=!1);var h,p=[],m=n.interval||e.interval;try{m&&(h=new function(e){var t=Math.abs(e);if(isNaN(t))throw new RangeError("Invalid sequence interval.");this.id=y(),this.interval=Math.max(t,16),this.members=[],this.models={},this.blocked={head:!1,foot:!1}}(m));var v=i(t);if(!v.length)throw new Error("Invalid reveal target.");o(v.reduce(function(e,t){var r={},s=t.getAttribute("data-sr-id");s?(j(r,a.store.elements[s]),r.node.setAttribute("style",r.styles.inline.computed)):(r.id=y(),r.node=t,r.seen=!1,r.revealed=!1,r.visible=!1);var m=j({},r.config||a.defaults,n);if(!m.mobile&&E()||!m.desktop&&!E())return s&&c.call(a,r),e;var v,g=i(m.container)[0];if(!g)throw new Error("Invalid container.");return g.contains(t)?(null===(v=function(e){for(var t=[],n=arguments.length-1;n-- >0;)t[n]=arguments[n+1];var i=null;return o(t,function(t){o(t,function(t){null===i&&t.node===e&&(i=t.id)})}),i}(g,p,a.store.containers))&&(v=y(),p.push({id:v,node:g})),r.config=m,r.containerId=v,r.styles=function(e){var t=window.getComputedStyle(e.node),n=t.position,i=e.config,r={},o=(e.node.getAttribute("style")||"").match(/[\w-]+\s*:\s*[^;]+\s*/gi)||[];r.computed=o?o.map(function(e){return e.trim()}).join("; ")+";":"",r.generated=o.some(function(e){return e.match(/visibility\s?:\s?visible/i)})?r.computed:o.concat(["visibility: visible"]).map(function(e){return e.trim()}).join("; ")+";";var s,a,c=parseFloat(t.opacity),h=isNaN(parseFloat(i.opacity))?parseFloat(t.opacity):parseFloat(i.opacity),p={computed:c!==h?"opacity: "+c+";":"",generated:c!==h?"opacity: "+h+";":""},m=[];if(parseFloat(i.distance)){var y="top"===i.origin||"bottom"===i.origin?"Y":"X",v=i.distance;"top"!==i.origin&&"left"!==i.origin||(v=/^-/.test(v)?v.substr(1):"-"+v);var g=v.match(/(^-?\d+\.?\d?)|(em$|px$|%$)/g),b=g[0];switch(g[1]){case"em":v=parseInt(t.fontSize)*b;break;case"px":v=b;break;case"%":v="Y"===y?e.node.getBoundingClientRect().height*b/100:e.node.getBoundingClientRect().width*b/100;break;default:throw new RangeError("Unrecognized or missing distance unit.")}m.push("Y"===y?function(e){var t=u();return t[13]=e,t}(v):function(e){var t=u();return t[12]=e,t}(v))}i.rotate.x&&m.push((s=Math.PI/180*i.rotate.x,(a=u())[5]=a[10]=Math.cos(s),a[6]=a[9]=Math.sin(s),a[9]*=-1,a)),i.rotate.y&&m.push(function(e){var t=Math.PI/180*i.rotate.y,n=u();return n[0]=n[10]=Math.cos(t),n[2]=n[8]=Math.sin(t),n[2]*=-1,n}()),i.rotate.z&&m.push(function(e){var t=Math.PI/180*i.rotate.z,n=u();return n[0]=n[5]=Math.cos(t),n[1]=n[4]=Math.sin(t),n[4]*=-1,n}()),1!==i.scale&&m.push(function(e,t){var n=u();return n[0]=e,n[5]=e,n}(0===i.scale?2e-4:i.scale));var w={};if(m.length){w.property=f("transform"),w.computed={raw:t[w.property],matrix:function(e){if("string"==typeof e){var t=e.match(/matrix(3d)?\(([^)]+)\)/);if(t)return l(t[2].split(", ").map(parseFloat))}return u()}(t[w.property])},m.unshift(w.computed.matrix);var E=m.reduce(d);w.generated={initial:w.property+": matrix3d("+E.join(", ")+");",final:w.property+": matrix3d("+w.computed.matrix.join(", ")+");"}}else w.generated={initial:"",final:""};var j={};if(p.generated||w.generated.initial){j.property=f("transition"),j.computed=t[j.property],j.fragments=[];var T=i.delay,k=i.duration,O=i.easing;p.generated&&j.fragments.push({delayed:"opacity "+k/1e3+"s "+O+" "+T/1e3+"s",instant:"opacity "+k/1e3+"s "+O+" 0s"}),w.generated.initial&&j.fragments.push({delayed:w.property+" "+k/1e3+"s "+O+" "+T/1e3+"s",instant:w.property+" "+k/1e3+"s "+O+" 0s"}),j.computed&&!j.computed.match(/all 0s/)&&j.fragments.unshift({delayed:j.computed,instant:j.computed});var x=j.fragments.reduce(function(e,t,n){return e.delayed+=0===n?t.delayed:", "+t.delayed,e.instant+=0===n?t.instant:", "+t.instant,e},{delayed:"",instant:""});j.generated={delayed:j.property+": "+x.delayed+";",instant:j.property+": "+x.instant+";"}}else j.generated={delayed:"",instant:""};return{inline:r,opacity:p,position:n,transform:w,transition:j}}(r),h&&(r.sequence={id:h.id,index:h.members.length},h.members.push(r.id)),e.push(r),e):e},[]),function(e){a.store.elements[e.id]=e,e.node.setAttribute("data-sr-id",e.id)})}catch(e){return s.call(this,"Reveal failed.",e.message)}o(p,function(e){a.store.containers[e.id]={id:e.id,node:e.node}}),h&&(this.store.sequences[h.id]=h),!0!==r&&(this.store.history.push({target:t,options:n}),this.initTimeout&&window.clearTimeout(this.initTimeout),this.initTimeout=window.setTimeout(w.bind(this),0))}var k,O=Math.sign||function(e){return(e>0)-(e<0)||+e},x=(k=Date.now(),function(e){var t=Date.now();t-k>16?(k=t,e(t)):setTimeout(function(){return x(e)},0)}),A=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||x;function R(e,t){var n=t?e.node.clientHeight:e.node.offsetHeight,i=t?e.node.clientWidth:e.node.offsetWidth,r=0,o=0,s=e.node;do{isNaN(s.offsetTop)||(r+=s.offsetTop),isNaN(s.offsetLeft)||(o+=s.offsetLeft),s=s.offsetParent}while(s);return{bounds:{top:r,right:o+i,bottom:r+n,left:o},height:n,width:i}}var q,P,L,M,I,N,z,F,D="4.0.2";function S(n){var r;if(void 0===n&&(n={}),void 0===this||Object.getPrototypeOf(this)!==S.prototype)return new S(n);if(!S.isSupported())return s.call(this,"Instantiation failed.","This browser is not supported."),t.failure();try{r=j({},N||e,n)}catch(e){return s.call(this,"Invalid configuration.",e.message),t.failure()}try{if(!i(r.container)[0])throw new Error("Invalid container.")}catch(e){return s.call(this,e.message),t.failure()}return!(N=r).mobile&&E()||!N.desktop&&!E()?(s.call(this,"This device is disabled.","desktop: "+N.desktop,"mobile: "+N.mobile),t.failure()):(t.success(),this.store={containers:{},elements:{},history:[],sequences:{}},this.pristine=!0,q=q||(function(e,t){var n=this;void 0===e&&(e={type:"init"}),void 0===t&&(t=this.store.elements),A(function(){var i="init"===e.type||"resize"===e.type;o(n.store.containers,function(e){i&&(e.geometry=R.call(n,e,!0));var t=(function(e){var t,n;return e.node===document.documentElement?(t=window.pageYOffset,n=window.pageXOffset):(t=e.node.scrollTop,n=e.node.scrollLeft),{top:t,left:n}}).call(n,e);e.scroll&&(e.direction={x:O(t.left-e.scroll.left),y:O(t.top-e.scroll.top)}),e.scroll=t}),o(t,function(e){i&&(e.geometry=R.call(n,e)),e.visible=(function(e){void 0===e&&(e={});var t=this.store.containers[e.containerId];if(t){var n=Math.max(0,Math.min(1,e.config.viewFactor)),i=e.config.viewOffset;return e.geometry.bounds.top+e.geometry.height*n<t.geometry.bounds.bottom+t.scroll.top-i.bottom&&e.geometry.bounds.right-e.geometry.width*n>t.geometry.bounds.left+t.scroll.left+i.left&&e.geometry.bounds.bottom-e.geometry.height*n>t.geometry.bounds.top+t.scroll.top+i.top&&e.geometry.bounds.left+e.geometry.width*n<t.geometry.bounds.right+t.scroll.left-i.right||"fixed"===e.styles.position}}).call(n,e)}),o(t,function(e){e.sequence?v.call(n,e):h.call(n,e)}),n.pristine=!1})}).bind(this),P=P||(function(){var e=this;o(this.store.elements,function(e){e.node.setAttribute("style",e.styles.inline.generated),e.node.removeAttribute("data-sr-id")}),o(this.store.containers,function(t){var n=t.node===document.documentElement?window:t.node;n.removeEventListener("scroll",e.delegate),n.removeEventListener("resize",e.delegate)}),this.store={containers:{},elements:{},history:[],sequences:{}}}).bind(this),L=L||T.bind(this),M=M||c.bind(this),I=I||(function(){var e=this;o(this.store.history,function(t){T.call(e,t.target,t.options,!0)}),w.call(this)}).bind(this),Object.defineProperty(this,"delegate",{get:function(){return q}}),Object.defineProperty(this,"destroy",{get:function(){return P}}),Object.defineProperty(this,"reveal",{get:function(){return L}}),Object.defineProperty(this,"clean",{get:function(){return M}}),Object.defineProperty(this,"sync",{get:function(){return I}}),Object.defineProperty(this,"defaults",{get:function(){return N}}),Object.defineProperty(this,"version",{get:function(){return D}}),Object.defineProperty(this,"noop",{get:function(){return!1}}),F||(F=this))}return S.isSupported=function(){return("transform"in(e=document.documentElement.style)||"WebkitTransform"in e)&&function(){var e=document.documentElement.style;return"transition"in e||"WebkitTransition"in e}();var e},Object.defineProperty(S,"debug",{get:function(){return z||!1},set:function(e){return z="boolean"==typeof e?e:z}}),S(),S});