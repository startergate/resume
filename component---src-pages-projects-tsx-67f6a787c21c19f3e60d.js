(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{UaTi:function(e,t,c){},gZkK:function(e,t,c){"use strict";c.r(t);var n=c("q1tI"),a=c("Wbzz"),i=c("9Dj+"),l=c("H8eV"),r=c("CLmH"),s=(c("UaTi"),c("KQm4")),o=c("zLVn"),u=function(e,t){e.classList.contains(t)?e.classList.remove(t):e.classList.add(t)},d=(c("qS9F"),function(e){var t=e.filterHandler,c=e.data,a=e.defaultTitle,i=Object(o.a)(e,["filterHandler","data","defaultTitle"]),l=function(){var e=document.querySelectorAll("#"+i.id+" .project-filter-choice-activated");e=Object(s.a)(e).map((function(e){return e.textContent})),document.querySelector("#"+i.id+" .project-filter-display").innerHTML=e.join(", ")||a,null==t||t(e)},r=function(e){u(e.currentTarget,"project-filter-choice-activated"),l()};return n.createElement("div",Object.assign({className:"project-filter"},i),n.createElement("p",{onClick:function(){var e=document.querySelector("#"+i.id+" .project-filter-selector");u(e,"hidden")},className:"project-filter-display",title:"눌러서 필터 변경"},a),n.createElement("ul",{className:"project-filter-selector hidden"},n.createElement("li",{key:i.id+"-all",onClick:function(){document.querySelectorAll("#"+i.id+" .project-filter-choice-activated").forEach((function(e){e.classList.remove("project-filter-choice-activated")})),l()},className:"project-filter-choice"},"필터 초기화"),n.createElement("ul",{className:"project-filter-choice-list"},c.map((function(e){return n.createElement("li",{key:e,onClick:r,className:"project-filter-choice"},e)})))))}),f=c("LiQr"),m=c("u4M0");t.default=function(e){var t=Object(a.useStaticQuery)("657687934"),c=t.allProjectsJson.nodes,s=t.linksJson,o=t.type.distinct,u=t.tags.distinct,p=t.status.distinct,j={types:[],tags:[],status:[]},E=function(){var e=j.tags.length>0?c.filter((function(e){return e.tags.filter((function(e){return j.tags.includes(e)})).length})):c;e=j.types.length>0?e.filter((function(e){return e.type.filter((function(e){return j.types.includes(e)})).length})):e,e=(j.status.length>0?e.filter((function(e){return j.status.includes(e.status)})):e).map((function(e){return e.id})),document.querySelectorAll(".project-card").forEach((function(t){t.classList.remove("hidden"),e.includes(t.id)||t.classList.add("hidden")}))};return n.createElement(i.a,e,n.createElement(l.a,{title:"Projects"}),n.createElement("section",{className:"subpage"},n.createElement("div",{className:"page-title"},n.createElement("h1",null,n.createElement("span",null,"Projects")),n.createElement(f.b,{data:s})),n.createElement("div",{className:"project-filters"},n.createElement(d,{filterHandler:function(e){j.tags=e,E()},data:u,defaultTitle:"사용 기술",id:"project-filter-tags"}),n.createElement(d,{filterHandler:function(e){j.types=e,E()},data:o,defaultTitle:"프로젝트 유형",id:"project-filter-types"}),n.createElement(d,{filterHandler:function(e){j.status=e,E()},data:p,defaultTitle:"진행 상황",id:"project-filter-status"})),n.createElement("div",{className:"list project-list"},c.map((function(e,t){return n.createElement(r.a,{data:e,key:t})})))),n.createElement(m.a,{data:c}))}},qS9F:function(e,t,c){}}]);
//# sourceMappingURL=component---src-pages-projects-tsx-67f6a787c21c19f3e60d.js.map