(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{129:function(e,n,t){},130:function(e,n,t){},131:function(e,n,t){},132:function(e,n,t){"use strict";t.r(n);var o=t(1),i=t.n(o),r=t(3),a=t.n(r),c=t(28),u=t(8),l=t(38),s=t.n(l),d=new s.a.Renderer;d.link=function(e,n,t){return n||(n=""),'<a href="'.concat(e,'" title="').concat(n,'" target="_blank">').concat(t,"</a>")},s.a.setOptions({renderer:d,gfm:!0,breaks:!0,sanitize:!0});var p=s.a,m="UPDATE_INPUT",f="SHRINK_WINDOW",w="ENLARGE_WINDOW",b="NOTIFY_COPY";function g(e){return{type:m,input:e}}function I(e){return{type:f,window:e}}function E(e){return{type:w,window:e}}function M(e){return{type:b,message:e}}var k="SPLIT",v={input:"",output:"",editor:k,preview:k,copyID:0,copyMessage:""},y=function(){var e,n,t,o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,i=arguments.length>1?arguments[1]:void 0;switch(i.type){case m:return Object.assign({},o,{input:i.input,output:p(i.input)});case f:return Object.assign({},o,(e=o.editor,n=o.preview,t=i.window,e===k&&(e="MAXIMIZED",n="MAXIMIZED"),"editor"===t?"MINIMIZED"===n?n="MAXIMIZED":e="MINIMIZED":"MINIMIZED"===e?e="MAXIMIZED":n="MINIMIZED",e===n&&(e=k,n=k),{editor:e,preview:n}));case w:return Object.assign({},o,function(e,n,t){return e===k&&(e="MAXIMIZED",n="MAXIMIZED"),"editor"===t?"MINIMIZED"===e?e="MAXIMIZED":n="MINIMIZED":"MINIMIZED"===n?n="MAXIMIZED":e="MINIMIZED",e===n&&(e=k,n=k),{editor:e,preview:n}}(o.editor,o.preview,i.window));case b:return Object.assign({},o,{copyID:o.copyID+1,copyMessage:i.message});default:return o}},h=t(29),C=t(30),D=t(36),O=t(31),N=t(37),j=function(e){var n=document.createElement("textarea");n.value=e,n.setAttribute("readonly",""),n.style.position="absolute",n.style.left="-9999px",document.body.appendChild(n),n.select(),document.execCommand("copy"),document.body.removeChild(n)},x=t(78),S=(t(129),function(e){function n(){return Object(h.a)(this,n),Object(D.a)(this,Object(O.a)(n).apply(this,arguments))}return Object(N.a)(n,e),Object(C.a)(n,[{key:"render",value:function(){var e=this.props.info,n=e.icon,t=e.title;return i.a.createElement("div",{className:"window-bar bg-info d-flex align-items-center"},i.a.createElement("img",{className:"m-2",src:n,alt:t}),i.a.createElement("span",{className:"flex-grow-1 title"},t),this.props.buttons.map(function(e){var n=e.icon,t=e.title,o=e.onClick;return i.a.createElement(x.a,{key:t,overlay:t,placement:"bottom"},i.a.createElement("button",{type:"button",className:"btn btn-sm btn-info m-1",onClick:o},i.a.createElement("img",{key:t,src:n,alt:t})))}))}}]),n}(o.Component)),Z=t(74),A=t.n(Z),L=t(33),H=t.n(L),T=t(75),_=t.n(T),X=t(34),P=t.n(X),W=t(35),R=t.n(W),q=Object(u.b)(function(e){return{value:e.input,windowState:e.editor}},function(e){return{onChange:function(n){return e(g(n.target.value))},onShrink:function(){return e(I("editor"))},onEnlarge:function(){return e(E("editor"))},onCopy:function(n){return e(M(n))}}})(function(e){var n=e.value,t=e.windowState,o=e.onChange,r=e.onShrink,a=e.onEnlarge,c=e.onCopy;return i.a.createElement("div",{className:"m-2 content ".concat(t.toLowerCase())},i.a.createElement(S,{info:{icon:A.a,title:"Edit",name:"editor"},buttons:[{title:"Markdown Help",icon:H.a,onClick:function(){window.open("https://www.markdownguide.org","_blank")}},{title:"Copy Markdown",icon:_.a,onClick:function(){j(n),c("Markdown copied to clipbaord.")}},{title:"Shrink",icon:P.a,onClick:r},{title:"Enlarge",icon:R.a,onClick:a}]}),i.a.createElement("textarea",{className:"bg-dark text-white border border-secondary p-2",id:"editor",value:n,onChange:o}))}),B=t(76),F=t.n(B),J=t(77),U=t.n(J),Y=Object(u.b)(function(e){return{htmlString:e.output,windowState:e.preview}},function(e){return{onShrink:function(){return e(I("preview"))},onEnlarge:function(){return e(E("preview"))},onCopy:function(n){return e(M(n))}}})(function(e){var n=e.htmlString,t=e.windowState,o=e.onShrink,r=e.onEnlarge,a=e.onCopy;return i.a.createElement("div",{className:"m-2 content ".concat(t.toLowerCase())},i.a.createElement(S,{info:{icon:F.a,title:"View",name:"preview"},buttons:[{title:"Markdown Help",icon:H.a,onClick:function(){window.open("https://www.markdownguide.org","_blank")}},{title:"Copy HTML",icon:U.a,onClick:function(){j(n),a("HTML copied to clipboard.")}},{title:"Shrink",icon:P.a,onClick:o},{title:"Enlarge",icon:R.a,onClick:r}]}),i.a.createElement("div",{className:"bg-light text-dark border border-secondary p-2 content",id:"preview",dangerouslySetInnerHTML:{__html:n}}))}),z=(t(130),Object(u.b)(function(e){return{ID:e.copyID,message:e.copyMessage}})(function(e){return e.ID<1?null:i.a.createElement("div",{key:e.ID,className:"copy-notifier"},e.message)})),G=function(e){function n(){return Object(h.a)(this,n),Object(D.a)(this,Object(O.a)(n).apply(this,arguments))}return Object(N.a)(n,e),Object(C.a)(n,[{key:"componentDidMount",value:function(){this.props.setInitialMarkdown("# Markdown Previewer\n## A freecodecamp.org project\n\nSee [freecodecamp.org](https://www.freecodecamp.org)\n\nHere's some `inline code`\n\n    \x3c!-- This is a code block --\x3e\n    <html>\n      <body>\n      </body>\n    </html>\n\n* List Item A\n* List Item B\n* List Item C\n\n> This is a block quote\n\nHere's an image\n![alt text here](https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Codinglogo.jpg/480px-Codinglogo.jpg)\n\n**Here's some bold text**")}},{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(q,null),i.a.createElement(Y,null),i.a.createElement(z,null))}}]),n}(o.Component),K=Object(u.b)(null,function(e){return{setInitialMarkdown:function(n){return e(g(n))}}})(G),V=(t(131),Object(c.b)(y));a.a.render(i.a.createElement(u.a,{store:V},i.a.createElement(K,null)),document.getElementById("root"))},33:function(e,n,t){e.exports=t.p+"static/media/question.7905d19e.svg"},34:function(e,n,t){e.exports=t.p+"static/media/shrink2.2e08aa9f.svg"},35:function(e,n,t){e.exports=t.p+"static/media/enlarge2.d663d5d7.svg"},74:function(e,n,t){e.exports=t.p+"static/media/pencil.8809d3cf.svg"},75:function(e,n,t){e.exports=t.p+"static/media/mdcopy.b2c3197e.svg"},76:function(e,n,t){e.exports=t.p+"static/media/eye.6955fcfe.svg"},77:function(e,n,t){e.exports=t.p+"static/media/htmlcopy.cb244187.svg"},79:function(e,n,t){e.exports=t(132)}},[[79,1,2]]]);
//# sourceMappingURL=main.7e4f7734.chunk.js.map