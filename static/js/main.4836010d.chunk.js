(this["webpackJsonpreact-yt-api"]=this["webpackJsonpreact-yt-api"]||[]).push([[0],{22:function(e,t,c){},43:function(e,t,c){"use strict";c.r(t);var i=c(1),n=c(14),s=c.n(n),a=c(3),r=c(0),d=function(e){var t=e.label,c=Object(i.useState)(""),n=Object(a.a)(c,2),s=n[0],d=n[1];return Object(r.jsx)("div",{className:"ui segment search-bar",children:Object(r.jsx)("form",{onSubmit:function(e){e.preventDefault()},className:"ui form",children:Object(r.jsxs)("div",{className:"field",children:[Object(r.jsx)("label",{children:t}),Object(r.jsx)("input",{value:s,type:"text",onChange:function(e){d(e.target.value)}})]})})})},l=(c(22),function(e){var t=e.video,c=e.onVideoSelect;return Object(r.jsxs)("div",{onClick:function(){return c(t)},className:"item video-item",children:[Object(r.jsx)("img",{alt:t.snippet.title,src:t.snippet.thumbnails.medium.url}),Object(r.jsx)("div",{className:"content",children:Object(r.jsx)("div",{className:"header",children:t.snippet.title})})]})}),o=function(e){var t=e.videos,c=e.onVideoSelect,i=t.map((function(e){return Object(r.jsx)(l,{onVideoSelect:c,video:e},e.id.videoId)}));return Object(r.jsx)("div",{className:"ui relaxed divided list",children:i})},u=function(e){var t=e.video;if(!t)return Object(r.jsx)("div",{children:"Loading..."});var c="https://www.youtube.com/embed/".concat(t.id.videoId);return Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{className:"ui embed",children:Object(r.jsx)("iframe",{src:c,title:"video player"})}),Object(r.jsxs)("div",{className:"ui segment",children:[Object(r.jsx)("h4",{className:"ui header",children:t.snippet.title}),Object(r.jsx)("p",{children:t.snippet.description})]})]})},j=c(5),b=c.n(j),v=c(15),m=c(16),p=c.n(m).a.create({baseURL:"https://www.googleapis.com/youtube/v3",params:{part:"snippet",type:"video",maxResults:10,key:"AIzaSyAdEnq3kGi3ZAsqUPAEZi1_T-XxatVyz5U"}}),O=function(e){var t=Object(i.useState)([]),c=Object(a.a)(t,2),n=c[0],s=c[1];Object(i.useEffect)((function(){r(e)}),[e]);var r=function(){var e=Object(v.a)(b.a.mark((function e(t){var c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p("/search",{params:{q:t}});case 2:c=e.sent,s(c.data.items);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return[n,r]},h=(c(42),function(){var e=Object(i.useState)(null),t=Object(a.a)(e,2),c=t[0],n=t[1],s=O("react"),l=Object(a.a)(s,2),j=l[0],b=l[1];return Object(i.useEffect)((function(){n(j[0])}),[j]),Object(r.jsxs)("div",{className:"ui container",children:[Object(r.jsx)(d,{onFormSubmit:b,label:"Video search"}),Object(r.jsx)("div",{className:"ui grid",children:Object(r.jsxs)("div",{className:"ui row",children:[Object(r.jsx)("div",{className:"eleven wide column",children:Object(r.jsx)(u,{video:c})}),Object(r.jsx)("div",{className:"five wide column",children:Object(r.jsx)(o,{onVideoSelect:n,videos:j})})]})})]})});s.a.render(Object(r.jsx)(h,{}),document.querySelector("#root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.4836010d.chunk.js.map