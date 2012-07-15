/*!
* qTip2 - Pretty powerful tooltips
* http://craigsworks.com/projects/qtip2/
*
* Version: nightly
* Copyright 2009-2010 Craig Michael Thompson - http://craigsworks.com
*
* Dual licensed under MIT or GPLv2 licenses
*   http://en.wikipedia.org/wiki/MIT_License
*   http://en.wikipedia.org/wiki/GNU_General_Public_License
*
* Date: Tue Jul  3 15:45:43.0000000000 2012
*//*jslint browser: true, onevar: true, undef: true, nomen: true, bitwise: true, regexp: true, newcap: true, immed: true, strict: true *//*global window: false, jQuery: false, console: false, define: false */(function(a){typeof define==="function"&&define.amd?define(["jquery"],a):a(jQuery)})(function(a){function K(e,f){var g,h,i,j,k,l=a(this),m=a(document.body),n=this===document?m:l,o=l.metadata?l.metadata(f.metadata):d,p=f.metadata.type==="html5"&&o?o[f.metadata.name]:d,q=l.data(f.metadata.name||"qtipopts");try{q=typeof q==="string"?(new Function("return "+q))():q}catch(t){H("Unable to parse HTML5 attribute data: "+q)}j=a.extend(b,{},r.defaults,f,typeof q==="object"?I(q):d,I(p||o)),h=j.position,j.id=e;if("boolean"===typeof j.content.text){i=l.attr(j.content.attr);if(j.content.attr!==c&&i)j.content.text=i;else{H("Unable to locate content for tooltip! Aborting render of tooltip on element: ",l);return c}}h.container.length||(h.container=m),h.target===c&&(h.target=n),j.show.target===c&&(j.show.target=n),j.show.solo===b&&(j.show.solo=h.container.closest("body")),j.hide.target===c&&(j.hide.target=n),j.position.viewport===b&&(j.position.viewport=h.container),h.container=h.container.eq(0),h.at=new s.Corner(h.at),h.my=new s.Corner(h.my);if(a.data(this,"qtip"))if(j.overwrite)l.qtip("destroy");else if(j.overwrite===c)return c;j.suppress&&(k=a.attr(this,"title"))&&a(this).removeAttr("title").attr(F,k).attr("title",""),g=new J(l,j,e,!!i),a.data(this,"qtip",g),l.bind("remove.qtip-"+e+" removeqtip.qtip-"+e,function(){g.destroy()});return g}function J(f,g,o,p){function X(){var b=[g.show.target[0],g.hide.target[0],q.rendered&&M.tooltip[0],g.position.container[0],g.position.viewport[0],window,document];q.rendered?a([]).pushStack(a.grep(b,function(a){return typeof a==="object"})).unbind(L):g.show.target.unbind(L+"-create")}function W(){function m(a){q.rendered&&K[0].offsetWidth>0&&q.reposition(a)}function l(a){if(K.hasClass(x))return c;clearTimeout(q.timers.inactive),q.timers.inactive=setTimeout(function(){q.hide(a)},g.hide.inactive)}function k(b){if(K.hasClass(x)||H||J)return c;var f=a(b.relatedTarget||b.target),h=f.closest(y)[0]===K[0],i=f[0]===e.show[0];clearTimeout(q.timers.show),clearTimeout(q.timers.hide);if(d.target==="mouse"&&h||g.hide.fixed&&(/mouse(out|leave|move)/.test(b.type)&&(h||i)))try{b.preventDefault(),b.stopImmediatePropagation()}catch(j){}else g.hide.delay>0?q.timers.hide=setTimeout(function(){q.hide(b)},g.hide.delay):q.hide(b)}function j(a){if(K.hasClass(x))return c;clearTimeout(q.timers.show),clearTimeout(q.timers.hide);var d=function(){q.toggle(b,a)};g.show.delay>0?q.timers.show=setTimeout(d,g.show.delay):d()}var d=g.position,e={show:g.show.target,hide:g.hide.target,viewport:a(d.viewport),document:a(document),body:a(document.body),window:a(window)},h={show:a.trim(""+g.show.event).split(" "),hide:a.trim(""+g.hide.event).split(" ")},i=a.browser.msie&&parseInt(a.browser.version,10)===6;K.bind("mouseenter"+L+" mouseleave"+L,function(a){var b=a.type==="mouseenter";b&&q.focus(a),K.toggleClass(B,b)}),/mouse(out|leave)/i.test(g.hide.event)&&(g.hide.leave==="window"&&e.window.bind("mouseleave"+L+" blur"+L,function(a){!/select|option/.test(a.target.nodeName)&&!a.relatedTarget&&q.hide(a)})),g.hide.fixed?(e.hide=e.hide.add(K),K.bind("mouseover"+L,function(){K.hasClass(x)||clearTimeout(q.timers.hide)})):/mouse(over|enter)/i.test(g.show.event)&&e.hide.bind("mouseleave"+L,function(a){clearTimeout(q.timers.show)}),(""+g.hide.event).indexOf("unfocus")>-1&&d.container.closest("html").bind("mousedown"+L,function(b){var c=a(b.target),d=q.rendered&&!K.hasClass(x)&&K[0].offsetWidth>0,e=c.parents(y).filter(K[0]).length>0;c[0]!==f[0]&&c[0]!==K[0]&&!e&&!f.has(c[0]).length&&!c.attr("disabled")&&q.hide(b)}),"number"===typeof g.hide.inactive&&(e.show.bind("qtip-"+o+"-inactive",l),a.each(r.inactiveEvents,function(a,b){e.hide.add(M.tooltip).bind(b+L+"-inactive",l)})),a.each(h.hide,function(b,c){var d=a.inArray(c,h.show),f=a(e.hide);d>-1&&f.add(e.show).length===f.length||c==="unfocus"?(e.show.bind(c+L,function(a){K[0].offsetWidth>0?k(a):j(a)}),delete h.show[d]):e.hide.bind(c+L,k)}),a.each(h.show,function(a,b){e.show.bind(b+L,j)}),"number"===typeof g.hide.distance&&e.show.add(K).bind("mousemove"+L,function(a){var b=N.origin||{},c=g.hide.distance,d=Math.abs;(d(a.pageX-b.pageX)>=c||d(a.pageY-b.pageY)>=c)&&q.hide(a)}),d.target==="mouse"&&(e.show.bind("mousemove"+L,function(a){t={pageX:a.pageX,pageY:a.pageY,type:"mousemove"}}),d.adjust.mouse&&(g.hide.event&&(K.bind("mouseleave"+L,function(a){(a.relatedTarget||a.target)!==e.show[0]&&q.hide(a)}),M.target.bind("mouseenter"+L+" mouseleave"+L,function(a){N.onTarget=a.type==="mouseenter"})),e.document.bind("mousemove"+L,function(a){q.rendered&&N.onTarget&&!K.hasClass(x)&&K[0].offsetWidth>0&&q.reposition(a||t)}))),(d.adjust.resize||e.viewport.length)&&(a.event.special.resize?e.viewport:e.window).bind("resize"+L,m),(e.viewport.length||i&&K.css("position")==="fixed")&&e.viewport.bind("scroll"+L,m)}function V(b,d){function h(b){function i(e){e&&(delete h[e.src],clearTimeout(q.timers.img[e.src]),a(e).unbind(L)),a.isEmptyObject(h)&&(q.redraw(),d!==c&&q.reposition(N.event),b())}var f,h={};if((f=g.find("img[src]:not([height]):not([width])")).length===0)return i();f.each(function(b,c){if(h[c.src]===e){var d=0,f=3;(function g(){if(c.height||c.width||d>f)return i(c);d+=1,q.timers.img[c.src]=setTimeout(g,700)})(),a(c).bind("error"+L+" load"+L,function(){i(this)}),h[c.src]=c}})}var g=M.content;if(!q.rendered||!b)return c;a.isFunction(b)&&(b=b.call(f,N.event,q)||""),b.jquery&&b.length>0?g.empty().append(b.css({display:"block"})):g.html(b),q.rendered<0?K.queue("fx",h):(J=0,h(a.noop));return q}function U(b,d){var e=M.title;if(!q.rendered||!b)return c;a.isFunction(b)&&(b=b.call(f,N.event,q));if(b===c||!b&&b!=="")return Q(c);b.jquery&&b.length>0?e.empty().append(b.css({display:"block"})):e.html(b),q.redraw(),d!==c&&q.rendered&&K[0].offsetWidth>0&&q.reposition(N.event)}function T(a){var b=M.button,d=M.title;if(!q.rendered)return c;a?(d||S(),R()):b.remove()}function S(){var c=E+"-title";M.titlebar&&Q(),M.titlebar=a("<div />",{"class":v+"-titlebar "+(g.style.widget?"ui-widget-header":"")}).append(M.title=a("<div />",{id:c,"class":v+"-title","aria-atomic":b})).insertBefore(M.content).delegate(".ui-tooltip-close","mousedown keydown mouseup keyup mouseout",function(b){a(this).toggleClass("ui-state-active ui-state-focus",b.type.substr(-4)==="down")}).delegate(".ui-tooltip-close","mouseover mouseout",function(b){a(this).toggleClass("ui-state-hover",b.type==="mouseover")}),g.content.title.button?R():q.rendered&&q.redraw()}function R(){var b=g.content.title.button,d=typeof b==="string",e=d?b:"Close tooltip";M.button&&M.button.remove(),b.jquery?M.button=b:M.button=a("<a />",{"class":"ui-state-default ui-tooltip-close "+(g.style.widget?"":v+"-icon"),title:e,"aria-label":e}).prepend(a("<span />",{"class":"ui-icon ui-icon-close",html:"&times;"})),M.button.appendTo(M.titlebar).attr("role","button").click(function(a){K.hasClass(x)||q.hide(a);return c}),q.redraw()}function Q(a){M.title&&(M.titlebar.remove(),M.titlebar=M.title=M.button=d,a!==c&&q.reposition())}function P(){var a=g.style.widget;K.toggleClass(w,a).toggleClass(z,g.style.def&&!a),M.content.toggleClass(w+"-content",a),M.titlebar&&M.titlebar.toggleClass(w+"-header",a),M.button&&M.button.toggleClass(v+"-icon",!a)}function O(a){var b=0,c,d=g,e=a.split(".");while(d=d[e[b++]])b<e.length&&(c=d);return[c||g,e.pop()]}var q=this,D=document.body,E=v+"-"+o,H=0,J=0,K=a(),L=".qtip-"+o,M,N;q.id=o,q.destroyed=q.rendered=c,q.elements=M={target:f},q.timers={img:{}},q.options=g,q.checks={},q.plugins={},q.cache=N={event:{},target:a(),disabled:c,attr:p,onTarget:c,lastClass:""},q.checks.builtin={"^id$":function(d,e,f){var g=f===b?r.nextid:f,h=v+"-"+g;g!==c&&g.length>0&&!a("#"+h).length&&(K[0].id=h,M.content[0].id=h+"-content",M.title[0].id=h+"-title")},"^content.text$":function(a,b,c){V(c)},"^content.title.text$":function(a,b,c){if(!c)return Q();!M.title&&c&&S(),U(c)},"^content.title.button$":function(a,b,c){T(c)},"^position.(my|at)$":function(a,b,c){"string"===typeof c&&(a[b]=new s.Corner(c))},"^position.container$":function(a,b,c){q.rendered&&K.appendTo(c)},"^show.ready$":function(){q.rendered?q.toggle(b):q.render(1)},"^style.classes$":function(a,b,c){K.attr("class",v+" qtip ui-helper-reset "+c)},"^style.widget|content.title":P,"^events.(render|show|move|hide|focus|blur)$":function(b,c,d){K[(a.isFunction(d)?"":"un")+"bind"]("tooltip"+c,d)},"^(show|hide|position).(event|target|fixed|inactive|leave|distance|viewport|adjust)":function(){var a=g.position;K.attr("tracking",a.target==="mouse"&&a.adjust.mouse),X(),W()}},a.extend(q,{render:function(d){if(q.rendered)return q;var e=g.content.text,h=g.content.title.text,i=g.position,j=a.Event("tooltiprender");a.attr(f[0],"aria-describedby",E),K=M.tooltip=a("<div/>",{id:E,"class":v+" qtip ui-helper-reset "+z+" "+g.style.classes+" "+v+"-pos-"+g.position.my.abbrev(),width:g.style.width||"",height:g.style.height||"",tracking:i.target==="mouse"&&i.adjust.mouse,role:"alert","aria-live":"polite","aria-atomic":c,"aria-describedby":E+"-content","aria-hidden":b}).toggleClass(x,N.disabled).data("qtip",q).appendTo(g.position.container).append(M.content=a("<div />",{"class":v+"-content",id:E+"-content","aria-atomic":b})),q.rendered=-1,H=J=1,h&&(S(),a.isFunction(h)||U(h,c)),a.isFunction(e)||V(e,c),q.rendered=b,P(),a.each(g.events,function(b,c){a.isFunction(c)&&K.bind(b==="toggle"?"tooltipshow tooltiphide":"tooltip"+b,c)}),a.each(s,function(){this.initialize==="render"&&this(q)}),W(),K.queue("fx",function(a){j.originalEvent=N.event,K.trigger(j,[q]),H=J=0,q.redraw(),(g.show.ready||d)&&q.toggle(b,N.event,c),a()});return q},get:function(a){var b,c;switch(a.toLowerCase()){case"dimensions":b={height:K.outerHeight(),width:K.outerWidth()};break;case"offset":b=s.offset(K,g.position.container);break;default:c=O(a.toLowerCase()),b=c[0][c[1]],b=b.precedance?b.string():b}return b},set:function(e,f){function n(a,b){var c,d,e;for(c in l)for(d in l[c])if(e=(new RegExp(d,"i")).exec(a))b.push(e),l[c][d].apply(q,b)}var h=/^position\.(my|at|adjust|target|container)|style|content|show\.ready/i,i=/^content\.(title|attr)|style/i,j=c,k=c,l=q.checks,m;"string"===typeof e?(m=e,e={},e[m]=f):e=a.extend(b,{},e),a.each(e,function(b,c){var d=O(b.toLowerCase()),f;f=d[0][d[1]],d[0][d[1]]="object"===typeof c&&c.nodeType?a(c):c,e[b]=[d[0],d[1],c,f],j=h.test(b)||j,k=i.test(b)||k}),I(g),H=J=1,a.each(e,n),H=J=0,q.rendered&&K[0].offsetWidth>0&&(j&&q.reposition(g.position.target==="mouse"?d:N.event),k&&q.redraw());return q},toggle:function(e,f){function u(){e?(a.browser.msie&&K[0].style.removeAttribute("filter"),K.css("overflow",""),"string"===typeof i.autofocus&&a(i.autofocus,K).focus(),i.target.trigger("qtip-"+o+"-inactive")):K.css({display:"",visibility:"",opacity:"",left:"",top:""}),s=a.Event("tooltip"+(e?"visible":"hidden")),s.originalEvent=f?N.event:d,K.trigger(s,[q])}if(!q.rendered)return e?q.render(1):q;var h=e?"show":"hide",i=g[h],j=g[e?"hide":"show"],k=g.position,l=g.content,m=K[0].offsetWidth>0,n=e||i.target.length===1,p=!f||i.target.length<2||N.target[0]===f.target,r,s;(typeof e).search("boolean|number")&&(e=!m);if(!K.is(":animated")&&m===e&&p)return q;if(f){if(/over|enter/.test(f.type)&&/out|leave/.test(N.event.type)&&g.show.target.add(f.target).length===g.show.target.length&&K.has(f.relatedTarget).length)return q;N.event=a.extend({},f)}s=a.Event("tooltip"+h),s.originalEvent=f?N.event:d,K.trigger(s,[q,90]);if(s.isDefaultPrevented())return q;a.attr(K[0],"aria-hidden",!e),e?(N.origin=a.extend({},t),q.focus(f),a.isFunction(l.text)&&V(l.text,c),a.isFunction(l.title.text)&&U(l.title.text,c),!G&&k.target==="mouse"&&k.adjust.mouse&&(a(document).bind("mousemove.qtip",function(a){t={pageX:a.pageX,pageY:a.pageY,type:"mousemove"}}),G=b),q.reposition(f,arguments[2]),(s.solo=!!i.solo)&&a(y,i.solo).not(K).qtip("hide",s)):(clearTimeout(q.timers.show),delete N.origin,G&&!a(y+'[tracking="true"]:visible',i.solo).not(K).length&&(a(document).unbind("mousemove.qtip"),G=c),q.blur(f)),i.effect===c||n===c?(K[h](),u.call(K)):a.isFunction(i.effect)?(K.stop(1,1),i.effect.call(K,q),K.queue("fx",function(a){u(),a()})):K.fadeTo(90,e?1:0,u),e&&i.target.trigger("qtip-"+o+"-inactive");return q},show:function(a){return q.toggle(b,a)},hide:function(a){return q.toggle(c,a)},focus:function(b){if(!q.rendered)return q;var c=a(y),d=parseInt(K[0].style.zIndex,10),e=r.zindex+c.length,f=a.extend({},b),g,h;K.hasClass(A)||(h=a.Event("tooltipfocus"),h.originalEvent=f,K.trigger(h,[q,e]),h.isDefaultPrevented()||(d!==e&&(c.each(function(){this.style.zIndex>d&&(this.style.zIndex=this.style.zIndex-1)}),c.filter("."+A).qtip("blur",f)),K.addClass(A)[0].style.zIndex=e));return q},blur:function(b){var c=a.extend({},b),d;K.removeClass(A),d=a.Event("tooltipblur"),d.originalEvent=c,K.trigger(d,[q]);return q},reposition:function(b,d){if(!q.rendered||H)return q;H=1;var e=g.position.target,f=g.position,h=f.my,i=f.at,o=f.adjust,p=o.method.split(" "),r=K.outerWidth(),u=K.outerHeight(),v=0,w=0,x=a.Event("tooltipmove"),y=K.css("position")==="fixed",z=f.viewport,A={left:0,top:0},B=f.container,C=K[0].offsetWidth>0,D,E,F;if(a.isArray(e)&&e.length===2)i={x:k,y:j},A={left:e[0],top:e[1]};else if(e==="mouse"&&(b&&b.pageX||N.event.pageX))i={x:k,y:j},b=(b&&(b.type==="resize"||b.type==="scroll")?N.event:b&&b.pageX&&b.type==="mousemove"?b:t&&t.pageX&&(o.mouse||!b||!b.pageX)?{pageX:t.pageX,pageY:t.pageY}:!o.mouse&&N.origin&&N.origin.pageX&&g.show.distance?N.origin:b)||b||N.event||t||{},A={top:b.pageY,left:b.pageX};else{e==="event"&&b&&b.target&&b.type!=="scroll"&&b.type!=="resize"?N.target=a(b.target):e!=="event"&&(N.target=a(e.jquery?e:M.target)),e=N.target,e=a(e).eq(0);if(e.length===0)return q;e[0]===document||e[0]===window?(v=s.iOS?window.innerWidth:e.width(),w=s.iOS?window.innerHeight:e.height(),e[0]===window&&(A={top:(z||e).scrollTop(),left:(z||e).scrollLeft()})):s.imagemap&&e.is("area")?D=s.imagemap(q,e,i,s.viewport?p:c):s.svg&&typeof e[0].xmlbase==="string"?D=s.svg(q,e,i,s.viewport?p:c):(v=e.outerWidth(),w=e.outerHeight(),A=s.offset(e,B)),D&&(v=D.width,w=D.height,E=D.offset,A=D.position);if(s.iOS>3.1&&s.iOS<4.1||s.iOS>=4.3&&s.iOS<4.33||!s.iOS&&y)F=a(window),A.left-=F.scrollLeft(),A.top-=F.scrollTop();A.left+=i.x===m?v:i.x===n?v/2:0,A.top+=i.y===l?w:i.y===n?w/2:0}A.left+=o.x+(h.x===m?-r:h.x===n?-r/2:0),A.top+=o.y+(h.y===l?-u:h.y===n?-u/2:0),s.viewport?(A.adjusted=s.viewport(q,A,f,v,w,r,u),E&&A.adjusted.left&&(A.left+=E.left),E&&A.adjusted.top&&(A.top+=E.top)):A.adjusted={left:0,top:0},x.originalEvent=a.extend({},b),K.trigger(x,[q,A,z.elem||z]);if(x.isDefaultPrevented())return q;delete A.adjusted,d===c||!C||isNaN(A.left)||isNaN(A.top)||e==="mouse"||!a.isFunction(f.effect)?K.css(A):a.isFunction(f.effect)&&(f.effect.call(K,q,a.extend({},A)),K.queue(function(b){a(this).css({opacity:"",height:""}),a.browser.msie&&this.style.removeAttribute("filter"),b()})),H=0;return q},redraw:function(){if(q.rendered<1||J)return q;var a=g.position.container,b,c,d,e;J=1,g.style.height&&K.css(i,g.style.height),g.style.width?K.css(h,g.style.width):(K.css(h,"").addClass(C),c=K.width()+1,d=K.css("max-width")||"",e=K.css("min-width")||"",b=(d+e).indexOf("%")>-1?a.width()/100:0,d=(d.indexOf("%")>-1?b:1)*parseInt(d,10)||c,e=(e.indexOf("%")>-1?b:1)*parseInt(e,10)||0,c=d+e?Math.min(Math.max(c,e),d):c,K.css(h,Math.round(c)).removeClass(C)),J=0;return q},disable:function(b){"boolean"!==typeof b&&(b=!K.hasClass(x)&&!N.disabled),q.rendered?(K.toggleClass(x,b),a.attr(K[0],"aria-disabled",b)):N.disabled=!!b;return q},enable:function(){return q.disable(c)},destroy:function(){var c=f[0],d=a.attr(c,F),e=f.data("qtip");q.destroyed=b,q.rendered&&(K.stop(1,0).remove(),a.each(q.plugins,function(){this.destroy&&this.destroy()})),clearTimeout(q.timers.show),clearTimeout(q.timers.hide),X();if(!e||q===e)a.removeData(c,"qtip"),g.suppress&&d&&(a.attr(c,"title",d),f.removeAttr(F)),f.removeAttr("aria-describedby");f.unbind(".qtip-"+o),delete u[q.id];return f}})}function I(b){var e;if(!b||"object"!==typeof b)return c;if(b.metadata===d||"object"!==typeof b.metadata)b.metadata={type:b.metadata};if("content"in b){if(b.content===d||"object"!==typeof b.content||b.content.jquery)b.content={text:b.content};e=b.content.text||c,!a.isFunction(e)&&(!e&&!e.attr||e.length<1||"object"===typeof e&&!e.jquery)&&(b.content.text=c);if("title"in b.content){if(b.content.title===d||"object"!==typeof b.content.title)b.content.title={text:b.content.title};e=b.content.title.text||c,!a.isFunction(e)&&(!e&&!e.attr||e.length<1||"object"===typeof e&&!e.jquery)&&(b.content.title.text=c)}}if("position"in b)if(b.position===d||"object"!==typeof b.position)b.position={my:b.position,at:b.position};if("show"in b)if(b.show===d||"object"!==typeof b.show)b.show.jquery?b.show={target:b.show}:b.show={event:b.show};if("hide"in b)if(b.hide===d||"object"!==typeof b.hide)b.hide.jquery?b.hide={target:b.hide}:b.hide={event:b.hide};if("style"in b)if(b.style===d||"object"!==typeof b.style)b.style={classes:b.style};a.each(s,function(){this.sanitize&&this.sanitize(b)});return b}function H(){H.history=H.history||[],H.history.push(arguments);if("object"===typeof console){var a=console[console.warn?"warn":"log"],b=Array.prototype.slice.call(arguments),c;typeof arguments[0]==="string"&&(b[0]="qTip2: "+b[0]),c=a.apply?a.apply(console,b):a(b)}}"use strict";var b=!0,c=!1,d=null,e,f="x",g="y",h="width",i="height",j="top",k="left",l="bottom",m="right",n="center",o="flip",p="flipinvert",q="shift",r,s,t,u={},v="ui-tooltip",w="ui-widget",x="ui-state-disabled",y="div.qtip."+v,z=v+"-default",A=v+"-focus",B=v+"-hover",C=v+"-fluid",D="-31000px",E="_replacedByqTip",F="oldtitle",G;r=a.fn.qtip=function(f,g,h){var i=(""+f).toLowerCase(),j=d,k=a.makeArray(arguments).slice(1),l=k[k.length-1],m=this[0]?a.data(this[0],"qtip"):d;if(!arguments.length&&m||i==="api")return m;if("string"===typeof f){this.each(function(){var d=a.data(this,"qtip");if(!d)return b;l&&l.timeStamp&&(d.cache.event=l);if(i!=="option"&&i!=="options"||!g)d[i]&&d[i].apply(d[i],k);else if(a.isPlainObject(g)||h!==e)d.set(g,h);else{j=d.get(g);return c}});return j!==d?j:this}if("object"===typeof f||!arguments.length){m=I(a.extend(b,{},f));return r.bind.call(this,m,l)}},r.bind=function(d,f){return this.each(function(g){function n(b){function d(){l.render(typeof b==="object"||h.show.ready),i.show.add(i.hide).unbind(k)}if(l.cache.disabled)return c;l.cache.event=a.extend({},b),l.cache.target=b?a(b.target):[e],h.show.delay>0?(clearTimeout(l.timers.show),l.timers.show=setTimeout(d,h.show.delay),j.show!==j.hide&&i.hide.bind(j.hide,function(){clearTimeout(l.timers.show)})):d()}var h,i,j,k,l,m;m=a.isArray(d.id)?d.id[g]:d.id,m=!m||m===c||m.length<1||u[m]?r.nextid++:u[m]=m,k=".qtip-"+m+"-create",l=K.call(this,m,d);if(l===c)return b;h=l.options,a.each(s,function(){this.initialize==="initialize"&&this(l)}),i={show:h.show.target,hide:h.hide.target},j={show:a.trim(""+h.show.event).replace(/ /g,k+" ")+k,hide:a.trim(""+h.hide.event).replace(/ /g,k+" ")+k},/mouse(over|enter)/i.test(j.show)&&!/mouse(out|leave)/i.test(j.hide)&&(j.hide+=" mouseleave"+k),i.show.bind("mousemove"+k,function(a){t={pageX:a.pageX,pageY:a.pageY,type:"mousemove"},l.cache.onTarget=b}),i.show.bind(j.show,n),(h.show.ready||h.prerender)&&n(f)})},s=r.plugins={Corner:function(a){a=(""+a).replace(/([A-Z])/," $1").replace(/middle/gi,n).toLowerCase(),this.x=(a.match(/left|right/i)||a.match(/center/)||["inherit"])[0].toLowerCase(),this.y=(a.match(/top|bottom|center/i)||["inherit"])[0].toLowerCase();var b=a.charAt(0);this.precedance=b==="t"||b==="b"?g:f,this.string=function(){return this.precedance===g?this.y+this.x:this.x+this.y},this.abbrev=function(){var a=this.x.substr(0,1),b=this.y.substr(0,1);return a===b?a:this.precedance===g?b+a:a+b},this.invertx=function(a){this.x=this.x===k?m:this.x===m?k:a||this.x},this.inverty=function(a){this.y=this.y===j?l:this.y===l?j:a||this.y},this.clone=function(){return{x:this.x,y:this.y,precedance:this.precedance,string:this.string,abbrev:this.abbrev,clone:this.clone,invertx:this.invertx,inverty:this.inverty}}},offset:function(b,c){function j(a,b){d.left+=b*a.scrollLeft(),d.top+=b*a.scrollTop()}var d=b.offset(),e=b.closest("body")[0],f=c,g,h,i;if(f){do f.css("position")!=="static"&&(h=f.position(),d.left-=h.left+(parseInt(f.css("borderLeftWidth"),10)||0)+(parseInt(f.css("marginLeft"),10)||0),d.top-=h.top+(parseInt(f.css("borderTopWidth"),10)||0)+(parseInt(f.css("marginTop"),10)||0),!g&&(i=f.css("overflow"))!=="hidden"&&i!=="visible"&&(g=f));while((f=a(f[0].offsetParent)).length);g&&g[0]!==e&&j(g,1)}return d},iOS:parseFloat((""+(/CPU.*OS ([0-9_]{1,5})|(CPU like).*AppleWebKit.*Mobile/i.exec(navigator.userAgent)||[0,""])[1]).replace("undefined","3_2").replace("_",".").replace("_",""))||c,fn:{attr:function(b,c){if(this.length){var d=this[0],e="title",f=a.data(d,"qtip");if(b===e&&f&&"object"===typeof f&&f.options.suppress){if(arguments.length<2)return a.attr(d,F);f&&f.options.content.attr===e&&f.cache.attr&&f.set("content.text",c);return this.attr(F,c)}}return a.fn["attr"+E].apply(this,arguments)},clone:function(b){var c=a([]),d="title",e=a.fn["clone"+E].apply(this,arguments);b||e.filter("["+F+"]").attr("title",function(){return a.attr(this,F)}).removeAttr(F);return e}}},a.each(s.fn,function(c,d){if(!d||a.fn[c+E])return b;var e=a.fn[c+E]=a.fn[c];a.fn[c]=function(){return d.apply(this,arguments)||e.apply(this,arguments)}}),a.ui||(a["cleanData"+E]=a.cleanData,a.cleanData=function(b){for(var c=0,d;(d=b[c])!==e;c++)try{a(d).triggerHandler("removeqtip")}catch(f){}a["cleanData"+E](b)}),r.version="nightly",r.nextid=0,r.inactiveEvents="click dblclick mousedown mouseup mousemove mouseleave mouseenter".split(" "),r.zindex=15e3,r.defaults={prerender:c,id:c,overwrite:b,suppress:b,content:{text:b,attr:"title",title:{text:c,button:c}},position:{my:"top left",at:"bottom right",target:c,container:c,viewport:c,adjust:{x:0,y:0,mouse:b,resize:b,method:"flip flip"},effect:function(b,d,e){a(this).animate(d,{duration:200,queue:c})}},show:{target:c,event:"mouseenter",effect:b,delay:90,solo:c,ready:c,autofocus:c},hide:{target:c,event:"mouseleave",effect:b,delay:0,fixed:c,inactive:c,leave:"window",distance:c},style:{classes:"",widget:c,width:c,height:c,def:b},events:{render:d,move:d,show:d,hide:d,toggle:d,visible:d,hidden:d,focus:d,blur:d}},s.viewport=function(a,b,c,d,o,r,s){function K(a,c,d,f,g,h,i,j,k){var l=b[g],m=w[a],o=x[a],r=d===q,s=-D.offset[g]+C.offset[g]+C["scroll"+g],t=m===g?k:m===h?-k:-k/2,u=o===g?j:o===h?-j:-j/2,v=F&&F.size?F.size[i]||0:0,y=F&&F.corner&&F.corner.precedance===a&&!r?v:0,z=s-l+y,A=l+k-C[i]-s+y,B=t-(w.precedance===a||m===w[c]?u:0)-(o===n?j/2:0);r?(y=F&&F.corner&&F.corner.precedance===c?v:0,B=(m===g?1:-1)*t-y,b[g]+=z>0?z:A>0?-A:0,b[g]=Math.max(-D.offset[g]+C.offset[g]+(y&&F.corner[a]===n?F.offset:0),l-B,Math.min(Math.max(-D.offset[g]+C.offset[g]+C[i],l+B),b[g]))):(f*=d===p?2:0,z>0&&(m!==g||A>0)?(b[g]-=B+f,I["invert"+a](g)):A>0&&(m!==h||z>0)&&(b[g]-=(m===n?-B:B)+f,I["invert"+a](h)),b[g]<s&&-b[g]>A&&(b[g]=l,I=e));return b[g]-l}var t=c.target,u=a.elements.tooltip,w=c.my,x=c.at,y=c.adjust,z=y.method.split(" "),A=z[0],B=z[1]||z[0],C=c.viewport,D=c.container,E=a.cache,F=a.plugins.tip,G={left:0,top:0},H,I,J;if(!C.jquery||t[0]===window||t[0]===document.body||y.method==="none")return G;H=u.css("position")==="fixed",C={elem:C,height:C[(C[0]===window?"h":"outerH")+"eight"](),width:C[(C[0]===window?"w":"outerW")+"idth"](),scrollleft:H?0:C.scrollLeft(),scrolltop:H?0:C.scrollTop(),offset:C.offset()||{left:0,top:0}},D={elem:D,scrollLeft:D.scrollLeft(),scrollTop:D.scrollTop(),offset:D.offset()||{left:0,top:0}};if(A!=="shift"||B!=="shift")I=w.clone();G={left:A!=="none"?K(f,g,A,y.x,k,m,h,d,r):0,top:B!=="none"?K(g,f,B,y.y,j,l,i,o,s):0},I&&E.lastClass!==(J=v+"-pos-"+I.abbrev())&&u.removeClass(a.cache.lastClass).addClass(a.cache.lastClass=J);return G},s.svg=function(b,c,d,e){var f=a(document),g=c[0],h={width:0,height:0,position:{top:1e10,left:1e10}},i,j,k,l,m;while(!g.getBBox)g=g.parentNode;if(g.getBBox&&g.parentNode){i=g.getBBox(),j=g.getScreenCTM(),k=g.farthestViewportElement||g;if(!k.createSVGPoint)return h;l=k.createSVGPoint(),l.x=i.x,l.y=i.y,m=l.matrixTransform(j),h.position.left=m.x,h.position.top=m.y,l.x+=i.width,l.y+=i.height,m=l.matrixTransform(j),h.width=m.x-h.position.left,h.height=m.y-h.position.top,h.position.left+=f.scrollLeft(),h.position.top+=f.scrollTop()}return h}})