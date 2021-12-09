"use strict"
define("hello-world/adapters/-json-api",["exports","@ember-data/adapter/json-api"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("hello-world/app",["exports","@ember/application","ember-resolver","ember-load-initializers","hello-world/config/environment"],(function(e,t,r,l,o){function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
class i extends t.default{constructor(){super(...arguments),n(this,"modulePrefix",o.default.modulePrefix),n(this,"podModulePrefix",o.default.podModulePrefix),n(this,"Resolver",r.default)}}e.default=i,(0,l.default)(i,o.default.modulePrefix)})),define("hello-world/component-managers/glimmer",["exports","@glimmer/component/-private/ember-component-manager"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("hello-world/data-adapter",["exports","@ember-data/debug"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("hello-world/helpers/app-version",["exports","@ember/component/helper","hello-world/config/environment","ember-cli-app-version/utils/regexp"],(function(e,t,r,l){function o(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
const o=r.default.APP.version
let n=t.versionOnly||t.hideSha,i=t.shaOnly||t.hideVersion,a=null
return n&&(t.showExtended&&(a=o.match(l.versionExtendedRegExp)),a||(a=o.match(l.versionRegExp))),i&&(a=o.match(l.shaRegExp)),a?a[0]:o}Object.defineProperty(e,"__esModule",{value:!0}),e.appVersion=o,e.default=void 0
var n=(0,t.helper)(o)
e.default=n})),define("hello-world/helpers/page-title",["exports","ember-page-title/helpers/page-title"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r=t.default
e.default=r})),define("hello-world/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r=t.default
e.default=r})),define("hello-world/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r=t.default
e.default=r})),define("hello-world/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","hello-world/config/environment"],(function(e,t,r){let l,o
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,r.default.APP&&(l=r.default.APP.name,o=r.default.APP.version)
var n={name:"App Version",initialize:(0,t.default)(l,o)}
e.default=n})),define("hello-world/initializers/container-debug-adapter",["exports","ember-resolver/resolvers/classic/container-debug-adapter"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r={name:"container-debug-adapter",initialize(){(arguments[1]||arguments[0]).register("container-debug-adapter:main",t.default)}}
e.default=r})),define("hello-world/initializers/ember-data-data-adapter",["exports","@ember-data/debug/setup"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("hello-world/initializers/ember-data",["exports","ember-data","ember-data/setup-container"],(function(e,t,r){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var l={name:"ember-data",initialize:r.default}
e.default=l})),define("hello-world/initializers/export-application-global",["exports","ember","hello-world/config/environment"],(function(e,t,r){function l(){var e=arguments[1]||arguments[0]
if(!1!==r.default.exportApplicationGlobal){var l
if("undefined"!=typeof window)l=window
else if("undefined"!=typeof global)l=global
else{if("undefined"==typeof self)return
l=self}var o,n=r.default.exportApplicationGlobal
o="string"==typeof n?n:t.default.String.classify(r.default.modulePrefix),l[o]||(l[o]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete l[o]}}))}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,e.initialize=l
var o={name:"export-application-global",initialize:l}
e.default=o})),define("hello-world/instance-initializers/ember-data",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t={name:"ember-data",initialize(){}}
e.default=t})),define("hello-world/router",["exports","@ember/routing/router","hello-world/config/environment"],(function(e,t,r){function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
class o extends t.default{constructor(){super(...arguments),l(this,"location",r.default.locationType),l(this,"rootURL",r.default.rootURL)}}e.default=o,o.map((function(){this.route("hello-world")}))})),define("hello-world/routes/hello-world",["exports","@ember/routing/route"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
class r extends t.default{}e.default=r})),define("hello-world/routes/index",["exports","@ember/routing/route"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r=t.default.extend({beforeModel(){this.transitionTo("hello-world")}})
e.default=r})),define("hello-world/serializers/-default",["exports","@ember-data/serializer/json"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("hello-world/serializers/-json-api",["exports","@ember-data/serializer/json-api"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("hello-world/serializers/-rest",["exports","@ember-data/serializer/rest"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("hello-world/services/page-title-list",["exports","ember-page-title/services/page-title-list"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("hello-world/services/page-title",["exports","ember-page-title/services/page-title"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("hello-world/services/store",["exports","ember-data/store"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("hello-world/templates/application",["exports","@ember/template-factory"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r=(0,t.createTemplateFactory)({id:"nBxJE8pO",block:'[[[46,[28,[37,1],null,null],null,null,null]],[],false,["component","-outlet"]]',moduleName:"hello-world/templates/application.hbs",isStrictMode:!1})
e.default=r})),define("hello-world/templates/hello-world",["exports","@ember/template-factory"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r=(0,t.createTemplateFactory)({id:"QgmDExDV",block:'[[[10,"h1"],[12],[1,"Hello World"],[13]],[],false,[]]',moduleName:"hello-world/templates/hello-world.hbs",isStrictMode:!1})
e.default=r})),define("hello-world/transforms/boolean",["exports","@ember-data/serializer/-private"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.BooleanTransform}})})),define("hello-world/transforms/date",["exports","@ember-data/serializer/-private"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.DateTransform}})})),define("hello-world/transforms/number",["exports","@ember-data/serializer/-private"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.NumberTransform}})})),define("hello-world/transforms/string",["exports","@ember-data/serializer/-private"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.StringTransform}})})),define("hello-world/config/environment",[],(function(){try{var e="hello-world/config/environment",t=document.querySelector('meta[name="'+e+'"]').getAttribute("content"),r={default:JSON.parse(decodeURIComponent(t))}
return Object.defineProperty(r,"__esModule",{value:!0}),r}catch(l){throw new Error('Could not read config from meta tag with name "'+e+'".')}}))
runningTests||require("hello-world/app").default.create({name:"hello-world",version:"0.0.0+b427e8fd"})
