$(".colors").click(function() {
  var color_picked = $(this).css('background-color');
  $("#canvas").css('background-color', color_picked);
});
