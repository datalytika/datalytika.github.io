var ToC =
  "<nav role='navigation' class='table-of-contents'>" +
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
  "</nav>";

$(".all-questions").prepend(ToC);
