//Check Off Specific Todos By Clicking
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");      
});

//Click on X to delete todo
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        //grabbing new todo text from input
        var todoText = $(this).val();
        $(this).val("");
        //create a new li and add to ul
        $("ul").append("<li class='tasktext'><span><i class='far fa-trash-alt'></i></span>" + todoText + "</li>");
    }
});

$(".add-btn").click(function(){
    $("input[type='text']").fadeToggle();
	this.textContent === "︿" ? this.textContent = "﹀" : this.textContent = "︿";
});