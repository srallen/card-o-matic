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

  if(length == $(this).prop('maxLength')) {
    $("#recipient-error").html("Recipient name is too long.");
  }
  else {
    $("#recipient-error").html("");
  }
});

// To add a sticker
$("#allstickers").on("click", "img", function() {
  var sticker_picked = $(this).clone();
  sticker_picked.addClass("sticker_on_card");

  $("#canvas").prepend(sticker_picked);

  sticker_picked.draggable({opacity: 0.45, containment: "#canvas" });
});

// To start over
$("#refresh-btn").click(function() {
  $("#canvas").css("background-color", "white");
  $("#canvas").css("background-image", "");
  $(".textures").css("background-color", "white");
  $("#message-output").html("");
  $(".sticker_on_card").remove();
  $("#recipient-output").html("");
  $("#recipient").val("");
  $(".messages").prop("checked", false);
  $("#sticker-search").val("");
});

// To print the card
$("#print-btn").click(function() {
  var canvas_clone = $("#canvas").clone();
  canvas = canvas_clone.prop("outerHTML");

  var new_tab_contents = '<html>';
  new_tab_contents += '<head>';
  new_tab_contents += '<link rel="stylesheet" href="css/main.css" type="text/css">';
  new_tab_contents += '<link rel="stylesheet" href="css/features.css" type="text/css">';
  new_tab_contents += '</head>';
  new_tab_contents += '<body>';
  new_tab_contents += canvas;
  new_tab_contents += '</body></html>';

  var new_tab = window.open();
  new_tab.document.open();
  new_tab.document.write(new_tab_contents);
  new_tab.document.close();
});

// Sticker search functionality
$("#sticker-search-btn").click(function() {
  $("#sticker-search-results").html("");
  $("#search-error").html("");

  var search_term = $("#sticker-search").val();
  var google_url = "http://ajax.googleapis.com/ajax/services/search/images?v=1.0&imgsz=medium&q=" + search_term + "&callback=?";

  $.getJSON(google_url, function(data){
      var images = data.responseData.results;
      if(images.length > 0){
        $.each(images, function(key, image) {
          var new_image_element = "<img class='stickers circular' src='" + image.url + "'>";
          $("#sticker-search-results").prepend(new_image_element);
        });
      }
      else {
        $("#search-error").html("No search results found.");
      }
  });
});


