(this["webpackJsonpgogo-react"]=this["webpackJsonpgogo-react"]||[]).push([[43],{103:function(e,t,a){"use strict";var n=a(5),c=a.n(n),l=a(108),r=a(109),i=a(77),m=a(101),o=a(8),s=function(e){return"/"+e===o.a?c.a.createElement(m.a,{id:"menu.home"}):c.a.createElement(m.a,{id:"menu.".concat(e)})},u=function(e,t,a){return e.split(t)[0]+t},d=function(e){var t=e.match.path.substr(1),a=t.split("/");return a[a.length-1].indexOf(":")>-1&&(a=a.filter((function(e){return-1===e.indexOf(":")}))),c.a.createElement(c.a.Fragment,null,c.a.createElement(l.a,{className:"pt-0 breadcrumb-container d-none d-sm-block d-lg-inline-block"},a.map((function(e,n){return c.a.createElement(r.a,{key:n,active:a.length===n+1},a.length!==n+1?c.a.createElement(i.b,{to:"/".concat(u(t,e))},s(e)):s(e))}))))};t.a=function(e){var t=e.heading,a=e.match;return c.a.createElement(c.a.Fragment,null,t&&c.a.createElement("h1",null,c.a.createElement(m.a,{id:t})),c.a.createElement(d,{match:a}))}},124:function(e,t,a){"use strict";var n=a(0),c=a(5),l=a.n(c),r=a(171);t.a=function(e){var t=Object(n.a)({},e);return delete t.autoCorrect,delete t.autoCapitalize,l.a.createElement(r.z.Input,t)}},125:function(e,t,a){"use strict";var n=a(5),c=a.n(n),l=a(427),r=a(428),i=a(425),m=a(102);t.a=function(e){var t=e.totalPage,a=void 0===t?0:t,n=e.currentPage,o=void 0===n?1:n,s=e.numberLimit,u=void 0===s?5:s,d=e.lastIsActive,p=void 0===d||d,E=e.firstIsActive,g=void 0===E||E,f=e.onChangePage,b=1,h=u;u>a?(b=1,h=a):o<=parseInt(u/2,10)?(b=1,h=u):o+parseInt(u/2,10)<=a?(b=o-parseInt(u/2,10),h=o+parseInt(u/2,10)):(b=a-(u-1),h=a);for(var k=[],N=b=0===b?1:b;N<=h;N+=1)k.push(N);var v=o<=1?"disabled":"",x=o>=a?"disabled":"",C=o<=1?"disabled":"",O=o>=a?"disabled":"";return a>1?c.a.createElement(m.a,{xxs:"12",className:"mt-3 mb-3"},c.a.createElement(l.a,{className:"pagination justify-content-center"},g&&c.a.createElement(r.a,{className:"page-item ".concat(v)},c.a.createElement(i.a,{className:"page-link first c-pointer",onClick:function(){return f(1)}},c.a.createElement("i",{className:"simple-icon-control-start"}))),c.a.createElement(r.a,{className:"page-item ".concat(C)},c.a.createElement(i.a,{className:"page-link prev c-pointer",onClick:function(){return f(o-1)}},c.a.createElement("i",{className:"simple-icon-arrow-left"}))),k.map((function(e){return c.a.createElement(r.a,{key:e,className:"page-item ".concat(o===e&&"active")},c.a.createElement(i.a,{className:"page-link c-pointer",onClick:function(){return f(e)}},e))})),c.a.createElement(r.a,{className:"page-item ".concat(O)},c.a.createElement(i.a,{className:"page-link next c-pointer",onClick:function(){return f(o+1)}},c.a.createElement("i",{className:"simple-icon-arrow-right"}))),p&&c.a.createElement(r.a,{className:"page-item ".concat(x)},c.a.createElement(i.a,{className:"page-link last c-pointer",onClick:function(){return f(a)}},c.a.createElement("i",{className:"simple-icon-control-end"}))))):c.a.createElement(m.a,{xxs:"12",className:"mt-2"})}},139:function(e,t,a){"use strict";var n=a(104),c=a(5),l=a.n(c),r=a(107),i=a(166),m=a(301),o=a(422),s=a(449),u=a(423),d=a(426),p=a(134),E=a(102),g=a(103),f=a(101),b=a(153);t.a=Object(p.c)((function(e){var t=e.intl,a=e.displayMode,p=e.changeDisplayMode,h=(e.handleChangeSelectAll,e.changeOrderBy,e.changePageSize),k=e.selectedPageSize,N=e.totalItemCount,v=(e.selectedOrderOption,e.match),x=e.startIndex,C=e.endIndex,O=(e.selectedItemsLength,e.itemsLength,e.onSearchKey),y=(e.orderOptions,e.pageSizes),w=e.toggleModal,j=(e.heading,Object(c.useState)(!1)),S=Object(n.a)(j,2),I=(S[0],S[1],Object(c.useState)(!1)),M=Object(n.a)(I,2),P=M[0],z=M[1],A=t.messages;return l.a.createElement(r.a,null,l.a.createElement(E.a,{xxs:"12"},l.a.createElement("div",{className:"mb-2"},l.a.createElement("h1",null,"Speakers"),l.a.createElement("div",{className:"text-zero top-right-button-container"},l.a.createElement(i.a,{color:"primary",size:"lg",className:"top-right-button",onClick:function(){return w()}},"Add New"),"  "),l.a.createElement(g.a,{match:v})),l.a.createElement("div",{className:"mb-2"},l.a.createElement(i.a,{color:"empty",className:"pt-0 pl-0 d-inline-block d-md-none",onClick:function(){return z(!P)}},l.a.createElement(f.a,{id:"pages.display-options"})," ",l.a.createElement("i",{className:"simple-icon-arrow-down align-middle"})),l.a.createElement(m.a,{isOpen:P,className:"d-md-block",id:"displayOptions"},l.a.createElement("span",{className:"mr-3 d-inline-block float-md-left"},l.a.createElement("a",{href:"#/",className:"mr-2 view-icon ".concat("list"===a?"active":""),onClick:function(){return p("list")}},l.a.createElement(b.a,null)),l.a.createElement("a",{href:"#/",className:"mr-2 view-icon ".concat("thumblist"===a?"active":""),onClick:function(){return p("thumblist")}},l.a.createElement(b.e,null)),l.a.createElement("a",{href:"#/",className:"mr-2 view-icon ".concat("imagelist"===a?"active":""),onClick:function(){return p("imagelist")}},l.a.createElement(b.b,null))),l.a.createElement("div",{className:"d-block d-md-inline-block pt-1"},l.a.createElement("div",{className:"search-sm d-inline-block float-md-left mr-1 mb-1 align-top"},l.a.createElement("input",{type:"text",name:"keyword",id:"search",placeholder:A["menu.search"],onKeyPress:function(e){return O(e)}}))),l.a.createElement("div",{className:"float-md-right pt-1"},l.a.createElement("span",{className:"text-muted text-small mr-1"},"".concat(x,"-").concat(C," of ").concat(N," ")),l.a.createElement(o.a,{className:"d-inline-block"},l.a.createElement(s.a,{caret:!0,color:"outline-dark",size:"xs"},k),l.a.createElement(u.a,{right:!0},y.map((function(e,t){return l.a.createElement(d.a,{key:t,onClick:function(){return h(e)}},e)}))))))),l.a.createElement(E.b,{className:"mb-5"})))}))},140:function(e,t,a){"use strict";var n=a(5),c=a.n(n),l=a(256),r=a(225),i=a(226),m=a(420),o=a(170),s=a(448),u=a(227),d=a(166),p=a(120),E=a(124),g=a(101);t.a=function(e){var t=e.modalOpen,a=e.toggleModal,n=e.categories;return c.a.createElement(l.a,{isOpen:t,toggle:a,wrapClassName:"modal-right",backdrop:"static"},c.a.createElement(r.a,{toggle:a},c.a.createElement(g.a,{id:"pages.add-new-modal-title"})),c.a.createElement(i.a,null,c.a.createElement(m.a,null,c.a.createElement(g.a,{id:"pages.product-name"})),c.a.createElement(o.a,null),c.a.createElement(m.a,{className:"mt-4"},c.a.createElement(g.a,{id:"pages.category"})),c.a.createElement(p.a,{components:{Input:E.a},className:"react-select",classNamePrefix:"react-select",name:"form-field-name",options:n}),c.a.createElement(m.a,{className:"mt-4"},c.a.createElement(g.a,{id:"pages.description"})),c.a.createElement(o.a,{type:"textarea",name:"text",id:"exampleText"}),c.a.createElement(m.a,{className:"mt-4"},c.a.createElement(g.a,{id:"pages.status"})),c.a.createElement(s.a,{type:"radio",id:"exCustomRadio",name:"customRadio",label:"ON HOLD"}),c.a.createElement(s.a,{type:"radio",id:"exCustomRadio2",name:"customRadio",label:"PROCESSED"})),c.a.createElement(u.a,null,c.a.createElement(d.a,{color:"secondary",outline:!0,onClick:a},c.a.createElement(g.a,{id:"pages.cancel"})),c.a.createElement(d.a,{color:"primary",onClick:a},c.a.createElement(g.a,{id:"pages.submit"}))," "))}},141:function(e,t,a){"use strict";var n=a(176),c=a.n(n),l=a(5);t.a=function(e,t){var a=Object(l.useRef)(null);a.current=t,Object(l.useEffect)((function(){return c.a.bind(e,(function(e,t){"function"===typeof a.current&&a.current(e,t),e.preventDefault()})),function(){c.a.unbind(e)}}),[e])}},142:function(e,t,a){"use strict";var n=a(5),c=a.n(n),l=a(107),r=a(125),i=a(113),m=function(e){var t=e.onContextMenu,a=e.onContextMenuClick;return c.a.createElement(i.a,{id:"menu_id",onShow:function(e){return t(e,e.detail.data)}},c.a.createElement(i.c,{onClick:a,data:{action:"copy"}},c.a.createElement("i",{className:"simple-icon-docs"})," ",c.a.createElement("span",null,"Copy")),c.a.createElement(i.c,{onClick:a,data:{action:"move"}},c.a.createElement("i",{className:"simple-icon-drawer"})," ",c.a.createElement("span",null,"Move to archive")),c.a.createElement(i.c,{onClick:a,data:{action:"delete"}},c.a.createElement("i",{className:"simple-icon-trash"})," ",c.a.createElement("span",null,"Delete")))},o=a(110),s=a(151),u=a(448),d=a(77),p=a(98),E=a.n(p),g=a(102),f=c.a.memo((function(e){var t=e.product,a=e.isSelect,n=e.collect,l=e.onCheckItem;return c.a.createElement(g.a,{xxs:"12",className:"mb-3"},c.a.createElement(i.b,{id:"menu_id",data:t.id,collect:n},c.a.createElement(o.a,{onClick:function(e){return l(e,t.id)},className:E()("d-flex flex-row",{active:a})},c.a.createElement("div",{className:"pl-2 d-flex flex-grow-1 min-width-zero"},c.a.createElement("div",{className:"card-body align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero align-items-lg-center"},c.a.createElement(d.b,{to:"?p=".concat(t.id),className:"w-40 w-sm-100"},c.a.createElement("p",{className:"list-item-heading mb-1 truncate"},t.title)),c.a.createElement("p",{className:"mb-1 text-muted text-small w-15 w-sm-100"},t.category),c.a.createElement("p",{className:"mb-1 text-muted text-small w-15 w-sm-100"},t.date),c.a.createElement("div",{className:"w-15 w-sm-100"},c.a.createElement(s.a,{color:t.statusColor,pill:!0},t.status))),c.a.createElement("div",{className:"custom-control custom-checkbox pl-1 align-self-center pr-4"},c.a.createElement(u.a,{className:"item-check mb-0",type:"checkbox",id:"check_".concat(t.id),checked:a,onChange:function(){},label:""}))))))})),b=a(228),h=a(117),k=a(173),N=a(174),v=c.a.memo((function(e){var t=e.product,a=e.isSelect,n=e.collect,r=e.onCheckItem;return c.a.createElement(g.a,{sm:"6",lg:"4",xl:"3",className:"mb-3",key:t.id},c.a.createElement(i.b,{id:"menu_id",data:t.id,collect:n},c.a.createElement(o.a,{onClick:function(e){return r(e,t.id)},className:E()({active:a})},c.a.createElement("div",{className:"position-relative"},c.a.createElement(d.b,{to:"?p=".concat(t.id),className:"w-40 w-sm-100"},c.a.createElement(b.a,{top:!0,alt:t.title,src:t.img})),c.a.createElement(s.a,{color:t.statusColor,pill:!0,className:"position-absolute badge-top-left"},t.status)),c.a.createElement(h.a,null,c.a.createElement(l.a,null,c.a.createElement(g.a,{xxs:"2"},c.a.createElement(u.a,{className:"item-check mb-0",type:"checkbox",id:"check_".concat(t.id),checked:a,onChange:function(){},label:""})),c.a.createElement(g.a,{xxs:"10",className:"mb-3"},c.a.createElement(k.a,null,t.title),c.a.createElement(N.a,{className:"text-muted text-small mb-0 font-weight-light"},t.date)))))))})),x=c.a.memo((function(e){var t=e.product,a=e.isSelect,n=e.collect,l=e.onCheckItem;return c.a.createElement(g.a,{xxs:"12",key:t.id,className:"mb-3"},c.a.createElement(i.b,{id:"menu_id",data:t.id,collect:n},c.a.createElement(o.a,{onClick:function(e){return l(e,t.id)},className:E()("d-flex flex-row",{active:a})},c.a.createElement(d.b,{to:"?p=".concat(t.id),className:"d-flex"},c.a.createElement("img",{alt:t.title,src:t.img,className:"list-thumbnail responsive border-0 card-img-left"})),c.a.createElement("div",{className:"pl-2 d-flex flex-grow-1 min-width-zero"},c.a.createElement("div",{className:"card-body align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero align-items-lg-center"},c.a.createElement(d.b,{to:"?p=".concat(t.id),className:"w-40 w-sm-100"},c.a.createElement("p",{className:"list-item-heading mb-1 truncate"},t.title)),c.a.createElement("p",{className:"mb-1 text-muted text-small w-15 w-sm-100"},t.category),c.a.createElement("p",{className:"mb-1 text-muted text-small w-15 w-sm-100"},t.date),c.a.createElement("div",{className:"w-15 w-sm-100"},c.a.createElement(s.a,{color:t.statusColor,pill:!0},t.status))),c.a.createElement("div",{className:"custom-control custom-checkbox pl-1 align-self-center pr-4"},c.a.createElement(u.a,{className:"item-check mb-0",type:"checkbox",id:"check_".concat(t.id),checked:a,onChange:function(){},label:""}))))))}));function C(e){return{data:e.data}}t.a=c.a.memo((function(e){var t=e.items,a=e.displayMode,n=e.selectedItems,i=e.onCheckItem,o=e.currentPage,s=e.totalPage,u=e.onContextMenuClick,d=e.onContextMenu,p=e.onChangePage;return c.a.createElement(l.a,null,t.map((function(e){return"imagelist"===a?c.a.createElement(v,{key:e.id,product:e,isSelect:n.includes(e.id),collect:C,onCheckItem:i}):"thumblist"===a?c.a.createElement(x,{key:e.id,product:e,isSelect:n.includes(e.id),collect:C,onCheckItem:i}):c.a.createElement(f,{key:e.id,product:e,isSelect:n.includes(e.id),onCheckItem:i,collect:C})})),c.a.createElement(r.a,{currentPage:o,totalPage:s,onChangePage:function(e){return p(e)}}),c.a.createElement(m,{onContextMenuClick:u,onContextMenu:d}))}))},337:function(e,t,a){"use strict";a.r(t);var n=a(155),c=a(3),l=a.n(c),r=a(0),i=a(12),m=a(104),o=a(5),s=a.n(o),u=a(152),d=a.n(u),p=a(8),E=a(139),g=a(140),f=a(142),b=a(141),h=function(e,t,a){for(var n=0;n<t.length;n+=1)if(t[n][a]===e)return n;return-1},k="".concat(p.o,"/cakes/paging"),N=[{column:"title",label:"Product Name"},{column:"category",label:"Category"},{column:"status",label:"Status"}],v=[4,8,12,20],x=[{label:"Cakes",value:"Cakes",key:0},{label:"Cupcakes",value:"Cupcakes",key:1},{label:"Desserts",value:"Desserts",key:2}];t.default=function(e){var t=e.match,a=Object(o.useState)(!1),c=Object(m.a)(a,2),u=c[0],p=c[1],C=Object(o.useState)("thumblist"),O=Object(m.a)(C,2),y=O[0],w=O[1],j=Object(o.useState)(1),S=Object(m.a)(j,2),I=S[0],M=S[1],P=Object(o.useState)(8),z=Object(m.a)(P,2),A=z[0],D=z[1],L=Object(o.useState)({column:"title",label:"Product Name"}),_=Object(m.a)(L,2),R=_[0],K=_[1],B=Object(o.useState)(!1),F=Object(m.a)(B,2),J=F[0],H=F[1],T=Object(o.useState)(0),q=Object(m.a)(T,2),G=q[0],Q=q[1],U=Object(o.useState)(1),V=Object(m.a)(U,2),W=V[0],X=V[1],Y=Object(o.useState)(""),Z=Object(m.a)(Y,2),$=Z[0],ee=Z[1],te=Object(o.useState)([]),ae=Object(m.a)(te,2),ne=ae[0],ce=ae[1],le=Object(o.useState)([]),re=Object(m.a)(le,2),ie=re[0],me=re[1],oe=Object(o.useState)(null),se=Object(m.a)(oe,2),ue=se[0],de=se[1];Object(o.useEffect)((function(){M(1)}),[A,R]),Object(o.useEffect)((function(){function e(){return(e=Object(i.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:d.a.get("".concat(k,"?pageSize=").concat(A,"&currentPage=").concat(I,"&orderBy=").concat(R.column,"&search=").concat($)).then((function(e){return e.data})).then((function(e){X(e.totalPage),me(e.data.map((function(e){return Object(r.a)(Object(r.a)({},e),{},{img:e.img.replace("img/","img/products/")})}))),ce([]),Q(e.totalItem),p(!0)}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[A,I,R,$]);var pe=function(e){return ne.length>=ie.length?e&&ce([]):ce(ie.map((function(e){return e.id}))),document.activeElement.blur(),!1};Object(b.a)(["ctrl+a","command+a"],(function(){pe(!1)})),Object(b.a)(["ctrl+d","command+d"],(function(){return ce([]),!1}));var Ee=(I-1)*A,ge=I*A;return u?s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"disable-text-selection"},s.a.createElement(E.a,{heading:"menu.thumb-list",displayMode:y,changeDisplayMode:w,handleChangeSelectAll:pe,changeOrderBy:function(e){K(N.find((function(t){return t.column===e})))},changePageSize:D,selectedPageSize:A,totalItemCount:G,selectedOrderOption:R,match:t,startIndex:Ee,endIndex:ge,selectedItemsLength:ne?ne.length:0,itemsLength:ie?ie.length:0,onSearchKey:function(e){"Enter"===e.key&&ee(e.target.value.toLowerCase())},orderOptions:N,pageSizes:v,toggleModal:function(){return H(!J)}}),s.a.createElement(g.a,{modalOpen:J,toggleModal:function(){return H(!J)},categories:x}),s.a.createElement(f.a,{items:ie,displayMode:y,selectedItems:ne,onCheckItem:function(e,t){if("A"===e.target.tagName||e.target.parentElement&&"A"===e.target.parentElement.tagName)return!0;null===ue&&de(t);var a=Object(n.a)(ne);if(a.includes(t)?a=a.filter((function(e){return e!==t})):a.push(t),ce(a),e.shiftKey){var c=Object(n.a)(ie),l=h(t,c,"id"),r=h(ue,c,"id");c=c.slice(Math.min(l,r),Math.max(l,r)+1),ne.push.apply(ne,Object(n.a)(c.map((function(e){return e.id})))),a=Array.from(new Set(ne)),ce(a)}return document.activeElement.blur(),!1},currentPage:I,totalPage:W,onContextMenuClick:function(e,t){console.log("onContextMenuClick - selected items",ne),console.log("onContextMenuClick - action : ",t.action)},onContextMenu:function(e,t){var a=t.data;return ne.includes(a)||ce([a]),!0},onChangePage:M}))):s.a.createElement("div",{className:"loading"})}}}]);
//# sourceMappingURL=product-thumb-list.8c4e7b04.chunk.js.map