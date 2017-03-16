/*
 JavaScript Cookie v2.1.3
 https://github.com/js-cookie/js-cookie

 Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 Released under the MIT license
*/
(function(v){"object"===typeof exports&&"undefined"!==typeof module?module.exports=v():"function"===typeof define&&define.amd?define([],v):("undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:this).SmartBanner=v()})(function(){return function g(k,h,f){function a(e,d){if(!h[e]){if(!k[e]){var c="function"==typeof require&&require;if(!d&&c)return c(e,!0);if(b)return b(e,!0);c=Error("Cannot find module '"+e+"'");throw c.code="MODULE_NOT_FOUND",c;}c=h[e]=
{exports:{}};k[e][0].call(c.exports,function(b){var d=k[e][1][b];return a(d?d:b)},c,c.exports,g,k,h,f)}return h[e].exports}for(var b="function"==typeof require&&require,d=0;d<f.length;d++)a(f[d]);return a}({1:[function(g,k,h){var f=g("xtend/mutable"),a=g("component-query"),b=g("get-doc"),d=g("js-cookie"),e=g("ua-parser-js");console.log("Cookies",d);var x=(navigator.language||navigator.userLanguage||navigator.browserLanguage).slice(-2)||"us",c=b&&b.documentElement,l={ios:{appMeta:"apple-itunes-app",
iconRels:["apple-touch-icon-precomposed","apple-touch-icon"],getStoreLink:function(){return"https://itunes.apple.com/"+this.options.appStoreLanguage+"/app/id"+this.appId}},android:{appMeta:"google-play-app",iconRels:["android-touch-icon","apple-touch-icon-precomposed","apple-touch-icon"],getStoreLink:function(){return"http://play.google.com/store/apps/details?id="+this.appId}},windows:{appMeta:"msApplication-ID",iconRels:["windows-touch-icon","apple-touch-icon-precomposed","apple-touch-icon"],getStoreLink:function(){return"http://www.windowsphone.com/s?appid="+
this.appId}}};g=function(b){var a=e(navigator.userAgent);this.options=f({},{daysHidden:15,daysReminder:90,appStoreLanguage:x,button:"OPEN",store:{ios:"On the App Store",android:"In Google Play",windows:"In the Windows Store"},price:{ios:"FREE",android:"FREE",windows:"FREE"},theme:"",icon:"",force:""},b||{});this.options.force?this.type=this.options.force:"Windows Phone"===a.os.name||"Windows Mobile"===a.os.name?this.type="windows":"iOS"===a.os.name?this.type="ios":"Android"===a.os.name&&(this.type=
"android");b=!this.type;var a="ios"===this.type&&"Mobile Safari"===a.browser.name&&6<=Number(a.os.version),m=navigator.standalone,r=d.get("smartbanner-closed"),n=d.get("smartbanner-installed");b||a||m||r||n||(f(this,l[this.type]),this.parseAppId()&&(this.create(),this.show()))};g.prototype={constructor:g,create:function(){var d=this.getStoreLink(),e=this.options.price[this.type]+" - "+this.options.store[this.type],m;if(this.options.icon)m=this.options.icon;else for(var r=0;r<this.iconRels.length;r++){var n=
a('link[rel="'+this.iconRels[r]+'"]');if(n){m=n.getAttribute("href");break}}var p=b.createElement("div");p.className="smartbanner smartbanner-"+(this.options.theme||this.type);p.innerHTML='<div class="smartbanner-container"><a href="javascript:void(0);" class="smartbanner-close">&times;</a><span class="smartbanner-icon" style="background-image: url('+m+')"></span><div class="smartbanner-info"><div class="smartbanner-title">'+this.options.title+"</div><div>"+this.options.author+"</div><span>"+e+'</span></div><a href="'+
d+'" class="smartbanner-button"><span class="smartbanner-button-text">'+this.options.button+"</span></a></div>";b.body?b.body.appendChild(p):b&&b.addEventListener("DOMContentLoaded",function(){b.body.appendChild(p)});a(".smartbanner-button",p).addEventListener("click",this.install.bind(this),!1);a(".smartbanner-close",p).addEventListener("click",this.close.bind(this),!1)},hide:function(){c.classList.remove("smartbanner-show")},show:function(){c.classList.add("smartbanner-show")},close:function(){this.hide();
console.log("Expire",new Date(Number(new Date)+864E5*this.options.daysHidden));try{d.set("sasha","true"),d.set("smartbanner-closed","true",{path:"/",expires:new Date(Number(new Date)+864E5*this.options.daysHidden)}),console.log("set")}catch(q){console.log("error",q)}},install:function(){this.hide();d.set("smartbanner-installed","true",{path:"/",expires:new Date(Number(new Date)+864E5*this.options.daysReminder)})},parseAppId:function(){var b=a('meta[name="'+this.appMeta+'"]');if(b)return this.appId=
"windows"===this.type?b.getAttribute("content"):/app-id=([^\s,]+)/.exec(b.getAttribute("content"))[1]}};k.exports=g},{"component-query":2,"get-doc":3,"js-cookie":5,"ua-parser-js":6,"xtend/mutable":7}],2:[function(g,k,h){function f(a,b){return b.querySelector(a)}h=k.exports=function(a,b){b=b||document;return f(a,b)};h.all=function(a,b){b=b||document;return b.querySelectorAll(a)};h.engine=function(a){if(!a.one)throw Error(".one callback required");if(!a.all)throw Error(".all callback required");f=a.one;
h.all=a.all;return h}},{}],3:[function(g,k,h){g=g("has-dom");k.exports=g()?document:null},{"has-dom":4}],4:[function(g,k,h){k.exports=function(){return"undefined"!==typeof window&&"undefined"!==typeof document&&"function"===typeof document.createElement}},{}],5:[function(g,k,h){(function(f){var a=!1;"object"===typeof h&&(k.exports=f(),a=!0);if(!a){var b=window.Cookies,d=window.Cookies=f();d.noConflict=function(){window.Cookies=b;return d}}})(function(){function f(){for(var b=0,a={};b<arguments.length;b++){var e=
arguments[b],f;for(f in e)a[f]=e[f]}return a}function a(b){function d(a,g,c){var e;if("undefined"!==typeof document){if(1<arguments.length){c=f({path:"/"},d.defaults,c);if("number"===typeof c.expires){var k=new Date;k.setMilliseconds(k.getMilliseconds()+864E5*c.expires);c.expires=k}try{e=JSON.stringify(g),/^[\{\[]/.test(e)&&(g=e)}catch(w){}g=b.write?b.write(g,a):encodeURIComponent(String(g)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent);a=encodeURIComponent(String(a));
a=a.replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent);a=a.replace(/[\(\)]/g,escape);return document.cookie=[a,"=",g,c.expires?"; expires="+c.expires.toUTCString():"",c.path?"; path="+c.path:"",c.domain?"; domain="+c.domain:"",c.secure?"; secure":""].join("")}a||(e={});for(var k=document.cookie?document.cookie.split("; "):[],h=/(%[0-9A-Z]{2})+/g,m=0;m<k.length;m++){var r=k[m].split("="),n=r.slice(1).join("=");'"'===n.charAt(0)&&(n=n.slice(1,-1));try{var p=r[0].replace(h,decodeURIComponent),n=
b.read?b.read(n,p):b(n,p)||n.replace(h,decodeURIComponent);if(this.json)try{n=JSON.parse(n)}catch(w){}if(a===p){e=n;break}a||(e[p]=n)}catch(w){}}return e}}d.set=d;d.get=function(a){return d.call(d,a)};d.getJSON=function(){return d.apply({json:!0},[].slice.call(arguments))};d.defaults={};d.remove=function(a,b){d(a,"",f(b,{expires:-1}))};d.withConverter=a;return d}return a(function(){})})},{}],6:[function(g,k,h){(function(f,a){var b={extend:function(a,b){var d={},m;for(m in a)d[m]=b[m]&&0===b[m].length%
2?b[m].concat(a[m]):a[m];return d},has:function(a,b){return"string"===typeof a?-1!==b.toLowerCase().indexOf(a.toLowerCase()):!1},lowerize:function(a){return a.toLowerCase()},major:function(b){return"string"===typeof b?b.replace(/[^\d\.]/g,"").split(".")[0]:a},trim:function(a){return a.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")}},d=function(){for(var b,d=0,e,g,f,c,k,h,l=arguments;d<l.length&&!k;){var q=l[d],t=l[d+1];if("undefined"===typeof b)for(f in b={},t)t.hasOwnProperty(f)&&(c=t[f],"object"===
typeof c?b[c[0]]=a:b[c]=a);for(e=g=0;e<q.length&&!k;)if(k=q[e++].exec(this.getUA()))for(f=0;f<t.length;f++)h=k[++g],c=t[f],"object"===typeof c&&0<c.length?2==c.length?b[c[0]]="function"==typeof c[1]?c[1].call(this,h):c[1]:3==c.length?b[c[0]]="function"!==typeof c[1]||c[1].exec&&c[1].test?h?h.replace(c[1],c[2]):a:h?c[1].call(this,h,c[2]):a:4==c.length&&(b[c[0]]=h?c[3].call(this,h.replace(c[1],c[2])):a):b[c]=h?h:a;d+=2}return b},e=function(c,d){for(var e in d)if("object"===typeof d[e]&&0<d[e].length)for(var f=
0;f<d[e].length;f++){if(b.has(d[e][f],c))return"?"===e?a:e}else if(b.has(d[e],c))return"?"===e?a:e;return c},g={ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2E3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2","8.1":"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"},c={browser:[[/(opera\smini)\/([\w\.-]+)/i,/(opera\s[mobiletab]+).+version\/([\w\.-]+)/i,/(opera).+version\/([\w\.]+)/i,/(opera)[\/\s]+([\w\.]+)/i],["name","version"],[/(opios)[\/\s]+([\w\.]+)/i],[["name","Opera Mini"],"version"],
[/\s(opr)\/([\w\.]+)/i],[["name","Opera"],"version"],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]+)*/i,/(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i,/(?:ms|\()(ie)\s([\w\.]+)/i,/(rekonq)\/([\w\.]+)*/i,/(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs)\/([\w\.-]+)/i],["name","version"],[/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],[["name","IE"],"version"],[/(edge)\/((\d+)?[\w\.]+)/i],["name","version"],
[/(yabrowser)\/([\w\.]+)/i],[["name","Yandex"],"version"],[/(comodo_dragon)\/([\w\.]+)/i],[["name",/_/g," "],"version"],[/(micromessenger)\/([\w\.]+)/i],[["name","WeChat"],"version"],[/xiaomi\/miuibrowser\/([\w\.]+)/i],["version",["name","MIUI Browser"]],[/\swv\).+(chrome)\/([\w\.]+)/i],[["name",/(.+)/,"$1 WebView"],"version"],[/android.+samsungbrowser\/([\w\.]+)/i,/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i],["version",["name","Android Browser"]],[/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i,
/(qqbrowser)[\/\s]?([\w\.]+)/i],["name","version"],[/(uc\s?browser)[\/\s]?([\w\.]+)/i,/ucweb.+(ucbrowser)[\/\s]?([\w\.]+)/i,/juc.+(ucweb)[\/\s]?([\w\.]+)/i],[["name","UCBrowser"],"version"],[/(dolfin)\/([\w\.]+)/i],[["name","Dolphin"],"version"],[/((?:android.+)crmo|crios)\/([\w\.]+)/i],[["name","Chrome"],"version"],[/;fbav\/([\w\.]+);/i],["version",["name","Facebook"]],[/fxios\/([\w\.-]+)/i],["version",["name","Firefox"]],[/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],["version",["name","Mobile Safari"]],
[/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],["version","name"],[/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],["name",["version",e,{"1.0":"/8","1.2":"/1","1.3":"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}]],[/(konqueror)\/([\w\.]+)/i,/(webkit|khtml)\/([\w\.]+)/i],["name","version"],[/(navigator|netscape)\/([\w\.-]+)/i],[["name","Netscape"],"version"],[/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,
/(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix)\/([\w\.-]+)/i,/(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,/(links)\s\(([\w\.]+)/i,/(gobrowser)\/?([\w\.]+)*/i,/(ice\s?browser)\/v?([\w\._]+)/i,/(mosaic)[\/\s]([\w\.]+)/i],["name","version"]],cpu:[[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],[["architecture","amd64"]],[/(ia32(?=;))/i],[["architecture",b.lowerize]],[/((?:i[346]|x)86)[;\)]/i],[["architecture",
"ia32"]],[/windows\s(ce|mobile);\sppc;/i],[["architecture","arm"]],[/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],[["architecture",/ower/,"",b.lowerize]],[/(sun4\w)[;\)]/i],[["architecture","sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],[["architecture",b.lowerize]]],device:[[/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i],["model","vendor",["type","tablet"]],[/applecoremedia\/[\w\.]+ \((ipad)/],["model",["vendor","Apple"],["type",
"tablet"]],[/(apple\s{0,1}tv)/i],[["model","Apple TV"],["vendor","Apple"]],[/(archos)\s(gamepad2?)/i,/(hp).+(touchpad)/i,/(hp).+(tablet)/i,/(kindle)\/([\w\.]+)/i,/\s(nook)[\w\s]+build\/(\w+)/i,/(dell)\s(strea[kpr\s\d]*[\dko])/i],["vendor","model",["type","tablet"]],[/(kf[A-z]+)\sbuild\/[\w\.]+.*silk\//i],["model",["vendor","Amazon"],["type","tablet"]],[/(sd|kf)[0349hijorstuw]+\sbuild\/[\w\.]+.*silk\//i],[["model",e,{"Fire Phone":["SD","KF"]}],["vendor","Amazon"],["type","mobile"]],[/\((ip[honed|\s\w*]+);.+(apple)/i],
["model","vendor",["type","mobile"]],[/\((ip[honed|\s\w*]+);/i],["model",["vendor","Apple"],["type","mobile"]],[/(blackberry)[\s-]?(\w+)/i,/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|huawei|meizu|motorola|polytron)[\s_-]?([\w-]+)*/i,/(hp)\s([\w\s]+\w)/i,/(asus)-?(\w+)/i],["vendor","model",["type","mobile"]],[/\(bb10;\s(\w+)/i],["model",["vendor","BlackBerry"],["type","mobile"]],[/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone)/i],["model",["vendor","Asus"],["type",
"tablet"]],[/(sony)\s(tablet\s[ps])\sbuild\//i,/(sony)?(?:sgp.+)\sbuild\//i],[["vendor","Sony"],["model","Xperia Tablet"],["type","tablet"]],[/(?:sony)?(?:(?:(?:c|d)\d{4})|(?:so[-l].+))\sbuild\//i],[["vendor","Sony"],["model","Xperia Phone"],["type","mobile"]],[/\s(ouya)\s/i,/(nintendo)\s([wids3u]+)/i],["vendor","model",["type","console"]],[/android.+;\s(shield)\sbuild/i],["model",["vendor","Nvidia"],["type","console"]],[/(playstation\s[34portablevi]+)/i],["model",["vendor","Sony"],["type","console"]],
[/(sprint\s(\w+))/i],[["vendor",e,{HTC:"APA",Sprint:"Sprint"}],["model",e,{"Evo Shift 4G":"7373KT"}],["type","mobile"]],[/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i],["vendor","model",["type","tablet"]],[/(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i,/(zte)-(\w+)*/i,/(alcatel|geeksphone|huawei|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]+)*/i],["vendor",["model",/_/g," "],["type","mobile"]],[/(nexus\s9)/i],["model",["vendor","HTC"],["type","tablet"]],[/(nexus\s6p)/i],["model",["vendor","Huawei"],["type",
"mobile"]],[/(microsoft);\s(lumia[\s\w]+)/i],["vendor","model",["type","mobile"]],[/[\s\(;](xbox(?:\sone)?)[\s\);]/i],["model",["vendor","Microsoft"],["type","console"]],[/(kin\.[onetw]{3})/i],[["model",/\./g," "],["vendor","Microsoft"],["type","mobile"]],[/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?(:?\s4g)?)[\w\s]+build\//i,/mot[\s-]?(\w+)*/i,/(XT\d{3,4}) build\//i,/(nexus\s6)/i],["model",["vendor","Motorola"],["type","mobile"]],[/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],["model",
["vendor","Motorola"],["type","tablet"]],[/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],[["vendor",b.trim],["model",b.trim],["type","smarttv"]],[/hbbtv.+maple;(\d+)/i],[["model",/^/,"SmartTV"],["vendor","Samsung"],["type","smarttv"]],[/\(dtv[\);].+(aquos)/i],["model",["vendor","Sharp"],["type","smarttv"]],[/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i,/((SM-T\w+))/i],[["vendor","Samsung"],"model",["type","tablet"]],[/smart-tv.+(samsung)/i],["vendor",["type",
"smarttv"],"model"],[/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i,/(sam[sung]*)[\s-]*(\w+-?[\w-]*)*/i,/sec-((sgh\w+))/i],[["vendor","Samsung"],"model",["type","mobile"]],[/sie-(\w+)*/i],["model",["vendor","Siemens"],["type","mobile"]],[/(maemo|nokia).*(n900|lumia\s\d+)/i,/(nokia)[\s_-]?([\w-]+)*/i],[["vendor","Nokia"],"model",["type","mobile"]],[/android\s3\.[\s\w;-]{10}(a\d{3})/i],["model",["vendor","Acer"],["type","tablet"]],[/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],[["vendor","LG"],
"model",["type","tablet"]],[/(lg) netcast\.tv/i],["vendor","model",["type","smarttv"]],[/(nexus\s[45])/i,/lg[e;\s\/-]+(\w+)*/i],["model",["vendor","LG"],["type","mobile"]],[/android.+(ideatab[a-z0-9\-\s]+)/i],["model",["vendor","Lenovo"],["type","tablet"]],[/linux;.+((jolla));/i],["vendor","model",["type","mobile"]],[/((pebble))app\/[\d\.]+\s/i],["vendor","model",["type","wearable"]],[/android.+;\s(glass)\s\d/i],["model",["vendor","Google"],["type","wearable"]],[/android.+(\w+)\s+build\/hm\1/i,/android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i,
/android.+(mi[\s\-_]*(?:one|one[\s_]plus|note lte)?[\s_]*(?:\d\w)?)\s+build/i],[["model",/_/g," "],["vendor","Xiaomi"],["type","mobile"]],[/android.+a000(1)\s+build/i],["model",["vendor","OnePlus"],["type","mobile"]],[/\s(tablet)[;\/]/i,/\s(mobile)(?:[;\/]|\ssafari)/i],[["type",b.lowerize],"vendor","model"]],engine:[[/windows.+\sedge\/([\w\.]+)/i],["version",["name","EdgeHTML"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i,/(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,
/(icab)[\/\s]([23]\.[\d\.]+)/i],["name","version"],[/rv\:([\w\.]+).*(gecko)/i],["version","name"]],os:[[/microsoft\s(windows)\s(vista|xp)/i],["name","version"],[/(windows)\snt\s6\.2;\s(arm)/i,/(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s]+\w)*/i,/(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],["name",["version",e,g]],[/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],[["name","Windows"],["version",e,g]],[/\((bb)(10);/i],[["name","BlackBerry"],"version"],[/(blackberry)\w*\/?([\w\.]+)*/i,/(tizen)[\/\s]([\w\.]+)/i,
/(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]+)*/i,/linux;.+(sailfish);/i],["name","version"],[/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i],[["name","Symbian"],"version"],[/\((series40);/i],["name"],[/mozilla.+\(mobile;.+gecko.+firefox/i],[["name","Firefox OS"],"version"],[/(nintendo|playstation)\s([wids34portablevu]+)/i,/(mint)[\/\s\(]?(\w+)*/i,/(mageia|vectorlinux)[;\s]/i,/(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]+)*/i,
/(hurd|linux)\s?([\w\.]+)*/i,/(gnu)\s?([\w\.]+)*/i],["name","version"],[/(cros)\s[\w]+\s([\w\.]+\w)/i],[["name","Chromium OS"],"version"],[/(sunos)\s?([\w\.]+\d)*/i],[["name","Solaris"],"version"],[/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i],["name","version"],[/(haiku)\s(\w+)/i],["name","version"],[/(ip[honead]+)(?:.*os\s([\w]+)*\slike\smac|;\sopera)/i],[["name","iOS"],["version",/_/g,"."]],[/(mac\sos\sx)\s?([\w\s\.]+\w)*/i,/(macintosh|mac(?=_powerpc)\s)/i],[["name","Mac OS"],["version",/_/g,
"."]],[/((?:open)?solaris)[\/\s-]?([\w\.]+)*/i,/(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i,/(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i,/(unix)\s?([\w\.]+)*/i],["name","version"]]},l=function(a,e){if(!(this instanceof l))return(new l(a,e)).getResult();var h=a||(f&&f.navigator&&f.navigator.userAgent?f.navigator.userAgent:""),g=e?b.extend(c,e):c;this.getBrowser=function(){var a=d.apply(this,g.browser);a.major=b.major(a.version);return a};this.getCPU=function(){return d.apply(this,g.cpu)};
this.getDevice=function(){return d.apply(this,g.device)};this.getEngine=function(){return d.apply(this,g.engine)};this.getOS=function(){return d.apply(this,g.os)};this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}};this.getUA=function(){return h};this.setUA=function(a){h=a;return this};return this};l.VERSION="0.7.12";l.BROWSER={NAME:"name",MAJOR:"major",VERSION:"version"};l.CPU={ARCHITECTURE:"architecture"};
l.DEVICE={MODEL:"model",VENDOR:"vendor",TYPE:"type",CONSOLE:"console",MOBILE:"mobile",SMARTTV:"smarttv",TABLET:"tablet",WEARABLE:"wearable",EMBEDDED:"embedded"};l.ENGINE={NAME:"name",VERSION:"version"};l.OS={NAME:"name",VERSION:"version"};"undefined"!==typeof h?("undefined"!==typeof k&&k.exports&&(h=k.exports=l),h.UAParser=l):f.UAParser=l;var q=f.jQuery||f.Zepto;if("undefined"!==typeof q){var u=new l;q.ua=u.getResult();q.ua.get=function(){return u.getUA()};q.ua.set=function(a){u.setUA(a);a=u.getResult();
for(var b in a)q.ua[b]=a[b]}}})("object"===typeof window?window:this)},{}],7:[function(g,k,h){k.exports=function(a){for(var b=1;b<arguments.length;b++){var d=arguments[b],e;for(e in d)f.call(d,e)&&(a[e]=d[e])}return a};var f=Object.prototype.hasOwnProperty},{}]},{},[1])(1)});
