/*Grid to stack, and stack to grid*/
$("a.stack").on("click", function(){
  $("article").addClass("stack");
});
$("a.grid").on("click", function(){
  $("article").removeClass("stack");
});
