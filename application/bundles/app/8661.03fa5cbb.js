(self.webpackChunkscnsoft_website=self.webpackChunkscnsoft_website||[]).push([[8661],{49920:function(t,r,n){var e=n(47293);t.exports=!e((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},24994:function(t,r,n){"use strict";var e=n(13383).IteratorPrototype,o=n(70030),i=n(79114),u=n(58003),c=n(97497),f=function(){return this};t.exports=function(t,r,n){var a=r+" Iterator";return t.prototype=o(e,{next:i(1,n)}),u(t,a,!1,!0),c[a]=f,t}},70654:function(t,r,n){"use strict";var e=n(82109),o=n(46916),i=n(31913),u=n(76530),c=n(60614),f=n(24994),a=n(79518),s=n(27674),p=n(58003),v=n(68880),l=n(31320),y=n(5112),g=n(97497),h=n(13383),d=u.PROPER,b=u.CONFIGURABLE,m=h.IteratorPrototype,S=h.BUGGY_SAFARI_ITERATORS,O=y("iterator"),w="keys",x="values",P="entries",k=function(){return this};t.exports=function(t,r,n,u,y,h,I){f(n,r,u);var A,j,R,T=function(t){if(t===y&&G)return G;if(!S&&t in _)return _[t];switch(t){case w:case x:case P:return function(){return new n(this,t)}}return function(){return new n(this)}},E=r+" Iterator",F=!1,_=t.prototype,N=_[O]||_["@@iterator"]||y&&_[y],G=!S&&N||T(y),C="Array"==r&&_.entries||N;if(C&&(A=a(C.call(new t)))!==Object.prototype&&A.next&&(i||a(A)===m||(s?s(A,m):c(A[O])||l(A,O,k)),p(A,E,!0,!0),i&&(g[E]=k)),d&&y==x&&N&&N.name!==x&&(!i&&b?v(_,"name",x):(F=!0,G=function(){return o(N,this)})),y)if(j={values:T(x),keys:h?G:T(w),entries:T(P)},I)for(R in j)(S||F||!(R in _))&&l(_,R,j[R]);else e({target:r,proto:!0,forced:S||F},j);return i&&!I||_[O]===G||l(_,O,G,{name:y}),g[r]=G,j}},97235:function(t,r,n){var e=n(40857),o=n(92597),i=n(6061),u=n(3070).f;t.exports=function(t){var r=e.Symbol||(e.Symbol={});o(r,t)||u(r,t,{value:i.f(t)})}},13383:function(t,r,n){"use strict";var e,o,i,u=n(47293),c=n(60614),f=n(70030),a=n(79518),s=n(31320),p=n(5112),v=n(31913),l=p("iterator"),y=!1;[].keys&&("next"in(i=[].keys())?(o=a(a(i)))!==Object.prototype&&(e=o):y=!0),null==e||u((function(){var t={};return e[l].call(t)!==t}))?e={}:v&&(e=f(e)),c(e[l])||s(e,l,(function(){return this})),t.exports={IteratorPrototype:e,BUGGY_SAFARI_ITERATORS:y}},97497:function(t){t.exports={}},1156:function(t,r,n){var e=n(84326),o=n(45656),i=n(8006).f,u=n(50206),c="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return c&&"Window"==e(t)?function(t){try{return i(t)}catch(t){return u(c)}}(t):i(o(t))}},79518:function(t,r,n){var e=n(17854),o=n(92597),i=n(60614),u=n(47908),c=n(6200),f=n(49920),a=c("IE_PROTO"),s=e.Object,p=s.prototype;t.exports=f?s.getPrototypeOf:function(t){var r=u(t);if(o(r,a))return r[a];var n=r.constructor;return i(n)&&r instanceof n?n.prototype:r instanceof s?p:null}},40857:function(t,r,n){var e=n(17854);t.exports=e},58003:function(t,r,n){var e=n(3070).f,o=n(92597),i=n(5112)("toStringTag");t.exports=function(t,r,n){t&&!o(t=n?t:t.prototype,i)&&e(t,i,{configurable:!0,value:r})}},6061:function(t,r,n){var e=n(5112);r.f=e},66992:function(t,r,n){"use strict";var e=n(45656),o=n(51223),i=n(97497),u=n(29909),c=n(70654),f="Array Iterator",a=u.set,s=u.getterFor(f);t.exports=c(Array,"Array",(function(t,r){a(this,{type:f,target:e(t),index:0,kind:r})}),(function(){var t=s(this),r=t.target,n=t.kind,e=t.index++;return!r||e>=r.length?(t.target=void 0,{value:void 0,done:!0}):"keys"==n?{value:e,done:!1}:"values"==n?{value:r[e],done:!1}:{value:[e,r[e]],done:!1}}),"values"),i.Arguments=i.Array,o("keys"),o("values"),o("entries")},68309:function(t,r,n){var e=n(19781),o=n(76530).EXISTS,i=n(1702),u=n(3070).f,c=Function.prototype,f=i(c.toString),a=/^\s*function ([^ (]*)/,s=i(a.exec);e&&!o&&u(c,"name",{configurable:!0,get:function(){try{return s(a,f(this))[1]}catch(t){return""}}})},78783:function(t,r,n){"use strict";var e=n(28710).charAt,o=n(41340),i=n(29909),u=n(70654),c="String Iterator",f=i.set,a=i.getterFor(c);u(String,"String",(function(t){f(this,{type:c,string:o(t),index:0})}),(function(){var t,r=a(this),n=r.string,o=r.index;return o>=n.length?{value:void 0,done:!0}:(t=e(n,o),r.index+=t.length,{value:t,done:!1})}))},41817:function(t,r,n){"use strict";var e=n(82109),o=n(19781),i=n(17854),u=n(1702),c=n(92597),f=n(60614),a=n(47976),s=n(41340),p=n(3070).f,v=n(99920),l=i.Symbol,y=l&&l.prototype;if(o&&f(l)&&(!("description"in y)||void 0!==l().description)){var g={},h=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:s(arguments[0]),r=a(y,this)?new l(t):void 0===t?l():l(t);return""===t&&(g[r]=!0),r};v(h,l),h.prototype=y,y.constructor=h;var d="Symbol(test)"==String(l("test")),b=u(y.toString),m=u(y.valueOf),S=/^Symbol\((.*)\)[^)]+$/,O=u("".replace),w=u("".slice);p(y,"description",{configurable:!0,get:function(){var t=m(this),r=b(t);if(c(g,t))return"";var n=d?w(r,7,-1):O(r,S,"$1");return""===n?void 0:n}}),e({global:!0,forced:!0},{Symbol:h})}},32165:function(t,r,n){n(97235)("iterator")},82526:function(t,r,n){"use strict";var e=n(82109),o=n(17854),i=n(35005),u=n(22104),c=n(46916),f=n(1702),a=n(31913),s=n(19781),p=n(30133),v=n(47293),l=n(92597),y=n(43157),g=n(60614),h=n(70111),d=n(47976),b=n(52190),m=n(19670),S=n(47908),O=n(45656),w=n(34948),x=n(41340),P=n(79114),k=n(70030),I=n(81956),A=n(8006),j=n(1156),R=n(25181),T=n(31236),E=n(3070),F=n(55296),_=n(50206),N=n(31320),G=n(72309),C=n(6200),B=n(3501),U=n(69711),D=n(5112),J=n(6061),L=n(97235),Y=n(58003),$=n(29909),M=n(42092).forEach,Q=C("hidden"),W="Symbol",X=D("toPrimitive"),q=$.set,z=$.getterFor(W),H=Object.prototype,K=o.Symbol,V=K&&K.prototype,Z=o.TypeError,tt=o.QObject,rt=i("JSON","stringify"),nt=T.f,et=E.f,ot=j.f,it=F.f,ut=f([].push),ct=G("symbols"),ft=G("op-symbols"),at=G("string-to-symbol-registry"),st=G("symbol-to-string-registry"),pt=G("wks"),vt=!tt||!tt.prototype||!tt.prototype.findChild,lt=s&&v((function(){return 7!=k(et({},"a",{get:function(){return et(this,"a",{value:7}).a}})).a}))?function(t,r,n){var e=nt(H,r);e&&delete H[r],et(t,r,n),e&&t!==H&&et(H,r,e)}:et,yt=function(t,r){var n=ct[t]=k(V);return q(n,{type:W,tag:t,description:r}),s||(n.description=r),n},gt=function(t,r,n){t===H&&gt(ft,r,n),m(t);var e=w(r);return m(n),l(ct,e)?(n.enumerable?(l(t,Q)&&t[Q][e]&&(t[Q][e]=!1),n=k(n,{enumerable:P(0,!1)})):(l(t,Q)||et(t,Q,P(1,{})),t[Q][e]=!0),lt(t,e,n)):et(t,e,n)},ht=function(t,r){m(t);var n=O(r),e=I(n).concat(St(n));return M(e,(function(r){s&&!c(dt,n,r)||gt(t,r,n[r])})),t},dt=function(t){var r=w(t),n=c(it,this,r);return!(this===H&&l(ct,r)&&!l(ft,r))&&(!(n||!l(this,r)||!l(ct,r)||l(this,Q)&&this[Q][r])||n)},bt=function(t,r){var n=O(t),e=w(r);if(n!==H||!l(ct,e)||l(ft,e)){var o=nt(n,e);return!o||!l(ct,e)||l(n,Q)&&n[Q][e]||(o.enumerable=!0),o}},mt=function(t){var r=ot(O(t)),n=[];return M(r,(function(t){l(ct,t)||l(B,t)||ut(n,t)})),n},St=function(t){var r=t===H,n=ot(r?ft:O(t)),e=[];return M(n,(function(t){!l(ct,t)||r&&!l(H,t)||ut(e,ct[t])})),e};(p||(K=function(){if(d(V,this))throw Z("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?x(arguments[0]):void 0,r=U(t),n=function(t){this===H&&c(n,ft,t),l(this,Q)&&l(this[Q],r)&&(this[Q][r]=!1),lt(this,r,P(1,t))};return s&&vt&&lt(H,r,{configurable:!0,set:n}),yt(r,t)},N(V=K.prototype,"toString",(function(){return z(this).tag})),N(K,"withoutSetter",(function(t){return yt(U(t),t)})),F.f=dt,E.f=gt,T.f=bt,A.f=j.f=mt,R.f=St,J.f=function(t){return yt(D(t),t)},s&&(et(V,"description",{configurable:!0,get:function(){return z(this).description}}),a||N(H,"propertyIsEnumerable",dt,{unsafe:!0}))),e({global:!0,wrap:!0,forced:!p,sham:!p},{Symbol:K}),M(I(pt),(function(t){L(t)})),e({target:W,stat:!0,forced:!p},{for:function(t){var r=x(t);if(l(at,r))return at[r];var n=K(r);return at[r]=n,st[n]=r,n},keyFor:function(t){if(!b(t))throw Z(t+" is not a symbol");if(l(st,t))return st[t]},useSetter:function(){vt=!0},useSimple:function(){vt=!1}}),e({target:"Object",stat:!0,forced:!p,sham:!s},{create:function(t,r){return void 0===r?k(t):ht(k(t),r)},defineProperty:gt,defineProperties:ht,getOwnPropertyDescriptor:bt}),e({target:"Object",stat:!0,forced:!p},{getOwnPropertyNames:mt,getOwnPropertySymbols:St}),e({target:"Object",stat:!0,forced:v((function(){R.f(1)}))},{getOwnPropertySymbols:function(t){return R.f(S(t))}}),rt)&&e({target:"JSON",stat:!0,forced:!p||v((function(){var t=K();return"[null]"!=rt([t])||"{}"!=rt({a:t})||"{}"!=rt(Object(t))}))},{stringify:function(t,r,n){var e=_(arguments),o=r;if((h(r)||void 0!==t)&&!b(t))return y(r)||(r=function(t,r){if(g(o)&&(r=c(o,this,t,r)),!b(r))return r}),e[1]=r,u(rt,null,e)}});if(!V[X]){var Ot=V.valueOf;N(V,X,(function(t){return c(Ot,this)}))}Y(K,W),B[Q]=!0},33948:function(t,r,n){var e=n(17854),o=n(48324),i=n(98509),u=n(66992),c=n(68880),f=n(5112),a=f("iterator"),s=f("toStringTag"),p=u.values,v=function(t,r){if(t){if(t[a]!==p)try{c(t,a,p)}catch(r){t[a]=p}if(t[s]||c(t,s,r),o[r])for(var n in u)if(t[n]!==u[n])try{c(t,n,u[n])}catch(r){t[n]=u[n]}}};for(var l in o)v(e[l]&&e[l].prototype,l);v(i,"DOMTokenList")}}]);