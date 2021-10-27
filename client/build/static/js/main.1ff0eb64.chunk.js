(this["webpackJsonpcipher-app"]=this["webpackJsonpcipher-app"]||[]).push([[0],{25:function(e,n,t){},52:function(e,n,t){"use strict";t.r(n);var r,i,a,c,o,s,l,d,p,u,h,b,g,f,j,x,m,O,y,v,w,k,C,S,z,I,T,A,D,F,E,L,P,N,_,K,R=t(2),V=t.n(R),q=t(18),B=t.n(q),J=(t(25),t(17)),U=t(31),X=t(5),Y=t(4),G=t(15),H=Y.b.div(r||(r=Object(X.a)(["\n  background-color: transparent;\n  height: 100vh;\n  position: fixed;\n  top: 0;\n  right: 0;\n  width: 100%;\n  z-index: 2000;\n  transform: translateX(100%);\n  transition: transform 600ms ease;\n\n  &.active {\n    /* background-color: rgba(0, 0, 0, 0.2); */\n    transform: translateX(0);\n  }\n"]))),M=Y.b.aside(i||(i=Object(X.a)(["\n  background-color: ",";\n  border-left: 2px solid ",";\n  box-shadow: ",";\n  height: 100vh;\n  position: fixed;\n  top: 0;\n  right: 0;\n  width: 80%;\n\n  @media only screen and (min-width: 576px) {\n    width: 60%;\n  }\n\n  @media only screen and (min-width: 768px) {\n    width: 50%;\n  }\n\n  @media only screen and (min-width: 992px) {\n    width: 40%;\n  }\n\n  @media only screen and (min-width: 1200px) {\n    width: 25%;\n  }\n"])),(function(e){return e.theme.background}),(function(e){return e.theme.border}),(function(e){return e.theme.shadow})),Z=Y.b.div(a||(a=Object(X.a)(["\n  border-bottom: 1px solid ",";\n  padding: 1.8rem 3rem;\n\n  button {\n    background-color: transparent;\n    border: none;\n    cursor: pointer;\n    height: 2.5rem;\n    outline: none;\n\n    svg {\n      color: ",";\n      font-size: 2.5rem;\n      font-weight: 600;\n    }\n  }\n"])),(function(e){return e.theme.border}),(function(e){return e.theme.text})),Q=Y.b.ul(c||(c=Object(X.a)(["\n  display: flex;\n  flex-direction: column;\n"]))),W=Y.b.li(o||(o=Object(X.a)(["\n  display: block;\n"]))),$=Object(Y.b)(G.b)(s||(s=Object(X.a)(["\n  border-bottom: 1px solid ",";\n  color: ",";\n  display: block;\n  font-size: 1.6rem;\n  font-weight: 600;\n  text-transform: capitalize;\n  padding: 1.25rem 3rem;\n  transition: all 0.3s;\n\n  &:hover {\n    background-color: ",";\n    padding-left: 3.5rem;\n  }\n\n  &.active {\n    background-color: ",";\n    border-left: 3px solid #26a69a;\n    color: #26a69a;\n  }\n"])),(function(e){return e.theme.border}),(function(e){return e.theme.text}),(function(e){return e.theme.hover}),(function(e){return e.theme.active})),ee=t(30),ne=t(1),te=function(e){var n=e.showSidebar,t=e.setShowSidebar;return Object(ne.jsx)(H,{className:n?"active close":"",onClick:function(e){(e.target.classList.contains("close")||"A"===e.target.nodeName)&&t(!1)},children:Object(ne.jsxs)(M,{children:[Object(ne.jsx)(Z,{children:Object(ne.jsx)("button",{onClick:function(){return t(!1)},children:Object(ne.jsx)(ee.a,{})})}),Object(ne.jsxs)(Q,{children:[Object(ne.jsx)(W,{children:Object(ne.jsx)($,{exact:!0,to:"/",children:"ceasar"})}),Object(ne.jsx)(W,{children:Object(ne.jsx)($,{to:"/affine",children:"affine"})}),Object(ne.jsx)(W,{children:Object(ne.jsx)($,{to:"/reverse",children:"reverse"})}),Object(ne.jsx)(W,{children:Object(ne.jsx)($,{to:"/transposition",children:"transposition"})})]})]})})},re=Y.b.div(l||(l=Object(X.a)(["\n  background-color: #4db6ac;\n  font-family: 'Zen Antique Soft', serif;\n  height: 6.4rem;\n"]))),ie=Y.b.div(d||(d=Object(X.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin: 0 auto;\n  line-height: 6.4rem;\n  width: 90%;\n\n  @media only screen and (min-width: 576px) {\n    width: 80%;\n  }\n"]))),ae=Object(Y.b)(G.b)(p||(p=Object(X.a)(["\n  color: #fff;\n  font-size: 3.2rem;\n"]))),ce=Y.b.ul(u||(u=Object(X.a)(["\n  display: flex;\n"]))),oe=Y.b.li(h||(h=Object(X.a)(["\n  display: flex;\n  align-items: center;\n  padding: 0;\n  transition: background-color 0.3s;\n\n  /* &:hover {\n    background-color: rgba(0, 0, 0, 0.1);\n  } */\n"]))),se=(Object(Y.b)(G.b)(b||(b=Object(X.a)(["\n  color: #fff;\n  display: none;\n  font-size: 1.6rem;\n  padding: 0 1.5rem;\n  text-transform: capitalize;\n\n  @media only screen and (min-width: 576px) {\n    display: block;\n  }\n"]))),Y.b.button(g||(g=Object(X.a)(["\n  background-color: transparent;\n  border: none;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  height: 100%;\n  outline: none;\n\n  svg {\n    display: block;\n    color: #fff;\n    font-size: 2.5rem;\n    font-weight: 600;\n  }\n"])))),le=Y.b.div(f||(f=Object(X.a)(["\n  background-color: #4d4d4d;\n  border-radius: calc(4.6rem / 4);\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  height: 2.4rem;\n  margin-right: 1rem;\n  position: relative;\n  width: 4.6rem;\n\n  span {\n    font-size: 1.4rem;\n    text-align: center;\n    width: 2.4rem;\n  }\n\n  & > .ball {\n    background-color: #fff;\n    border: 0.2rem solid #4d4d4d;\n    border-radius: 50%;\n    height: 2.3rem;\n    position: absolute;\n    left: 0;\n    transition: all 0.25s ease;\n    transform: translateX(\n      ","\n    );\n    width: 2.3rem;\n  }\n\n  &:hover {\n    box-shadow: 0 0 2px 3px #ba8fff;\n  }\n"])),(function(e){return"light"===e.theme?"0":"100%"})),de=function(e){var n=e.theme,t=e.setTheme,r=Object(R.useState)(!1),i=Object(J.a)(r,2),a=i[0],c=i[1];return Object(R.useEffect)((function(){document.body.style.overflow=a?"hidden":"auto"}),[a]),Object(ne.jsxs)(re,{children:[Object(ne.jsxs)(ie,{children:[Object(ne.jsx)(ae,{to:"/",children:"CipherVip"}),Object(ne.jsxs)(ce,{children:[Object(ne.jsx)(oe,{children:Object(ne.jsxs)(le,{onClick:function(){t("light"===n?"dark":"light")},theme:n,children:[Object(ne.jsx)("span",{children:"\ud83c\udf1c"}),Object(ne.jsx)("div",{className:"ball"}),Object(ne.jsx)("span",{children:"\ud83c\udf1e"})]})}),Object(ne.jsx)(oe,{children:Object(ne.jsx)(se,{onClick:function(){return c(!0)},children:Object(ne.jsx)(U.a,{})})})]})]}),Object(ne.jsx)(te,{showSidebar:a,setShowSidebar:c})]})},pe=t(8),ue=t(7),he=t.n(ue),be=t(9),ge=t(3),fe=t(6),je=t(34),xe=t(33),me=Y.b.div(j||(j=Object(X.a)(["\n  background-color: ",";\n  border-radius: 0.2rem;\n  box-shadow: ",";\n  box-sizing: border-box;\n  height: ",";\n  max-width: 50rem;\n  margin-bottom: 4rem;\n  padding: 0 0.75rem;\n  position: relative;\n  width: 100%;\n\n  @media only screen and (min-width: 1200px) {\n    margin-bottom: 1rem;\n    width: 31.5%;\n  }\n"])),(function(e){return e.theme.background}),(function(e){return e.theme.shadow}),(function(e){return e.textarea?"30rem":"auto"})),Oe=Y.b.div(x||(x=Object(X.a)(["\n  border-bottom: 1px solid ",";\n  border-radius: 0 0 0.2rem 0.2rem;\n  color: #4db6ac;\n  font-size: 2.4rem;\n  font-weight: 600;\n  line-height: 4.8rem;\n  padding: 2rem;\n  text-align: ",";\n  text-transform: capitalize;\n"])),(function(e){return e.theme.border}),(function(e){return"center"===e.align?"center":"left"})),ye=Y.b.div(m||(m=Object(X.a)(["\n  display: block;\n  width: 100%;\n"]))),ve=Y.b.textarea(O||(O=Object(X.a)(["\n  background-color: ",";\n  border: none;\n  color: ",";\n  display: block;\n  font-family: 'Source Code Pro', monospace;\n  font-weight: 400;\n  font-size: 1.6rem;\n  height: 20rem;\n  line-height: 1.5;\n  letter-spacing: 1px;\n  margin-bottom: 0.5rem;\n  overflow: hidden;\n  outline: none;\n  padding: 2rem;\n  resize: none;\n  transition: all 0.2s ease 0s;\n  width: 100%;\n\n  &:focus {\n    border-bottom: 1px solid ",";\n    box-shadow: 0 1px 0 0 #26a69a;\n  }\n"])),(function(e){return e.theme.background}),(function(e){return e.theme.text}),(function(e){return e.theme.border})),we=Y.b.span(y||(y=Object(X.a)(["\n  color: #797f86;\n  display: flex;\n  font-family: 'Source Code Pro', monospace;\n  font-weight: 400;\n  font-size: 1.6rem;\n  height: 20rem;\n  line-height: 1.5;\n  letter-spacing: 1px;\n  margin-bottom: 0.5rem;\n  overflow: hidden;\n  padding: 2rem;\n  width: 100%;\n\n  img {\n    margin: auto;\n  }\n"]))),ke=Y.b.div(v||(v=Object(X.a)(["\n  border-bottom: 1px solid ",";\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n  padding: 2rem 1rem;\n\n  @media only screen and (min-width: 576px) {\n    padding: 2rem;\n  }\n\n  @media only screen and (min-width: 1400px) {\n    & {\n      padding: 2rem 3.8rem;\n    }\n  }\n"])),(function(e){return e.theme.border})),Ce=Y.b.button(w||(w=Object(X.a)(["\n  background-color: #26a69a;\n  border: none;\n  border-radius: 0.2rem;\n  color: rgb(232, 230, 227);\n  cursor: pointer;\n  font-weight: 600;\n  height: 3.6rem;\n  letter-spacing: 0.5px;\n  line-height: 3.6rem;\n  margin-top: 1rem;\n  max-width: 11.6rem;\n  padding: 0 3.2rem;\n  text-align: center;\n  text-decoration-color: initial;\n  text-transform: uppercase;\n  transition: background-color 0.3s ease 0s;\n  vertical-align: middle;\n  width: 11.6rem;\n\n  &:hover {\n    background-color: rgb(34, 150, 138);\n  }\n"]))),Se=Object(Y.b)(ke)(k||(k=Object(X.a)(["\n  align-items: flex-start;\n  flex-direction: column;\n  padding: 1rem 0.2rem;\n  div {\n    margin: 0 auto;\n    width: 100%;\n  }\n\n  label {\n    color: #4db6ac;\n    display: block;\n    font-size: 1.4rem;\n    padding-left: 1.8rem;\n  }\n\n  "," {\n    margin-top: 0;\n  }\n\n  @media only screen and (min-width: 576px) {\n    padding: 2rem 2rem 1rem 2rem;\n  }\n\n  @media only screen and (min-width: 1200px) {\n    padding: 1rem 0.2rem;\n  }\n\n  @media only screen and (min-width: 1400px) {\n    padding: 2rem 2rem 1rem 2rem;\n  }\n"])),Ce),ze=Y.b.div(C||(C=Object(X.a)(["\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n\n  input {\n    background-color: ",";\n    border: none;\n    color: ",";\n    flex-grow: 1;\n    font-size: 1.6rem;\n    letter-spacing: 1px;\n    outline: none;\n    text-align: center;\n\n    /* Chrome, Safari, Edge, Opera */\n    &::-webkit-outer-spin-button,\n    &::-webkit-inner-spin-button {\n      -webkit-appearance: none;\n      margin: 0;\n    }\n\n    /* Firefox */\n    -moz-appearance: textfield;\n  }\n\n  input[type='text'] {\n    border-bottom: 1px solid transparent;\n    margin-left: 1.8rem;\n    padding-top: 1rem;\n    padding-bottom: 0.5rem;\n    text-align: left;\n\n    &:focus {\n      border-color: #4db6ac;\n    }\n  }\n"])),(function(e){return e.theme.background}),(function(e){return e.theme.text})),Ie=Object(Y.b)(Ce)(S||(S=Object(X.a)(["\n  background-color: transparent;\n  color: ",";\n  cursor: ",";\n  font-size: 2.6rem;\n  font-weight: 600;\n  height: 4.6rem;\n  padding: 0;\n  width: 4.6rem;\n\n  &:hover {\n    background-color: transparent;\n    color: ",";\n    transform: ",";\n  }\n"])),(function(e){return e.disabled?"#797f86":"#988f81"}),(function(e){return e.disabled?"initial":"pointer"}),(function(e){return e.disabled?"#797f86":"#4db6ac"}),(function(e){return e.disabled?"scale(1)":"scale(1.5)"})),Te=Object(Y.b)(Se)(z||(z=Object(X.a)(["\n  div {\n    display: flex;\n    flex-direction: column;\n    margin-top: 0.5rem;\n  }\n\n  span {\n    color: ",";\n    font-size: 1.4rem;\n    height: 2.6rem;\n    line-height: 2.6rem;\n    letter-spacing: 1px;\n    padding-left: 1.8rem;\n    text-align: left;\n    vertical-align: middle;\n\n    &:first-child {\n      font-size: 1.2rem;\n      text-transform: uppercase;\n    }\n  }\n"])),(function(e){return e.theme.text})),Ae=Object(Y.b)(Se)(I||(I=Object(X.a)(["\n  flex-direction: row;\n  padding: 0 0.2rem;\n\n  & > div {\n    height: 100%;\n    padding: 2rem 0 2rem 1.8rem;\n    width: 100%;\n  }\n\n  label {\n    padding-left: 0;\n  }\n\n  @media only screen and (min-width: 576px) {\n    padding: 0 2rem;\n\n    & > div {\n      width: 50%;\n    }\n  }\n\n  @media only screen and (min-width: 1200px) {\n    padding: 0 0.2rem;\n  }\n\n  @media only screen and (min-width: 1400px) {\n    padding: 0 2rem;\n  }\n"]))),De=Y.b.div(T||(T=Object(X.a)(["\n  border-bottom: 1px solid ",";\n  display: flex;\n  flex-direction: column;\n\n  @media only screen and (min-width: 576px) {\n    border-bottom: none;\n    border-right: 1px solid ",";\n  }\n\n  @media only screen and (min-width: 1200px) {\n    button {\n      padding-right: 0;\n    }\n  }\n\n  @media only screen and (min-width: 1400px) {\n    button {\n      padding-right: 3.2rem;\n    }\n  }\n"])),(function(e){return e.theme.border}),(function(e){return e.theme.border})),Fe=Y.b.div(A||(A=Object(X.a)(["\n  position: relative;\n\n  svg {\n    color: ",";\n    font-size: 1.8rem;\n    position: absolute;\n    top: 1.2rem;\n    right: 2.5rem;\n    pointer-events: none;\n  }\n\n  @media only screen and (min-width: 1200px) {\n    svg {\n      right: 0.5rem;\n    }\n  }\n\n  @media only screen and (min-width: 1400px) {\n    svg {\n      right: 1.5rem;\n    }\n  }\n"])),(function(e){return e.theme.text})),Ee=Y.b.button(D||(D=Object(X.a)(["\n  background-color: transparent;\n  border: none;\n  color: ",";\n  cursor: pointer;\n  font-size: 1.5rem;\n  font-weight: 600;\n  outline: none;\n  padding: 1.2rem 3.2rem 0 0;\n  text-align: left;\n  width: 100%;\n\n  &:first-letter {\n    text-transform: uppercase;\n  }\n"])),(function(e){return e.theme.text})),Le=Y.b.ul(F||(F=Object(X.a)(["\n  background-color: ",";\n  box-shadow: 0 0.2rem 0.5rem 0 rgb(0 0 0 / 16%),\n    0 0.2rem 1rem 0 rgb(0 0 0 / 12%);\n  border-radius: 0.25rem;\n  color: ",";\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  left: -1.8rem;\n  top: 140%;\n  z-index: 1008;\n  width: calc(100% + 1.8rem);\n\n  @media only screen and (min-width: 576px) {\n    left: -3.8rem;\n    width: calc(100% + 3.8rem);\n  }\n\n  li {\n    cursor: pointer;\n    font-size: 1.3rem;\n    font-weight: 600;\n    padding: 1.25rem;\n    padding-left: 3.8rem;\n    transition: all 0.2s linear 0s;\n\n    &:hover {\n      background-color: ",";\n      padding-left: 4.2rem;\n    }\n\n    &.active {\n      background-color: ",";\n      color: #26a69a;\n    }\n\n    &:first-letter {\n      text-transform: uppercase;\n    }\n  }\n"])),(function(e){return e.theme.background}),(function(e){return e.theme.text}),(function(e){return e.theme.hover}),(function(e){return e.theme.active})),Pe=Y.b.div(E||(E=Object(X.a)(["\n  "," {\n    padding-top: 1.2rem;\n\n    button {\n      background-color: transparent;\n      border: none;\n      color: ",";\n      cursor: pointer;\n      font-size: 1.5rem;\n      font-weight: 600;\n      outline: none;\n      transition: color 0.2s ease 0s;\n\n      &:first-letter {\n        text-transform: uppercase;\n      }\n\n      &:first-child {\n        margin-right: 1rem;\n      }\n\n      &.active {\n        color: #26a69a;\n      }\n    }\n  }\n"])),Fe,(function(e){return e.theme.text})),Ne=Y.b.div(L||(L=Object(X.a)(["\n  color: ",";\n  display: flex;\n  align-items: center;\n  padding: 1.25rem 1.8rem;\n\n  svg {\n    font-size: 1.6rem;\n    font-weight: 600;\n    fill: currentColor;\n    margin-right: 0.5rem;\n  }\n\n  span {\n    font-size: 1.4rem;\n    line-height: 1.4;\n    letter-spacing: 1px;\n  }\n\n  @media only screen and (min-width: 576px) {\n    padding: 1.25rem 3.8rem;\n  }\n\n  @media only screen and (min-width: 1200px) {\n    padding: 1.25rem 1.8rem;\n  }\n\n  @media only screen and (min-width: 1400px) {\n    padding: 1.25rem 3.8rem;\n  }\n"])),(function(e){return e.theme.text})),_e=Y.b.div(P||(P=Object(X.a)(["\n  background-color: ",";\n  padding: 3.6rem 0;\n  text-align: center;\n\n  div {\n    line-height: 1.5;\n    letter-spacing: 0.1rem;\n    margin: 0 auto;\n    width: 80%;\n  }\n\n  h1 {\n    color: ",";\n    display: block;\n    font-size: 1.8rem;\n    font-weight: 600;\n    padding-bottom: 1.4rem;\n    width: 100%;\n  }\n\n  p {\n    color: ",";\n    font-size: 1.4rem;\n    font-weight: 590;\n    width: 100%;\n  }\n\n  a {\n    color: #4db6ac;\n    font-weight: 600;\n  }\n\n  @media only screen and (min-width: 576px) {\n    h1 {\n      font-size: 2.1rem;\n    }\n\n    p {\n      font-size: 1.6rem;\n    }\n  }\n\n  @media only screen and (min-width: 992px) {\n    text-align: left;\n\n    h1,\n    p {\n      max-width: 70rem;\n    }\n  }\n\n  @media only screen and (min-width: 1200px) {\n    margin-top: 2rem;\n\n    h1,\n    p {\n      max-width: 80rem;\n    }\n  }\n"])),(function(e){return e.theme.background}),(function(e){return e.theme.title}),(function(e){return e.theme.text})),Ke=function(){return Object(ne.jsxs)(Te,{children:[Object(ne.jsx)("label",{children:"ALPHABET"}),Object(ne.jsxs)("div",{children:[Object(ne.jsx)("span",{children:"abcdefghijklmnopqrstuvwxyz"}),Object(ne.jsx)("span",{children:"abcdefghijklmnopqrstuvwxyz"})]})]})},Re=function(e){var n=e.getForeignChars,t=e.encode,r=e.decode,i=e.plaintext,a=e.ciphertext,c=e.keys,o=e.currentCase,s=e.getCaseStategy,l=e.caseStrategy,d=e.foreignChars,p=e.reset,u=e.titleAlign,h=e.title,b=e.extraInput,g=Object(R.useState)(!1),f=Object(J.a)(g,2),j=f[0],x=f[1],m=function(e){s(e),x(!1)};return Object(ne.jsxs)(me,{children:[Object(ne.jsx)(Oe,{align:u,children:h}),Object(ne.jsxs)(ye,{children:[Object(ne.jsxs)(ke,{children:[Object(ne.jsx)(Ce,{onClick:function(){return t(i,c)},children:"encode"}),Object(ne.jsx)(Ce,{onClick:function(){return r(i,c)},children:"decode"}),Object(ne.jsx)(Ce,{onClick:p,children:"Reset"})]}),b,Object(ne.jsx)(Ke,{}),Object(ne.jsxs)(Ae,{children:[Object(ne.jsxs)(De,{children:[Object(ne.jsx)("label",{children:"CASE STRATEGY"}),Object(ne.jsxs)(Fe,{children:[Object(ne.jsx)(Ee,{onClick:function(){return x(!j)},children:o}),j&&Object(ne.jsx)(Le,{children:l.map((function(e,n){return Object(ne.jsx)("li",{className:e.active?"active":"",id:e.value,onClick:m,children:e.value},n)}))}),Object(ne.jsx)(xe.a,{})]})]}),Object(ne.jsxs)(Pe,{children:[Object(ne.jsx)("label",{children:"FOREIGN CHARS"}),Object(ne.jsxs)(Fe,{children:[Object(ne.jsx)("button",{className:"include"===d?"active":"",id:"include",onClick:function(e){return n(e.target.id)},children:"include"}),Object(ne.jsx)("button",{className:"ignore"===d?"active":"",id:"ignore",onClick:function(e){return n(e.target.id)},children:"ignore"})]})]})]}),Object(ne.jsxs)(Ne,{children:[Object(ne.jsx)(je.a,{}),Object(ne.jsxs)("span",{children:["Decoded ",a.length," chars"]})]})]})]})},Ve=function(e){var n=e.cipher,t=e.desc,r=e.link;return Object(ne.jsx)(_e,{children:Object(ne.jsxs)("div",{children:[Object(ne.jsxs)("h1",{children:[n," cipher: Encode and Decode ",n," to text"]}),Object(ne.jsxs)("p",{children:[Object(ne.jsxs)("a",{href:r,target:"_blank",rel:"noopener noreferrer",children:[n," cipher"," "]}),t]})]})})},qe=function(e){var n=e.title,t=e.titleAlign,r=e.plaintext,i=e.getPlaintext;return Object(ne.jsxs)(me,{textarea:!0,children:[Object(ne.jsx)(Oe,{align:t,children:n}),Object(ne.jsx)(ye,{children:Object(ne.jsx)(ve,{placeholder:"Enter your message...",value:r,onChange:function(e){i(e.target.value)}})})]})},Be=t.p+"static/media/loading.ba14ef10.gif",Je=function(e){var n=e.title,t=e.titleAlign,r=e.currentCase,i=e.foreignChars,a=e.ciphertext,c=e.loading;return Object(ne.jsxs)(me,{textarea:!0,children:[Object(ne.jsx)(Oe,{align:t,children:n}),Object(ne.jsx)(ye,{children:Object(ne.jsx)(we,{children:c?Object(ne.jsx)("img",{src:Be,alt:"loading output"}):"ignore"===i&&"upper case"===r?a.replace(/\s/g,"").toUpperCase():"ignore"===i&&"lower case"===r?a.replace(/\s/g,"").toLowerCase():"ignore"===i&&"maintain case"===r?a.replace(/\s/g,""):"include"===i&&"upper case"===r?a.toUpperCase():"include"===i&&"lower case"===r?a.toLowerCase():"include"===i&&"maintain case"===r?a:void 0})})]})},Ue=function(){var e=Object(be.a)(he.a.mark((function e(n,t,r){var i,a;return he.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(n,{method:"POST",body:JSON.stringify({text:t,key:r}),headers:{"Content-Type":"application/json; charset=UTF-8"}});case 2:return i=e.sent,e.next=5,i.json();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(n,t,r){return e.apply(this,arguments)}}(),Xe=function(e){return e.filter((function(e){return e.active}))[0].value},Ye=Y.b.div(N||(N=Object(X.a)(["\n  background-color: ",";\n  width: 100%;\n"])),(function(e){return e.theme.body})),Ge=Y.b.div(_||(_=Object(X.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin: 0 auto;\n  padding-bottom: 1.6rem;\n  padding-top: 4.8rem;\n  width: 90%;\n\n  @media only screen and (min-width: 576px) {\n    width: 80%;\n  }\n\n  @media only screen and (min-width: 1200px) {\n    justify-content: space-between;\n  }\n"]))),He=t(13),Me={plaintext:"CipherVip",ciphertext:"JpwolyCpw",caseStrategy:[{value:"maintain case",active:!0},{value:"upper case",active:!1},{value:"lower case",active:!1}],foreignChars:"include",key:7,loadingOutput:!1},Ze=Object(He.b)({name:"ceasar",initialState:Me,reducers:{getData:function(e,n){e.plaintext=n.payload.plaintext,e.ciphertext=n.payload.ciphertext,e.caseStrategy=n.payload.caseStrategy,e.foreignChars=n.payload.foreignChars,e.key=n.payload.key},resetData:function(e){e.plaintext=Me.plaintext,e.ciphertext=Me.ciphertext,e.caseStrategy=Me.caseStrategy,e.foreignChars=Me.foreignChars,e.key=Me.key},increaseKey:function(e){e.key+=1},decreaseKey:function(e){e.key-=1},getLoading:function(e,n){e.loadingOutput=n.payload.loadingOutput}}}),Qe=Ze.actions,We=Qe.getData,$e=Qe.resetData,en=Qe.increaseKey,nn=Qe.decreaseKey,tn=Qe.getLoading,rn=function(e){return e.ceasar},an=Ze.reducer,cn=function(){var e=Object(fe.c)(rn),n=Object(fe.b)();return Object(ne.jsx)(ne.Fragment,{children:Object(ne.jsx)(Se,{children:Object(ne.jsxs)("div",{children:[Object(ne.jsx)("label",{htmlFor:"key",children:"KEY"}),Object(ne.jsxs)(ze,{children:[Object(ne.jsxs)(Ie,{disabled:0===parseInt(e.key),onClick:function(){n(nn())},children:[" ","-"," "]}),Object(ne.jsx)("input",{type:"number",min:0,max:26,value:e.key,onChange:function(t){var r;r=t.target.value,n(We(Object(ge.a)(Object(ge.a)({},e),{},{key:r})))}}),Object(ne.jsxs)(Ie,{disabled:26===parseInt(e.key),onClick:function(){n(en())},children:[" ","+"," "]})]})]})})})},on=function(){var e=Object(fe.c)(rn),n=Object(fe.b)(),t=Xe(e.caseStrategy),r=function(t){n(We(Object(ge.a)(Object(ge.a)({},e),{},{ciphertext:t})))},i=function(){var e=Object(be.a)(he.a.mark((function e(t,i){var a,c;return he.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n(tn({loadingOutput:!0})),e.next=4,Ue("/api/ceasar/encode",t,parseInt(i));case 4:a=e.sent,c=a.ciphertext,r(c),n(tn({loadingOutput:!1})),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(n,t){return e.apply(this,arguments)}}(),a=function(){var e=Object(be.a)(he.a.mark((function e(t,i){var a,c;return he.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n(tn({loadingOutput:!0})),e.next=4,Ue("/api/ceasar/decode",t,parseInt(i));case 4:a=e.sent,c=a.ciphertext,r(c),n(tn({loadingOutput:!1})),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(n,t){return e.apply(this,arguments)}}();return Object(ne.jsxs)(Ye,{children:[Object(ne.jsxs)(Ge,{children:[Object(ne.jsx)(qe,{title:"Text Input",titleAlign:!1,plaintext:e.plaintext,getPlaintext:function(t){n(We(Object(ge.a)(Object(ge.a)({},e),{},{plaintext:t})))}}),Object(ne.jsx)(Re,{title:"Ceasar Cipher",titleAlign:"center",keys:e.key,getKey:function(t){n(We(Object(ge.a)(Object(ge.a)({},e),{},{key:t})))},getForeignChars:function(t){n(We(Object(ge.a)(Object(ge.a)({},e),{},{foreignChars:t})))},encode:i,decode:a,plaintext:e.plaintext,ciphertext:e.ciphertext,currentCase:t,getCaseStategy:function(t){var r=t.target.id,i=e.caseStrategy.map((function(e){return e.value===r?Object(ge.a)(Object(ge.a)({},e),{},{active:!0}):Object(ge.a)(Object(ge.a)({},e),{},{active:!1})}));n(We(Object(ge.a)(Object(ge.a)({},e),{},{caseStrategy:i})))},caseStrategy:e.caseStrategy,foreignChars:e.foreignChars,reset:function(){n($e())},extraInput:Object(ne.jsx)(cn,{})}),Object(ne.jsx)(Je,{title:"Text Output",currentCase:t,foreignChars:e.foreignChars,ciphertext:e.ciphertext,loading:e.loadingOutput})]}),Object(ne.jsx)(Ve,{cipher:"Ceasar",desc:" is one of the simplest and most widely known encryption techniques. It is a type of substitution cipher in which each letter in the plaintext is replaced by a letter some fixed number of positions down the alphabet.",link:"https://en.wikipedia.org/wiki/Caesar_cipher"})]})},sn={plaintext:"CipherVip",ciphertext:"RheafsUhe",caseStrategy:[{value:"maintain case",active:!0},{value:"upper case",active:!1},{value:"lower case",active:!1}],foreignChars:"include",key:{a:7,b:3},loadingOutput:!1},ln=Object(He.b)({name:"affine",initialState:sn,reducers:{getData:function(e,n){e.plaintext=n.payload.plaintext,e.ciphertext=n.payload.ciphertext,e.caseStrategy=n.payload.caseStrategy,e.foreignChars=n.payload.foreignChars,e.key=n.payload.key},resetData:function(e){e.plaintext=sn.plaintext,e.ciphertext=sn.ciphertext,e.caseStrategy=sn.caseStrategy,e.foreignChars=sn.foreignChars,e.key=sn.key},increaseSlope:function(e){e.key.a+=1},increaseIntercept:function(e){e.key.b+=1},decreaseSlope:function(e){e.key.a-=1},decreaseIntercept:function(e){e.key.b-=1},getLoading:function(e,n){e.loadingOutput=n.payload.loadingOutput}}}),dn=ln.actions,pn=dn.getData,un=dn.resetData,hn=dn.increaseSlope,bn=dn.decreaseSlope,gn=dn.increaseIntercept,fn=dn.decreaseIntercept,jn=dn.getLoading,xn=function(e){return e.affine},mn=ln.reducer,On=Y.b.div(K||(K=Object(X.a)(["\n  display: flex;\n\n  & > div {\n    width: 50%;\n\n    &:first-child {\n      border-right: 1px solid ",";\n    }\n  }\n"])),(function(e){return e.theme.border})),yn=function(){var e=Object(fe.c)(xn),n=Object(fe.b)(),t=function(t){n(pn(Object(ge.a)(Object(ge.a)({},e),{},{key:t})))};return Object(ne.jsxs)(On,{children:[Object(ne.jsx)(Se,{children:Object(ne.jsxs)("div",{children:[Object(ne.jsx)("label",{htmlFor:"key",children:"SLOPE / A"}),Object(ne.jsxs)(ze,{children:[Object(ne.jsxs)(Ie,{disabled:0===parseInt(e.key.a),colorDisabled:function(e){return e.color},onClick:function(){n(bn())},children:[" ","-"," "]}),Object(ne.jsx)("input",{type:"number",min:0,max:26,value:e.key.a,onChange:function(n){var r=parseInt(n.target.value);t(Object(ge.a)(Object(ge.a)({},e.key),{},{b:r}))}}),Object(ne.jsxs)(Ie,{disabled:26===parseInt(e.key.a),colorDisabled:function(e){return e.color},onClick:function(){n(hn())},children:[" ","+"," "]})]})]})}),Object(ne.jsx)(Se,{children:Object(ne.jsxs)("div",{children:[Object(ne.jsx)("label",{htmlFor:"key",children:"INTERCEPT / B"}),Object(ne.jsxs)(ze,{children:[Object(ne.jsxs)(Ie,{disabled:0===parseInt(e.key.b),onClick:function(){n(fn())},children:[" ","-"," "]}),Object(ne.jsx)("input",{type:"number",min:0,max:26,value:e.key.b,onChange:function(n){var r=parseInt(n.target.value);t(Object(ge.a)(Object(ge.a)({},e.key),{},{a:r}))}}),Object(ne.jsxs)(Ie,{disabled:26===parseInt(e.key.b),onClick:function(){n(gn())},children:[" ","+"," "]})]})]})})]})},vn=function(){var e=Object(fe.c)(xn),n=Object(fe.b)(),t=Xe(e.caseStrategy),r=function(t){n(pn(Object(ge.a)(Object(ge.a)({},e),{},{ciphertext:t})))},i=function(){var e=Object(be.a)(he.a.mark((function e(t,i){var a,c;return he.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n(jn({loadingOutput:!0})),e.next=4,Ue("/api/affine/encode",t,i);case 4:a=e.sent,c=a.ciphertext,r(c),n(jn({loadingOutput:!1})),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(n,t){return e.apply(this,arguments)}}(),a=function(){var e=Object(be.a)(he.a.mark((function e(t,i){var a,c;return he.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n(jn({loadingOutput:!0})),e.next=4,Ue("/api/affine/decode",t,i);case 4:a=e.sent,c=a.ciphertext,r(c),n(jn({loadingOutput:!1})),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(n,t){return e.apply(this,arguments)}}();return Object(ne.jsxs)(Ye,{children:[Object(ne.jsxs)(Ge,{children:[Object(ne.jsx)(qe,{title:"Text Input",titleAlign:!1,plaintext:e.plaintext,getPlaintext:function(t){n(pn(Object(ge.a)(Object(ge.a)({},e),{},{plaintext:t})))}}),Object(ne.jsx)(Re,{title:"Affine Cipher",titleAlign:"center",getKey:function(t){n(pn(Object(ge.a)(Object(ge.a)({},e),{},{key:t})))},getForeignChars:function(t){n(pn(Object(ge.a)(Object(ge.a)({},e),{},{foreignChars:t})))},encode:i,decode:a,plaintext:e.plaintext,ciphertext:e.ciphertext,keys:e.key,currentCase:t,getCaseStategy:function(t){var r=t.target.id,i=e.caseStrategy.map((function(e){return e.value===r?Object(ge.a)(Object(ge.a)({},e),{},{active:!0}):Object(ge.a)(Object(ge.a)({},e),{},{active:!1})}));n(pn(Object(ge.a)(Object(ge.a)({},e),{},{caseStrategy:i})))},caseStrategy:e.caseStrategy,foreignChars:e.foreignChars,reset:function(){n(un())},extraInput:Object(ne.jsx)(yn,{})}),Object(ne.jsx)(Je,{title:"Text Output",currentCase:t,foreignChars:e.foreignChars,ciphertext:e.ciphertext,loading:e.loadingOutput})]}),Object(ne.jsx)(Ve,{cipher:"Affine",desc:"is a type of monoalphabetic substitution cipher, where each letter in an alphabet is mapped to its numeric equivalent, encrypted using a simple mathematical function, and converted back to a letter. Each letter is enciphered with the function (ax + b) mod 26, where b is the magnitude of the shift.",link:"https://en.wikipedia.org/wiki/Affine_cipher"})]})},wn={plaintext:"CipherVip",ciphertext:"piVrehpiC",caseStrategy:[{value:"maintain case",active:!0},{value:"upper case",active:!1},{value:"lower case",active:!1}],foreignChars:"include",loadingOutput:!1},kn=Object(He.b)({name:"reverse",initialState:wn,reducers:{getData:function(e,n){e.plaintext=n.payload.plaintext,e.ciphertext=n.payload.ciphertext,e.caseStrategy=n.payload.caseStrategy,e.foreignChars=n.payload.foreignChars},resetData:function(e){e.plaintext="",e.ciphertext="",e.caseStrategy=wn.caseStrategy,e.foreignChars=wn.foreignChars},getLoading:function(e,n){e.loadingOutput=n.payload.loadingOutput}}}),Cn=kn.actions,Sn=Cn.getData,zn=Cn.resetData,In=Cn.getLoading,Tn=function(e){return e.reverse},An=kn.reducer,Dn=function(){var e=Object(fe.c)(Tn),n=Object(fe.b)(),t=Xe(e.caseStrategy),r=function(t){n(Sn(Object(ge.a)(Object(ge.a)({},e),{},{ciphertext:t})))},i=function(){var e=Object(be.a)(he.a.mark((function e(t){var i,a;return he.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n(In({loadingOutput:!0})),e.next=4,Ue("/api/reverse/encode",t);case 4:i=e.sent,a=i.ciphertext,r(a),n(In({loadingOutput:!1})),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(n){return e.apply(this,arguments)}}(),a=function(){var e=Object(be.a)(he.a.mark((function e(t){var i,a;return he.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n(In({loadingOutput:!0})),e.next=4,Ue("/api/reverse/decode",t);case 4:i=e.sent,a=i.ciphertext,r(a),n(In({loadingOutput:!1})),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(n){return e.apply(this,arguments)}}();return Object(ne.jsxs)(Ye,{children:[Object(ne.jsxs)(Ge,{children:[Object(ne.jsx)(qe,{title:"Text Input",titleAlign:!1,plaintext:e.plaintext,getPlaintext:function(t){n(Sn(Object(ge.a)(Object(ge.a)({},e),{},{plaintext:t})))}}),Object(ne.jsx)(Re,{title:"Reverse Cipher",titleAlign:"center",keys:e.key,getForeignChars:function(t){n(Sn(Object(ge.a)(Object(ge.a)({},e),{},{foreignChars:t})))},encode:i,decode:a,plaintext:e.plaintext,ciphertext:e.ciphertext,currentCase:t,getCaseStategy:function(t){var r=t.target.id,i=e.caseStrategy.map((function(e){return e.value===r?Object(ge.a)(Object(ge.a)({},e),{},{active:!0}):Object(ge.a)(Object(ge.a)({},e),{},{active:!1})}));n(Sn(Object(ge.a)(Object(ge.a)({},e),{},{caseStrategy:i})))},caseStrategy:e.caseStrategy,foreignChars:e.foreignChars,reset:function(){n(zn())}}),Object(ne.jsx)(Je,{title:"Text Output",currentCase:t,foreignChars:e.foreignChars,ciphertext:e.ciphertext,loading:e.loadingOutput})]}),Object(ne.jsx)(Ve,{cipher:"Reverse",desc:" uses a pattern of reversing the string of plain text to convert as cipher text. The process of encryption and decryption is same. To decrypt cipher text, the user simply needs to reverse the cipher text to get the plain text.",link:"https://www.tutorialspoint.com/cryptography_with_python/cryptography_with_python_reverse_cipher.htm"})]})},Fn={plaintext:"CipherVip",ciphertext:"CriVpihpe",caseStrategy:[{value:"maintain case",active:!0},{value:"upper case",active:!1},{value:"lower case",active:!1}],foreignChars:"include",key:"12345",loadingOutput:!1},En=Object(He.b)({name:"transposition",initialState:Fn,reducers:{getData:function(e,n){e.plaintext=n.payload.plaintext,e.ciphertext=n.payload.ciphertext,e.caseStrategy=n.payload.caseStrategy,e.foreignChars=n.payload.foreignChars,e.key=n.payload.key},resetData:function(e){e.plaintext=Fn.plaintext,e.ciphertext=Fn.ciphertext,e.caseStrategy=Fn.caseStrategy,e.foreignChars=Fn.foreignChars,e.key=Fn.key},getLoading:function(e,n){e.loadingOutput=n.payload.loadingOutput}}}),Ln=En.actions,Pn=Ln.getData,Nn=Ln.resetData,_n=Ln.getLoading,Kn=function(e){return e.transposition},Rn=En.reducer,Vn=function(){var e=Object(fe.c)(Kn),n=Object(fe.b)();return Object(ne.jsx)(ne.Fragment,{children:Object(ne.jsx)(Se,{children:Object(ne.jsxs)("div",{children:[Object(ne.jsx)("label",{htmlFor:"key",children:"KEY"}),Object(ne.jsx)(ze,{children:Object(ne.jsx)("input",{type:"text",value:e.key,onChange:function(t){var r;r=t.target.value,n(Pn(Object(ge.a)(Object(ge.a)({},e),{},{key:r})))},placeholder:"Enter columns number..."})})]})})})},qn=function(){var e=Object(fe.c)(Kn),n=Object(fe.b)(),t=Xe(e.caseStrategy),r=function(t){n(Pn(Object(ge.a)(Object(ge.a)({},e),{},{ciphertext:t})))},i=function(){var e=Object(be.a)(he.a.mark((function e(t,i){var a,c;return he.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n(_n({loadingOutput:!0})),e.next=4,Ue("/api/transposition/encode",t,i);case 4:a=e.sent,c=a.ciphertext,r(c),n(_n({loadingOutput:!1})),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(n,t){return e.apply(this,arguments)}}(),a=function(){var e=Object(be.a)(he.a.mark((function e(t,i){var a,c;return he.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n(_n({loadingOutput:!0})),e.next=4,Ue("/api/transposition/decode",t,i);case 4:a=e.sent,c=a.ciphertext,r(c),n(_n({loadingOutput:!1})),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(n,t){return e.apply(this,arguments)}}();return Object(ne.jsxs)(Ye,{children:[Object(ne.jsxs)(Ge,{children:[Object(ne.jsx)(qe,{title:"Text Input",titleAlign:!1,plaintext:e.plaintext,getPlaintext:function(t){n(Pn(Object(ge.a)(Object(ge.a)({},e),{},{plaintext:t})))}}),Object(ne.jsx)(Re,{title:"Transposition Cipher",titleAlign:"center",keys:e.key,getKey:function(t){n(Pn(Object(ge.a)(Object(ge.a)({},e),{},{key:t})))},getForeignChars:function(t){n(Pn(Object(ge.a)(Object(ge.a)({},e),{},{foreignChars:t})))},encode:i,decode:a,plaintext:e.plaintext,ciphertext:e.ciphertext,currentCase:t,getCaseStategy:function(t){var r=t.target.id,i=e.caseStrategy.map((function(e){return e.value===r?Object(ge.a)(Object(ge.a)({},e),{},{active:!0}):Object(ge.a)(Object(ge.a)({},e),{},{active:!1})}));n(Pn(Object(ge.a)(Object(ge.a)({},e),{},{caseStrategy:i})))},caseStrategy:e.caseStrategy,foreignChars:e.foreignChars,reset:function(){n(Nn())},extraInput:Object(ne.jsx)(Vn,{})}),Object(ne.jsx)(Je,{title:"Text Output",currentCase:t,foreignChars:e.foreignChars,ciphertext:e.ciphertext,loading:e.loadingOutput})]}),Object(ne.jsx)(Ve,{cipher:"Transposition",desc:" is a method of encryption by which the positions held by units of plaintext (which are commonly characters or groups of characters) are shifted according to a regular system, so that the ciphertext constitutes a permutation of the plaintext.",link:"https://en.wikipedia.org/wiki/Transposition_cipher"})]})},Bn={body:"#f2f4f6",text:"#797f86",background:"#fff",title:"#272727",active:"#e3e8ec",hover:"#e3e8ec66",border:"#e3e8ec",shadow:"0 0.2rem 2.5rem 0 rgb(0 0 0 / 16%),\n    0 0.2rem 3rem 0 rgb(0 0 0 / 12%)"},Jn={body:"#1e2122",text:"#988f81",background:"#181a1b",title:"#cfcbc5",active:"#25282a",hover:"#25282a66",border:"#373b3d",shadow:" rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"};var Un=function(){var e=Object(R.useState)("light"),n=Object(J.a)(e,2),t=n[0],r=n[1];return Object(ne.jsx)(Y.a,{theme:"light"===t?Bn:Jn,children:Object(ne.jsx)("div",{className:"App",children:Object(ne.jsxs)(G.a,{children:[Object(ne.jsx)(de,{theme:t,setTheme:r}),Object(ne.jsxs)(pe.c,{children:[Object(ne.jsx)(pe.a,{exact:!0,path:"/",component:on}),Object(ne.jsx)(pe.a,{path:"/affine",component:vn}),Object(ne.jsx)(pe.a,{path:"/reverse",component:Dn}),Object(ne.jsx)(pe.a,{path:"/transposition",component:qn})]})]})})})},Xn=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,53)).then((function(n){var t=n.getCLS,r=n.getFID,i=n.getFCP,a=n.getLCP,c=n.getTTFB;t(e),r(e),i(e),a(e),c(e)}))},Yn=Object(He.a)({reducer:{ceasar:an,affine:mn,reverse:An,transposition:Rn}});B.a.render(Object(ne.jsx)(V.a.StrictMode,{children:Object(ne.jsx)(fe.a,{store:Yn,children:Object(ne.jsx)(Un,{})})}),document.getElementById("root")),Xn()}},[[52,1,2]]]);
//# sourceMappingURL=main.1ff0eb64.chunk.js.map