var ToC =
  "<div class="section-title section-title-sm position-relative pb-3 mb-4">" +
    "<h1>On this page:</h1>" +
    "<ul>";

var newLine, el, title, link;

$("article h1").each(function() {

  el = $(this);
  title = el.text();
  link = "#" + el.attr("id");

  newLine =
    "<li>" +
      "<a href='" + link + "'>" +
        title +
      "</a>" +
    "</li>";

  ToC += newLine;

});

ToC +=
   "</ul>" +
  "</div>";

$(".all-questions").prepend(ToC);
