"use strict";(self.webpackChunkscnsoft_website=self.webpackChunkscnsoft_website||[]).push([[8501],{15836:function(e,t,n){n(69826),n(41539);var a=n(19755),i=n.n(a);i()(document).ready((function(){i()(".a-service-cards").each((function(e,t){var n,a=i()(t),c=i()(a).find("a[name]"),s="text-highlighted",r=a.find(".a-service-cards_content-hide");if(editmode){var d=window.$(t).find(".wide-option-select"),o=function(){var e=d.find("select"),t=a.find(".a-service-cards_content-accord"),n=a.find(".links-wrapper");e.on("select2:select",(function(e){var a=e.params.data;n.hide(),t.hide(),"Expand"===a.text&&t.show(),"Link and Button"===a.text&&n.show()}));var i=a.find(".button-type-select").data("value"),c={id:i,text:i};e.val(i).trigger("change"),e.trigger({type:"select2:select",params:{data:c}})};d.hasClass("initialized")?o():d.on("initialized",(function(){return o()})),i()(a).find(".a-service-cards_content-expand-title").on("click",(function(e){l()}))}else i()(a).find(".a-service-cards_content-expand-title").on("click",(function(e){i()(a).has(".a-service-cards_content-accord").length>0&&l()}));function l(){var e,t=i()(a).find(".a-service-cards_content-expand-text"),n=i()(a).find(".a-service-cards_content-expand-title"),r=i()("."+s),d=i()(a).find(".a-service-cards_content-header").text();t.slideDown(1e3),c.length&&r.length&&(e=r,i()([document.documentElement,document.body]).animate({scrollTop:e.offset().top-44-40},1500)),n.css("display","none").removeClass("btn-arrow-down"),i()(a).addClass("expanded"),function(e){if("undefined"!=typeof _paq){var t=["trackEvent","Editable: Wide-service-cards","Editable: Wide-service-cards: click","Editable: Wide-service-cards: expand:"+e];_paq.push(t)}}(d)}c.length&&i().each(c,(function(e,t){i()(t).parent().hasClass(s)&&i()(a).trigger("click"),new MutationObserver((function(){i()(t).parent().hasClass(s)&&i()(a).trigger("click")})).observe(i()(t).parent()[0],{attributes:!0})})),n=i()(a).find(".a-service-cards_content-link a").attr("href"),i()(a).find(".a-service-cards_content-link-wrap").attr("href",n),i()(r).on("click",(function(e){e.stopPropagation(),i()(r).parent(".a-service-cards_content-expand-text").slideUp(1100),setTimeout((function(){i()(r).parent(".a-service-cards_content-expand-text").siblings(".a-service-cards_content-expand-title").css("display","inline-block").addClass("btn-arrow-down"),i()(r).parents(".a-service-cards").removeClass("expanded")}),900);var t=i()(r).closest(".a-service-cards").offset().top;i()("body,html").animate({scrollTop:t-200},1100),function(){if("undefined"!=typeof _paq){var e=["trackEvent","Editable: Wide-service-cards","Editable: Wide-service-cards: click","Editable: Wide-service-cards: click: HIDE"];_paq.push(e)}}()}))}))}))}},function(e){e.O(0,[9755,6055],(function(){return t=15836,e(e.s=t);var t}));e.O()}]);