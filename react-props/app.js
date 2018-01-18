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

$("#animateProps").click(function(){
    $(this).css("display", "none")
    $("#reset").css("display", "inline")
    $(".animateHide").css("display", "none")
    $(".animateShow").css("display", "block")
    $(".switch1").animate({
        opacity: 0
    }, function(){
        $(".switch1").each(function(){
            $(this).text($(this).attr("data-switch")).css("color", "#00acc1")
        })
        $(".switch1").animate({
            opacity: 1,
        })
    })
})

$("#reset").click(function(){
    $(this).css("display", "none")
    $("#animateProps").css("display", "inline")
    $(".animateShow").css("display", "none")
    $(".animateHide").css("display", "block")
})

