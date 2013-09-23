$(".colors").click(function() {
  var color_picked = $(this).css('background-color');
  $("#canvas").css('background-color', color_picked);
  $(".textures").css('background-color', color_picked);
});

$('.textures').click(function() {
  var texture_picked = $(this).css('background-image');
  $("#canvas").css('background-image', texture_picked);
});
