var __TAURI_IIFE__=(()=>{var P=Object.defineProperty;var le=Object.getOwnPropertyDescriptor;var ue=Object.getOwnPropertyNames,B=Object.getOwnPropertySymbols;var te=Object.prototype.hasOwnProperty,me=Object.prototype.propertyIsEnumerable;var ee=(i,e,t)=>e in i?P(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t,m=(i,e)=>{for(var t in e||(e={}))te.call(e,t)&&ee(i,t,e[t]);if(B)for(var t of B(e))me.call(e,t)&&ee(i,t,e[t]);return i};var u=(i,e)=>{for(var t in e)P(i,t,{get:e[t],enumerable:!0})},de=(i,e,t,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of ue(e))!te.call(i,s)&&s!==t&&P(i,s,{get:()=>e[s],enumerable:!(r=le(e,s))||r.enumerable});return i};var ce=i=>de(P({},"__esModule",{value:!0}),i);var zt={};u(zt,{app:()=>U,cli:()=>D,clipboard:()=>z,dialog:()=>L,event:()=>I,fs:()=>H,globalShortcut:()=>j,http:()=>V,notification:()=>G,os:()=>Z,path:()=>$,process:()=>J,shell:()=>K,tauri:()=>W,updater:()=>Q,window:()=>Y});var U={};u(U,{getName:()=>ye,getTauriVersion:()=>fe,getVersion:()=>he});var W={};u(W,{convertFileSrc:()=>pe,invoke:()=>R,transformCallback:()=>d});function ge(){return window.crypto.getRandomValues(new Uint32Array(1))[0]}function d(i,e=!1){let t=ge(),r=`_${t}`;return Object.defineProperty(window,r,{value:s=>(e&&Reflect.deleteProperty(window,r),i==null?void 0:i(s)),writable:!1,configurable:!0}),t}async function R(i,e={}){return new Promise((t,r)=>{let s=d(l=>{t(l),Reflect.deleteProperty(window,`_${o}`)},!0),o=d(l=>{r(l),Reflect.deleteProperty(window,`_${s}`)},!0);window.__TAURI_IPC__(m({cmd:i,callback:s,error:o},e))})}function pe(i,e="asset"){let t=encodeURIComponent(i);return navigator.userAgent.includes("Windows")?`https://${e}.localhost/${t}`:`${e}://${t}`}async function n(i){return R("tauri",i)}async function he(){return n({__tauriModule:"App",message:{cmd:"getAppVersion"}})}async function ye(){return n({__tauriModule:"App",message:{cmd:"getAppName"}})}async function fe(){return n({__tauriModule:"App",message:{cmd:"getTauriVersion"}})}var D={};u(D,{getMatches:()=>be});async function be(){return n({__tauriModule:"Cli",message:{cmd:"cliMatches"}})}var z={};u(z,{readText:()=>Pe,writeText:()=>_e});async function _e(i){return n({__tauriModule:"Clipboard",message:{cmd:"writeText",data:i}})}async function Pe(){return n({__tauriModule:"Clipboard",message:{cmd:"readText",data:null}})}var L={};u(L,{ask:()=>Te,confirm:()=>Oe,message:()=>Me,open:()=>we,save:()=>ve});async function we(i={}){return typeof i=="object"&&Object.freeze(i),n({__tauriModule:"Dialog",message:{cmd:"openDialog",options:i}})}async function ve(i={}){return typeof i=="object"&&Object.freeze(i),n({__tauriModule:"Dialog",message:{cmd:"saveDialog",options:i}})}async function Me(i,e){let t=typeof e=="string"?{title:e}:e;return n({__tauriModule:"Dialog",message:{cmd:"messageDialog",message:i,title:t==null?void 0:t.title,type:t==null?void 0:t.type}})}async function Te(i,e){let t=typeof e=="string"?{title:e}:e;return n({__tauriModule:"Dialog",message:{cmd:"askDialog",message:i,title:t==null?void 0:t.title,type:t==null?void 0:t.type}})}async function Oe(i,e){let t=typeof e=="string"?{title:e}:e;return n({__tauriModule:"Dialog",message:{cmd:"confirmDialog",message:i,title:t==null?void 0:t.title,type:t==null?void 0:t.type}})}var I={};u(I,{emit:()=>T,listen:()=>M,once:()=>N});async function ie(i,e){return n({__tauriModule:"Event",message:{cmd:"unlisten",event:i,eventId:e}})}async function w(i,e,t){await n({__tauriModule:"Event",message:{cmd:"emit",event:i,windowLabel:e,payload:typeof t=="string"?t:JSON.stringify(t)}})}async function h(i,e,t){return n({__tauriModule:"Event",message:{cmd:"listen",event:i,windowLabel:e,handler:d(t)}}).then(r=>async()=>ie(i,r))}async function v(i,e,t){return h(i,e,r=>{t(r),ie(i,r.id).catch(()=>{})})}async function M(i,e){return h(i,null,e)}async function N(i,e){return v(i,null,e)}async function T(i,e){return w(i,void 0,e)}var H={};u(H,{BaseDirectory:()=>O,Dir:()=>O,copyFile:()=>We,createDir:()=>ke,readBinaryFile:()=>Ce,readDir:()=>Se,readTextFile:()=>xe,removeDir:()=>Re,removeFile:()=>Ue,renameFile:()=>De,writeBinaryFile:()=>Ae,writeFile:()=>Ee,writeTextFile:()=>Ee});var O=(a=>(a[a.Audio=1]="Audio",a[a.Cache=2]="Cache",a[a.Config=3]="Config",a[a.Data=4]="Data",a[a.LocalData=5]="LocalData",a[a.Desktop=6]="Desktop",a[a.Document=7]="Document",a[a.Download=8]="Download",a[a.Executable=9]="Executable",a[a.Font=10]="Font",a[a.Home=11]="Home",a[a.Picture=12]="Picture",a[a.Public=13]="Public",a[a.Runtime=14]="Runtime",a[a.Template=15]="Template",a[a.Video=16]="Video",a[a.Resource=17]="Resource",a[a.App=18]="App",a[a.Log=19]="Log",a[a.Temp=20]="Temp",a))(O||{});async function xe(i,e={}){return n({__tauriModule:"Fs",message:{cmd:"readTextFile",path:i,options:e}})}async function Ce(i,e={}){let t=await n({__tauriModule:"Fs",message:{cmd:"readFile",path:i,options:e}});return Uint8Array.from(t)}async function Ee(i,e,t){typeof t=="object"&&Object.freeze(t),typeof i=="object"&&Object.freeze(i);let r={path:"",contents:""},s=t;return typeof i=="string"?r.path=i:(r.path=i.path,r.contents=i.contents),typeof e=="string"?r.contents=e??"":s=e,n({__tauriModule:"Fs",message:{cmd:"writeFile",path:r.path,contents:Array.from(new TextEncoder().encode(r.contents)),options:s}})}async function Ae(i,e,t){typeof t=="object"&&Object.freeze(t),typeof i=="object"&&Object.freeze(i);let r={path:"",contents:[]},s=t;return typeof i=="string"?r.path=i:(r.path=i.path,r.contents=i.contents),e&&"dir"in e?s=e:r.contents=e??[],n({__tauriModule:"Fs",message:{cmd:"writeFile",path:r.path,contents:Array.from(r.contents),options:s}})}async function Se(i,e={}){return n({__tauriModule:"Fs",message:{cmd:"readDir",path:i,options:e}})}async function ke(i,e={}){return n({__tauriModule:"Fs",message:{cmd:"createDir",path:i,options:e}})}async function Re(i,e={}){return n({__tauriModule:"Fs",message:{cmd:"removeDir",path:i,options:e}})}async function We(i,e,t={}){return n({__tauriModule:"Fs",message:{cmd:"copyFile",source:i,destination:e,options:t}})}async function Ue(i,e={}){return n({__tauriModule:"Fs",message:{cmd:"removeFile",path:i,options:e}})}async function De(i,e,t={}){return n({__tauriModule:"Fs",message:{cmd:"renameFile",oldPath:i,newPath:e,options:t}})}var j={};u(j,{isRegistered:()=>Ne,register:()=>ze,registerAll:()=>Le,unregister:()=>Ie,unregisterAll:()=>He});async function ze(i,e){return n({__tauriModule:"GlobalShortcut",message:{cmd:"register",shortcut:i,handler:d(e)}})}async function Le(i,e){return n({__tauriModule:"GlobalShortcut",message:{cmd:"registerAll",shortcuts:i,handler:d(e)}})}async function Ne(i){return n({__tauriModule:"GlobalShortcut",message:{cmd:"isRegistered",shortcut:i}})}async function Ie(i){return n({__tauriModule:"GlobalShortcut",message:{cmd:"unregister",shortcut:i}})}async function He(){return n({__tauriModule:"GlobalShortcut",message:{cmd:"unregisterAll"}})}var V={};u(V,{Body:()=>g,Client:()=>x,Response:()=>F,ResponseType:()=>ne,fetch:()=>je,getClient:()=>re});var ne=(r=>(r[r.JSON=1]="JSON",r[r.Text=2]="Text",r[r.Binary=3]="Binary",r))(ne||{}),g=class{constructor(e,t){this.type=e,this.payload=t}static form(e){let t={};for(let r in e){let s=e[r],o;typeof s=="string"?o=s:s instanceof Uint8Array||Array.isArray(s)?o=Array.from(s):typeof s.value=="string"?o={value:s.value,mime:s.mime,fileName:s.fileName}:o={value:Array.from(s.value),mime:s.mime,fileName:s.fileName},t[r]=o}return new g("Form",t)}static json(e){return new g("Json",e)}static text(e){return new g("Text",e)}static bytes(e){return new g("Bytes",Array.from(e))}},F=class{constructor(e){this.url=e.url,this.status=e.status,this.ok=this.status>=200&&this.status<300,this.headers=e.headers,this.rawHeaders=e.rawHeaders,this.data=e.data}},x=class{constructor(e){this.id=e}async drop(){return n({__tauriModule:"Http",message:{cmd:"dropClient",client:this.id}})}async request(e){let t=!e.responseType||e.responseType===1;return t&&(e.responseType=2),n({__tauriModule:"Http",message:{cmd:"httpRequest",client:this.id,options:e}}).then(r=>{let s=new F(r);if(t){try{s.data=JSON.parse(s.data)}catch(o){if(s.ok&&s.data==="")s.data={};else if(s.ok)throw Error(`Failed to parse response \`${s.data}\` as JSON: ${o};
              try setting the \`responseType\` option to \`ResponseType.Text\` or \`ResponseType.Binary\` if the API does not return a JSON response.`)}return s}return s})}async get(e,t){return this.request(m({method:"GET",url:e},t))}async post(e,t,r){return this.request(m({method:"POST",url:e,body:t},r))}async put(e,t,r){return this.request(m({method:"PUT",url:e,body:t},r))}async patch(e,t){return this.request(m({method:"PATCH",url:e},t))}async delete(e,t){return this.request(m({method:"DELETE",url:e},t))}};async function re(i){return n({__tauriModule:"Http",message:{cmd:"createClient",options:i}}).then(e=>new x(e))}var q=null;async function je(i,e){return q===null&&(q=await re()),q.request(m({url:i,method:(e==null?void 0:e.method)??"GET"},e))}var G={};u(G,{isPermissionGranted:()=>qe,requestPermission:()=>Ve,sendNotification:()=>Ge});async function qe(){return window.Notification.permission!=="default"?Promise.resolve(window.Notification.permission==="granted"):n({__tauriModule:"Notification",message:{cmd:"isNotificationPermissionGranted"}})}async function Ve(){return window.Notification.requestPermission()}function Ge(i){typeof i=="string"?new window.Notification(i):new window.Notification(i.title,i)}var $={};u($,{BaseDirectory:()=>O,appDir:()=>$e,audioDir:()=>Je,basename:()=>_t,cacheDir:()=>Ke,configDir:()=>Qe,dataDir:()=>Xe,delimiter:()=>gt,desktopDir:()=>Ye,dirname:()=>ft,documentDir:()=>Ze,downloadDir:()=>Be,executableDir:()=>et,extname:()=>bt,fontDir:()=>tt,homeDir:()=>it,isAbsolute:()=>Pt,join:()=>yt,localDataDir:()=>nt,logDir:()=>dt,normalize:()=>ht,pictureDir:()=>rt,publicDir:()=>st,resolve:()=>pt,resolveResource:()=>ot,resourceDir:()=>at,runtimeDir:()=>lt,sep:()=>ct,templateDir:()=>ut,videoDir:()=>mt});function y(){return navigator.appVersion.includes("Win")}async function $e(){return n({__tauriModule:"Path",message:{cmd:"resolvePath",path:"",directory:18}})}async function Je(){return n({__tauriModule:"Path",message:{cmd:"resolvePath",path:"",directory:1}})}async function Ke(){return n({__tauriModule:"Path",message:{cmd:"resolvePath",path:"",directory:2}})}async function Qe(){return n({__tauriModule:"Path",message:{cmd:"resolvePath",path:"",directory:3}})}async function Xe(){return n({__tauriModule:"Path",message:{cmd:"resolvePath",path:"",directory:4}})}async function Ye(){return n({__tauriModule:"Path",message:{cmd:"resolvePath",path:"",directory:6}})}async function Ze(){return n({__tauriModule:"Path",message:{cmd:"resolvePath",path:"",directory:7}})}async function Be(){return n({__tauriModule:"Path",message:{cmd:"resolvePath",path:"",directory:8}})}async function et(){return n({__tauriModule:"Path",message:{cmd:"resolvePath",path:"",directory:9}})}async function tt(){return n({__tauriModule:"Path",message:{cmd:"resolvePath",path:"",directory:10}})}async function it(){return n({__tauriModule:"Path",message:{cmd:"resolvePath",path:"",directory:11}})}async function nt(){return n({__tauriModule:"Path",message:{cmd:"resolvePath",path:"",directory:5}})}async function rt(){return n({__tauriModule:"Path",message:{cmd:"resolvePath",path:"",directory:12}})}async function st(){return n({__tauriModule:"Path",message:{cmd:"resolvePath",path:"",directory:13}})}async function at(){return n({__tauriModule:"Path",message:{cmd:"resolvePath",path:"",directory:17}})}async function ot(i){return n({__tauriModule:"Path",message:{cmd:"resolvePath",path:i,directory:17}})}async function lt(){return n({__tauriModule:"Path",message:{cmd:"resolvePath",path:"",directory:14}})}async function ut(){return n({__tauriModule:"Path",message:{cmd:"resolvePath",path:"",directory:15}})}async function mt(){return n({__tauriModule:"Path",message:{cmd:"resolvePath",path:"",directory:16}})}async function dt(){return n({__tauriModule:"Path",message:{cmd:"resolvePath",path:"",directory:19}})}var ct=y()?"\\":"/",gt=y()?";":":";async function pt(...i){return n({__tauriModule:"Path",message:{cmd:"resolve",paths:i}})}async function ht(i){return n({__tauriModule:"Path",message:{cmd:"normalize",path:i}})}async function yt(...i){return n({__tauriModule:"Path",message:{cmd:"join",paths:i}})}async function ft(i){return n({__tauriModule:"Path",message:{cmd:"dirname",path:i}})}async function bt(i){return n({__tauriModule:"Path",message:{cmd:"extname",path:i}})}async function _t(i,e){return n({__tauriModule:"Path",message:{cmd:"basename",path:i,ext:e}})}async function Pt(i){return n({__tauriModule:"Path",message:{cmd:"isAbsolute",path:i}})}var J={};u(J,{exit:()=>wt,relaunch:()=>vt});async function wt(i=0){return n({__tauriModule:"Process",message:{cmd:"exit",exitCode:i}})}async function vt(){return n({__tauriModule:"Process",message:{cmd:"relaunch"}})}var K={};u(K,{Child:()=>C,Command:()=>f,EventEmitter:()=>p,open:()=>Tt});async function Mt(i,e,t=[],r){return typeof t=="object"&&Object.freeze(t),n({__tauriModule:"Shell",message:{cmd:"execute",program:e,args:t,options:r,onEventFn:d(i)}})}var p=class{constructor(){this.eventListeners=Object.create(null)}addEventListener(e,t){e in this.eventListeners?this.eventListeners[e].push(t):this.eventListeners[e]=[t]}_emit(e,t){if(e in this.eventListeners){let r=this.eventListeners[e];for(let s of r)s(t)}}on(e,t){return this.addEventListener(e,t),this}},C=class{constructor(e){this.pid=e}async write(e){return n({__tauriModule:"Shell",message:{cmd:"stdinWrite",pid:this.pid,buffer:typeof e=="string"?e:Array.from(e)}})}async kill(){return n({__tauriModule:"Shell",message:{cmd:"killChild",pid:this.pid}})}},f=class extends p{constructor(t,r=[],s){super();this.stdout=new p;this.stderr=new p;this.program=t,this.args=typeof r=="string"?[r]:r,this.options=s??{}}static sidecar(t,r=[],s){let o=new f(t,r,s);return o.options.sidecar=!0,o}async spawn(){return Mt(t=>{switch(t.event){case"Error":this._emit("error",t.payload);break;case"Terminated":this._emit("close",t.payload);break;case"Stdout":this.stdout._emit("data",t.payload);break;case"Stderr":this.stderr._emit("data",t.payload);break}},this.program,this.args,this.options).then(t=>new C(t))}async execute(){return new Promise((t,r)=>{this.on("error",r);let s=[],o=[];this.stdout.on("data",l=>{s.push(l)}),this.stderr.on("data",l=>{o.push(l)}),this.on("close",l=>{t({code:l.code,signal:l.signal,stdout:s.join(`
`),stderr:o.join(`
`)})}),this.spawn().catch(r)})}};async function Tt(i,e){return n({__tauriModule:"Shell",message:{cmd:"open",path:i,with:e}})}var Q={};u(Q,{checkUpdate:()=>Ft,installUpdate:()=>Ot});async function Ot(){let i;function e(){i&&i(),i=void 0}return new Promise((t,r)=>{function s(o){if(o.error)return e(),r(o.error);if(o.status==="DONE")return e(),t()}M("tauri://update-status",o=>{s(o==null?void 0:o.payload)}).then(o=>{i=o}).catch(o=>{throw e(),o}),T("tauri://update-install").catch(o=>{throw e(),o})})}async function Ft(){let i;function e(){i&&i(),i=void 0}return new Promise((t,r)=>{function s(l){return e(),t({manifest:l,shouldUpdate:!0})}function o(l){if(l.error)return e(),r(l.error);if(l.status==="UPTODATE")return e(),t({shouldUpdate:!1})}N("tauri://update-available",l=>{s(l==null?void 0:l.payload)}).catch(l=>{throw e(),l}),M("tauri://update-status",l=>{o(l==null?void 0:l.payload)}).then(l=>{i=l}).catch(l=>{throw e(),l}),T("tauri://update").catch(l=>{throw e(),l})})}var Y={};u(Y,{LogicalPosition:()=>A,LogicalSize:()=>E,PhysicalPosition:()=>_,PhysicalSize:()=>b,UserAttentionType:()=>ae,WebviewWindow:()=>c,WebviewWindowHandle:()=>S,WindowManager:()=>k,appWindow:()=>X,availableMonitors:()=>At,currentMonitor:()=>Ct,getAll:()=>oe,getCurrent:()=>xt,primaryMonitor:()=>Et});var E=class{constructor(e,t){this.type="Logical";this.width=e,this.height=t}},b=class{constructor(e,t){this.type="Physical";this.width=e,this.height=t}toLogical(e){return new E(this.width/e,this.height/e)}},A=class{constructor(e,t){this.type="Logical";this.x=e,this.y=t}},_=class{constructor(e,t){this.type="Physical";this.x=e,this.y=t}toLogical(e){return new A(this.x/e,this.y/e)}},ae=(t=>(t[t.Critical=1]="Critical",t[t.Informational=2]="Informational",t))(ae||{});function xt(){return new c(window.__TAURI_METADATA__.__currentWindow.label,{skip:!0})}function oe(){return window.__TAURI_METADATA__.__windows.map(i=>new c(i.label,{skip:!0}))}var se=["tauri://created","tauri://error"],S=class{constructor(e){this.label=e,this.listeners=Object.create(null)}async listen(e,t){return this._handleTauriEvent(e,t)?Promise.resolve(()=>{let r=this.listeners[e];r.splice(r.indexOf(t),1)}):h(e,this.label,t)}async once(e,t){return this._handleTauriEvent(e,t)?Promise.resolve(()=>{let r=this.listeners[e];r.splice(r.indexOf(t),1)}):v(e,this.label,t)}async emit(e,t){if(se.includes(e)){for(let r of this.listeners[e]||[])r({event:e,id:-1,windowLabel:this.label,payload:t});return Promise.resolve()}return w(e,this.label,t)}_handleTauriEvent(e,t){return se.includes(e)?(e in this.listeners?this.listeners[e].push(t):this.listeners[e]=[t],!0):!1}},k=class extends S{async scaleFactor(){return n({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"scaleFactor"}}}})}async innerPosition(){return n({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"innerPosition"}}}}).then(({x:e,y:t})=>new _(e,t))}async outerPosition(){return n({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"outerPosition"}}}}).then(({x:e,y:t})=>new _(e,t))}async innerSize(){return n({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"innerSize"}}}}).then(({width:e,height:t})=>new b(e,t))}async outerSize(){return n({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"outerSize"}}}}).then(({width:e,height:t})=>new b(e,t))}async isFullscreen(){return n({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"isFullscreen"}}}})}async isMaximized(){return n({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"isMaximized"}}}})}async isDecorated(){return n({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"isDecorated"}}}})}async isResizable(){return n({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"isResizable"}}}})}async isVisible(){return n({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"isVisible"}}}})}async theme(){return n({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"theme"}}}})}async center(){return n({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"center"}}}})}async requestUserAttention(e){let t=null;return e&&(e===1?t={type:"Critical"}:t={type:"Informational"}),n({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"requestUserAttention",payload:t}}}})}async setResizable(e){return n({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setResizable",payload:e}}}})}async setTitle(e){return n({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setTitle",payload:e}}}})}async maximize(){return n({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"maximize"}}}})}async unmaximize(){return n({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"unmaximize"}}}})}async toggleMaximize(){return n({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"toggleMaximize"}}}})}async minimize(){return n({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"minimize"}}}})}async unminimize(){return n({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"unminimize"}}}})}async show(){return n({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"show"}}}})}async hide(){return n({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"hide"}}}})}async close(){return n({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"close"}}}})}async setDecorations(e){return n({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setDecorations",payload:e}}}})}async setAlwaysOnTop(e){return n({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setAlwaysOnTop",payload:e}}}})}async setSize(e){if(!e||e.type!=="Logical"&&e.type!=="Physical")throw new Error("the `size` argument must be either a LogicalSize or a PhysicalSize instance");return n({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setSize",payload:{type:e.type,data:{width:e.width,height:e.height}}}}}})}async setMinSize(e){if(e&&e.type!=="Logical"&&e.type!=="Physical")throw new Error("the `size` argument must be either a LogicalSize or a PhysicalSize instance");return n({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setMinSize",payload:e?{type:e.type,data:{width:e.width,height:e.height}}:null}}}})}async setMaxSize(e){if(e&&e.type!=="Logical"&&e.type!=="Physical")throw new Error("the `size` argument must be either a LogicalSize or a PhysicalSize instance");return n({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setMaxSize",payload:e?{type:e.type,data:{width:e.width,height:e.height}}:null}}}})}async setPosition(e){if(!e||e.type!=="Logical"&&e.type!=="Physical")throw new Error("the `position` argument must be either a LogicalPosition or a PhysicalPosition instance");return n({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setPosition",payload:{type:e.type,data:{x:e.x,y:e.y}}}}}})}async setFullscreen(e){return n({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setFullscreen",payload:e}}}})}async setFocus(){return n({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setFocus"}}}})}async setIcon(e){return n({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setIcon",payload:{icon:typeof e=="string"?e:Array.from(e)}}}}})}async setSkipTaskbar(e){return n({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setSkipTaskbar",payload:e}}}})}async setCursorGrab(e){return n({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setCursorGrab",payload:e}}}})}async setCursorVisible(e){return n({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setCursorVisible",payload:e}}}})}async setCursorIcon(e){return n({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setCursorIcon",payload:e}}}})}async setCursorPosition(e){if(!e||e.type!=="Logical"&&e.type!=="Physical")throw new Error("the `position` argument must be either a LogicalPosition or a PhysicalPosition instance");return n({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setCursorPosition",payload:{type:e.type,data:{x:e.x,y:e.y}}}}}})}async startDragging(){return n({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"startDragging"}}}})}},c=class extends k{constructor(e,t={}){super(e),t!=null&&t.skip||n({__tauriModule:"Window",message:{cmd:"createWebview",data:{options:m({label:e},t)}}}).then(async()=>this.emit("tauri://created")).catch(async r=>this.emit("tauri://error",r))}static getByLabel(e){return oe().some(t=>t.label===e)?new c(e,{skip:!0}):null}},X;"__TAURI_METADATA__"in window?X=new c(window.__TAURI_METADATA__.__currentWindow.label,{skip:!0}):(console.warn(`Could not find "window.__TAURI_METADATA__". The "appWindow" value will reference the "main" window label.
Note that this is not an issue if running this frontend on a browser instead of a Tauri window.`),X=new c("main",{skip:!0}));async function Ct(){return n({__tauriModule:"Window",message:{cmd:"manage",data:{cmd:{type:"currentMonitor"}}}})}async function Et(){return n({__tauriModule:"Window",message:{cmd:"manage",data:{cmd:{type:"primaryMonitor"}}}})}async function At(){return n({__tauriModule:"Window",message:{cmd:"manage",data:{cmd:{type:"availableMonitors"}}}})}var Z={};u(Z,{EOL:()=>St,arch:()=>Ut,platform:()=>kt,tempdir:()=>Dt,type:()=>Wt,version:()=>Rt});var St=y()?`\r
`:`
`;async function kt(){return n({__tauriModule:"Os",message:{cmd:"platform"}})}async function Rt(){return n({__tauriModule:"Os",message:{cmd:"version"}})}async function Wt(){return n({__tauriModule:"Os",message:{cmd:"osType"}})}async function Ut(){return n({__tauriModule:"Os",message:{cmd:"arch"}})}async function Dt(){return n({__tauriModule:"Os",message:{cmd:"tempdir"}})}return ce(zt);})();
window.__TAURI__ = __TAURI_IIFE__
