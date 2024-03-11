var ToC =
  "<div class='section-title section-title-sm position-relative pb-3 mb-4'>" +
    "<h1>On this page:</h1>" +
    "<ul class='link-animated d-flex flex-column justify-content-start h5 fw-semi-bold bg-light rounded py-2 px-3 mb-2'>";

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
