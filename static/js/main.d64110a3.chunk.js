(this["webpackJsonphexad-assignment"]=this["webpackJsonphexad-assignment"]||[]).push([[0],{44:function(e,t,a){e.exports=a.p+"static/media/footer.909d5f54.jpg"},45:function(e,t,a){e.exports=a.p+"static/media/hexad-small-logo.cf77f030.png"},49:function(e){e.exports=JSON.parse('[{"name":"Crash Bandicoot N. Sane Trilogy","image":"https://i.ibb.co/kGXXf2z/crash.jpg","rating":2},{"name":"Diablo 3 Eternal Collection","image":"https://i.ibb.co/XJ7srRJ/diablo.jpg","rating":2},{"name":"Donkey Kong Country: Tropical Freeze","image":"https://i.ibb.co/nMLZBkS/donkey-kong.jpg","rating":2},{"name":"LEGO Harry Potter: Collection","image":"https://i.ibb.co/sWxLyvk/harry-potter.jpg","rating":2},{"name":"Mario Kart 8 Deluxe","image":"https://i.ibb.co/bRNxwLC/mario-kart-8.jpg","rating":2},{"name":"Minecraft","image":"https://i.ibb.co/YPf1PHz/minecraft.jpg","rating":2},{"name":"Spyro Reignited Trilogy","image":"https://i.ibb.co/1q0MnP7/spyro.jpg","rating":2},{"name":"New Super Mario Bros. U Deluxe","image":"https://i.ibb.co/DDNhwGC/super-mario-deluxe.jpg","rating":2},{"name":"Super Mario Odyssey","image":"https://i.ibb.co/nQ1P0m4/super-mario-odyssey.jpg","rating":2},{"name":"Super Smash Bros. Ultimate","image":"https://i.ibb.co/DfMzGcH/super-smash-bros.jpg","rating":2},{"name":"The Witcher 3: Wild Hunt \u2014 Complete Edition Standard","image":"https://i.ibb.co/hfJG99C/the-witcher.jpg","rating":2},{"name":"Yoshi\'s Crafted World","image":"https://i.ibb.co/T1fBkPT/yoshi.jpg","rating":2},{"name":"The Legend of Zelda: Breath of the Wild","image":"https://i.ibb.co/3kDSzPk/zelda.jpg","rating":2},{"name":"Legend of Zelda Link\'s Awakening","image":"https://i.ibb.co/BBbb5JM/zelda-links-awakening.jpg","rating":2}]')},57:function(e,t,a){e.exports=a(69)},62:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(26),o=a.n(r),c=(a(62),a(17)),s=a(18),l=a(33),m=a(27),g=a(34),u=a(50),p=a(93),h=a(94),f=a(52),b=a(95),d=a(92),y=a(53),j=a(96),E=a(51),k=a(86),w=a(98),v=a(88),x=a(89),O=a(90),C=a(97),D=Object(k.a)((function(e){return{root:{width:"18rem",margin:"0.5rem",fontFamily:"Montserrat"},media:{height:"25rem",margin:"0 -7% 0 -7%"},rating:{display:"flex",justifyContent:"center"}}})),S=function(e){var t=e.name,a=e.rating,n=e.image,r=i.a.useState(a),o=Object(E.a)(r,2),c=o[0],s=o[1],l=D();return i.a.createElement(w.a,{className:l.root},i.a.createElement(v.a,{style:{height:"6rem"},title:t}),i.a.createElement(x.a,{className:l.media,image:n,title:t}),i.a.createElement(O.a,null,i.a.createElement(C.a,{name:n,size:"large",value:c,className:l.rating,onChange:function(e,t){s(null!==t&&void 0!==t?t:c)}})))},B=a(35),W=a(44),M=a.n(W),z=a(45),L=a.n(z),N=function(){return i.a.createElement(b.a,{style:{marginBottom:"1rem"}},i.a.createElement("img",{className:"app-logo",alt:"logo",style:{height:"3rem",width:"3rem"},src:L.a}))},P=function(){return i.a.createElement(b.a,{style:{backgroundImage:"url(".concat(M.a,")"),width:"100%",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",marginTop:"1rem",padding:"5rem 0"}},i.a.createElement(N,null),i.a.createElement(B.a,null,"Porschestra\xdfe 58, 38440,"),i.a.createElement(B.a,null,"Wolfsburg, Germany"))},T=a(48),G=a.n(T),J=function(){return i.a.createElement(b.a,{style:{padding:"1rem",display:"flex"}},i.a.createElement(i.a.Fragment,null,i.a.createElement(G.a,{style:{fontSize:"2rem",marginRight:"1rem"}}),i.a.createElement(B.a,{variant:"h4",component:"h4"},"Rating Games Assignment ;)")))},I=a(91),R=a(49),A=function(){function e(){Object(c.a)(this,e),this.buttonActive$=new y.a,this.gameList$=new I.a(R)}return Object(s.a)(e,[{key:"shuffle",value:function(){}}],[{key:"getInstance",value:function(){return this._instance}}]),e}();A._instance=new A;var F=A.getInstance(),H=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={games:[],onDestroy:new y.a},a}return Object(g.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;F.gameList$.pipe(Object(j.a)(this.state.onDestroy)).subscribe((function(t){e.setState((function(e){return Object(f.a)({},e,{games:t})}))}))}},{key:"componentWillUnmount",value:function(){this.state.onDestroy.next()}},{key:"render",value:function(){return i.a.createElement(d.a,{maxWidth:"xl"},i.a.createElement(J,null),i.a.createElement(b.a,{style:{display:"flex",flexWrap:"wrap",justifyContent:"center"}},this.state.games.map((function(e,t){return i.a.createElement(S,Object.assign({},e,{key:t}))}))),i.a.createElement(P,null))}}]),t}(i.a.Component),$=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=Object(u.a)({typography:{fontFamily:"Dosis"}});return i.a.createElement(p.a,{theme:e},i.a.createElement(h.a,null),i.a.createElement(H,{"data-testid":"main-page"}))}}]),t}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement($,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[57,1,2]]]);
//# sourceMappingURL=main.d64110a3.chunk.js.map