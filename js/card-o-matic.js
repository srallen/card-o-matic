$(".colors").click(function() {
  var color_picked = $(this).css('background-color');
  $("#canvas").css('background-color', color_picked);
  $(".textures").css('background-color', color_picked);
});

$('.textures').click(function() {
  var texture_picked = $(this).css('background-image');
  $("#canvas").css('background-image', texture_picked);
});

$(".messages").click(function() {
  var radio_button = $(this);
  var label = radio_button.next();
  var message = label.html();
  $("#message-output").html(message);
});

$("#recipient").keyup(function() {
  var recipient = $(this).val();
  $("#recipient-output").html(recipient);
  var length = recipient.length;

  if(length == 14) {
    $("#recipient-error").html("Recipient name is too long.");
  }
  else {
    $("#recipient-error").html("");
  }
});
