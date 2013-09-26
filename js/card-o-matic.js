// To select a background color
$(".colors").click(function() {
  var color_picked = $(this).css('background-color');
  $("#canvas").css('background-color', color_picked);
  $(".textures").css('background-color', color_picked);
});

// To select a background texture
$('.textures').click(function() {
  var texture_picked = $(this).css('background-image');
  $("#canvas").css('background-image', texture_picked);
});

// To add a message
$(".messages").click(function() {
  var radio_button = $(this);
  var label = radio_button.next();
  var message = label.html();
  $("#message-output").html(message);
});

// To add a recipient and error handling
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

// To add a sticker
$(".stickers").click(function() {
  var sticker_picked = $(this).clone();
  sticker_picked.addClass("sticker_on_card");

  $("#canvas").prepend(sticker_picked);

  sticker_picked.draggable({opacity: 0.45, containment: "#canvas" });
});
