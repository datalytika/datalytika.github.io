"use strict";(self.webpackChunkscnsoft_website=self.webpackChunkscnsoft_website||[]).push([[6538],{39650:function(t,i,e){e(69826),e(41539),e(47042),e(74916),e(23123),e(40561),e(69600);var n=e(19755),a=e.n(n);a()(document).ready((function(){a()(".service-options-editable").each((function(t,i){var e=a()(i),n=e.find(".add-activity-btn"),c=e.find(".activity-hidden"),s=e.find(".service-options-editable__link");if(l(),editmode?setTimeout((function(){v(c)}),2300):v(c),!editmode&&e.hasClass("two")){var r=e.find(".service-options-editable__title"),o=e.find(".service-options-editable__description");if(a()(document).width()>767){function t(){for(var t=0;t<r.length;t+=2)d(r.slice(t,t+2)),d(o.slice(t,t+2))}a()(window).on("load resize",(function(){t()})),a()("body").on("expand-block",(function(i,e){t()}))}}function d(t){t.height("auto");var i=0;t.each((function(t,e){i=Math.max(i,a()(e).height())})),t.each((function(t,e){return a()(e).height(i)}))}function l(){e.on("click",".remove-activity",(function(t){var i=a()(t.currentTarget).closest(".activity__item"),e=i.closest(".activity__item-wrapper"),n=i.data("activity-id"),c=e.siblings(".activity-hidden"),s=c.text().split("|");i.remove(),s.splice(n,1),e.text(""),c.text(s.join("|")),function(t){var i=a()(t).siblings(".activity__item-wrapper"),e=[];1==(e=a()(t).text().split("|")).length&&""==a()(t).text()||a().each(e,(function(t,e){i.append('<div class="activity__item" data-activity-id="'+t+'">'+e+'<i class="icon-s-close remove-activity"></i></div>')}))}(c)}))}function v(t){a().each(t,(function(t,i){var e,n=a()(i).siblings(".activity__item-wrapper");1==(e=a()(i).text().split("|")).length&&""==a()(i).text()||a().each(e,(function(t,i){n.append('<div class="activity__item" data-activity-id="'+t+'">'+i+'<i class="icon-s-close remove-activity"></i></div>')}))}))}function f(t){t.addClass("error-border").fadeIn(350),t.parent().append('<span class="error-element">Set not empty activity</span>').fadeIn(350),setTimeout((function(){t.removeClass("error-border"),t.parent().find(".error-element").remove().fadeOut(350)}),1900)}s.on("click",(function(t){var i=a()(t.currentTarget).siblings(".service-options-editable__wrapper"),e=i.find(".service-options-editable__title"),n=i.find(".service-options-editable__title a");if(0!=n.length)var c=n.text();else c=e.text();!function(t){if("undefined"!=typeof _paq){var i=["trackEvent","Editable: Service Options","Editable: Service Options: click","Editable: Service Options: click: "+t];_paq.push(i)}}(c)})),n.on("click",(function(t){var i=a()(t.currentTarget).siblings(".add-activity-input"),e=a()(t.currentTarget).siblings(".activity-hidden"),n=a()(t.currentTarget).siblings(".activity__item-wrapper"),c=i.text();if(""==e.text()){""!=c||i.hasClass("error-border")||f(i);e.append(c)}else if(""!==c)e.append("|"+c);else i.hasClass("error-border")||f(i);i.text(""),n.text("");var s=e.text().split("|");1==s.length&&""==e.text()||a().each(s,(function(t,i){n.append('<div class="activity__item" data-activity-id="'+t+'">'+i+'<i class="icon-s-close remove-activity"></i></div>')}));var r=n.find(".activity__item").last();r.show().fadeIn().addClass("new-activity"),setTimeout((function(){r.removeClass("new-activity")}),1300),l()}))}))}))}},function(t){t.O(0,[9755,6055,1022,6813,5070],(function(){return i=39650,t(t.s=i);var i}));t.O()}]);