(this["webpackJsonpreact-yt-api"]=this["webpackJsonpreact-yt-api"]||[]).push([[0],{22:function(e,t,i){},43:function(e,t,i){"use strict";i.r(t);var c=i(1),n=i(14),s=i.n(n),a=i(3),r=i(0),d=function(e){var t=e.label,i=e.onFormSubmit,n=Object(c.useState)(""),s=Object(a.a)(n,2),d=s[0],o=s[1];return Object(r.jsx)("div",{className:"ui segment search-bar",children:Object(r.jsx)("form",{onSubmit:function(e){e.preventDefault(),i(d)},className:"ui form",children:Object(r.jsxs)("div",{className:"field",children:[Object(r.jsx)("label",{children:t}),Object(r.jsx)("input",{value:d,type:"text",onChange:function(e){o(e.target.value)}})]})})})},o=function(e){var t=e.video;if(!t)return Object(r.jsx)("div",{children:"Loading..."});var i="https://www.youtube.com/embed/".concat(t.id.videoId);return Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{className:"ui embed",children:Object(r.jsx)("iframe",{src:i,title:"video player"})}),Object(r.jsxs)("div",{className:"ui segment",children:[Object(r.jsx)("h4",{className:"ui header",children:t.snippet.title}),Object(r.jsx)("p",{children:t.snippet.description})]})]})},l=(i(22),function(e){var t=e.video,i=e.onVideoSelect;return Object(r.jsxs)("div",{onClick:function(){return i(t)},className:"item video-item",children:[Object(r.jsx)("img",{alt:t.snippet.title,src:t.snippet.thumbnails.medium.url}),Object(r.jsx)("div",{className:"content",children:Object(r.jsx)("div",{className:"header",children:t.snippet.title})})]})}),u=function(e){var t=e.videos,i=e.onVideoSelect,c=t.map((function(e){return Object(r.jsx)(l,{onVideoSelect:i,video:e},e.id.videoId)}));return Object(r.jsx)("div",{className:"ui relaxed divided list",children:c})},j=function(e){var t=e.selectedVideo,i=e.onVideoSelect,c=e.videos;return Object(r.jsx)("div",{className:"ui grid",children:Object(r.jsxs)("div",{className:"ui row",children:[Object(r.jsx)("div",{className:"eleven wide column",children:Object(r.jsx)(o,{video:t})}),Object(r.jsx)("div",{className:"five wide column",children:Object(r.jsx)(u,{onVideoSelect:i,videos:c})})]})})},b=i(5),v=i.n(b),m=i(15),p=i(16),O=i.n(p).a.create({baseURL:"https://www.googleapis.com/youtube/v3",params:{part:"snippet",type:"video",key:"AIzaSyAdEnq3kGi3ZAsqUPAEZi1_T-XxatVyz5U"}}),h=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5,i=Object(c.useState)([]),n=Object(a.a)(i,2),s=n[0],r=n[1];Object(c.useEffect)((function(){d(e,t)}),[e,t]);var d=function(){var e=Object(m.a)(v.a.mark((function e(t,i){var c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O("/search",{params:{q:t,maxResults:i}});case 2:c=e.sent,r(c.data.items);case 4:case"end":return e.stop()}}),e)})));return function(t,i){return e.apply(this,arguments)}}();return[s,d]},x=(i(42),function(){var e=Object(c.useState)(null),t=Object(a.a)(e,2),i=t[0],n=t[1],s=h("react",i?5:50),o=Object(a.a)(s,2),l=o[0],u=o[1];return Object(r.jsxs)("div",{className:"ui container",children:[Object(r.jsx)(d,{onFormSubmit:u,label:"Video search"}),Object(r.jsx)(j,{selectedVideo:i,onVideoSelect:n,videos:l})]})});s.a.render(Object(r.jsx)(x,{}),document.querySelector("#root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.74aa1e7b.chunk.js.map