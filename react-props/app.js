/*global $*/
$(document).ready(function(){
    
});

$("[data-match]").mouseover(function(){
    var match = $(this).attr("data-match")
    $("[data-match='" + match + "']").css("color", "#00acc1")
})

$("[data-match]").mouseout(function(){
    var match = $(this).attr("data-match")
    $("[data-match='" + match + "']").css("color", "#311b92")
})

$(".props").mouseover(function() {
    $(".props").each(function(){
        $(this).addClass($(this).attr("data-color"))
    })
})

$(".props").mouseout(function() {
    $(".props").each(function(){
        $(this).removeClass($(this).attr("data-color"))
    })
})