(this.webpackJsonpquiz_typescript=this.webpackJsonpquiz_typescript||[]).push([[0],{54:function(n,e,t){"use strict";t.r(e);var r,a,c,i,s=t(0),o=t.n(s),l=t(25),d=t.n(l),u=t(4),b=t(5),p=t.n(b),f=t(10),x=t(3),j=t(14),g=function(){var n=Object(f.a)(p.a.mark((function n(e,t,r){var a,c,i;return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a="https://opentdb.com/api.php?amount=".concat(e,"&difficulty=").concat(t,"&type=multiple&category=").concat(r),n.prev=1,n.next=4,fetch(a);case 4:return c=n.sent,n.next=7,c.json();case 7:return i=n.sent,n.abrupt("return",i.results.map((function(n){return Object(j.a)(Object(j.a)({},n),{},{answers:(e=[].concat(Object(u.a)(n.incorrect_answers),[n.correct_answer]),Object(u.a)(e).sort((function(){return Math.random()-.5})))});var e})));case 11:n.prev=11,n.t0=n.catch(1),console.log(n.t0);case 14:case"end":return n.stop()}}),n,null,[[1,11]])})));return function(e,t,r){return n.apply(this,arguments)}}(),h=t(6),m=t(7),O=m.b.div(r||(r=Object(h.a)(["\n  max-width: 1100px;\n  background: #ebfeff;\n  border-radius: 10px;\n  border: 2px solid #0085a3;\n  padding: 20px;\n  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);\n  text-align: center;\n  p {\n    font-size: 1rem;\n  }\n  .btn{\n    cursor: pointer;\n    background: linear-gradient(180deg, #ffffff, #ffcc91);\n    border: 2px solid #d38558;\n    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);\n    border-radius: 10px;\n    height: 40px;\n    margin: 20px 0;\n    padding: 0 40px;\n  }\n"]))),v=m.b.div(a||(a=Object(h.a)(["\n  transition: all 0.3s ease;\n  :hover {\n    opacity: 0.8;\n  }\n  button {\n    cursor: pointer;\n    user-select: none;\n    font-size: 0.8rem;\n    width: 100%;\n    height: 40px;\n    margin: 5px 0;\n    background: ",";\n    border: 3px solid #ffffff;\n    box-shadow: 1px 2px 0px rgba(0, 0, 0, 0.1);\n    border-radius: 10px;\n    color: #fff;\n    text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);\n  }\n"])),(function(n){var e=n.correct,t=n.userClicked;return e?"linear-gradient(90deg, #56FFA4, #59BC86)":!e&&t?"linear-gradient(90deg, #FF5656, #C16868)":"linear-gradient(90deg, #56ccff, #6eafb4)"})),w=t(1),y=function(n){var e=n.question,t=n.answers,r=n.callback,a=n.userAnswer,c=n.questionNumber,i=n.totalQuestions,s=n.setGameOver,o=n.setCategory;return Object(w.jsx)(O,{children:Object(w.jsxs)("div",{children:[Object(w.jsxs)("p",{className:"number",children:["Question: ",c," / ",i]}),Object(w.jsx)("p",{dangerouslySetInnerHTML:{__html:e}}),Object(w.jsx)("div",{children:t.map((function(n){return Object(w.jsx)(v,{correct:(null===a||void 0===a?void 0:a.correctAnswer)===n,userClicked:(null===a||void 0===a?void 0:a.answer)===n,children:Object(w.jsx)("div",{children:Object(w.jsx)("button",{disabled:!!a,value:n,onClick:r,children:Object(w.jsx)("span",{dangerouslySetInnerHTML:{__html:n}})})},n)},n)}))}),c===i&&a?Object(w.jsx)("button",{className:"btn",onClick:function(){s(!0),o(9)},children:" Play Again? "}):null]})})},k=t.p+"static/media/images.142057eb.jpeg",z=Object(m.a)(c||(c=Object(h.a)(["\n  html {\n    height: 100%;\n  }\n  body {\n    background-image: url(",");\n    background-size: cover;\n    margin: 0;\n    padding: 0 20px;\n    display: flex;\n    justify-content: center;\n  }\n  * {\n    font-family: 'Catamaran', sans-serif;\n    box-sizing: border-box;\n  }\n"])),k),C=m.b.div(i||(i=Object(h.a)(['\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  > p {\n    color: #fff;\n  }\n  \n  .score {\n    color: #fff;\n    font-size: 2rem;\n    margin: 0;\n  }\n\n  .scores{\n      display: flex; \n      > p{\n          margin: 1rem;\n      } \n  }\n\n  h1 {\n    font-family: Fascinate Inline;\n    background-image: linear-gradient(180deg, #fff, #87f1ff);\n    font-weight: 400;\n    background-size: 100%;\n    background-clip: text;\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    -moz-background-clip: text;\n    -moz-text-fill-color: transparent;\n    filter: drop-shadow(2px 2px #0085a3);\n    font-size: 70px;\n    text-align: center;\n    margin-top: 25px;\n    marging-bottom: 0;\n  }\n\n  .start, .next {\n    cursor: pointer;\n    background: linear-gradient(180deg, #ffffff, #ffcc91);\n    border: 2px solid #d38558;\n    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);\n    border-radius: 10px;\n    height: 40px;\n    margin: 20px 0;\n    padding: 0 40px;\n  }\n\n  .start {\n    max-width: 200px;\n    height: 3rem;\n    width: 8.9rem;\n  }\n\n  select {\n      width: 40vw;\n      margin: 0;\n      height: 3rem;\n      border: 2px solid #d38558;\n      box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);\n      border-radius: 10px;\n  }\n\n  .text {\n    font-size: 1.3rem;\n    margin: 0.85rem;\n    color: #f9f1f1;\n  }\n\n  .lds-hourglass {\n    display: inline-block;\n    position: relative;\n    width: 80px;\n    height: 80px;\n  }\n\n  .lds-hourglass:after {\n    content: " ";\n    display: block;\n    border-radius: 50%;\n    width: 0;\n    height: 0;\n    margin: 8px;\n    box-sizing: border-box;\n    border: 32px solid #fff;\n    border-color: #fff transparent #fff transparent;\n    animation: lds-hourglass 1.2s infinite;\n  }\n  \n  @keyframes lds-hourglass {\n    0% {\n      transform: rotate(0);\n      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    }\n    50% {\n      transform: rotate(900deg);\n      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n    }\n    100% {\n      transform: rotate(1800deg);\n    }\n  }\n']))),S=t(29),_=t.n(S),N=[5,6,7,8,9,10,12,14,16,18,20,25],q=function(){var n=Object(s.useState)(!1),e=Object(x.a)(n,2),t=e[0],r=e[1],a=Object(s.useState)([]),c=Object(x.a)(a,2),i=c[0],o=c[1],l=Object(s.useState)(0),d=Object(x.a)(l,2),b=d[0],j=d[1],h=Object(s.useState)([]),m=Object(x.a)(h,2),O=m[0],v=m[1],k=Object(s.useState)(0),S=Object(x.a)(k,2),q=S[0],F=S[1],Q=Object(s.useState)(!0),A=Object(x.a)(Q,2),H=A[0],M=A[1],I=Object(s.useState)(9),T=Object(x.a)(I,2),E=T[0],B=T[1],G=Object(s.useState)([]),J=Object(x.a)(G,2),L=J[0],P=J[1],D=Object(s.useState)(5),K=Object(x.a)(D,2),R=K[0],U=K[1],V=Object(s.useState)("easy"),W=Object(x.a)(V,2),X=W[0],Y=W[1],Z=function(){var n=Object(f.a)(p.a.mark((function n(){var e;return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(!0),M(!1),n.next=4,g(R,X,E);case 4:e=n.sent,o(e),F(0),v([]),j(0),r(!1);case 10:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();Object(s.useEffect)((function(){_.a.get("https://opentdb.com/api_category.php").then((function(n){P(n.data.trivia_categories),console.log(n.data.trivia_categories),console.log(E),console.log(R),console.log(X)}))}),[E,R,X]);return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(z,{}),Object(w.jsxs)(C,{children:[Object(w.jsx)("h1",{children:"Quiz Time!"}),H?Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)("p",{className:"text",children:" Choose a Category "}),Object(w.jsx)("select",{onChange:function(n){B(n.target.value)},children:L.map((function(n){return Object(w.jsx)("option",{value:n.id,children:n.name},n.id)}))}),Object(w.jsx)("p",{className:"text",children:" How many Questions? "}),Object(w.jsx)("select",{onChange:function(n){U(n.target.value)},children:N.map((function(n){return Object(w.jsxs)("option",{value:n,children:[" ",n," Questions "]},n)}))}),Object(w.jsx)("p",{className:"text",children:" How difficult? "}),Object(w.jsxs)("select",{onChange:function(n){Y(n.target.value)},children:[Object(w.jsx)("option",{value:"easy",children:" Easy "}),Object(w.jsx)("option",{value:"medium",children:" Medium "}),Object(w.jsx)("option",{value:"hard",children:" Hard "})]}),Object(w.jsx)("button",{className:"start",onClick:Z,children:"Start"})]}):null,H?null:Object(w.jsxs)("p",{className:"score",children:["Score: ",q]}),t?Object(w.jsx)("div",{className:"lds-hourglass"}):null,!t&&!H&&Object(w.jsx)(y,{questionNumber:b+1,totalQuestions:R,question:i[b].question,answers:i[b].answers,userAnswer:O?O[b]:void 0,callback:function(n){if(!H){var e=n.currentTarget.value,t=i[b].correct_answer===e;t&&F((function(n){return n+1}));var r={question:i[b].question,answer:e,correct:t,correctAnswer:i[b].correct_answer};v((function(n){return[].concat(Object(u.a)(n),[r])}))}},setGameOver:M,setCategory:B}),H||t||O.length!==b+1||b===R-1?null:Object(w.jsx)("button",{className:"next",onClick:function(){var n=b+1;j(n)},children:"Next Question"})]})]})};d.a.render(Object(w.jsx)(o.a.StrictMode,{children:Object(w.jsx)(q,{})}),document.getElementById("root"))}},[[54,1,2]]]);
//# sourceMappingURL=main.922c9ee5.chunk.js.map