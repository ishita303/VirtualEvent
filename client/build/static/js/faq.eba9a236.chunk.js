(this["webpackJsonpgogo-react"]=this["webpackJsonpgogo-react"]||[]).push([[19],{103:function(e,a,t){"use strict";var n=t(5),r=t.n(n),s=t(108),o=t(109),l=t(77),c=t(101),i=t(8),u=function(e){return"/"+e===i.a?r.a.createElement(c.a,{id:"menu.home"}):r.a.createElement(c.a,{id:"menu.".concat(e)})},m=function(e,a,t){return e.split(a)[0]+a},d=function(e){var a=e.match.path.substr(1),t=a.split("/");return t[t.length-1].indexOf(":")>-1&&(t=t.filter((function(e){return-1===e.indexOf(":")}))),r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,{className:"pt-0 breadcrumb-container d-none d-sm-block d-lg-inline-block"},t.map((function(e,n){return r.a.createElement(o.a,{key:n,active:t.length===n+1},t.length!==n+1?r.a.createElement(l.b,{to:"/".concat(m(a,e))},u(e)):u(e))}))))};a.a=function(e){var a=e.heading,t=e.match;return r.a.createElement(r.a.Fragment,null,a&&r.a.createElement("h1",null,r.a.createElement(c.a,{id:a})),r.a.createElement(d,{match:t}))}},107:function(e,a,t){"use strict";var n=t(10),r=t(14),s=t(5),o=t.n(s),l=t(24),c=t.n(l),i=t(98),u=t.n(i),m=t(99),d=c.a.oneOfType([c.a.number,c.a.string]),g={tag:m.t,noGutters:c.a.bool,className:c.a.string,cssModule:c.a.object,form:c.a.bool,xs:d,sm:d,md:d,lg:d,xl:d},b={tag:"div",widths:["xs","sm","md","lg","xl"]},p=function(e){var a=e.className,t=e.cssModule,s=e.noGutters,l=e.tag,c=e.form,i=e.widths,d=Object(r.a)(e,["className","cssModule","noGutters","tag","form","widths"]),g=[];i.forEach((function(a,t){var n=e[a];if(delete d[a],n){var r=!t;g.push(r?"row-cols-"+n:"row-cols-"+a+"-"+n)}}));var b=Object(m.p)(u()(a,s?"no-gutters":null,c?"form-row":"row",g),t);return o.a.createElement(l,Object(n.a)({},d,{className:b}))};p.propTypes=g,p.defaultProps=b,a.a=p},108:function(e,a,t){"use strict";var n=t(10),r=t(14),s=t(5),o=t.n(s),l=t(24),c=t.n(l),i=t(98),u=t.n(i),m=t(99),d={tag:m.t,listTag:m.t,className:c.a.string,listClassName:c.a.string,cssModule:c.a.object,children:c.a.node,"aria-label":c.a.string},g=function(e){var a=e.className,t=e.listClassName,s=e.cssModule,l=e.children,c=e.tag,i=e.listTag,d=e["aria-label"],g=Object(r.a)(e,["className","listClassName","cssModule","children","tag","listTag","aria-label"]),b=Object(m.p)(u()(a),s),p=Object(m.p)(u()("breadcrumb",t),s);return o.a.createElement(c,Object(n.a)({},g,{className:b,"aria-label":d}),o.a.createElement(i,{className:p},l))};g.propTypes=d,g.defaultProps={tag:"nav",listTag:"ol","aria-label":"breadcrumb"},a.a=g},109:function(e,a,t){"use strict";var n=t(10),r=t(14),s=t(5),o=t.n(s),l=t(24),c=t.n(l),i=t(98),u=t.n(i),m=t(99),d={tag:m.t,active:c.a.bool,className:c.a.string,cssModule:c.a.object},g=function(e){var a=e.className,t=e.cssModule,s=e.active,l=e.tag,c=Object(r.a)(e,["className","cssModule","active","tag"]),i=Object(m.p)(u()(a,!!s&&"active","breadcrumb-item"),t);return o.a.createElement(l,Object(n.a)({},c,{className:i,"aria-current":s?"page":void 0}))};g.propTypes=d,g.defaultProps={tag:"li"},a.a=g},110:function(e,a,t){"use strict";var n=t(10),r=t(14),s=t(5),o=t.n(s),l=t(24),c=t.n(l),i=t(98),u=t.n(i),m=t(99),d={tag:m.t,inverse:c.a.bool,color:c.a.string,body:c.a.bool,outline:c.a.bool,className:c.a.string,cssModule:c.a.object,innerRef:c.a.oneOfType([c.a.object,c.a.string,c.a.func])},g=function(e){var a=e.className,t=e.cssModule,s=e.color,l=e.body,c=e.inverse,i=e.outline,d=e.tag,g=e.innerRef,b=Object(r.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),p=Object(m.p)(u()(a,"card",!!c&&"text-white",!!l&&"card-body",!!s&&(i?"border":"bg")+"-"+s),t);return o.a.createElement(d,Object(n.a)({},b,{className:p,ref:g}))};g.propTypes=d,g.defaultProps={tag:"div"},a.a=g},175:function(e,a,t){"use strict";a.a=[{question:"E-mail support",answer:'Contact Us on- <a href="mailto:arun.jaglan@framez.sg">Arun.jaglan@framez.sg</a> or <a href="mailto:Vineet.rai@framez.sg">Vineet.rai@framez.sg</a>'},{question:"Helpline numbers",answer:"Call us on - +91 6366554300/+91 9871193189"},{question:"How to start \u2013 CAPAM 2020 EVENT?",answer:"Once you in the home page and as you begin experiencing the platform of CAPAM 2020, kindly refer to the pop out tabs that appear in each page as you proceed. This will lead to the next page of the event accordingly. "},{question:"Will I have a support or direction leading me to the main auditorium? ",answer:"Yes, there will be signages provided. Also, you can contact helpdesk if you are unable to navigate around."},{question:"I have storage issue on my phone?",answer:"You will not require your phone storage to participate in the conference unless you need to download any video/brochure/or any event details."},{question:"What if I have network issues in between/during the event?",answer:"You will require a min speed of 2mbps \u2013 4mbps in order to enjoy uninterrupted sessions.  In case you face network issues you can login again."},{question:"What if I have login late?",answer:"You will be taken directly to the sessions happening at the moment of login. However, the sessions are recorded and can watch it later just in case you have missed it out."}]},315:function(e,a,t){"use strict";t.r(a);var n=t(104),r=t(5),s=t.n(r),o=t(107),l=t(110),c=t(166),i=t(301),u=t(103),m=t(102),d=t(175);a.default=function(e){var a=e.match,t=Object(r.useState)(0),g=Object(n.a)(t,2),b=g[0],p=g[1];return s.a.createElement(s.a.Fragment,null,s.a.createElement(o.a,null,s.a.createElement(m.a,{xxs:"12"},s.a.createElement(u.a,{heading:"FAQ",match:a}),s.a.createElement(m.b,{className:"mb-5"})),s.a.createElement(m.a,{xxs:"12",className:"mb-4"},s.a.createElement(s.a.Fragment,null,d.a.map((function(e,a){return s.a.createElement(l.a,{className:"d-flex mb-3",key:"faqItem_".concat(a)},s.a.createElement("div",{className:"d-flex flex-grow-1 min-width-zero"},s.a.createElement(c.a,{color:"link",className:"card-body  btn-empty btn-link list-item-heading text-left text-one",onClick:function(){return p(a)},"aria-expanded":b===a},e.question)),s.a.createElement(i.a,{isOpen:b===a},s.a.createElement("div",{className:"card-body accordion-content pt-0",dangerouslySetInnerHTML:{__html:e.answer}})))}))))))}}}]);
//# sourceMappingURL=faq.eba9a236.chunk.js.map