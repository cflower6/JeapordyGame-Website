window.onload = function() {
  alert("This is the instructions and help page click an image.")
};

$(document).ready(function(){
  $(".pic").mouseover(function(){
  $("#bigImg").prop("src", $(this).attr("src"));
  })
  $(".pic").mouseout(function(){
    $("#bigImg").prop("src", "../myWebsite/website_images/jeopardy.jpg");
  })
 $("#Hide").click(function(){
   $("#Hide").attr('id');
    $("#bigImg").fadeOut("slow");
   })
   $("#Show").click(function(){
     $("#Show").attr('id');
     $("#bigImg").fadeIn("milliseconds");
   })
 });
