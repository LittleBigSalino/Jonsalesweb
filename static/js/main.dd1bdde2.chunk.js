(this.webpackJsonpnewjon=this.webpackJsonpnewjon||[]).push([[0],{118:function(e){e.exports=JSON.parse('[{"title":"Web Development","icon":"html5","sections":[{"title":"ASP.NET/MVC/.NET Core","icon":"microsoft","items":[{"icon":"microsoft","text":"Enterprise experience upgraing and authoring ASP.net applications."},{"icon":"linkedin","text":"Badged on LinkedIn"}]},{"title":"HTML5","icon":"html5","items":[{"icon":"html5","text":"HTML5 with emphasis on accessability, readability and logical symantics"},{"icon":"free code camp","text":"Free Code Camp Certifified"},{"icon":"linkedin","text":"Badged on LinkedIn"}]},{"title":"CSS3","icon":"css3","items":[{"icon":"css3","text":"The updates in css3 focus on media queries and the ever-growing mobile user interface"},{"icon":"free code camp","text":"Free Code Camp Certified"},{"icon":"linkedin","text":"Badged on LinkedIn"}]},{"title":"Javascript and JQuery","icon":"js","items":[{"icon":"js","text":"The component model logically organizes the structure of a web application and creates a platform for a more object oriented approach"},{"icon":"js","text":"One of the best practices in programming is never having to re-write the same code and class components help provide that"},{"icon":"free code camp","text":"Free Code Camp Certifified"},{"icon":"linkedin","text":"Badged on LinkedIn"}]},{"title":"React and Redux","icon":"react","items":[{"icon":"react","text":"React and Redux bring individual, per component-instance, state management that once implemented, is very easy to work with can really speed up development time."},{"icon":"free code camp","text":"Free Code Camp Certifified"},{"icon":"linkedin","text":"Badged on LinkedIn"}]}]},{"title":"Mobile App Development","icon":"html5","sections":[{"title":"Bootstrap/JQueryMobile","icon":"html5","items":[{"icon":"html5","text":"A viable candidate for an app can just be a web application that is highly usable on mobile. Media queries, and built-in mobile support using bootstrap and JQuery Mobile help make ensuring your website looks good on mobile devices."},{"icon":"free code camp","text":"Free Code Camp Certifified"},{"icon":"linkedin","text":"Badged on LinkedIn"}]},{"title":"Apache Cordova/PhoneGap","icon":"html5","items":[{"icon":"html5","text":"Leveraging the power of webView based apps for both iOS and Android, Apache cordova essentially is just like a web app made for mobile, but with the ability to make native calls to the device and a wrapper to give it an official app like distribution method."}]},{"title":"React Native and Flutter","icon":"react","items":[{"icon":"react","text":"Leveraging the fast growing community of developers who are familiarizing or already familiar with ReactJS, React Native is one the top growing and most widely used cross-platform app development frameworks out there."},{"icon":"react","text":"React Native in Comparison with the WebView model is much more performant since it actually compiles to native code. For higher performace requirement apps it\'s a good choice"}]},{"title":"Xamarin","icon":"microsoft","items":[{"icon":"microsoft","text":"Microsoft and Xamarin aim to let you use an already higher order language, C# and XAML, to build cross-platform native interfaces and apps."},{"icon":"microsoft","text":"I\'ve always been a Microsoft heavy kind of guy so I like this solution because of the documentation and ability to use Visual Studio to completely manage the project."}]}]},{"title":"Desktop Development","icon":"microsoft","sections":[{"title":"NET Platform","icon":"html5","items":[{"icon":"microsoft","text":"WinForms and WPF applications showcase the ease of use of Visual Studio."},{"icon":"microsoft","text":"Enterprise experience with ASP.net and ASP.net MVC development, team management, and server deployment."},{"icon":"linkedin","text":"Badged on LinkedIn"}]},{"title":"Visual Studio and Team Services","icon":"microsoft","items":[{"icon":"microsoft","text":"Managed multiple enterprise repositories through both TFS and VSOnline"},{"icon":"microsoft","text":"Managed server deployment and user delagation. Wrote/Managed SQL Database upgrade scripts"}]},{"title":"C#","icon":"microsoft","items":[{"icon":"microsoft","text":"The component model logically organizes the structure of a web application and creates a platform for a more object oriented approach"},{"icon":"microsoft","text":"One of the best practices in programming is never having to re-write the same code and class components help provide that"},{"icon":"linkedin","text":"Badged on LinkedIn"}]}]}]')},145:function(e,t,a){e.exports=a.p+"static/media/gallTest.ee638f33.jpg"},146:function(e,t,a){e.exports=a.p+"static/media/M13.d6eb7c67.jpg"},161:function(e,t,a){e.exports=a(221)},166:function(e,t,a){},173:function(e,t,a){},174:function(e,t,a){},220:function(e,t,a){},221:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(54),r=a.n(o),c=(a(166),a(9)),l=a(16),s=a(25),m=a(24),d=a(23),u=a(233),p=a(235),h=a(238),f=a(51),g=a(234),b=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).handleClick=function(e,t){var a=t.index,i=n.state.activeIndex===a?-1:a;n.setState({activeIndex:i})},n.state={activeIndex:0},n}return Object(s.a)(a,[{key:"SubSections",value:function(e){return e.map((function(e,t){return i.a.createElement(u.a.Item,{key:e.icon+t.toString()},i.a.createElement(u.a.Icon,{name:e.icon,verticalAlign:"middle"}),i.a.createElement(u.a.Content,null,i.a.createElement("p",{className:"itemText"},e.text)))}))}},{key:"AccordionList",value:function(e){var t=this,a=this.state.activeIndex;return e.map((function(e,n){return i.a.createElement(i.a.Fragment,null,i.a.createElement(p.a.Title,{className:"accordTitle",active:a===n,index:n,onClick:t.handleClick},i.a.createElement(h.a,{as:"h4"},i.a.createElement(f.a,{name:e.icon}),e.title)),i.a.createElement(p.a.Content,{active:a===n},i.a.createElement(u.a,{divided:!0,relaxed:!0},t.SubSections(e.items))))}))}},{key:"render",value:function(){return i.a.createElement(g.a,{className:"skillsetCard"},i.a.createElement(g.a.Content,null,i.a.createElement(h.a,{as:"h3",textAlign:"center"},this.props.Sections.title),i.a.createElement(g.a.Description,null,i.a.createElement(p.a,{fluid:!0,styled:!0},this.AccordionList(this.props.Sections.sections)))))}}]),a}(n.Component),E=a(239),v=a(118);function k(){return i.a.createElement(E.a,{id:"mainContainer"},i.a.createElement(h.a,{as:"h2",textAlign:"center",block:!0},"Software Development"),i.a.createElement(g.a.Group,{centered:!0},i.a.createElement(b,{Sections:v[0]}),i.a.createElement(b,{Sections:v[1]}),i.a.createElement(b,{Sections:v[2]})))}var y=a(149),w=a(145),x=a.n(w),C=a(146),S=a.n(C),I=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return i.a.createElement(g.a.Group,{id:"galleryRoot",centered:!0},i.a.createElement(g.a,{className:"galleryCard",color:"blue",fluid:!0},i.a.createElement(g.a.Content,null,i.a.createElement(g.a.Header,null,i.a.createElement(h.a,{as:"h5"},"Orion's Nebula - Messier 42")),i.a.createElement(g.a.Meta,null,i.a.createElement("span",{className:"date"},"09.29.2020")),i.a.createElement(E.a,{centered:!0,secondary:!0,compact:!0},i.a.createElement(y.a,{src:x.a,size:"massive",rounded:!0,centered:!0})),i.a.createElement(g.a.Description,null,"The Jewel in the Heart of Orion. One of the most beautiful nebulae in the sky, both visually and photographically.")),i.a.createElement(g.a.Content,{extra:!0},i.a.createElement(f.a,{name:"clock"}),"50 frames x 35 + 50 frames x 60 @1600 ISO")),i.a.createElement(g.a,{className:"galleryCard",fluid:!0},i.a.createElement(g.a.Content,null,i.a.createElement(g.a.Header,null,i.a.createElement(h.a,{as:"h5"},"The Great Globular Cluster in Hercules - Messier 13")),i.a.createElement(g.a.Meta,null,i.a.createElement("span",{className:"date"},"09.29.2020")),i.a.createElement(E.a,{centered:!0,secondary:!0,compact:!0},i.a.createElement(y.a,{src:S.a,size:"massive",rounded:!0,centered:!0})),i.a.createElement(g.a.Description,null,"The Jewel in the Heart of Orion. One of the most beautiful nebulae in the sky, both visually and photographically.")),i.a.createElement(g.a.Content,{extra:!0},i.a.createElement(f.a,{name:"clock"}),"50 frames x 35 + 50 frames x 60 @1600 ISO")))}}]),a}(n.Component),j=a(230),O=a(82);function A(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(E.a,{textAlign:"center"},i.a.createElement(h.a,{as:"h3"},"You are not currently logged in!"),i.a.createElement(O.b,{to:"/A"},i.a.createElement(f.a,{size:"large",name:"user outline"})),i.a.createElement("br",null),i.a.createElement(j.a,{text:!0},"To prevent webcrawling bots from scraping my data I've put it behind a layer of authentication. Please login with a google account to view the rest of my site.")))}var M=a(131);a(173);function L(){var e=Object(c.f)();return Object(M.b)(e,(function(e){return e.pathname}),{from:{opacity:0,transform:"translate3d(100%,0,0)"},enter:{opacity:1,transform:"translate3d(0%,0,0)"},leave:{opacity:0,transform:"translate3d(-50%,0,0)"}}).map((function(e){var t=e.item,a=e.props,n=e.key;return i.a.createElement(M.a.div,{id:"rotatorDiv",key:n,style:a},i.a.createElement(c.c,{location:t},i.a.createElement(c.a,{path:"/",exact:!0,component:T}),i.a.createElement(c.a,{path:"/a",component:T}),i.a.createElement(c.a,{path:"/b",component:N}),i.a.createElement(c.a,{path:"/c",component:B})))}))}var T=function(){return i.a.createElement(k,null)},N=function(){return i.a.createElement(I,null)},B=function(){return i.a.createElement(A,null)},D=(a(174),a(175),a(36)),P=a(232),F=a(231),J=a(236),R=a(76),W=a.n(R),V=(a(137),a(79)),z=(a(220),function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).handleLoginClick=function(e){var t=e.target.id;n.props.updateParent(t)},n.handleLoginClick=n.handleLoginClick.bind(Object(D.a)(n)),n}return Object(s.a)(a,[{key:"render",value:function(){return i.a.createElement(P.a,{fixed:"top",size:"mini"},i.a.createElement(P.a.Item,null,i.a.createElement(h.a,null,"Jon M. Sales")),i.a.createElement(P.a.Item,{id:"devlink",link:!0,name:"Software Developer",href:"/a",active:!1}),i.a.createElement(P.a.Item,{id:"aplink",link:!0,name:"Astrophotographer",href:"/b",active:!1}),i.a.createElement(P.a.Menu,{position:"right"},i.a.createElement(V.b,null,i.a.createElement(F.a,{item:!0,text:"My Stuff"},i.a.createElement(F.a.Menu,null,i.a.createElement(F.a.Item,{href:"https://apertura-website.web.app/",target:"_blank"},i.a.createElement(f.a,{name:"write"}),"Apertura USA Website"),i.a.createElement(F.a.Item,{href:"https://www.linkedin.com/in/jon-sales-243937b0/",target:"_blank"},i.a.createElement(f.a,{name:"linkedin"}),"LinkedIn Profile"),i.a.createElement(F.a.Item,{href:"https://www.astrobin.com/users/TheRealSalino/",target:"_blank"},i.a.createElement(f.a,{name:"chrome"}),"Astrobin Profile")))),i.a.createElement(P.a.Item,null,i.a.createElement(V.c,null,i.a.createElement(J.a,{icon:!0,color:"green",onClick:function(){var e=new W.a.auth.GoogleAuthProvider;W.a.auth().signInWithPopup(e)}},i.a.createElement("span",null,"Login with:"),i.a.createElement(f.a,{bordered:!0,name:"google"}))),i.a.createElement(V.b,null,i.a.createElement(J.a,{icon:!0,primary:!0,onClick:function(){W.a.auth().signOut()}},i.a.createElement("span",null,"Logout"))))))}}]),a}(i.a.Component)),G={apiKey:"AIzaSyD15mVMWb9A4BmNhJeS2Ibep_veXdGglnE",authDomain:"jonsalescomwebsite.firebaseapp.com",databaseURL:"https://jonsalescomwebsite.firebaseio.com",projectId:"jonsalescomwebsite",storageBucket:"jonsalescomwebsite.appspot.com",messagingSenderId:"929274938694",appId:"1:929274938694:web:5d82e08d6a3dd28ac15147",measurementId:"G-7V4CWT4NEX"};var H=function(){return i.a.createElement(V.a,Object.assign({firebase:W.a},G),i.a.createElement("div",{className:"App"},i.a.createElement(z,null),i.a.createElement(L,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(O.a,null,i.a.createElement(H,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[161,1,2]]]);
//# sourceMappingURL=main.dd1bdde2.chunk.js.map