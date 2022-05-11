(function(){"use strict";var e={7761:function(e,n,t){var o=t(9242),a=t(3396);const s={id:"app"};function r(e,n,t,o,r,l){const i=(0,a.up)("router-view");return(0,a.wg)(),(0,a.iD)("div",s,[(0,a.Wm)(i)])}var l=t(65),i=t(6265),u=t.n(i),c={data(){return{}},components:{},methods:{},created(){null===this.user?this.$router.push({name:"signin"}):(u().get(`/getuser/${this.user.account}`).then((e=>this.$store.dispatch("user",e.data))).catch((e=>console.log(e))),this.$router.push({name:"homepage"}))},computed:{...(0,l.rn)({user:e=>e.user})}},p=t(89);const d=(0,p.Z)(c,[["render",r]]);var h=d,m=t(678);const f={class:"home"},g=(0,a._)("h1",null,"Home Page",-1);function v(e,n,t,o,s,r){const l=(0,a.up)("nav-home"),i=(0,a.up)("router-view");return(0,a.wg)(),(0,a.iD)("div",f,[g,(0,a._)("button",{type:"button",onClick:n[0]||(n[0]=(...e)=>r.onClick&&r.onClick(...e))},"Logout"),(0,a.Wm)(l),(0,a.Wm)(i)])}const w={class:"navbar"},_={class:"container"},b={class:"collapse"},y=(0,a.Uk)("Home"),C=(0,a.Uk)(" | "),U=(0,a.Uk)("Shop");function k(e,n,t,o,s,r){const l=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("nav",w,[(0,a._)("div",_,[(0,a._)("div",b,[(0,a.Wm)(l,{to:"/homepage",class:"nav-link"},{default:(0,a.w5)((()=>[y])),_:1}),C,(0,a.Wm)(l,{to:"/shoppage",class:"nav-link"},{default:(0,a.w5)((()=>[U])),_:1})])])])}var S={name:"NavHome"};const P=(0,p.Z)(S,[["render",k]]);var x=P,V={name:"HomeView",components:{NavHome:x},methods:{onClick(){this.$store.dispatch("user",null),this.$router.push({name:"signin"})}}};const z=(0,p.Z)(V,[["render",v]]);var I=z;const Z={class:"login"};function M(e,n,t,o,s,r){const l=(0,a.up)("router-view");return(0,a.wg)(),(0,a.iD)("div",Z,[(0,a.Wm)(l)])}var $={data(){return{}},components:{},methods:{}};const D=(0,p.Z)($,[["render",M],["__scopeId","data-v-2871e0f6"]]);var O=D,A=t(7139);const L=e=>((0,a.dD)("data-v-2e120696"),e=e(),(0,a.Cn)(),e),W={class:"header"},j=L((()=>(0,a._)("h3",{class:"signin"},"Sign In",-1))),E={class:"input"},H=L((()=>(0,a._)("label",{for:"account",class:"placeholder"},[(0,a._)("span",null,"Account")],-1))),T={class:"input"},B=L((()=>(0,a._)("label",{for:"password",class:"placeholder"},[(0,a._)("span",null,"Password")],-1))),N=L((()=>(0,a._)("button",{type:"submit"},"Login",-1))),F=L((()=>(0,a._)("br",null,null,-1)));function R(e,n,t,s,r,l){return(0,a.wg)(),(0,a.iD)("form",{onSubmit:n[3]||(n[3]=(0,o.iM)(((...e)=>l.onSubmit&&l.onSubmit(...e)),["prevent"]))},[(0,a._)("div",W,[j,(0,a._)("h3",{class:"signup",onClick:n[0]||(n[0]=(...e)=>l.changePage&&l.changePage(...e))},"Sign Up")]),(0,a._)("div",E,[(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":n[1]||(n[1]=e=>r.form.account=e),class:(0,A.C_)(l.getInputClass("account")),name:"account",id:"account",type:"text"},null,2),[[o.nr,r.form.account]]),H]),(0,a._)("div",T,[(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":n[2]||(n[2]=e=>r.form.password=e),class:(0,A.C_)(l.getInputClass("password")),name:"password",id:"password",type:"password"},null,2),[[o.nr,r.form.password]]),B]),N,F],32)}var q={data(){return{form:{account:"",password:""}}},methods:{async onSubmit(){if(!this.form.account||!this.form.password)return void alert("Please fill in all fields!");const e=await u().post("login",{account:this.form.account,password:this.form.password}).catch((e=>{const n=e.response.status;if(444===n)return alert(e.response.data.error),void(this.form.account=this.form.password="");throw e}));console.log(e.data),this.$store.dispatch("user",e.data),console.log(this.$store.state.user),this.$router.push({name:"homepage"})},changePage(){this.$router.push({name:"signup"})},getInputClass(e){return this.form[e].length?"filled":""}}};const G=(0,p.Z)(q,[["render",R],["__scopeId","data-v-2e120696"]]);var J=G;const K=e=>((0,a.dD)("data-v-fd7c480c"),e=e(),(0,a.Cn)(),e),Q={class:"sign"},X={class:"header"},Y=K((()=>(0,a._)("h3",{class:"signup"},"Sign Up",-1))),ee={class:"input"},ne=K((()=>(0,a._)("label",{for:"realname",class:"placeholder"},[(0,a._)("span",null,"Real Name")],-1))),te={class:"input"},oe=K((()=>(0,a._)("label",{for:"account",class:"placeholder"},[(0,a._)("span",null,"Account")],-1))),ae={class:"input"},se=K((()=>(0,a._)("label",{for:"phone",class:"placeholder"},[(0,a._)("span",null,"Phone Number")],-1))),re={class:"input"},le=K((()=>(0,a._)("label",{for:"password",class:"placeholder"},[(0,a._)("span",null,"Password")],-1))),ie={class:"input"},ue=K((()=>(0,a._)("label",{for:"confirm",class:"placeholder"},[(0,a._)("span",null,"Confirm Password")],-1))),ce={class:"input"},pe=K((()=>(0,a._)("label",{for:"latitude",class:"placeholder"},[(0,a._)("span",null,"Latitude")],-1))),de={class:"input"},he=K((()=>(0,a._)("label",{for:"latitude",class:"placeholder"},[(0,a._)("span",null,"Longitude")],-1))),me=K((()=>(0,a._)("button",{type:"submit"},"Sign Up",-1)));function fe(e,n,t,s,r,l){return(0,a.wg)(),(0,a.iD)("div",Q,[(0,a._)("form",{onSubmit:n[8]||(n[8]=(0,o.iM)(((...e)=>l.onSubmit&&l.onSubmit(...e)),["prevent"]))},[(0,a._)("div",X,[(0,a._)("h3",{class:"signin",onClick:n[0]||(n[0]=(...e)=>l.changePage&&l.changePage(...e))},"Sign In"),Y]),(0,a._)("div",ee,[(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":n[1]||(n[1]=e=>r.form.realname=e),class:(0,A.C_)(l.getInputClass("realname")),name:"realname",id:"realname",type:"text"},null,2),[[o.nr,r.form.realname]]),ne]),(0,a._)("div",te,[(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":n[2]||(n[2]=e=>r.form.account=e),class:(0,A.C_)(l.getInputClass("account")),name:"account",id:"account",type:"text"},null,2),[[o.nr,r.form.account]]),oe]),(0,a._)("div",ae,[(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":n[3]||(n[3]=e=>r.form.phone=e),class:(0,A.C_)(l.getInputClass("phone")),name:"phone",id:"phone",type:"text"},null,2),[[o.nr,r.form.phone]]),se]),(0,a._)("div",re,[(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":n[4]||(n[4]=e=>r.form.password=e),class:(0,A.C_)(l.getInputClass("password")),name:"password",id:"password",type:"password"},null,2),[[o.nr,r.form.password]]),le]),(0,a._)("div",ie,[(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":n[5]||(n[5]=e=>r.form.confirm=e),class:(0,A.C_)(l.getInputClass("confirm")),name:"confirm",id:"confirm",type:"password"},null,2),[[o.nr,r.form.confirm]]),ue]),(0,a._)("div",ce,[(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":n[6]||(n[6]=e=>r.form.latitude=e),class:(0,A.C_)(l.getInputClass("latitude")),name:"latitude",id:"latitude",type:"number"},null,2),[[o.nr,r.form.latitude]]),pe]),(0,a._)("div",de,[(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":n[7]||(n[7]=e=>r.form.longitude=e),class:(0,A.C_)(l.getInputClass("longitude")),name:"longitude",id:"longitude",type:"number"},null,2),[[o.nr,r.form.longitude]]),he]),me],32)])}var ge={data(){return{form:{realname:"",account:"",phone:"",password:"",confirm:"",latitude:null,longitude:null}}},methods:{async onSubmit(){return""===this.form.realname||""===this.form.account||""===this.form.phone||""===this.form.password||""===this.form.confirm?(alert("Please fill in all fields!"),void(this.form.password=this.form.confirm="")):this.form.password!==this.form.confirm?(alert("Please check your password!"),void(this.form.password=this.form.confirm="")):(await u().post("register",{realname:this.form.realname,account:this.form.account,phone:this.form.phone,password:this.form.password,latitude:this.form.latitude,longitude:this.form.longitude}).catch((e=>{const n=e.response.status;if(444!==n)throw e;alert("This account has been registered!")})),void this.$router.push({name:"signin"}))},changePage(){this.$router.push({name:"signin"})},getInputClass(e){return"longitude"!==e&&"latitude"!==e?this.form[e].length?"filled":"":null!==this.form[e]?"filled":""}},watch:{account(e,n){console.log(`Field "Account": '${n}' -> '${e}'.`)}}};const ve=(0,p.Z)(ge,[["render",fe],["__scopeId","data-v-fd7c480c"]]);var we=ve;function _e(e,n,t,o,s,r){const l=(0,a.up)("user-profile"),i=(0,a.up)("search-shop"),u=(0,a.up)("shop-list");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.Wm)(l),(0,a.Wm)(i),(0,a.Wm)(u)])}const be={id:"profile"},ye={class:"profile-item"},Ce=(0,a._)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-person-circle",viewBox:"0 0 16 16"},[(0,a._)("path",{d:"M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"}),(0,a._)("path",{"fill-rule":"evenodd",d:"M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"})],-1),Ue={class:"profile-item"},ke=(0,a._)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-telephone-fill",viewBox:"0 0 16 16"},[(0,a._)("path",{"fill-rule":"evenodd",d:"M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"})],-1),Se={class:"profile-item"},Pe=(0,a._)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-geo-alt-fill",viewBox:"0 0 16 16"},[(0,a._)("path",{d:"M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"})],-1),xe=(0,a.Uk)(" ( "),Ve=["disabled"],ze=(0,a.Uk)(", "),Ie=["disabled"],Ze=(0,a.Uk)(" ) "),Me={class:"profile-item"},$e=(0,a._)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",class:"bi bi-piggy-bank-fill",viewBox:"0 0 16 16"},[(0,a._)("path",{d:"M7.964 1.527c-2.977 0-5.571 1.704-6.32 4.125h-.55A1 1 0 0 0 .11 6.824l.254 1.46a1.5 1.5 0 0 0 1.478 1.243h.263c.3.513.688.978 1.145 1.382l-.729 2.477a.5.5 0 0 0 .48.641h2a.5.5 0 0 0 .471-.332l.482-1.351c.635.173 1.31.267 2.011.267.707 0 1.388-.095 2.028-.272l.543 1.372a.5.5 0 0 0 .465.316h2a.5.5 0 0 0 .478-.645l-.761-2.506C13.81 9.895 14.5 8.559 14.5 7.069c0-.145-.007-.29-.02-.431.261-.11.508-.266.705-.444.315.306.815.306.815-.417 0 .223-.5.223-.461-.026a.95.95 0 0 0 .09-.255.7.7 0 0 0-.202-.645.58.58 0 0 0-.707-.098.735.735 0 0 0-.375.562c-.024.243.082.48.32.654a2.112 2.112 0 0 1-.259.153c-.534-2.664-3.284-4.595-6.442-4.595Zm7.173 3.876a.565.565 0 0 1-.098.21.704.704 0 0 1-.044-.025c-.146-.09-.157-.175-.152-.223a.236.236 0 0 1 .117-.173c.049-.027.08-.021.113.012a.202.202 0 0 1 .064.199Zm-8.999-.65a.5.5 0 1 1-.276-.96A7.613 7.613 0 0 1 7.964 3.5c.763 0 1.497.11 2.18.315a.5.5 0 1 1-.287.958A6.602 6.602 0 0 0 7.964 4.5c-.64 0-1.255.09-1.826.254ZM5 6.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"})],-1);function De(e,n,t,s,r,l){return(0,a.wg)(),(0,a.iD)("div",be,[(0,a._)("div",ye,[Ce,(0,a.Uk)(" "+(0,A.zw)(e.user.realname)+" ("+(0,A.zw)(e.user.role)+") ",1)]),(0,a._)("div",Ue,[ke,(0,a.Uk)(" "+(0,A.zw)(e.user.phone),1)]),(0,a._)("div",Se,[Pe,xe,(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":n[0]||(n[0]=n=>e.user.longitude=n),disabled:!r.editing,class:"location-input"},null,8,Ve),[[o.nr,e.user.longitude]]),ze,(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":n[1]||(n[1]=n=>e.user.latitude=n),disabled:!r.editing,class:"location-input"},null,8,Ie),[[o.nr,e.user.latitude]]),Ze,(0,a._)("button",{type:"submit",value:"Edit",id:"location-edit",onClick:n[2]||(n[2]=(...e)=>l.onClick&&l.onClick(...e))},(0,A.zw)(r.editing?"done":"edit"),1)]),(0,a._)("div",Me,[$e,(0,a.Uk)(" "+(0,A.zw)(e.user.balance),1)])])}var Oe={data(){return{editing:!1}},methods:{onClick(){this.editing=!this.editing}},computed:{...(0,l.rn)(["user"])}};const Ae=(0,p.Z)(Oe,[["render",De]]);var Le=Ae;const We={id:"searcharea"},je={class:"inputbar"},Ee=(0,a._)("label",null,"Shop",-1),He={class:"drop-down-menu"},Te=(0,a._)("label",null," distance",-1),Be=(0,a._)("option",null,"near",-1),Ne=(0,a._)("option",null,"middle",-1),Fe=(0,a._)("option",null,"far",-1),Re=[Be,Ne,Fe],qe={class:"inputbar"},Ge=(0,a._)("label",null,"Price",-1),Je=(0,a.Uk)(" ~ "),Ke={class:"inputbar"},Qe=(0,a._)("label",null,"Meal",-1),Xe={class:"inputbar"},Ye=(0,a._)("label",null,"category",-1),en=(0,a._)("div",{class:"button"},[(0,a._)("button",{type:"submit"},"Search")],-1);function nn(e,n,t,s,r,l){return(0,a.wg)(),(0,a.iD)("div",We,[(0,a._)("form",{onSubmit:n[6]||(n[6]=(0,o.iM)(((...e)=>l.onSubmit&&l.onSubmit(...e)),["prevent"]))},[(0,a._)("div",je,[Ee,(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":n[0]||(n[0]=e=>r.shopname=e),type:"text",placeholder:"Enter Shop name"},null,512),[[o.nr,r.shopname,void 0,{lazy:!0,trim:!0}]])]),(0,a._)("div",He,[Te,(0,a.wy)((0,a._)("select",{"onUpdate:modelValue":n[1]||(n[1]=e=>r.distance=e),placeholder:"Select a distance"},Re,512),[[o.bM,r.distance]])]),(0,a._)("div",qe,[Ge,(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":n[2]||(n[2]=e=>r.pricelow=e),type:"number"},null,512),[[o.nr,r.pricelow,void 0,{lazy:!0,trim:!0}]]),Je,(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":n[3]||(n[3]=e=>r.pricehigh=e),type:"number"},null,512),[[o.nr,r.pricehigh,void 0,{lazy:!0,trim:!0}]])]),(0,a._)("div",Ke,[Qe,(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":n[4]||(n[4]=e=>r.meal=e),type:"text",placeholder:"Enter Meal"},null,512),[[o.nr,r.meal,void 0,{lazy:!0,trim:!0}]])]),(0,a._)("div",Xe,[Ye,(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":n[5]||(n[5]=e=>r.category=e),type:"text",placeholder:"Enter shop category"},null,512),[[o.nr,r.category,void 0,{lazy:!0,trim:!0}]])]),en],32)])}var tn={data(){return{shopname:"",distance:"",pricelow:"",pricehigh:"",meal:"",category:""}},methods:{async onSubmit(){const e=await u().post("/getshop",{shopname:this.shopname,distance:this.distance,pricelow:this.pricelow,pricehigh:this.pricehigh,meal:this.meal,category:this.category});console.log(e)}}};const on=(0,p.Z)(tn,[["render",nn]]);var an=on;const sn=(0,a._)("h3",null,"This is Shop List.",-1),rn=[sn];function ln(e,n,t,o,s,r){return(0,a.wg)(),(0,a.iD)("div",null,rn)}var un={};const cn=(0,p.Z)(un,[["render",ln]]);var pn=cn,dn={components:{UserProfile:Le,SearchShop:an,ShopList:pn}};const hn=(0,p.Z)(dn,[["render",_e]]);var mn=hn;const fn=(0,a._)("h1",null,"Shop Page",-1),gn=[fn];function vn(e,n,t,o,s,r){return(0,a.wg)(),(0,a.iD)("div",null,gn)}var wn={};const _n=(0,p.Z)(wn,[["render",vn]]);var bn=_n;const yn=[{path:"/home",name:"home",component:I,children:[{path:"/homepage",name:"homepage",component:mn},{path:"/shoppage",name:"shoppage",component:bn}]},{path:"/login",name:"login",component:O,children:[{path:"/signin",name:"signin",component:J},{path:"/signup",name:"signup",component:we}]}],Cn=(0,m.p7)({history:(0,m.PO)("/db_homework2/"),routes:yn});var Un=Cn,kn=t(2415),Sn=(0,l.MT)({plugins:[(0,kn.Z)()],state:{user:null,shops:[]},getters:{user:e=>e.user,shops:e=>e.shops},mutations:{user(e,n){e.user=n},shops(e,n){e.shops=n}},actions:{user(e,n){e.commit("user",n)},shops(e,n){e.commit("shops",n)}},modules:{}});u().defaults.baseURL="http://localhost:5000/",(0,o.ri)(h).use(Sn).use(Un).mount("#app")}},n={};function t(o){var a=n[o];if(void 0!==a)return a.exports;var s=n[o]={exports:{}};return e[o](s,s.exports,t),s.exports}t.m=e,function(){var e=[];t.O=function(n,o,a,s){if(!o){var r=1/0;for(c=0;c<e.length;c++){o=e[c][0],a=e[c][1],s=e[c][2];for(var l=!0,i=0;i<o.length;i++)(!1&s||r>=s)&&Object.keys(t.O).every((function(e){return t.O[e](o[i])}))?o.splice(i--,1):(l=!1,s<r&&(r=s));if(l){e.splice(c--,1);var u=a();void 0!==u&&(n=u)}}return n}s=s||0;for(var c=e.length;c>0&&e[c-1][2]>s;c--)e[c]=e[c-1];e[c]=[o,a,s]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={143:0};t.O.j=function(n){return 0===e[n]};var n=function(n,o){var a,s,r=o[0],l=o[1],i=o[2],u=0;if(r.some((function(n){return 0!==e[n]}))){for(a in l)t.o(l,a)&&(t.m[a]=l[a]);if(i)var c=i(t)}for(n&&n(o);u<r.length;u++)s=r[u],t.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return t.O(c)},o=self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=t.O(void 0,[998],(function(){return t(7761)}));o=t.O(o)})();
//# sourceMappingURL=app.51f4cd36.js.map