(this.webpackJsonprecipeapp=this.webpackJsonprecipeapp||[]).push([[0],{13:function(e,t,c){},15:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(1),r=c.n(a),i=c(5),s=c.n(i),o=(c(13),c(4)),u=c.n(o),p=c(6),j=c(2),l=(c(15),c(7)),b=c.n(l),h=function(e){var t=e.title,c=e.calories,a=e.image,r=e.ingredients;return Object(n.jsxs)("div",{className:b.a.recipe,children:[Object(n.jsx)("h1",{children:t}),Object(n.jsx)("ol",{children:r.map((function(e){return Object(n.jsx)("li",{children:e.text})}))}),Object(n.jsx)("p",{children:c}),Object(n.jsx)("img",{src:a,alt:""})]})},d=function(){var e=Object(a.useState)([]),t=Object(j.a)(e,2),c=t[0],r=t[1],i=Object(a.useState)(""),s=Object(j.a)(i,2),o=s[0],l=s[1],b=Object(a.useState)("banana"),d=Object(j.a)(b,2),f=d[0],m=d[1];Object(a.useEffect)((function(){O()}),[f]);var O=function(){var e=Object(p.a)(u.a.mark((function e(){var t,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.edamam.com/search?q=".concat(f,"&app_id=").concat("164ae060","&app_key=").concat("405566ec9e4d545568498b16dc4f1835"));case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,console.log(c.hits),r(c.hits);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsxs)("form",{onSubmit:function(e){e.preventDefault(),m(o),l("")},className:"search-form",children:[Object(n.jsx)("input",{className:"search-bar",type:"text",value:o,onChange:function(e){l(e.target.value)}}),Object(n.jsx)("button",{className:"search-button",type:"submit",children:"Search"})]}),Object(n.jsx)("div",{className:"recipes",children:c.map((function(e){return Object(n.jsx)(h,{title:e.recipe.label,calories:e.recipe.calories,image:e.recipe.image,ingredients:e.recipe.ingredients},e.recipe.label)}))})]})},f=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,17)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),r(e),i(e)}))};s.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(d,{})}),document.getElementById("root")),f()},7:function(e,t,c){e.exports={recipe:"recipe_recipe__1Kos8",image:"recipe_image__2tDU5"}}},[[16,1,2]]]);
//# sourceMappingURL=main.36487095.chunk.js.map