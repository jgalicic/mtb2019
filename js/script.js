$("button").click(function() {
  $(this)
    .parent()
    .next()
    .slideToggle("slow");
  $(this)
    .children()
    .toggleClass("down");
});

$(".ferry-title-container").click(function() {
  $(this)
    .parent()
    .next()
    .slideToggle("slow");
  $(this)
    .children()
    .toggleClass("down");
});
