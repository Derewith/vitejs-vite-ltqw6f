import{s as te,n as H,r as ge,d as we,e as _e,u as xe,g as ke,f as $e}from"../chunks/scheduler.-uejo_JO.js";import{S as le,i as ae,e as v,s as C,z as O,m as ue,c as p,f as y,g as L,j as T,d as o,A as j,a,q as ye,b as I,k as d,B as z,C as Ce,v as fe,w as me,x as ve,p as Z,n as ee,y as pe}from"../chunks/index.DDKChHgk.js";function he(i){let e,t,l;return{c(){e=v("div"),this.h()},l(c){e=p(c,"DIV",{class:!0,role:!0}),y(e).forEach(o),this.h()},h(){a(e,"class","fixed inset-0 bg-black bg-opacity-50 z-10 lg:hidden"),a(e,"role","presentation")},m(c,m){I(c,e,m),t||(l=z(e,"click",i[2]),t=!0)},p:H,d(c){c&&o(e),t=!1,l()}}}function be(i){let e,t,l,c="✕",m,n,w=`<div class="mx-auto max-w-screen-md sm:text-center"><h2 class="inter-font mb-4 text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">Iscriviti alla nostra newsletter</h2> <p class="mx-auto mb-8 max-w-2xl font-light text-gray-500 md:mb-12 sm:text-xl">Per rimanere aggiornati sui progressi della roadmap, sugli annunci e
            sugli sconti esclusivi, non esitate a iscrivervi con la vostra
            e-mail.</p> <form action="#"><div class="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0 space-x-2"><div class="relative w-full"><label for="email" class="hidden mb-2 text-sm font-medium text-gray-900">Email</label> <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"><svg class="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg></div> <input class="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500" placeholder="Inserisci la tua mail" type="email" id="email" required=""/></div> <div><button type="submit" class="py-3 px-5 w-full text-sm font-medium text-center text-black rounded-lg border cursor-pointer bg-primary-700 border-primary-600 sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300">Iscriviti</button></div></div> <div class="mx-auto max-w-screen-sm text-sm text-left text-gray-500 newsletter-form-footer">Abbiamo a cuore la protezione dei vostri dati. <a href="/privacy" class="font-medium text-primary-600 hover:underline">Leggi la nostra Privacy Policy</a>.</div></form></div>`,f,s;return{c(){e=v("div"),t=v("div"),l=v("button"),l.textContent=c,m=C(),n=v("div"),n.innerHTML=w,this.h()},l(u){e=p(u,"DIV",{class:!0});var _=y(e);t=p(_,"DIV",{class:!0});var D=y(t);l=p(D,"BUTTON",{class:!0,"data-svelte-h":!0}),L(l)!=="svelte-15mrxq9"&&(l.textContent=c),m=T(D),n=p(D,"DIV",{class:!0,"data-svelte-h":!0}),L(n)!=="svelte-16s3lpg"&&(n.innerHTML=w),D.forEach(o),_.forEach(o),this.h()},h(){a(l,"class","modal-close"),a(n,"class","py-4 lg:py-8 px-2 lg:px-2"),a(t,"class","modal-content"),a(e,"class","modal-overlay")},m(u,_){I(u,e,_),d(e,t),d(t,l),d(t,m),d(t,n),f||(s=[z(l,"click",i[3]),z(t,"click",Ce(i[4])),z(e,"click",i[3])],f=!0)},p:H,d(u){u&&o(e),f=!1,ge(s)}}}function Te(i){let e,t,l,c='<a href="/" class="logo-wrapper"><img src="public/logo.png" alt="logo" height="30" width="90"/></a>',m,n,w='<li class="menu-item"><a href="/who" target="_blank" rel="noopener noreferrer">Chi siamo</a></li> <li><div class="menu-divider"></div></li>',f,s,u,_,D="Newsletter",R,x,E,k,P,U,A,F,$,N,M,se="✕",X,V,re='<li><a href="/" class="block py-2 px-3 rounded" aria-current="page">Home</a></li> <li><a href="/who" class="block py-2 px-3 text-gray-900 rounded hover:border hover:border-brand">Su di noi</a></li> <li><a href="/invest" class="block py-2 px-3 text-gray-900 rounded hover:border hover:border-brand">Investi</a></li> <li><a href="/media" class="block py-2 px-3 text-gray-900 rounded hover:border hover:border-brand">Media</a></li> <li><a href="/team" class="block py-2 px-3 text-gray-900 rounded hover:border hover:border-brand">Team</a></li> <li><a href="/contact" class="block py-2 px-3 text-gray-900 rounded hover:border hover:border-brand">Contattaci</a></li>',W,G,B,q,Y,ie,h=i[0]&&he(i),b=i[1]&&be(i);return{c(){e=v("nav"),t=v("div"),l=v("div"),l.innerHTML=c,m=C(),n=v("ul"),n.innerHTML=w,f=C(),s=v("div"),u=v("div"),_=v("button"),_.textContent=D,R=C(),x=v("button"),E=O("svg"),k=O("g"),P=O("path"),U=O("path"),A=O("path"),F=C(),$=v("div"),N=v("div"),M=v("button"),M.textContent=se,X=C(),V=v("ul"),V.innerHTML=re,G=C(),h&&h.c(),B=C(),b&&b.c(),q=ue(),this.h()},l(r){e=p(r,"NAV",{class:!0});var g=y(e);t=p(g,"DIV",{class:!0});var S=y(t);l=p(S,"DIV",{class:!0,"data-svelte-h":!0}),L(l)!=="svelte-1gpdqbt"&&(l.innerHTML=c),m=T(S),n=p(S,"UL",{class:!0,"data-svelte-h":!0}),L(n)!=="svelte-hyk9nh"&&(n.innerHTML=w),f=T(S),s=p(S,"DIV",{class:!0});var J=y(s);u=p(J,"DIV",{class:!0});var ne=y(u);_=p(ne,"BUTTON",{class:!0,"data-svelte-h":!0}),L(_)!=="svelte-1x8i6c4"&&(_.textContent=D),ne.forEach(o),R=T(J),x=p(J,"BUTTON",{class:!0,type:!0,"aria-controls":!0,"aria-expanded":!0});var oe=y(x);E=j(oe,"svg",{xmlns:!0,viewBox:!0,width:!0,height:!0});var de=y(E);k=j(de,"g",{fill:!0,"stroke-linecap":!0,"stroke-width":!0,stroke:!0});var K=y(k);P=j(K,"path",{d:!0}),y(P).forEach(o),U=j(K,"path",{d:!0}),y(U).forEach(o),A=j(K,"path",{d:!0}),y(A).forEach(o),K.forEach(o),de.forEach(o),oe.forEach(o),J.forEach(o),S.forEach(o),g.forEach(o),F=T(r),$=p(r,"DIV",{class:!0,id:!0});var Q=y($);N=p(Q,"DIV",{class:!0});var ce=y(N);M=p(ce,"BUTTON",{class:!0,"data-svelte-h":!0}),L(M)!=="svelte-54h3sb"&&(M.textContent=se),ce.forEach(o),X=T(Q),V=p(Q,"UL",{class:!0,style:!0,"data-svelte-h":!0}),L(V)!=="svelte-q8p1fb"&&(V.innerHTML=re),Q.forEach(o),G=T(r),h&&h.l(r),B=T(r),b&&b.l(r),q=ue(),this.h()},h(){a(l,"class","logo-ctn"),a(n,"class","menu-ctn"),a(_,"class","mainbtn"),a(u,"class","menu-last"),a(P,"d","M.75 12.499h12.588"),a(U,"d","M.75 6.624h12.588"),a(A,"d","M.75.75h12.588"),a(k,"fill","none"),a(k,"stroke-linecap","round"),a(k,"stroke-width","1.5"),a(k,"stroke","currentColor"),a(E,"xmlns","http://www.w3.org/2000/svg"),a(E,"viewBox","0 0 14.088 13.249"),a(E,"width","1rem"),a(E,"height","1rem"),a(x,"class","menu-btn"),a(x,"type","button"),a(x,"aria-controls","navbar-default"),a(x,"aria-expanded",i[0]),a(s,"class","flex items-center gap-2"),a(t,"class","wrapper-inside"),a(e,"class","wrapper bg-brandbg"),a(M,"class","float-right text-gray-600 hover:text-gray-900"),a(N,"class","p-4 border-b"),a(V,"class","font-medium flex flex-col p-4 mt-4"),ye(V,"border-radius","0px"),a($,"class",W=`fixed inset-y-0 right-0 transform ${i[0]?"translate-x-0":"translate-x-full"} transition-transform duration-300 ease-in-out w-64 bg-brandbg shadow-lg z-20 lg:hidden`),a($,"id","navbar-default")},m(r,g){I(r,e,g),d(e,t),d(t,l),d(t,m),d(t,n),d(t,f),d(t,s),d(s,u),d(u,_),d(s,R),d(s,x),d(x,E),d(E,k),d(k,P),d(k,U),d(k,A),I(r,F,g),I(r,$,g),d($,N),d(N,M),d($,X),d($,V),I(r,G,g),h&&h.m(r,g),I(r,B,g),b&&b.m(r,g),I(r,q,g),Y||(ie=[z(_,"click",i[3]),z(x,"click",i[2]),z(M,"click",i[2])],Y=!0)},p(r,[g]){g&1&&a(x,"aria-expanded",r[0]),g&1&&W!==(W=`fixed inset-y-0 right-0 transform ${r[0]?"translate-x-0":"translate-x-full"} transition-transform duration-300 ease-in-out w-64 bg-brandbg shadow-lg z-20 lg:hidden`)&&a($,"class",W),r[0]?h?h.p(r,g):(h=he(r),h.c(),h.m(B.parentNode,B)):h&&(h.d(1),h=null),r[1]?b?b.p(r,g):(b=be(r),b.c(),b.m(q.parentNode,q)):b&&(b.d(1),b=null)},i:H,o:H,d(r){r&&(o(e),o(F),o($),o(G),o(B),o(q)),h&&h.d(r),b&&b.d(r),Y=!1,ge(ie)}}}function Ie(i,e,t){let l=!1,c=!1;function m(){t(0,l=!l)}function n(){t(1,c=!c)}function w(f){we.call(this,i,f)}return[l,c,m,n,w]}class Ee extends le{constructor(e){super(),ae(this,e,Ie,Te,te,{})}}function Me(i){let e,t='<div class="footer svelte-8lbmwy"><div class="footer_logo svelte-8lbmwy"><img src="public/logo.png" alt="logo" height="30" width="90" class="svelte-8lbmwy"/></div> <div class="footer_grid flex-col svelte-8lbmwy"><div class="footer_grid_col grid_col svelte-8lbmwy"><ul class="footer_grid_content svelte-8lbmwy"><li class="svelte-8lbmwy"><a href="/collaboration/" class="svelte-8lbmwy">Collabora con noi</a></li> <li class="svelte-8lbmwy"><a href="/personalized-solutions/" class="svelte-8lbmwy">Soluzioni personalizzate</a></li> <li class="svelte-8lbmwy"><a href="/legal/" class="svelte-8lbmwy">Legal</a></li> <li class="svelte-8lbmwy"><a href="/privacy/" class="svelte-8lbmwy">Privacy</a></li></ul></div></div> <div class="footer_line svelte-8lbmwy"></div> <div class="footer_socials svelte-8lbmwy"><ul><li class="fab fa-instagram svelte-8lbmwy"><a target="_blank" href="https://www.instagram.com/whynotapp2024/" class="svelte-8lbmwy"></a></li> <li class="fab fa-facebook svelte-8lbmwy"><a target="_blank" href="https://www.facebook.com//" class="svelte-8lbmwy"></a></li> <li class="fab fa-twitter svelte-8lbmwy"><a target="_blank" href="https://twitter.com//" class="svelte-8lbmwy"></a></li> <li class="fab fa-linkedin svelte-8lbmwy"><a target="_blank" href="https://www.linkedin.com/company//" class="svelte-8lbmwy"></a></li></ul></div> <div class="footer_text svelte-8lbmwy"><p>Whynot Italia S.r.l - P.IVA 1234567890 - Via dei Pupi, 1 - 30172</p></div></div>';return{c(){e=v("div"),e.innerHTML=t,this.h()},l(l){e=p(l,"DIV",{style:!0,"data-svelte-h":!0}),L(e)!=="svelte-8sqwqg"&&(e.innerHTML=t),this.h()},h(){ye(e,"background-color","#e95f3b")},m(l,c){I(l,e,c)},p:H,i:H,o:H,d(l){l&&o(e)}}}class Ve extends le{constructor(e){super(),ae(this,e,null,Me,te,{})}}function Le(i){let e,t,l,c,m,n;t=new Ee({});const w=i[3].default,f=_e(w,i,i[2],null);return m=new Ve({}),{c(){e=v("div"),fe(t.$$.fragment),l=C(),f&&f.c(),c=C(),fe(m.$$.fragment)},l(s){e=p(s,"DIV",{});var u=y(e);me(t.$$.fragment,u),l=T(u),f&&f.l(u),c=T(u),me(m.$$.fragment,u),u.forEach(o)},m(s,u){I(s,e,u),ve(t,e,null),d(e,l),f&&f.m(e,null),d(e,c),ve(m,e,null),n=!0},p(s,[u]){f&&f.p&&(!n||u&4)&&xe(f,w,s,s[2],n?$e(w,s[2],u,null):ke(s[2]),null)},i(s){n||(Z(t.$$.fragment,s),Z(f,s),Z(m.$$.fragment,s),n=!0)},o(s){ee(t.$$.fragment,s),ee(f,s),ee(m.$$.fragment,s),n=!1},d(s){s&&o(e),pe(t),f&&f.d(s),pe(m)}}}function De(i,e,t){let{$$slots:l={},$$scope:c}=e;const m=!0,n="always";return i.$$set=w=>{"$$scope"in w&&t(2,c=w.$$scope)},[m,n,c,l]}class Ne extends le{constructor(e){super(),ae(this,e,De,Le,te,{prerender:0,trailingSlash:1})}get prerender(){return this.$$.ctx[0]}get trailingSlash(){return this.$$.ctx[1]}}export{Ne as component};